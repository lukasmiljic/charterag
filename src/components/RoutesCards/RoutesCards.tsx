'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import Bar from '@/components/Bar';
import Routes, { Sections } from '@/data/routes';

import styles from './RoutesCards.module.scss';

const RoutesCards = () => {
  const router = useRouter();

  const navigateTo = (route: string) => {
    router.push(route);
  };

  const routeRoutes = Routes.filter(x => x.section.includes(Sections.Routes));

  return (
    <div className={styles.cards}>
      {routeRoutes.map(route => (
        <button
          key={route.slug}
          type="button"
          className={styles.card}
          onClick={() => navigateTo(`/route/${route.slug}`)}
        >
          <Image
            className={styles.bgimage}
            src={route.primaryCoverImage || route.coverImage}
            alt="card background image"
            fill
          />
          <div className={styles.text}>
            <div className={styles.nameandprice}>
              <p className="subtitle">From €{route.price}/person</p>
              <h4 className="semibold">
                {route.title} route
                <Image className={styles.chevron} src="/icons/Chevron.svg" alt="" width={16} height={16} />
              </h4>
            </div>
            <div className={styles.bars}>
              <div className={styles.bararea}>
                <p className="body1">Party</p>
                <div className={styles.barcontainer}>
                  <Bar percentage={route.partyPercentage} />
                </div>
              </div>
              <div className={styles.bararea}>
                <p className="body1">Adventure</p>
                <div className={styles.barcontainer}>
                  <Bar percentage={route.adventurePercentage} />
                </div>
              </div>
            </div>
          </div>
        </button>
      ))}
    </div>
  );
};

export default RoutesCards;
