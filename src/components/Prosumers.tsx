import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sun, BatteryCharging, DollarSign, Activity, Zap, ShieldCheck, ChevronDown, Settings, BarChart } from 'lucide-react';
import { ContactModal } from './ContactModal';

export const Prosumers = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [solarSize, setSolarSize] = useState(5);
  const [batterySize, setBatterySize] = useState(10);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const monthlyEarnings = (solarSize * 18) + (batterySize * 6);

  const faqs = [
    {
      q: "Is my specific solar inverter or battery compatible?",
      a: "Yes, our Edge Node is hardware-agnostic. It communicates via standard protocols (Modbus, API, SUNSPEC) to interface securely with Tesla, Enphase, SolarEdge, and other major brands."
    },
    {
      q: "Will Tiny Hub drain my battery when I need it?",
      a: "Never. You maintain absolute control over your capacity limits. Tiny Hub only sells excess energy above the threshold you set through our mobile app."
    },
    {
      q: "How and when do I get paid?",
      a: "Payments are settled instantly using secure, low-fee smart contracts. You can withdraw your earnings to a traditional bank account or digital wallet at any time."
    },
    {
      q: "What if there is a grid outage?",
      a: "During localized grid outages, the network optimizes for micro-grid stability. Your home's critical loads are prioritized first, ensuring your power stays on."
    }
  ];

  return (
    <div className="relative w-full overflow-hidden pb-20">
      {/* Background Glows */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-5%] left-[-10%] w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] bg-tinyorange/20 rounded-full blur-[100px] sm:blur-[120px]"
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 pt-12">
        {/* Hero Section */}
        <section className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-tinyorange to-tinysky mb-8 tracking-tight leading-tight">
              Turn Your Home Into a <br className="hidden sm:block" /> 
              Power Plant
            </h1>
            <div className="bg-tinyorange/20 border border-tinyorange/30 rounded-3xl p-8">
              <p className="text-lg md:text-xl text-white font-bold leading-relaxed">
                If you have solar panels, a battery wall, or an EV, you are already a hardware owner. Tiny Hub lets you become a node on our decentralized network, allowing you to automatically sell your excess energy for maximum profit.
              </p>
            </div>
          </motion.div>
        </section>

        {/* Value Props */}
        <section className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <DollarSign className="w-8 h-8"/>,
              title: "Monetize Your Assets",
              desc: "Don't just send power back to the traditional grid for pennies. Sell it directly to your neighbors at fair market rates."
            },
            {
              icon: <Activity className="w-8 h-8"/>,
              title: "Dynamic Smart Routing",
              desc: "Our edge nodes predict demand spikes and automatically route your stored energy when prices are highest."
            },
            {
              icon: <ShieldCheck className="w-8 h-8"/>,
              title: "Secure & Verifiable",
              desc: "Every watt generated and sold is recorded on the blockchain ledger, ensuring instant settlements and absolute transparency."
            }
          ].map((feature, i) => (
             <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-[#111111] p-8 rounded-3xl shadow-sm border border-white/10 flex flex-col items-start hover:shadow-md transition-shadow"
             >
                <div className="p-3 bg-tinyorange/10 text-tinyorange rounded-2xl mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-neutral-400 font-light leading-relaxed">{feature.desc}</p>
             </motion.div>
          ))}
        </section>

        {/* Dashboard Preview / Hardware */}
        <section className="bg-black rounded-[3rem] p-8 md:p-16 text-white border border-white/10 relative overflow-hidden flex flex-col lg:flex-row items-center gap-12 shadow-2xl">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-tinyorange/10 via-slate-900 to-slate-900 pointer-events-none"></div>
            
            <motion.div 
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="w-full lg:w-1/2 relative z-10"
            >
              <h3 className="text-3xl md:text-4xl font-display font-bold mb-6">The Edge Node</h3>
              <p className="text-neutral-400 font-light text-lg leading-relaxed mb-6">
                Our proprietary Edge Node plugs directly into your home's energy system (inverter or smart meter). It securely bridges your hardware to the decentralized network, requiring zero manual management.
              </p>
              <ul className="space-y-4 mb-8">
                 {[
                   "Universally compatible with major solar/battery brands",
                   "Real-time telemetry and profit tracking",
                   "Bank-grade encryption",
                   "Sub-second market execution"
                 ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-neutral-400">
                      <Zap className="w-5 h-5 text-tinyorange flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                 ))}
              </ul>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="px-8 py-4 bg-[#111111] text-white hover:bg-white/5 rounded-full font-medium transition-transform transform hover:scale-105 active:scale-95 flex items-center justify-center"
              >
                Reserve Your Node
              </button>
            </motion.div>
            
            <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="w-full lg:w-1/2 relative z-10"
            >
              <div className="bg-white/5 backdrop-blur-md rounded-[2rem] p-6 sm:p-8 border border-white/10 shadow-2xl">
                 <div className="flex justify-between items-start mb-8">
                    <div>
                      <p className="text-neutral-400 text-sm mb-1 uppercase tracking-wider font-semibold">Today's Earnings</p>
                      <h4 className="text-4xl font-display font-bold text-white">$14.52</h4>
                    </div>
                    <div className="text-right">
                      <p className="text-neutral-400 text-sm mb-1 uppercase tracking-wider font-semibold">Generated</p>
                      <h4 className="text-4xl font-display font-bold text-tinyorange">24.5<span className="text-xl text-neutral-500 font-normal ml-1">kWh</span></h4>
                    </div>
                 </div>
                 {/* Mock Chart */}
                 <div className="w-full h-40 flex items-end gap-1 sm:gap-2 border-b border-white/10 pb-2">
                    {[30, 40, 25, 50, 80, 60, 90, 75, 45, 65, 85, 100].map((h, i) => (
                      <motion.div 
                         key={i}
                         initial={{ height: 0 }}
                         whileInView={{ height: `${h}%` }}
                         viewport={{ once: true }}
                         transition={{ duration: 0.5, delay: i * 0.05 }}
                         className="flex-1 bg-gradient-to-t from-tinyorange/20 to-tinyorange rounded-t-sm" 
                      />
                    ))}
                 </div>
                 <div className="flex justify-between text-xs text-neutral-400 mt-3 font-mono">
                    <span>06:00</span>
                    <span>12:00</span>
                    <span>18:00</span>
                 </div>
              </div>
            </motion.div>
        </section>

        {/* How It Works (4 Steps) */}
        <section className="pt-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center text-white mb-12">How It Works</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Connect Hardware", desc: "Plug our Edge Node into your existing solar, EV, or battery system." },
              { title: "Set Preferences", desc: "Use the Tiny Hub app to set battery reserves and pricing minimums." },
              { title: "Smart Matching", desc: "Our algorithm automatically bids your excess energy into the local market." },
              { title: "Get Paid", desc: "Instantly receive payment when other consumers use your power." }
            ].map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative bg-[#111111] p-8 rounded-3xl border border-white/5 text-center flex flex-col items-center"
              >
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-tinyorange font-bold text-xl mb-6">
                  {i + 1}
                </div>
                <h4 className="text-white font-bold text-lg mb-3">{step.title}</h4>
                <p className="text-neutral-500 text-sm">{step.desc}</p>
                {i !== 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-[1px] bg-white/10" />
                )}
              </motion.div>
            ))}
          </div>
        </section>

        {/* Interactive Earnings Calculator */}
        <section className="bg-gradient-to-br from-[#151515] to-[#0a0a0a] rounded-[3rem] p-8 md:p-12 border border-white/10 mt-12 grid md:grid-cols-2 gap-12 items-center relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-tinyorange/10 rounded-full blur-[100px]" />
             <div className="relative z-10">
               <h3 className="text-3xl font-bold text-white mb-4">Calculate Your Earnings</h3>
               <p className="text-neutral-400 mb-8">Move the sliders below to see your potential recurring revenue as a Tiny Hub Prosumer.</p>
               
               <div className="space-y-8">
                 <div>
                   <div className="flex justify-between text-sm mb-4">
                     <span className="text-white font-semibold">Solar Array Size</span>
                     <span className="text-tinyorange font-bold">{solarSize} kW</span>
                   </div>
                   <input 
                     type="range" min="1" max="25" value={solarSize} 
                     onChange={(e) => setSolarSize(parseInt(e.target.value))}
                     className="w-full accent-tinyorange h-2 bg-neutral-800 rounded-lg appearance-none cursor-pointer"
                   />
                 </div>
                 
                 <div>
                   <div className="flex justify-between text-sm mb-4">
                     <span className="text-white font-semibold">Battery Capacity</span>
                     <span className="text-tinyorange font-bold">{batterySize} kWh</span>
                   </div>
                   <input 
                     type="range" min="0" max="40" value={batterySize} 
                     onChange={(e) => setBatterySize(parseInt(e.target.value))}
                     className="w-full accent-tinyorange h-2 bg-neutral-800 rounded-lg appearance-none cursor-pointer"
                   />
                 </div>
               </div>
             </div>

             <div className="bg-black/50 backdrop-blur-sm rounded-[2rem] p-8 border border-white/5 text-center relative z-10 flex flex-col justify-center items-center h-full min-h-[250px]">
               <p className="text-neutral-500 uppercase tracking-widest text-sm font-semibold mb-2">Estimated Monthly Income</p>
               <h4 className="text-6xl font-display font-bold text-white mb-4">
                 ${monthlyEarnings}
               </h4>
               <p className="text-neutral-600 text-xs mt-2 max-w-[200px] mx-auto">
                 *Estimates based on regional averages and real-time market trading rates.
               </p>
             </div>
        </section>

        {/* FAQ */}
        <section className="max-w-3xl mx-auto pt-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center text-white mb-10">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-[#111111] border border-white/10 rounded-2xl overflow-hidden transition-all duration-300">
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex justify-between items-center p-6 text-left active:bg-white/5 transition-colors"
                >
                  <span className="font-semibold text-white pr-4">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-neutral-500 transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                       <div className="p-6 pt-0 text-neutral-400 text-sm leading-relaxed border-t border-white/5 mt-2">
                         {faq.a}
                       </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </section>
      </div>

      <ContactModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Reserve Your Node"
        description="Join the waitlist to receive your Edge Node based on inventory in your area."
        type="email"
      />
    </div>
  );
};
