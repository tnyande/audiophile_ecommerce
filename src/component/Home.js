import React from "react";
import './Home.css';

const Home = () => {

    return (
        <div className="container-home">
            <div className="category">
                <div className="card">
                    <img className="catImage" src="https://i.ibb.co/J7rW0QV/image-category-thumbnail-headphones.png" alt="headfones"/>
                    <div  className="innercard">
                        <p className="innerCard2">HEADPHONES</p>
                        <button className="but-cat">SHOP> </button>
                    </div>

                </div>
                <div className="card">
                    
                    <img src="https://i.ibb.co/MnXGksm/image-category-thumbnail-speakers.png" className="catImage" alt="speaker" />
                    
                    <div  className="innercard">
                        <p className="innerCard2">SPEAKERS</p>
                        <button className="but-cat">SHOP> </button>
                    </div>

                </div>
                <div className="card">
                    <img className="catImage" src="https://i.ibb.co/5xRFkKn/image-category-thumbnail-earphones.png" alt="earpiece" />
                    <div  className="innercard">
                        <p className="innerCard2">EARPHONES</p>
                        <button className="but-cat">SHOP> </button>
                    </div>

                </div>
            </div>
            <div className="category2">
                <img className="imagecat2" src="https://i.ibb.co/MnXGksm/image-category-thumbnail-speakers.png"  alt="speaker"/>
                
                <div className="textcat2">
                <h5 className="headcat2"> ZX9 SPEAKER</h5>
                <p className="paracat2" >Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
                <button className="butcat2">See Product </button>
                </div>
            </div>
            <div className="category3">
                
            <div className="textcat3">
                <img className="imagecat3" src="https://i.ibb.co/yn38dty/image-speaker-zx7.jpg speaker" alt="speaker-table" />
                    <div className="textcats3" >
                    <h5 className="headcat3">ZX7 SPEAKER</h5>
                        <button className="butcat3">See Product</button>
                    </div>
                </div>
            </div>
            <div className="category4">
                <img className="imagecat4" src="https://i.ibb.co/jwM2rGy/image-earphones-yx1.jpg" alt="earphone-case" />
                
                <div className="textcat4">
                    <div className="textonly4">
                        <h4 className="headcat4">YX1 EARPHONES</h4>
                        <button className="butcat4">See Product</button>
                    </div>
                </div>

            </div>

            <div className="category5">
                <div className="textcat5">
                    <h5 className="headcat5">BRINGING YOU THE BEST AUDIO GEAR</h5>
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

export default Home ;