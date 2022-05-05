import React from 'react'
import '../home/style.css/Carusel.css'
import Big from '../../assets/BigCarusel.jpg'
import Sony from '../../assets/sony.jpg'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';



const Carusel = () => {
  return (
    <div>
        <div className="bid-carusel">
            <Carousel showIndicators={Boolean} >
                <img src={Big} alt="" />
                <img src={Big} alt="" />
                <img src={Big} alt="" />
            
            </Carousel>
        </div>
        
        <AliceCarousel className='small-carusel' >
            
             <img src={Sony} alt="" />
             <img src={Sony} alt="" />
             <img src={Sony} alt="" />
             <img src={Sony} alt="" />
             <img src={Sony} alt="" />   
        
        </AliceCarousel>
        
    </div>
  )
}

export default Carusel