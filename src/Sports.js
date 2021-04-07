import './Sports.css';
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
import Privacyandsecurity from './privacyandsecurity';
import Donotsellmyinfo from './donotsellmyinfo';
import Ourcompany from './ourcompany';
import Caprivacy from './caprivacy';
import Accessibilitty from './accessibility';
import Returnpage from './returnpage';
import TaxExcemptpage from './taxExcemptpage';

function Sport () {
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
   
  <form onSubmit={handleAccount}>
      <button id="info1">Sign Up</button>
    </form>
    <form onSubmit={handleuserlogin}>
      <button id="info">Login</button>
    </form>
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
                            <button>Home</button>
                        </form>
                        <form onSubmit={handleProduct}>
                            <button>Products</button>
                        </form>
                        <form onSubmit={handleProfile}>
                            <button>Profile</button>
                        </form>
                        <form onSubmit={handleShop}>
                            <button>Shop</button>
                        </form>
                        <form onSubmit={handleNonprofit}>
                            <button>Non Profits</button>
                        </form>
                        <button>Buy Again</button>
                        <button>List</button>
                        <button>Registry</button>
                        <button>Gift Finder</button>
                        <button>Gift Card</button>
                        <button>Black Owned Businesses</button>
                        <button>Women Owned Businesses</button>
                        <button>Help</button>
                        <button>Departments</button>
                        <button>Electronics & Office</button>




                        <form onSubmit={handlevideogame}>
                            <button>Toys, Games and Video Games</button>
                        </form>
                        <button onClick={handleclothingProducts} >Clothing, Shoes, & Accessories</button>

                        <form onSubmit={handleHomeandfurnitures}>
                            <button>Home, Furniture & Appliances</button>
                        </form>

                        <button>Home Improvement</button>
                        <button>Music</button>
                        <button>Patio & Garden</button>
                        <button onClick={handlefoodProducts} >Food</button>
                        <button>Pets</button>
                        <button>Pharmacy, Health & Personal Care</button>

                        <form onSubmit={handlesports}>
                            <button>Sports, Fitness & Outdoors</button>
                        </form>

                        <button onClick={handlebeautyProducts} >Beauty</button>


                        <button>Auto & Tire</button>
                        <button>Photos</button>
                        <button onClick={handleartProducts} >Art, Craft, Sewing & Party Supplies</button>
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


    <div class="sportadjust">
    <div class="sportcard1">
        <img src="https://www.thecricketsquare.com/wp-content/uploads/2019/01/MRF-Virat-Kohli-Run-Machine-English-Willow-Cricket-Bat-SH-2.jpg" alt="bat" height="130" width="180"/>
        <h1>MRF Legend VK 18</h1>
         <p class="price">$103.01</p>
        <p>The brand went to next level in the 1990’s when some of the world’s best batsmen wielded bats sponsored by MRF.</p>
        <p><button>Add to Cart</button></p>
    </div>
    
    <div class="sportcard2">
        <img src="https://i5.walmartimages.com/asr/fcc19c82-3182-49bd-8d05-cfd90199bc88.0675aa111eafcc66225336e5bca8d7b3.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff" alt="soccer" height="130" width="180"/>
        <h1>Umbro Tristar Soccer Ball</h1>
         <p class="price">$18.94</p>
        <p>More than a sport, soccer is a diverse community of passionate players, and with the Umbro Tristar Size 5 Soccer Ball.</p>
        <p><button>Add to Cart</button></p>
    </div>
    
    <div class="sportcard3">
        <img src="https://i5.walmartimages.com/asr/f7e31c14-076d-43bb-943c-0bd70a822910.023f322002ba0ca7d176d22ab9a6be45.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff" alt="basketballlls" height="130" width="180"/>
        <h1>Spalding NBA Basketball</h1>
         <p class="price">$29.94</p>
        <p>The Spalding NBA Max Grip 29.5" Basketball brings superior game development to the next level.</p>
        <p><button>Add to Cart</button></p>
    </div>
    
    <div class="sportcard4">
        <img src="https://i5.walmartimages.com/asr/71c070ba-7345-4599-b644-137be9a9a60f_1.03d28af839f167a152c1880da10bfa2f.png?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff" alt="nflhelmet" height="130" width="180"/>
        <h1>Riddell Speedflex Football Helmet</h1>
         <p class="price">$349.99</p>
        <p>The goal was to design a helmet with fully integrated components and innovations for peak athlete performanc.</p>
        <p><button>Add to Cart</button></p>
    </div>
    
    
    <div class="sportcard5">
        <img src="https://i5.walmartimages.com/asr/866d1f54-b619-4cb3-bfc3-2f2e1744a1ab_1.ca1a6cfc096557ae535dc98ed0bfcb42.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff" alt="vset" height="130" width="180"/>
        <h1>Park & Sun Sports Volleyball Set</h1>
         <p class="price">$154.99</p>
        <p>The Tournament Flex 1000 volleyball set includes everything needed for a fun and competitive outdoor volleyball game!.</p>
        <p><button>Add to Cart</button></p>
    </div>
    
    <div class="sportcard6">
        <img src="https://i5.walmartimages.com/asr/70443963-bee5-415e-a958-f910aa45a55f.bcff7740dbfd3668f28f0546a27d1713.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff" alt="footballnfl" height="130" width="180"/>
        <h1>Wilson American Football</h1>
         <p class="price">$79.99</p>
        <p>Wilson American FootballWilson American Football. NFL official size Ball. #1 Brand from NFL. Top rated.</p>
        <p><button>Add to Cart</button></p>
    </div>
    
    <div class="sportcard7">
        <img src="https://i5.walmartimages.com/asr/d453fd08-ca3f-468c-a2f6-0afe3d98190d_1.80e1e63b9daafafa7bba00017616cb5c.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff" alt="vollball" height="130" width="180"/>
        <h1>Wilson Soft Play Outdoor Volleyball</h1>
         <p class="price">$8.97 was $12.99</p>
        <p>For the beginners who are perfecting the fundamentals, or for players just looking to have fun with some friends.</p>
        <p><button>Add to Cart</button></p>
    </div>
    
    <div class="sportcard8">
        <img src="https://i5.walmartimages.com/asr/ac95c44f-1bb1-45f2-b421-3432a1c4485a_4.b1a1389b6a5e22d6e1d9cc9ad9cc1943.png?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff" alt="baseballglove" height="130" width="180"/>
        <h1>Rawlings Baseball Glove</h1>
         <p class="price">$49.50</p>
        <p>The Rawlings select Pro Lite Series offers an exciting collection of a popular Player designs to give aspiring big Leaguers the same glove styling.</p>
        <p><button>Add to Cart</button></p>
    </div>
    
    <div class="sportcard9">
        <img src="https://i5.walmartimages.com/asr/a836dd92-7398-4bf3-808b-3f8bce04269b_1.078a0e56ad5a01407a21858aa577ebf0.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff" alt="golf" height="130" width="180"/>
        <h1>Wilson Pro Golf Set</h1>
         <p class="price">$349.99</p>
        <p>Getting fit for custom clubs is a very popular trend in the golf industry today. The Profile SGI complete golf set is the only system in the world.</p>
        <p><button>Add to Cart</button></p>
    </div>
    
    <div class="sportcard10">
        <img src="https://i5.walmartimages.com/asr/5a8c4fe3-d0ba-45fd-b92e-75310e55418d_1.b489aa52c36a0d8e6f43312d8b051642.png?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff" alt="keyboard" height="130" width="180"/>
        <h1>EASTON REBEL Baseball Bat</h1>
         <p class="price">$18.94</p>
        <p>The Easton® Rebel™ is a one-piece design constructed ALX50 TM Aircraft Grade Alloy.It features a cushioned Flex™ grip.</p>
        <p><button>Add to Cart</button></p>
    </div>
    
    <div class="sportcard11">
        <img src="https://pbs.twimg.com/media/ExQBpJoXEAIgEmG.jpg" alt="csk" height="130" width="180"/>
        <h1>IPL Cricket Jersey CSK Team</h1>
         <p class="price">$99.99</p>
        <p>CSK's new jersey features camouflage as a tribute to the armed forces of the nation. It also features three stars above the team's logo on the shirt.</p>
        <p><button>Add to Cart</button></p>
    </div>
    
    <div class="sportcard12">
        <img src="https://i5.walmartimages.com/asr/8f51bb37-8aaa-4b70-9563-d0ed001f9a72.493f59c859d27c6fdc00c656c3b2e2ea.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff" alt="trampoline" height="130" width="180"/>
        <h1>Outdoor Trampoline</h1>
         <p class="price">$789.99</p>
        <p>2020 the new Zupapa Trampoline employs upgraded techniques and technology to make products have a longer life..</p>
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
                        
                        <button> VENDOR DIRECTORY</button>
                        <button>HELP CENTER</button>
                        <button>CONTACT US</button>
                    
                    </div>
                    <div className="footer3">
                    
                   
                            
                            
                        <form onSubmit={handleReturnpage}>
                        <button>RETURNS</button>
                        </form>         
                        
                        <button>PRODUCT RECALLS</button>
                        
                        <form onSubmit={handleAccessibility}>
                        <button>ACCESSIBILITY</button>
                        </form>                        
                        
                        <button>ADVERTISE WITH US</button>
                         </div>
                          <div className="footer4">
                          
                          
                        <button>GREYSON'S</button>

                        <form onSubmit={handleOurads}>
                        <button>OUR ADS</button>
                        </form>
                    
                        <form onSubmit ={handleTermofservices}>
                        <button>TERMS OF SERVICE </button>
                        </form>
                       
                        <form onSubmit={handlePrivacyandsecurity}>
                        <button>PRIVACY & SECURITY</button>
                        </form>
                        
                        
                        <form onSubmit={handleCaprivacy}>
                        <button>CA PRIVACY RIGHTS</button>
                        </form>
                        
                        <form onSubmit={handleDonotsellmyinfo}>
                        <button>Do Not Sell My Information</button>
                        </form>
                        
                        <form onSubmit={handleTaxExcemptpage}>
                        <button>Tax Exempt Program</button>
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

export default Sport;
