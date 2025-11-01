import {
  ArrowUp,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  Twitter,
  Sparkles,
} from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const socialLinks = [
    {
      icon: <Linkedin size={18} />,
      href: "https://www.linkedin.com/company/codewebx/",
      label: "LinkedIn",
    },
    {
      icon: <Instagram size={18} />,
      href: "https://www.instagram.com/codewebx.in/",
      label: "Instagram",
    },
    
  ];

  const quickLinks = [
    { name: "Home", href: "#hero" },
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#expertise" },
    { name: "Portfolio", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const serviceLinks = [
    { name: "Web & App Development" },
    { name: "ERP / CMS Solutions" },
    { name: "AI & Blockchain" },
    { name: "Digital Marketing" },
    { name: "UI/UX Designing" },
  ];

  const contactInfo = [
    {
      icon: <Mail size={16} />,
      text: "info@codewebx.com",
      href: "mailto:info@codewebx.com",
    },
    {
      icon: <Phone size={16} />,
      text: "+91 9955982260",
      href: "tel:+919955982260",
    },
    {
      icon: <Phone size={16} />,
      text: "+91 8271586892",
      href: "tel:+918271586892",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    <footer
      id="footer"
      className="relative px-4 sm:px-6 lg:px-8 py-20 md:py-32 overflow-hidden bg-gradient-to-br from-background via-background to-primary/5"
      ref={ref}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10 opacity-[0.03] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      {/* Glow Blurs */}
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

      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative backdrop-blur-xl bg-card/50 rounded-3xl p-8 sm:p-12 border border-border/30 shadow-2xl"
        >
          {/* Top Section */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-12"
          >
            <h3 className="text-3xl font-bold text-foreground flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-xl text-primary">
                <Sparkles className="h-6 w-6" />
              </div>
              CodeWebX
            </h3>

            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="p-3 rounded-xl bg-background/50 text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors duration-300"
                  whileHover={{ y: -2, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Main Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Quick Links */}
            <motion.div variants={itemVariants}>
              <h4 className="text-foreground font-semibold mb-6 text-sm uppercase tracking-wider">
                Quick Links
              </h4>
              <ul className="space-y-4">
                {quickLinks.map((link, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ x: 4, scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="origin-left"
                  >
                    <a
                      href={link.href}
                      className="hover:text-primary transition-colors duration-300 text-base text-muted-foreground"
                    >
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Our Services */}
            <motion.div variants={itemVariants}>
              <h4 className="text-foreground font-semibold mb-6 text-sm uppercase tracking-wider">
                Our Services
              </h4>
              <ul className="space-y-4">
                {serviceLinks.map((link, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ x: 4, scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="origin-left"
                  >
                    <span className="text-base text-muted-foreground">
                      {link.name}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* ✅ Corrected Contact Section (Icons beside text & centered) */}
            <motion.div variants={itemVariants}>
              <h4 className="text-foreground font-semibold mb-6 text-sm uppercase tracking-wider pl-4">
                Contact
              </h4>
              <ul className="space-y-5 flex flex-col items-center text-center">
                {contactInfo.map((info, index) => (
                  <motion.li
                    key={index}
                    className="flex items-center space-x-3 text-base text-muted-foreground"
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className="text-primary flex-shrink-0">
                      {info.icon}
                    </span>
                    <a
                      href={info.href}
                      className="hover:text-primary transition-colors duration-300"
                    >
                      {info.text}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Bottom Bar */}
          <motion.div
            variants={itemVariants}
            className="mt-16 pt-8 border-t border-border/30 flex flex-col items-center text-sm text-muted-foreground space-y-4 sm:space-y-0 sm:flex-row sm:justify-between"
          >
            <div>
              <p>© {currentYear} CodeWebX. All rights reserved.</p>
            </div>
            <div className="flex items-center space-x-6">
              <a href="#" className="hover:text-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Terms of Service
              </a>
              <motion.a
                href="#hero"
                aria-label="Back to top"
                className="p-2 rounded-lg bg-background/50 text-muted-foreground hover:bg-primary/10 hover:text-primary transition-all duration-300"
                whileHover={{ y: -3, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ArrowUp size={16} />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};
