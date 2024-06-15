import React, { useContext, useEffect, useState } from 'react'
import { ThemeContext } from '../useContext';

const Featured = () => {
  const{showGreens,set_showGreens,showGroceries,set_showGroceries,showHome,set_showHome,showFruits,set_showFruits,showMeat,set_showMeat}= useContext(ThemeContext);
  
  const[Default,show_default]=useState(false);
  const[type,set_type]=useState();
  
  useEffect(() => {
    if(showGreens || showFruits || showGroceries || showHome || showMeat){
      show_default(false);
    }else{
show_default(true);

}
}, [showGreens, showFruits, showGroceries, showHome, showMeat,type]);

// if(showGreens){
//   set_type('greens');
// }
// if(showFruits){
//   set_type('fruits');
// }
// if(showGroceries){
//   set_type('groceries');
// }
// if(showHome){
//   set_type('home');
// }
// if(showMeat){
//   set_type('meat');
// 


    const data = [{
        path:'./Group1.svg'
      },
      {
        path:'./Group2.svg'
      },
      {
        path:'./Group3.svg'
      },
      {
        path:'./Group4.svg'
      },
      {
        path:'./Group5.svg'
      },
      {
        path:'./Group6.svg'
      },
      {
        path:'./Group7.svg'
      },
     
      
      
      ];
    
      
      
  return (
    <div>
     {Default && <h1 className='uppercase bold text-3xl text-black ml-8'>Browse by category</h1>}
     {!Default && <h1  className='uppercase bold text-3xl text-black ml-8'> Your Type</h1>}
    <div className="flex flex-wrap p-5 gap-4 ">
  
   
    
    {Default && data.map(item => (
    
      <a href='/product'className='p-5'>
        <div>
        
        <img src={item.path}/>{console.log(item.path)}
        </div>
      </a>
         
          
        ))}
     
      
    
    </div>
  </div>

  )
}

export default Featured