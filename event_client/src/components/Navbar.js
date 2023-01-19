import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';

function Navbar() {

  return (
    <div className='navbar'>
      <div className='navbar_container'>
          <Link to='/' className='link'>
          <h3>CROWDED</h3>
        </Link>
      <div className='navbar_right_content'>
          <Link to='/sortie' className='link right_content_link'><h4>Sorties</h4></Link>
          
          |
          
          <Link to='/profil' className='right_content_link'>
            
          </Link>
        </div>
      </div>
    </div>
        
  )
}

export default Navbar
