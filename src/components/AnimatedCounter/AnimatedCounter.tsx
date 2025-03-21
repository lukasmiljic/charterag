'use client';

import React, { useRef } from 'react';

import { animate, easeOut, inView } from 'motion';
import { KeyframeOptions, useInView, useIsomorphicLayoutEffect } from 'motion/react';

interface AnimatedCounterProps {
  from: string;
  to: number;
  animationOptions?: KeyframeOptions;
}

const AnimatedCounter = ({ to, from, animationOptions }: AnimatedCounterProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const fromNum = Number(from);

  useIsomorphicLayoutEffect(() => {
    const element = ref.current;

    if (!element) return () => {};

    if (!inView) return () => {};

    if (window.matchMedia('prefers-reduced-motion').matches) {
      element.textContent = String(to);

      return () => {};
    }

    element.textContent = from;

    const controls = animate(fromNum, to, {
      duration: 1.5,
      ease: easeOut,
      ...animationOptions,
      onUpdate(value) {
        element.textContent = String(value.toPrecision(2));
      },
    });

    return () => controls.stop();
  }, [ref, inView, to, from]);

  return <span ref={ref}>{from}</span>;
};

export default AnimatedCounter;
