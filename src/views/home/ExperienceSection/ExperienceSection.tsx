import Caption from '@/components/Caption';
import ExperienceCards from '@/components/ExperienceCards';
import ExperienceReviews from '@/components/ExperienceReviews';

import styles from './ExperienceSection.module.scss';

const ExperienceSection = () => (
  <section className={styles.container}>
    <ExperienceReviews />
    <div className={styles.text}>
      <Caption text="welcome" />
      <h2>What is Charterag experience</h2>
      <p className={`${styles.paragraph} body2`}>
        Join us for a week of sailing, unique adventures and exclusive parties in stunning locations. Explore new places
        daily. Dive into local culture. Dance the nights away. Leave with new friends and lifelong memories.
      </p>
    </div>
    <ExperienceCards />
  </section>
);

export default ExperienceSection;
