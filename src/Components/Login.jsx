import React, { useContext, useState } from 'react'
import { FaRegUser } from 'react-icons/fa'
import { ThemeContext } from '../useContext';
import { fetchDataFromApi } from './Api';

const Login = () => {
    const { set_show,set_showsignup } = useContext(ThemeContext);
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      email: email,
      password: password,
    };
    
   

    let { data } = await fetchDataFromApi(
      `/api/auths?populate=*&filters[$and][0][email]=${formData.email}&filters[$and][1][password]=${formData.password}`
    );

    if (!data.length) {
      alert("wrong credentials");
    } else {
      localStorage.setItem("USER_NAME", data[0].attributes.name);
      localStorage.setItem("USER_EMAIL", data[0].attributes.email);
      window.location.href = "/";
    }
   }

  return (
    <div className='absolute w-full bg-[#E3E5E085] top-0 bottom-0'>
       
    <div className="flex flex-col items-center h-[600px] py-[50px] right-0 top-0 bottom-0 absolute w-[30%] bg-[#B7B7B7] py-[50px] right-0">
            <div className='mt-2.5 rounded-[50%] p-[22px] border-black border-[3px]'><a href='/profile'><FaRegUser size={30}/></a></div>
            <form className='flex gap-3 flex-col py-6' onSubmit={handleSubmit}>
            <div className=''>
              <input value={email}
              onChange={handleEmailChange}
              type='text' placeholder='username' />
              </div>
            <div classname='mt-2.5'>
              <input type='text' value={password}
            onChange={handlePasswordChange} placeholder='password' />
              </div>
            <div><input type="submit" value='Submit' /></div>
            </form>
            <div>dont have an account <button onClick={()=>{set_showsignup(true);
            set_show(false);}} className='bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md'>sign up</button></div>
            <div onClick={()=>{(set_show (false))}}className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md">close</div>
        
           
        </div>
    </div>
  )
}

export default Login