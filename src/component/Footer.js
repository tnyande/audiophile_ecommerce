import React from 'react';
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialInstagram } from "react-icons/ti";
import './Footer.css' ;
import FootHero from './FootHero';


function Footer() {
  return (
    <div>
      <div className="foot-App">
        <FootHero />
       <div className='foot-App-Content'>
         
          <p className='foot-prod-content'>
          Audiophile is an all in one stop to fulfill your audio needs. 
          We're a small team of music lovers and sound specialists who are 
          devoted to helping you get the most out of personal audio. 
          Come and visit our demo facility - we’re open 7 days a week.
          </p> 
          
          <div className='social'>
          <TiSocialFacebook className='social-all'/>
          <TiSocialTwitter className='social-all'/>
          <TiSocialInstagram className='social-all'/>

          </div>
       </div>

       <div>
        <p className='copyright'>Copyright 2023. All Rights Reserved </p>
       </div>
      </div>
      
    </div> 
   
  );
}

export default Footer;
