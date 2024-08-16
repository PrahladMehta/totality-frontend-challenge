import React,{useEffect, useState} from 'react'
import Card from '../../components/Card'
import { Context } from '../../context/Context';
import { useContext } from 'react';
import "./Property.css";
import { FaSearch } from "react-icons/fa";

const Property = () => {

         const {data}=useContext(Context);


        const[numberofbedroom,setNumberofbedroom]=useState([]);

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

         function handleChangetwo(e){
            if(e.target.checked){
         numberofbedroom.push(parseInt(e.target.value));
        
            }else{
                 numberofbedroom.splice(numberofbedroom.indexOf(parseInt(e.target.value)),1);
                
                  setFilter(data);
            }
         
          
            handleSecondFilter();
        }

         function handleSecondFilter(){

                 let datafil=[];
               
                   if(checked.length!==0){
                        
                         datafil=data.filter((item,id)=>{
                              for(let i=0;i<checked.length;i++){
                                    let contain=false;
                                    for(let j=0;j<item.amenities.length;j++){
                                      
                                          if(item.amenities[j].toLowerCase().includes(checked[i].toLowerCase())){
                                               contain=true;
      
                                          }
                                          
                                    }
      
                                    if(!contain) return false;
                               }


                               return true;
                              
                           }

                          
                           
                             
                       )
                  //      setFilter(datafil);
                   }

                   if(datafil.length===0){
                        datafil=data;
                   }

                  let datafiltwo=[];

                   if(numberofbedroom.length!==0){
                         
                        // console.log(numberofbedroom);
                        // console.log(numberofbedroom.indexOf(4));
                        console.log(filter);
                          datafiltwo=datafil.filter((item,id)=>{
                              // console.log(numberofbedroom.indexOf(item.bedrooms));
                               if(numberofbedroom.indexOf(item.bedrooms)!==-1){
                                   
                                    // console.log(item.bedrooms);
                                          return true;
                               }
                                return false;
                          })

                        //   console.log(datafiltwo);

                     
                   }

                   if(datafiltwo.length!==0){
                        setFilter(datafiltwo);
                   }else{
                        setFilter(datafil);
                   }

                  



                  
                   
              

                
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

             <div className='amenities-filter'>

<p>Bedrooms :</p>

  <div>
  <label htmlFor="one">one </label>
  <input type="checkbox" id='wifi' value="1" name='bedroom' onChange={(e)=>handleChangetwo(e)} />
  </div>
  <div>
  <label htmlFor="two">two</label>
  <input type="checkbox" id='gym' value="2"  name='bedroom' onChange={(e)=>handleChangetwo(e)}  />
  </div>
  <div>
  <label htmlFor="three">three</label>
  <input type="checkbox" id="three"   value="3" name='bedroom' onChange={(e)=>handleChangetwo(e)} />
  </div>
  <div>
    
  <label htmlFor="four">
    Four</label>
    <input type="checkbox" id='four' value="4"  name='bedroom' onChange={(e)=>handleChangetwo(e)}  />
  </div>
  <div>
    
  <label htmlFor="five">
    Five</label>
    <input type="checkbox" id='five' value="5"  name='bedroom' onChange={(e)=>handleChangetwo(e)}  />
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