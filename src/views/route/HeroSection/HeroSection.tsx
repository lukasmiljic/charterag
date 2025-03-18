import styles from './HeroSection.module.scss';

const HeroSection = () => (
  <section className={styles.heroSection}>
    <div className={styles.bgImage}>
      <div className={`${styles.contentContainer} container`}>
        <div className={`${styles.content}`}>
          <p className="body1">Party route</p>
          <h2>The best stories are yet to be told</h2>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
