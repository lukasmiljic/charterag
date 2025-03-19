import RouteInfoCard from '@/components/RouteInfoCard';
import { Route } from '@/data/routes';

import styles from './HeroSection.module.scss';

interface HeroSectionProps {
  route: Route;
}

const HeroSection = ({ route }: HeroSectionProps) => (
  <section className={styles.heroSection}>
    <div className={styles.bgImage}>
      <div className={`${styles.contentContainer} container`}>
        <div className={`${styles.content}`}>
          <p className="body1">{route.title}</p>
          <h2>{route.headline}</h2>
        </div>
      </div>
    </div>
    <div className={`${styles.infoContainer} container`}>
      <div className={styles.text}>
        <p className="subtitle">{route.body}</p>
      </div>

      <RouteInfoCard />
    </div>
  </section>
);

export default HeroSection;
