import {
  ArrowRight,
  ChevronUp,
  Star,
  Code,
  ChevronDown,
  Sparkles,
  Award,
  Zap,
  Eye,
  Github,
  X,
  Briefcase, // --- ADDED: Briefcase Icon ---
} from "lucide-react";
import { useState, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useInView, // --- ADDED: useInView Hook ---
} from "framer-motion";

// --- MODIFIED: New project list based on user's request ---
const projects = [
  {
    id: 1,
    title: "CodeXpert",
    description:
      "CodeXpert is an innovative platform for collaborative coding, project management, and team productivity. It empowers developers to create, assign, and track tasks efficiently within multiple projects.",
    image: "/projects/project.webp",
    demoUrl: "https://codexpert.online/", // --- UPDATED ---
    featured: true,
    highlights: [
      "Collaborative coding",
      "Project management",
      "Team productivity",
    ],
  },
  {
    id: 2,
    title: "Vante & Co.",
    // --- MODIFIED: Description lengthened ---
    description:
      "A complete e-commerce fashion marketplace. This platform features advanced product recommendations, a seamless multi-step checkout process, and robust user account management to provide a modern online shopping experience.",
    image: "/projects/project1.webp",
    demoUrl: "https://e-commerce-website-4w6a.vercel.app", // --- UPDATED ---
    featured: false, // --- MODIFIED: Featured re-enabled ---
    highlights: ["Product catalog", "Shopping cart", "Payment processing"],
  },
  {
    id: 3,
    title: "UrbanFungi",
    description:
      "UrbanFungi is a sustainable brand focused on cultivating organic mushrooms and promoting eco-friendly urban farming. It aims to bring fresh, healthy, and locally grown produce to modern city communities.",
    image: "/projects/project2.webp",
    demoUrl: "https://mushroom-mart.vercel.app/", // --- UPDATED ---
    featured: true,
    highlights: ["Organic mushrooms", "Urban farming", "Local produce"],
  },
  {
    id: 4,
    title: "Career Sarthi",
    description:
      "Career-Sarthi is your AI-powered mentor for skills, jobs, and growth — offering personalized roadmaps, resume insights, mock interviews, and job opportunities. Empower your career journey with guided learning, contests, and real-world opportunities all in one place.",
    image: "/projects/project3.webp",
    demoUrl: "https://career-sarthi-nine.vercel.app/", // --- UPDATED ---
    featured: true,
    highlights: ["AI-powered mentor", "Resume insights", "Mock interviews"],
  },
  {
    id: 5,
    title: "Client Satisfaction Survey Form",
    description:
      "The Client Satisfaction Survey collects feedback from clients to know how satisfied they are with our services. It helps us understand their experience and improve our service quality accordingly.",
    image: "/projects/project4.webp",
    demoUrl: "https://hyperclouddigital.com/css/", // --- UPDATED ---
    featured: false,
    highlights: ["Collects feedback", "Improves service", "Client experience"],
  },
  {
    id: 6,
    title: "Eatto",
    // --- MODIFIED: Description lengthened ---
    description:
      "A comprehensive food delivery platform that connects users with local restaurants. It includes detailed listings, an intuitive order management system, and real-time location services for a smooth delivery process.",
    image: "/projects/project5.webp",
    demoUrl: "https://eattoo-food-delivery-website-frontend.onrender.com/", // --- UPDATED ---
    featured: false,
    highlights: ["Restaurant listings", "Order system", "Location services"],
  },
];
// --- END: New project list ---

// --- ADDED: Animation Variants ---
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

