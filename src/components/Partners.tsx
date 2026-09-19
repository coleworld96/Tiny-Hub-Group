import { motion } from 'motion/react';
import { Tractor, Landmark, Globe2, ArrowRight, Wheat, Users, Building2, Factory } from 'lucide-react';
import { useState } from 'react';
import { ContactModal } from './ContactModal';

export const Partners = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");

  const handleOpenModal = (title: string) => {
    setModalTitle(title);
    setIsModalOpen(true);
  };

  return (
    <div className="relative w-full overflow-hidden pb-20">
      {/* Background Glows */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] bg-tinyorange/10 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="absolute bottom-[20%] left-[-10%] w-[500px] h-[500px] bg-tinysky/10 rounded-full blur-[120px]"
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 pt-12">
        
        {/* Hero Section & Cooperative Foundations */}
        <section className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-tinysky to-tinyorange mb-12 tracking-tight leading-tight">
              Redesigning the Grid <br className="hidden sm:block" /> 
              as One Nation
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 bg-tinysky/10 border border-tinysky/20 p-8 md:p-12 rounded-[2.5rem] backdrop-blur-sm shadow-xl shadow-tinysky/5"
          >
            <div className="flex justify-center items-center gap-3 mb-6">
              <Tractor className="w-10 h-10 text-tinysky" />
              <h3 className="text-3xl md:text-5xl font-display font-bold text-white">Cooperative Foundations</h3>
            </div>
            <p className="text-lg md:text-xl text-neutral-300 font-light leading-relaxed mb-6">
              At the heart of the decentralized network is the cooperative structure. We partner directly with private farms, rural collectives, and independent organizations to transform underutilized land and resources into powerful energy generation nodes. 
            </p>
            <p className="text-lg md:text-xl text-neutral-300 font-light leading-relaxed">
              By aggregating these micro-resources, cooperatives can reliably power their own operations and sell excess capacity back to the network, achieving total energy sovereignty while bolstering the surrounding grid.
            </p>
          </motion.div>
        </section>

        {/* Co-op Structure (Private Farms & Agricultural) */}
        <section className="flex flex-col gap-16">
          <div className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-[#111111] p-8 rounded-3xl shadow-sm border border-white/10 flex flex-col justify-start items-start group"
              >
                <div className="p-4 bg-[#0a0a0a] border border-tinyorange/20 text-tinyorange rounded-xl mb-6"><Wheat className="w-8 h-8" /></div>
                <h4 className="text-xl font-bold text-tinyorange mb-3">Agricultural Collectives</h4>
                <p className="text-neutral-400 font-light leading-relaxed">Empowering private farms with resilient solar (solar + storage) solutions to come together, share resource pools, and provide for their community.</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-[#111111] p-8 rounded-3xl shadow-sm border border-white/10 flex flex-col justify-start items-start group"
              >
                <div className="p-4 bg-[#0a0a0a] border border-tinysky/20 text-tinysky rounded-xl mb-6"><Users className="w-8 h-8" /></div>
                <h4 className="text-xl font-bold text-tinysky mb-3">Energy Cooperatives</h4>
                <p className="text-neutral-400 font-light leading-relaxed">Community-owned infrastructure that keeps energy wealth within local borders.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-[#111111] p-8 rounded-3xl shadow-sm border border-white/10 flex flex-col justify-start items-start group"
              >
                <div className="p-4 bg-[#0a0a0a] border border-white/20 text-white rounded-xl mb-6"><Factory className="w-8 h-8" /></div>
                <h4 className="text-xl font-bold text-white mb-3">A Cyber Physical Factory</h4>
                <p className="text-neutral-400 font-light leading-relaxed">Integrating heavy industrial machinery into flexible, decentralized energy flows.</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Civic & Government */}
        <section className="bg-[#0a0a0a] rounded-[3rem] p-8 md:p-16 border border-white/10 relative overflow-hidden">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="relative z-10 flex flex-col md:flex-row gap-12 items-center"
          >
             <div className="w-full lg:w-5/12 flex flex-col items-center">
                <div className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-tinysky/10 border border-tinysky/20 text-tinysky text-sm font-bold tracking-wide uppercase mb-6">
                  <Landmark className="w-5 h-5" /> Civic Partnerships
                </div>
                <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-8 text-center leading-tight">
                  Municipalities & <br/> Governments
                </h3>
                <div className="text-center space-y-6">
                  <p className="text-lg md:text-xl text-white font-bold leading-relaxed">
                    Towns, districts, and municipalities are facing unprecedented infrastructure challenges. We provide civic leaders with the tools to upgrade their local grids without the massive capital expenditure of traditional utility models.
                  </p>
                  <p className="text-lg md:text-xl text-white font-bold leading-relaxed">
                    Partnering with Tiny Hub enables local governments to meet sustainability mandates, increase civic resilience against outages, and provide cheaper, locally-sourced energy directly to their constituencies.
                  </p>
                </div>
             </div>
             <div className="w-full lg:w-7/12 grid grid-cols-1 sm:grid-cols-2 gap-6 pl-0 lg:pl-8 mt-8 lg:mt-0">
                {[
                  "Community Microgrid Example",
                  "Public Facility Power",
                  "Disaster Resilience",
                  "Smart City Integration"
                ].map((feature, i) => (
                  <div key={i} onClick={() => handleOpenModal(feature)} className="bg-[#111111] p-8 md:p-10 rounded-[2.5rem] shadow-lg border border-white/10 flex flex-col justify-between group hover:-translate-y-2 hover:border-tinyorange/50 hover:shadow-tinyorange/10 transition-all duration-300 hover:bg-[#1a1a1a] cursor-pointer min-h-[180px] md:min-h-[220px]">
                    <span className="font-semibold text-xl md:text-2xl text-neutral-100 group-hover:text-tinyorange transition-colors pr-4">{feature}</span>
                    <div className="flex justify-end mt-4">
                      <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-tinyorange group-hover:border-tinyorange transition-all duration-300 shadow-md">
                        <ArrowRight className="w-6 h-6 text-neutral-400 group-hover:text-black group-hover:translate-x-1 transition-all duration-300" />
                      </div>
                    </div>
                  </div>
                ))}
             </div>
          </motion.div>
        </section>

        {/* Enterprise & Global Vision (Hint) */}
        <section className="text-center relative">
          <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="max-w-3xl mx-auto bg-black text-white rounded-[2.5rem] p-10 md:p-14 shadow-2xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-800 via-slate-900 to-slate-900 pointer-events-none"></div>
            <div className="relative z-10 flex flex-col items-center">
              <Globe2 className="w-12 h-12 text-tinysky mb-6 opacity-80" />
              <h3 className="text-2xl md:text-3xl font-display font-bold mb-4">Enterprise & The Global Vision</h3>
              <p className="text-white font-bold text-lg md:text-xl leading-relaxed mb-8">
                As the network scales, the aggregation of these decentralized nodes unlocks enterprise-grade capacities. We are laying the groundwork for strategic partnerships with large-scale industrial consumers and multinational corporations seeking transparent, verifiable, and massive-scale renewable energy supply across borders.
              </p>
            </div>
          </motion.div>
        </section>

        <ContactModal 
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title={modalTitle}
          description=""
          type="loading"
        />

      </div>
    </div>
  );
};
