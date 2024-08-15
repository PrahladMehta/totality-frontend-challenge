import React,{useState} from 'react'
import Card from '../../components/Card'
import { Context } from '../../context/Context';
import { useContext } from 'react';
import "./Property.css";
import { FaSearch } from "react-icons/fa";
const Property = () => {

         const {data}=useContext(Context);
         console.log(data);



         const[filter,setFilter]=useState(data);

         function handleSearch(e){

           const search= e.target.value.toLowerCase()

              const datafil=data.filter((item,id)=>search===''?item:item.title.toLowerCase().includes(search) );

              setFilter(datafil);

         }
  return (
    <div className='property-container'>

      <div className='filter'>
         <div className='search'> <FaSearch /> <input type="text" placeholder='Search..' onChange={(e)=>handleSearch(e)}/></div>
          
      </div>

      <div className='cards'>
            {
                  filter.length===0? <h4 >Nothing founds</h4>:
                  filter.map((value,index)=>{
                        return (

                              <Card key={index} data={value}></Card>
                        )
                  })
            }
      </div>

          
    </div>
  )
}

export default Property