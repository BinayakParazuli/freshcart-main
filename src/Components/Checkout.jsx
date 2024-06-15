import React, { useContext } from 'react';
import { ThemeContext } from '../useContext';


const Checkout = () => {
    
    const { set_showCheckout } = useContext(ThemeContext);
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
            <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
                <div className="text-center mb-6">
                    <h1 className="text-2xl font-semibold">Checkout</h1>
                </div>
                <div className="mb-6">
                    <h2 className="text-lg font-medium mb-4">Order Summary</h2>
                    <p className="text-gray-700">Item 1: $25.00</p>
                    <p className="text-gray-700">Item 2: $15.00</p>
                    <p className="text-gray-700">Item 3: $10.00</p>
                </div>
                <div className="border-t pt-4 mb-6">
                    <p className="text-xl font-bold text-right">Total: $50.00</p>
                </div>
                <div className="text-center space-x-1 ">
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md">
                        Proceed to Payment
                    </button>
                    <a href='/' className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-1 px-1 rounded-md">
                        Home
                    </a>
                </div>
            </div>

        </div>
    );
}

export default Checkout