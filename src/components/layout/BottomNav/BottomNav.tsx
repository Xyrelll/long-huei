'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import TravelIcon from '../../../../public/Images/nacicon';
import '../../../styles/bottomnav.css';

interface BottomNavProps {
  iconSizeMobile?: number; // Icon size for mobile (default: 32px)
  iconSizeDesktop?: number; // Icon size for desktop (default: 40px)
}

const bottomNavItems = [ 
  {
    label: '訂房',
    href: '/ArticleCategory/Booking',
    icon: 'bed' as const,
  },
  {
    label: '旅遊',
    href: '/ArticleCategory/Travel',
    icon: 'travel' as const,
  },
  {
    label: '包車',
    href: '/ArticleCategory/RentCar',
    icon: 'car' as const,
  },
  {
    label: '專人客服',
    href: '/CustomerService',
    icon: 'headset' as const,
  },
];

export default function BottomNav({ iconSizeMobile = 32, iconSizeDesktop = 40 }: BottomNavProps) {
  const pathname = usePathname();

  return (
    <nav className="bottom-nav">
      <div className="bottom-nav-container">
        {bottomNavItems.map((item) => {
          const isActive = pathname === item.href || pathname?.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`bottom-nav-item ${isActive ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                window.location.href = item.href;
              }}
            >
              <div 
                className="bottom-nav-icon"
                style={{
                  '--icon-size-mobile': `${iconSizeMobile}px`,
                  '--icon-size-desktop': `${iconSizeDesktop}px`,
                } as React.CSSProperties}
              >
                <TravelIcon icon={item.icon} />
              </div>
              <span className="bottom-nav-label">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

