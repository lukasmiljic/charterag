'use client';

import { useState } from 'react';

import Image from 'next/image';

import styles from './Carousel.module.scss';

interface CarouselProps {
  images: string[];
  carouselTitle: string[];
  carouselText: string[];
}

const Carousel = ({ images, carouselText, carouselTitle }: CarouselProps) => {
  const [currentImage, setCurrentImage] = useState(0);

  const showNextImage = () => {
    setCurrentImage(currentImage === images.length - 1 ? 0 : currentImage + 1);
  };

  const showPreviousImage = () => {
    setCurrentImage(currentImage === 0 ? images.length - 1 : currentImage - 1);
  };

  return (
    <>
      <div className={styles.carousel}>
        <div className={styles.allImages}>
          {images.map(url => (
            <Image
              className={styles.image}
              key={url}
              src={url}
              alt="carousel image"
              width={555}
              height={500}
              style={{ translate: `${-100 * currentImage}%` }}
            />
          ))}
        </div>
        <div className={styles.buttons}>
          <button className={`${styles.prev} ${styles.button}`} type="button" onClick={showPreviousImage}>
            <Image className={styles.chevron} src="/icons/Chevron.svg" alt="previous" width={8} height={8} />
          </button>
          <button className={`${styles.button}`} type="button" onClick={showNextImage}>
            <Image className={styles.chevron} src="/icons/Chevron.svg" alt="next" width={8} height={8} />
          </button>
        </div>
      </div>
      <div className={styles.carouselText}>
        <p className="subtitle1 semibold">{carouselTitle[currentImage]}</p>
        <p className="body1">{carouselText[currentImage]}</p>
      </div>
    </>
  );
};

export default Carousel;
