import Image from 'next/image';

import Bar from '@/components/Bar';

import styles from './Accordion.module.scss';

const Accordion = () => (
  <div className={styles.accordion}>
    <div className={styles.drawer}>
      <div className={styles.titlebar}>
        <p className="subtitle semibold">Ultra route</p>
        <Image src={'/icons/Chevron.svg'} alt="" width={16} height={16} />
      </div>
      <div className={styles.content}>
        <Image
          className={styles.contentImage}
          src={'/sections/routeAccordion/ultra.png'}
          alt="Ultra background image"
          width={400}
          height={276}
        />
        <div className={styles.bars}>
          <div className={styles.barArea}>
            <p className="body1">Organised parties</p>
            <div className={styles.barContainer}>
              <Bar percentage={10} background="white" foreground="#062949" />
            </div>
          </div>
          <div className={styles.barArea}>
            <p className="body1">Organised parties</p>
            <div className={styles.barContainer}>
              <Bar percentage={10} background="white" foreground="#062949" />
            </div>
          </div>
          <div className={styles.barArea}>
            <p className="body1">Organised parties</p>
            <div className={styles.barContainer}>
              <Bar percentage={10} background="white" foreground="#062949" />
            </div>
          </div>
          <div className={styles.barArea}>
            <p className="body1">Organised parties</p>
            <div className={styles.barContainer}>
              <Bar percentage={10} background="white" foreground="#062949" />
            </div>
          </div>
          <div className={styles.barArea}>
            <p className="body1">Organised parties</p>
            <div className={styles.barContainer}>
              <Bar percentage={10} background="white" foreground="#062949" />
            </div>
          </div>
          <div className={styles.barArea}>
            <p className="body1">Organised parties</p>
            <div className={styles.barContainer}>
              <Bar percentage={10} background="white" foreground="#062949" />
            </div>
          </div>
          <div className={styles.barArea}>
            <p className="body1">Organised parties</p>
            <div className={styles.barContainer}>
              <Bar percentage={10} background="white" foreground="#062949" />
            </div>
          </div>
          <div className={styles.barArea}>
            <p className="body1">Organised parties</p>
            <div className={styles.barContainer}>
              <Bar percentage={10} background="white" foreground="#062949" />
            </div>
          </div>
          <div className={styles.barArea}>
            <p className="body1">Organised parties</p>
            <div className={styles.barContainer}>
              <Bar percentage={10} background="white" foreground="#062949" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Accordion;
