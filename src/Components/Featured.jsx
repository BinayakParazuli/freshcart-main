import React, { useContext, useEffect, useState } from 'react'
import { ThemeContext } from '../useContext';
import { fetchDataFromApi } from './Api';
import Productcard from './ProductCard';

const Featured = () => {
  const{showGreens,set_showGreens,showGroceries,set_showGroceries,showHome,set_showHome,showFruits,set_showFruits,showMeat,set_showMeat}= useContext(ThemeContext);
  
  const[Default,show_default]=useState(false);
  const[showdata,set_data]=useState();
  
  useEffect(() => {
    if(showGreens || showFruits || showGroceries || showHome || showMeat){
      show_default(false);
    }else{
show_default(true);

}
}, [showGreens, showFruits, showGroceries, showHome, showMeat]);


const get_data= async(type)=>{
      
  let result = await fetchDataFromApi(
    `/api/alls?populate=*&filters[type]=${type}`
  );
  set_data(result.data);


}
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

// }

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
    
      const category_select = async (id)=>{

        switch (id){
          case 1:
            set_showFruits(false);
            set_showGreens(true);
            set_showGroceries(false);
            set_showHome(false);
            set_showMeat(false);
            get_data('greens');
            break;
            case 2:
            set_showFruits(false);
            set_showGreens(false);
            set_showGroceries(false);
            set_showHome(true);
            set_showMeat(false);
            get_data('home');
            break;
            case 3:
            set_showFruits(false);
            set_showGreens(false);
            set_showGroceries(true);
            set_showHome(false);
            set_showMeat(false);
            get_data('groceries')
            break;
            case 4:
            set_showFruits(false);
            set_showGreens(false);
            set_showGroceries(false);
            set_showHome(false);
            set_showMeat(true);
            get_data('meat');
            break;
            case 5:
            set_showFruits(true);
            set_showGreens(false);
            set_showGroceries(false);
            set_showHome(false);
            set_showMeat(false);
            get_data('fruits');
            break;
            default:
            set_showFruits(false);
            set_showGreens(false);
            set_showGroceries(false);
            set_showHome(false);
            set_showMeat(false);
            
        }
       
       
      }
      
  return (
    <div>
      <div className='flex bg-[#EEEBD0] h-28 justify-around items-center'>
      <div className={ showGreens ? 'px-10 py-3 rounded-[35px] bg-[#FFFFFF] bg-green-500 ' : 'px-10 py-3 rounded-[35px] bg-[#FFFFFF] hover:bg-green-100 s'} onClick={()=>{category_select(1)}} >Greens</div>
      <div className={ showHome ? 'px-10 py-3 rounded-[35px] bg-[#FFFFFF] bg-green-500 ' : 'px-10 py-3 rounded-[35px] bg-[#FFFFFF] hover:bg-green-100 s'}onClick={()=>{category_select(2)}}>Homemade</div>
      <div className={showGroceries ? 'px-10 py-3 rounded-[35px] bg-[#FFFFFF] bg-green-500 ' : 'px-10 py-3 rounded-[35px] bg-[#FFFFFF] hover:bg-green-100 s'}onClick={()=>{category_select(3)}}>Groceries</div>
      <div className={ showMeat ? 'px-10 py-3 rounded-[35px] bg-[#FFFFFF] bg-green-500 ' : 'px-10 py-3 rounded-[35px] bg-[#FFFFFF] hover:bg-green-100 s'}onClick={()=>{category_select(4)}}>Meat-Products</div>
      <div className={ showFruits ? 'px-10 py-3 rounded-[35px] bg-[#FFFFFF] bg-green-500 ' : 'px-10 py-3 rounded-[35px] bg-[#FFFFFF] hover:bg-green-100 s'} onClick={()=>{category_select(5)}} >Fruits</div>

    </div>
     {Default && <h1 className='uppercase bold text-3xl text-black ml-8'>Browse by category</h1>}
     {!Default && <h1  className='uppercase bold text-3xl text-black ml-8'> Your Type</h1>}
    <div className="flex flex-wrap p-5 gap-4 ">
  
   
    
    {Default && data.map(item => (
    
      <div className='p-5'>
        <div>
        
        <img src={item.path}/>{console.log(item.path)}
        </div>
      </div>
         
          
        ))}


          {!Default && showdata  &&
            showdata.map((item) => (
                
             <Productcard product={item}/>


             
            ))}
        
     
      
    
    </div>
  </div>

  )
}

export default Featured