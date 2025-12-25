import Link from 'next/link';

const footerLinks = [
  { label: '龍匯天下', href: '/' },
  { label: '旅遊', href: '/ArticleCategory/Travel' },
  { label: '桑拿', href: '/ArticleCategory/Sauna' },
  { label: '包車', href: '/ArticleCategory/RentCar' },
  { label: '訂房', href: '/ArticleCategory/Booking' },
  { label: '其他娛樂', href: '/ArticleCategory/Entertainment' },
  { label: '常見問答', href: '/ArticleCategory/Question' },
  { label: '專人客服', href: '/CustomerService' },
  { label: '隱私權條款', href: '/Privacy' },
];

export default function Footer() {
  return (
    <footer id="footer" className="w-full bg-black py-8 mb-100 flex flex-col mt-8">
      {/* Copyright - Desktop: Top position */}
      <p className="copyright text-center text-white text-xs hidden md:block mb-4">Copyright 2025 All Rights Reserved.</p>
      
      {/* Desktop: Horizontal layout */}
      <ul className="footer-links-desktop hidden md:flex flex-wrap justify-center items-center gap-2 list-none p-0 m-0 px-4">
        {footerLinks.map((link, index) => (
          <li key={link.href} className="flex items-center">
            <Link
              href={link.href}
              className="text-white text-sm hover:text-[#FFCD83] transition-colors"
            >
              {link.label}
            </Link>
            {index < footerLinks.length - 1 && (
              <span className="text-white text-sm mx-2">|</span>
            )}
          </li>
        ))}
      </ul>
      
      {/* Mobile: Vertical column layout */}
      <ul className="footer-links-mobile flex md:hidden flex-col items-center justify-center gap-0 list-none p-0 m-0 px-4 mb-4">
        {footerLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-white text-sm hover:text-[#FFCD83] transition-colors"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
      
      {/* Copyright - Mobile: Bottom position */}
      <p className="copyright text-center text-white text-xs flex md:hidden mt-auto w-full  justify-center items-center">Copyright 2025 All Rights Reserved.</p>
    </footer>
  );
}
