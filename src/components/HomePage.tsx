import { motion } from "framer-motion";
import {
  Motorbike,
  Phone,
  MessageCircleMore,
  Clock,
  ShieldCheck,
  Star,
  MapPin,
} from "lucide-react";

export default function Home() {
  return (
    <div className="bg-white text-gray-900">

      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <div className="flex items-center gap-2 font-bold text-lg">
            <Motorbike className="text-green-600" />
            Livreur Marrakech
          </div>

          <div className="hidden md:flex gap-8 font-medium">
            <a href="#services">Services</a>
            <a href="#how">Comment ça marche</a>
            <a href="#faq">FAQ</a>
          </div>

          <a
            href="https://wa.me/212600000000"
            className="bg-green-600 text-white px-5 py-2 rounded-full font-semibold shadow hover:bg-green-700"
          >
            Commander
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl font-bold leading-tight mb-6"
            >
              Livraison rapide à Marrakech en moins de 30 min
            </motion.h1>

            <p className="text-gray-600 mb-8 text-lg">
              Repas, médicaments et courses livrés rapidement avec un service fiable disponible 24h/24.
            </p>

            <div className="flex gap-4">
              <a
                href="https://wa.me/212600000000"
                className="bg-green-600 text-white px-6 py-3 rounded-full font-semibold shadow hover:bg-green-700 flex items-center gap-2"
              >
                <MessageCircleMore /> WhatsApp
              </a>

              <a
                href="tel:+212600000000"
                className="border px-6 py-3 rounded-full font-semibold flex items-center gap-2"
              >
                <Phone /> Appeler
              </a>
            </div>

            <div className="flex gap-6 mt-8 text-sm text-gray-500">
              <div className="flex items-center gap-1"><Clock /> 24h/24</div>
              <div className="flex items-center gap-1"><ShieldCheck /> Service fiable</div>
              <div className="flex items-center gap-1"><Star /> 5 étoiles</div>
            </div>
          </div>

          <motion.img
            src="/images/delivery.jpg"
            className="rounded-3xl shadow-xl"
            initial={{ opacity: 0, scale: .9 }}
            animate={{ opacity: 1, scale: 1 }}
          />

        </div>
      </section>

      {/* STATS */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 text-center gap-8">
          <Stat number="500+" label="Livraisons réussies" />
          <Stat number="30 min" label="Temps moyen" />
          <Stat number="24h/24" label="Disponibilité" />
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Nos Services</h2>
          <p className="text-gray-500">Tout livré rapidement</p>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          <Service title="Livraison de repas" desc="Depuis votre restaurant préféré." />
          <Service title="Livraison médicaments" desc="Rapide et sécurisé." />
          <Service title="Courses & shopping" desc="Nous faisons vos achats." />
        </div>
      </section>

      {/* HOW */}
      <section id="how" className="bg-gray-50 py-24 px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Comment ça marche</h2>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          <Step number="1" title="Envoyez votre commande" />
          <Step number="2" title="Confirmation rapide" />
          <Step number="3" title="Livraison chez vous" />
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Avis clients</h2>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          <Testimonial name="Ahmed" text="Service rapide et professionnel." />
          <Testimonial name="Sara" text="Meilleur livreur à Marrakech !" />
          <Testimonial name="Youssef" text="Très fiable et ponctuel." />
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-gray-50 py-24 px-6">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl font-bold text-center mb-8">FAQ</h2>

          <Faq q="Temps de livraison ?" a="En moyenne 30 minutes." />
          <Faq q="Disponible la nuit ?" a="Oui service 24h/24." />
          <Faq q="Zones couvertes ?" a="Toute la ville de Marrakech." />
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center px-6">
        <h2 className="text-3xl font-bold mb-4">
          Besoin d’une livraison rapide ?
        </h2>

        <a
          href="https://wa.me/212600000000"
          className="bg-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow hover:bg-green-700"
        >
          Commander maintenant
        </a>
      </section>

      {/* FOOTER */}
      <footer className="border-t py-8 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Livreur Marrakech
      </footer>

    </div>
  );
}

/* COMPONENTS */

function Service({ title, desc }) {
  return (
    <div className="bg-white rounded-2xl shadow p-8 text-center hover:shadow-lg transition">
      <h3 className="font-bold text-xl mb-3">{title}</h3>
      <p className="text-gray-500">{desc}</p>
    </div>
  );
}

function Step({ number, title }) {
  return (
    <div className="bg-white shadow rounded-2xl p-8 text-center">
      <div className="text-green-600 text-3xl font-bold mb-3">{number}</div>
      <p className="font-semibold">{title}</p>
    </div>
  );
}

function Testimonial({ name, text }) {
  return (
    <div className="bg-white shadow rounded-2xl p-6 text-center">
      <p className="italic mb-3">"{text}"</p>
      <p className="font-bold">{name}</p>
    </div>
  );
}

function Faq({ q, a }) {
  return (
    <div className="bg-white shadow rounded-xl p-6">
      <p className="font-semibold">{q}</p>
      <p className="text-gray-500">{a}</p>
    </div>
  );
}

function Stat({ number, label }) {
  return (
    <div>
      <p className="text-3xl font-bold text-green-600">{number}</p>
      <p className="text-gray-500">{label}</p>
    </div>
  );
}
