import React from 'react' ;
import  './Hero.css';
import { GiShoppingCart } from "react-icons/gi";
import { useNavigate } from 'react-router-dom';


const Hero = () => {
    const navigate = useNavigate();
    
    const HomeLink = () => {      
        navigate ('/');
        console.log("Clicked earfones");     
    }
    const HeadfoneLink = () => {      
        navigate ('/headfones');
        console.log("Clicked headfones");     
    }

    const SpeakerLink = () => {      
        navigate ('/speakers');
        console.log("Clicked speakers");     
    }
    const EarfoneLink = () => {      
        navigate ('/earfones');
        console.log("Clicked earfones");     
    }

    return (
        <div className="header">
            
            <div className="header-content">
                <h4 className="title">
                    audiophile
                </h4>   
            </div>
            <div className='header-menu'>
                <h6 className='home' onClick={HomeLink}>HOME</h6>
               {/* <input type='text' onClick={HeadfoneLink} placeholder='HEADPHONES' /> */}
               <h6 className='home' onClick={HeadfoneLink}>HEADPHONES</h6>
                <h6 className='speaker' onClick={SpeakerLink} >SPEAKERS</h6>
                <h6 className='speaker' onClick={EarfoneLink}>EARPHONES</h6>
            </div>
            <div className='shopcart'>
                <GiShoppingCart />
            </div>
        
        </div>
    )
}
export default Hero ;