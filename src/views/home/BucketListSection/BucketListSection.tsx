import Image from 'next/image';

import Button from '@/components/Button';
import SectionHeader from '@/components/SectionHeader';

import styles from './BucketListSection.module.scss';

const BucketListSection = () => (
  <section className={`${styles.bucketsection} centercontainer`}>
    <div className={styles.images}>
      <Image
        className={styles.image1}
        src="/sections/experience/explore.png"
        alt="card image"
        width={233}
        height={349}
      />
      <Image
        className={styles.image2}
        src="/sections/bucketlist/image2.jpg"
        alt="card image"
        width={412}
        height={274}
      />
      <Image
        className={styles.image3}
        src="/sections/bucketlist/image3.jpg"
        alt="card image"
        width={262}
        height={273}
      />
    </div>

    <SectionHeader
      className={styles.bucketlistSectionHeader}
      header="Check Charterag off your bucket list"
      paragraph="Lorem ipsum dolor sit amet consectetur. Tellus lectus non purus odio amet"
    />
    <div className={styles.buttons}>
      <Button text="explore" route="/explore" />
      <Button text="follow us" color="white" route="https://www.instagram.com/" />
    </div>
  </section>
);

export default BucketListSection;
