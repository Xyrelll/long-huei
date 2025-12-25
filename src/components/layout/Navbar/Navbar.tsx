'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import TravelIcon from '../../../../public/Images/nacicon';
import '../../../styles/navbar.css';

// Navigation items configuration
interface NavItem {
  id: string;
  label: string;
  href: string;
  icon: 'travel' | 'bed' | 'sauna' | 'question' | 'headset' | 'search';
  isActive?: boolean;
}

const navItems: NavItem[] = [
  { id: 'travel', label: '旅遊', href: '/ArticleCategory/Travel', icon: 'travel', isActive: true },
  { id: 'booking', label: '訂房', href: '/ArticleCategory/Booking', icon: 'bed' },
  { id: 'sauna', label: '桑拿', href: '/ArticleCategory/Sauna', icon: 'sauna' },
  { id: 'question', label: '常見問答', href: '/ArticleCategory/Question', icon: 'question' },
  { id: 'customer-service', label: '專人客服', href: '/CustomerService', icon: 'headset' },
  { id: 'search', label: '搜尋', href: '/Search', icon: 'search' },
];

// Dropdown menu items
interface DropdownItem {
  id: string;
  label: string;
  href: string;
}

const dropdownItems: DropdownItem[] = [
  { id: 'rentcar', label: '包車', href: '/ArticleCategory/RentCar' },
  { id: 'entertainment', label: '其他娛樂', href: '/ArticleCategory/Entertainment' },
];

// Mobile Nav Item Component
interface MobileNavItemProps {
  item: NavItem;
  onClick: () => void;
}

function MobileNavItem({ item, onClick }: MobileNavItemProps) {
  return (
    <li itemProp="name" className="mobile-nav-item">
      <Link
        itemProp="url"
        href={item.href}
        className="mobile-nav-link"
        onClick={onClick}
      >
        <TravelIcon icon={item.icon} />
        <span>{item.label}</span>
      </Link>
    </li>
  );
}

// Desktop Nav Item Component
interface DesktopNavItemProps {
  item: NavItem;
}

function DesktopNavItem({ item }: DesktopNavItemProps) {
  return (
    <li itemProp="name" className="nav-item">
      <Link
        itemProp="url"
        href={item.href}
        className={`nav-link ${item.isActive ? 'active' : ''}`}
        aria-current={item.isActive ? 'page' : undefined}
      >
        <TravelIcon icon={item.icon} />
        <span>{item.label}</span>
      </Link>
    </li>
  );
}

// Mobile Dropdown Component
interface MobileDropdownProps {
  isOpen: boolean;
  onToggle: () => void;
  onItemClick: () => void;
  items: DropdownItem[];
}

function MobileDropdown({ isOpen, onToggle, onItemClick, items }: MobileDropdownProps) {
  const router = useRouter();
  const touchHandledRef = useRef(false);

  const handleNavigation = (href: string, e: React.MouseEvent<HTMLAnchorElement> | React.TouchEvent<HTMLAnchorElement>) => {
    // Prevent default to handle navigation manually
    e.preventDefault();
    e.stopPropagation();
    
    // Close menu
    onItemClick();
    
    // Navigate programmatically
    router.push(href);
  };

  const handleItemClick = (href: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    handleNavigation(href, e);
  };

  const handleTouchEnd = (href: string) => (e: React.TouchEvent<HTMLAnchorElement>) => {
    // Prevent double-firing
    if (touchHandledRef.current) {
      return;
    }
    touchHandledRef.current = true;
    handleNavigation(href, e);
    // Reset after a short delay
    setTimeout(() => {
      touchHandledRef.current = false;
    }, 300);
  };

  return (
    <li className="mobile-nav-item">
      <button
        className={`mobile-nav-link mobile-dropdown-toggle ${isOpen ? "active" : ""}`}
        type="button"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          onToggle();
        }}
        aria-expanded={isOpen}
        aria-controls="mobile-dropdown-menu"
      >
        <TravelIcon icon="handshake" />
        <span>龍匯服務介紹</span>
        <span className="dropdown-arrow">▼</span>
      </button>
      <ul
        id="mobile-dropdown-menu"
        className={`mobile-dropdown-menu ${isOpen ? "open" : ""}`}
      >
        <li itemProp="name">
          <Link
            itemProp="url"
            href="/ArticleCategory/RentCar"
            className="mobile-dropdown-item"
            onClick={handleItemClick('/ArticleCategory/RentCar')}
            onTouchEnd={handleTouchEnd('/ArticleCategory/RentCar')}
          >
            包車
          </Link>
        </li>
        <li itemProp="name">
          <Link
            itemProp="url"
            href="/ArticleCategory/Entertainment"
            className="mobile-dropdown-item"
            onClick={handleItemClick('/ArticleCategory/Entertainment')}
            onTouchEnd={handleTouchEnd('/ArticleCategory/Entertainment')}
          >
            其他娛樂
          </Link>
        </li>
      </ul>
    </li>
  );
}

