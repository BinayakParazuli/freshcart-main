// src/ProductCard.js

import React from 'react';
import { postDataToApi } from './Api';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product }) => {
    const usenavigate = useNavigate();
    const handleAddToCart = async (id) => {
        if (!localStorage.getItem("USER_EMAIL")) {
          alert("login first");
          return 0;
        }
        const formData = {
          cart: id,
          user: localStorage.getItem("USER_EMAIL"),
        };
    
        let { res } = await postDataToApi("/api/carts", formData, false);
        if (res) {
          alert("added to cart successfully");
        }
      };
  return (
    <div onClick={()=>{usenavigate(`/product/${product.id}`)}} className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <img
        className="w-full h-48 object-cover"
        src={
            process.env.REACT_APP_DEV_URL +
            product.attributes.img.data.attributes.url
          }
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Title: {product.attributes.title}</div>
        <div className="font-bold text-xl mb-2">Owner: {product.attributes.owner}</div>
        <div className="font-bold text-xl mb-2">Location: {product.attributes.location}</div>
       
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          ${product.attributes.price}
        </span>
        <button   onClick={() => {
                    handleAddToCart(product.id);
                  }} className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-blue-600">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
