import { ChangeEvent, FormEvent, useState } from 'react';
import { Card } from '../ui/Card';
import styles from './CreateUser.module.css';
import { Button } from '../ui/Button';

interface CreateUserProps {
  onCreateUser: (name: string, age: number) => void;
}

export const CreateUser = ({ onCreateUser }: CreateUserProps) => {
  const [inputName, setInputName] = useState('');
  const [inputAge, setInputAge] = useState<number | ''>('');

  const createUserHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (inputName.trim().length === 0) {
      return;
    }
    if (inputAge === '' || inputAge <= 0) {
      return;
    }

    onCreateUser(inputName, inputAge);
    setInputName('');
    setInputAge('');
  };

  function nameChangeHandler(event: ChangeEvent<HTMLInputElement>): void {
    setInputName(event.target.value);
  }
  function ageChangeHandler(event: ChangeEvent<HTMLInputElement>): void {
    setInputAge(event.target.value === '' ? '' : +event.target.value);
  }

  return (
    <Card className={styles.input}>
      <form onSubmit={createUserHandler}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          onChange={nameChangeHandler}
          value={inputName}
        />

        <label htmlFor="age">Age</label>
        <input
          id="age"
          type="number"
          onChange={ageChangeHandler}
          value={inputAge}
          min="1"
        />

        <Button type="submit">Add user</Button>
      </form>
    </Card>
  );
};
