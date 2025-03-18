import Image from 'next/image';

import Button from '@/components/Button';

import styles from './ReadySection.module.scss';

const ReadySection = () => (
  <section className={styles.container}>
    <Image className={styles.bgimage} src="/sections/testemonials/testemonialbg.png" alt="background image" fill />
    <div className={styles.content}>
      <h3 className="semibold">Ready to go?</h3>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit pariatur laudantium iusto voluptatem
        numquam dignissimos eligendi!
      </p>
      <Button color="white" text="explore our destinations" />
    </div>
  </section>
);

export default ReadySection;
