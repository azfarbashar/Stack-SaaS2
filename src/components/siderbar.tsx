import Link from 'next/link';

export default function Sidebar() {
  return (
    <div className="w-64 bg-white border-r border-gray-200">
      <div className="p-4">
        <h2 className="text-lg font-semibold text-stack-navy">Stack</h2>
      </div>
      <nav className="mt-6">
        <Link 
          href="/dashboard/content-generator"
          className="block px-4 py-2 text-gray-700 hover:bg-stack-navy hover:text-white"
        >
          Content Generator
        </Link>
        {/* Add more navigation links as needed */}
      </nav>
    </div>
  );
}
