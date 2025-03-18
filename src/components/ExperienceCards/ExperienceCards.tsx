import Image from 'next/image';

import styles from './ExperienceCards.module.scss';

const ExperienceCards = () => (
  <div className={styles.cards}>
    <div className={styles.card}>
      <Image className={styles.bgimage} src="/sections/experience/sail.png" alt="card background image" fill />
      <h4>Sail</h4>
    </div>
    <div className={styles.card}>
      <Image className={styles.bgimage} src="/sections/experience/party.png" alt="card background image" fill />
      <h4>Party</h4>
    </div>
    <div className={styles.card}>
      <Image className={styles.bgimage} src="/sections/experience/explore.png" alt="card background image" fill />
      <h4>Explore</h4>
    </div>
    <div className={styles.card}>
      <Image className={styles.bgimage} src="/sections/experience/relax.png" alt="card background image" fill />
      <h4>Relax</h4>
    </div>
  </div>
);

export default ExperienceCards;
