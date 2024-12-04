import { FormEvent } from 'react';

export const CreateUser = () => {
  const createUserHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={createUserHandler}>
      <label htmlFor="name">Name</label>
      <input id="name" type="text" />

      <label htmlFor="age">Age</label>
      <input id="age" type="age" />

      <button type="submit">Add user</button>
    </form>
  );
};
