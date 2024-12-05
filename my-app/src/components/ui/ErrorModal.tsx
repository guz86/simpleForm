import { Button } from './Button';
import { Card } from './Card';
import styles from './ErrorModal.module.css';

interface ErrorModalProps {
  title: string;
  message: string;
  onCloseModal: () => void;
}

export const ErrorModal: React.FC<ErrorModalProps> = ({
  title,
  message,
  onCloseModal,
}) => {
  return (
    <div>
      <div className={styles.backdrop} onClick={onCloseModal}></div>
      <div className={styles.backdrop}></div>
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>{title}</h2>
        </header>
        <div className={styles.content}>
          <p>{message}</p>
        </div>
        <footer className={styles.actions}>
          <Button onClick={onCloseModal}>Close</Button>
        </footer>
      </Card>
    </div>
  );
};
