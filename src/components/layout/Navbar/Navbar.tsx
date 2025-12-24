'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className="fixed top-0 left-0 z-50 w-full max-w-full"
      style={{
        width: '100vw',
        height: '80px',
        maxHeight: '80px',
        left: '50%',
        transform: 'translateX(-50%)',
        background: 'rgba(0, 0, 0, 0.8)',
        borderBottom: '3px solid #CD861A',
        borderRadius: '0px',
        mixBlendMode: 'normal',
        padding: '16px',
        boxSizing: 'border-box',
        opacity: '100%',
        position: 'relative',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: '.5rem',
        paddingBottom: '.5rem',




      }}
    >
      


      <div className="container-fluid h-full flex items-center justify-center ">
        {/* Mobile Toggle Button */}
        <button
          className="navbar-toggler nav-icon lg:hidden"
          type="button"
          onClick={toggleMenu}
          aria-label="Toggle navigation"
          title="Toggle Menu"
          style={{
            background: 'transparent',
            border: 'none',
            color: '#FFFFFF',
            fontSize: '24px',
            padding: '8px',
            cursor: 'pointer',
          }}
        >

          





          <i className="bi bi-list">☰</i>
        </button>

        {/* Logo */}
        <Link href="/" className="navbar-brand flex items-center">
          <picture>
            <source srcSet="/Images/logo-m.png" media="(min-width: 576px)" />
            <Image
              src="/Images/logo-m.png" //mobile logo
              alt="Dragon Gathering World"
              title="Dragon Gathering World"
              width={58.55}
              height={80}
              className="object-contain"
              priority
            />
          </picture>
        </Link>
      
       


        {/* Desktop Logo */}

        {/* Mobile Search Icon */}
        <Link
          href="/Search"
          className="navbar-toggler nav-icon lg:hidden"
          title="Search Articles"
          style={{
            background: 'transparent',
            border: 'none',
            color: '#FFFFFF',
            fontSize: '24px',
            padding: '8px',
            textDecoration: 'none',
          }}
        >
          <i className="bi bi-search">🔍</i>
        </Link>

        {/* Collapsible Menu */}
        <div
          className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}
          id="navbarNav"
          style={{
            display: isMenuOpen ? 'block' : 'none',
            position: 'absolute',
            top: '99px',
            left: '0',
            right: '0',
            background: 'rgba(0, 0, 0, 0.95)',
            borderTop: '3px solid #CD861A',
            padding: '16px',
          }}
        >
          <ul
            itemScope
            itemType="http://www.schema.org/SiteNavigationElement"
            className="navbar-nav flex flex-col lg:flex-row gap-4"
            style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
            }}
          >
            <li itemProp="name" className="nav-item">
              <Link
                itemProp="url"
                href="/ArticleCategory/Travel"
                className="nav-link active flex items-center gap-2"
                aria-current="page"
                style={{
                  color: '#FFFFFF',
                  textDecoration: 'none',
                  padding: '8px 16px',
                  borderRadius: '4px',
                }}
              >
                <i className="fas fa-suitcase-rolling" aria-hidden="true">
                  🧳
                </i>
                <span>travel</span>
              </Link>
            </li>

            <li itemProp="name" className="nav-item">
              <Link
                itemProp="url"
                href="/ArticleCategory/Booking"
                className="nav-link flex items-center gap-2"
                style={{
                  color: '#FFFFFF',
                  textDecoration: 'none',
                  padding: '8px 16px',
                  borderRadius: '4px',
                }}
              >
                <i className="fas fa-bed" aria-hidden="true">🛏️</i>
                <span>Booking</span>
              </Link>
            </li>

            <li itemProp="name" className="nav-item">
              <Link
                itemProp="url"
                href="/ArticleCategory/Sauna"
                className="nav-link flex items-center gap-2"
                style={{
                  color: '#FFFFFF',
                  textDecoration: 'none',
                  padding: '8px 16px',
                  borderRadius: '4px',
                }}
              >
                <i className="fas fa-hot-tub" aria-hidden="true">🛁</i>
                <span>sauna</span>
              </Link>
            </li>

            {/* Dropdown Menu */}
            <li className="nav-item relative group">
              <button
                className="nav-link dropdown-toggle flex items-center gap-2"
                type="button"
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: '#FFFFFF',
                  textDecoration: 'none',
                  padding: '8px 16px',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  width: '100%',
                  textAlign: 'left',
                }}
              >
                <i className="fas fa-handshake" aria-hidden="true">🤝</i>
                <span>Longhui Service Introduction</span>
                <span className="ml-auto">▼</span>
              </button>
              <ul
                className="dropdown-menu absolute left-0 mt-2 bg-[#2C261C] rounded-lg shadow-lg min-w-[200px] hidden group-hover:block"
                style={{
                  listStyle: 'none',
                  padding: '8px 0',
                  margin: 0,
                  border: '1px solid #CD861A',
                }}
              >
                <li itemProp="name">
                  <Link
                    itemProp="url"
                    href="/ArticleCategory/RentCar"
                    className="dropdown-item block px-4 py-2 text-white hover:bg-[#A46912] transition-colors"
                    style={{ textDecoration: 'none' }}
                  >
                    Charter a car
                  </Link>
                </li>
                <li itemProp="name">
                  <Link
                    itemProp="url"
                    href="/ArticleCategory/Entertainment"
                    className="dropdown-item block px-4 py-2 text-white hover:bg-[#A46912] transition-colors"
                    style={{ textDecoration: 'none' }}
                  >
                    Other entertainment
                  </Link>
                </li>
              </ul>
            </li>

            <li itemProp="name" className="nav-item">
              <Link
                itemProp="url"
                href="/ArticleCategory/Question"
                className="nav-link flex items-center gap-2"
                style={{
                  color: '#FFFFFF',
                  textDecoration: 'none',
                  padding: '8px 16px',
                  borderRadius: '4px',
                }}
              >
                <i className="fas fa-question-circle" aria-hidden="true">
                  ❓
                </i>
                <span>Frequently Asked Questions</span>
              </Link>
            </li>

            <li className="nav-item">
              <Link
                href="/CustomerService"
                className="nav-link flex items-center gap-2"
                style={{
                  color: '#FFFFFF',
                  textDecoration: 'none',
                  padding: '8px 16px',
                  borderRadius: '4px',
                }}
              >
                <i className="fas fa-headset" aria-hidden="true">🎧</i>
                <span>Dedicated customer service</span>
              </Link>
            </li>

            {/* Desktop Search */}
            <li className="nav-item hidden lg:block">
              <Link
                href="/Search"
                className="nav-link flex items-center gap-2"
                style={{
                  color: '#FFFFFF',
                  textDecoration: 'none',
                  padding: '8px 16px',
                  borderRadius: '4px',
                }}
              >
                <i className="bi bi-search">🔍</i>
                <span>search</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Overlay for mobile menu */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={toggleMenu}
          style={{ top: '99px' }}
        />
      )}
    </nav>
  );
}
