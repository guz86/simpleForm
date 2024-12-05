import { ReactNode, MouseEventHandler } from 'react';
import styles from './Button.module.css';

interface ButtonProps {
  type?: 'button' | 'submit' | 'reset';
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  type = 'button',
  onClick,
  children,
}) => {
  return (
    <button className={styles.button} type={type} onClick={onClick}>
      {children}
    </button>
  );
};
