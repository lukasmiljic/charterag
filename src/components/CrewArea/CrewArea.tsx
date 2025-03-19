import { PropsWithChildren } from 'react';

import Image from 'next/image';

import Button from '@/components/Button';

import styles from './CrewArea.module.scss';

interface CrewAreaProps {
  title: string;
  body: string;
  buttonText: string;
  buttonRoute: string;
  reverse?: boolean;
}

const CrewArea = ({ reverse, title, body, buttonText, buttonRoute, children }: PropsWithChildren<CrewAreaProps>) => (
  <div className={`${styles.crewArea} ${reverse ? styles.reverse : ''}`}>
    <div>
      <div />
      {children}
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
