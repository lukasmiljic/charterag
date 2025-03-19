import Image from 'next/image';

import Bar from '@/components/Bar';

import styles from './Drawer.module.scss';

interface BarData {
  label: string;
  percentage: number;
}

interface DrawerProps {
  selected?: boolean;
  bars: BarData[];
  title: string;
  image: string;
}

const Drawer = ({ selected, bars, title, image }: DrawerProps) => (
  <div className={styles.drawer} role="button" tabIndex={0}>
    <div className={styles.titlebar}>
      <p className="subtitle semibold">{title}</p>
      <Image
        className={`${selected ? styles.closeIcon : styles.openIcon}`}
        src="/icons/Chevron.svg"
        alt=""
        width={16}
        height={16}
      />
    </div>
    <div className={`${selected ? styles.content : styles.contentClosed}`}>
      <Image className={styles.contentImage} src={image} alt="Ultra background image" width={400} height={276} />
      <div className={styles.bars}>
        {bars.map(bar => (
          <div className={styles.barArea}>
            <p className="body1">{bar.label}</p>
            <div className={styles.barContainer}>
              <Bar percentage={bar.percentage} background="white" foreground="#062949" />
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Drawer;
