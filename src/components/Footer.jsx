import React from 'react'
import "./footer.css"
import {FaFacebook, FaInstagram, FaLinkedin, FaTwitter} from 'react-icons/fa'
import Wave from 'react-wavify'

const Footer = () => {
    return (
        <div className='footer'>
            <Wave className='foo'
            fill= "#EEF2FD"
            paused={false}
            options={{
                height: 32,
                amplitude: 50,
                speed: 0.20,
                points: 4
            }}
            />
            <div className='container'>
                <div className='col col-1'>
                    <h1>Wa<span className='primary'>ve</span></h1>
                </div>
                <div className='col'>
                    <h5>Support</h5>
                    <span className='bar'></span>
                        <a href='/'>Contact Us</a>
                        <a href='/'>Chat</a>
                        <a href='/'>Help Center</a>
                        <a href='/'>FAQ</a>

                </div>
                <div className='col'>
                    <h5>Developers</h5>
                    <span className='bar'> </span>
                        <a href='/'>Cloud</a>
                        <a href='/'>Commerce</a>
                        <a href='/'>Pro</a>
                        <a href='/'>API</a>
                   
                </div>
                <div className='col'>
                    <h5>Company</h5>
                    <span className='bar'> </span>
                        <a href='/'>About</a>
                        <a href='/'>Information</a>
                        <a href='/'>Legal</a>
                        <a href='/'>Privacy</a>
                </div>
                <div className='col'>
                    <h5>Social</h5>
                    <span className='bar'> </span>
                        <a href='/'><FaFacebook className='icon'/>Facebook</a>
                        <a href='/'><FaTwitter className='icon'/>Twitter</a>
                        <a href='/'><FaInstagram className='icon'/>Instagram</a>
                        <a href='/'><FaLinkedin className='icon'/>Linkedin</a>
                </div>
            </div>
            
        </div>
    )
}

export default Footer