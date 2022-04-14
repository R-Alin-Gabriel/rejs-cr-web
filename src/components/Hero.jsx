import React from 'react'
import "./hero.css"
import Crypto from "../assets/hero-img2.jpg"

const Hero = () => {
    return (
        <div name='home'  className='hero'>
            <div  className='container'>

                {/* Left Side */}
                <div className='left'>
                    <p >Buy & Sell Crypto 24/7 using your retirement account</p>
                    <h1>Invest in Cryptocurrency with Your IRA</h1>
                    <p>Buy, Sell, and store hundreds of cryptocurrencies</p>
                    <div className='input-container'>
                        <input type='email' placeholder='Enter your email' />
                        <button className='btn'>Learn More</button>
                    </div>
                </div>


                {/* Right Side */}
                <div className='right'>
                    <div className='img-container'>
                        <img src={Crypto} alt='crypto'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero