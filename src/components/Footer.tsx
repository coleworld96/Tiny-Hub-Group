import { Linkedin, Facebook, Instagram, Youtube, Mail } from 'lucide-react';
import { Logo } from './Logo';

const XIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} stroke="none">
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
  </svg>
);

const DiscordIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} stroke="none">
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
  </svg>
);

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-black border-t border-white/10 py-8 px-4 sm:px-6 lg:px-8 mt-auto shrink-0 relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-6">
        <div className="flex flex-col items-center md:items-start">
          <a href="#home" className="flex items-center gap-4">
            <Logo className="w-12 h-12" />
            <span className="font-display font-bold text-3xl tracking-tight text-white">Tiny Hub Energy</span>
          </a>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-10">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
            <a href="https://x.com/TinyHubEnergy" target="_blank" rel="noreferrer" className="text-tinysky hover:text-white transition-colors">
              <XIcon className="w-7 h-7" />
            </a>
            <a href="https://military-classic-memorabilia.com/en/product/poubelle-us-army-1944/" target="_blank" rel="noreferrer" className="text-tinysky hover:text-white transition-colors">
              <Linkedin className="w-7 h-7" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61589103308502" target="_blank" rel="noreferrer" className="text-tinysky hover:text-white transition-colors">
              <Facebook className="w-7 h-7" />
            </a>
            <a href="https://youtu.be/oTowId2CWHA?si=5zQkUVxqst4exnx4" target="_blank" rel="noreferrer" className="text-tinysky hover:text-white transition-colors">
              <Instagram className="w-7 h-7" />
            </a>
            <a href="https://www.youtube.com/channel/UC6SqT74ifQ1wOai-564_aPw" target="_blank" rel="noreferrer" className="text-tinysky hover:text-white transition-colors">
              <Youtube className="w-7 h-7" />
            </a>
            <a href="https://t.co/LTbznSB3fp" target="_blank" rel="noreferrer" className="text-tinysky hover:text-white transition-colors">
              <DiscordIcon className="w-7 h-7" />
            </a>
          </div>
          <div className="flex items-center font-medium">
            <a href="#contact" className="bg-tinyorange hover:bg-[#e06510] text-white px-8 py-3 rounded-full transition-all shadow-lg shadow-tinyorange/20 transform hover:-translate-y-1 hover:shadow-tinyorange/40 font-bold tracking-wide whitespace-nowrap">Contact Us</a>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-neutral-500 text-sm">
          &copy; {currentYear} Tiny Hub. All rights reserved.
        </p>
        <div className="flex gap-4 text-sm text-neutral-500">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};
