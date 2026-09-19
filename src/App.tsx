import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { Logo } from './components/Logo';
import { Home } from './components/Home';
import { NetworkBackground } from './components/NetworkBackground';
import { About } from './components/About';
import { Investors } from './components/Investors';
import { Partners } from './components/Partners';
import { Prosumers } from './components/Prosumers';
import { Consumers } from './components/Consumers';
import { Contact } from './components/Contact';
import { LoadingScreen } from './components/LoadingScreen';
import { Footer } from './components/Footer';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const [isLoading, setIsLoading] = useState(true);

  // Handle hash based routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        setCurrentPage(hash);
      } else {
        setCurrentPage('home');
      }
    };

    // Initial check
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navLinks = ["About", "Prosumers", "Consumers", "Partners", "Investors", "Research"];

  return (
    <div className="h-[100dvh] w-full overflow-hidden flex flex-col bg-black text-white font-sans selection:bg-tinyorange selection:text-black relative">
      <AnimatePresence>
        {isLoading && (
          <LoadingScreen onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      <NetworkBackground />
      {/* Navigation */}
      <nav className="shrink-0 relative z-50 bg-black/80 backdrop-blur-md border-b border-white/10 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <a href="#home" className="flex-shrink-0 flex items-center gap-3 cursor-pointer">
              <Logo className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14" />
              <span className="font-display font-bold text-2xl lg:text-3xl tracking-tight text-white">Tiny Hub</span>
            </a>
            
            {/* Desktop Nav */}
            <div className="hidden md:block">
              <div className="ml-12 flex items-baseline space-x-6 lg:space-x-10">
                {navLinks.map((link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    className={`px-3 lg:px-4 py-2 rounded-md text-sm lg:text-base font-medium transition-colors ${
                      currentPage === link.toLowerCase() 
                        ? 'text-tinyorange' 
                        : 'text-neutral-400 hover:text-white'
                    }`}
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-neutral-400 hover:text-white focus:outline-none p-2"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        <motion.div 
          className={`md:hidden overflow-hidden ${mobileMenuOpen ? "border-b border-white/10 bg-black" : ""}`}
          initial={false}
          animate={{ height: mobileMenuOpen ? "auto" : 0 }}
        >
          <div className="px-4 pt-2 pb-6 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-3 rounded-md text-base font-medium ${
                  currentPage === link.toLowerCase()
                  ? 'text-tinyorange bg-white/5'
                  : 'text-neutral-400 hover:text-white'
                }`}
              >
                {link}
              </a>
            ))}
          </div>
        </motion.div>
      </nav>

      <main className="flex-1 min-h-0 relative flex flex-col items-center overflow-y-auto overflow-x-hidden w-full">
        {/* Background Dimming Overlay for Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileMenuOpen(false)}
              className="absolute inset-0 z-40 bg-black/60 md:hidden backdrop-blur-sm cursor-pointer"
            />
          )}
        </AnimatePresence>

        <AnimatePresence mode="wait">
          {currentPage === 'home' && (
            <motion.div
               key="home"
               initial={{ opacity: 0, scale: 0.85 }}
               animate={{ opacity: 1, scale: 1 }}
               exit={{ opacity: 0, scale: 1.1 }}
               transition={{ duration: 0.5, ease: "easeOut" }}
               className="w-full flex-1 flex flex-col px-4 py-6"
            >
               <Home />
            </motion.div>
          )}
          {currentPage === 'about' && (
             <motion.div
               key="about"
               initial={{ opacity: 0, y: 10 }}
               animate={{ opacity: 1, y: 0 }}
               exit={{ opacity: 0, y: -10 }}
               transition={{ duration: 0.3 }}
               className="w-full"
             >
               <About />
             </motion.div>
          )}
          {currentPage === 'investors' && (
             <motion.div
               key="investors"
               initial={{ opacity: 0, y: 10 }}
               animate={{ opacity: 1, y: 0 }}
               exit={{ opacity: 0, y: -10 }}
               transition={{ duration: 0.3 }}
               className="w-full"
             >
               <Investors />
             </motion.div>
          )}
          {currentPage === 'partners' && (
             <motion.div
               key="partners"
               initial={{ opacity: 0, y: 10 }}
               animate={{ opacity: 1, y: 0 }}
               exit={{ opacity: 0, y: -10 }}
               transition={{ duration: 0.3 }}
               className="w-full"
             >
               <Partners />
             </motion.div>
          )}
          {currentPage === 'prosumers' && (
             <motion.div
               key="prosumers"
               initial={{ opacity: 0, y: 10 }}
               animate={{ opacity: 1, y: 0 }}
               exit={{ opacity: 0, y: -10 }}
               transition={{ duration: 0.3 }}
               className="w-full"
             >
               <Prosumers />
             </motion.div>
          )}
          {currentPage === 'consumers' && (
             <motion.div
               key="consumers"
               initial={{ opacity: 0, y: 10 }}
               animate={{ opacity: 1, y: 0 }}
               exit={{ opacity: 0, y: -10 }}
               transition={{ duration: 0.3 }}
               className="w-full"
             >
               <Consumers />
             </motion.div>
          )}
          {currentPage === 'contact' && (
             <motion.div
               key="contact"
               initial={{ opacity: 0, y: 10 }}
               animate={{ opacity: 1, y: 0 }}
               exit={{ opacity: 0, y: -10 }}
               transition={{ duration: 0.3 }}
               className="w-full flex-1 flex flex-col"
             >
               <Contact />
             </motion.div>
          )}
          {/* Fallback for other routes */}
          {currentPage !== 'home' && currentPage !== 'about' && currentPage !== 'investors' && currentPage !== 'partners' && currentPage !== 'prosumers' && currentPage !== 'consumers' && currentPage !== 'contact' && (
             <motion.div
               key="other"
               initial={{ opacity: 0, y: 10 }}
               animate={{ opacity: 1, y: 0 }}
               exit={{ opacity: 0, y: -10 }}
               transition={{ duration: 0.3 }}
               className="w-full flex-1 flex flex-col items-center justify-center p-8 text-center"
             >
             </motion.div>
          )}
        </AnimatePresence>
        <Footer />
      </main>
    </div>
  );
}
