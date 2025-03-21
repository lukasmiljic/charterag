'use client';

import { useRef } from 'react';

import { motion, useInView } from 'motion/react';
import Image from 'next/image';

import Button from '@/components/Button';
import SectionHeader from '@/components/SectionHeader';

import styles from './BucketListSection.module.scss';

const BucketListSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.3,
  });

  return (
    <section className={`${styles.bucketsection} centercontainer`}>
      <div ref={ref} className={styles.images}>
        <motion.div
          initial={{ scale: 0.8, x: -50 }}
          animate={isInView ? { scale: 1, x: 0 } : { scale: 0.8, x: -50 }}
          transition={{ duration: 0.3, ease: 'anticipate' }}
        >
          <Image
            className={styles.image1}
            src="/sections/experience/explore.png"
            alt="card image"
            width={233}
            height={349}
          />
        </motion.div>
        <motion.div
          initial={{ scale: 0.8, y: -10 }}
          animate={isInView ? { scale: 1, y: 0 } : { scale: 0.8, y: -10 }}
          transition={{ duration: 0.3, ease: 'anticipate', delay: 0.1 }}
        >
          <Image
            className={styles.image2}
            src="/sections/bucketlist/image2.jpg"
            alt="card image"
            width={412}
            height={274}
          />
        </motion.div>
        <motion.div
          initial={{ scale: 0.8, x: 50 }}
          animate={isInView ? { scale: 1, x: 0 } : { scale: 0.8, x: 50 }}
          transition={{ duration: 0.3, ease: 'anticipate', delay: 0.2 }}
        >
          <Image
            className={styles.image3}
            src="/sections/bucketlist/image3.jpg"
            alt="card image"
            width={262}
            height={273}
          />
        </motion.div>
      </div>

      <SectionHeader
        className={styles.bucketlistSectionHeader}
        header="Check Charterag off your bucket list"
        paragraph="Lorem ipsum dolor sit amet consectetur. Tellus lectus non purus odio amet"
      />
      <div className={styles.buttons}>
        <Button text="explore" route="/explore" />
        <Button text="follow us" color="white" route="https://www.instagram.com/">
          <div className={styles.icon}>
            <Image src="/icons/Instagram.svg" alt="ig" width={16} height={16} />
          </div>
        </Button>
      </div>
    </section>
  );
};

export default BucketListSection;
