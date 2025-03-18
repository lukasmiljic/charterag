import Image from 'next/image';

import styles from './Footer.module.scss';

const Footer = () => (
  <footer className={styles.footer}>
    <div className="container">
      <div className={styles.firstrow}>
        <Image src="/branding/charterag_logo.svg" alt="charterag" width={216} height={50} />
        <div className={styles.arrowup}>
          <Image src="icons/Arrow.svg" alt="top" width={14} height={18} />
        </div>
      </div>
      <div className={styles.secondrow}>
        <div className={styles.links}>
          <div className={styles.programs}>
            <p className="semibold body2">Programs</p>
            <ul className="body2">
              <li>Program 1</li>
              <li>Program 2</li>
              <li>Program 3</li>
              <li>Program 4</li>
            </ul>
          </div>
          <div className={styles.findoutmore}>
            <p className="semibold body2">Find out more</p>
            <ul className="body2">
              <li>Link 1</li>
              <li>Link 2</li>
              <li>Link 3</li>
            </ul>
          </div>
          <div className={styles.charterag}>
            <p className="semibold body2">Charterag</p>
            <ul className="body2">
              <li>Link 1</li>
              <li>Link 2</li>
              <li>Link 3</li>
            </ul>
          </div>
        </div>
        <div className={styles.socialmedia}>
          <div className={styles.iconframe}>
            <Image src="/icons/Instagram.svg" alt="ig" width={16} height={16} />
          </div>
          <div className={styles.iconframe}>
            <Image src="/icons/FacebookF.svg" alt="ig" width={16} height={16} />
          </div>
          <div className={styles.iconframe}>
            <Image src="/icons/YouTube.svg" alt="ig" width={16} height={16} />
          </div>
        </div>
      </div>

      <div className={`${styles.thirdrow} body2`}>
        <div className={styles.copyrighttext}>
          <p>Copyright &#169; 2025 Chartag Ltd. (company no. 08245801)</p>
          <p>Lorem ipsum dolor sit, United Kingdom</p>
        </div>
        <div className={styles.legallinks}>
          <p>Legal info</p>
          <p>Terms and conditions</p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
