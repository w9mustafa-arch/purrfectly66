// HomePage.tsx (نسخة معدلة لـ Livreur Marrakech - خدمة توصيل)

import { motion, AnimatePresence } from 'framer-motion';
import {
  Heart,
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
      const sections = ['home', 'services', 'avis', 'zone', 'cta'];
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
    { href: '#services', label: 'Services', id: 'services' },
    { href: '#avis', label: 'Avis clients', id: 'avis' },
    { href: '#zone', label: 'Zone livraison', id: 'zone' },
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
            data-testid={`link-${link.id}`}
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
        <a href="https://wa.me/212600000000">
          <button
            data-testid="button-commander-nav"
            className="font-heading bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6 py-2 font-bold shadow-lg transition-all hover:scale-105 hover:shadow-xl"
          >
            Commander maintenant
          </button>
        </a>
      </div>

      {/* Mobile Nav Toggle */}
      <button
        className="text-foreground bg-primary/10 hover:bg-primary/25 rounded-full p-2 transition-colors md:hidden"
        onClick={() => setIsOpen(!isOpen)}
        data-testid="button-menu-toggle"
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
                data-testid={`link-${link.id}-mobile`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{
                  delay: idx * 0.08,
                  duration: 0.25,
                  ease: 'easeOut',
                }}
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
              transition={{
                delay: navLinks.length * 0.08 + 0.1,
                duration: 0.25,
              }}
            >
              <a
                href="https://wa.me/212600000000"
                className="block w-full"
                onClick={() => setIsOpen(false)}
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <button
                    data-testid="button-commander-mobile"
                    className="font-heading bg-primary text-primary-foreground hover:bg-primary/90 w-full rounded-full py-4 font-medium shadow-lg transition-all hover:shadow-xl"
                  >
                    Commander maintenant
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
            Bienvenue à Marrakech !
          </span>
          <h1 className="font-heading text-foreground mb-6 text-4xl leading-[1.1] font-bold md:text-5xl">
            Livreur rapide{' '}
            <span className="text-foreground relative inline-block">
              24h/24
              <svg
                className="text-accent absolute -bottom-1 left-0 -z-10 h-3 w-full"
                viewBox="0 0 100 10"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 5 Q 50 10 100 5"
                  stroke="currentColor"
                  strokeWidth="8"
                  fill="none"
                />
              </svg>
            </span>{' '}
            à Marrakech
          </h1>
          <p className="text-muted-foreground max-w-md text-lg leading-relaxed md:text-xl">
            Médicaments • Repas chauds • Courses & épicerie  
            Livraison express partout dans la ville – jour et nuit
          </p>

          {/* Trust Badges */}
          <motion.div
            className="flex flex-wrap gap-4 pt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {[
              { icon: Pill, label: 'Médicaments 24/7', color: 'text-green-600' },
              { icon: Hamburger, label: 'Repas chauds', color: 'text-orange-600' },
              { icon: ShoppingCart, label: 'Courses express', color: 'text-purple-600' },
              { icon: Clock, label: '24h/24 – 7j/7', color: 'text-red-600' },
            ].map((badge, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + idx * 0.1 }}
                className="bg-secondary/30 border-border/40 flex items-center justify-center gap-2 rounded-full border px-3 py-2"
              >
                <badge.icon
                  className={`h-4 w-4 flex-shrink-0 ${badge.color}`}
                />
                <span className="text-foreground text-xs font-semibold">
                  {badge.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <div className="relative mt-12 w-full md:mt-0 md:w-1/2">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative z-10"
        >
          {/* استبدل الصورة بصورة مناسبة للتوصيل */}
          <img
            src="/images/delivery-motorcycle-marrakech-night.png"  // ← ضع صورة حقيقية هنا
            alt="Livreur à moto la nuit à Marrakech"
            className="h-auto w-full transform rounded-[3rem] shadow-2xl transition-transform duration-700 hover:rotate-0 md:rotate-3"
          />

          {/* WhatsApp Button */}
          <motion.a
            href="https://wa.me/212600000000"
            target="_blank"
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut' }}
            className="group bg-white absolute -bottom-8 -left-4 flex items-center gap-3 rounded-2xl px-5 py-3 shadow-xl border border-gray-200 md:left-10 hover:shadow-2xl hover:-translate-y-1 transition-all"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500 text-white">
              <MessageCircleMore size={20} />
            </div>
            <div>
              <p className="text-sm font-bold text-gray-800">WhatsApp</p>
              <p className="text-xs text-gray-500">Envoyer un message</p>
            </div>
          </motion.a>

          {/* Call Button */}
          <motion.a
            href="tel:+212600000000"
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut', delay: 0.4 }}
            className="group bg-white absolute -top-4 -right-4 flex items-center gap-3 rounded-2xl px-5 py-3 shadow-xl border border-gray-200 md:-right-8 hover:shadow-2xl hover:-translate-y-1 transition-all"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500 text-white">
              <Phone size={20} />
            </div>
            <div>
              <p className="text-sm font-bold text-gray-800">Appeler</p>
              <p className="text-xs text-gray-500">Disponible 24h/24</p>
            </div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

const FeatureCard = ({
  title,
  desc,
  img,
  delay,
  testId,
}: {
  title: string;
  desc: string;
  img: string;
  delay: number;
  testId: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    whileHover={{ y: -10 }}
    data-testid={testId}
  >
    <div className="bg-card h-full overflow-hidden rounded-[2rem] border-none shadow-lg transition-shadow duration-300 hover:shadow-xl">
      <div className="flex h-full flex-col p-0">
        <div className="bg-secondary/30 flex h-48 items-center justify-center p-8">
          <motion.img
            src={img}
            alt={title}
            className="h-32 w-auto object-contain drop-shadow-md"
            whileHover={{ scale: 1.1 }}
          />
        </div>
        <div className="flex flex-1 flex-col items-center p-8 text-center">
          <h3 className="font-heading text-foreground mb-3 text-2xl font-bold">
            {title}
          </h3>
          <p className="text-muted-foreground leading-relaxed">{desc}</p>
        </div>
      </div>
    </div>
  </motion.div>
);

const Services = () => {
  return (
    <section
      id="services"
      className="relative bg-[hsl(0_0%_99%)] px-6 py-24 md:px-12 lg:px-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 space-y-4 text-center">
          <span className="font-hand text-primary text-xl">
            Livraison express à Marrakech
          </span>
          <h2 className="font-heading text-foreground text-3xl font-bold md:text-4xl">
            Nos Services 24h/24
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <FeatureCard
            title="Médicaments & Pharmacie"
            desc="Livraison rapide depuis les pharmacies de garde 24h/24 – ordonnances et médicaments sans ordonnance."
            img="/images/pharmacy-delivery-bag.png"   // ← غير الصورة إلى صورة مناسبة
            delay={0.1}
            testId="card-medicaments"
          />
          <FeatureCard
            title="Repas & Restaurants"
            desc="McDonald's, KFC, tajines, pizzas... vos plats arrivent chauds chez vous, même tard la nuit."
            img="/images/food-delivery-motorcycle.png"
            delay={0.2}
            testId="card-repas"
          />
          <FeatureCard
            title="Courses & Épicerie"
            desc="Supermarchés, produits du quotidien, courses lourdes – on fait vos achats à votre place."
            img="/images/grocery-delivery-bags.png"
            delay={0.3}
            testId="card-courses"
          />
        </div>
      </div>
    </section>
  );
};

const AvisClients = () => {
  const testimonials = [
    {
      name: 'Fatima Z.',
      role: 'Hivernage',
      quote: 'Médicaments reçus à 3h du matin en 28 minutes, service exceptionnel !',
      image: '/images/avatar-fatima.png',
    },
    {
      name: 'Youssef A.',
      role: 'Guéliz',
      quote: 'McDo à 1h du matin, chaud et ultra rapide. Merci beaucoup !',
      image: '/images/avatar-youssef.png',
    },
    {
      name: 'Amina L.',
      role: 'Palmeraie',
      quote: 'Courses lourdes sans bouger de chez moi, service top et fiable.',
      image: '/images/avatar-amina.png',
    },
    // يمكنك إضافة المزيد
  ];

  return (
    <section id="avis" className="relative bg-[hsl(0_0%_99%)] px-6 py-24 md:px-12 lg:px-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 space-y-4 text-center">
          <span className="font-hand text-primary text-xl">
            Ce que disent nos clients
          </span>
          <h2 className="font-heading text-foreground text-4xl font-bold md:text-5xl">
            Avis Clients
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((person, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div className="bg-[hsl(0_0%_100%)] h-full rounded-[2rem] border-none shadow-lg transition-shadow duration-300 hover:shadow-xl">
                <div className="flex h-full flex-col p-8">
                  <div className="mb-6 flex items-center gap-4">
                    <img
                      src={person.image}
                      alt={person.name}
                      className="h-14 w-14 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-heading text-foreground font-bold">
                        {person.name}
                      </p>
                      <p className="text-muted-foreground text-sm">
                        {person.role}
                      </p>
                    </div>
                  </div>
                  <p className="text-muted-foreground flex-1 leading-relaxed italic">
                    "{person.quote}"
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ZoneLivraison = () => {
  return (
    <section
      id="zone"
      className="bg-[hsl(210_36%_91%)] flex items-center justify-center px-6 py-24 text-center"
    >
      <motion.div
        className="relative max-w-4xl space-y-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-heading text-foreground text-4xl font-bold md:text-5xl">
          Nous couvrons tout Marrakech
        </h2>
        <p className="text-muted-foreground text-xl leading-relaxed">
          Guéliz • Hivernage • Médina • Palmeraie • Targa • Daoudiate • Massira • Agdal...
        </p>
        <div className="flex justify-center">
          <Compass className="h-24 w-24 text-primary" />
        </div>
        <p className="text-muted-foreground text-lg">
          Livraison express dans toute la ville – 24h/24 et 7j/7
        </p>
      </motion.div>
    </section>
  );
};

export const Footer = () => {
  return (
    <footer className="from-secondary/5 via-background to-primary/5 border-border/40 relative border-t bg-gradient-to-br px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8 lg:gap-12">
          {/* Left Column: Brand */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center space-y-3"
          >
            <div className="flex items-center gap-3">
              <Motorbike className="text-primary h-7 w-7" />
              <h3 className="font-heading text-foreground text-lg font-bold">
                Livreur Marrakech
              </h3>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Votre service de livraison express 24h/24 à Marrakech – médicaments, repas & courses.
            </p>
          </motion.div>

          {/* Center Column: Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-6"
          >
            <div className="space-y-3">
              <div className="text-primary flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                <span className="font-heading text-sm font-bold">Infos</span>
              </div>
              <div className="flex flex-col gap-2 pl-7">
                <a href="/comment-ca-marche" className="text-muted-foreground hover:text-primary w-fit text-sm transition-colors">
                  Comment ça marche
                </a>
                <a href="/faq" className="text-muted-foreground hover:text-primary w-fit text-sm transition-colors">
                  FAQ
                </a>
              </div>
            </div>

            <div className="space-y-3">
              <div className="text-primary flex items-center gap-2">
                <Users className="h-5 w-5" />
                <span className="font-heading text-sm font-bold">Contact</span>
              </div>
              <div className="flex flex-col gap-2 pl-7">
                <a href="/contact" className="text-muted-foreground hover:text-primary w-fit text-sm transition-colors">
                  Nous contacter
                </a>
                <a href="/about" className="text-muted-foreground hover:text-primary w-fit text-sm transition-colors">
                  À propos
                </a>
              </div>
            </div>

            <div className="space-y-3">
              <div className="text-primary flex items-center gap-2">
                <Lock className="h-5 w-5" />
                <span className="font-heading text-sm font-bold">Légal</span>
              </div>
              <div className="flex flex-col gap-2 pl-7">
                <a href="/privacy" className="text-muted-foreground hover:text-primary w-fit text-sm transition-colors">
                  Politique de confidentialité
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: CTA */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col justify-center space-y-4"
          >
            <div className="space-y-2">
              <h4 className="font-heading text-foreground font-bold">
                Prêt à commander ?
              </h4>
              <p className="text-muted-foreground text-sm">
                Contactez-nous via WhatsApp ou téléphone – disponible 24h/24
              </p>
            </div>
            <a href="https://wa.me/212600000000" className="w-full">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary text-primary-foreground hover:bg-primary/90 w-full rounded-full px-6 py-3 font-bold shadow-lg transition-all hover:shadow-xl"
              >
                Passer commande
              </motion.button>
            </a>
          </motion.div>
        </div>

        <div className="border-border/40 my-8 border-t" />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-muted-foreground/60 flex flex-col items-center justify-between gap-4 text-center text-xs md:flex-row"
        >
          <p>
            © {new Date().getFullYear()} Livreur Marrakech. Tous droits réservés.
          </p>
          <p className="flex items-center justify-center gap-1">
            Livraison rapide <Heart className="h-3 w-3 text-red-400" /> Marrakech
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default function Home() {
  return (
    <div className="bg-background selection:bg-primary/20 selection:text-primary-foreground min-h-screen">
      <Navigation />
      <Hero />
      <Services />
      <AvisClients />
      <ZoneLivraison />
      <section id="cta" className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 space-y-4 text-center"
          >
            <h2 className="font-heading text-foreground text-4xl font-bold md:text-5xl">
              Prêt à recevoir votre commande ?
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
              Contactez-nous maintenant – 24h/24
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              {
                id: 'cta-whatsapp',
                title: 'Via WhatsApp',
                description: 'Envoyez votre commande directement sur WhatsApp – réponse rapide.',
                href: 'https://wa.me/212600000000',
                testId: 'button-cta-whatsapp',
                icon: <MessageCircleMore className="text-primary h-8 w-8" />,
              },
              {
                id: 'cta-call',
                title: 'Par téléphone',
                description: 'Appelez-nous 24h/24 pour passer votre commande.',
                href: 'tel:+212600000000',
                testId: 'button-cta-call',
                icon: <Phone className="text-primary h-8 w-8" />,
              },
              {
                id: 'cta-zone',
                title: 'Vérifier la zone',
                description: 'Découvrez si nous livrons dans votre quartier à Marrakech.',
                href: '#zone',
                testId: 'button-cta-zone',
                icon: <Compass className="text-primary h-8 w-8" />,
              },
            ].map((cta, idx) => (
              <motion.div
                key={cta.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                whileHover={{ y: -8 }}
                className="bg-card flex h-full flex-col items-center gap-4 rounded-[2rem] p-8 text-center shadow-lg transition-shadow hover:shadow-xl"
              >
                <div className="bg-primary/15 flex h-16 w-16 items-center justify-center rounded-full">
                  {cta.icon}
                </div>
                <h3 className="font-heading text-foreground text-2xl font-bold">
                  {cta.title}
                </h3>
                <p className="text-muted-foreground flex-1">
                  {cta.description}
                </p>
                <a href={cta.href}>
                  <button
                    data-testid={cta.testId}
                    className="bg-primary text-primary-foreground hover:bg-primary/90 cursor-pointer rounded-full px-6 py-2 text-sm font-bold shadow-md transition-colors"
                  >
                    Commencer
                  </button>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
