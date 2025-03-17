'use client';

import { useRouter } from 'next/navigation';

import styles from './Button.module.scss';

interface ButtonProps {
  text: string;
  route?: string;
  color?: string;
}

const Button = ({ text, route, color }: ButtonProps) => {
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
    >
      {text}
    </button>
  );
};

export default Button;
