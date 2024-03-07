// ContactForm.js

import React, { useState } from 'react';
import axios from 'axios';
import '../App.css'; // Import CSS file for styling
import { API_URL } from './Api';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        contactNumber: '',
        address: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`${API_URL}/api/v1/contact/add-contact`, formData);
            alert('Contact added successfully');
            // Clear form fields after successful submission
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                contactNumber: '',
                address: ''
            });
        } catch (error) {
            alert('Failed to add contact');
            console.error('Error:', error);
        }
    };

    return (
   <div className="form-mcontainer">
         <div className="form-container">
            <h2>Add New Contact</h2>
            <form onSubmit={handleSubmit} className="contact-form">
                <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name" required />
                <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name" required />
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
                <input type="tel" name="contactNumber" value={formData.contactNumber} onChange={handleChange} placeholder="Contact Number" required />
                <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Address" required />
                <button type="submit" className="submit-btn">Save</button>
            </form>
        </div>
   </div>
    );
};

export default ContactForm;
