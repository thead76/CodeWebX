"use client";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";

// --- NAYA TESTIMONIALS ARRAY (Project-Based & English) ---
const testimonials = [
  {
    id: 1,
    name: "Rohan Gupta",
    role: "Founder, Vante & Co.",
    project: "Vante & Co.",
    logo: "/projects/project1.webp", // Project image as logo
    content: `CodeWebX took our e-commerce vision to a whole new level. The seamless checkout experience and product recommendation engine they built for 'Vante & Co.' has proven to be a game-changer for our sales.`, // --- TRANSLATED ---
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Project Head, CodeXpert",
    project: "CodeXpert",
    logo: "/projects/project.webp", // Project image as logo
    content: `Managing a complex collaborative platform like 'CodeXpert' was not easy. The CodeWebX team not only achieved our project management goals but also delivered a highly productive tool. Their team's dedication is outstanding.`, // --- TRANSLATED ---
  },
  {
    id: 3,
    name: "Amit Singh",
    role: "CEO, Career Sarthi",
    project: "Career Sarthi",
    logo: "/projects/project3.webp", // Project image as logo
    content: `Our AI-powered mentor, 'Career Sarthi,' would not have been possible without CodeWebX. They integrated the personalized roadmaps and mock interview features so flawlessly that our user engagement has increased significantly.`, // --- TRANSLATED ---
  },
  {
    id: 4,
    name: "Sneha Reddy",
    role: "Owner, UrbanFungi",
    project: "UrbanFungi",
    logo: "/projects/project2.webp", // Project image as logo
    content: `As a sustainable brand, it was crucial for our website to convey an eco-friendly message. CodeWebX created a fresh and organic design for 'UrbanFungi' that perfectly represents our brand.`, // --- TRANSLATED ---
  },
];
// --- END NAYA TESTIMONIALS ARRAY ---

export const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef(null);
  // Scroll par load karne ke liye
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [isHovering, setIsHovering] = useState(false);

  // --- Carousel Logic ---
  const nextReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevReview = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  // --- Auto-play Logic ---
  useEffect(() => {
    let autoPlay;
    if (!isHovering) {
      autoPlay = setInterval(() => {
        nextReview();
      }, 5000); // Har 5 second mein slide change hogi
    }
    return () => clearInterval(autoPlay); // Cleanup
  }, [currentIndex, isHovering]);

  const currentTestimonial = testimonials[currentIndex];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.04, 0.62, 0.23, 0.98],
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const carouselVariants = {
    enter: { opacity: 0, scale: 0.95 },
    center: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.95 },
  };

  return (
    <section
      id="testimonials"
      className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-background via-background to-primary/5" // Theme match
      ref={ref}
    >
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 -z-10 opacity-[0.03] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      {/* Background Gradient Blurs (Theme matched) */}
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

      <div className="container max-w-5xl mx-auto">
        <motion.div
          className="flex flex-col items-center"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* --- HEADER --- */}
          <motion.div
            className="text-center mb-12 md:mb-16"
            variants={itemVariants}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Star className="h-4 w-4" />
              Client Feedback
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Trusted by
              <span className="block text-primary">Great Companies</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {/* --- TRANSLATED --- */}
              Listen to what our partners have to say about our work.
            </p>
          </motion.div>

          {/* --- CAROUSEL --- */}
          <motion.div
            className="relative w-full max-w-4xl"
            variants={itemVariants}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            {/* Carousel Content */}
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={currentIndex}
                variants={carouselVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="w-full"
              >
                {/* --- NAYA "AMAZING" CARD --- */}
                <div className="bg-card/50 backdrop-blur-xl border border-border/30 rounded-3xl shadow-2xl overflow-hidden">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
                    {/* Left: Review Content */}
                    <div className="md:col-span-7 p-8 md:p-12 flex flex-col justify-center">
                      <Quote className="h-12 w-12 text-primary/30 mb-6" />
                      <p className="text-lg md:text-xl font-medium text-foreground leading-relaxed flex-grow">
                        "{currentTestimonial.content}"
                      </p>
                      <div className="mt-8 pt-6 border-t border-border/30">
                        <h4 className="font-bold text-lg text-foreground">
                          {currentTestimonial.name}
                        </h4>
                        <p className="text-sm text-primary">
                          {currentTestimonial.role}
                        </p>
                      </div>
                    </div>

                    {/* Right: Project Image */}
                    <div className="md:col-span-5 bg-gradient-to-br from-primary/10 to-background border-l border-border/30 p-8 flex flex-col items-center justify-center text-center">
                      <div className="w-40 h-40 rounded-2xl overflow-hidden border-4 border-primary/20 shadow-lg mb-4">
                        <img
                          src={currentTestimonial.logo}
                          alt={`${currentTestimonial.project} logo`}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.currentTarget.src = "/logos/fallback-logo.png"; // Fallback image
                          }}
                        />
                      </div>
                      <p className="text-xs text-muted-foreground mb-1">
                        Review from
                      </p>
                      <h5 className="font-bold text-lg text-foreground">
                        {currentTestimonial.project}
                      </h5>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <button
              onClick={prevReview}
              className="absolute top-1/2 -left-4 md:-left-8 z-10 -translate-y-1/2 p-3 bg-card/50 backdrop-blur-lg border border-border/30 rounded-full text-foreground hover:text-primary hover:border-primary/50 transition-all duration-300 shadow-lg"
              aria-label="Previous review"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextReview}
              className="absolute top-1/2 -right-4 md:-right-8 z-10 -translate-y-1/2 p-3 bg-card/50 backdrop-blur-lg border border-border/30 rounded-full text-foreground hover:text-primary hover:border-primary/50 transition-all duration-300 shadow-lg"
              aria-label="Next review"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </motion.div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? "bg-primary scale-125"
                    : "bg-muted-foreground/20 hover:bg-muted-foreground/50"
                }`}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
