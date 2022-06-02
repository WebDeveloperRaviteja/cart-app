//https://fakestoreapi.com/products
import React, { useEffect, useState } from 'react'
import {connect} from 'react-redux';
import { addorder, resettablenumber,resetfilter } from '../Actions/Action';



const Card = ({filter_name,addorder,table_number}) => {
    const [data,setData] = useState([]);
    const [cloneData,setCloneData] = useState([]);
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(json => {setData(json);
                   setCloneData(json);
        }
        )
        
    },[])

   useEffect(()=>{
     if(filter_name !== "men's cloths"){
       let specific = cloneData.filter(item => item.category===filter_name);
       setData(specific);
     }
     else{
       setData(cloneData);
     }
   },[filter_name])


   const Handler =(id,title,price,image) => {
     if(table_number != null){
        addorder(id,title,price,table_number,image);
       resettablenumber();
        resetfilter();
       alert('order placed successfully');
     }
     else{
       alert ('plese select your table number')
     }
   }

  return (
    <div>
      <center>
          {data.length >0 ? 
         <div className='container'>  
         <div className='row'>
           {data.map((item,index)=>(
               <div className='col-md-4' style={{padding:'5px'}} key={index}> 
               <div className='card p-2 m-2' style={{width:'18rem',padding:'3px',height:'700px'}}>
                 <img src={item.image} className='card-img-top  '  alt="products"/>
                 <div className='card-body' >
                     <h5 className='card-title'> {item.title}</h5>
                     <h6 className='card-text'> $:{item.price} </h6>
                     <p>category:{item.category}</p>
                     <button className='btn btn-primary' onClick={()=> Handler(item.id,item.title,item.price,item.image)}> order</button>
                      </div>
                      </div>
               </div>
           ))}
         </div>
         </div>
        :
        <div className='spinner-border text-primary'></div>
        }
      </center>
    </div>
  )
}

const mapStateToProps =state => ({
  filter_name : state.FilterReducer.filter_name,
  table_number :state.TableReducer.table_number
})

export default connect(mapStateToProps,{addorder})(Card); 
