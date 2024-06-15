import React, { useContext, useEffect, useState } from 'react'
import Navbar from './NavBar/Navbar'
import Featured from './Featured'
import Login from './Login'
import Signup from './Signup'
import Cart from './Cart/Cart'
import Product from './Product'
import { ThemeContext } from '../useContext'
import AboutUs from './Aboutus'
import Checkout from './Checkout'
import { fetchDataFromApi, postDataToApi } from './Api'
import Profile from './Profile'



const Home = () => {
    const { show, set_show,showsignup,showcart,showCheckout } = useContext(ThemeContext);
    useEffect(() => {
      post();
    }, []);
    async function post() {
      const data = {
        username: "utsav",
        password: "9816778950",
      };
      const url = "http://localhost:1337/api/owners"; // Specify the URL here
      const res = await postDataToApi(url, data);
    }
 
  return (
    <div>
        <Navbar/>
        <Featured/>
        {showsignup && <Signup/>}
        {show && <Login/>}
        {showcart && <Cart/>}
        {showCheckout && <Checkout/>}
        
      
    </div>
  )
}

export default Home