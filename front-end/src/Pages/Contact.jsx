import React, { useState } from 'react';
import axios from 'axios';
import { assets } from '../assets/assets';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post('http://localhost:5000/api/contact', formData);
        
        // Set message with green color for success
        setResponseMessage(
            <p className="mt-4 text-green-600 text-center">{response.data.message}</p>
        );

        setFormData({ name: '', email: '', message: '' }); // Reset form
    } catch (error) {
        // Set message with red color for error
        setResponseMessage(
            <p className="mt-4 text-red-600 text-center">Failed to send message. Please try again later.</p>
        );
        console.error('Error submitting form:', error);
    }
  };


  return (
    <div className='flex flex-col items-center justify-center pt-6 md:pb-20 pb-12 bg-gray-100 px-4' style={{ backgroundImage: `url(${assets.BG_Contact})`, backgroundSize: 'cover', backgroundPosition: 'fixed' }}>
      <h1 className='text-4xl text-blue-700 font-extrabold underline underline-offset-8 md:mb-12 mb-8'>Contact Us</h1>
      
      <div className='flex flex-col md:flex-row bg-white shadow-lg rounded-lg w-full max-w-5xl max-h-6xl'>
        <div className='md:w-1/2 bg-gray-900 text-white p-8 flex flex-col justify-center'>
          <h2 className='text-4xl font-bold'>Get in Touch</h2>
          <div className='border-b-2 border-blue-700 w-24 mt-3 md:mb-5 mb-3'></div>
          <form className='mt-6 space-y-4' onSubmit={handleSubmit}>
            <input
              type='text'
              name='name'
              value={formData.name}
              onChange={handleChange}
              placeholder='Enter your Name'
              className='w-full p-3 border border-gray-600 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-700'
              required
            />
            <input
              type='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              placeholder='Enter your email'
              className='w-full p-3 border border-gray-600 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-700'
              required
            />
            <textarea
              name='message'
              value={formData.message}
              onChange={handleChange}
              placeholder='Enter your message'
              rows='4'
              className='w-full p-3 border border-gray-600 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-700'
              required
            ></textarea>
            <button className='w-full bg-blue-700 text-white py-3 rounded-md hover:scale-95 hover:transition duration-300' type='submit'>
              Submit
            </button>
          </form>
          {responseMessage && <p className='mt-4 text-center'>{responseMessage}</p>}
        </div>

        <div className='md:w-1/2 p-6'>
          <div className='mb-6'>
            <h3 className='text-lg font-semibold'>Address</h3>
            <p className='text-gray-600'>📍 123 Main Street, New York, NY 10001, USA</p>
          </div>
          <div className='mb-6'>
            <h3 className='text-lg font-semibold'>Call us</h3>
            <p className='text-gray-600'>📞 (555) 123-4567</p>
            <p className='text-gray-600'>📞 +1 (312) 987-6543</p>
          </div>
          <div className='mb-6'>
            <h3 className='text-lg font-semibold'>Opening Hours</h3>
            <p className='text-gray-600'>Monday-Friday: 10 am - 8 pm</p>
            <p className='text-gray-600'>Saturday, Sunday: Closed</p>
          </div>
          <iframe
            className='w-full h-56 rounded-lg'
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.8570288379575!2d-74.00594102343907!3d40.71277607138596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259af18b7e577%3A0x3d55f7b6ddfd4b5f!2s123%20Main%20St%2C%20New%20York%2C%20NY%2010001%2C%20USA!5e0!3m2!1sen!2sus!4v1711543200000!5m2!1sen!2sus'
            allowFullScreen=''
            loading='lazy'
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