// Desktop Dropdown Component
interface DesktopDropdownProps {
  isOpen: boolean;
  onToggle: () => void;
  buttonRef: React.RefObject<HTMLLIElement | null>;
  items: DropdownItem[];
}

function DesktopDropdown({ isOpen, onToggle, buttonRef, items }: DesktopDropdownProps) {
  return (
    <li ref={buttonRef} className="nav-item relative group" id="dropdown-nav-item">
      <button
        className={`nav-link dropdown-toggle ${isOpen ? "active" : ""}`}
        type="button"
        onClick={onToggle}
      >
        <TravelIcon icon="handshake" />
        <span>龍匯服務介紹</span>
        <span className={`dropdown-arrow-desktop ${isOpen ? "active" : ""}`}>▼</span>
      </button>
    </li>
  );
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isdropdown, setdropdown] = useState(false);
  const dropdownButtonRef = useRef<HTMLLIElement>(null);
  const dropdownMenuRef = useRef<HTMLDivElement>(null);
  const isDropdownRef = useRef(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isMenuOpen) {
      setdropdown(true); // Close dropdown when menu closes
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
            {/* Items before sauna (travel, booking) */}
            {navItems
              .filter(item => ['travel', 'booking'].includes(item.id))
              .map((item) => (
                <MobileNavItem key={item.id} item={item} onClick={toggleMenu} />
              ))}
            
            {/* Sauna item */}
            {navItems
              .filter(item => item.id === 'sauna')
              .map((item) => (
                <MobileNavItem key={item.id} item={item} onClick={toggleMenu} />
              ))}
            
            {/* Dropdown Menu - positioned between sauna and question */}
            <MobileDropdown
              isOpen={isdropdown}
              onToggle={() => {
                const currentState = isDropdownRef.current;
                const newState = !currentState;
                isDropdownRef.current = newState;
                setdropdown(newState);
              }}
              onItemClick={toggleMenu}
              items={dropdownItems}
            />
            
            {/* Items after dropdown (question, customer-service) */}
            {navItems
              .filter(item => ['question', 'customer-service'].includes(item.id))
              .map((item) => (
                <MobileNavItem key={item.id} item={item} onClick={toggleMenu} />
              ))}
          </ul>
        </div>

        {/* Desktop Navigation */}
        <div className="navbar-nav-desktop hidden lg:flex  ">
          {/* Desktop Logo */}
          <Link href="/" className="navbar-brand-desktop ">
            <Image
              src="/Images/logo-m.png"
              alt="Dragon Gathering World"
              title="Dragon Gathering World"
              width={60}
              height={60}
              className="object-cover "
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
            {/* Regular navigation items before dropdown */}
            {navItems
              .filter(item => !['question', 'customer-service', 'search'].includes(item.id))
              .map((item) => (
                <DesktopNavItem key={item.id} item={item} />
              ))}
            
            {/* Dropdown Menu */}
            <DesktopDropdown
              isOpen={isdropdown}
              onToggle={toggleDropdown}
              buttonRef={dropdownButtonRef}
              items={dropdownItems}
            />

            {/* Navigation items after dropdown */}
            {navItems
              .filter(item => ['question', 'customer-service', 'search'].includes(item.id))
              .map((item) => (
                <DesktopNavItem key={item.id} item={item} />
              ))}
          </ul>
        </div>
      </div>
    </nav>
    {/* Desktop Dropdown Menu - Outside navbar, not nested */}
      <div ref={dropdownMenuRef} className="dropdown-menu-wrapper-desktop hidden lg:block "
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
