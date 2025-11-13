'use client';

import { usePathname } from 'next/navigation';

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // Don't add margin on marketing or auth pages
  const isMarketingOrAuth = pathname === '/' || pathname.startsWith('/auth');

  return (
    <div className={isMarketingOrAuth ? '' : 'ml-20'}>
      {children}
    </div>
  );
}
