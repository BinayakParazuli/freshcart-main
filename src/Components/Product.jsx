// src/GroceryProductOverview.js
import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../useContext';
import Cart from './Cart/Cart';
import { useParams } from 'react-router-dom';
import { fetchDataFromApi, postDataToApi } from './Api';

const Product = () => {
  const {showcart, set_showcart } = useContext(ThemeContext);
  const [item, setItem] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    GetProductItem();
  }, []);
  async function GetProductItem() {
    let res = await fetchDataFromApi(`/api/alls?populate=*&filters[id]=${id}`);
    setItem(res.data);
  }


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
    <>
    {item && item.length > 0 && (
  
    <div>
      
    <div className="container mx-auto p-4" style={{ backgroundColor: '#f4f2d0' /* light lime */ }}>
        {showcart && <Cart/>}
      <header className="text-center py-6" style={{ backgroundColor: '#8b4513' /* rust */ }}>
        <h1 className="text-3xl font-bold text-white">Grocery Product Overview</h1>
      </header>

      <main className="bg-white shadow-lg rounded-lg p-6 mt-6">
        <div className="flex flex-wrap md:flex-nowrap">
          <img
             src={
              process.env.REACT_APP_DEV_URL +
              item[0].attributes.img.data.attributes.url
            }
            alt="Grocery Product"
            className="w-full md:w-1/3 rounded-lg"
          />
          <div className="md:ml-6 md:w-2/3 mt-4 md:mt-0">
            <h2 className="text-2xl font-bold">{item[0].attributes.title}</h2>
            <p className="mt-2 text-gray-600">
              {item[0].attributes.description}
            </p>
            <p className="text-xl" style={{ color: '#8b4513' /* rust */ }}>Rs {item[0].attributes.price}</p>
            <p className="text-xl" style={{ color: '#8b4513' /* rust */ }}>Type: {item[0].attributes.type}</p>
            <p className="text-xl" style={{ color: '#8b4513' /* rust */ }}>Location: {item[0].attributes.location}</p>
          
          
            <button onClick={() => {
                    handleAddToCart(item[0].id);
                  }} className="mt-4 text-white px-4 py-2 rounded" style={{ backgroundColor: '#c9da7d' /* lime */, opacity: 1 }}>
              Add to Cart

  
            </button >
            
          
          </div>
        </div>

        
      </main>

      <footer className="text-center py-4 mt-6" style={{ backgroundColor: '#8b4513' /* rust */ }}>
        <p className="text-white">&copy; 2024 Your Fresh-Cart. All rights reserved.</p>
      </footer>
    </div>
    </div>
    )}
    </>
  );
}

export default Product;


