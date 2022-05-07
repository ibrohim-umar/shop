import React from 'react'
import Carusel from './Carusel'
import Navbar from './Navbar'
import Card from './Card'
import '../home/style.css/Home.css'
import Footer from './Footer'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Carusel/>
        <div className='home-card'>
        <h1 className='card-h1' >  New Products </h1>
       <div className='products' >
           <Card/>
           <Card/>
           <Card/>
           <Card/>
           <Card/>
           <Card/>
           <button  className='card-button' >view more</button>
        </div> 
            <h1  className='card-h2' >  Recommend </h1>
            <div className='products' >
           <Card/>
           <Card/>
           <Card/>
           <Card/>
           <Card/>
           <Card/>
           <button  className='card-button' >view more</button>
        </div> 
          </div> 
          <Footer/>
    </div>
  )
}

export default Home