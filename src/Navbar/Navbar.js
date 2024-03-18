import React from 'react'
import './Navbar.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import logo from '../Sava.png'

const Navbar = () => {
  return (
    <div className='navbar-container'>
      <div className='navbar-logo'>
          <img src={logo} className='logo'/>
      </div>
      <div className='navbar-items'>
        <div className='navbar-item'>Home</div>
        <div className='navbar-item'>Skills</div>
        <div className='navbar-item'>Projects</div>
        <div className='navbar-social-top'>
          <div className='navbar-social-top-item'> <LinkedInIcon fontSize='large' /> </div>
          <div className='navbar-social-top-item'> <FacebookIcon fontSize='large' /> </div>
          <div className='navbar-social-top-item'> <InstagramIcon fontSize='large' /> </div>
        </div>
        <div className='navbar-item navbar-button-connect'>Let's connect</div>
      </div>
    </div>
  )
}

export default Navbar