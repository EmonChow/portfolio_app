import React, { useState } from 'react'
import './style.css';
import Menu from './MenuApi';
import MenuCard from './MenuCard';
import Navbar from './Navbar';

const Uniquelist = [...new Set(Menu.map((curElm)=>{
  return curElm.category
})),"All",

];

const Resturant = () =>{
 const [MenuData, setMenuData] = useState(Menu)
 const [Menulist, setMenulist] =useState(Uniquelist)

 const filterItem = (category)=>{
    if(category==="All"){
      setMenuData(Menu)
      return;
    }

   const updatedList =Menu.filter((curElm)=>{
     return curElm.category===category;
   })
   setMenuData(updatedList);
 }
  return(
    <>
         
          <Navbar filterItem={filterItem} Menulist ={Menulist}/>
           <MenuCard MenuData={MenuData}/>
    </>
  )
}

export default Resturant