'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import TravelIcon from '../../../../public/Images/nacicon';
import '../../../styles/navbar.css';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isdropdown, setdropdown] = useState("none");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isMenuOpen) {
      setdropdown("none"); // Close dropdown when menu closes
    }
  };

  return (
    <nav className={`navbar ${isMenuOpen ? 'expanded' : ''}`}>
      <div className="container-fluid">
        {/* Mobile Header: Hamburger, Logo, Search - Fixed at top */}
        <div className="navbar-header">
          {/* Hamburger Menu Button */}
          <button
            className="navbar-toggler lg:hidden"
            type="button"
            onClick={toggleMenu}
            aria-label="Toggle navigation"
            title="Toggle Menu"
          >
            <span className="hamburger-icon">☰</span>
          </button>

          {/* Logo - Centered */}
          <Link href="/" className="navbar-brand">
            <Image
              src="/Images/logo-m.png"
              alt="Dragon Gathering World"
              title="Dragon Gathering World"
              width={50}
              height={50}
              className="object-cover"
              priority
              style={{
                width: "auto",
                height: 'auto',
                objectFit: "cover",
              }}
            />
          </Link>

          {/* Search Icon */}
          <Link
            href="/Search"
            className="navbar-search-icon lg:hidden"
            title="Search Articles"
          >
            <TravelIcon icon="search" />
          </Link>
        </div>

        {/* Mobile Navigation Menu - Expands downward */}
        <div className={`navbar-collapse-mobile lg:hidden ${isMenuOpen ? 'show' : ''}`}>
          <ul
            itemScope
            itemType="http://www.schema.org/SiteNavigationElement"
            className="mobile-menu-nav"
          >
            <li itemProp="name" className="mobile-nav-item">
              <Link
                itemProp="url"
                href="/ArticleCategory/Travel"
                className="mobile-nav-link"
                onClick={toggleMenu}
              >
                <TravelIcon icon="travel" />
                <span>旅遊</span>
              </Link>
            </li>

            <li itemProp="name" className="mobile-nav-item">
              <Link
                itemProp="url"
                href="/ArticleCategory/Booking"
                className="mobile-nav-link"
                onClick={toggleMenu}
              >
                <TravelIcon icon="bed" />
                <span>訂房</span>
              </Link>
            </li>

            <li itemProp="name" className="mobile-nav-item">
              <Link
                itemProp="url"
                href="/ArticleCategory/Sauna"
                className="mobile-nav-link"
                onClick={toggleMenu}
              >
                <TravelIcon icon="sauna" />
                <span>桑拿</span>
              </Link>
            </li>

            {/* Dropdown Menu */}
            <li className="mobile-nav-item">
              <button
                className={`mobile-nav-link mobile-dropdown-toggle ${isdropdown === "flex" ? "active" : ""}`}
                type="button"
                onClick={() => { setdropdown(isdropdown === "flex" ? "none" : "flex"); }}
              >
                <TravelIcon icon="handshake" />
                <span>龍匯服務介紹</span>
                <span className="dropdown-arrow">▼</span>
              </button>
              <ul
                className={`mobile-dropdown-menu ${isdropdown === "flex" ? "open" : ""}`}
              >
                <li itemProp="name">
                  <Link
                    itemProp="url"
                    href="/ArticleCategory/RentCar"
                    className="mobile-dropdown-item"
                    onClick={toggleMenu}
                  >
                    包車
                  </Link>
                </li>
                <li itemProp="name">
                  <Link
                    itemProp="url"
                    href="/ArticleCategory/Entertainment"
                    className="mobile-dropdown-item"
                    onClick={toggleMenu}
                  >
                    其他娛樂
                  </Link>
                </li>
              </ul>
            </li>

            <li itemProp="name" className="mobile-nav-item">
              <Link
                itemProp="url"
                href="/ArticleCategory/Question"
                className="mobile-nav-link"
                onClick={toggleMenu}
              >
                <TravelIcon icon="question" />
                <span>常見問答</span>
              </Link>
            </li>

            <li className="mobile-nav-item">
              <Link
                href="/CustomerService"
                className="mobile-nav-link"
                onClick={toggleMenu}
              >
                <TravelIcon icon="headset" />
                <span>專人客服</span>
              </Link>
            </li>
          </ul>
         
        </div>

        {/* Desktop Navigation */}
        <div className="navbar-nav-desktop hidden lg:flex">
          {/* Desktop Logo */}
          <Link href="/" className="navbar-brand-desktop">
            <Image
              src="/Images/logo-m.png"
              alt="Dragon Gathering World"
              title="Dragon Gathering World"
              width={100}
              height={100}
              className="object-cover"
              priority
              style={{
                width: "auto",
                height: 'auto',
                objectFit: "cover",
              }}
            />
          </Link>
          <ul
            itemScope
            itemType="http://www.schema.org/SiteNavigationElement"
            className="navbar-nav"
          >
            <li itemProp="name" className="nav-item">
              <Link
                itemProp="url"
                href="/ArticleCategory/Travel"
                className="nav-link active"
                aria-current="page"
              >
                <TravelIcon icon="travel" />
                <span>旅遊</span>
              </Link>
            </li>

            <li itemProp="name" className="nav-item">
              <Link
                itemProp="url"
                href="/ArticleCategory/Booking"
                className="nav-link"
              >
                <TravelIcon icon="bed" />
                <span>訂房</span>
              </Link>
            </li>

            <li itemProp="name" className="nav-item">
              <Link
                itemProp="url"
                href="/ArticleCategory/Sauna"
                className="nav-link"
              >
                <TravelIcon icon="sauna" />
                <span>桑拿</span>
              </Link>
            </li>

            {/* Dropdown Menu */}
            <li className="nav-item relative group">
              <button
                className={`nav-link dropdown-toggle ${isdropdown === "flex" ? "active" : ""}`}
                type="button"
                onClick={() => { setdropdown(isdropdown === "flex" ? "none" : "flex"); }}
              >
                <TravelIcon icon="handshake" />
                <span>龍匯服務介紹</span>
              </button>
              <span className={`dropdown-arrow-desktop ${isdropdown === "flex" ? "active" : ""}`}>▼</span>
              <ul
                className="dropdown-menu"
                style={{ display: isdropdown === "flex" ? "flex" : "none" }}
              >
                <li itemProp="name">
                  <Link
                    itemProp="url"
                    href="/ArticleCategory/RentCar"
                    className="dropdown-item"
                  >
                    包車
                  </Link>
                </li>
                <li itemProp="name">
                  <Link
                    itemProp="url"
                    href="/ArticleCategory/Entertainment"
                    className="dropdown-item"
                  >
                    其他娛樂
                  </Link>
                </li>
              </ul>
            </li>

            <li itemProp="name" className="nav-item">
              <Link
                itemProp="url"
                href="/ArticleCategory/Question"
                className="nav-link"
              >
                <TravelIcon icon="question" />
                <span>常見問答</span>
              </Link>
            </li>

            <li className="nav-item">
              <Link
                href="/CustomerService"
                className="nav-link"
              >
                <TravelIcon icon="headset" />
                <span>專人客服</span>
              </Link>
            </li>

            <li className="nav-item">
              <Link
                href="/Search"
                className="nav-link"
              >
                <TravelIcon icon="search" />
                <span>搜尋</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
