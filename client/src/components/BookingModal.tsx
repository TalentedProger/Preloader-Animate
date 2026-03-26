import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, Phone } from "lucide-react";
import { FaWhatsapp, FaTelegramPlane } from "react-icons/fa";
import imgHero from "@assets/stock_images/luxury_travel_aesthe_f4830e36.jpg";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [consent, setConsent] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !consent) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setName("");
      setPhone("");
      setConsent(false);
      onClose();
    }, 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Modal Container */}
          <motion.div
            className="relative z-10 w-[95vw] max-w-[1100px] max-h-[90vh] overflow-hidden rounded-2xl bg-[#0A0A0A] border border-white/10 shadow-2xl"
            initial={{ scale: 0.9, opacity: 0, y: 40 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 40 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 z-20 w-10 h-10 rounded-full border border-white/20 bg-white/5 backdrop-blur-md flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all"
            >
              <X size={18} />
            </button>

            <div className="flex flex-col md:flex-row">
              {/* Left Side — Image */}
              <div className="relative hidden md:block md:w-[45%] min-h-[600px]">
                <img
                  src={imgHero}
                  alt="Luxury Travel"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0A0A0A]/80" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent" />

                {/* Branding overlay */}
                <div className="absolute bottom-8 left-8 z-10">
                  <p className="text-[10px] uppercase tracking-[0.35em] text-white/40 mb-1">
                    Premium Travel Experiences
                  </p>
                  <h3 className="text-3xl font-display font-black tracking-tight">
                    <span className="text-white">LUXE</span>
                    <span className="text-white/40">.</span>
                  </h3>
                </div>

                {/* Decorative light */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-white/5 rounded-full blur-3xl" />
              </div>

              {/* Right Side — Form */}
              <div className="flex-1 p-8 md:p-12 flex flex-col justify-center">
                <div className="max-w-md mx-auto w-full">
                  <p className="text-xs uppercase tracking-[0.3em] text-white/40 mb-3">
                    Need assistance?
                  </p>
                  <h2 className="text-3xl md:text-4xl font-display font-black tracking-tight leading-tight mb-8">
                    <span className="text-white">FILL OUT THE FORM</span>
                    <br />
                    <span className="text-white">& WE'LL </span>
                    <span className="text-white/60">GET BACK</span>
                  </h2>

                  {submitted ? (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="py-12 text-center"
                    >
                      <div className="w-16 h-16 rounded-full border-2 border-white/20 flex items-center justify-center mx-auto mb-4">
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.2, type: "spring" }}
                          className="text-2xl"
                        >
                          ✓
                        </motion.div>
                      </div>
                      <p className="text-white/70 text-lg">Thank you! We'll contact you shortly.</p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <input
                        type="text"
                        placeholder="Your Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full h-14 px-5 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-white/30 transition-colors font-body text-sm"
                      />
                      <input
                        type="tel"
                        placeholder="Your Phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full h-14 px-5 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-white/30 transition-colors font-body text-sm"
                      />

                      {/* Consent Checkbox */}
                      <label className="flex items-start gap-3 cursor-pointer group pt-2">
                        <div className="relative mt-0.5">
                          <input
                            type="checkbox"
                            checked={consent}
                            onChange={(e) => setConsent(e.target.checked)}
                            className="sr-only"
                          />
                          <div className={`w-5 h-5 rounded border transition-all flex items-center justify-center ${
                            consent
                              ? "bg-white border-white"
                              : "bg-transparent border-white/20 group-hover:border-white/40"
                          }`}>
                            {consent && (
                              <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
                                <path d="M1 5L4.5 8.5L11 1" stroke="#0A0A0A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                            )}
                          </div>
                        </div>
                        <span className="text-xs text-white/40 leading-relaxed">
                          I agree to the Privacy Policy and Data Processing Terms
                        </span>
                      </label>

                      {/* Submit Button */}
                      <button
                        type="submit"
                        disabled={!name.trim() || !phone.trim() || !consent}
                        className="w-full h-14 mt-2 rounded-xl bg-white text-black font-display font-bold text-sm uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-white/90 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                      >
                        Submit <ArrowRight size={16} />
                      </button>
                    </form>
                  )}

                  {/* Divider */}
                  <div className="mt-10 pt-8 border-t border-white/10">
                    <p className="text-xs text-white/50 mb-1">Don't want to wait?</p>
                    <p className="text-[10px] text-white/30 mb-4">
                      Reach out to us directly
                    </p>

                    {/* Social Links */}
                    <div className="flex gap-3 mb-6">
                      <a
                        href="https://wa.me/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-11 h-11 rounded-full bg-[#25D366]/10 border border-[#25D366]/20 flex items-center justify-center text-[#25D366] hover:bg-[#25D366]/20 transition-all"
                      >
                        <FaWhatsapp size={18} />
                      </a>
                      <a
                        href="https://t.me/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-11 h-11 rounded-full bg-[#229ED9]/10 border border-[#229ED9]/20 flex items-center justify-center text-[#229ED9] hover:bg-[#229ED9]/20 transition-all"
                      >
                        <FaTelegramPlane size={18} />
                      </a>
                    </div>

                    {/* Phone */}
                    <div className="flex items-center gap-2 text-white/50">
                      <Phone size={14} />
                      <span className="text-sm tracking-wide">+7 (999) 123-45-67</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
