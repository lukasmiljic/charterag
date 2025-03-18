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
    <div className="container">
      <div className={styles.text}>
        <p className="subtitle">
          From mountains and canyons to fjord-like bays, nostalgic Old towns to most stunning beaches. Get to now
          Croatias twin sister — Montenegro
        </p>
        <p className="subtitle">
          Walk the medieval streets of Kotor, dine the most amazing seafood in the Fishermans village. Feel like a
          millionaire in Porto Montenegro, the most luxurious marina in this part of the World. Visit nostalgic Old
          towns Perast, Risan and Herceg Novi. Hike mountains in Kotor. Get Wild in Budva and Tivat. Relax in freshly
          opened, Chic Lazure marina.
        </p>
      </div>
    </div>
  </section>
);

export default HeroSection;
