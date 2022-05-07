import React from 'react'
import Cards from '../../assets/Card.jpg'
import corzinka2 from '../../assets/corzinka.jpg'
import '../home/style.css/Card .css'
import {FaShoppingCart} from 'react-icons/fa'


const Card = () => {
  return (
      <div className='container' >
          
    <div  className='card' >
           
          <img src={Cards} alt="" />
          <div className='card-h' >
              <p>brand name</p>
              <p>watch</p>
          </div>
          <div className='card-name' >
              <h1>Samsung A30</h1>
              <h3> 1230$ </h3>
          </div>
          <div className='card-corzinka' >
              
                  <FaShoppingCart className='shop' />
                  <h1>  Add to cart </h1>
                  
              
             
             
          </div>
    </div>
    </div>
  )
}

export default Card