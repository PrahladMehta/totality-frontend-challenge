import React,{useContext,useState} from 'react'
import "./Cart.css"
import{ Context }from '../../context/Context'
import { useNavigate } from 'react-router-dom'
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
const Cart = () => {

      const nav=useNavigate();
      
      const[active,setActive]=useState(false);
      const {cart,data,removeCart,total,addBooking} =useContext(Context);
      console.log(cart);

      const[formdata,setFormData]=useState({email:"",phonenumber:"",atmnumber:"",cvv:""});

      function handleChange(event){
            console.log(event.target.name);
            console.log(event.target.value);
            setFormData(()=>{
                  return {...formdata,[event.target.name]:event.target.value};
            })

            console.log(formdata);
      }

      function handlePayment(event){

          

            event.preventDefault();

            addBooking(formdata);

            console.log(formdata);  
            
            


      }


  return (

      cart.length===0? <div className='empty-cart'> <h1>NOTHING IN CART</h1>
                  <button onClick={()=>nav("/property")}>Add to cart</button>
      </div>:
    <div className='cart'>



       <div className='cart-table'>

        <div>
           Appartment
        </div>

        <div>
            Title
        </div>

        <div>Rent</div>

        <div>Remove</div>      
               
       </div>

       <div className='underline-product'></div>

    
       {
          cart.map((value,idx)=>{return(
            <div key={idx}>
            <div className='cart-table'>

<div>
   <img src="https://www.houzillo.com/wp-content/uploads/2019/11/img-02-5.jpg" alt="" />
</div>

<div>
    {
      data[value].title
    }
</div>

<div>{
      data[value].price
}</div>

<div className="remove" onClick={()=>{removeCart(value);console.log(cart)}}>X</div>      
       
</div>

<div className='underline-product'></div>


  </div>
          )})
       }

       <div className='billing'>
          
            <h2>  Booking Total</h2>

            <div className='total-amount'><div>TotalAmount</div> <div className='center'><RiMoneyRupeeCircleFill />{total}</div></div>

            <button onClick={()=>{setActive(!active)}}>Pay</button>
       </div>

       <div className={`payment-details ${active && "active"}`}>

           <form action=""  onSubmit={(e)=>handlePayment(e)}>

               <div>
               <input type="email" placeholder='Email' required name='email' onChange={(e)=>handleChange(e)}/>
               </div>

               <div>
               <input type="text" placeholder='Phone NO.' required name='phonenumber' onChange={(e)=>handleChange(e)}/>
               </div>
              
               


                <div className='account-details'>
                    <h4>Account detail</h4>
                    <div> <input type="text" placeholder='ATM NUMBER' max={12} required name='atmnumber' onChange={(e)=>handleChange(e)}/></div>
                    <div>
                    <input type="text" max={3} placeholder='CVV'  required name='cvv' onChange={(e)=>handleChange(e)}/>
                    </div>
                  

                </div>

                <div className='total-pay'><p>Total amount</p> <p>{total}</p></div>

                <button  >Pay</button>

                <div className='close-overlay' onClick={()=>setActive(!active)}>X</div>
           </form>

       </div>


    </div>     
  )
}

export default Cart