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

         const[checked,setChecked]=useState([]);

         function handleSearch(e){

              const search= e.target.value.toLowerCase()

              const datafil=data.filter((item,id)=>search===''?item:item.title.toLowerCase().includes(search) );

              setFilter(datafil);

         }

         function handleChange(e){
             if(e.target.checked){
                  checked.push(e.target.value);
             }else{
                  checked.splice(checked.indexOf(e.target.value),1);
                  setFilter(data);
             }
             handleSecondFilter();
         }

         function handleSecondFilter(){
               
                   if(checked.length===0){
                        
                        return;
                   }
                 const datafil=data.filter((item,id)=>{

                     console.log(checked);
                     console.log(item.amenities);
                     
                         for(let i=0;i<checked.length;i++){
                              let contain=false;
                              for(let j=0;j<item.amenities.length;j++){
                                    console.log(item.amenities[j]);
                                    if(item.amenities[j].toLowerCase().includes(checked[i].toLowerCase())){
                                         contain=true;

                                    }
                                    
                              }

                              if(!contain) return false;
                         }
                         return true;
                 })

                 setFilter(datafil);
         }
  return (
    <div className='property-container'>


     

      <div className='filter'>
         <div className='search'> <FaSearch /> <input type="text" placeholder='Search..' onChange={(e)=>handleSearch(e)}/></div>
          <div>
             <div className='amenities-filter'>

              <p>Amenities :</p>

                <div>
                <label htmlFor="wifi">wifi</label>
                <input type="checkbox" id='wifi' value="wifi" onChange={(e)=>handleChange(e)} />
                </div>
                <div>
                <label htmlFor="gym">Gym</label>
                <input type="checkbox" id='gym' value="gym" onChange={(e)=>handleChange(e)}  />
                </div>
                <div>
                <label htmlFor="pool">Pool</label>
                <input type="checkbox" id="pool"   value="pool" onChange={(e)=>handleChange(e)} />
                </div>
                <div>
                  
                <label htmlFor="ac">
                  Air Conditioning</label>
                  <input type="checkbox" id='ac' value="air conditioning" onChange={(e)=>handleChange(e)}  />
                </div>
                <div>
                  
                <label htmlFor="parking">
                  Parking</label>
                  <input type="checkbox" id='parking' value="parking" onChange={(e)=>handleChange(e)}  />
                </div>

                <div>
                  
                  <label htmlFor="garden">
                  Garden</label>
                    <input type="checkbox" id='garden' value="garden" onChange={(e)=>handleChange(e)}  />
                  </div>
              
                  <div>
                  
                  <label htmlFor="security">
                  Security</label>
                    <input type="checkbox" id='security' value="security" onChange={(e)=>handleChange(e)}  />
                  </div>

               

                 

                 

             </div>
             
          </div>
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