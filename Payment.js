import React from "react";
import './Payment.css';
import Shop from "./Shop";
import ReactDOM from 'react-dom';
import App from "./App";
import Product from "./Product";
import Paycancel from "./Shipping";
import Payhome from "./App";
import Payshop from "./Shop";
import Cart from './Cart';
import Nonprofit from "./Nonprofit";
import Account from './Account';
import FormSignup from './userlogin';
import BeautyProducts from './beauty_products';
import Profile from './Profile';
import Videog from './Videogame';
import Sportpro from './Sports';
import Baby from './Baby';
import Patio from './Patio';
import Auto from './Partnerapplication';
import Pets from './Pets';
import Pharmacy from './Pharmacy';
import Music from './Music';
import Homeandfurnitures from './homeandfurniture';
import School from './Schools';
import Termofservice from './Termofservices';
import FoodProducts from './food_products';
import Ourads from './Ourads';
import ClothingProducts from './clothing_products';
import ArtProducts from './art_products';
import Church from './Church';
import Gettoknowus from './Gettoknowus';
import Privacyandsecurity from './privacyandsecurity';
import Donotsellmyinfo from './donotsellmyinfo';
import Ourcompany from './ourcompany';
import Caprivacy from './caprivacy';
import Accessibilitty from './accessibility';
import Returnpage from './returnpage';
import TaxExcemptpage from './taxExcemptpage';
import AnimatedButton from 'react-animated-button';
import { useState } from "react";

