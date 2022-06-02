import React from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import Header from '../ComponentsHome/Header'

const Orders = ({list}) => {
  return (
    <div>
      <Header />
      <center>
          {list.length >0 ? 
         <div className='container'>  
         <div className='row'>
           {list.map((item,index)=>(
               <div className='col-md-4' style={{padding:'5px'}} key={index}> 
               <div className='card p-2 m-2' style={{width:'18rem',padding:'3px',height:'700px'}}>
                 <img src={item.image} className='card-img-top  '  alt="products"/>
                 <div className='card-body' >
                     <h5 className='card-title'> {item.title}</h5>
                     <h6 className='card-text'> Billing Ammount:{item.price} </h6>
                     <h6>category:{item.category}</h6>
                    
                <p>Table number : {item.table_number}</p>
                      </div>
                      </div>
               </div>
           ))}
         </div>
         </div>
        :
        <div className='h4'>No Order Placed In </div>
        }
      </center>

          <br />
          <Link to="/home">Home</Link>
      
     
    </div>
  )
}

const mapStateToProps = state =>({
   list :state.OrderReducer

})

export default connect(mapStateToProps)(Orders);
