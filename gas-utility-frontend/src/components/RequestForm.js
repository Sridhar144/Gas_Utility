// import { useState } from 'react';
// import api from '../axios';

// function RequestForm() {
//   const [selectedType, setServiceType] = useState('');
//   const [description, setDetails] = useState('');
//   const [attachment, setFile] = useState(null);
//     const token=localStorage.getItem('auth_token')
//   const handleSubmit = async (e) => {
//     e.preventDefault();
  
//     const formData = new FormData();
//     if (selectedType){
//     formData.append('type', selectedType);
// }
//     else{
//         formData.append('type', 'repair');

//     }
//     formData.append('description', description);
//     formData.append('status', 'pending'); // Default status is 'pending'
//     if (attachment) formData.append('attachment', attachment);
//     console.log(formData) 
//     try {
//         console.log("request form", token)
//       const response = await api.post(
//         'http://127.0.0.1:8000/api/requests/',
//         formData,
//         {
//           headers: {
//             'Content-Type': 'application/json',
//             'Authorization': `Token ${token}`, // If you're using token authentication
//           },
//         }
//       );
//       console.log('Request submitted successfully', response.data);
//     } catch (err) {
//       console.error('Error submitting request', err);
//       alert('Error submitting request!');
//     }
//   };
  

//   return (
//     <div className="max-w-md mx-auto mt-8 p-4 bg-white rounded-lg shadow-md">
//       <h2 className="text-xl text-center">Submit a Service Request</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Service Type"
//           value={selectedType}
//           onChange={(e) => setServiceType(e.target.value)}
//           className="w-full p-2 my-2 border border-gray-300 rounded"
//         />
//         <textarea
//           placeholder="Details"
//           value={description}
//           onChange={(e) => setDetails(e.target.value)}
//           className="w-full p-2 my-2 border border-gray-300 rounded"
//         />
//         <input
//           type="file"
//           onChange={(e) => setFile(e.target.files[0])}
//           className="w-full p-2 my-2 border border-gray-300 rounded"
//         />
//         <button type="submit" className="w-full bg-blue-500 text-white p-2 mt-4 rounded">Submit Request</button>
//       </form>
//     </div>
//   );
// }

// export default RequestForm;import { useState, useEffect } from 'react';
import { useState, useEffect } from 'react';
import api from '../axios';

function RequestForm() {
  const [selectedType, setServiceType] = useState('');
  const [selectedStatus, setStatus] = useState('pending'); // Default status is 'pending'
  const [description, setDetails] = useState('');
  const [attachment, setFile] = useState(null);
  const [userId, setUserId] = useState(null); // State to store the user's ID
  const token = localStorage.getItem('auth_token');

  // Fetch the current user's data
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await api.get('http://127.0.0.1:8000/api/current_user/', {
          headers: {
            'Authorization': `Token ${token}`,
          },
        });
        setUserId(response.data.id); // Assuming the API returns the user object with an 'id'
      } catch (err) {
        console.error('Error fetching user data', err);
        alert('Failed to fetch user data');
      }
    };

    if (token) {
      fetchUserData();
    }
  }, [token]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    if (selectedType) {
      formData.append('type', selectedType);
    } else {
      formData.append('type', 'repair'); // Default value if no type selected
    }
    formData.append('description', description);
    formData.append('status', selectedStatus); // Use selected status
    if (attachment) formData.append('attachment', attachment);

    // Add the user ID to the formData if the user ID is available
    if (userId) {
      formData.append('user', userId);
    }

    // Log FormData in a readable way
    // for (let [key, value] of formData.entries()) {
    //   console.log(key, value);
    // }

    try {
      const response = await api.post(
        'http://127.0.0.1:8000/api/requests/',
        formData,
        {
          headers: {
            'Authorization': `Token ${token}`, // If you're using token authentication
            // Don't set Content-Type here, FormData will handle it automatically.
          },
        }
      );
    //   console.log('Request submitted successfully', response.data);
    } catch (err) {
      console.error('Error submitting request', err);
      alert('Error submitting request!');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-xl text-center">Submit a Service Request</h2>
      <form onSubmit={handleSubmit}>
        {/* Service Type Dropdown */}
        <select
          value={selectedType}
          onChange={(e) => setServiceType(e.target.value)}
          className="w-full p-2 my-2 border border-gray-300 rounded"
        >
          <option value="">Select Service Type</option>
          <option value="repair">Repair</option>
          <option value="installation">Installation</option>
          <option value="billing">Billing Issue</option>
        </select>

        {/* Details Input */}
        <textarea
          placeholder="Details"
          value={description}
          onChange={(e) => setDetails(e.target.value)}
          className="w-full p-2 my-2 border border-gray-300 rounded"
        />

        {/* File Upload Input */}
        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
          className="w-full p-2 my-2 border border-gray-300 rounded"
        />

        {/* Status Dropdown */}
        <select
          value={selectedStatus}
          onChange={(e) => setStatus(e.target.value)}
          className="w-full p-2 my-2 border border-gray-300 rounded"
        >
          <option value="pending">Pending</option>
          <option value="in_progress">In Progress</option>
          <option value="resolved">Resolved</option>
        </select>

        <button type="submit" className="w-full bg-blue-500 text-white p-2 mt-4 rounded">
          Submit Request
        </button>
      </form>
    </div>
  );
}

export default RequestForm;
