import Image from 'next/image';
import Link from 'next/link';

import Button from '../Button';
import styles from './Header.module.scss';

const Header = () => (
  <div className={styles.container}>
    <header className={styles.header}>
      <Link href="/">
        <Image src="branding/charterag_logo.svg" width={150} height={30} alt="charterag logo" />
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
      <Button text={'Book now'} route={'/booking'}></Button>
    </header>
  </div>
);

export default Header;
