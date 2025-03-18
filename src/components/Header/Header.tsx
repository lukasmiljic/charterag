import Image from 'next/image';
import Link from 'next/link';

import Button from '@/components/Button';

import styles from './Header.module.scss';

interface HeaderProps {
  hero?: boolean;
}

const Header = ({ hero }: HeaderProps) => (
  <div className={`${(hero && styles.heroContainer) || styles.container}`}>
    <header className={styles.header}>
      <Link href="/">
        <Image
          className={`${hero ? '' : styles.logo}`}
          src="/branding/charterag_logo.svg"
          width={150}
          height={30}
          alt="charterag logo"
        />
      </Link>
      <ul className={styles.navigationlist}>
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
      <Button text="Book now" route="/booking" />
    </header>
  </div>
);

export default Header;
