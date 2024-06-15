import React, { useContext, useEffect, useState } from 'react'
import Cart from '../Cart/Cart';
import {FaSearch} from 'react-icons/fa'
import { FaRegUser } from 'react-icons/fa'
import { FaCartShopping } from "react-icons/fa6";
import { ThemeContext } from '../../useContext';
import Search from '../Search';
const Navbar = () => {
const{showGreens,set_showGreens,showGroceries,set_showGroceries,showHome,set_showHome,showFruits,set_showFruits,showMeat,set_showMeat}= useContext(ThemeContext);
  const [user,set_user] = useState(false);


  useEffect(() => {
    if(localStorage.getItem('USER_EMAIL')){
      set_user(true);
     }
  }, []);

  

  const { show, set_show, showcart, set_showcart,showsignup, set_showsignup,showSearch,set_showSearch  } = useContext(ThemeContext);
  return (
    <div>
   <div className='sticky top-0'> 
   <div className=" bg-[#A0CB8B] z-10">
    <div className="container hidden lg:block">
      <div className="flex justify-between items-center p-8">
        <a href='/' className="text-4xl font-medium">Fresh-Cart</a>
        <div className="relative w-full max-w-[500px]">
         {showSearch && <Search/>}
          <FaSearch onClick={()=>{set_showSearch(true);}
          } className="absolute top-0 right-0 mt-4 mr-5 text-grey-500"
           size={20}
           />
        </div>
        <div className="flex justify-center gap-4">
          <a href='/about'>about us</a>
          <a href='/contact'>contact us</a>
        </div>
        <div className="flex gap-4">
          <span>{localStorage.getItem('USER_NAME')}</span>
          {!user && <div onClick={()=>{set_show(true)}} classname="icon_wrapper">
            <FaRegUser/>
          </div>}

          {user && <div onClick={()=>{
            localStorage.removeItem('USER_EMAIL');
            localStorage.removeItem('USER_NAME');
            window.location.reload();
          }}>Log out </div>}
          <div  onClick={()=>{set_showcart(true)}} classname="icon_wrapper relative">
          <FaCartShopping />
          
          </div>

        </div>

      </div>
    </div>

    </div>
    <div className='sticky flex bg-[#EEEBD0] h-28 justify-around items-center'>
      <div className={ showGreens ? 'px-10 py-3 rounded-[35px] bg-[#FFFFFF] bg-green-500 ' : 'px-10 py-3 rounded-[35px] bg-[#FFFFFF] hover:bg-green-100 s'} onClick={()=>{category_select(1)}} >Greens</div>
      <div className={ showHome ? 'px-10 py-3 rounded-[35px] bg-[#FFFFFF] bg-green-500 ' : 'px-10 py-3 rounded-[35px] bg-[#FFFFFF] hover:bg-green-100 s'}onClick={()=>{category_select(2)}}>Homemade</div>
      <div className={showGroceries ? 'px-10 py-3 rounded-[35px] bg-[#FFFFFF] bg-green-500 ' : 'px-10 py-3 rounded-[35px] bg-[#FFFFFF] hover:bg-green-100 s'}onClick={()=>{category_select(3)}}>Groceries</div>
      <div className={ showMeat ? 'px-10 py-3 rounded-[35px] bg-[#FFFFFF] bg-green-500 ' : 'px-10 py-3 rounded-[35px] bg-[#FFFFFF] hover:bg-green-100 s'}onClick={()=>{category_select(4)}}>Meat-Products</div>
      <div className={ showFruits ? 'px-10 py-3 rounded-[35px] bg-[#FFFFFF] bg-green-500 ' : 'px-10 py-3 rounded-[35px] bg-[#FFFFFF] hover:bg-green-100 s'} onClick={()=>{category_select(5)}} >Fruits</div>




    </div>
    
    </div>
   

    </div>
  )
}

export default Navbar