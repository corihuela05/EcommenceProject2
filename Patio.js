import './Patio.css';
import React from "react";
import ReactDOM from 'react-dom';
import Shop from "./Shop";
import Product from "./Product";
import App from "./App"
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
import Pets from './Pets';
import Pharmacy from './Pharmacy';
import Auto from './Auto';
import Music from './Music';
import Homeandfurnitures from './homeandfurniture';
import School from './Schools';
import Termofservice from './Termofservices';
import FoodProducts from './food_products';
import Ourads from './Ourads'
import ClothingProducts from './clothing_products';
import ArtProducts from './art_products';
import Church from './Church';
import Gettoknowus from './Gettoknowus';
import { useState } from "react";
import Privacyandsecurity from './privacyandsecurity';
import Donotsellmyinfo from './donotsellmyinfo';
import Ourcompany from './ourcompany';
import Caprivacy from './caprivacy';
import Accessibilitty from './accessibility';
import Returnpage from './returnpage';
import TaxExcemptpage from './taxExcemptpage';


function Patios () {
   const [isLoggedIn, setIsLoggedIn] = useState(
        localStorage.getItem("isLoggedIn")
    );

    const [username, setUsername] = useState(localStorage.getItem("username"));


    function handleuserlogout() {
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("username");
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
    <img src="logo.png" alt='company logo' className="companylogo" />
    <img src="https://media1.tenor.com/images/3ced764a2cb7ad33ddf2145edb9904ae/tenor.gif?itemid=4320892" alt='flag' className="flag" />
     <div className="searchbar">
        <input type="text" name="search" placeholder="Search.." />
        <button type="submitsearch"><i class="fa fa-search"></i></button>
      </div>
    <form onSubmit={handleHome}>
      <button id="homebutton">Home</button>
    </form>
              {isLoggedIn ? (
                  <div>
                      <div>
                          <form>
                              <button id="info">{username}</button>
                          </form>
                      </div>
                      <div>
                          <form onSubmit={handleuserlogout}>
                              <button id="info1">Logout</button>
                          </form>
                      </div>
                  </div>
              ) : (
                      <>
                          <form onSubmit={handleuserlogin}>
                              <button id="info">Login</button>
                          </form>
                          <form onSubmit={handleAccount}>
                              <button id="info1">Sign Up</button>
                          </form>
                      </>
                  )}

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css"/>
    <form onSubmit={handleCart}>
      <button id="cart"><span className="glyphicon glyphicon-shopping-cart"></span>  Your Cart</button>
    </form>
    <div className="homepagesidebar">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
    <input type="checkbox" id="check"/>
    <label for="check">
      <i class="fa fa-bars" id="openbutton"></i>
      <i class="fa fa-close" id="cancelbutton"></i>
    </label>
                    <div className="sidebar">
                        <form onSubmit={handleHome}>
                            <button class="homex" > Home</button>
                        </form>
                        <form onSubmit={handleProduct}>
                            <button class="productx" >Products</button>
                        </form>
                        <form onSubmit={handleProfile}>
                            <button class="profilex" >Profile</button>
                        </form>
                        <form onSubmit={handleShop}>
                            <button class="shopx" >Shop</button>
                        </form>
                        <form onSubmit={handleNonprofit}>
                            <button class="homex" >Non Profits</button>
                        </form>
                        <form onSubmit={handlevideogame}>
                            <button class="toysandgamesx" >Toys, Games and Video Games</button>
                        </form>
                        <button onClick={handleclothingProducts} class="clothingx" >Clothing, Shoes, & Accessories</button>

                        <form onSubmit={handleHomeandfurnitures}>
                            <button class="appliancesx"> Home, Furniture & Appliances</button>
                        </form>

                        <button class="musicx" >Music</button>
                        <button class="patiox" >Patio & Garden</button>
                        <button onClick={handlefoodProducts} >Food</button>
                        <button class="petsx" >Pets</button>
                        <button class="pharmarcyandcarex" >Pharmacy, Health & Personal Care</button>

                        <form onSubmit={handlesports}>
                            <button class="sportsx" >Sports, Fitness & Outdoors</button>
                        </form>

                        <button onClick={handlebeautyProducts} class="beautyx" >Beauty</button>


                        <button class="autox" >Auto & Tire</button>
                        <button onClick={handleartProducts} class="artproductsx">Art, Craft, Sewing & Party Supplies</button>
                    </div>
                </div>S
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


    <div class="patioadjust">
    <div class="patiocard1">
        <img src="https://i5.walmartimages.com/asr/aed80d95-a80d-4c8f-b81c-0e9dc8de36e8_1.b0cd20db797f6b15b0d08ed1c978e3c6.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff" alt="diningset" height="130" width="180"/>
        <h1>Mainstays Albany Patio Dining Set</h1>
         <p class="price">$149.98</p>
        <p>The Albany Lane Six-Piece Folding Dining set is ideal for small gatherings, on smaller decks and patios.</p>
        <p><button>Add to Cart</button></p>
    </div>
    
    <div class="patiocard2">
        <img src="https://i5.walmartimages.com/asr/a9be9de1-370e-4e28-8c68-2c65f369c728.943dbbd6409e65c5067064138a965152.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff" alt="umbrella" height="130" width="180"/>
        <h1>Hanging Market Patio Umbrella</h1>
         <p class="price">$149.99</p>
        <p>360-DEGREE ROTATION: Conveniently rotates 360 degrees by simply stepping on the foot pedal and turning the pole with your hands.</p>
        <p><button>Add to Cart</button></p>
    </div>
    
    <div class="patiocard3">
        <img src="https://i5.walmartimages.com/asr/c2be8288-343b-46bb-890d-41d34c675429.fd13571960f9b1d608901c4f43f035f6.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff" alt="chair" height="130" width="180"/>
        <h1>Outdoor Kid's Egg Chair</h1>
         <p class="price">$127.99</p>
        <p>Give your little ones a stylish place to sit all their own with the Better Homes & Gardens Ventura Stationary Outdoor Kid's Egg Chair. .</p>
        <p><button>Add to Cart</button></p>
    </div>
    
    <div class="patiocard4">
        <img src="https://i5.walmartimages.com/asr/50c28031-4404-4c3f-a0ff-dde0ce4471ea_1.30d02dc789f4f2eefa49e6848d3b4df9.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff" alt="light" height="130" width="180"/>
        <h1>Black Solar Path Lights </h1>
         <p class="price">$59.99</p>
        <p>The Pathway Light Pack adds a decorative touch to your pathway, patio or garden and provides a variety of lighting options for landscape design.</p>
        <p><button>Add to Cart</button></p>
    </div>
    
    
    <div class="patiocard5">
        <img src="https://i5.walmartimages.com/asr/b49f4438-07f3-44a0-ac8f-1f1310bdb177.75924dec95e023f147d5c4bf44789e51.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff" alt="solarlight" height="130" width="180"/>
        <h1>Outdoor Garden Hanging Lantern</h1>
         <p class="price">$27.99 was $59.99</p>
        <p>Decorative garden light with candle lantern design adds ambience to any space. Classice warm white LED,imitate light of candle.</p>
        <p><button>Add to Cart</button></p>
    </div>
    
    <div class="patiocard6">
        <img src="https://i5.walmartimages.com/asr/76d97da5-c69a-4896-870b-c96f205c7dad_2.407d21d1985b6a09b35022c643b08acd.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff" alt="pillow" height="130" width="180"/>
        <h1>Rectangle Accent Pillow</h1>
         <p class="price">$28.52</p>
        <p>Add a stylish and contemporary accent to your outdoor furniture with this set of two Greendale Home Fashions rectangle accent pillows.</p>
        <p><button>Add to Cart</button></p>
    </div>
    
    <div class="patiocard7">
        <img src="https://i5.walmartimages.com/asr/a288f438-d110-41ed-aa25-fa0d2f5df690_1.a3dc3fd6d3bdcb982f1823d0b1d7d5b0.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff" alt="chime" height="130" width="180"/>
        <h1>Solar Color Wind Chime</h1>
         <p class="price">$13.98</p>
        <p>Great for brightening and embellishing your balcony, garden, pathway and child room, 6pcs upgraded thickened Humming Bird.</p>
        <p><button>Add to Cart</button></p>
    </div>
    
    <div class="patiocard8">
        <img src="https://i5.walmartimages.com/asr/b8f6aea3-090e-4219-b13f-207f981c491e_1.cbb28a80750a2da04beab605fc83caff.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff" alt="welcome" height="130" width="180"/>
        <h1>Flag summer flip flops shoreline</h1>
         <p class="price">$8.99</p>
        <p>Authentic Briarwood Lane Craftsmanship. 100% All-Weather UV Safe Polyester for Exceptional Fade Resistance - 12.5" x 18".</p>
        <p><button>Add to Cart</button></p>
    </div>
    
    <div class="patiocard9">
        <img src="https://i5.walmartimages.com/asr/e169d008-9325-4381-b785-710f212a75ac.b041945a671d4a2f5aaf31bd2176b2ba.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff" alt="set" height="130" width="180"/>
        <h1>Costway 4 PCS Set</h1>
         <p class="price">$269.99</p>
        <p>This 4-piece patio rattan wicker furniture set includes 2 single sofa, loveseat and coffee table, which is ideal for both indoor and outdoor use.</p>
        <p><button>Add to Cart</button></p>
    </div>
    
    <div class="patiocard10">
        <img src="https://i5.walmartimages.com/asr/f05a875f-e198-4ddf-9c2b-5897cd06a1be_1.ff41f5ca2229ac421481960800228adf.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff" alt="3set" height="130" width="180"/>
        <h1>Garden Wicker Chairs 3 Pieces</h1>
         <p class="price">$159.95</p>
        <p>Our patio rattan conversation set includes 1 table and 2 chairs. It will help you to enjoy a wonderful relaxing time after hard work.</p>
        <p><button>Add to Cart</button></p>
    </div>
    
    <div class="patiocard11">
        <img src="https://i5.walmartimages.com/asr/3aee8a5c-b22a-403b-9e8a-4e2a44399143_1.e05695fc45ab8f46b3d8084b51c1fec5.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff" alt="bench" height="130" width="180"/>
        <h1>Garden Bench Porch</h1>
         <p class="price">$89.99</p>
        <p>The Garden Bench is powder coated with rust-resistant finish, super smooth. The Park Bench is made of reinforced steel to ensure sturdiness.</p>
        <p><button>Add to Cart</button></p>
    </div>
    
    <div class="patiocard12">
        <img src="https://images-na.ssl-images-amazon.com/images/I/613pujlbUnL._AC_SY450_.jpg" alt="bistro" height="130" width="180"/>
        <h1>3-Piece Outdoor Bar Height Bistro</h1>
         <p class="price">$149.97</p>
        <p>Relax outdoors with the stylish Mainstays Sand Dune 3-Piece Outdoor Bistro Set. It is ideal for your garden.</p>
        <p><button>Add to Cart</button></p>
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
   </div>
 
    
  );
}

export default Patios;
