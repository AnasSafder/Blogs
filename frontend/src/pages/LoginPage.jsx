import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api/axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await api.get('/users'); 
      const foundUser = res.data.find(user => user.name.toLowerCase() === username.toLowerCase());

      if (foundUser) {
        localStorage.setItem('userId', foundUser.id); 
        navigate('/'); 
      } else {
        setError('User not found');
      }
    } catch (err) {
      setError('Something went wrong');
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Enter your name..."
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={{ marginRight: 8 }}
      />
      <button onClick={handleLogin}>Login</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default Login;
