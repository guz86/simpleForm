import { FC } from 'react';
import { Card } from '../ui/Card';
import styles from './UserList.module.css';

interface User {
  id: number;
  name: string;
  age: number;
}

interface UserListProps {
  users: User[];
  onDeleteUser: (id: number) => void;
}

export const UserList: FC<UserListProps> = ({ users, onDeleteUser }) => {
  if (users.length === 0) {
    return null;
  }

  return (
    <Card className={styles.users}>
      <ul>
        {users.map((user) => (
          <li
            key={user.id}
            onClick={() => onDeleteUser(user.id)}
            style={{ cursor: 'pointer' }}
          >
            {user.name} - {user.age}
          </li>
        ))}
      </ul>
    </Card>
  );
};
