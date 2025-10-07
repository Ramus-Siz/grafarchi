import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Seeding initial data...')

  // --- 1 Tenant (entreprise par défaut)
  const tenant = await prisma.tenant.upsert({
    where: { slug: 'demo-company' },
    update: {},
    create: {
      name: 'Demo Company',
      slug: 'demo-company',
      description: 'Entreprise de démonstration pour la plateforme d’archivage.',
    },
  })

  // --- Création du super administrateur
  const password = 'Admin123!'
  const hash = await bcrypt.hash(password, 10)

  const admin = await prisma.user.upsert({
    where: { email: 'admin@demo.com' },
    update: {},
    create: {
      email: 'admin@demo.com',
      firstName: 'Super',
      lastName: 'Admin',
      hash,
      role: 'SUPERADMIN',
      tenantId: tenant.id,
    },
  })

  // --- Dossier racine
  const rootFolder = await prisma.folder.create({
    data: {
      name: 'Racine',
      tenantId: tenant.id,
      createdById: admin.id,
    },
  })

  // --- Documents de démonstration
  await prisma.document.createMany({
    data: [
      {
        tenantId: tenant.id,
        folderId: rootFolder.id,
        title: 'Contrat de partenariat',
        description: 'Contrat signé entre Demo Company et XYZ SARL.',
        fileKey: 'docs/demo/contrat.pdf',
        fileMime: 'application/pdf',
        fileSize: 102400,
        tags: ['contrat', 'client'],
        createdById: admin.id,
      },
      {
        tenantId: tenant.id,
        folderId: rootFolder.id,
        title: 'Rapport trimestriel',
        description: 'Rapport du premier trimestre 2025.',
        fileKey: 'docs/demo/rapport_T1_2025.pdf',
        fileMime: 'application/pdf',
        fileSize: 204800,
        tags: ['rapport', 'finance'],
        createdById: admin.id,
      },
    ],
  })

  console.log(' Seed terminé avec succès !')
  console.log(' SuperAdmin : admin@demo.com / Admin123!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
