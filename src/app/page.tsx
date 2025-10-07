import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      {/* ===== Hero Section ===== */}
      <section className="text-center py-32 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white w-full">
        <h1 className="text-5xl font-extrabold mb-4">Archivage simplifié pour les entreprises</h1>
        <p className="text-lg mb-8">
          Gérez et archivez tous vos documents en toute sécurité avec notre plateforme moderne et intuitive.
        </p>
        <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
          Commencer maintenant
        </Button>
      </section>

      {/* ===== Features Section ===== */}
      <section className="py-24 px-6 w-full max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-12">Fonctionnalités clés</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>Sécurité avancée</CardTitle>
            </CardHeader>
            <CardContent>
              Chiffrement des documents, gestion des rôles et audit complet pour votre tranquillité d'esprit.
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>Recherche rapide</CardTitle>
            </CardHeader>
            <CardContent>
              Retrouver vos documents en un instant grâce à la recherche full-text et aux tags personnalisés.
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>Multi-tenant</CardTitle>
            </CardHeader>
            <CardContent>
              Chaque entreprise dispose de son espace sécurisé avec gestion indépendante des utilisateurs et documents.
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ===== Pricing Section ===== */}
      <section className="py-24 px-6 w-full max-w-6xl bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-12">Nos tarifs</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>Starter</CardTitle>
              <CardDescription>Pour petites équipes</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold mb-4">€29/mois</p>
              <ul className="mb-4 text-left">
                <li>- Jusqu'à 10 utilisateurs</li>
                <li>- 50 Go de stockage</li>
                <li>- Support email</li>
              </ul>
              <Button>Choisir</Button>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>Pro</CardTitle>
              <CardDescription>Pour entreprises en croissance</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold mb-4">€79/mois</p>
              <ul className="mb-4 text-left">
                <li>- Jusqu'à 50 utilisateurs</li>
                <li>- 500 Go de stockage</li>
                <li>- Support prioritaire</li>
              </ul>
              <Button>Choisir</Button>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>Enterprise</CardTitle>
              <CardDescription>Solution complète</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold mb-4">Sur demande</p>
              <ul className="mb-4 text-left">
                <li>- Utilisateurs illimités</li>
                <li>- Stockage illimité</li>
                <li>- Support dédié</li>
              </ul>
              <Button>Contactez-nous</Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ===== Footer ===== */}
      <footer className="py-12 w-full bg-gray-800 text-white text-center">
        <p>&copy; 2025 ArchivageApp. Tous droits réservés.</p>
      </footer>
    </main>
  )
}
