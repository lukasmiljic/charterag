import { PropsWithChildren } from 'react';

import Image from 'next/image';

import Button from '@/components/Button';

import styles from './CrewArea.module.scss';

interface CrewAreaProps {
  carouselTitle: string;
  carouselText: string;
  title: string;
  body: string;
  buttonText: string;
  reverse?: boolean;
}

const CrewArea = ({
  reverse,
  carouselTitle,
  carouselText,
  title,
  body,
  buttonText,
  children,
}: PropsWithChildren<CrewAreaProps>) => (
  <div className={`${styles.crewArea} ${reverse ? styles.reverse : ''}`}>
    <div>
      <div />
      {children}
      <div className={styles.carouselText}>
        <p className="subtitle1 semibold">{carouselTitle}</p>
        <p className="body1">{carouselText}</p>
      </div>
    </div>
    <div className={styles.textArea}>
      <h3 className="semibold">{title}</h3>
      <p className="body1"> {body}</p>
      <Button round color="white" text={buttonText}>
        <div className={styles.iconborder}>
          <Image className={styles.chevron} src="/icons/Chevron.svg" alt="" width={8} height={8} />
        </div>
      </Button>
    </div>
  </div>
);

export default CrewArea;
