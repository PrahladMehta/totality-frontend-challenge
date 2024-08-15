import { createContext, useState } from "react";

import data from "../data";


export const Context=createContext();


const ContextProvider=({children})=>{

  const [cart,setCart]=useState([]);
  const [total,setTotal]=useState(0);
  const [yourBooking,setYourBooking]=useState([]);

  function getProduct(id){

      return data[id];
  }



  function addCart(id){

      if(!cart.includes(id)){
        cart.push(id);
        setTotal(()=>total+data[id].price);

          localStorage.setItem("cart",JSON.stringify(cart));
          localStorage.setItem("total",JSON.stringify(total+data[id].price));

      }


       
      
  }

  function removeCart(id){

    const newCart=cart.filter((value)=>value!==id);

    setCart(newCart);
    setTotal(total-data[id].price);

    localStorage.setItem("cart",JSON.stringify(newCart));
    localStorage.setItem("total",total);

  }

  function getCart(){

       const cartData=[];

       for(let i=0;i<cart.length;i++){
          
           cartData.push(data[cart[i]]);

       }

       return cartData;

  }


 

  function addBooking(userData){

     cart.forEach((value,id)=>yourBooking.push({...userData,...data[value]}));

     setCart(()=>[]);
     setTotal(0);



      localStorage.setItem("yourbooking",JSON.stringify(yourBooking));
      localStorage.removeItem("cart");

  }


  function getBooking(){
      
     return yourBooking;
  }


  function getData(){

    if(localStorage.getItem("cart")){

      const getData=localStorage.getItem("cart")
      const cleanData=JSON.parse(getData);
      setCart(cleanData);
      setTotal(()=>parseInt(localStorage.getItem("total")));
  
       
 

 }

 if(localStorage.getItem("yourbooking")){
        
      const getData=localStorage.getItem("yourbooking");
      const cleanData=JSON.parse(getData);

      setYourBooking(cleanData);
 }

  }






    


     const value={data,getProduct,addCart,removeCart,getCart,cart,total,addBooking,getBooking,yourBooking,getData};




    return(

      <Context.Provider value={value}>{children}</Context.Provider>

    )

}

export default ContextProvider;