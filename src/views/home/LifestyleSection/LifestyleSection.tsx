import Image from 'next/image';

import SectionHeader from '@/components/SectionHeader';

import styles from './LifestyleSection.module.scss';

const LifestyleSection = () => (
  <section className={`${styles.lifestyleSection} centercontainer`}>
    <SectionHeader
      className={styles.lifestyleSectionHeader}
      header="Come live your best life"
      paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus semper habitant arcu eget. Et integer facilisi eget diam."
    />
    <div className={styles.imagegrid}>
      <Image
        className={styles.gridimage}
        src="/sections/lifestyle/image1.png"
        alt="grid image"
        width={265}
        height={242}
      />
      <Image
        className={styles.gridimage}
        src="/sections/lifestyle/image2.png"
        alt="grid image"
        width={265}
        height={242}
      />
      <Image
        className={styles.gridimage}
        src="/sections/lifestyle/image3.png"
        alt="grid image"
        width={265}
        height={242}
      />
      <Image
        className={styles.gridimage}
        src="/sections/lifestyle/image4.png"
        alt="grid image"
        width={265}
        height={242}
      />
      <Image
        className={styles.gridimage}
        src="/sections/lifestyle/image5.png"
        alt="grid image"
        width={265}
        height={242}
      />
      <Image
        className={styles.gridimage}
        src="/sections/lifestyle/image6.png"
        alt="grid image"
        width={265}
        height={242}
      />
      <Image
        className={styles.gridimage}
        src="/sections/lifestyle/image7.png"
        alt="grid image"
        width={265}
        height={242}
      />
      <Image
        className={styles.gridimage}
        src="/sections/lifestyle/image8.png"
        alt="grid image"
        width={265}
        height={242}
      />
    </div>
    <div className={styles.taglines}>
      <div className={styles.tagline}>
        <div className={styles.firstline}>
          <Image src="/icons/Sailboat.svg" alt="sailboat" width={26} height={26} />
          <h5>A trip like no other</h5>
        </div>
        <p>Spend unforgettable 7 days at sea with your crew at your own pace</p>
      </div>

      <div className={styles.tagline}>
        <div className={styles.firstline}>
          <Image src="/icons/Surf.svg" alt="sailboat" width={26} height={26} />
          <h5>Active vacation</h5>
        </div>
        <p>Indulge yourself in dozens of parties and activities on your trip</p>
      </div>

      <div className={styles.tagline}>
        <div className={styles.firstline}>
          <Image src="/icons/Drinks.svg" alt="sailboat" width={26} height={26} />
          <h5>Bonding</h5>
        </div>
        <p>Meet people from all over the world, discover new friends</p>
      </div>
    </div>
  </section>
);

export default LifestyleSection;
