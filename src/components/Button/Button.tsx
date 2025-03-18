'use client';

import { PropsWithChildren } from 'react';

import { useRouter } from 'next/navigation';

import styles from './Button.module.scss';

interface ButtonProps {
  text: string;
  route?: string;
  color?: string;
  round?: boolean;
}

const Button = ({ children, text, route, color, round }: PropsWithChildren<ButtonProps>) => {
  const router = useRouter();

  const handleClick = () => {
    if (route) {
      router.push(route);
    }
  };

  return (
    <button
      className={styles.button}
      type="button"
      onClick={handleClick}
      {...(color && { style: { backgroundColor: color } })}
      {...(round && { style: { borderRadius: '100%' } })}
    >
      {text}
      {children}
    </button>
  );
};

export default Button;
