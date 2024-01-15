import React from 'react' ;
import  './FootHero.css' ;
import { useNavigate } from 'react-router-dom';


const FootHero = () => {
    const navigate = useNavigate();
    
    const HomeLinks = () => {      
        navigate ('/');
        console.log("Clicked Home");     
    }
    const HeadfoneLinks = () => {      
        navigate('/headfones');
        console.log("Clicked headfones");     
    }

    const SpeakerLinks = () => {      
        navigate ('/speakers');
        console.log("Clicked speakers");     
    }
    const EarfoneLinks = () => {      
        navigate ('/earfones');
        console.log("Clicked earfones");     
    }

    return (
        <div className="foot-header">
            
            <div className="foot-header-content">
                <h4 className="title">
                    audiophile
                </h4>   
            </div>
            <div className='foot-header-menu'>
                <h6 className='home' onClick={HomeLinks}>HOME</h6>
                <h6 className='home' onClick={HeadfoneLinks}>HEADPHONES</h6>
                <h6 className='home' onClick={SpeakerLinks}>SPEAKERS</h6>
                <h6 className='home' onClick={EarfoneLinks}>EARPHONES</h6>
            </div>
          
        </div>
    )
}
export default FootHero ;