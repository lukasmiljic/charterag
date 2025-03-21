import Image from 'next/image';

import AnimatedCounter from '@/components/AnimatedCounter';

import styles from './ExperienceReviews.module.scss';

const ExperienceReviews = () => (
  <div className={styles.reviews}>
    <div className={styles.review}>
      <Image src="/icons/Star.svg" width={43} height={40} alt="star" />
      <div className={styles.reviewtext}>
        <h5>
          <AnimatedCounter from="3.0" to={4.8} /> /5
        </h5>
        <p className="body2">Based on 325 reviews</p>
      </div>
    </div>

    <div className={styles.review}>
      <Image src="/icons/Facebook.svg" width={43} height={40} alt="star" />
      <div className={styles.reviewtext}>
        <h5>
          <AnimatedCounter from="3.0" to={4.8} /> /5
        </h5>
        <p className="body2">Based on 325 reviews</p>
      </div>
    </div>

    <div className={styles.review}>
      <Image src="/icons/Google.svg" width={43} height={40} alt="star" />
      <div className={styles.reviewtext}>
        <h5>
          <AnimatedCounter from="3.0" to={4.8} /> /5
        </h5>
        <p className="body2">Based on 325 reviews</p>
      </div>
    </div>
  </div>
);

export default ExperienceReviews;
