'use client';

import { useRef } from 'react';

import { motion, useScroll, useTransform } from 'motion/react';
import Image from 'next/image';

import styles from './TestemonialsSection.module.scss';

const TestemonialsSection = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ['1%', '-400%']);

  return (
    <section ref={targetRef} className={styles.testemonialsSection}>
      <div className={styles.container}>
        <Image className={styles.bgimage} src="/sections/testemonials/testemonialbg.png" alt="background image" fill />
        <div className={styles.content}>
          <h3>Our guests love it!</h3>
          <div className={styles.cards}>
            {[...Array(3)].map(card => (
              <motion.div style={{ x }} className={styles.card}>
                <div className={styles.userinfo}>
                  <Image
                    className={styles.userimage}
                    src="/sections/testemonials/user.png"
                    alt="user profile picture"
                    width={40}
                    height={40}
                  />
                  <p className="body2">Courtney Henry</p>
                </div>
                <div className={styles.stars}>
                  {[...Array(5)].map(star => (
                    <Image src="/sections/testemonials/Star.svg" alt="star" width={23} height={23} />
                  ))}
                </div>
                <h5>Amazing experience</h5>
                <p className="body1">
                  Lorem ipsum dolor sit amet consectetur. Sapien eget morbi aliquam ultricies est ornare. Eu ac lorem
                  eleifend diam tellus magnis volutpat nulla.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestemonialsSection;
