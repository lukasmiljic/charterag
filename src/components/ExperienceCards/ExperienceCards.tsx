'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import Routes, { Sections } from '@/data/routes';

import styles from './ExperienceCards.module.scss';

const ExperienceCards = () => {
  const router = useRouter();

  const navigateTo = (route: string) => {
    router.push(route);
  };

  const experienceRoutes = Routes.filter(x => x.section.includes(Sections.Experience));

  return (
    <div className={styles.cards}>
      {experienceRoutes.map(route => (
        <button
          type="button"
          className={styles.card}
          key={route.title}
          onClick={() => navigateTo(`/route/${route.slug}`)}
        >
          <Image className={styles.bgimage} src={route.coverImage} alt="card background image" fill />
          <h4>{route.title}</h4>
        </button>
      ))}
    </div>
  );
};

export default ExperienceCards;
