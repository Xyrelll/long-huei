'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import TravelIcon from '../../../../public/Images/nacicon';
import '../../../styles/navbar.css';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isdropdown, setdropdown] = useState(false);
  const dropdownButtonRef = useRef<HTMLLIElement>(null);
  const dropdownMenuRef = useRef<HTMLDivElement>(null);
  const isDropdownRef = useRef(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isMenuOpen) {
      setdropdown(false); // Close dropdown when menu closes
    }
  };

  const toggleDropdown = () => {
    setdropdown(prev => !prev);
  };

  // Update ref when state changes
  useEffect(() => {
    isDropdownRef.current = isdropdown;
  }, [isdropdown]);

  useEffect(() => {
    const updateDropdownPosition = () => {
      if (dropdownButtonRef.current && dropdownMenuRef.current) {
        const buttonRect = dropdownButtonRef.current.getBoundingClientRect();
        const menu = dropdownMenuRef.current.querySelector('.dropdown-menu-desktop') as HTMLElement;
        if (menu) {
          menu.style.left = `${buttonRect.left}px`;
          menu.style.top = `${buttonRect.bottom + 8}px`;
        }
      }
    };

    if (isdropdown) {
      // Small delay to ensure DOM is updated
      setTimeout(() => {
        updateDropdownPosition();
      }, 10);
    }

    updateDropdownPosition();
    window.addEventListener('resize', updateDropdownPosition);
    window.addEventListener('scroll', updateDropdownPosition);

    // Close dropdown when clicking outside (desktop only)
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      // Only handle desktop dropdown, not mobile
      if (
        dropdownButtonRef.current &&
        dropdownMenuRef.current &&
        !dropdownButtonRef.current.contains(target) &&
        !dropdownMenuRef.current.contains(target)
      ) {
        // Check if click is on mobile dropdown button - if so, don't close
        const mobileDropdownButton = document.querySelector('.mobile-dropdown-toggle');
        if (mobileDropdownButton && mobileDropdownButton.contains(target)) {
          return; // Don't close if clicking mobile dropdown button
        }
        isDropdownRef.current = false;
        setdropdown(false);
      }
    };

    // Only add listener for desktop dropdown
    if (isdropdown && dropdownButtonRef.current) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      window.removeEventListener('resize', updateDropdownPosition);
      window.removeEventListener('scroll', updateDropdownPosition);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isdropdown]);

  return (
    <>
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
              width={27}
              height={25}
              className="object-contain"
              priority
              style={{
                width: "34.55px",
                height: 'auto',
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
                className={`mobile-nav-link mobile-dropdown-toggle ${isdropdown ? "active" : ""}`}
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  // Use ref to get current state without closure issues
                  const currentState = isDropdownRef.current;
                  const newState = !currentState;
                  console.log('Mobile dropdown toggle - current:', currentState, 'new:', newState);
                  isDropdownRef.current = newState;
                  setdropdown(newState);
                }}
                aria-expanded={isdropdown}
                aria-controls="mobile-dropdown-menu"
              >
                <TravelIcon icon="handshake" />
                <span>龍匯服務介紹</span>
                <span className="dropdown-arrow">▼</span>
              </button>
              <ul
                id="mobile-dropdown-menu"
                className={`mobile-dropdown-menu ${isdropdown ? "open" : ""}`}
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
              width={60}
              height={60}
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
            <li ref={dropdownButtonRef} className="nav-item relative group" id="dropdown-nav-item">
              <button
                className={`nav-link dropdown-toggle ${isdropdown ? "active" : ""}`}
                type="button"
                onClick={toggleDropdown}
              >
                <TravelIcon icon="handshake" />
                <span>龍匯服務介紹</span>
              </button>
              <span className={`dropdown-arrow-desktop ${isdropdown ? "active" : ""}`}>▼</span>
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
    {/* Desktop Dropdown Menu - Outside navbar, not nested */}
      <div ref={dropdownMenuRef} className="dropdown-menu-wrapper-desktop hidden lg:block"
         style={{ display: isdropdown ? "flex" : "none" }}
    >
      <ul
        className="dropdown-menu-desktop"
        style={{ display: isdropdown ? "flex" : "none" }}
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
    </div>
  </>
  );
}
