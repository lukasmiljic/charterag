import Image from 'next/image';

import Button from '@/components/Button';
import { Route } from '@/data/routes';

import styles from './RouteInfoCard.module.scss';

interface RouteInfoCardProps {
  route: Route;
}

const RouteInfoCard = ({ route }: RouteInfoCardProps) => (
  <div className={styles.card}>
    <div className={styles.tileArea}>
      <h5>{route.routeInfoCard.title}</h5>
      <div className={styles.reviews}>
        <div className={styles.starIcon}>
          <Image src="/icons/Star.svg" alt="star" width={16} height={16} />
        </div>
        <p className="subtitle semibold">{route.routeInfoCard.review}</p>
        <p className="body2"> rating of {route.routeInfoCard.numberOfReviews} reviews</p>
      </div>
    </div>
    <div className={styles.tagArea}>
      <div className={styles.tag}>
        <Image src="/icons/Sailboat.svg" alt="" width={28} height={28} />
        <p className="body1">{route.routeInfoCard.vibe} vibe</p>
      </div>
      <div className={styles.tag}>
        <Image src="/icons/Group.svg" alt="" width={28} height={28} />
        <p className="body1">Up to {route.routeInfoCard.groupSize} people</p>
      </div>
      <div className={styles.tag}>
        <Image src="/icons/Age.svg" alt="" width={28} height={28} />
        <p className="body1">{route.routeInfoCard.ageRange} age range</p>
      </div>
      {route.routeInfoCard.freeWifi && (
        <div className={styles.tag}>
          <Image src="/icons/WiFi.svg" alt="" width={28} height={28} />
          <p className="body1">Free WiFi</p>
        </div>
      )}
      <div className={styles.tag}>
        <Image src="/icons/Calendar.svg" alt="" width={28} height={28} />
        <p className="body1">{route.routeInfoCard.dateRange}</p>
      </div>
    </div>
    <div className={styles.buttonArea}>
      <Button text="book now" color="#062949" textColor="white" className={styles.bookButton} />
      <p className="body2">Prices from &euro;{route.price} per person</p>
    </div>
  </div>
);

export default RouteInfoCard;
