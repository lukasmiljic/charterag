import styles from './HeroSection.module.scss';

const HeroSection = () => (
  <section className={styles.container}>
    <video
      autoPlay
      muted
      loop
      src="sections/hero/video.mp4"
      poster="sections/hero/poster.png"
      className={styles.bgvideo}
    />
    <div className={styles.content}>
      <h2>Hero section</h2>
    </div>
  </section>
);

export default HeroSection;
