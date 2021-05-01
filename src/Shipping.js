import React from "react";
import './Shipping.css';
import Paynext from"./Payment";
import Shop from "./Shop";
import ReactDOM from 'react-dom';
import App from "./App";
import Shipcancel from "./Cart";
import Shiphome from "./App";
import Shipshop from "./Shop";
import Product from "./Product";
import Home from "./App"
import './App.css';
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
import Auto from './Auto';
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
     ReactDOM.render(<Videog />,document.getElementById('root'));
   }
   function handleShiphome(){
     ReactDOM.render(<Shiphome />,document.getElementById('root'));
   }
   function handleShipshop(){
     ReactDOM.render(<Shipshop />,document.getElementById('root'));
   }
    function handleclothingProducts() {
        ReactDOM.render(<ClothingProducts />, document.getElementById('root'));
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
   
    function handleReturnpage () {
        ReactDOM.render(<Returnpage  />, document.getElementById('root'));
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
    
    
    function CAPrivacyRights() {
        
        ReactDOM.render(<CAPrivacyRights />, document.getElementById('root'));
    }
    
    
    function TaxExemptProgram() {
        ReactDOM.render(<TaxExemptProgram/>, document.getElementById('root'));
}
    
    function Accessibility() {
        ReactDOM.render(<Accessibility/>, document.getElementById('root'));
    }
    
    
    function handleGetknowus(){
         ReactDOM.render(<Gettoknowus/>, document.getElementById('root'));
    }

  return (
    <div className="App">
            <div className="Appheader">
                <img src="logo.png" alt="company logo" className="companylogo" />
                <img
                    src="https://media1.tenor.com/images/3ced764a2cb7ad33ddf2145edb9904ae/tenor.gif?itemid=4320892"
                    alt="flag"
                    className="flag"
                />
                    <div className="searchbar">
                    <input type="text" name="search" placeholder="Search.." />
                    <button type="submitsearch"><i class="fa fa-search"></i></button>
                    </div>
                <form onSubmit={handleHome}>
                    <button id="homebutton">Home</button>
                </form>
                 <form onSubmit={handleuserlogin}>
                                <button id="info">Login</button>
                            </form>
                            <form onSubmit={handleAccount}>
                                <button id="info1">Sign Up</button>
                            </form>
                             <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css" />
                <form onSubmit={handleCart}>
                    <button id="cart"><span className="glyphicon glyphicon-shopping-cart"></span>  Your Cart</button>
                </form>
                <div className="homepagesidebar">
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
                    <input type="checkbox" id="check" />
                    <label for="check">
                        <i class="fa fa-bars" id="openbutton"></i>
                        <i class="fa fa-close" id="cancelbutton"></i>
 </label>
                     <div className="sidebar">
                        <form onSubmit={handleHome}>
                            <button class="homex" > Home</button>
                        </form>
                   
                        <form onSubmit={handlevideogame}>
                            <button class="toysandgamesx" >Toys, Games and Video Games</button>
                        </form>
                        <button onClick={handleclothingProducts} class="clothingx" >Clothing, Shoes, & Accessories</button>

                        <form onSubmit={handleHomeandfurnitures}>
                            <button class="appliancesx"> Home, Furniture & Appliances</button>
                        </form>
                      

                        <form onSubmit={handlevideogame}>

                        <button class="video games" >Video Games</button>                  
                        </form>
                        <button onClick={handlefoodProducts} >Food</button>
                       <button onClick={handlebeautyProducts} class="beautyx" >Beauty</button>
                        <button onClick={handleartProducts} class="artproductsx">Sewing & Party Supplies</button>
                         <form onSubmit={handlesports}>
                            <button class="sportsx" >Sports, Fitness & Outdoors</button>
                        </form>
                        <button class="petsx" >Pets</button>
                         <button class="musicx" >Music</button>
                        <button class="patiox" >Patio & Garden</button>
                        <button class="pharmarcyandcarex" >Health & Personal Care</button>

                         <button>Books</button>
                    <button>Fashion</button>
                    <button>Gift Cards</button>
                       


                        <button class="autox" >Auto & Tire</button>
                    </div>
                </div>
                <div className="tabs">
                    <button>Best Sellers</button>
                    <button>Today's Deals</button>
                    <button>Customer Service</button>
                    <button>New Releases</button>
                    <button>Near Me</button>
                    <button>Books</button>
                    <button>Fashion</button>
                    <button>Gift Cards</button>
                </div>
            </div>
      <div className="shippingsliderslide">
    <div className="threesteps">
      <button className="b41">1.Shopping Cart</button>
      <button className="b5">2.Shipping Details</button>
      <button className="b12">3.Payment Options</button>
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
      <input type="text9" id="fname" name="copoun" placeholder="Coupon Code"/>
      
      <div class="horline2"></div>
      
      <div className="bottom">
      <form onSubmit={handlePaynext}>
        <button className="n1" id="shippingthumbnail">Next</button>
      </form>
      <form onSubmit={handleShipcancel}>
        <button className="n2" id="shippingthumbnail1" >Cancel</button>
       </form>
      </div>
      
     
     <input className="option1" type="checkbox" id="shipping" name="type 1" value="Free"/>
     <label className="option2" for="type 1"> Free Shipping (2-5 business days) </label>
     <input  className="option3" type="checkbox" id="vehicle2" name="type 2" value="Paid"/>
     <label  className="option4" for="type 2">Next day delivery - $20 (24 hours from checkout)  </label>
      
     <div class="cards1">
     <img className="pantc1"src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6344/6344118_sd.jpg" alt="Pant"/>
     <p6 className="productnameofcart">Microsoft - Xbox Series S 512 GB</p6>
     <p5 className="price1">$299.99</p5>
     </div>
     
     <div class="cards2">
     <img className="tshirtc2"src="https://specials-images.forbesimg.com/imageserve/5eeb7b50706cd80006e3154c/960x0.jpg?cropX1=0&cropX2=680&cropY1=0&cropY2=453" alt="Tshirt"/>
     <p8 className="productnameofcart2">Sony - PlayStation 5 Console</p8>
     <p7 className="price2">$499.99</p7>
     </div>
     
     <div class="amount">
     <p4 className="sub">SUBTOTAL $799.98</p4>
     <p2 className="ship">SHIPPING  FREE</p2>
     <p3 className="tax">TAXES  $52.99</p3>
     <p12 className="total">TOTAL  $852.97</p12>
     <p11 className="voucher">HAVE A DISCOUNT CODE?</p11>
     <p77 className="contri">Total contribution to Special Strides</p77>
     <p78 className="contriNum">$70.00</p78>
     </div>
    
    </div>
    </div>
    
  );
}
export default Shipping;
