import React from 'react'
import './Navbar.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import logo from '../Sava.png'

const Navbar = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className='navbar-container'>
      <div className='navbar-logo'>
        <img src={logo} className='logo' alt='logo'/>
      </div>
      <div className='navbar-items'>
        <div className='navbar-item' onClick={() => scrollToSection('home')}>Home</div>
        <div className='navbar-item' onClick={() => scrollToSection('skills')}>Skills</div>
        <div className='navbar-item' onClick={() => scrollToSection('projects')}>Projects</div>
        <div className='navbar-social-top'>
          <div className='navbar-social-top-item'> <LinkedInIcon fontSize='large' /> </div>
          <div className='navbar-social-top-item'> <FacebookIcon fontSize='large' /> </div>
          <div className='navbar-social-top-item'> <InstagramIcon fontSize='large' /> </div>
        </div>
        <div className='navbar-item navbar-button-connect' onClick={() => scrollToSection('contact')}>Let's connect</div>
      </div>
    </div>
  )
}

export default Navbar