// src/components/AboutUs.js
import React from 'react';
import Navbar from './NavBar/Navbar';

const AboutUs = () => {
  return (
    <div>
        <Navbar/>
    <div className="bg-gray-100 min-h-screen flex  justify-center">
        
      <div className="max-w-4xl mx-auto my-4 p-4 bg-white shadow-md rounded-lg">
        <h1 className="text-4xl font-bold mb-6 text-center">About Us</h1>
        <p className="text-lg mb-6">
          Welcome to Fresh-Cart, your ultimate destination for online groceries. We are passionate about providing you with the freshest and highest-quality products, delivered right to your doorstep.
        </p>
        <p className="text-lg mb-6">
          Our mission is to make grocery shopping convenient, affordable, and enjoyable for everyone. With an extensive selection of products, a seamless ordering process, and reliable delivery, we aim to exceed your expectations every time you shop with us.
        </p>
        <p className="text-lg mb-6">
          At Fresh-Cart, we prioritize freshness, quality, and customer satisfaction above all else. Whether you're stocking up on pantry essentials, planning meals for the week, or indulging in your favorite treats, we've got you covered.
        </p>
        <p className="text-lg mb-6">
          Thank you for choosing Fresh-Cart for your grocery needs. We are committed to serving you with excellence and look forward to being your trusted grocery partner.
        </p>
      </div>
      
    </div>
    </div>
  );
};

export default AboutUs;

