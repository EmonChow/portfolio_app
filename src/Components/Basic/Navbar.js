import React from "react";

const Navbar = ({filterItem, Menulist}) => {
    return(
    <>
         <nav className='navbar'>
            <div className='btn-group'>
               {Menulist.map((curElm)=>{
                    return(
                       <>
                       <button className='btn-group--item'
                       onClick={()=>filterItem(curElm)}>{curElm}</button>

                       </>
                    )
               })}
            
              
              
            </div>

          </nav>
    </>
    )
}


export default Navbar;