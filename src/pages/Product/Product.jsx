import React, { useEffect, useState } from 'react'
import "./Product.css";
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from '../../context/Context';
const Product = () => {

      const [value,setValue]=useState();
      const {id}=useParams();

      const {getProduct,addCart}=useContext(Context);

      console.log(id);

      console.log(getProduct(1));

      useEffect(()=>{

           const data=getProduct(id);

           console.log("data"+data);
           console.log(data)

           setValue(data);
      },[]);

      

  return (
    
    <div>

      {
            value &&
<div className='product-container'>

<div className='product'>

<div className='product-images'>
         

             <div className='single-image'>
             <img src="https://www.houzillo.com/wp-content/uploads/2019/11/img-02-5.jpg" alt="" />
             </div>

             <div className='multiple-images'>
             <img src="https://www.houzillo.com/wp-content/uploads/2019/11/img-02-5.jpg" alt="" />
             <img src="https://www.houzillo.com/wp-content/uploads/2019/11/img-02-5.jpg" alt="" />
             <img src="https://www.houzillo.com/wp-content/uploads/2019/11/img-02-5.jpg" alt="" />
             <img src="https://www.houzillo.com/wp-content/uploads/2019/11/img-02-5.jpg" alt="" />

             </div>
           
      </div>

      <div className='product-detail'>
             <h1>{value.title}</h1>
             <p>{value.description}</p>

             <p>{value.bedrooms}BHK</p>
             <h3>{value.price}   rs/month</h3>
             <p>{value.location}</p>
             <div className='amenities'>{value.amenities.map((value,idx)=>{return <div key={idx}>{`${value} `}</div>})}
             <p></p></div>
             <button className='addtocart' onClick={addCart(value.id-1)}>ADD TO CART</button>


      </div>
</div>
  


      <div className='product-description'>
            
            <div className='product-des'>Description</div>
            <div className='product-des-sec'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Reiciendis id soluta harum, assumenda numquam dicta iure asperiores
             labore eum vitae corrupti consequatur nulla architecto enim corporis ullam ad earum quaerat.
             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam maiores fugiat totam odit adipisci 
             saepe quae voluptate. Suscipit, perferendis facilis quo voluptate temporibus ut animi soluta quod cupiditate veniam dolor!
            </div>


      </div>


</div>
      }
    </div>

  )
}

export default Product
