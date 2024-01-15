import React from "react";
import Pages from "./Pages";
import './Pages.css';
import './ContentEarfone.css'

const ContentEarfone = () => {

    return (
        <div>
            <div className="category1">
                <div className="imagecat1">
                    <img className="image1" src="https://i.ibb.co/5xRFkKn/image-category-thumbnail-earphones.png" alt="earpiece" />
                </div>
                <div className="textcat1">
                    <h5 className="head1">NEW PRODUCT</h5>
                    <h5 className="headcat1">YX1 WIRELESS EARPHONES</h5>
                    <p className="paracat1">
                    Tailor your listening experience with bespoke dynamic drivers 
                    from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity 
                    sound even in noisy environments with its active 
                    noise cancellation feature.
                    </p>
                    <button className="but1">SEE PRODUCT</button>
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
export default ContentEarfone;