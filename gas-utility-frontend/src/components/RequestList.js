import { useEffect, useState } from 'react';
import api from '../axios';

function RequestList() {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const fetchRequests = async () => {
      const response = await api.get('requests/');
      setRequests(response.data);
    };
    fetchRequests();
  }, []);

  return (
    <div className="max-w-4xl mx-auto mt-8 p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-xl text-center">Your Service Requests</h2>
      <ul>
        {requests.map((request) => (
          <li key={request.id} className="border-b p-4">
            <h3 className="font-bold">{request.service_type}</h3>
            <p>{request.details}</p>
            <p>Status: {request.status}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RequestList;
