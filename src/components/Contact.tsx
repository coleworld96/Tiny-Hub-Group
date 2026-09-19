import { motion } from 'motion/react';
import { Mail, MapPin, Phone } from 'lucide-react';

export const Contact = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
      <div className="text-center max-w-3xl mx-auto mb-16 p-8 md:p-12 bg-tinyorange/20 border border-tinyorange/30 rounded-3xl relative z-10 w-full">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-white tracking-tight mb-4">Contact Us</h2>
        <p className="text-neutral-400 text-lg">We would love to hear from you. Get in touch with our team.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        <motion.div
           initial={{ opacity: 0, x: -20 }}
           animate={{ opacity: 1, x: 0 }}
           className="bg-[#111111] p-8 md:p-10 rounded-[2rem] border border-white/10"
        >
          <h3 className="text-2xl font-bold text-white mb-6">Send us a message</h3>
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-neutral-400 mb-2">Name</label>
              <input type="text" className="w-full px-4 py-3 rounded-xl border border-white/10 outline-none focus:border-tinyorange bg-black text-white" placeholder="John Doe" />
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-400 mb-2">Email</label>
              <input type="email" className="w-full px-4 py-3 rounded-xl border border-white/10 outline-none focus:border-tinyorange bg-black text-white" placeholder="john@example.com" />
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-400 mb-2">Message</label>
              <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-white/10 outline-none focus:border-tinyorange bg-black text-white" placeholder="How can we help you?"></textarea>
            </div>
            <button type="button" className="w-full py-4 bg-tinyorange text-white rounded-xl font-medium transition-transform transform hover:scale-[1.02] active:scale-[0.98]">
              Send Message
            </button>
          </form>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, x: 20 }}
           animate={{ opacity: 1, x: 0 }}
           className="space-y-8"
        >
          <div className="bg-[#111111] p-8 rounded-[2rem] border border-white/10 flex items-start gap-4">
            <div className="w-12 h-12 bg-neutral-800 rounded-full flex items-center justify-center text-tinyorange shrink-0">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white mb-1">Email</h4>
              <p className="text-neutral-400">contact@tinyhub.example.com</p>
            </div>
          </div>
          
          <div className="bg-[#111111] p-8 rounded-[2rem] border border-white/10 flex items-start gap-4">
            <div className="w-12 h-12 bg-neutral-800 rounded-full flex items-center justify-center text-tinyorange shrink-0">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white mb-1">Office</h4>
              <p className="text-neutral-400">123 Energy Way<br />Sustainability City, SC 12345</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
