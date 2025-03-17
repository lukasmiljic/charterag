import Image from 'next/image';

import Bar from '../Bar';
import styles from './RoutesCards.module.scss';

const RoutesCards = () => (
  <div className={styles.cards}>
    <div className={styles.card}>
      <Image
        className={styles.bgimage}
        src="/sections/routes/party.png"
        alt="card background image"
        width={265}
        height={370}
      />
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
    </div>

    <div className={styles.card}>
      <Image
        className={styles.bgimage}
        src="/sections/routes/ultra.png"
        alt="card background image"
        width={265}
        height={370}
      />
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
    </div>

    <div className={styles.card}>
      <Image
        className={styles.bgimage}
        src="/sections/routes/greece.png"
        alt="card background image"
        width={265}
        height={370}
      />
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
    </div>

    <div className={styles.card}>
      <Image
        className={styles.bgimage}
        src="/sections/routes/adventure.png"
        alt="card background image"
        width={265}
        height={370}
      />
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
    </div>
  </div>
);

export default RoutesCards;
