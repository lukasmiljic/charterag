'use client';

import { useRef } from 'react';

import { motion, useInView } from 'motion/react';

import styles from './Bar.module.scss';

interface BarProps {
  percentage: number;
  foreground?: string;
  background?: string;
  delay?: number;
}

const Bar = ({ percentage, foreground, background, delay = 0 }: BarProps) => {
  const clampedPercentage = Math.max(0, Math.min(100, percentage));
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.8,
  });

  return (
    <div ref={ref} className={styles.emptybar} {...(background && { style: { backgroundColor: background } })}>
      <motion.div
        className={styles.fullbar}
        initial={{ width: 0 }}
        animate={isInView ? { width: `${clampedPercentage}%` } : { width: 0 }}
        transition={{
          duration: 0.3,
          delay,
          ease: 'easeOut',
        }}
        style={{
          ...(foreground && { backgroundColor: foreground }),
        }}
      />
    </div>
  );
};

export default Bar;
