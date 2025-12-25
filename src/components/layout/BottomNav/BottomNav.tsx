'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import TravelIcon from '../../../../public/Images/nacicon';
import '../../../styles/bottomnav.css';

const bottomNavItems = [
  {
    label: '旅遊',
    href: '/ArticleCategory/Travel',
    icon: 'travel' as const,
  },
  {
    label: '訂房',
    href: '/ArticleCategory/Booking',
    icon: 'bed' as const,
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

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="bottom-nav">
      <div className="bottom-nav-container  ">
        {bottomNavItems.map((item) => {
          const isActive = pathname === item.href || pathname?.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`bottom-nav-item ${isActive ? 'active' : ''}`}
            >
              <div className="bottom-nav-icon">
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

