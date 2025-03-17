import RoutesCards from '@/components/RoutesCards';
import SectionHeader from '@/components/SectionHeader';

import styles from './RoutesSection.module.scss';

const RoutesSection = () => (
  <section className={`${styles.routesSection} centercontainer`}>
    <SectionHeader
      className={styles.routesSectionHeader}
      caption="destinations"
      header="Whether it's a bash or bliss — the choice is yours"
      paragraph="On our customized sailing adventures, embracing the thrill of our party routes or unwinding on our relaxing voyages — crafting your perfect journey at sea has never been easier"
    />
    <RoutesCards />
  </section>
);

export default RoutesSection;
