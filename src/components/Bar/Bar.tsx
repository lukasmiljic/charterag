import styles from './Bar.module.scss';

interface BarProps {
  percentage: number;
  foreground?: string;
  background?: string;
}

const Bar = ({ percentage, foreground, background }: BarProps) => {
  const clampedPercentage = Math.max(0, Math.min(100, percentage));

  return (
    <div className={styles.emptybar} {...(background && { style: { backgroundColor: background } })}>
      <div
        className={styles.fullbar}
        style={{ width: `${clampedPercentage}%`, ...(foreground && { backgroundColor: foreground }) }}
      />
    </div>
  );
};

export default Bar;
