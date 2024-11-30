import { useState } from 'react';
import LoginForm from './components/LoginForm';
import Dashboard from './components/Dashboard';  // Importing the new Dashboard
import './App.css';

function App() {
  const [loggedIn, setLoggedIn] = useState(!!localStorage.getItem('auth_token'));

  const handleLogin = () => setLoggedIn(true);
  const handleLogout = () => {
    localStorage.removeItem('auth_token');
    setLoggedIn(false);
  };

  return (
    <div className="bg-gray-100 min-h-screen py-8">
      {loggedIn ? (
        <Dashboard onLogout={handleLogout} /> // Pass handleLogout to Dashboard
      ) : (
        <LoginForm onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
