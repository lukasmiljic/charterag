import styles from './Bar.module.scss';

interface BarProps {
  percentage: number;
  color?: string;
}

const Bar = ({ percentage, color }: BarProps) => {
  const clampedPercentage = Math.max(0, Math.min(100, percentage));

  return (
    <div className={styles.emptybar}>
      <div
        className={styles.fullbar}
        style={{ width: `${clampedPercentage}%`, ...(color && { backgroundColor: color }) }}
      />
    </div>
  );
};

export default Bar;
