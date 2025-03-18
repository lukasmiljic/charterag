import Image from 'next/image';

import styles from './HighlightsSection.module.scss';

const HighlightsSection = () => (
  <section className={`${styles.highlightsSection} centercontainer`}>
    <h3>Route Highlights</h3>
    <div className={styles.imagegrid}>
      <div className={styles.gridItem}>
        <Image
          className={styles.gridimage}
          src="/sections/lifestyle/image6.png"
          alt="grid image"
          width={265}
          height={242}
        />
        <h5>Fjord like Bays</h5>
        <p className="body2">
          Where the sea meets the mountains. Sail the Bay of Kotor, often called Europes most southernmost fjord.
          Towering peaks and a rocky coastline dotted with charming waterside towns will leave you breathless.
        </p>
      </div>
      <div className={styles.gridItem}>
        <Image
          className={styles.gridimage}
          src="/sections/lifestyle/image1.png"
          alt="grid image"
          width={265}
          height={242}
        />
        <h5>Fjord like Bays</h5>
        <p className="body2">
          Where the sea meets the mountains. Sail the Bay of Kotor, often called Europes most southernmost fjord.
          Towering peaks and a rocky coastline dotted with charming waterside towns will leave you breathless.
        </p>
      </div>

      <div className={styles.gridItem}>
        <Image
          className={styles.gridimage}
          src="/sections/lifestyle/image2.png"
          alt="grid image"
          width={265}
          height={242}
        />
        <h5>Fjord like Bays</h5>
        <p className="body2">
          Where the sea meets the mountains. Sail the Bay of Kotor, often called Europes most southernmost fjord.
          Towering peaks and a rocky coastline dotted with charming waterside towns will leave you breathless.
        </p>
      </div>

      <div className={styles.gridItem}>
        <Image
          className={styles.gridimage}
          src="/sections/lifestyle/image3.png"
          alt="grid image"
          width={265}
          height={242}
        />
        <h5>Fjord like Bays</h5>
        <p className="body2">
          Where the sea meets the mountains. Sail the Bay of Kotor, often called Europes most southernmost fjord.
          Towering peaks and a rocky coastline dotted with charming waterside towns will leave you breathless.
        </p>
      </div>

      <div className={styles.gridItem}>
        <Image
          className={styles.gridimage}
          src="/sections/lifestyle/image4.png"
          alt="grid image"
          width={265}
          height={242}
        />
        <h5>Fjord like Bays</h5>
        <p className="body2">
          Where the sea meets the mountains. Sail the Bay of Kotor, often called Europes most southernmost fjord.
          Towering peaks and a rocky coastline dotted with charming waterside towns will leave you breathless.
        </p>
      </div>

      <div className={styles.gridItem}>
        <Image
          className={styles.gridimage}
          src="/sections/lifestyle/image5.png"
          alt="grid image"
          width={265}
          height={242}
        />
        <h5>Fjord like Bays</h5>
        <p className="body2">
          Where the sea meets the mountains. Sail the Bay of Kotor, often called Europes most southernmost fjord.
          Towering peaks and a rocky coastline dotted with charming waterside towns will leave you breathless.
        </p>
      </div>
    </div>
  </section>
);

export default HighlightsSection;
