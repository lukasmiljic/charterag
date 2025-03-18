import Image from 'next/image';

import Button from '@/components/Button';

import styles from './RouteInfoCard.module.scss';

const RouteInfoCard = () => (
  <div className={styles.card}>
    <div className={styles.tileArea}>
      <h5>Dubrovnik party route</h5>
      <div className={styles.reviews}>
        <div className={styles.starIcon}>
          <Image src="/icons/Star.svg" alt="star" width={16} height={16} />
        </div>
        <p className="subtitle semibold">4.9</p>
        <p className="body2"> rating of 461 reviews</p>
      </div>
    </div>
    <div className={styles.tagArea}>
      <div className={styles.tag}>
        <Image src="/icons/Sailboat.svg" alt="" width={28} height={28} />
        <p className="body1">Party vibe</p>
      </div>
      <div className={styles.tag}>
        <Image src="/icons/Group.svg" alt="" width={28} height={28} />
        <p className="body1">Up to 40 people</p>
      </div>
      <div className={styles.tag}>
        <Image src="/icons/Age.svg" alt="" width={28} height={28} />
        <p className="body1">20 - 40 age range</p>
      </div>
      <div className={styles.tag}>
        <Image src="/icons/WiFi.svg" alt="" width={28} height={28} />
        <p className="body1">Free WiFi</p>
      </div>
      <div className={styles.tag}>
        <Image src="/icons/Calendar.svg" alt="" width={28} height={28} />
        <p className="body1">July | August</p>
      </div>
    </div>
    <div className={styles.buttonArea}>
      <Button text="book now" color="#062949" textColor="white" className={styles.bookButton} />
      <p className="body2">Prices from &euro;1136 per person</p>
    </div>
  </div>
);

export default RouteInfoCard;
