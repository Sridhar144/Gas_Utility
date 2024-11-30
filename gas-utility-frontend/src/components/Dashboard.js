import { useState, useEffect } from 'react';
import RequestForm from './RequestForm';
import RequestList from './RequestList';
import api from '../axios';
function Dashboard({ onLogout }) {
  const [requests, setRequests] = useState([]);

  // Fetch the user's requests on dashboard load
  useEffect(() => {
    const fetchRequests = async () => {
      const token = localStorage.getItem('auth_token');
      try {
        const response = await api.get('http://127.0.0.1:8000/api/requests/', {
          headers: {
            'Authorization': `Token ${token}`,
          },
        });
        setRequests(response.data);
      } catch (err) {
        console.error('Error fetching requests', err);
        alert('Failed to fetch requests');
      }
    };

    fetchRequests();
  }, []);

  return (
    <div className="max-w-4xl mx-auto mt-8 p-4 bg-white rounded-lg shadow-md">
      <h1 className="text-center text-3xl font-bold mb-8">Dashboard</h1>

      {/* Button to log out */}
      <button
        onClick={onLogout}
        className="mx-auto bg-red-500 text-white p-2 rounded mb-8"
      >
        Logout
      </button>

      {/* Request Form and List */}
      <RequestForm />
      <RequestList requests={requests} />
    </div>
  );
}

export default Dashboard;
