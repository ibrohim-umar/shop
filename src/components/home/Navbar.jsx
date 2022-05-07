import React, { useState } from 'react'
import '../home/style.css/Navbar.css'
// import Location from '../../assets/Vector.jpg'
import Call from '../../assets/Call.jpg'
import Heard from '../../assets/Heard.jpg'
import Contact from '../../assets/Contact.jpg'
import Corzinka from '../../assets/corzinka.jpg'
import { MapOutlined, MenuOutlined, SearchOutlined  } from '@material-ui/icons'



const Navbar = () => {
    const [menu, setMenu]  = useState(false)
    const showMenu = () =>{
        setMenu(!menu)
    }
  return (
    <div  className='Navbar' >
         <div className='nav-top' >
             <div  className='top-left' >
                 <   MapOutlined className='map' />
                 <p>Termez</p>
             </div>
             <div  className='top-right' >
                 <img src={Call} alt="" />
                 <p>99999999999</p>
             </div>
         </div>
         <div className="nav-bottom">
             <div className="bottom-left">
                 <h1>LOGO</h1>
             </div>
             <div className="bottom-center">
                 <div className='bottom-center-menu' onClick={showMenu}>
                     <MenuOutlined className='menu-icon' onClick={showMenu} />
                  <h3>Categories</h3>
                 </div>
                  <div className="bottom-center-search">
                      <input type="search" placeholder='Search...' />
                      <SearchOutlined  className='search' />
                  </div>
                   <div className="bottom-right">
                  <div><img src={Heard} alt="" className='right-icon' /></div>
                  <div> <img src={Contact} alt="" className='right-icon' /></div>
                  <div><img src={Corzinka} alt="" className='right-icon' /> </div>
                        
             </div>
             </div>
            
         </div>
         <section  className={menu ? 'active' : 'disactive'} >
              <ul>
                  <li>New Products</li>
                  <li>Recommend</li>
                  <li>Favourite</li>
                  
              </ul>
         </section>
    </div>
  )
}

export default Navbar