export const ProjectsSection = () => {
  const [showAll, setShowAll] = useState(false);
  const [hoveredProject, setHoveredProject] = useState(null);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 }); // Triggers when 10% is in view

  // --- MODIFIED: Removed filtering logic ---
  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  const ProjectHighlights = ({ highlights }) => (
    <div className="space-y-2">
      {highlights.map((highlight, index) => (
        <div key={index} className="flex items-center gap-2 text-sm">
          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
          <span className="text-muted-foreground">{highlight}</span>
        </div>
      ))}
    </div>
  );

  return (
    <section
      id="projects"
      className="relative min-h-screen py-20 md:py-32 overflow-hidden bg-gradient-to-br from-background via-background to-primary/5"
      ref={ref} // --- ADDED: ref for useInView ---
    >
      {/* Clean Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-background" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative">
        {/* --- MODIFIED: Header animation controlled by isInView --- */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={itemVariants}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Briefcase className="h-4 w-4" />
            Our Portfolio
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Our
            <span className="block text-primary">Case Studies</span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A collection of projects we've built to showcase our expertise in
            delivering high-quality digital solutions.
          </p>
        </motion.div>

        {/* --- REMOVED: Filter button section --- */}

        {/* --- MODIFIED: Grid animation controlled by isInView --- */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants} // This will stagger the children
        >
          <AnimatePresence mode="wait">
            {displayedProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                variants={itemVariants} // Children will be animated by parent's stagger
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{
                  duration: 0.6,
                  type: "spring",
                  stiffness: 100,
                }}
                className="group"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="relative bg-card/50 backdrop-blur-xl border border-border/30 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:border-primary/30 transition-all duration-500 h-full flex flex-col">
                  {/* Image Section */}
                  <div className="relative h-56 overflow-hidden">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    {/* Image overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                    {/* --- REMOVED: Video Play Button --- */}
                  </div>

                  {/* Content Section */}
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-bold text-foreground">
                        {project.title}
                      </h3>
                      {/* --- ADDED: Featured badge logic is here and correct --- */}
                      {project.featured && (
                        <motion.div
                          className="flex items-center gap-1 px-2 py-1 rounded-full bg-amber-500/20 text-amber-600 text-xs font-medium border border-amber-500/30"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: index * 0.1 + 0.3 }}
                        >
                          <Star size={12} className="fill-amber-500" />
                          Featured
                        </motion.div>
                      )}
                    </div>

                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed flex-1">
                      {project.description}
                    </p>

                    {/* Key Features (if they exist) */}
                    {project.highlights && project.highlights.length > 0 && (
                      <div className="mb-6">
                        <ProjectHighlights highlights={project.highlights} />
                      </div>
                    )}

                    {/* --- REMOVED: Tech Stack section --- */}

                    {/* Action Buttons */}
                    <div className="flex gap-3 pt-4 border-t border-border/30 mt-auto">
                      <motion.a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                          project.demoUrl === "#"
                            ? "bg-muted text-muted-foreground cursor-not-allowed border border-border"
                            : "bg-primary text-primary-foreground hover:bg-primary/90"
                        }`}
                        onClick={(e) =>
                          project.demoUrl === "#" && e.preventDefault()
                        }
                      >
                        <Eye size={16} />
                        {project.demoUrl === "#" ? "Coming Soon" : "Live Demo"}
                      </motion.a>
                      {/* --- FIX: Closing tag was missing --- */}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* --- MODIFIED: Load More animation controlled by isInView --- */}
        {projects.length > 3 && (
          <motion.div
            className="text-center mt-16"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={itemVariants}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.button
              onClick={() => setShowAll(!showAll)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-medium transition-all duration-300 ${
                showAll
                  ? "bg-muted text-foreground border border-border"
                  : "bg-primary text-primary-foreground hover:bg-primary/90"
              }`}
            >
              {showAll ? (
                <>
                  <ChevronUp size={18} />
                  Show Less
                </>
              ) : (
                <>
                  View More Projects
                  <ArrowRight size={18} />
                </>
              )}
            </motion.button>
          </motion.div>
        )}

        {/* --- MODIFIED: Simple CTA animation controlled by isInView --- */}
        <motion.div
          className="text-center mt-20"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={itemVariants}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-card/50 backdrop-blur-xl border border-border/30 rounded-2xl p-12 max-w-4xl mx-auto">
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : { scale: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
            >
              <Zap className="h-4 w-4" />
              Get In Touch
            </motion.div>

            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Start a Project?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              We are always open to discussing new opportunities and interesting
              projects.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300"
              >
                Contact Us
                <ArrowRight size={18} />
              </motion.a>

              {/* --- REMOVED: Explore Our Code button --- */}
            </div>
          </div>
        </motion.div>
      </div>

      {/* --- REMOVED: Video Modal --- */}
    </section>
  );
};