function Payment() {
    const [isLoggedIn, setIsLoggedIn] = useState(
        localStorage.getItem("isLoggedIn")
    );

    const [username, setUsername] = useState(localStorage.getItem("username"));

    function loginButton(props) {
        <div>
            <form onSubmit={handleuserlogin}>
                <button id="info">Login</button>
            </form>
            <form onSubmit={handleAccount}>
                <button id="info1">Sign Up</button>
            </form>
        </div>;
    }

    /*  function logout(props) {
          <form onSubmit={handleuserlogout}>
              <button id="info">Logout</button>
          </form>;
          isLoggedIn = false;
      }*/
    function handleuserlogout() {
        /*ReactDOM.render(
            <App isLoggedIn={false} />,
            document.getElementById("root")
            );*/
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("username");
    }

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
    function handlePrivacyandsecurity() {
        ReactDOM.render(<Privacyandsecurity />, document.getElementById('root'));
    }

    function handleOurcompany() {
        ReactDOM.render(<Ourcompany />, document.getElementById('root'));
    }


    function handleTaxExcemptpage() {
        ReactDOM.render(<TaxExcemptpage />, document.getElementById('root'));
    }
    function handlefoodProducts() {
        ReactDOM.render(<FoodProducts />, document.getElementById('root'));
    }

    function handleReturnpage() {
        ReactDOM.render(<Returnpage />, document.getElementById('root'));
    }
    function handleCaprivacy() {
        ReactDOM.render(<Caprivacy />, document.getElementById('root'));
    }


    function handleAccessibility() {
        ReactDOM.render(<Accessibilitty />, document.getElementById('root'));
    }

    function handleDonotsellmyinfo() {
        ReactDOM.render(<Donotsellmyinfo />, document.getElementById('root'));
    }
    function handleartProducts() {
        ReactDOM.render(<ArtProducts />, document.getElementById('root'));
    }
    function handlebeautyProducts() {
        ReactDOM.render(<BeautyProducts />, document.getElementById('root'));
    }

    function handleHomeandfurnitures() {
        ReactDOM.render(<Homeandfurnitures />, document.getElementById('root'));
    }

    function handleTermofservices() {
        ReactDOM.render(<Termofservice />, document.getElementById('root'));
    }
    function handleChurch() {
        ReactDOM.render(<Church />, document.getElementById('root'));
    }
    function handleHome() {
        ReactDOM.render(<App />, document.getElementById('root'));
    }
    function handleProduct() {
        ReactDOM.render(<Product />, document.getElementById('root'));
    }
    function handleShop() {
        ReactDOM.render(<Shop />, document.getElementById('root'));
    }
    function handleCart() {
        ReactDOM.render(<Cart />, document.getElementById('root'));
    }
    function handleNonprofit() {
        ReactDOM.render(<Nonprofit />, document.getElementById('root'));
    }

    function handleSchoolst() {
        ReactDOM.render(<School />, document.getElementById('root'));
    }


    function handleAccount() {
        ReactDOM.render(<Account />, document.getElementById('root'));
    }
    function handleuserlogin() {
        ReactDOM.render(<FormSignup />, document.getElementById('root'));
    }
    function handleProfile() {
        ReactDOM.render(<Profile />, document.getElementById('root'));
    }

    function handlevideogame() {
        ReactDOM.render(<Videog />, document.getElementById('root'));
    }
    function handlesports() {
        ReactDOM.render(<Sportpro />, document.getElementById('root'));
    }

    function handlebaby() {
        ReactDOM.render(<Baby />, document.getElementById('root'));
    }

    function handlepatio() {
        ReactDOM.render(<Patio />, document.getElementById('root'));
    }

    function handlepets() {
        ReactDOM.render(<Pets />, document.getElementById('root'));
    }

    function handlepharmacy() {
        ReactDOM.render(<Pharmacy />, document.getElementById('root'));
    }

    function handleauto() {
        ReactDOM.render(<Auto />, document.getElementById('root'));
    }

    function handlemusic() {
        ReactDOM.render(<Music />, document.getElementById('root'));
    }

    function handleOurads() {
        ReactDOM.render(<Ourads />, document.getElementById('root'));
    }

    function handleGetknowus() {
        ReactDOM.render(<Gettoknowus />, document.getElementById('root'));
    }
    var url = ""
    if (username === "admin") {
        url = "ownerdashboard.html"
    }
    else if (username === "nonprofit") {
        url = "sponsordashboard.html"
    }
    else if (username === "seller") {
        url = "account.html"
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
    
          <footer class="products-site-footer">
              <h1>About Greyson</h1>
              <div className="footer1">
                  <button><img src="logo.png" alt='logo' width="150" height="150" />1717 Harrison St. Newark, NJ 07028,USA</button>

              </div>
              <div className="footer2">

                  <form onSubmit={handleGetknowus}>
                      <button>GET TO KNOW US</button>
                  </form>

                  <form onSubmit={handleOurcompany}>
                      <button>OUR COMPANY</button>
                  </form>

                  <form onSubmit={handleTaxExcemptpage}>
                      <button>Tax Exempt Program</button>
                  </form>

                  <form onSubmit={handleDonotsellmyinfo}>
                      <button>Do Not Sell My Information</button>
                  </form>

              </div>
              <div className="footer3">




                  <form onSubmit={handleReturnpage}>
                      <button>RETURNS</button>
                  </form>

                  <form onSubmit={handleAccessibility}>
                      <button>ACCESSIBILITY</button>
                  </form>

                  <button>ADVERTISE WITH US</button>
              </div>
              <div className="footer4">


                  <form onSubmit={handleOurads}>
                      <button>OUR ADS</button>
                  </form>

                  <form onSubmit={handleTermofservices}>
                      <button>TERMS OF SERVICE </button>
                  </form>

                  <form onSubmit={handlePrivacyandsecurity}>
                      <button>PRIVACY & SECURITY</button>
                  </form>


                  <form onSubmit={handleCaprivacy}>
                      <button>CA PRIVACY RIGHTS</button>
                  </form>


              </div>
              <div className="footer5">
                  <hr />
                  <p> Copyright © 2021 All Rights Reserved by Greyson</p>
              </div>

                </footer>
     
    </div>
    
  );
}

export default Payment;
