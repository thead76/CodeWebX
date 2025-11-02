import { useEffect, useState, useRef } from "react";
import {
  Home,
  User,
  Code,
  Briefcase,
  MessageSquare,
  Mail,
  BookOpen,
  // --- REMOVED: Sun, Moon ---
  Youtube,
  Volume2,
  VolumeX,
  Instagram,
  Linkedin,
} from "lucide-react";
import { motion } from "framer-motion";

// Simple 'cn' utility
function cn(...inputs) {
  return inputs.filter(Boolean).join(" ");
}

const navItems = [
  { name: "Home", href: "#hero", icon: Home },
  { name: "About", href: "#about", icon: User },
  { name: "Services", href: "#expertise", icon: Code },
  { name: "Projects", href: "#projects", icon: Briefcase },
  { name: "Testimonials", href: "#testimonials", icon: MessageSquare },
  { name: "Contact", href: "#contact", icon: Mail },
];

// --- REMOVED: ThemeToggle component ---

export const Navbar = () => {
  const [activeSection, setActiveSection] = useState("#hero");
  const [showNavbar, setShowNavbar] = useState(true);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [isAudioReady, setIsAudioReady] = useState(false);
  const lastScrollYRef = useRef(0);
  const audioRef = useRef(null);

  const musicUrl = "/music.mp3";

  // --- ADDED: useEffect to force dark mode on mount ---
  useEffect(() => {
    // Force dark mode
    document.documentElement.classList.add("dark");
    // Clean up light class if it exists
    document.documentElement.classList.remove("light");
    // Set local storage in case any other part of the app uses it
    localStorage.setItem("theme", "dark");
  }, []); // Empty dependency array ensures this runs only once on mount

  useEffect(() => {
    if (typeof window !== "undefined") {
      audioRef.current = new Audio(musicUrl);
      audioRef.current.loop = true;
      audioRef.current.volume = 0.5;
      audioRef.current.preload = "auto";

      const handleCanPlay = () => setIsAudioReady(true);

      audioRef.current.addEventListener("canplaythrough", handleCanPlay);

      return () => {
        if (audioRef.current) {
          audioRef.current.pause();
          audioRef.current.removeEventListener("canplaythrough", handleCanPlay);
          audioRef.current = null;
        }
      };
    }
  }, []);

  const toggleMusic = () => {
    if (!audioRef.current || !isAudioReady) return;

    if (isMusicPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(console.error);
    }

    setIsMusicPlaying(!isMusicPlaying);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollYRef.current && currentScrollY > 100) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      lastScrollYRef.current = currentScrollY;

      const sections = navItems.map((item) => item.href);
      const scrollPosition = currentScrollY + 100;

      for (const section of sections) {
        const element = document.querySelector(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Right Buttons */}
      <motion.div
        className="fixed top-4 right-4 z-50 flex gap-2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {/* GitHub Button */}

        {/* LinkedIn Button */}
        <motion.a
          href="https://www.linkedin.com/company/codewebx/"
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "p-2 rounded-full bg-card/60 dark:bg-card/60 backdrop-blur-md",
            "text-blue-600 hover:bg-blue-100 dark:hover:bg-blue-900/50",
            "border border-border/30 shadow-sm",
            "flex items-center justify-center"
          )}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          title="LinkedIn Profile"
          aria-label="LinkedIn Profile"
        >
          <Linkedin className="w-5 h-5" />
        </motion.a>

        {/* Instagram Button */}
        <motion.a
          href="https://www.instagram.com/codewebx.in/"
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "p-2 rounded-full bg-card/60 dark:bg-card/60 backdrop-blur-md",
            "text-pink-600 hover:bg-pink-100 dark:hover:bg-pink-900/50",
            "border border-border/30 shadow-sm",
            "flex items-center justify-center"
          )}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          title="Instagram Profile"
          aria-label="Instagram Profile"
        >
          <Instagram className="w-5 h-5" />
        </motion.a>

        {/* Music Button */}
        <motion.button
          onClick={toggleMusic}
          disabled={!isAudioReady}
          className={cn(
            "p-2 rounded-full bg-card/60 dark:bg-card/60 backdrop-blur-md",
            "text-primary hover:bg-primary/10 dark:hover:bg-primary/20",
            "border border-border/30 shadow-sm",
            "flex items-center justify-center",
            !isAudioReady && "opacity-50 cursor-not-allowed"
          )}
          whileHover={{ scale: isAudioReady ? 1.05 : 1 }}
          whileTap={{ scale: isAudioReady ? 0.95 : 1 }}
          title={
            isAudioReady
              ? isMusicPlaying
                ? "Pause music"
                : "Play music"
              : "Loading music..."
          }
          aria-label={
            isAudioReady
              ? isMusicPlaying
                ? "Pause music"
                : "Play music"
              : "Loading music"
          }
        >
          {isMusicPlaying ? (
            <Volume2 className="w-5 h-5" />
          ) : (
            <VolumeX className="w-5 h-5" />
          )}
        </motion.button>
      </motion.div>

      {/* Bottom Navbar */}
      <motion.div
        className={cn(
          "fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50",
          "transition-transform duration-300 ease-in-out",
          showNavbar ? "translate-y-0" : "translate-y-full"
        )}
        style={{ willChange: "transform" }}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex items-center justify-center bg-card/60 dark:bg-card/60 backdrop-blur-md rounded-full shadow-lg p-2 border border-border/30">
          <div className="flex space-x-1 items-center">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={cn(
                  "p-2 rounded-full transition-colors flex flex-col items-center",
                  activeSection === item.href
                    ? "bg-gradient-to-r from-primary to-purple-600 text-white shadow-md"
                    : "text-muted-foreground hover:text-primary"
                )}
                aria-label={item.name}
              >
                <item.icon className="w-5 h-5" />
                <span className="text-xs mt-1 hidden md:block">
                  {item.name}
                </span>
              </a>
            ))}
            {/* --- REMOVED: ThemeToggle wrapper div --- */}
          </div>
        </div>
      </motion.div>
    </>
  );
};
