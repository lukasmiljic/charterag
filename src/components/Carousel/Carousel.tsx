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

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>, direction: 'next' | 'prev') => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();

      if (direction === 'next') {
        showNextImage();
      } else {
        showPreviousImage();
      }
    }
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
          <div
            className={`${styles.prev} ${styles.button}`}
            role="button"
            tabIndex={0}
            onClick={showPreviousImage}
            onKeyDown={event => handleKeyDown(event, 'prev')}
          >
            <Image className={styles.chevron} src="/icons/Chevron.svg" alt="" width={8} height={8} />
          </div>
          <div
            className={`${styles.next} ${styles.button}`}
            role="button"
            tabIndex={0}
            onClick={showNextImage}
            onKeyDown={event => handleKeyDown(event, 'next')}
          >
            <Image className={styles.chevron} src="/icons/Chevron.svg" alt="" width={8} height={8} />
          </div>
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
