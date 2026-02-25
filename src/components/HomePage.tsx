import { motion, AnimatePresence } from 'framer-motion';
import {
  Heart,
  Sparkles,
  Menu,
  X,
  Motorbike,
  Users,
  BookOpen,
  Compass,
  Star,
  Lock,
  CheckCircle,
} from 'lucide-react';
import { useState, useEffect } from 'react';
import { Phone, MessageCircleMore, Hamburger, Pill, ShoppingCart, Clock } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'features', 'community', 'wisdom', 'cta', 'map'];
      let current = 'home';
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            current = section;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#features', label: 'Philosophy', id: 'features' },
    { href: '#community', label: 'Community', id: 'community' },
    { href: '#wisdom', label: 'Wisdom', id: 'wisdom' },
    { href: '#map', label: 'Delivery Map', id: 'map' },
  ];

  return (
    <nav className="bg-background/80 border-border/40 relative sticky top-0 z-50 flex w-full items-center justify-between border-b px-6 py-6 shadow-sm backdrop-blur-lg md:px-12">
      <a
        href="/"
        className="text-primary flex items-center gap-3 transition-opacity hover:opacity-80"
      >
        <Motorbike className="h-8 w-8" />
        <span className="font-heading text-foreground text-2xl font-bold">
          Livreur Marrakech
        </span>
      </a>

      {/* Desktop Nav */}
      <div className="hidden items-center gap-8 font-medium md:flex">
        {navLinks.map((link) => (
          <a
            key={link.id}
            href={link.href}
            className={`relative w-fit transition-colors ${
              activeSection === link.id
                ? 'text-primary font-bold'
                : 'text-muted-foreground hover:text-primary'
            }`}
          >
            <motion.div whileHover={{ scale: 1.05 }}>
              {link.label}
              {activeSection === link.id && (
                <motion.div
                  layoutId="activeIndicator"
                  className="bg-primary absolute right-0 bottom-0 left-0 h-1 rounded-full"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </motion.div>
          </a>
        ))}
        <a href="/join">
          <button
            className="font-heading bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6 py-2 font-bold shadow-lg transition-all hover:scale-105 hover:shadow-xl"
          >
            Join the Clowder
          </button>
        </a>
      </div>

      {/* Mobile Nav Toggle */}
      <button
        className="text-foreground bg-primary/10 hover:bg-primary/25 rounded-full p-2 transition-colors md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X /> : <Menu />}
      </button>

      {/* Mobile Nav Menu */}
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="bg-card border-border/60 absolute top-full right-4 left-4 z-50 mt-2 flex w-[calc(100%-2rem)] flex-col gap-6 rounded-2xl border p-8 shadow-2xl md:hidden"
          >
            {navLinks.map((link, idx) => (
              <motion.a
                key={link.id}
                href={link.href}
                onClick={() => setIsOpen(false)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ delay: idx * 0.08, duration: 0.25, ease: 'easeOut' }}
                whileHover={{ x: 4 }}
                className={`w-fit text-center text-lg font-medium transition-colors duration-300 ${
                  activeSection === link.id
                    ? 'text-primary font-bold'
                    : 'text-foreground hover:text-primary'
                }`}
              >
                {link.label}
              </motion.a>
            ))}
            <motion.div
              className="border-border/40 border-t pt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: navLinks.length * 0.08 + 0.1, duration: 0.25 }}
            >
              <a href="/join" className="block w-full" onClick={() => setIsOpen(false)}>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <button className="font-heading bg-primary text-primary-foreground hover:bg-primary/90 w-full rounded-full py-4 font-medium shadow-lg transition-all hover:shadow-xl">
                    Join the Clowder
                  </button>
                </motion.div>
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-[90vh] flex-col items-center overflow-hidden px-6 py-12 md:flex-row md:px-12 lg:px-24"
    >
      {/* Decorative Blobs */}
      <div className="bg-primary/10 absolute top-[-10%] left-[-10%] -z-10 h-[500px] w-[500px] rounded-full blur-3xl" />
      <div className="bg-accent/30 absolute right-[-5%] bottom-[10%] -z-10 h-[400px] w-[400px] rounded-full blur-3xl" />

      <div className="relative z-10 w-full space-y-8 md:w-1/2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-hand text-primary mb-4 inline-block -rotate-2 text-2xl">
            Bienvenue à Marrakech!
          </span>
          <h1 className="font-heading text-foreground mb-6 text-4xl leading-[1.1] font-bold md:text-5xl">
            Votre livreur rapide à{' '}
            <span className="text-foreground relative inline-block">
              Marrakech
            </span>
          </h1>
          <p className="text-muted-foreground max-w-md text-lg leading-relaxed md:text-xl">
            Avec Livreur Marrakech, recevez vos Médicaments, Repas et Courses 24h/24 partout dans la ville.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

// ===== New Delivery Map Section =====
const DeliveryMap = () => {
  const areas = [
    { name: 'Gueliz', top: '22%', left: '36%' },
    { name: 'Medina', top: '52%', left: '50%' },
    { name: 'Hivernage', top: '28%', left: '45%' },
    { name: 'Agdal', top: '65%', left: '55%' },
    { name: 'Menara', top: '70%', left: '42%' },
  ];

  return (
    <section id="map" className="relative bg-[hsl(0_0%_99%)] px-6 py-24 md:px-12 lg:px-24 text-center">
      <div className="mx-auto max-w-7xl">
        <h2 className="font-heading text-foreground text-3xl font-bold mb-12 md:text-4xl">
          Zones de Livraison à Marrakech
        </h2>

        <div className="relative mx-auto w-full max-w-4xl">
          <img
            src="/images/marrakech_map.png"
            alt="Marrakech Map"
            className="w-full rounded-2xl shadow-lg"
          />

          {areas.map((area, idx) => (
            <div
              key={idx}
              className="absolute flex flex-col items-center"
              style={{ top: area.top, left: area.left }}
            >
              <div className="h-4 w-4 rounded-full bg-primary animate-pulse border-2 border-white"></div>
              <span className="mt-1 text-xs font-semibold text-foreground bg-white/80 px-2 py-1 rounded">
                {area.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ===== Footer & other sections remain the same =====
// (Reuse your Features, Community, QuoteSection, Footer components here)

export default function Home() {
  return (
    <div className="bg-background selection:bg-primary/20 selection:text-primary-foreground min-h-screen">
      <Navigation />
      <Hero />
      <Features />
      <Community />
      <QuoteSection />
      <DeliveryMap /> {/* Added Map Section */}
      <section id="cta" className="px-6 py-24">
        {/* Your CTA content */}
      </section>
      <Footer />
    </div>
  );
      }
