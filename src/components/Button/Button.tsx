'use client';

import { useRouter } from 'next/navigation';

import styles from './Button.module.scss';

interface ButtonProps {
  text: string;
  route?: string;
}

const Button = ({ text, route }: ButtonProps) => {
  const router = useRouter();

  const handleClick = () => {
    if (route) {
      router.push(route);
    }
  };

  return (
    <button className={styles.button} type="button" onClick={handleClick}>
      {text}
    </button>
  );
};

export default Button;
