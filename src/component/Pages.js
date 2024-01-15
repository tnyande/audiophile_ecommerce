import React from "react";
import './Pages.css'

const Pages = () => {
    return (
        <div>
                        <div className="category">
                <div className="card">
                    <img className="catImage" src="https://i.ibb.co/J7rW0QV/image-category-thumbnail-headphones.png" alt="headfones"/>
                    <div  className="innercard">
                        <p className="innerCard2">HEADPHONES</p>
                        <button className="but-cat">SHOP </button>
                    </div>

                </div>
                <div className="card">
                    
                    <img src="https://i.ibb.co/MnXGksm/image-category-thumbnail-speakers.png" className="catImage" alt="speaker" />
                    
                    <div  className="innercard">
                        <p className="innerCard2">SPEAKERS</p>
                        <button className="but-cat">SHOP</button>
                    </div>

                </div>
                <div className="card">
                    <img className="catImage" src="https://i.ibb.co/5xRFkKn/image-category-thumbnail-earphones.png" alt="earpiece" />
                    <div  className="innercard">
                        <p className="innerCard2">EARPHONES</p>
                        <button className="but-cat">SHOP </button>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Pages;