"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { motion } from "framer-motion"

export default function Home() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      {/* ===== Hero Section ===== */}
      <section className="text-center py-32 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white w-full relative overflow-hidden">
        {/* SVG illustration */}
        <svg
          className="absolute top-0 right-0 w-64 h-64 opacity-20"
          viewBox="0 0 512 512"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="256" cy="256" r="256" fill="white" />
        </svg>

        <motion.h1
          className="text-5xl font-extrabold mb-4 z-10 relative"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
        >
          Archivage intelligent pour les entreprises
        </motion.h1>

        <motion.p
          className="text-lg mb-8 z-10 relative"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 0.8 }}
        >
          Centralisez vos documents, accédez rapidement et gardez tout en sécurité.
        </motion.p>

        <motion.div initial="hidden" animate="visible" variants={fadeInUp} transition={{ delay: 1 }}>
          <Button className="bg-white text-blue-600 font-bold px-8 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-transform">
            Commencer maintenant
          </Button>
        </motion.div>
      </section>

      {/* ===== Features Section ===== */}
      <section className="py-24 px-6 w-full max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-12">Fonctionnalités clés</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Sécurité avancée",
              desc: "Chiffrement des documents, gestion des rôles et audit complet pour votre tranquillité d'esprit.",
            },
            {
              title: "Recherche rapide",
              desc: "Retrouvez vos documents en un instant grâce à la recherche full-text et aux tags personnalisés.",
            },
            {
              title: "Multi-tenant",
              desc: "Chaque entreprise dispose de son espace sécurisé avec gestion indépendante des utilisateurs et documents.",
            },
          ].map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
            >
              <Card className="hover:shadow-2xl transition-shadow transform hover:-translate-y-1">
                <CardHeader>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>{feature.desc}</CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== Pricing Section ===== */}
      <section className="py-24 px-6 w-full max-w-6xl bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-12">Nos tarifs</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Starter",
              desc: "Pour petites équipes",
              price: "€29/mois",
              features: ["Jusqu'à 10 utilisateurs", "50 Go de stockage", "Support email"],
              cta: "Choisir",
            },
            {
              name: "Pro",
              desc: "Pour entreprises en croissance",
              price: "€79/mois",
              features: ["Jusqu'à 50 utilisateurs", "500 Go de stockage", "Support prioritaire"],
              cta: "Choisir",
            },
            {
              name: "Enterprise",
              desc: "Solution complète",
              price: "Sur demande",
              features: ["Utilisateurs illimités", "Stockage illimité", "Support dédié"],
              cta: "Contactez-nous",
            },
          ].map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
            >
              <Card className="text-center hover:shadow-2xl transform hover:-translate-y-1 transition-all">
                <CardHeader>
                  <CardTitle>{plan.name}</CardTitle>
                  <CardDescription>{plan.desc}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold mb-4">{plan.price}</p>
                  <ul className="mb-4 text-left list-disc list-inside">
                    {plan.features.map((f, idx) => (
                      <li key={idx}>{f}</li>
                    ))}
                  </ul>
                  <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:scale-105 transition-transform">
                    {plan.cta}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== Footer ===== */}
      <footer className="py-12 w-full bg-gray-800 text-white text-center">
        <p>&copy; 2025 ArchivageApp. Tous droits réservés.</p>
      </footer>
    </main>
  )
}
