import Image from 'next/image';

import { RouteHiglight } from '@/data/routes';

import styles from './HighlightsSection.module.scss';

interface HighlightsSectionProps {
  highlights: RouteHiglight[];
}

const HighlightsSection = ({ highlights }: HighlightsSectionProps) => (
  <section className={`${styles.highlightsSection} centercontainer`}>
    <h3>Route Highlights</h3>
    <div className={styles.imagegrid}>
      {highlights.map(highlight => (
        <div key={highlight.image} className={styles.gridItem}>
          <Image className={styles.gridimage} src={highlight.image} alt="grid image" width={265} height={242} />
          <h5>{highlight.title}</h5>
          <p className="body2">{highlight.body}</p>
        </div>
      ))}
    </div>
  </section>
);

export default HighlightsSection;
