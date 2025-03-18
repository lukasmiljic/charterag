'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import styles from './ExperienceCards.module.scss';

const ExperienceCards = () => {
  const router = useRouter();

  const navigateTo = (route: string) => {
    router.push(route);
  };

  return (
    <div className={styles.cards}>
      <button type="button" className={styles.card} onClick={() => navigateTo('/route/sail')}>
        <Image className={styles.bgimage} src="/sections/experience/sail.png" alt="card background image" fill />
        <h4>Sail</h4>
      </button>
      <button type="button" className={styles.card} onClick={() => navigateTo('/route/party')}>
        <Image className={styles.bgimage} src="/sections/experience/party.png" alt="card background image" fill />
        <h4>Party</h4>
      </button>
      <button type="button" className={styles.card} onClick={() => navigateTo('/route/explore')}>
        <Image className={styles.bgimage} src="/sections/experience/explore.png" alt="card background image" fill />
        <h4>Explore</h4>
      </button>
      <button type="button" className={styles.card} onClick={() => navigateTo('/route/relax')}>
        <Image className={styles.bgimage} src="/sections/experience/relax.png" alt="card background image" fill />
        <h4>Relax</h4>
      </button>
    </div>
  );
};

export default ExperienceCards;
