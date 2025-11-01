import {
  Instagram,
  Linkedin,
  Mail,
  Phone,
  Send,
  Twitter,
  Loader2,
  Rocket, // Added for new card
  Users, // Added for new card
  CheckCircle2, // For success toast
  AlertTriangle, // For error toast
  X, // For closing toast
} from "lucide-react";
// --- REMOVED: cn and useToast imports ---
import { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";

// --- ADDED: Simple 'cn' utility to remove dependency ---
function cn(...inputs) {
  return inputs.filter(Boolean).join(" ");
}

// --- Animation Variants (No change) ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100 },
  },
};
// --- END: Animation Variants ---

// --- ADDED: Simple Toast Component ---
const SimpleToast = ({ toast, setToast }) => {
  if (!toast) return null;

  const isSuccess = toast.variant === "success";

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      className={cn(
        "fixed bottom-5 right-5 z-50 w-full max-w-sm rounded-xl border p-4 shadow-lg",
        isSuccess
          ? "border-green-700 bg-green-600 text-white"
          : "border-red-700 bg-red-600 text-white"
      )}
    >
      <div className="flex items-start gap-3">
        <div className="mt-1">
          {isSuccess ? (
            <CheckCircle2 className="h-5 w-5" />
          ) : (
            <AlertTriangle className="h-5 w-5" />
          )}
        </div>
        <div className="flex-1">
          <h4 className="font-bold">{toast.title}</h4>
          <p className="text-sm opacity-90">{toast.description}</p>
        </div>
        <button
          onClick={() => setToast(null)}
          className="rounded-full p-1 transition-colors hover:bg-black/10"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </motion.div>
  );
};
// --- END: Simple Toast Component ---

