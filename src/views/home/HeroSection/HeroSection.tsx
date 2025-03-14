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
      <p className="subtitle">Sail your way with</p>
      <h1>Charterag</h1>
      <ul className={`${styles.taglines} subtitle`}>
        <li>adventure</li>
        <li>relax</li>
        <li>explore</li>
        <li>fun</li>
        <li>dance</li>
      </ul>
    </div>
  </section>
);

export default HeroSection;
