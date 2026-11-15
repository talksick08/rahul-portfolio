import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ContactModalProps {
  isOpen: boolean;
  initialService?: string;
  onClose: () => void;
  onSubmitSuccess: (message: string) => void;
}

export default function ContactModal({
  isOpen,
  initialService = "Full-Stack Web Development",
  onClose,
  onSubmitSuccess,
}: ContactModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState(initialService);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (initialService) {
      setService(initialService);
    }
  }, [initialService]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams({
      view: "cm",
      fs: "1",
      to: "rahulmahanta156@gmail.com",
      su: `Portfolio Inquiry — ${service}`,
      body: `Hello Rahul,\n\nName: ${name.trim()}\nEmail: ${email.trim()}\nService: ${service}\n\nMessage:\n${message.trim()}`,
    });
    window.open(`https://mail.google.com/mail/?${params.toString()}`, "_blank", "noopener,noreferrer");
    onClose();
    onSubmitSuccess(`Gmail has opened in a new tab with your inquiry prefilled.`);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 pt-[max(1rem,env(safe-area-inset-top))] pb-[max(1rem,env(safe-area-inset-bottom))]">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/75 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative z-10 bg-white rounded-3xl max-w-lg w-full max-h-[90dvh] overflow-y-auto p-5 sm:p-7 md:p-8 shadow-2xl text-neutral-900 border border-neutral-200 select-none"
          >
            <div className="flex justify-between items-center border-b border-neutral-200 pb-4 mb-5">
              <div>
                <span className="text-[10px] font-bold tracking-widest uppercase text-neutral-400">
                  START A CONVERSATION
                </span>
                <h3 className="text-xl font-black uppercase text-neutral-900 tracking-tight">
                  LET'S BUILD SOMETHING
                </h3>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close contact dialog"
                className="w-11 h-11 min-w-[44px] min-h-[44px] rounded-full border border-neutral-300 flex items-center justify-center text-neutral-600 hover:border-black hover:text-black cursor-pointer text-sm font-bold"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Rahul Mahanta"
                  className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:outline-none focus:border-black text-base sm:text-sm min-h-[44px]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="hello@example.com"
                  className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:outline-none focus:border-black text-base sm:text-sm min-h-[44px]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1">
                  Area of Interest / Service
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:outline-none focus:border-black text-base sm:text-sm bg-white cursor-pointer min-h-[44px]"
                >
                  <option value="Full-Stack Web Development">Full-Stack Web Development</option>
                  <option value="AI & Machine Learning Integration">AI &amp; Machine Learning Integration</option>
                  <option value="Cybersecurity & Systems Defense">Cybersecurity &amp; Systems Defense</option>
                  <option value="Technical Collaboration">Technical Collaboration / Other</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1">
                  Message
                </label>
                <textarea
                  rows={3}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Share details about your project, goals, or inquiries..."
                  className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:outline-none focus:border-black text-base sm:text-sm resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-black text-white rounded-xl text-xs font-bold tracking-widest uppercase hover:bg-neutral-800 transition cursor-pointer min-h-[44px]"
              >
                SEND MESSAGE ↗
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

