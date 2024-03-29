import './Pets.css';
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


function Pet () {
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

    <div class="petsadjust">
    <div class="petscard1">
        <img src="https://i5.walmartimages.com/asr/1177eadc-3bf7-416f-80f8-7c89bb8b23d4_1.b47115a7a567d597f05245baf0b88d88.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff" alt="cage" height="130" width="180"/>
        <h1>Prevue Pet Cage</h1>
         <p class="price">$33.10</p>
        <p>Keep your animal safe and secure with the Prevue Pet Products Deluxe Hamster and Gerbil Cage. It's made of a strong wire with 5/16" spacing, giving you a 360-degree view at all times. This hamster pet cage also features a spacious interior</p>
        <p><button>Add to Cart</button></p>
    </div>
    
    <div class="petscard2">
        <img src="https://i5.walmartimages.com/asr/247542bb-4793-47ee-a338-97e9d62924a8.f7010e79940075042e64b192db9a4a98.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff" alt="dogcage" height="130" width="180"/>
        <h1>Lucky Dog Sliding Double-Door Dog Crate</h1>
         <p class="price">$39.99</p>
        <p>Sliding door™ crate merges luxury functionality.</p>
        <p><button>Add to Cart</button></p>
    </div>
    
    <div class="petscard3">
        <img src="https://i5.walmartimages.com/asr/9d6eca79-37c8-4a4f-80e5-f83a7c4f5e93_2.8d8452a6a15b0fdcb93b498b6a40594a.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff" alt="fishtank" height="130" width="180"/>
        <h1>Aqua Culture 2.5-Gallon</h1>
         <p class="price">$22.97</p>
        <p>Aqua Culture 2.5-Gallon Corner View Aquarium Kit with LED Lighting and Power Filter comes complete with everything you need to set up.</p>
        <p><button>Add to Cart</button></p>
    </div>
    
    <div class="petscard4">
        <img src="https://i5.walmartimages.com/asr/019fcc16-8f78-4448-8a8d-aa788fb7df45.d2814e8dce93dd9d6aec513dd371bcd3.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff" alt="cat" height="130" width="180"/>
        <h1>Necoichi Portable Cat Cage</h1>
         <p class="price">$36.99</p>
        <p>The Necoichi Portable Stress Free Cat Cage is like a portable cat hotel and multi-purpose carrier in one versatile and stylish design.</p>
        <p><button>Add to Cart</button></p>
    </div>
    
    
    <div class="petscard5">
        <img src="https://i5.walmartimages.com/asr/01d10ef8-466b-4a1e-9c7e-237e26d4dc41_1.9a225c4144d51f7580b992915c63302d.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff" alt="fishfood" height="130" width="180"/>
        <h1>TetraFin Goldfish Flakes</h1>
         <p class="price">$3.10</p>
        <p>TetraFin Goldfish Flakes are a nutritionally complete daily diet for all goldfish and small koi. Use in aquariums and outdoors in small ponds.</p>
        <p><button>Add to Cart</button></p>
    </div>
    
    <div class="petscard6">
        <img src="https://i5.walmartimages.com/asr/4151a7ee-9d7d-407c-b6f6-ddc02dd7527d_1.142dc679fe57c75df6b4d1fd98d6ee1a.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff" alt="fishwater" height="130" width="180"/>
        <h1>(2 Pack) Jungle water Conditioner</h1>
         <p class="price">$5.34</p>
        <p>Make your fishbowl a happy for home for your Betta or Goldfish! Each pre-measured Bowl Buddies Fizz Tab makes tap water safe.</p>
        <p><button>Add to Cart</button></p>
    </div>
    
    <div class="petscard7">
        <img src="https://i5.walmartimages.com/asr/8afee5be-2c60-4307-bffe-488d618ef0b1.d8cd6886a8f50a12fbbc2cf8929131e8.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff" alt="dogfood" height="130" width="180"/>
        <h1>Nutrition Adult Dry Dog Food</h1>
         <p class="price">$25.83</p>
        <p>Give your dog the taste of succulent steak accented with hearty vegetables in PEDIGREE Adult Complete Nutrition Grilled Steak.</p>
        <p><button>Add to Cart</button></p>
    </div>
    
    <div class="petscard8">
        <img src="https://i5.walmartimages.com/asr/e46f51ec-0f75-47d8-bea7-20fe31a5d510_1.aa202ff8713138d743e4c9454e4818c8.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff" alt="headset" height="130" width="180"/>
        <h1>Meow Mix Dry Cat Food</h1>
         <p class="price">$19.94</p>
        <p>Meow Mix Original Choice Dry Cat Food is specially formulated to help adult cats stay healthy and happy.</p>
        <p><button>Add to Cart</button></p>
    </div>
    
    <div class="petscard9">
        <img src="https://i5.walmartimages.com/asr/f3196dc3-0fd2-4c0f-8178-95cfbd49bce2.f78a78d81e809bd7b2774a5e1ddb7f8b.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff" alt="petbed" height="130" width="180"/>
        <h1>"Vibrant Life Donut Pet Bed"</h1>
         <p class="price">$24.97</p>
        <p>Your pet will drift off to dreamland when they sleep in our lovely Vibrant Life Plush Donut Pet Bed. Perfect for snuggling, the plush.</p>
        <p><button>Add to Cart</button></p>
    </div>
    
    <div class="petscard10">
        <img src="https://images-na.ssl-images-amazon.com/images/I/71K%2BBExaOiL._AC_SL1500_.jpg" alt="fishnet" height="130" width="180"/>
        <h1>Aqua Culture Fish Net</h1>
         <p class="price">$5.99</p>
        <p>Portable Handle Landing Net Fishing Fish Angler Mesh for Fishermen Aquarium Fish Tank Goldfish Shrimp.</p>
        <p><button>Add to Cart</button></p>
    </div>
    
    <div class="petscard11">
        <img src="https://i5.walmartimages.com/asr/8401100a-cf1c-4768-a3dc-59b9f9e8728f_2.41a5bc4f05c9a3d2717ca2431c670342.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff" alt="dogcloth" height="130" width="180"/>
        <h1>Vibrant Life Dog Hoodie</h1>
         <p class="price">$8.82</p>
        <p>With this Vibrant Life Blue Banana Print Dog Hoodie, your pup will be able to flaunt their personal style in complete comfort.</p>
        <p><button>Add to Cart</button></p>
    </div>
    
    <div class="petscard12">
        <img src="https://i5.walmartimages.com/asr/2205ff17-b522-4e18-8185-2cedcf207b7e_3.3c790cc0b95de65038a5fb87ff3f198a.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff" alt="fishgravel" height="130" width="180"/>
        <h1>(2 Pack) Aquarium Gravel</h1>
         <p class="price">$9.88</p>
        <p>Small Pebbles Aquarium Gravel Additional Uses - Hobbies and crafts - Ponds - TerrariumsAqua Culture Co. Small Pebbles Aquarium Gravel, 5 lbs.</p>
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

export default Pet;
