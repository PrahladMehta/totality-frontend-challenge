import React from 'react'
import "./Card.css";
import { useNavigate } from 'react-router-dom';
const Card = ({data}) => {

      const nav=useNavigate();

      function handleNav(index){
            nav(`/product/${index}`);
      }
      
  return (
    <div className="card-section">

       <div className='card-img'>

       <img src="https://www.houzillo.com/wp-content/uploads/2019/11/img-02-5.jpg" alt="" />
            
       </div>

       <div className='card-detail'>
            <h4>{data.title} </h4>

            <div><h3>Price: {data.price}rs  | {data.bedrooms} BHK</h3></div>
            

           <div className='amenities'>{data.amenities.map((value,idx)=>{
              return <div key={idx}>{`${value}`}</div>
           })}</div> 
         
           <p className='read-more'>Ready to move</p>
           <button className='card-button' onClick={()=>{handleNav(data.id-1)}}>BOOK NOW</button>
             
       </div>
    
             
    </div>
  )
}

export default Card