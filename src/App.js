import React from 'react'
import Home from './Components/Home'
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Product from './Components/Product'
import Notfound from './Components/Notfound'
import { ThemeProvider } from './useContext';
import AboutUs from './Components/Aboutus'
import ContactUs from './Components/Contactus'
import Checkout from './Components/Checkout'
import Cart from './Components/Cart/Cart'
import Profile from './Components/Profile'

const App = () => {
  return (
    <ThemeProvider>
    <Router>
    <div >
    
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="*" element={<Notfound />} />
          <Route path="/Checkout" element={<Checkout />} />
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/profile" element={<Profile/>}/>
        </Routes>
      </div>
    </div>
  </Router>
  </ThemeProvider>

  )
}

export default App