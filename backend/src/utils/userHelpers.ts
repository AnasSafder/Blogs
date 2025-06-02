import { User } from '../types/User';
import usersData from '../data/users';

const users: User[] = usersData;

export const findUserById = (id: number): User | undefined => {
  return users.find(u => u.id === id);
};
