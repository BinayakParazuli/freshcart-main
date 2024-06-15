import React, { useContext } from 'react';
import { ThemeContext } from '../../useContext';
import Checkout from '../Checkout';
const Cart = () => {
  const { set_showcart,set_showCheckout} = useContext(ThemeContext);
  return (
    <div className="container mx-auto p-4 bg-white shadow-lg rounded-lg absolute right-0 w-[30%] z-99 top-0">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>

      <div className="space-y-4">
        {/* Cart Item */}
        <div className="flex items-center justify-between p-4 border rounded-lg">
          <div className="flex items-center space-x-4">
            <img
              src="https://via.placeholder.com/50"
              alt="Apple"
              className="w-16 h-16 object-cover rounded"
            />
            <div>
              <h3 className="text-lg font-semibold">Apple</h3>
              <p className="text-gray-600">50x 3</p>
            </div>
          </div>
          <button className="text-red-600 hover:text-red-800 focus:outline-none">
            Remove
          </button>
        </div>

        {/* Cart Item */}
        <div className="flex items-center justify-between p-4 border rounded-lg">
          <div className="flex items-center space-x-4">
            <img
              src="https://via.placeholder.com/50"
              alt="Banana"
              className="w-16 h-16 object-cover rounded"
            />
            <div>
              <h3 className="text-lg font-semibold">Banana</h3>
              <p className="text-gray-600">50x 5</p>
            </div>
          </div>
          <button className="text-red-600 hover:text-red-800 focus:outline-none">
            Remove
          </button>
        </div>

        {/* Total Price */}
        <div className="text-right">
          <h3 className="text-xl font-bold">Total: 460</h3>
        </div>
      </div>

      {/* Actions */}
      <div className="mt-4 flex justify-end space-x-4">
        <button className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 focus:outline-none">
          Clear Cart
        </button>
        
        
        <a href='/Checkout' className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 focus:outline-none">
          Checkout
        </a>
      </div>
      <div onClick={()=>{(set_showcart (false))}}>close</div>
    </div>
  );
};

export default Cart;
