import { useState } from 'react';
import api from '../axios';

function LoginForm({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    // console.log(username)
    // console.log(password)
    try {
      const response = await api.post('login/', { username, password });
        // console.log(response)
      localStorage.setItem('auth_token', response.data.token);
      onLogin();
    } catch (err) {
      setError('Invalid credentials!');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-xl text-center">Login</h2>
      {error && <p className="text-red-500 text-center">{error}</p>}
      <form onSubmit={handleLogin}>
        <input
          type="text"
          className="w-full p-2 my-2 border border-gray-300 rounded"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          className="w-full p-2 my-2 border border-gray-300 rounded"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="w-full bg-blue-500 text-white p-2 mt-4 rounded">Login</button>
      </form>
    </div>
  );
}

export default LoginForm;
