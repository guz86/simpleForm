import { FormEvent } from 'react';
import { Card } from '../ui/Card';
import styles from './CreateUser.module.css';
import { Button } from '../ui/Button';

export const CreateUser = () => {
  const createUserHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <Card className={styles.input}>
      <form onSubmit={createUserHandler}>
        <label htmlFor="name">Name</label>
        <input id="name" type="text" />

        <label htmlFor="age">Age</label>
        <input id="age" type="age" />

        <Button type="submit">Add user</Button>
      </form>
    </Card>
  );
};
