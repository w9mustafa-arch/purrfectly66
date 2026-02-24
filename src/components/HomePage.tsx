import { motion } from "framer-motion";
import {
  Motorbike,
  Phone,
  MessageCircleMore,
  Clock,
  ShieldCheck,
  MapPin,
  Star,
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
            <a href="#zones">Zones</a>
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
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Livraison rapide à Marrakech en moins de 30 min
            </h1>

            <p className="text-gray-600 mb-8 text-lg">
              Commandez repas, médicaments ou courses avec un service fiable disponible 24h/24.
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

      {/* SERVICES */}
      <section id="services" className="bg-gray-50 py-20 px-6">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold">Nos Services</h2>
          <p className="text-gray-500 mt-2">Tout ce dont vous avez besoin livré rapidement</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">

          <ServiceCard
            title="Livraison de repas"
            desc="Commandez depuis votre restaurant préféré."
          />

          <ServiceCard
            title="Livraison de médicaments"
            desc="Service rapide et sécurisé depuis votre pharmacie."
          />

          <ServiceCard
            title="Courses & shopping"
            desc="Nous faisons vos courses et livrons à domicile."
          />

        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Comment ça marche</h2>

          <div className="grid md:grid-cols-3 gap-8">

            <Step number="1" title="Envoyez votre commande" />
            <Step number="2" title="Confirmation rapide" />
            <Step number="3" title="Livraison chez vous" />

          </div>
        </div>
      </section>

      {/* ZONES */}
      <section id="zones" className="bg-gray-50 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <MapPin className="mx-auto mb-4 text-green-600" size={40} />
          <h2 className="text-3xl font-bold mb-4">Zones desservies</h2>
          <p className="text-gray-600">
            Livraison disponible dans toute la ville de Marrakech et ses environs.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Besoin d’une livraison rapide ?
        </h2>

        <p className="text-gray-600 mb-8">
          Contactez-nous maintenant et recevez votre commande rapidement.
        </p>

        <a
          href="https://wa.me/212600000000"
          className="bg-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow hover:bg-green-700"
        >
          Commander sur WhatsApp
        </a>
      </section>

      {/* FOOTER */}
      <footer className="border-t py-8 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Livreur Marrakech — Service de livraison rapide
      </footer>

    </div>
  );
}

/* COMPONENTS */

function ServiceCard({ title, desc }) {
  return (
    <div className="bg-white rounded-2xl shadow p-8 text-center hover:shadow-lg transition">
      <h3 className="font-bold text-xl mb-3">{title}</h3>
      <p className="text-gray-500">{desc}</p>
    </div>
  );
}

function Step({ number, title }) {
  return (
    <div className="bg-white shadow rounded-2xl p-8">
      <div className="text-green-600 text-3xl font-bold mb-3">{number}</div>
      <p className="font-semibold">{title}</p>
    </div>
  );
}
