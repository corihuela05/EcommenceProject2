import React from "react";
import './Shipping.css';
import Paynext from"./Payment";
import Shop from "./Shop";
import ReactDOM from 'react-dom';
import App from "./App";
import Shipcancel from "./Cart";
import Shiphome from "./App";
import Shipshop from "./Shop";

function Shipping() {
    
    function handlePaynext(){
      ReactDOM.render(<Paynext />,document.getElementById('root'));
    }
    function handleHome(){
     ReactDOM.render(<App />,document.getElementById('root'));
    }
    function handleShop(){
     ReactDOM.render(<Shop />,document.getElementById('root'));
    }
    function handleShipcancel(){
     ReactDOM.render(<Shipcancel />,document.getElementById('root'));
   }
   function handleShiphome(){
     ReactDOM.render(<Shiphome />,document.getElementById('root'));
   }
   function handleShipshop(){
     ReactDOM.render(<Shipshop />,document.getElementById('root'));
   }
  return (
    <div>
      <div className="topright">
      <form onSubmit={handleShiphome}>
      <button className="tophome">Home</button>
      </form>
      <button className="topabout">About</button>
      <form onSubmit={handleShipshop}>
      <button className="topshop">Shop</button>
      </form>
      <button className="tophelp">Help</button>
      <button className="carts"><span className="glyphicon glyphicon-shopping-cart"></span>  Your Cart</button>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css"/>
      </div>
      
      <div className="threesteps">
      <button className="b1">1.Shopping Cart</button>
      <button className="b2">2.Shipping Details</button>
      <button className="b3">3.Payment Options</button>
      </div>
      
      <div className="details">
      <h1>Shipping Details</h1>
      </div>
      
      <div class="verticalline"></div> 
      
      <div className="summary">
      <h1>Summary</h1>
      </div>
      
      <input type="text1" id="fname" name="firstname" placeholder="First Name"/>
      <input type="text2" id="lname" name="lastname" placeholder="Last Name"/>
      <input type="text3" id="lname" name="address" placeholder="Address"/>
      <input type="text4" id="lname" name="address2" placeholder="Address 2"/>
      <input type="text5" id="lname" name="country" placeholder="Country"/>
      <input type="text6" id="lname" name="city" placeholder="City"/>
      <input type="text7" id="lname" name="zip/postal code" placeholder="Zip/Postal Code"/>
      <input type="text8" id="lname" name="phone number" placeholder="Phone Number"/>
      <input type="text9" id="fname" name="copoun" placeholder="Voucher #"/>
      
      <div class="horline2"></div>
      
      <div className="bottom">
      <form onSubmit={handlePaynext}>
        <button className="n1">Next</button>
      </form>
      <form onSubmit={handleShipcancel}>
        <button className="n2">Cancel</button>
       </form>
      </div>
      
     
     <input className="option1" type="checkbox" id="shipping" name="type 1" value="Free"/>
     <label className="option2" for="type 1"> Free Shipping (2-5 business days) </label>
     <input  className="option3" type="checkbox" id="vehicle2" name="type 2" value="Paid"/>
     <label  className="option4" for="type 2">Next day delivery - $20 (24 hours from checkout)  </label>
      
     <div class="cards1">
     <img className="pantc1"src="https://assets.adidas.com/images/w_600,f_auto,q_auto/9c7058d8677742ac8519ac3f009cdcf4_9366/Tiro_21_Track_Pants_Black_GH7305_21_model.jpg" alt="Pant"/>
     <p6 className="productnameofcart">TIRO 21 TRACK PANTS</p6>
     <p5 className="price1">$45</p5>
     </div>
     
     <div class="cards2">
     <img className="tshirtc2"src="https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/913bf76315384452a583aa12002a1311_9366/Badge_of_Sport_Tee_Red_FI7031_41_detail.jpg" alt="Tshirt"/>
     <p8 className="productnameofcart2">BADGE OF SPORT TEE</p8>
     <p7 className="price2">$25</p7>
     </div>
     
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
export default Shipping;
