import React from "react";
import './Payment.css';
import Shop from "./Shop";
import ReactDOM from 'react-dom';
import App from "./App";
import Paycancel from "./Shipping";
import Payhome from "./App";
import Payshop from "./Shop";
import Header from "./Header";
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
    <Header/>
      <div className="payementsliderslide">
    <div className="threesteps">
      <button className="b4">1.Shopping Cart</button>
      <button className="b36">2.Shipping Details</button>
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
      <button className="n3" id="paymentthumbnail">Pay Now</button>
      <form onSubmit={handlepaycancel}>
        <button className="n4" id="paymentthumbnail1">Cancel</button>
      </form>
    </div>
    
    <div class="horline3"></div>
    
    <div class="cards1">
     <img className="pantc1"src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6344/6344118_sd.jpg" alt="Pant"/>
     <p6 className="productnameofcart">Microsoft - Xbox Series S 512 GB</p6>
     <p5 className="price1">$299.99</p5>
    </div>
     
    <div class="cardsc2">
     <img className="tshirtc2"src="https://specials-images.forbesimg.com/imageserve/5eeb7b50706cd80006e3154c/960x0.jpg?cropX1=0&cropX2=680&cropY1=0&cropY2=453" alt="Tshirt"/>
     <p8 className="productnameofcart2">Sony - PlayStation 5 Console</p8>
     <p7 className="price2">$499.99</p7>
    </div>
    
    <input type="text9" id="fname" name="copoun" placeholder="Coupon Code"/>
      
  
    <div class="amount">
     <p4 className="sub">SUBTOTAL $799.98</p4>
     <p2 className="ship">SHIPPING  FREE</p2>
     <p3 className="tax">TAXES  $52.99</p3>
     <p12 className="total">TOTAL  $852.97</p12>
     <p11 className="voucher">HAVE A DISCOUNT CODE?</p11>
      <p77 className="contri">TOTAL CONTRIBUTION TO SPECIAL STRIDES</p77>
     <p78 className="contriNum1">$70.00</p78>
    </div>
    
  {/*  <div className="productfooter">
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
    </div> */}
     </div>
    </div>
    
  );
}

export default Payment;
