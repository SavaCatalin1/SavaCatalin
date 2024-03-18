import React from 'react'
import './Footer.css'
import logo from '../../Sava.png'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
    return (
        <div className='footer-container'>
            <div className='footer-logo'>
                <img src={logo} className='footer-logo' />
            </div>
            <div className='footer-items'>
                <div className='footer-social-top'>
                    <div className='footer-social-top-item'> <LinkedInIcon fontSize='large' /> </div>
                    <div className='footer-social-top-item'> <FacebookIcon fontSize='large' /> </div>
                    <div className='footer-social-top-item'> <InstagramIcon fontSize='large' /> </div>
                </div>
                <div>Copyright 2024. All Rights Reserved</div>
            </div>
        </div>
    )
}

export default Footer