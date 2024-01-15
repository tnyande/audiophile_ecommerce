import React from "react";
import Pages from "./Pages";
import './ContentSpeaker.css';

const ContentSpeaker = () => {

    return (
        <div>
            <div className="category1">
                <div className="imagecat1">
                    <img className="image1" src="https://i.ibb.co/MnXGksm/image-category-thumbnail-speakers.png"  alt="speaker"/>
                </div>
                <div className="textcat1">
                    <h5 className="head1">NEW PRODUCT</h5>
                    <h5 className="headcat1">ZX9 SPEAKER</h5>
                    <p className="paracat1">
                    Upgrade your sound system with the all new ZX9 active speaker. 
                    It’s a bookshelf speaker system that offers truly wireless 
                    connectivity -- creating new possibilities for more pleasing 
                    and practical audio setups.
                    </p>
                    <button className="but1">SEE PRODUCT</button>
                </div>
            </div>
            <div className="category1">
                
                <div className="textcat1">
                    <h5 className="head1">NEW PRODUCT</h5>
                    <h5 className="headcat1">ZX7 SPEAKER</h5>
                    <p className="paracat1">
                    Stream high quality sound wirelessly with minimal loss. 
                    The ZX7 bookshelf speaker uses high-end audiophile components 
                    that represents the top of the line powered speakers for home 
                    or studio use.
                    </p>
                    <button className="but1">SEE PRODUCT</button>
                </div>
                <div className="imagecat1">
                    <img className="image1" src="https://i.ibb.co/rsKkCZ4/image-category-page-preview-removebg-preview.png"  alt="speaker"/>
                </div>
            </div>

                
             <Pages />
             <div className="category5">
                <div className="textcat5">
                    <h5 className="headcat5">BRINGING YOU THE <span>BEST</span> AUDIO GEAR</h5>
                    <p className="paracat5">Located at the heart of New York City, Audiophile is the premier
                         store for high end headphones, earphones, speakers, and audio 
                         accessories. We have a large showroom and luxury demonstration
                          rooms available for you to browse and experience a wide range 
                          of our products. Stop by our store to meet some of the fantastic
                           people who make Audiophile the best place to buy your portable 
                           audio equipment.
                    </p>
                </div>
                <img className="imagecat5" src="https://i.ibb.co/mcym1z5/image-best-gear.jpg" alt="Audio-phone"/>

            </div>

        </div>
    )
}
export default ContentSpeaker;