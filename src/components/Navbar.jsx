import React, {useState} from 'react'
import "./navbar.css"
import {FaBars, FaTimes} from "react-icons/fa"
import { Link } from "react-scroll";

const Navbar = () => {
    const [click, setclick] = useState(false)
    const handleClick = () => setclick(!click)
  return (
    <div className='header' >
        <div className="container">
            <h2>Wa<span className='primary' >ve</span></h2>
            <ul className={click ? "nav-menu active" : "nav-menu" }>
                <li>
                <Link onClick={handleClick} to="home" offset={-100}  smooth={true} duration={500}>Home</Link>
                </li>
                <li>
                <Link onClick={handleClick} to="featured" smooth={true} duration={500}>Featured</Link>
                </li>
                <li>
                <Link onClick={handleClick} to="earn" offset={-110} smooth={true} duration={500}>Earn</Link>
                </li>
                <li>
                <Link onClick={handleClick} to="contact" smooth={true} duration={500}>Contact</Link>
                </li>
            </ul>
            <div className="btn-group">
                <button className="btn">Connect Wallet</button>
            </div>
            <div className="hamburger" onClick={handleClick}>
            {click ? (<FaTimes size={20} style={{color: '#333'}}/>) : (<FaBars size={20} style={{color: '#333'}} />)}                
            </div>
        </div>

    </div>
  )
}

export default Navbar