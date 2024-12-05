import styles from './Card.module.css';
import { ReactNode } from 'react';

interface CardProps {
  className?: string;
  children: ReactNode;
}

export const Card: React.FC<CardProps> = ({ className, children }) => {
  return (
    <div className={`${styles.card} ${className || ''}`.trim()}>{children}</div>
  );
};
