import React from "react";
import Hero from "./Hero";
import './Hero.css' ;
import './HeadfoneHero.css' ;

const HeadfoneHero = () => {
    return (
        <div className="headfones">
            
                <Hero className='hero'/>
            
            
            <div className="fone-texts">
                <div className="fone-text">
                    HEADPHONES
                </div>
            </div>
        </div>
    )
}
export default HeadfoneHero