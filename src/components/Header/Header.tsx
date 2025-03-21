'use client';

import { useEffect, useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import Button from '@/components/Button';

import styles from './Header.module.scss';

interface HeaderProps {
  hero?: boolean;
}

const Header = ({ hero }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    }

    return () => {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    };
  }, [isMenuOpen]);

  return (
    <div id="top" className="container">
      <header
        className={`${(hero && styles.heroContainer) || styles.dynamicContainer} ${styles.headerContainer} ${styles.header}`}
      >
        <Link href="/">
          <Image
            className={`${hero ? '' : styles.logo}`}
            src="/branding/charterag_logo.svg"
            width={150}
            height={30}
            alt="charterag logo"
          />
        </Link>
        <ul className={`${styles.navigationlist} ${styles.desktopNav}`}>
          <li>
            <Link href="/destinations">Destinations</Link>
          </li>
          <li>
            <Link href="/how-it-works">How it works</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/blog"> Blog</Link>
          </li>
          <li>
            <Link href="faq"> FAQ</Link>
          </li>
        </ul>
        <Button className={styles.desktopBtn} text="Book now" route="/booking" />

        <button
          type="button"
          className={`${styles.hamburger} ${isMenuOpen ? styles.active : ''} ${hero ? styles.dark : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>

        <div className={`${styles.mobileNav} ${isMenuOpen ? styles.open : ''}`}>
          <ul className={styles.mobileList}>
            <li>
              <Link href="/destinations" onClick={toggleMenu}>
                Destinations
              </Link>
            </li>
            <li>
              <Link href="/how-it-works" onClick={toggleMenu}>
                How it works
              </Link>
            </li>
            <li>
              <Link href="/about" onClick={toggleMenu}>
                About
              </Link>
            </li>
            <li>
              <Link href="/blog" onClick={toggleMenu}>
                Blog
              </Link>
            </li>
            <li>
              <Link href="/faq" onClick={toggleMenu}>
                FAQ
              </Link>
            </li>
            <li className={styles.mobileBtn}>
              <Button text="Book now" route="/booking" />
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Header;
