import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

export const Investors = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Target date: July 1, 2026 00:01:00 CST (UTC-06:00). 
    const targetDate = new Date('2026-07-01T00:01:00-06:00').getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    };

    updateTimer();
    const timerId = setInterval(updateTimer, 1000);
    return () => clearInterval(timerId);
  }, []);

  return (
    <div className="relative w-full overflow-hidden min-h-screen">
      {/* Background Glows */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div
           animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.4, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 right-0 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] bg-tinysky/10 rounded-full blur-[100px] sm:blur-[120px]"
        />
        <motion.div
           animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] bg-tinyorange/10 rounded-full blur-[100px] sm:blur-[120px]"
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center items-center pt-32 pb-20">
        
        {/* Hero Section */}
        <section className="text-center w-full flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-tinysky to-tinyorange mb-12 tracking-tight leading-tight">
              Invest in the <br className="hidden sm:block" /> 
              Decentralized Grid
            </h1>
            
            {/* Countdown Timer */}
            <div className="mb-6">
              <h2 className="text-xl sm:text-2xl font-medium text-neutral-300 tracking-wide">
                Tiny Hub Energy: Seed Funding Presentation
              </h2>
            </div>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mt-6">
              {[
                { label: 'Days', value: timeLeft.days },
                { label: 'Hours', value: timeLeft.hours },
                { label: 'Minutes', value: timeLeft.minutes },
                { label: 'Seconds', value: timeLeft.seconds }
              ].map((time, index) => (
                <div key={index} className="flex flex-col items-center bg-black/40 backdrop-blur-md rounded-2xl border border-white/10 p-4 sm:p-6 min-w-[80px] sm:min-w-[120px]">
                  <span className="text-4xl sm:text-6xl font-mono font-bold text-white mb-2">{time.value.toString().padStart(2, '0')}</span>
                  <span className="text-xs sm:text-sm uppercase tracking-widest text-neutral-400 font-medium">{time.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
};
