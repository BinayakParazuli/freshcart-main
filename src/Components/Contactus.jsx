// src/components/ContactUs.js
import React from 'react';
import Navbar from './NavBar/Navbar';

const ContactUs = () => {
  return (
    <div>
        <Navbar/>
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="max-w-4xl mx-auto p-8 bg-white shadow-md rounded-lg">
        <h1 className="text-4xl font-bold mb-6 text-center">Contact Us</h1>
        <p className="text-lg mb-6">
          If you have any inquiries, need assistance, or wish to provide feedback, please feel free to contact us:
        </p>
        <div className="mb-4">
          <p className="text-lg font-bold">Email: <a href="mailto:customerservice@freshcart.com" className="text-blue-500">customerservice@freshcart.com</a></p>
          <p className="text-lg font-bold">Phone: <a href="tel:+19866115043" className="text-blue-500">9866115043</a></p>
        </div>
        <p className="text-lg mb-6">
          If you experience any inconvenience or dissatisfaction with the products you receive, please do not hesitate to contact us. Your satisfaction is our top priority, and we are here to assist you in any way we can.
        </p>
        <p className="text-sm text-gray-600">Please note that we typically respond to inquiries within 24-48 hours. Thank you for choosing Fresh-Cart!</p>
      </div>
    </div>
    </div>
  );
};

export default ContactUs;

