'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import Bar from '@/components/Bar';

import styles from './RoutesCards.module.scss';

const RoutesCards = () => {
  const router = useRouter();

  const navigateTo = (route: string) => {
    router.push(route);
  };

  return (
    <div className={styles.cards}>
      <button type="button" className={styles.card} onClick={() => navigateTo('/route/party')}>
        <Image className={styles.bgimage} src="/sections/routes/party.png" alt="card background image" fill />
        <div className={styles.text}>
          <div className={styles.nameandprice}>
            <p className="subtitle">From €710/person</p>
            <h4 className="semibold">Party route</h4>
          </div>
          <div className={styles.bars}>
            <div className={styles.bararea}>
              <p className="body1">Party</p>
              <div className={styles.barcontainer}>
                <Bar percentage={90} />
              </div>
            </div>
            <div className={styles.bararea}>
              <p className="body1">Adventure</p>
              <div className={styles.barcontainer}>
                <Bar percentage={30} />
              </div>
            </div>
          </div>
        </div>
      </button>

      <button type="button" className={styles.card} onClick={() => navigateTo('/route/ultra')}>
        <Image className={styles.bgimage} src="/sections/routes/ultra.png" alt="card background image" fill />
        <div className={styles.text}>
          <div className={styles.nameandprice}>
            <p className="subtitle">From €792/person</p>
            <h4 className="semibold">Ultra route</h4>
          </div>
          <div className={styles.bars}>
            <div className={styles.bararea}>
              <p className="body1">Party</p>
              <div className={styles.barcontainer}>
                <Bar percentage={95} />
              </div>
            </div>
            <div className={styles.bararea}>
              <p className="body1">Party</p>
              <div className={styles.barcontainer}>
                <Bar percentage={10} />
              </div>
            </div>
          </div>
        </div>
      </button>

      <button type="button" className={styles.card} onClick={() => navigateTo('/route/greece')}>
        <Image className={styles.bgimage} src="/sections/routes/greece.png" alt="card background image" fill />
        <div className={styles.text}>
          <div className={styles.nameandprice}>
            <p className="subtitle">From €792/person</p>
            <h4 className="semibold">Greece route</h4>
          </div>
          <div className={styles.bars}>
            <div className={styles.bararea}>
              <p className="body1">Party</p>
              <div className={styles.barcontainer}>
                <Bar percentage={40} />
              </div>
            </div>
            <div className={styles.bararea}>
              <p className="body1">Adventure</p>
              <div className={styles.barcontainer}>
                <Bar percentage={80} />
              </div>
            </div>
          </div>
        </div>
      </button>

      <button type="button" className={styles.card} onClick={() => navigateTo('/route/adventure')}>
        <Image className={styles.bgimage} src="/sections/routes/adventure.png" alt="card background image" fill />
        <div className={styles.text}>
          <div className={styles.nameandprice}>
            <p className="subtitle">From €792/person</p>
            <h4 className="semibold">Adventure route</h4>
          </div>
          <div className={styles.bars}>
            <div className={styles.bararea}>
              <p className="body1">Party</p>
              <div className={styles.barcontainer}>
                <Bar percentage={10} />
              </div>
            </div>
            <div className={styles.bararea}>
              <p className="body1">Adventure</p>
              <div className={styles.barcontainer}>
                <Bar percentage={90} />
              </div>
            </div>
          </div>
        </div>
      </button>
    </div>
  );
};

export default RoutesCards;
