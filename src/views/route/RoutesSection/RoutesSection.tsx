import SectionHeader from '@/components/SectionHeader';

import styles from './RoutesSection.module.scss';

const RoutesSection = () => (
  <section className="centercontainer">
    <SectionHeader
      className={styles.routesSectionHeader}
      caption="step 1."
      header="Choose your route"
      paragraph="Explore what you can get for in each route"
    />
  </section>
);

export default RoutesSection;
