import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/header.css'

function Header() {
  return (
    <header className='header'>
        <Link to='/' className='link'><h1>Event</h1></Link>
        <Link to='/sortie' className='link'><h3>Mes sorties</h3></Link>
        <Link to='/profil'>
            <img src="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/64/FFFFFF/external-user-interface-kiranshastry-solid-kiranshastry.png" height={50}/>
        </Link>
    </header>
  )
}

export default Header

const styles = {
  brand: {
      display: 'flex',
      alignItems: 'center',
      marginLeft: '10px',
  },
}