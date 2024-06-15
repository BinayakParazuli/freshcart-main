import React, { useContext, useState } from 'react'
import { FaRegUser } from 'react-icons/fa'
import { ThemeContext } from '../useContext';
import { postDataToApi } from './Api';


const Signup = () => {
  const { set_showsignup } = useContext(ThemeContext);
  const [email,set_email]=useState();
  const [password,set_password]=useState();
  const [phone,set_phone]=useState();
  const [name,set_name]=useState();
  const [img, setImg] = useState(null);

  const handleNameChange = (e) => {
    set_name(e.target.value);
  };

  const handleEmailChange = (e) => {
    set_email(e.target.value);
  };

  const handlePasswordChange = (e) => {
    set_password(e.target.value);
  };

  const handlePhoneChange = (e) => {
    set_phone(e.target.value);
  };
  const handleImgChange = (e) => {
    setImg(e.target.files[0]);
  };


  const handleSubmit = async (e)=>{
    e.preventDefault();
    const Img_Data = new FormData();
    Img_Data.append("files", img);
  
      let imageData = await postDataToApi("/api/upload", Img_Data, true);
      const imageId = imageData[0].id;
      const formData = {
        email: email,
        password:password,
        phone: phone,
        img: imageId,
        name:name,
      
      };

      console.log(formData);

      let { data } = await postDataToApi("/api/auths", formData, false);
      if (data) {
        alert("account created successfully");
        window.location.reload();
      }
  
  }
  return (
    <div className='absolute w-full bg-[#E3E5E085] top-0 bottom-0 rounded-lg '>
      
    
<div className="flex flex-col items-center h-[600px] py-[50px] right-0 top-0 bottom-0 absolute w-[30%] bg-[#B7B7B7] py-[50px] right-0">
        <div className='rounded-[50%] p-[22px] border-black border-[3px]'><FaRegUser size={30}/></div>
        <form onSubmit={handleSubmit}>
        <div className='mt-1 rounded-[50%] p-[20px]'><input value={name} onChange={handleNameChange} type='text' placeholder='Full-name' /></div>
        <div className='mt-1 rounded-[50%] p-[20px]'><input value={email} onChange={handleEmailChange} type='email' placeholder='Email' /></div>
        <div className='mt-1 rounded-[50%] p-[20px]'><input value={password} onChange={handlePasswordChange} type='text' placeholder='password' /></div>
        <div className='mt-1 rounded-[50%] p-[20px]'><input type='text' placeholder='re-enter password' /></div>
       <div> <input type='file' onChange={handleImgChange} placeholder='Image' /></div>
        <div className='mt-1 rounded-[50%] p-[20px]'><input type='number' value={phone} onChange={handlePhoneChange} placeholder='phone-number' /></div>
        <div className='mt-1 rounded-[50%] p-[20px]'><input type="submit" value='Submit' /></div>
        </form>
        <button onClick={()=>{(set_showsignup (false))}}className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md">close</button>
        
     
  
    </div>
    </div>
  )
}

export default Signup