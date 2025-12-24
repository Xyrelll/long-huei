import Link from 'next/link';

const footerLinks = [
  { label: '旅遊', href: '/travel' },
  { label: '桑拿', href: '/sauna' },
  { label: '包車', href: '/car-rental' },
  { label: '訂房', href: '/booking' },
  { label: '其他娛樂', href: '/entertainment' },
  { label: '常見問答', href: '/faq' },
  { label: '專人客服', href: '/contact' },
  { label: '隱私權條款', href: '/privacy' },
];

export default function Footer() {
  return (
    <footer className="w-full bg-black py-8">
      <div className="container mx-auto px-7">
        {/* Footer Navigation */}
        <div className="flex flex-col gap-2 mb-6">
          <div className="flex flex-wrap gap-4">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[7.9px] leading-[13px] tracking-[1.28px] text-white hover:text-[#F5CA69] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-[15.7px] leading-[23px] tracking-[0.367px] text-[#DDDDDD]">
            Copyright 2025 All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

