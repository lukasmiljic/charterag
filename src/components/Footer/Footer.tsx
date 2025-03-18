import Image from 'next/image';
import Link from 'next/link';

import styles from './Footer.module.scss';

const Footer = () => (
  <footer className={styles.footer}>
    <div className="container">
      <div className={styles.firstrow}>
        <Image src="/branding/charterag_logo.svg" alt="charterag" width={216} height={50} />
        <Link href="#top">
          <div className={styles.arrowup}>
            <Image src="/icons/Arrow.svg" alt="top" width={14} height={18} />
          </div>
        </Link>
      </div>
      <div className={styles.secondrow}>
        <div className={styles.links}>
          <div className={styles.programs}>
            <p className="semibold body2">Programs</p>
            <ul className="body2">
              <li>
                <Link href="/programs/1"> Program 1</Link>
              </li>
              <li>
                <Link href="/programs/1"> Program 2</Link>
              </li>
              <li>
                <Link href="/programs/1"> Program 3</Link>
              </li>
              <li>
                <Link href="/programs/1"> Program 4</Link>
              </li>
            </ul>
          </div>
          <div className={styles.findoutmore}>
            <p className="semibold body2">Find out more</p>
            <ul className="body2">
              <li>
                <Link href="/link/1"> Link 1</Link>
              </li>
              <li>
                <Link href="/link/2"> Link 2</Link>
              </li>
              <li>
                <Link href="/link/3"> Link 3</Link>
              </li>
            </ul>
          </div>
          <div className={styles.charterag}>
            <p className="semibold body2">Charterag</p>
            <ul className="body2">
              <li>
                <Link href="/link/1"> Link 1</Link>
              </li>
              <li>
                <Link href="/link/2"> Link 2</Link>
              </li>
              <li>
                <Link href="/link/3"> Link 3</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.socialmedia}>
          <div className={styles.iconframe}>
            <a href="https://www.instagram.com/">
              <Image src="/icons/Instagram.svg" alt="ig" width={16} height={16} />
            </a>
          </div>
          <div className={styles.iconframe}>
            <a href="https://www.facebook.com/">
              <Image src="/icons/FacebookF.svg" alt="ig" width={16} height={16} />
            </a>
          </div>
          <div className={styles.iconframe}>
            <a href="https://www.youtube.com/">
              <Image src="/icons/YouTube.svg" alt="ig" width={16} height={16} />
            </a>
          </div>
        </div>
      </div>

      <div className={`${styles.thirdrow} body2`}>
        <div className={styles.copyrighttext}>
          <p>Copyright &#169; 2025 Chartag Ltd. (company no. 08245801)</p>
          <p>Lorem ipsum dolor sit, United Kingdom</p>
        </div>
        <div className={styles.legallinks}>
          <p>
            <Link href="/legal">Legal info</Link>
          </p>
          <p>
            <Link href="/termsofservice">Terms and conditions</Link>
          </p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
