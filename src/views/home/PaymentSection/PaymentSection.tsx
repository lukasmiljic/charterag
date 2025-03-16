import Caption from '@/components/Caption';
import SectionHeader from '@/components/SectionHeader';

import styles from './PaymentSection.module.scss';

const PaymentSection = () => (
  <section className={styles.container}>
    <SectionHeader
      caption="payment"
      header="You don't have to break the bank"
      paragraph="See how lorem ipsum dolor sit"
    />
    <div className={styles.cards}>
      <div className={styles.card}>
        <div className={styles.text}>
          <h3>Sailweek experience</h3>
          <Caption text="from 787€" regularCase backgroundColor="#062949" />
        </div>
        <ul>
          <li>experience</li>
          <li>lorem ipsum dolor</li>
          <li>dolor sit et</li>
          <li>lorem ipsum dolor</li>
          <li>et santi dolor sum</li>
          <li>ipsum lorem dolor sit et</li>
        </ul>
      </div>

      <div className={styles.card} style={{ backgroundColor: 'white' }}>
        <div className={styles.text}>
          <h3>Individual experience</h3>
        </div>
        <ul>
          <li>experience</li>
          <li>lorem ipsum dolor</li>
          <li className={styles.inactive}>dolor sit et</li>
          <li className={styles.inactive}>lorem ipsum dolor</li>
          <li className={styles.inactive}>et santi dolor sum</li>
          <li className={styles.inactive}>ipsum lorem dolor sit et</li>
        </ul>
      </div>
    </div>
  </section>
);

export default PaymentSection;
