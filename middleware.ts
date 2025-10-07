export { default } from "next-auth/middleware"

export const config = {
  matcher: ["/dashboard/:path*"], // protège toutes les routes /dashboard
}
