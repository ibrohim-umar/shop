import React from 'react'
import '../../components/home/style.css/Footer.css';
import { FaTelegram, FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='Footer' >
        <div  className='f-logo'>
            <h1> Logo </h1>
        </div>
        <div className='info' >
            <h1> information </h1>
            <p>About company</p>
            <p>B2B</p>
            <p>Payment</p>
            <p>Delivery</p>
        </div>
        <div className="media">
            <h1> Social media </h1>
            <p>  <FaTelegram/>  Telegram</p>
            <p> <FaInstagram/> Instagram</p>
            <p> <FaFacebook/>  Facebook</p>
        </div>
        <div className="payment">
            <h1> Payment </h1>
            <div className='input' >  
             <input type="text" />
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <input type="text" />
             </div>
           
        </div>
    </div>
  )
}

export default Footer