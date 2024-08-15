import { useEffect, useState } from 'react'
import './App.css'

import { useContext } from 'react'
import { Context } from './context/Context'
import { Route,NavLink,Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Property from './pages/Property/Property'
import Product from './pages/Product/Product'
import Cart from './pages/Cart/Cart'
import Yourbooking from './pages/Yourbooking/Yourbooking'
import { GiHamburgerMenu } from "react-icons/gi";
import { TiSocialTwitter } from "react-icons/ti";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import Signup from './pages/Auth/Signup'
import Login from './pages/Auth/Login'
function App() {

     const {data,getData}=useContext(Context);

     const[activenav,setActivenav]=useState(false);

     console.log(data);

     useEffect(()=>{
      getData();
     },[]);

  return (
    <div className='wrapper'>


      <div className='container'>

      {/* NAV */}

      <div className="nav-container">
      <div className='nav'>

      <div className='hamburgar' onClick={()=>setActivenav(!activenav)}><GiHamburgerMenu /></div>

<div className='logo'>BOOKING </div>

<ul className={`nav-bar ${activenav&&"activenav"}`}>
 <li onClick={()=>setActivenav(!activenav)}><NavLink to="/" className="nav-bar-opt"><p>HOME</p><div className='nav-bar-opt-bottom'></div></NavLink> </li>
 <li onClick={()=>setActivenav(!activenav)}><NavLink to="/property" className="nav-bar-opt"><p>PROPERTY</p><div className='nav-bar-opt-bottom'></div></NavLink> </li>
 <li onClick={()=>setActivenav(!activenav)}><NavLink to="/cart" className="nav-bar-opt"><p>CART</p><div className='nav-bar-opt-bottom'></div></NavLink> </li>
 <li onClick={()=>setActivenav(!activenav)}><NavLink to="/yourbooking" className="nav-bar-opt">  <p>YOUR BOOKING</p><div className='nav-bar-opt-bottom'></div></NavLink></li>

</ul>

<div className='nav-button'>

<NavLink to="/signup"> <button >SIGN UP</button></NavLink>
<NavLink to="/login"> <button>LOGIN</button></NavLink>


</div>

  
</div>
      </div>
 


      <div>

         <Routes>
             <Route element={<Home/>} path='/'>    </Route>
             <Route element={<Property/>} path='/property'>    </Route>
             <Route element={<Cart></Cart>} path='/cart'>    </Route>
             <Route element={<Yourbooking/>} path='/yourbooking'>    </Route>
             <Route element={<Login/>} path='/login'></Route>
             <Route element={<Signup></Signup>} path='/signup'></Route>
          
              <Route element={<Product/>}  path='/product/:id'></Route>
          

         </Routes>


      </div>

      <footer>
           <div className='social-icon'>

           <div> <TiSocialTwitter /></div>
           <div><FaFacebookSquare /></div>
           <div>   <FaLinkedin /></div>
           <div> <FaInstagram /></div>

          
           
        
           </div>

           <div className="underline-product"></div>

           <p>@ Copyright reserve by prahlad singh mehta</p>

          
      </footer>

      </div>

    </div>
  )
}

export default App
