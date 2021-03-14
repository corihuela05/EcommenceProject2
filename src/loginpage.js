import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './Cart.css';
import App from "./App";
import Shop from "./Shop";
import Next from "./Shipping";
import Carthome from "./App";
import Cartshop from "./Shop";

function Cart() {
    const [count, setCount] = useState(1)
    
    function decrementCount() {
        setCount(prevCount => prevCount - 1)
    }
    
    function incrementcount() {
        setCount(prevCount => prevCount + 1)
    }
    function handleHome(){
      ReactDOM.render(<App />,document.getElementById('root'));
    }
    function handleShop(){
      ReactDOM.render(<Shop />,document.getElementById('root'));
    }
    function handleNext(){
      ReactDOM.render(<Next />,document.getElementById('root'));
    }
    function handleCarthome(){
     ReactDOM.render(<Carthome />,document.getElementById('root'));
   }
   function handleCartshop(){
     ReactDOM.render(<Cartshop />,document.getElementById('root'));
   }
    
    
  return (
    <div className="hello">
        <button className="pro1"onClick={decrementCount}>-</button>
        <span className="pro13">{count}</span>
        <button className="pro12" onClick={incrementcount}>+</button>
      <div className="topright">
      <form onSubmit={handleCarthome}>
      <button className="tophome">Home</button>
      </form>
      <button className="topabout">About</button>
      <form onSubmit={handleCartshop}>
      <button className="topshop">Shop</button>
      </form>
      <button className="tophelp">Help</button>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css"/>
        <button className="carts"><span className="glyphicon glyphicon-shopping-cart"></span>  Your Cart</button>
        
    </div>
    
    <div className="threesteps">
      <button className="b7">1.Shopping Cart</button>
      <button className="b8">2.Shipping Details</button>
      <button className="b9">3.Payment Options</button>
    </div>

    
    <div className="detailsinfo">
      <h1>Shopping Cart</h1>
      </div>
      
      
    <div className="summaryinfo">
      <h1>Summary</h1>
    </div>
    
    <div class="cards3">
     <img className="nicheno"src="https://assets.adidas.com/images/w_600,f_auto,q_auto/9c7058d8677742ac8519ac3f009cdcf4_9366/Tiro_21_Track_Pants_Black_GH7305_21_model.jpg" alt="Pant"/>
     <p6 className="productname3">TIRO 21 TRACK PANTS</p6>
     <p5 className="price3">$45</p5>
    </div>
     
    <div class="cards4">
     <img className="uparno"src="https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/913bf76315384452a583aa12002a1311_9366/Badge_of_Sport_Tee_Red_FI7031_41_detail.jpg" alt="Tshirt"/>
     <p8 className="productname4">BADGE OF SPORT TEE</p8>
     <p7 className="price4">$25</p7>
    </div>
    
    <button className="pro2"onClick={decrementCount}>-</button>
    <span className="pro23">{count}</span>
    <button className="pro22" onClick={incrementcount}>+</button>
     
    <div class="amount1">
     <p4 className="sub1">SUBTOTAL $70</p4>
     <p2 className="ship1">SHIPPING  FREE</p2>
     <p3 className="tax1">TAXES  $4.90</p3>
     <p12 className="total1">TOTAL  $74.90</p12>
     <p11 className="voucher1">HAVE A VOUCHER?</p11>
    </div>
    
    <input type="text10" id="fname" name="copoun" placeholder="Voucher #"/>
    
    <div class="verticalline7"></div>
    
    <div class="horline"></div>
    
    <div className="cartbot">
      <form onSubmit={handleNext}>
      <button className="cn1">Next</button>
      </form>
      <form onSubmit={handleHome}>
      <button className="cn2">Cancel</button>
      </form>
    </div>
    
    <div className="productfooter">
    <form onSubmit={handleHome}>
      <button className="homePosition">Home</button>
    </form>  
      <button className="aboutPosition">About</button>
    <form onSubmit={handleShop}>
      <button className="shopPosition">Shop</button>
    </form>
      <button className="helpPosition">Help</button>
    </div>
    <div className="productcopyright">
      <p>© Greyson</p>
    </div>
    
    </div>
  );
}

export default Cart;