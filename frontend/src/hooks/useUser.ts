import { useEffect, useState } from 'react';
import api from '../api/axios';

function getRandomUserId(): number {
  return Math.floor(Math.random() * 10) + 1;
}

const useUser = () => {
  const [user, setUser] = useState<any | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('activeUser');

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      const userId = getRandomUserId();
      api.get(`/users/${userId}`).then((res: { data: any; }) => {
        setUser(res.data);
        localStorage.setItem('activeUser', JSON.stringify(res.data));
      });
    }
  }, []);

  return { user };
};

export default useUser;
