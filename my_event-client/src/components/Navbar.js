import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/navbar.css'

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
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAABjUlEQVR4nO2VyUoDQRiE40URoyi4PIJeRdBjYhBP4pIovoYEJcScNCeXg76EeDPGxxCjV0WCDxC3KIG4fdJQg0MwcTLpOQgp+C/T9VdV9/w9Ewq10cZ/AzAMZIFL4FVVALaBoaDNl4Ey9fEMxIM0/5LRCRABelRRIKe1T2ApiGMvy2CjAS8lzhMwaDNA1tm5B25e3C2bAa4kGvHAnRa3YDPAi0TDHri94pZtBnhsIkCfuA82A1xINOqBGxP33GaAjERzHrhn4qZtBhgB7iWcasBLi1MyV9daAAPzcQE+ZJDXtIdVMdfODWcxFASAhL509WDWEkGZzwO3/A3DmbNp3AHs1ZjcAaNAt2pMzxyYf8aO6bURYF+i78CmaxgPNJymDl3DlxHXYLdV80UJvQEzehYHqr8cfdUZPmBWPQYLfs27XMearFmb0k0oqU6ByRrOunqLQKefAKsSuPbzLjU7N9JY8RPgWM1rTTf/aCSlceSnuajm8RYCTDhX009zRc39LQQYkEbFr0YbbYSCxje7KerSgpaqxgAAAABJRU5ErkJggg==" height={25} />
          </Link>
        </div>
      </div>
    </div>
        
  )
}

export default Navbar