export const ContactSection = () => {
  // --- MODIFIED: Replaced useToast with simple state ---
  const [toast, setToast] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  // --- ADDED: useEffect to clear toast ---
  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => {
        setToast(null);
      }, 5000); // Hide toast after 5 seconds
      return () => clearTimeout(timer);
    }
  }, [toast]);

  // --- MODIFIED: validateForm to use new setToast ---
  const validateForm = () => {
    if (!formData.name.trim()) {
      setToast({
        title: "Name is required",
        variant: "destructive",
      });
      return false;
    }

    if (!formData.email.trim()) {
      setToast({
        title: "Email is required",
        variant: "destructive",
      });
      return false;
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      setToast({
        title: "Invalid email format",
        variant: "destructive",
      });
      return false;
    }

    if (!formData.message.trim() || formData.message.length < 10) {
      setToast({
        title: "Message must be at least 10 characters",
        variant: "destructive",
      });
      return false;
    }

    return true;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // --- MODIFIED: handleSubmit to use new setToast ---
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/manlpvga", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setToast({
          title: "Message sent! 🎉",
          description: "We'll get back to you within 24 hours.",
          variant: "success",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      setToast({
        title: "Oops! Something went wrong",
        description:
          "Please try again or email us directly at info@codewebx.com",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  // --- END: Form Logic ---

  return (
    <section
      className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-background via-background to-primary/5"
      ref={ref}
    >
      {/* --- ADDED: Toast component render --- */}
      <SimpleToast toast={toast} setToast={setToast} />

      {/* --- Background Theme Elements --- */}
      <div className="absolute inset-0 -z-10 opacity-[0.03] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <motion.div
        aria-hidden="true"
        className="absolute left-1/4 top-0 w-1/2 h-1/2 -translate-x-1/2 -translate-y-1/2"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.1 } : {}}
        transition={{ duration: 1.5 }}
      >
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary to-blue-500 blur-3xl" />
      </motion.div>
      <motion.div
        aria-hidden="true"
        className="absolute right-0 bottom-0 w-1/3 h-1/3 translate-x-1/2 translate-y-1/2"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.1 } : {}}
        transition={{ duration: 1.5, delay: 0.5 }}
      >
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary to-purple-600 blur-3xl" />
      </motion.div>
      {/* --- END: Background Theme Elements --- */}

      <div className="container mx-auto max-w-7xl relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* --- MODIFIED: Header styling --- */}
          <motion.div
            className="text-center mb-16 md:mb-20"
            variants={itemVariants}
          >
            <span className="inline-block px-4 py-2 text-sm font-medium rounded-full bg-primary/10 text-primary mb-6">
              Let's Connect
            </span>
            <h2
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600"
              id="contact"
            >
              Get In Touch
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind or just want to say hi? Our inbox is always
              open.
            </p>
          </motion.div>
          {/* --- END: Header --- */}

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* --- MODIFIED: Left Column with new glassy cards --- */}
            <motion.div
              className="lg:col-span-1 space-y-8"
              variants={itemVariants}
            >
              {/* Card 1: Contact Info */}
              <div className="bg-card/50 backdrop-blur-xl border border-border/30 rounded-3xl p-6 sm:p-8 shadow-2xl transition-all duration-500 hover:shadow-3xl hover:border-primary/40">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-xl text-primary">
                    <Rocket className="h-5 w-5" />
                  </div>
                  Contact Info
                </h3>
                <div className="space-y-4">
                  <a
                    href="mailto:info@codewebx.com"
                    className="flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 hover:bg-background/50 group"
                  >
                    <div className="p-3 rounded-lg bg-primary/10 text-primary transition-all duration-300 group-hover:scale-110">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email Us</p>
                      <p className="text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                        info@codewebx.com
                      </p>
                    </div>
                  </a>
                  <a
                    href="tel:+919955982260"
                    className="flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 hover:bg-background/50 group"
                  >
                    <div className="p-3 rounded-lg bg-primary/10 text-primary transition-all duration-300 group-hover:scale-110">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Call Us</p>
                      <p className="text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                        +91 9955982260
                      </p>
                    </div>
                  </a>
                  <a
                    href="tel:+918271586892"
                    className="flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 hover:bg-background/50 group"
                  >
                    <div className="p-3 rounded-lg bg-primary/10 text-primary transition-all duration-300 group-hover:scale-110">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Call Us</p>
                      <p className="text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                        +91 8271586892
                      </p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Card 2: Follow Us */}
              <div className="bg-card/50 backdrop-blur-xl border border-border/30 rounded-3xl p-6 sm:p-8 shadow-2xl transition-all duration-500 hover:shadow-3xl hover:border-primary/40">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-xl text-primary">
                    <Users className="h-5 w-5" />
                  </div>
                  Follow Us
                </h3>
                <div className="flex flex-wrap gap-4">
                  {[
                    {
                      icon: Linkedin,
                      label: "LinkedIn",
                      url: "https://www.linkedin.com/company/codewebx/",
                    },
                    
                    {
                      icon: Instagram,
                      label: "Instagram",
                      url: "https://www.instagram.com/codewebx.in/",
                    },
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 p-4 min-w-[60px] flex items-center justify-center rounded-2xl bg-background/50 hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all duration-300 group"
                      aria-label={social.label}
                    >
                      <social.icon className="h-6 w-6 transition-all duration-300 group-hover:scale-110" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
            {/* --- END: Left Column --- */}

            {/* --- MODIFIED: Right Column (Form) in a glassy card --- */}
            <motion.div
              className="lg:col-span-2 bg-card/50 backdrop-blur-xl border border-border/30 rounded-3xl p-8 md:p-12 shadow-2xl transition-all duration-500 hover:shadow-3xl hover:border-primary/40"
              variants={itemVariants}
            >
              <h3 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-xl text-primary">
                  <Send className="h-6 w-6" />
                </div>
                Send Us a Message
              </h3>

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="space-y-1">
                  <label htmlFor="name" className="sr-only">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-input bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all text-base"
                    placeholder="Your Name"
                  />
                </div>

                <div className="space-y-1">
                  <label htmlFor="email" className="sr-only">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-input bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all text-base"
                    placeholder="Your Email"
                  />
                </div>

                <div className="space-y-1">
                  <label htmlFor="message" className="sr-only">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-input bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all resize-none text-base"
                    placeholder="Your Message..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={cn(
                    "w-full flex items-center justify-center gap-3 py-4 px-6 rounded-xl bg-gradient-to-r from-primary to-purple-600 text-white font-semibold hover:opacity-90 transition-all duration-300 shadow-lg shadow-primary/30 text-base",
                    isSubmitting && "opacity-80 cursor-not-allowed"
                  )}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={18} />
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
          {/* --- END: Right Column --- */}
        </motion.div>
      </div>
    </section>
  );
};

