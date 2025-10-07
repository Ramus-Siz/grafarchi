import NextAuth from "next-auth"

declare module "next-auth" {
  interface Session {
    user: {
      id: string
      name?: string | null
      email?: string | null
      role: string
      tenantId: string
    }
  }

  interface User {
    id: string
    role: string
    tenantId: string
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    role: string
    tenantId: string
  }
}
