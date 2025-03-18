'use client';

import { useState } from 'react';

import Image from 'next/image';

import Bar from '@/components/Bar';

import styles from './Accordion.module.scss';

const Accordion = () => {
  const [selected, setSelected] = useState(1);

  const toggleDrawer = (drawerNumber: number): void => {
    if (selected === drawerNumber) {
      setSelected(0);
    } else {
      setSelected(drawerNumber);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>, drawerNumber: number) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggleDrawer(drawerNumber);
    }
  };

  return (
    <div className={styles.accordion}>
      <div
        className={styles.drawer}
        role="button"
        tabIndex={0}
        onKeyDown={event => handleKeyDown(event, 1)}
        onClick={() => toggleDrawer(1)}
      >
        <div className={styles.titlebar}>
          <p className="subtitle semibold">Ultra route</p>
          <Image
            className={`${selected === 1 ? styles.closeIcon : styles.openIcon}`}
            src="/icons/Chevron.svg"
            alt=""
            width={16}
            height={16}
          />
        </div>
        <div className={`${selected === 1 ? styles.content : styles.contentClosed}`}>
          <Image
            className={styles.contentImage}
            src="/sections/routeAccordion/ultra.png"
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
};

export default Accordion;
