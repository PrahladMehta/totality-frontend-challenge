import React from 'react'
import "./Yourbooking.css"

import { useContext } from 'react'

import { Context } from '../../context/Context'

import { TiTick } from "react-icons/ti";
import { IoLocationOutline } from "react-icons/io5";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";

const Yourbooking = () => {

       const{getBooking,yourBooking}=useContext(Context);
   
    
     
  return (
  
      yourBooking.length===0?<div className='empty-cart'> <h2>No booking</h2></div>:      
      
    <div className='booking-page' >
              <h1>Your Bookings</h1>

                  {
                               <div className='booking'>         {

yourBooking.map((value,id)=>{return(

      <div className='booking-card' key={id}>
      <img src="https://www.houzillo.com/wp-content/uploads/2019/11/img-02-5.jpg" alt="" />

      <div className='booking-details'>
<h3>{value.title}</h3>
<div className='location-price'><p className='center'><IoLocationOutline /> {value.location}</p> <p className='center'> <RiMoneyRupeeCircleFill />{value.price}</p></div>
<div>{value.email}</div> 
<div className='green-tick'><TiTick /><p>booked</p></div>

  </div>
  </div>
)})

}</div>
 
                  }



   
            
         
  
    </div>
  )
}

export default Yourbooking