import React from "react";
import Hero from "./Hero";
import './Hero.css' ;
import './SpeakerHero.css' ;

const SpeakerHero = () => {
    return (
        <div>
            <div className="speakers">
                
                    <Hero />
                
                
                <div className="fone-texts">
                    <div className="fone-text">
                        SPEAKERS
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SpeakerHero;