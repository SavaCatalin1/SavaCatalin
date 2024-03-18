import React from 'react'
import './Contact.css'

const Contact = () => {
    return (
        <>
            <div className='contact-container' id='contact'>
                <div className='contact-left'>

                </div>

                <div className='contact-right'>
                    <div className='contact-title'>Get in touch</div>
                    <div className='contact-flex'>
                        <div className='contact-flex-left'>
                            <input placeholder='First Name' className='contact-input'></input>
                            <input placeholder='Email Address' className='contact-input'></input>
                        </div>
                        <div className='contact-flex-right'>
                            <input placeholder='Last Name' className='contact-input'></input>
                            <input placeholder='Phone No.' className='contact-input'></input>
                        </div>
                    </div>
                    <input className='contact-message' placeholder='Message'></input>
                    <div className='contact-button'>Send</div>
                </div>
                <div className='newsletter-container'>
                    <div className='newsletter-text'>Subscribe to our Newsletter & Never miss latest updates</div>
                    <div className='newsletter-flex-input'>
                        <input className='newsletter-input'></input>
                        <div className='newsletter-button'>Submit</div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Contact