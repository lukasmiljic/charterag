import Image from 'next/image';
import Link from 'next/link';

import Bar from '@/components/Bar';
import SectionHeader from '@/components/SectionHeader';

import styles from './FlexiblePaymentSection.module.scss';

const FlexiblePaymentSection = () => (
  <section className={`${styles.flexiblesection}`}>
    <div className="centercontainer">
      <SectionHeader header="Flexible payment" />
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
            <Bar percentage={10} foreground="#1DC072" background="#EFEFEF" />
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
            <Bar percentage={40} foreground="#1DC072" background="#EFEFEF" />
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
            <Bar percentage={100} foreground="#1DC072" background="#EFEFEF" />
          </div>
        </div>
      </div>
      <p className={`${styles.termstext} body2`}>
        NOTE: Only applies to bookings made a minimum of 95 days before the trip. For bookings made within 95 days
        before the trip, see our <Link href="/terms-and-conditions">Terms and conditions</Link>.
      </p>
    </div>
  </section>
);

export default FlexiblePaymentSection;
