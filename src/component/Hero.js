import React from 'react' ;
import { GiShoppingCart } from "react-icons/gi";
import  './Hero.css'


const Hero = () => {

    return (
        <div className="header">
            
            <div className="header-content">
                <h4 className="title">
                    audiophile
                </h4>   
            </div>
            <div className='header-menu'>
                <h6 className='home'>HOME</h6>
                <h6 >HEADPHONES</h6>
                <h6 >SPEAKERS</h6>
                <h6 >EARPHONES</h6>
            </div>
            <div className='shopcart'>
                <GiShoppingCart />
            </div>
        
        </div>
    )
}
export default Hero ;