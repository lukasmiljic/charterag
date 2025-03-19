'use client';

import { useState } from 'react';

import Image from 'next/image';

import Bar from '@/components/Bar';

import styles from './Accordion.module.scss';
import Drawer from './Drawer';

const Accordion = () => {
  const [selected, setSelected] = useState(1);

  const toggleDrawer = (drawerNumber: number): void => {
    if (selected === drawerNumber) {
      setSelected(0);
    } else {
      setSelected(drawerNumber);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>, drawerNumber: number) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggleDrawer(drawerNumber);
    }
  };

  const bars = [
    { label: 'Organised parties', percentage: 100 },
    { label: 'Sailsweek regatta', percentage: 100 },
    { label: 'Swim stops', percentage: 60 },
    { label: 'Sightseeing', percentage: 50 },
    { label: 'Local cuisine', percentage: 0 },
    { label: 'Wine tasting', percentage: 0 },
    { label: 'Island hopping', percentage: 20 },
    { label: 'Exploring cities', percentage: 10 },
    { label: 'Cliff jumping', percentage: 40 },
  ];

  const routes = [
    { title: 'Ultra route', image: '/sections/routeAccordion/ultra.png' },
    { title: 'Party route', image: '/sections/routes/party.png' },
    { title: 'Greece route', image: '/sections/routes/greece.png' },
    { title: 'Adventure route', image: '/sections/routes/adventure.png' },
  ];

  return (
    <div className={styles.accordion}>
      {routes.map((route, i) => (
        <div
          role="button"
          tabIndex={0}
          onKeyDown={event => handleKeyDown(event, i)}
          onClick={() => toggleDrawer(i + 1)}
        >
          <Drawer title={route.title} image={route.image} selected={selected === i + 1} bars={bars} />
        </div>
      ))}
    </div>
  );
};

export default Accordion;
