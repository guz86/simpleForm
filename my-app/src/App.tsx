import { useState } from 'react';
import './App.css';
import { CreateUser } from './components/users/CreateUser';
import { UserList } from './components/users/UserList';

interface User {
  id: number;
  name: string;
  age: number;
}

function App() {
  const [userList, setUserList] = useState<User[]>([]);

  const createUserHandler = (name: string, age: number) => {
    setUserList((prev) => [...prev, { id: Date.now(), name, age }]);
  };

  const deleteUserHandler = (userId: number) => {
    setUserList((prev) => prev.filter((user) => user.id !== userId));
  };

  return (
    <>
      <CreateUser onCreateUser={createUserHandler} />
      <UserList users={userList} onDeleteUser={deleteUserHandler} />
    </>
  );
}

export default App;
