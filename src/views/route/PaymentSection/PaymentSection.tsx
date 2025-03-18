import Image from 'next/image';
import Link from 'next/link';

import Bar from '@/components/Bar';
import SectionHeader from '@/components/SectionHeader';

import styles from './PaymentSection.module.scss';

const PaymentSection = () => (
  <section className={`${styles.flexiblesection}`}>
    <div className="centercontainer">
      <SectionHeader
        caption="step 3."
        header="Pay and sail"
        paragraph="We make it easy to split the cost between your crew and pay in instalments."
      />

      <div className={styles.cards}>
        <div className={styles.card}>
          <div className={styles.moneycircle} data-number="1">
            <Image className={styles.moneyicon} src="/icons/Money.svg" alt="money icon" height={36} width={36} />
          </div>
          <div>
            <h4 className="semibold">10%</h4>
            <p className="body1">pay when booking</p>
          </div>
          <div className={styles.barcontainer}>
            <Bar percentage={10} foreground="#062949" background="#FFF" />
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.moneycircle} data-number="2">
            <Image className={styles.moneyicon} src="/icons/Money.svg" alt="money icon" height={36} width={36} />
          </div>
          <div>
            <h4 className="semibold">40%</h4>
            <p className="body1">pay 30 days after booking</p>
          </div>
          <div className={styles.barcontainer}>
            <Bar percentage={40} foreground="#062949" background="#FFF" />
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.moneycircle} data-number="3">
            <Image className={styles.moneyicon} src="/icons/Money.svg" alt="money icon" height={36} width={36} />
          </div>
          <div>
            <h4 className="semibold">50%</h4>
            <p className="body1">pay 60 days before trip</p>
          </div>
          <div className={styles.barcontainer}>
            <Bar percentage={100} foreground="#062949" background="#FFF" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default PaymentSection;
