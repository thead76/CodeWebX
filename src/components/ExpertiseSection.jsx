import {
  Monitor,
  Smartphone,
  Database,
  Globe,
  CreditCard,
  Code,
  Wrench,
  BarChart,
  PenTool,
  ArrowRight,
  Star,
} from "lucide-react";
import { motion } from "framer-motion";

// Service data based on your screenshot
const services = [
  {
    title: "Website Designing And Deplopment",
    icon: <Monitor className="h-7 w-7" />,
  },
  {
    title: "Mobile App Development",
    icon: <Smartphone className="h-7 w-7" />,
  },
  {
    title: "ERP / CMS Software Development",
    icon: <Database className="h-7 w-7" />,
  },
  {
    title: "Domain And Hosting",
    icon: <Globe className="h-7 w-7" />,
  },
  {
    title: "Payment Gateway Services",
    icon: <CreditCard className="h-7 w-7" />,
  },
  {
    title: "Python/Ai/Blockchain",
    icon: <Code className="h-7 w-7" />,
  },
  {
    title: "Website And App Maintainance",
    icon: <Wrench className="h-7 w-7" />,
  },
  {
    title: "Digital Marketing",
    icon: <BarChart className="h-7 w-7" />,
  },
  {
    title: "UI/UX Designing",
    icon: <PenTool className="h-7 w-7" />,
  },
];

// Animation variants for staggering children
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 100,
    },
  },
};

export const ExpertiseSection = () => {
  return (
    // --- MODIFIED: Added relative, overflow-hidden and theme colors ---
    <section
      id="expertise"
      className="relative overflow-hidden bg-background text-foreground py-20 md:py-28 px-4 sm:px-6 lg:px-8"
    >
      {/* --- ADDED: Animated Background Shapes (from AboutSection) --- */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute w-72 sm:w-96 h-72 sm:h-96 bg-primary/5 rounded-full blur-3xl opacity-50 -top-10 -left-20 animate-float" />
        <div className="absolute w-60 sm:w-80 h-60 sm:h-80 bg-secondary/5 rounded-full blur-3xl opacity-50 -bottom-10 -right-20 animate-float animation-delay-2000" />
      </div>

      <div className="container mx-auto max-w-7xl">
        {/* --- Top Header Row --- */}
        <motion.div
          // --- MODIFIED: Removed flex-row, justify-between to center content ---
          className="flex flex-col items-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          // --- MODIFIED: Changed amount: 0.5 to 0.8 to trigger animation later ---
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.5 }}
        >
          {/* Left Side: Titles (NOW CENTERED) */}
          {/* --- MODIFIED: Removed w-1/2, added text-center --- */}
          <div className="w-full text-center">
            {/* --- MODIFIED: Added justify-center to center the star/text --- */}
            <div className="flex items-center justify-center gap-2 mb-4">
              {/* --- MODIFIED: Changed color to primary --- */}
              <Star className="h-4 w-4 text-primary" fill="currentColor" />
              <span className="font-semibold text-sm uppercase tracking-widest text-primary">
                OUR EXPERTISE
              </span>
            </div>
            {/* --- MODIFIED: Removed <br /> for better center-align --- */}
            <h2
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
              id="services"
            >
              Our <span className="text-primary">digital services</span> to grow
              your brand
            </h2>
          </div>

          {/* Right Side: Description and Buttons (NOW CENTERED) */}
          {/* --- MODIFIED: Removed w-1/2, centered text, added max-w-2xl --- */}
          <div className="w-full max-w-2xl mx-auto text-center mt-8">
            {/* --- MODIFIED: Changed color to muted-foreground --- */}
            <p className="text-muted-foreground text-base lg:text-lg mb-6">
              Our digital services empower brands with innovative strategies and
              solutions for sustainable growth and engagement.
            </p>
            {/* --- MODIFIED: Added justify-center to center buttons --- */}
            <div className="flex items-center justify-center gap-4">
              {/* --- MODIFIED: Changed colors to match theme --- */}
              <button className="px-6 py-3 bg-secondary rounded-full font-medium text-secondary-foreground hover:bg-secondary/80 transition-colors duration-300">
                All Services
              </button>
              <button className="flex items-center justify-center h-12 w-12 bg-primary rounded-full text-primary-foreground hover:bg-primary/90 transition-colors duration-300">
                <ArrowRight className="h-6 w-6" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* --- Services Grid --- */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          // --- MODIFIED: Changed amount to 0.4 to trigger slightly later ---
          viewport={{ once: true, amount: 0.4 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              // --- MODIFIED: Changed to glassy card style to match AboutSection ---
              className="bg-card/50 border border-border/50 backdrop-blur-xl p-8 rounded-3xl transition-all duration-300 cursor-pointer group hover:border-primary/50 hover:bg-card/60"
            >
              {/* --- MODIFIED: Changed color to primary --- */}
              <div className="text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              {/* --- MODIFIED: Changed color to foreground & primary on hover --- */}
              <h3 className="text-xl lg:text-2xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* --- ADDED: Styles for float animation (from AboutSection) --- */}
      <style>
        {`
          @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-10px); } }
          .animate-float { animation: float 4s ease-in-out infinite; }
          .animation-delay-2000 { animation-delay: 2s; }
        `}
      </style>
    </section>
  );
};
