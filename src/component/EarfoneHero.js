import React from "react";
import Hero from "./Hero";
import './Hero.css' ;
import './EarfoneHero.css' ;


const EarfoneHero = () => {
    return (
        <div className="earfones">
            
                <Hero className='hero'/>
            
            
            <div className="fone-texts">
                <div className="fone-text">
                    EARPHONES
                </div>
            </div>
        </div>
    )
}
export default EarfoneHero ;