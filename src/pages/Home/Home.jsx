import React from 'react'
import "./Home.css";

const Home = () => {
  return (
    <div className='home-wrapper'>

     <div className="home-container">

       <div className='home-container-text'>
       <h1>Best Place to find the Property</h1>

<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium nostrum rem harum facilis? Neque, est laborum esse</p>

       </div>

      
       
     </div>

     <div className='recomndation'>
              <h1>Recomndation for you</h1>
            <p>High value with low price</p>
            <dir className="underline"></dir>

            <div className='recomndation-para'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo consectetur omnis tenetur aliquid temporibus debitis. Excepturi, laudantium unde vero nobis quidem sed, expedita voluptates tenetur saepe reiciendis qui. Sapiente, animi?</div>

        </div>

    </div>
  )
}

export default Home