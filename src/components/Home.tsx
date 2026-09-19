import { useState } from 'react';
import { motion } from 'motion/react';
import { Logo } from './Logo';
import { ContactModal } from './ContactModal';

export const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [modalType, setModalType] = useState<'network' | 'token'>('network');

  const openModal = (type: 'network' | 'token') => {
    setModalType(type);
    setIsModalOpen(true);
  };

  return (
    <section className="relative w-full max-w-7xl mx-auto flex-1 flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-8 pt-8 lg:pt-0 min-h-[400px]">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-white/5 rounded-full blur-[80px] -z-10 pointer-events-none" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[200px] sm:w-[350px] h-[200px] sm:h-[350px] bg-tinyorange/10 rounded-full blur-[60px] -z-10 pointer-events-none" />

      {/* Hero Content (Left) */}
      <div className="w-full lg:w-1/2 text-center lg:text-left relative z-10 mt-8 lg:mt-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-tinysky to-tinyorange mb-3 sm:mb-4">
              Your Community's <br className="hidden sm:block" />
              New Energy Hub
            </h1>
          <p className="mt-2 md:mt-4 text-base sm:text-lg md:text-xl text-neutral-400 font-bold max-w-2xl mx-auto lg:mx-0 mb-6 sm:mb-8 md:mb-10 lg:mb-12">
            An energy sharing network built to benefit your community and place real power in the hands of the people. We are offering powerful energy solutions for all Prosumers, Consumers, and Partners under one seamless hub.
          </p>

          {/* Call to Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 w-full sm:w-auto">
            <button 
              onClick={() => openModal('network')}
              className="w-full sm:w-auto min-w-[200px] px-6 py-3 lg:py-4 bg-tinyorange hover:bg-[#e06510] text-white rounded-full font-medium text-base lg:text-lg transition-transform transform hover:scale-105 active:scale-95 shadow-lg shadow-tinyorange/20"
            >
              Coverage Map: USA
            </button>
            <button 
              onClick={() => openModal('token')}
              className="w-full sm:w-auto min-w-[200px] px-6 py-3 lg:py-4 bg-tinyorange hover:bg-[#e06510] text-white rounded-full font-medium text-base lg:text-lg transition-transform transform hover:scale-105 active:scale-95 shadow-lg shadow-tinyorange/20"
            >
              $TWh White Paper
            </button>
          </div>
        </motion.div>
      </div>

      {/* Huge Right Logo */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="w-full lg:w-1/2 relative z-10 drop-shadow-2xl flex justify-center lg:justify-end shrink-0 md:mr-10 lg:mr-0"
      >
        <Logo className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px]" />
      </motion.div>

      <ContactModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={modalType === 'network' ? "Coverage Map: USA" : "$TWh White Paper"}
        description=""
        type="loading"
      />
    </section>
  );
};
