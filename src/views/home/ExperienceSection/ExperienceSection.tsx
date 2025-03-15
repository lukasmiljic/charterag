import ExperienceCards from '@/components/ExperienceCards';
import ExperienceReviews from '@/components/ExperienceReviews';
import SectionHeader from '@/components/SectionHeader';

import styles from './ExperienceSection.module.scss';

const ExperienceSection = () => (
  <section className={styles.container}>
    <ExperienceReviews />
    <SectionHeader
      caption="welcome"
      header="What is Charterag experience"
      paragraph="Join us for a week of sailing, unique adventures and exclusive parties in stunning locations. Explore new places
        daily. Dive into local culture. Dance the nights away. Leave with new friends and lifelong memories."
    />
    <ExperienceCards />
  </section>
);

export default ExperienceSection;
