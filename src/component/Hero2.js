import React from 'react' ;
import { GiShoppingCart } from "react-icons/gi";
import  './Hero.css'


const Hero = () => {

    return (
        <div className="hero-main">
            
            <div className="hero-content">
                <h4 className="title">
                    audiophile
                </h4>   
            </div>
            <div className='menu'>
                <h6 className='home'>HOME</h6>
                <h6 >HEADPHONES</h6>
                <h6 >SPEAKERS</h6>
                <h6 >EARPHONES</h6>
            </div>
            <div>
                <GiShoppingCart />
            </div>
        
        </div>
    )
}
export default Hero ;