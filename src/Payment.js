import React from "react";
import './Payment.css';
import Shop from "./Shop";
import ReactDOM from 'react-dom';
import App from "./App";
import Paycancel from "./Shipping";
import Payhome from "./App";
import Payshop from "./Shop";

function Payment() {
    
    function handleHome(){
     ReactDOM.render(<App />,document.getElementById('root'));
    }
   function handleShop(){
     ReactDOM.render(<Shop />,document.getElementById('root'));
    }
   function handlepaycancel(){
     ReactDOM.render(<Paycancel />,document.getElementById('root'));
   }
   function handlePayhome(){
     ReactDOM.render(<Payhome />,document.getElementById('root'));
   }
   function handlePayshop(){
     ReactDOM.render(<Payshop />,document.getElementById('root'));
   }
  return (
    <div>
      <div className="topright">
      <form onSubmit={handlePayhome}>
      <button className="tophome">Home</button>
      </form>
      <button className="topabout">About</button>
      <form onSubmit={handlePayshop}>
      <button className="topshop">Shop</button>
      </form>
      <button className="tophelp">Help</button>
      <button className="carts"><span className="glyphicon glyphicon-shopping-cart"></span>  Your Cart</button>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css"/>
    </div>
    
    <div className="threesteps">
      <button className="b4">1.Shopping Cart</button>
      <button className="b5">2.Shipping Details</button>
      <button className="b6">3.Payment Options</button>
    </div>
    
    <div className="paymethod">
      <h1>Payment method</h1>
    </div>
    
  
    <input  className="option7" type="checkbox" id="vehicle2" name="type 4" value="Paypal"/>
    <label  className="option8" for="type 4">Paypal </label>
    <img className="pplogo" alt="pplogo"src="https://sm.pcmag.com/pcmag_in/review/p/paypal/paypal_mb8k.png"/>
    
    <div class="verticalline"></div> 
    
    <div className="cardnum">
        <div className="hhd">
        <input className="option5" type="checkbox" id="shipping" name="type 3" value="Credit Card"/>
        <label className="option6" for="type 3"> Credit Card </label>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
        <p><input type="ccnumber" id="ccnum" name="cardnumberss" placeholder="1111-2222-3333-4444" /><i id="visalogo" class="fa fa-cc-visa"></i><input type="expdate" id="expmonth" name="expmonth" placeholder="MM/YY"/><input type="cvv" id="cvv" name="cvv" placeholder="CVV"/></p>
        <input type="cardholname" id="chn" name="chn" placeholder="Card Holder Name"/>
        </div>
    </div>  
    
    
    <div className="summary">
      <h1>Summary</h1>
    </div>
    
    <div className="bottombutton">
      <button className="n3">Pay Now</button>
      <form onSubmit={handlepaycancel}>
        <button className="n4">Cancel</button>
      </form>
    </div>
    
    <div class="horline3"></div>
    
    <div class="cards1">
     <img className="pantc1"src="https://assets.adidas.com/images/w_600,f_auto,q_auto/9c7058d8677742ac8519ac3f009cdcf4_9366/Tiro_21_Track_Pants_Black_GH7305_21_model.jpg" alt="Pant"/>
     <p6 className="productnameofcart">TIRO 21 TRACK PANTS</p6>
     <p5 className="price1">$45</p5>
    </div>
     
    <div class="cardsc2">
     <img className="tshirtc2"src="https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/913bf76315384452a583aa12002a1311_9366/Badge_of_Sport_Tee_Red_FI7031_41_detail.jpg" alt="Tshirt"/>
     <p8 className="productnameofcart2">BADGE OF SPORT TEE</p8>
     <p7 className="price2">$25</p7>
    </div>
    
    <input type="text9" id="fname" name="copoun" placeholder="Voucher #"/>
      
  
    <div class="amount">
     <p4 className="sub">SUBTOTAL $70</p4>
     <p2 className="ship">SHIPPING  FREE</p2>
     <p3 className="tax">TAXES  $4.90</p3>
     <p12 className="total">TOTAL  $74.90</p12>
     <p11 className="voucher">HAVE A VOUCHER?</p11>
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

export default Payment;
