import ReactDOM from 'react-dom';
import { Button } from './Button';
import { Card } from './Card';
import styles from './ErrorModal.module.css';

interface ErrorModalProps {
  title: string;
  message: string;
  onCloseModal: () => void;
}

const Backdrop = ({ onClose }: { onClose: () => void }) => {
  return <div className={styles.backdrop} onClick={onClose}></div>;
};

const Modal = ({
  title,
  message,
  onClose,
}: {
  title: string;
  message: string;
  onClose: () => void;
}) => {
  return (
    <Card className={styles.modal}>
      <header className={styles.header}>
        <h2>{title}</h2>
      </header>
      <div className={styles.content}>
        <p>{message}</p>
      </div>
      <footer className={styles.actions}>
        <Button onClick={onClose}>Close</Button>
      </footer>
    </Card>
  );
};

export const ErrorModal: React.FC<ErrorModalProps> = ({
  title,
  message,
  onCloseModal,
}) => {
  const backdropRoot = document.getElementById('backdrop');
  const modalRoot = document.getElementById('modal');

  if (!backdropRoot || !modalRoot) {
    console.error(
      'No elements with ID backdrop or modal in the DOM were found.'
    );
    return null;
  }

  return (
    <>
      {ReactDOM.createPortal(<Backdrop onClose={onCloseModal} />, backdropRoot)}
      {ReactDOM.createPortal(
        <Modal title={title} message={message} onClose={onCloseModal} />,
        modalRoot
      )}
    </>
  );
};
