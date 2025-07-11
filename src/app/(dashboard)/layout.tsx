import { createClient } from '@/lib/supabase/server';
import { redirect } from 'next/navigation';
import Sidebar from '@/components/sidebar';

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // 1. Authenticate user
  const supabase = createClient();
  const { data: { user }, error } = await supabase.auth.getUser();

  // 2. Redirect if not logged in
  if (!user || error) {
    redirect('/login');
  }

  // 3. Dashboard layout structure
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar Navigation */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto">
        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto py-4 px-6 flex justify-between items-center">
            <h1 className="text-xl font-semibold text-stack-navy">
              Stack Dashboard
            </h1>
            <div className="flex items-center space-x-4">
              {/* User avatar/profile dropdown */}
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="max-w-7xl mx-auto py-6 px-6">
          {children}
        </main>
      </div>
    </div>
  );
}
