import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../../useContext';
import Checkout from '../Checkout';
import { fetchDataFromApi, removeDataFromApi } from '../Api';
const Cart = () => {
  const { set_showcart,set_showCheckout} = useContext(ThemeContext);
  const [cart_id, set_cart_id] = useState([]);
  const [cart_data, set_cart_data] = useState([]);

  useEffect(() => {
    getcartid();
  }, []);
  useEffect(() => {
    if (cart_id !== null) {
      fetch_cartItems();
    }
  }, [cart_id]);

  async function getcartid() {
    try {
      let result = await fetchDataFromApi(
        `/api/carts?populate=*&filters[user]=${localStorage.getItem(
          "USER_EMAIL"
        )}`
      );
      set_cart_id(result.data);
    } catch (error) {
      console.error("Error fetching cart ID:", error);
    }
  }
  async function fetch_cartItems() {
    try {
      let promises = cart_id.map(async (item) => {
        let res = await fetchDataFromApi(
          `/api/alls?populate=*&filters[id]=${item.attributes.cart}`
        );
        return res.data; // Return the data from each async call
      });

      // Wait for all promises to resolve
      let cartDataArray = await Promise.all(promises);
      set_cart_data(cartDataArray); // Set state with all fetched data
    } catch (error) {
      console.error("Error fetching cart items:", error);
    }
  }
  async function deletecartItems(id) {
    let res = await fetchDataFromApi(
      `/api/carts?populate=*&filters[cart]=${id}`
    );
    console.log();
    let result = await removeDataFromApi(`/api/carts/` + res.data[0].id);
    set_cart_id(cart_id.filter((cart) => cart.id !== res.data[0].id));
  }
  return (
    <div className="container mx-auto p-4 bg-white shadow-lg rounded-lg absolute right-0 w-[30%] z-99 top-0">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>

      {!cart_data || cart_data.length === 0 ? (
              <h1 className="mb-8 text-2xl text-white">Your Cart is Empty.</h1>
            ) : (
              cart_data.map((cart) => (
                <div key={cart.id} className="text-black-600 grid grid-cols-2 py-5">
                  <div className="rounded-sm">
                    <img
                      className="rounded-sm py-[16px] px-[16px] border"
                      src={
                        process.env.REACT_APP_DEV_URL +
                        cart[0].attributes.img.data.attributes.url
                      }
                      alt="img1"
                      width={256}
                      height={320}
                    />
                  </div>
                  <div className="grid grid-rows-2 pl-[20px]">
                    <div className="font-semibold">
                     Owner: {cart[0].attributes.owner}
                    </div>
                    <div className="font-semibold">
                     Email: {cart[0].attributes.email}
                    </div>
                    <div className="flex items-end self-end justify-between">
                      <div>
                        <p className="py-2 text-gray-9000">
                       Type:   {cart[0].attributes.type}
                        </p>
                        <p> Price: {cart[0].attributes.price}</p>
                      </div>
                      <button
                        className="text-red-500"
                        onClick={() => {
                          deletecartItems(cart[0].id);
                        }}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
            <div >Checkout</div>
      <div onClick={()=>{(set_showcart (false))}}>close</div>
    </div>
  );
};

export default Cart;
