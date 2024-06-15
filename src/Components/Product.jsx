// src/GroceryProductOverview.js
import React, { useContext } from 'react';
import { ThemeContext } from '../useContext';
import Cart from './Cart/Cart';

const Product = () => {
  const {showcart, set_showcart } = useContext(ThemeContext);
  return (
    <div>
      
    <div className="container mx-auto p-4" style={{ backgroundColor: '#f4f2d0' /* light lime */ }}>
        {showcart && <Cart/>}
      <header className="text-center py-6" style={{ backgroundColor: '#8b4513' /* rust */ }}>
        <h1 className="text-3xl font-bold text-white">Grocery Product Overview</h1>
      </header>

      <main className="bg-white shadow-lg rounded-lg p-6 mt-6">
        <div className="flex flex-wrap md:flex-nowrap">
          <img
            src="https://via.placeholder.com/200"
            alt="Grocery Product"
            className="w-full md:w-1/3 rounded-lg"
          />
          <div className="md:ml-6 md:w-2/3 mt-4 md:mt-0">
            <h2 className="text-2xl font-bold">Fresh Organic Apples</h2>
            <p className="mt-2 text-gray-600">
              Enjoy the fresh and crispy organic apples, perfect for a healthy snack.
            </p>
            <p className="text-xl" style={{ color: '#8b4513' /* rust */ }}>Rs 340 / kg</p>
          
            <button onClick={()=>{(set_showcart (true))}}className="mt-4 text-white px-4 py-2 rounded" style={{ backgroundColor: '#c9da7d' /* lime */, opacity: 1 }}>
              Add to Cart

  
            </button >
            
          
          </div>
        </div>

        <section className="mt-6">
          <h3 className="text-xl font-bold">Product Details</h3>
          <table className="min-w-full table-auto mt-4">
            <thead style={{ backgroundColor: '#c9da7d' /* lime */, color: '#fff' }}>
              <tr>
                <th className="px-4 py-2">Feature</th>
                <th className="px-4 py-2">Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">Type</td>
                <td className="border px-4 py-2">Organic Fuji Apples</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Weight</td>
                <td className="border px-4 py-2">Approximately 1 kg</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Origin</td>
                <td className="border px-4 py-2">NEPAL</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Storage</td>
                <td className="border px-4 py-2">Keep refrigerated</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className="mt-6">
          <h3 className="text-xl font-bold">Customer Reviews</h3>
          <div className="mt-4">
            <div className="bg-gray-100 p-4 rounded-lg mb-4">
              <p className="italic text-gray-700">These apples are so fresh and delicious. My kids love them!</p>
              <p className="text-right text-gray-600">- Ravi Sapkota</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg">
              <p className="italic text-gray-700">Perfect for making fruit salads. Highly recommend!</p>
              <p className="text-right text-gray-600">- Aastha kunwar</p>
            </div>
            <a href='/' className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md">
                        Back to Home
                    </a>
          </div>
        </section>
      </main>

      <footer className="text-center py-4 mt-6" style={{ backgroundColor: '#8b4513' /* rust */ }}>
        <p className="text-white">&copy; 2024 Your Fresh-Cart. All rights reserved.</p>
      </footer>
    </div>
    </div>
  );
}

export default Product;


