'use client';

import { PropsWithChildren } from 'react';

import { useRouter } from 'next/navigation';

import styles from './Button.module.scss';

interface ButtonProps {
  text: string;
  route?: string;
  color?: string;
  textColor?: string;
  round?: boolean;
  className?: string;
}

const Button = ({ children, text, route, color, textColor, round, className }: PropsWithChildren<ButtonProps>) => {
  const router = useRouter();

  const handleClick = () => {
    if (route) {
      router.push(route);
    }
  };

  const buttonStyle = {
    ...(color && { backgroundColor: color }),
    ...(textColor && { color: textColor }),
    ...(round && { borderRadius: '50px' }),
  };

  return (
    <button className={`${styles.button} ${className || ''}`} type="button" onClick={handleClick} style={buttonStyle}>
      {text}
      {children}
    </button>
  );
};

export default Button;
