import React from 'react'
import {Link} from 'react-router-dom'
import Card from '../ComponentsHome/Card'
import Filter from '../ComponentsHome/Filter'
import Header from '../ComponentsHome/Header'
import Table from '../ComponentsHome/Table'

const Home = () => {
  return (
    <div>
        <center>
     <Header />
     <Table />
     <Filter />
     <Card />


     </center>
          <Link to="/orders">Ordes</Link>
     
      
    </div>
  )
}

export default Home
