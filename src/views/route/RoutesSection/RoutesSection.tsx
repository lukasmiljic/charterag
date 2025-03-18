import Accordion from '@/components/Accordion';
import SectionHeader from '@/components/SectionHeader';

import styles from './RoutesSection.module.scss';

const RoutesSection = () => (
  <section className={`${styles.routesSection} centercontainer`}>
    <SectionHeader
      caption="step 1."
      header="Choose your route"
      paragraph="Explore what you can get for in each route"
    />

    <Accordion />
  </section>
);

export default RoutesSection;
