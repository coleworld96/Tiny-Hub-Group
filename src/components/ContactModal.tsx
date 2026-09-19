import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle2 } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  type: 'email' | 'full' | 'loading'; // Added loading type
}

export const ContactModal = ({ isOpen, onClose, title, description, type }: ContactModalProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsSuccess(false);
      setIsSubmitting(false);
    }
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData.entries());
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title,
          data
        })
      });

      const responseData = await response.json();

      if (!response.ok) {
        throw new Error(responseData.error || 'Failed to submit');
      }

      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => {
        onClose();
        setIsSuccess(false);
      }, 2000);
      
    } catch (err: any) {
      console.error("Submission error", err);
      alert(`Error submitting request: ${err.message || 'Unknown error'}. Please check that backend services are configured.`);
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-lg bg-[#111111] rounded-3xl shadow-2xl overflow-hidden z-10 my-auto"
          >
            {isSuccess ? (
              <div className="p-10 flex flex-col items-center justify-center text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                >
                  <CheckCircle2 className="w-20 h-20 text-tinyorange mb-6" />
                </motion.div>
                <h3 className="text-2xl font-display font-bold text-white mb-2">Success!</h3>
                <p className="text-neutral-500">We've received your request and will be in touch shortly.</p>
              </div>
            ) : (
              <>
                <div className="flex items-center justify-between p-6 border-b border-white/10">
                  <h3 className="text-xl font-bold text-white">{title}</h3>
                  <button
                    onClick={onClose}
                    className="p-2 text-neutral-400 hover:text-neutral-400 hover:bg-white/5 rounded-full transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                
                {type === 'loading' ? (
                  <div className="p-12 flex flex-col items-center justify-center">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                      className="mb-8"
                    >
                      <Logo className="w-32 h-32" />
                    </motion.div>
                    <h4 className="text-2xl font-bold font-display text-white mb-2">Coming Soon</h4>
                    <p className="text-neutral-400 text-center max-w-xs">{description}</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="p-6 space-y-4">
                    <p className="text-neutral-400 mb-6">{description}</p>
                    
                    {type === 'full' && (
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-neutral-300 mb-1">Full Name</label>
                          <input required name="FullName" type="text" className="w-full px-4 py-3 rounded-xl border border-white/20 outline-none focus:border-tinyorange focus:ring-2 focus:ring-tinyorange/20" placeholder="John Doe" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-neutral-300 mb-1">Company / Organization (Optional)</label>
                          <input name="Company" type="text" className="w-full px-4 py-3 rounded-xl border border-white/10 outline-none focus:border-tinyorange focus:ring-2 focus:ring-tinyorange/20" placeholder="Acme Corp" />
                        </div>
                      </div>
                    )}

                    <div>
                      <label className="block text-sm font-medium text-neutral-400 mb-1">Email Address</label>
                      <input required name="Email" type="email" className="w-full px-4 py-3 rounded-xl border border-white/10 outline-none focus:border-tinyorange focus:ring-2 focus:ring-tinyorange/20" placeholder="john@example.com" />
                    </div>

                    {type === 'email' && (
                      <div>
                        <label className="block text-sm font-medium text-neutral-400 mb-1">Zip / Postal Code</label>
                        <input required name="ZipCode" type="text" className="w-full px-4 py-3 rounded-xl border border-white/10 outline-none focus:border-tinyorange focus:ring-2 focus:ring-tinyorange/20" placeholder="12345" />
                      </div>
                    )}

                    <div className="pt-4">
                      <button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="w-full py-4 bg-tinyink hover:bg-white/5 text-white rounded-xl font-medium transition-colors disabled:opacity-70 flex items-center justify-center"
                      >
                        {isSubmitting ? (
                          <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        ) : (
                          "Submit Request"
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
