'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { mockUser } from '@/lib/mock-data';

export default function Navbar() {
  const pathname = usePathname();
  const isMarketing = pathname === '/';

  const isMarketingOrAuth = pathname === '/' || pathname.startsWith('/auth');

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <Link href={isMarketing ? '/' : '/browse'} className="text-2xl font-bold text-white">
              AI<span className="text-purple-500">Flix</span>
            </Link>
          </div>

          <div className="flex items-center gap-4">
            {isMarketingOrAuth ? (
              <>
                <Link
                  href="/auth/login"
                  className="text-sm font-medium text-white hover:text-gray-300 transition-colors"
                >
                  Log In
                </Link>
                <Link
                  href="/auth/signup"
                  className="px-4 py-2 bg-purple-600 text-white text-sm font-medium rounded-lg hover:bg-purple-700 transition-colors"
                >
                  Get Started
                </Link>
              </>
            ) : (
              <>
                <Link
                  href="/credits"
                  className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white text-sm font-medium rounded-lg hover:bg-gray-700 transition-colors"
                >
                  <span className="text-purple-400">⚡</span>
                  {mockUser.credits} Credits
                </Link>
                <button className="w-8 h-8 rounded-full bg-purple-600 text-white font-medium hover:bg-purple-700 transition-colors">
                  {mockUser.name.charAt(0)}
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
