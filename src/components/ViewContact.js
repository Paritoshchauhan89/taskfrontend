import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from './Api';
import '../App.css'; // Import CSS file for styling
import { Link } from 'react-router-dom';

const ViewContact = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [executionTime, setExecutionTime] = useState(null);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        // Record the start time
        const startTime = performance.now();

        const response = await axios.get(`${API_URL}/api/v1/contact/all-contacts`);

        // Record the end time
        const endTime = performance.now();

        // Calculate the elapsed time
        const elapsedTime = endTime - startTime;

        // Set the execution time state
        setExecutionTime(elapsedTime);

        setContacts(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching contacts:', error);
        setError(error.message);
        setLoading(false);
      }
    };

    fetchContacts();
  }, []);

  // Function to handle updating contact
  const handleUpdateContact = async (contactId) => {
    try {
      // Record the start time
      const startTime = performance.now();

      // Make a PUT request to update contact count API
      await axios.put(`${API_URL}/api/v1/contact/update-count/${contactId}`);

      // Record the end time
      const endTime = performance.now();

      // Calculate the elapsed time
      const elapsedTime = endTime - startTime;

      // Set the execution time state
      setExecutionTime(elapsedTime);

      // Fetch updated contact list after updating count
      const response = await axios.get(`${API_URL}/api/v1/contact/all-contacts`);
      setContacts(response.data);
    } catch (error) {
      console.error('Error updating contact count:', error);
    }
  };
  return (
    <>
      <h2>View Contacts</h2>
      <p>Execution Time: {executionTime ? `${executionTime.toFixed(2)} ms` : 'N/A'}</p>
      <p>Total Number of Contacts: {contacts.length}</p>

      <p className='add-p'><Link to='/add-contact'><button className='add-button'>📝 Add Contact</button></Link></p>
      <p className='add-p'><Link to='/'><button className='edit-count'>Home page</button></Link></p>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error: {error}</div>
      ) : (
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>S No.</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Contact Number</th>
                <th>Address</th>
                <th>Edit</th>
                <th>No of Update API</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact,index) => (
                <tr key={contact.id}>
                  <td>{index+1}</td>
                  <td>{contact.firstName}</td>
                  <td>{contact.lastName}</td>
                  <td>{contact.email}</td>
                  <td>{contact.contactNumber}</td>
                  <td>{contact.address}</td>
                  <td>
                    <button className='edit-button' >✍️ Edit</button>
                  </td>
                  <td>
                    <button className='edit-count' onClick={() => handleUpdateContact(contact.id)}>✍️ Update Count</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      
        
    </>
  );
};

export default ViewContact;
