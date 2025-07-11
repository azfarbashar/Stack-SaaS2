import { auth } from "@/auth" // Example: NextAuth.js or Supabase auth
import { redirect } from "next/navigation"

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await auth() // Check auth
  if (!session) redirect("/login") // Redirect if not logged in

  return (
    <div className="flex h-screen">
      <Sidebar /> {/* Your sidebar component */}
      <main className="flex-1 p-8">{children}</main>
    </div>
  )
}
