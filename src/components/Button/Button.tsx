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

  const buttonStyle = {
    ...(color && { backgroundColor: color }),
    ...(round && { borderRadius: '50px' }),
  };

  return (
    <button className={styles.button} type="button" onClick={handleClick} style={buttonStyle}>
      {text}
      {children}
    </button>
  );
};

export default Button;
