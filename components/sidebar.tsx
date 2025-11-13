'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { mockUser } from '@/lib/mock-data';

const navigation = [
  {
    name: 'Search',
    href: '/browse',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    name: 'Home',
    href: '/browse',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    name: 'Create',
    href: '/create',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
      </svg>
    ),
  },
  {
    name: 'My Videos',
    href: '/my-videos',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
  },
  {
    name: 'Credits',
    href: '/credits',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  // Don't show sidebar on marketing or auth pages
  const isMarketingOrAuth = pathname === '/' || pathname.startsWith('/auth');

  if (isMarketingOrAuth) {
    return null;
  }

  return (
    <aside className="fixed left-0 top-0 h-screen w-20 bg-black border-r border-gray-900 z-50 flex flex-col items-center py-5">
      {/* Logo */}
      <Link href="/browse" className="mb-6">
        <div className="w-9 h-9 bg-[#FF4500] rounded flex items-center justify-center text-white font-bold text-lg hover:bg-[#E03E00] transition-colors">
          A
        </div>
      </Link>

      {/* Navigation */}
      <nav className="flex-1 flex flex-col items-center gap-3">
        {navigation.map((item) => {
          const isActive = pathname === item.href;
          const isCredits = item.name === 'Credits';
          return (
            <Link
              key={item.name}
              href={item.href}
              className="relative group"
              title={item.name}
            >
              <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
                isActive
                  ? 'bg-[#FF4500]/15 text-[#FF4500]'
                  : 'bg-gray-900/50 text-gray-500 group-hover:bg-gray-800/70 group-hover:text-white'
              }`}>
                {item.icon}
              </div>
              {isCredits && (
                <span className="absolute -top-0.5 -right-0.5 bg-[#FF4500] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full min-w-[20px] text-center leading-none shadow-lg">
                  {mockUser.credits}
                </span>
              )}
            </Link>
          );
        })}
      </nav>

      {/* User Avatar */}
      <button className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center text-white font-semibold text-sm hover:bg-gray-700 transition-colors border border-gray-700">
        {mockUser.name.charAt(0)}
      </button>
    </aside>
  );
}
