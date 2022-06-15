import React from 'react';
const MenuCard = ({MenuData})=> {
         
    return(

        <>
         <section ClassName='main-card--container'>
      {MenuData.map((curElm)=>{
        const {id,name,category,image,description} = curElm;
     
            return(
                <>
                <div className='card-container'  key={curElm.id}>
                <div className='card'>
                     <div className='card-body'>
                        <span className='card-number card-circle subtle'>{id}</span>
                        <span className='card-author subtle' style={{color:"blue"}}> {curElm.name}</span>
                        <h2 className='card-title'>{name}</h2>
                        <span className='card-description subtle'>
                          
                        {description}
                       
                        </span>
        
        
                        <div className='card-read'>Read</div>
        
        
                     </div>
                     <img src={image} alt='images' className='card-media'/>
                     <span className='card-tag subtle'> Order Now</span>
        
                </div>
              </div>
              </>
        
      


        
        
       
    )
}

      )       
       
}
</section>
</>


)
}
export default MenuCard