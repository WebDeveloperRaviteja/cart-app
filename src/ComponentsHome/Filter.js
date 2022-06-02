import React, { useState } from 'react'
import {connect} from 'react-redux'
import { setfilter,resetfilter } from '../Actions/Action'

const Filter = ({filter_name,setfilter,resetfilter}) => {
    const prod =["men's clothing","jewelery","electronics","women's clothing"]
    const [filter,setFilter] = useState(" men's clothing ")
  return (
    <div>
      <center className="mt-3">
          <span className='h5 m-1'>Filter:</span>
          <select name="filter" className='p-1' onChange={(e)=> setfilter(e.target.value)}>
             {prod.map((item,index)=>(
                 <option value={item} key={index}>{item}</option>
             ))}
          </select>
          {/* <button className='btn btn-sm btn-primary m-2' onClick={()=>console.log(filter)}> Select the Item </button> */}
      </center>
    </div>
  )
}

const mapStateTOProps = state => ({
  filter_name :state.FilterReducer.filter_name
})

export default connect(mapStateTOProps,{setfilter,resetfilter})(Filter);
