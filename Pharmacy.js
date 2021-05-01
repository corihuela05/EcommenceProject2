import './Pharmacy.css';
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

function Pharmacys () {
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
    <div class="pharmacyadjust">
    <div class="pharmacycard1">
        <img src="https://i5.walmartimages.com/asr/b69f74a9-2458-4ca1-a87e-3b77091eb0c4.141d935cfaa5662076b6e3d795d8af24.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff" alt="thermoeter" height="130" width="180"/>
        <h1>iProven Forehead Thermometer</h1>
         <p class="price">$24.99</p>
        <p>The iProven Forehead Thermometer for Adults measures the temperature of the body. With the powerful technology of the infrared sensor.</p>
        <p><button>Add to Cart</button></p>
    </div>
    
    <div class="pharmacycard2">
        <img src="https://i5.walmartimages.com/asr/3169b492-877d-4aad-afaf-c63e64eddae6.df3e6c82f4d1182544ceca55ad68966a.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff" alt="advil" height="130" width="180"/>
        <h1>Advil Coated Tablets</h1>
         <p class="price">$14.97</p>
        <p>Headache, muscle aches, backaches, menstrual pain, and pains from the common cold, nothing's stronger on tough pain than Advil.</p>
        <p><button>Add to Cart</button></p>
    </div>
    
    <div class="pharmacycard3">
        <img src="https://i5.walmartimages.com/asr/894a1912-0686-4334-9f63-f30f839cf25c.bdbd1d555218c0b05bcae6dfa1e1f447.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff" alt="ankle" height="130" width="180"/>
        <h1>ACE Ankle Stabilizer</h1>
         <p class="price">$13.05</p>
        <p>Sometimes, all you need to stay in the game is a bit of support, and that's just what the ACE Brand Deluxe Ankle Stabilizer gives you.</p>
        <p><button>Add to Cart</button></p>
    </div>
    
    <div class="pharmacycard4">
        <img src="https://i5.walmartimages.com/asr/81c24a4b-8e84-4c12-8382-bc49ac2d18a3.b23387ea4399d94cad4d97bf0c9435d7.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff" alt="nyquil" height="130" width="180"/>
        <h1>Vicks Dayquil & Nyquil </h1>
         <p class="price">$16.94</p>
        <p>The Power of VICKS brought to you by the world's #1 selling cough and cold brand! Get powerful DayQuil/NyQuil SEVERE Liquid.</p>
        <p><button>Add to Cart</button></p>
    </div>
    
    
    <div class="pharmacycard5">
        <img src="https://i5.walmartimages.com/asr/80718e3b-6559-41be-a061-246369497b8a.f1910fd8e19997499870c6331813aaba.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff" alt="wrist" height="130" width="180"/>
        <h1>ACE Deluxe Wrist Brace</h1>
         <p class="price">$16.84</p>
        <p>Get back to doing what you love with the strong, stabilizing comfort of the ACE Deluxe Wrist Stabilizer.</p>
        <p><button>Add to Cart</button></p>
    </div>
    
    <div class="pharmacycard6">
        <img src="https://i5.walmartimages.com/asr/1c497c51-476b-4865-a581-48e3fed8ebe2_2.6e73464aa4956338a5df34ebb1ece449.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff" alt="bandages" height="130" width="180"/>
        <h1>Flexible Fabric Bandages</h1>
         <p class="price">$4.97</p>
        <p>Protect minor cuts, scrapes, and burns from infection with Equate Antibacterial Flexible Fabric Bandages.</p>
        <p><button>Add to Cart</button></p>
    </div>
    
    <div class="pharmacycard7">
        <img src="https://i5.walmartimages.com/asr/7603d9bc-9ff6-4e0d-9c02-cfd3975bbd46_1.3ebca4a1524094c57d711b5ef485e459.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff" alt="tylenol" height="130" width="180"/>
        <h1>Tylenol Extra Strength Caplets</h1>
         <p class="price">$14.97</p>
        <p>Tylenol Extra Strength caplets help reduce fever and provide temporary relief of minor aches and pains.</p>
        <p><button>Add to Cart</button></p>
    </div>
    
    <div class="pharmacycard8">
        <img src="https://i5.walmartimages.com/asr/e55792dd-e44e-4ffd-8c84-3d06b35aa0a7_1.c0dbb9d423564090dfffb3bd0350081d.png?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff" alt="drops" height="130" width="180"/>
        <h1>Lubricant eye drops</h1>
         <p class="price">$9.84</p>
        <p>Make your dry eyes feel better with the drops doctors recommend.Refresh Tears® Lubricant Eye Drops instantly moisturizes and relieves dry.</p>
        <p><button>Add to Cart</button></p>
    </div>
    
    <div class="pharmacycard9">
        <img src="https://i5.walmartimages.com/asr/f39a9d55-311a-4438-95dc-59a8cf8d45a9_1.7367cd50e770091ceeec65d49c3d2d89.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff" alt="vitaminc" height="130" width="180"/>
        <h1>Spring Valley Vitamin C Tablets</h1>
         <p class="price">$8.88</p>
        <p>Vitamin C is a potent antioxidant and an essential nutrient that may support immune, cardiovascular, and bone health..</p>
        <p><button>Add to Cart</button></p>
    </div>
    
    <div class="pharmacycard10">
        <img src="https://i5.walmartimages.com/asr/988b0a72-330a-4262-a511-f229e8f91648.47455c2a58affce40957a01708cb29cb.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff" alt="biofreeze" height="130" width="180"/>
        <h1>Biofreeze Pain Relieving Gel</h1>
         <p class="price">$11.98</p>
        <p>Biofreeze 3 oz. gel tube is well-suited for application on small and large muscle areas; the unique cooling menthol formula applies easily.</p>
        <p><button>Add to Cart</button></p>
    </div>
    
    <div class="pharmacycard11">
        <img src="https://i5.walmartimages.com/asr/4e83b9c1-0f63-46d9-b30a-495d78ba5f68.c3b2d66932ef711c12c970915cd805e3.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff" alt="b12" height="130" width="180"/>
        <h1>Vitamin B12 Tablets</h1>
         <p class="price">$7.88</p>
        <p>Keep your body fueled with these Spring Valley Vitamin B12 Tablets. Paired with the right diet, help support your metabolism, nervous system.</p>
        <p><button>Add to Cart</button></p>
    </div>
    
    <div class="pharmacycard12">
        <img src="https://i5.walmartimages.com/asr/43131936-7421-4996-b15b-f07f8e93736f.4bf6d342bbb7b2f6be9d8bc79b5f0fed.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff" alt="icyhot" height="130" width="180"/>
        <h1>Icy Hot Medicated Pain Relief Spray</h1>
         <p class="price">$9.06</p>
        <p>Experience powerful pain relief at the push of a button. Icy Hot Maximum Strength Medicated Pain Relief Dry Spray provides fast-acting.</p>
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

export default Pharmacys;
