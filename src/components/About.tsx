import { motion } from 'motion/react';
import { ZapOff, BatteryWarning, TrendingDown, User } from 'lucide-react';
import { Logo } from './Logo';

export const About = () => {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Animated Background Glows */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 50, 0],
            y: [0, -30, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[5%] -left-[10%] w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-tinysky/10 rounded-full blur-[80px] sm:blur-[100px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
            x: [0, -40, 0],
            y: [0, 40, 0]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-[40%] -right-[10%] w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] bg-tinyorange/10 rounded-full blur-[100px] sm:blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.1, 0.3, 0.1],
            x: [0, 30, 0],
            y: [0, 50, 0]
          }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 5 }}
          className="absolute bottom-[10%] left-[20%] w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] bg-tinysky/10 rounded-full blur-[80px] sm:blur-[100px]"
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto py-12 lg:py-20 px-4 sm:px-6 lg:px-8 space-y-24">
      {/* Intro Group */}
      <div className="space-y-12 md:space-y-16">
        <section className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-[55%] lg:w-[60%]"
          >
            <h1 className="text-5xl sm:text-6xl lg:text-[5rem] xl:text-[6rem] font-display font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-tinysky to-tinyorange leading-[1] pb-2">
              Powering the <br />
              Decentralized Future
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:w-[45%] lg:w-[40%] relative"
          >
            {/* Subtle background element to break up the boxiness */}
            <div className="absolute -left-8 -top-8 w-24 h-24 bg-tinysky/20 rounded-full blur-2xl -z-10"></div>
            
            <div className="flex items-center justify-center pt-10">
              <Logo className="w-56 h-56 sm:w-80 sm:h-80 lg:w-96 lg:h-96 opacity-80 drop-shadow-[0_0_15px_rgba(255,107,0,0.3)]" />
            </div>
          </motion.div>
        </section>

        {/* Full-width Mission */}
        <motion.div 
          className="p-8 md:p-10 lg:p-12 bg-tinyorange/20 border border-tinyorange/30 rounded-3xl relative z-10 w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          whileHover={{ scale: 1.01 }}
        >
          <p className="text-2xl md:text-3xl text-white font-bold leading-relaxed text-center max-w-5xl mx-auto">
            Our mission is to place real power in the hands of the people through an affordable, sustainable, and transparent utility marketplace.
          </p>
        </motion.div>
      </div>

      {/* The Problem */}
      <section className="bg-[#0a0a0a] p-8 md:p-12 rounded-[3.5rem] border border-white/10 my-16">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14 text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-tinyorange mb-4">The Problem</h2>
          <p className="text-neutral-400 text-lg">The legacy energy system is failing communities on multiple fronts.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Your money builds the grid you're not using",
              desc: "Ratepayers are financing a grid they use less and less each year. The traditional model forces consumers to pay for massive infrastructure overhead while relying upon it less and less.",
              icon: <ZapOff className="w-8 h-8" />,
              iconBg: "bg-tinysky/10 text-tinysky"
            },
            {
              title: "We are Running Out of Capacity",
              desc: "The grid is running out of capacity. As electrification increases, legacy infrastructure cannot handle the peak loads without costly, slow upgrades.",
              icon: <BatteryWarning className="w-8 h-8" />,
              iconBg: "bg-tinyorange/10 text-tinyorange"
            },
            {
              title: "Your community is being used",
              desc: "Local capital is leaving the neighborhood. Energy payments flow outward to centralized monopolies rather than circulating locally to build wealth.",
              icon: <TrendingDown className="w-8 h-8" />,
              iconBg: "bg-white/5 text-white"
            }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-[#111111] p-8 rounded-[2rem] shadow-sm border border-white/10 hover:shadow-md transition-shadow flex flex-col"
            >
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 ${item.iconBg}`}>
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-tinyorange mb-4">{item.title}</h3>
              <p className="text-neutral-400 font-light leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Thesis */}
      <section className="bg-black text-white p-8 md:p-16 rounded-[3.5rem] relative overflow-hidden my-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-tinyorange/10 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-tinysky/10 via-transparent to-transparent"></div>
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative z-10 max-w-4xl mx-auto space-y-8"
        >
          <div className="flex items-center gap-4 mb-2">
            <h2 className="text-2xl md:text-3xl font-bold text-tinyorange">Our Thesis</h2>
            <div className="h-px bg-white/20 flex-grow rounded-full"></div>
          </div>
          
          <div className="space-y-6">
            <p className="text-2xl md:text-3xl font-light leading-relaxed text-neutral-400">
              We believe the future of energy is{' '}
              <span className="font-semibold text-tinysky">local, decentralized, and community-owned.</span>
            </p>
            
            <p className="text-xl font-light leading-relaxed text-neutral-400">
              Tiny Hub plans to deploy energy solutions through a network of prosumers who generate, store, and share energy locally. We are building a product to serve communities, not extract from them. Unlike legacy utilities, our success is directly tied to the financial benefit of the people and neighborhoods we work with. We will deploy dependable, empowering grid upgrades with a heavy focus on keeping both power and value local.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Meet the Team */}
      <section className="pb-24 mt-12 md:mt-24">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center max-w-3xl mx-auto mb-8 p-8 md:p-10 lg:p-12 bg-tinyorange/20 border border-tinyorange/30 rounded-3xl relative z-10 w-full"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white tracking-tight">Meet the Team</h2>
        </motion.div>

        {/* Confidentiality Note */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="max-w-4xl mx-auto mb-16 px-6 text-center"
        >
          <p className="text-white font-bold text-base md:text-lg italic leading-relaxed">
            Note: Tiny Hub currently has no official co-founders. The advisors shown are legitimate, though their names will remain confidential until public disclosure is mutually agreed upon. Legal advisor profiles are placeholders.
          </p>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="max-w-4xl mx-auto bg-[#111111] p-8 md:p-12 rounded-[2rem] border border-white/10 hover:border-tinyorange/30 transition-colors flex flex-col md:flex-row items-center md:items-start gap-8 mb-16"
        >
          <div className="w-32 h-32 md:w-32 md:h-32 shrink-0 bg-neutral-800 rounded-full flex items-center justify-center text-tinyorange shadow-lg border border-neutral-700">
            <User strokeWidth={1.5} className="w-16 h-16" />
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-3xl font-bold text-white mb-2">Cole Bokowy</h3>
            <div className="text-tinysky font-medium tracking-wide text-sm uppercase mb-4">Founder</div>
            <p className="text-neutral-400 font-light leading-relaxed mb-4">
              Apart from this project, education reform is another topic that peaks my interest. I think it is time for the teachers to remove students from the vacuum we call classrooms. Once someone finds their passion, we should give them real-world problems to solve right from the start.
            </p>
            <p className="text-neutral-500 font-medium tracking-wide text-sm italic">
              "Follow your dreams" - Mac Miller (2010)
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: "Co-Founder",
              role: "Software",
              desc: "Building a hybrid cloud architecture with agentic integrations as we scale toward production.",
              initials: "CF"
            },
            {
              name: "Co-Founder",
              role: "Hardware",
              desc: "Designing the first wave of hardware nodes for local deployment while working on other innovative concepts for the future.",
              initials: "CF"
            },
            {
              name: "Co-Founder",
              role: "Blockchain",
              desc: "Launching a stable coin and blockchain based service that is easily understood and trusted by all users.",
              initials: "CF"
            }
          ].map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-[#111111] p-8 md:p-10 rounded-[2rem] border border-white/10 hover:border-tinyorange/30 transition-colors flex flex-col items-center text-center"
            >
              <div className="w-24 h-24 bg-neutral-800 rounded-full flex items-center justify-center text-tinyorange mb-6 shadow-lg border border-neutral-700">
                <User strokeWidth={1.5} className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
              <div className="text-tinysky font-medium tracking-wide text-sm uppercase mb-4">{member.role}</div>
              <p className="text-neutral-400 font-light leading-relaxed">
                {member.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center max-w-3xl mx-auto mt-24 mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white tracking-tight mb-4">Advisors</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: "Advisor Name",
              role: "Quantitative Advisor",
              desc: "Advising on energy market dynamics, regulatory frameworks, and statistical price modeling.",
              initials: "AN"
            },
            {
              name: "Advisor Name",
              role: "Electrical Advisor",
              desc: "Providing practical guidance on grid infrastructure, electrical systems, and real-world deployment considerations",
              initials: "AN"
            },
            {
              name: "Advisor Name",
              role: "Data Science & NLP Advisor",
              desc: "Providing guidance on natural language processing applications, data visualization, and AI agent design.",
              initials: "AN"
            },
            {
              name: "Advisor Name",
              role: "Software Advisor",
              desc: "Providing guidance on software architecture, best practices, and scalable cloud deployments.",
              initials: "AN"
            },
            {
              name: "Advisor Name",
              role: "Agentic Integration Advisor",
              desc: "Advising on the integration and deployment of autonomous AI agents within our platforms.",
              initials: "AN"
            },
            {
              name: "Advisor Name",
              role: "Executive Advisor",
              desc: "Providing strategic guidance on executive leadership, company vision, and business scaling.",
              initials: "AN"
            }
          ].map((advisor, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-[#111111] p-8 md:p-10 rounded-[2rem] border border-white/10 hover:border-tinysky/30 transition-colors flex flex-col items-center text-center"
            >
              <div className="w-24 h-24 bg-neutral-800 rounded-full flex items-center justify-center text-tinyorange mb-6 shadow-lg border border-neutral-700">
                <User strokeWidth={1.5} className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">{advisor.name}</h3>
              <div className="text-tinysky font-medium tracking-wide text-sm uppercase mb-4">{advisor.role}</div>
              <p className="text-neutral-400 font-light leading-relaxed">
                {advisor.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center max-w-3xl mx-auto mt-24 mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white tracking-tight mb-4">Legal Team</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: "Legal Member",
            },
            {
              name: "Legal Member",
            },
            {
              name: "Legal Member",
            }
          ].map((legal, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-[#111111] p-8 md:p-10 rounded-[2rem] border border-white/10 hover:border-tinysky/30 transition-colors flex flex-col items-center text-center"
            >
              <div className="w-24 h-24 bg-neutral-800 rounded-full flex items-center justify-center text-tinyorange mb-6 shadow-lg border border-neutral-700">
                <User strokeWidth={1.5} className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-bold text-white m-0">{legal.name}</h3>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
    </div>
  );
};
