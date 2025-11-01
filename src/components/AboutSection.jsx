import React, { useState, useEffect, useRef } from "react"; // --- MODIFIED: Added useRef ---
import {
  Briefcase,
  Code,
  User,
  Download,
  Calendar,
  Sparkles,
  Target,
  Github,
  Linkedin,
  Twitter,
  Mail,
  Star,
  Users,
  Database,
  BarChart,
  HardDrive,
  PenTool,
  Smartphone,
  Monitor,
} from "lucide-react";
import { motion, AnimatePresence, useInView } from "framer-motion"; // --- MODIFIED: Added useInView ---

// --- ADDED: Animation Variants ---
const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.4,
      duration: 0.8,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
};
// --- END: Animation Variants ---

export const AboutSection = () => {
  const [activeTab, setActiveTab] = useState("mission"); // Changed default tab
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [counter, setCounter] = useState(0);

  // --- ADDED: useInView Hook logic (like HeroSection) ---
  const ref = useRef(null);
  // Triggers when 30% of the section is in view
  const isInView = useInView(ref, { once: true, amount: 0.3});
  // --- END: useInView Hook logic ---

  // --- MODIFIED: These stats match your request (15+, 1+, 99%, 5+) ---
  const achievements = [
    {
      number: "15+",
      label: "Projects",
      icon: <Briefcase className="h-5 w-5" />,
      suffix: "",
    },
    {
      number: "1",
      label: "Years Exp",
      icon: <Calendar className="h-5 w-5" />,
      suffix: "+",
    },
    {
      number: "99",
      label: "Success",
      icon: <Target className="h-5 w-5" />,
      suffix: "%",
    },
    {
      number: "5",
      label: "Clients",
      icon: <Users className="h-5 w-5" />,
      suffix: "+",
    }, // Using Users icon
  ];

  // --- MODIFIED: Replaced techStack with your startup's services ---
  const ourServices = [
    {
      category: "Web & Mobile",
      icon: <Monitor className="h-4 w-4" />,
      items: [
        "Website Design & Dev",
        "Mobile App Development",
        "UI/UX Designing",
      ],
    },
    {
      category: "Software & Infra",
      icon: <Database className="h-4 w-4" />,
      items: [
        "ERP / CMS Software",
        "Domain & Hosting",
        "Payment Gateways",
        "App Maintenance",
      ],
    },
    {
      category: "Growth & Future",
      icon: <BarChart className="h-4 w-4" />,
      items: ["Digital Marketing", "Python / AI", "Blockchain Solutions"],
    },
  ];

  // --- MODIFIED: Updated features for "Why Choose Us" ---
  const whyChooseUsFeatures = [
    "Full-Stack Web & App Dev",
    "ERP/CMS & Software Solutions",
    "AI & Blockchain Integration",
    "Digital Marketing Strategy",
    "Domain, Hosting & Maintenance",
    "Dedicated 24/7 Support",
  ];

  // --- MODIFIED: Changed tab content to be about the company ---
  const companyInfo = {
    mission:
      "We are passionate about creating high-performance digital solutions that accelerate business success. We transform ideas from initial concept to full-scale deployment.",
    expertise:
      "With 1+ years of experience, we've delivered 15+ successful projects for 5+ clients. Our expertise spans web/app development, ERP systems, and emerging tech like AI.",
    approach:
      "We believe in clean code, user-centered design, and agile methodology. Our process emphasizes collaboration and continuous improvement to deliver top-tier IT services.",
  };

  useEffect(() => {
    const handleMouseMove = (e) =>
      setMousePosition({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(
      () => setCounter((prev) => (prev + 1) % 4),
      2000
    );
    return () => clearInterval(interval);
  }, []);

  // --- REMOVED: handleDownload function (no longer needed) ---

  return (
    <section
      id="about"
      className="relative py-16 md:py-28 px-4 sm:px-6 lg:px-12 bg-gradient-to-br from-background via-background to-primary/5 overflow-hidden"
      ref={ref} // --- ADDED: ref for useInView ---
    >
      {/* Background Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute w-72 sm:w-96 h-72 sm:h-96 bg-primary/5 rounded-full blur-3xl transition-all duration-1000 ease-out"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${
              mousePosition.y * 0.02
            }px)`,
          }}
        />
        <div
          className="absolute w-60 sm:w-80 h-60 sm:h-80 bg-secondary/5 rounded-full blur-3xl transition-all duration-1500 ease-out"
          style={{
            transform: `translate(${mousePosition.x * -0.03}px, ${
              mousePosition.y * -0.03
            }px)`,
          }}
        />
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:64px_64px]" />
        <div className="absolute top-16 right-8 sm:top-20 sm:right-20 animate-float">
          <div className="w-6 sm:w-8 h-6 sm:h-8 bg-primary/20 rounded-lg rotate-45" />
        </div>
        <div className="absolute bottom-32 left-8 sm:bottom-40 sm:left-20 animate-float animation-delay-2000">
          <div className="w-5 sm:w-6 h-5 sm:h-6 bg-secondary/20 rounded-full" />
        </div>
      </div>

      <div className="container mx-auto max-w-7xl relative">
        {/* --- MODIFIED: Header animation controlled by isInView --- */}
        <motion.div
          className="text-center mb-16 md:mb-20 px-2 sm:px-6"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={itemVariants} // Using itemVariants for simple fade-up
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-2xl bg-primary/10 border border-primary/20 mb-6 transition-all duration-500 hover:bg-primary/15 hover:scale-105 group cursor-pointer">
            <div className="relative">
              <Sparkles className="h-4 sm:h-5 w-4 sm:w-5 text-primary animate-pulse" />
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full animate-ping" />
            </div>
            {/* --- MODIFIED: "ABOUT ME" to "ABOUT US" --- */}
            <span className="text-sm sm:text-base font-semibold text-primary tracking-wide">
              ABOUT US
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6">
            <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Transforming
            </span>
            <span className="block text-primary animate-pulse">
              Ideas Into Reality
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Building digital experiences that combine{" "}
            <span className="text-primary font-semibold">innovation</span>,{" "}
            <span className="text-primary font-semibold">performance</span>, and{" "}
            <span className="text-primary font-semibold">elegance</span>
          </p>
        </motion.div>

        {/* --- MODIFIED: Grid animation controlled by isInView --- */}
        <motion.div
          className="grid grid-cols-1 xl:grid-cols-3 gap-8 md:gap-12"
          variants={containerVariants} // containerVariants will stagger children
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* --- MODIFIED: Wrapped Left Column in motion.div --- */}
          <motion.div
            className="xl:col-span-2 space-y-8"
            variants={itemVariants}
          >
            {/* About Card */}
            <div className="bg-card/50 border border-border rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl transition-all duration-500 hover:shadow-3xl hover:border-primary/40 hover:bg-card/60 relative overflow-hidden group">
              {/* Decorative Circles */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-primary rounded-full -translate-y-16 translate-x-16" />
                <div className="absolute bottom-0 left-0 w-20 sm:w-24 h-20 sm:h-24 bg-secondary rounded-full -translate-x-16 translate-y-16" />
              </div>

              <div className="relative">
                <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
                  {/* Profile Image */}
                  <div className="relative flex-shrink-0">
                    <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden border-4 border-primary/20 shadow-2xl transition-all duration-500 group-hover:border-primary/40 group-hover:scale-105 md:group-hover:scale-110 relative">
                      {/* --- MODIFIED: Alt text for company --- */}
                      <img
                        src="/profile-logo.png"
                        alt="CodeWebX Logo"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute -bottom-2 -right-2 w-6 h-6 sm:w-8 sm:h-8 bg-green-500 rounded-full border-4 border-background flex items-center justify-center">
                        <div className="w-2 h-2 bg-green-300 rounded-full animate-pulse" />
                      </div>
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="flex-1 text-center md:text-left">
                    {/* --- MODIFIED: Name and Title for company --- */}
                    <h2 className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">
                      CodeWebX
                    </h2>
                    <p className="text-primary text-base sm:text-lg font-semibold mb-3 sm:mb-4">
                      IT & Web Solutions Provider
                    </p>
                    <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
                      {achievements.map((achievement, index) => (
                        <div
                          key={index}
                          className={`p-2 sm:p-3 rounded-xl bg-background/50 border border-border transition-all duration-300 hover:scale-105 hover:border-primary/30 ${
                            counter === index
                              ? "bg-primary/10 border-primary/50"
                              : ""
                          }`}
                        >
                          <div className="flex items-center gap-2 justify-center md:justify-start">
                            {achievement.icon}
                            <div>
                              <div className="font-bold text-sm sm:text-lg">
                                {achievement.number}
                                {achievement.suffix}
                              </div>
                              <div className="text-[10px] sm:text-xs text-muted-foreground">
                                {achievement.label}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* --- MODIFIED: Tabs updated to company info --- */}
                <div className="flex flex-col sm:flex-row border-b border-border mb-4 sm:mb-6">
                  {["mission", "expertise", "approach"].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`flex-1 py-2 sm:py-3 px-2 sm:px-4 text-sm sm:text-base font-medium transition-all duration-300 ${
                        activeTab === tab
                          ? "text-primary border-b-2 border-primary"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </button>
                  ))}
                </div>

                {/* --- MODIFIED: Tab Content updated to company info --- */}
                <div className="min-h-[100px] sm:min-h-[120px]">
                  <AnimatePresence mode="sync">
                    <motion.p
                      key={activeTab}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed"
                    >
                      {companyInfo[activeTab]}
                    </motion.p>
                  </AnimatePresence>
                </div>
              </div>
            </div>

            {/* --- MODIFIED: Tech Stack to Core Services --- */}
            <div className="bg-card/50 border border-border rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl transition-all duration-500 hover:shadow-3xl hover:border-primary/40 hover:bg-card/60">
              <h3 className="text-lg sm:text-2xl font-bold mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
                <Code className="h-4 sm:h-6 w-4 sm:w-6 text-primary" />
                Our Core Services
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                {ourServices.map((service, index) => (
                  <div
                    key={index}
                    className="bg-background/50 border border-border rounded-2xl p-4 sm:p-6 transition-all duration-300 hover:border-primary/30 hover:scale-105 group"
                  >
                    <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                      <div className="p-1 sm:p-2 bg-primary/10 rounded-lg text-primary group-hover:scale-110 transition-transform duration-300">
                        {service.icon}
                      </div>
                      <h4 className="font-semibold text-sm sm:text-lg">
                        {service.category}
                      </h4>
                    </div>
                    <div className="space-y-1 sm:space-y-2">
                      {service.items.map((item, itemIndex) => (
                        <div
                          key={itemIndex}
                          className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
                        >
                          <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* --- MODIFIED: Wrapped Right Column in motion.div --- */}
          <motion.div
            className="space-y-6 sm:space-y-8"
            variants={itemVariants}
          >
            {/* Work Together */}
            <div className="bg-card/50 border border-border rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl transition-all duration-500 hover:shadow-3xl hover:border-primary/40 hover:bg-card/60">
              <h3 className="text-lg sm:text-2xl font-bold mb-4 sm:mb-6 text-center">
                Let's Work Together
              </h3>
              {/* --- MODIFIED: Removed resume button, made "Start Project" full width --- */}
              <div className="flex flex-col space-y-3">
                <a
                  href="#contact"
                  className="w-full block p-3 sm:p-4 bg-primary text-primary-foreground rounded-xl text-center font-semibold transition-all duration-300 hover:bg-primary/90 hover:scale-105 hover:shadow-lg group"
                >
                  <div className="flex items-center justify-center gap-2 sm:gap-3">
                    <User className="h-4 sm:h-5 w-4 sm:w-5 group-hover:scale-110 transition-transform duration-300" />
                    Start a Project
                  </div>
                </a>
              </div>

              {/* --- REMOVED: Social Links div --- */}
            </div>

            {/* --- MODIFIED: "Why Choose Me" to "Why Choose Us" --- */}
            <div className="bg-card/50 border border-border rounded-3xl p-4 sm:p-6 backdrop-blur-xl shadow-2xl transition-all duration-500 hover:shadow-3xl hover:border-primary/40 hover:bg-card/60">
              <h3 className="text-base sm:text-xl font-bold mb-3 sm:mb-4 flex items-center gap-2">
                <Star className="h-4 sm:h-5 w-4 sm:w-5 text-primary" />
                Why Choose Us
              </h3>
              <div className="space-y-2 sm:space-y-3">
                {/* --- MODIFIED: Using new features list --- */}
                {whyChooseUsFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 sm:gap-3 p-1 sm:p-2 rounded-lg transition-all duration-300 hover:bg-background/50 hover:scale-105"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                    <span className="text-xs sm:text-sm text-muted-foreground hover:text-foreground">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="bg-card/60 border border-border rounded-3xl p-4 sm:p-6 backdrop-blur-xl shadow-2xl transition-all duration-500 hover:shadow-3xl hover:border-primary/40 hover:bg-card-70">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-0 mb-2 sm:mb-3">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="relative">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full animate-pulse" />
                    {/* --- FIXED: Typo bg-green-5G00 corrected to bg-green-500 --- */}
                    <div className="absolute inset-0 w-2 sm:w-3 h-2 sm:h-3 bg-green-500 rounded-full animate-ping" />
                  </div>
                  <span className="font-semibold text-xs sm:text-sm">
                    Available
                  </span>
                </div>
                <span className="text-xs sm:text-sm text-muted-foreground bg-green-500/10 text-green-600 px-2 py-1 rounded-lg">
                  For new projects
                </span>
              </div>
              <div className="text-[10px] sm:text-xs text-muted-foreground text-center bg-background/50 rounded-lg p-1 sm:p-2">
                ⚡ Response time: Under 24 hours
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Styles */}
      <style>
        {`
          @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-10px); } }
          .animate-float { animation: float 3s ease-in-out infinite; }
          .animation-delay-2000 { animation-delay: 2s; }
        `}
      </style>
    </section>
  );
};
