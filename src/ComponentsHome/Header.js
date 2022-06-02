import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const Header = ({count}) => {
  return (
    <div>
      <nav className='navbar navbar-light bg-light'>
        <a className='navbar-brand'>Add to cart </a> 
        <button className='btn btn-primary'>
            <Link to='/orders' style={{color:'white',textDecoration:'none'}}>orders</Link> <span className='badge bg-secondary'>{count}</span>
            </button> 
      </nav>
    </div>
  )
}
const mapStateTOProps = state =>({
  count:state.OrderReducer.length
})

export default connect(mapStateTOProps)(Header)