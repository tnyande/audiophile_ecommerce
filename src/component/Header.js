import Hero from './Hero';
import '../App.css' ;
import './Hero.css'


function Header() {
  return (
    <div>
      <div className="App">
       <Hero />
       <div className='App-Content'>
          <h4 className='product-head'>NEW PRODUCT</h4> 
          <p className='prod-sub'>XX99 MARK II HEADPHONES</p>
          
          <p className='prod-content'>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
              See Product  
          </p> 
          <button className='butt'>SEE PRODUCT</button>
       </div>
      </div>
      
    </div> 
   
  );
}

export default Header;
