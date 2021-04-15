import React from "react";
import ReactDOM from 'react-dom';
import './Videogame.css';
import Shop from "./Shop";
import Product from "./Product";
import App from "./App"
import './App.css';
import Cart from './Cart';
import Nonprofit from "./Nonprofit";
import Account from './Account';
import FormSignup from './userlogin';
import BeautyProducts from './beauty_products'
import Profile from './Profile'
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
import './homeandfurniture.css';



function Homeandfurniture() {
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
    <div class="Videogameadjust">
    <div class="videogcard1">
        <img src="https://images-na.ssl-images-amazon.com/images/I/61zSO2TK-JL._AC_SL1200_.jpg" alt="Xbox one" height="130" width="180"/>
        <h1>Coffee Table w/Hidden Compartment</h1>
         <p class="price">$135.99</p>
        <p>Lift-top design: The tabletop of this coffee table can be effortlessly lifted up and forward to create a workspace when sitting on your sofa. </p>
        <p><button>Add to Cart</button></p>
    </div>
    
    <div class="videogcard2">
        <img src="https://images-na.ssl-images-amazon.com/images/I/91s0k6KrTJL._AC_SL1500_.jpg" alt="ps5" height="130" width="180"/>
        <h1>4 Pieces Patio Furniture Set, Outdoor </h1>
         <p class="price">$154.99</p>
        <p>Widely used: Due its modern design with many choice in terms of color, you can choose one which you like best.</p>
        <p><button>Add to Cart</button></p>
    </div>
    
    <div class="videogcard3">
        <img src="https://images-na.ssl-images-amazon.com/images/I/71cOWOF2bBL._AC_SL1000_.jpg" alt="nintendoo" height="130" width="180"/>
        <h1>Patio conversation-sets STC-OTMSF</h1>
         <p class="price">$359.92</p>
        <p>Well Designed Patio Furniture: Designed with comfort in mind, it has extra wide seat width and depth; gently.</p>
        <p><button>Add to Cart</button></p>
    </div>
    
    <div class="videogcard4">
        <img src="https://images-na.ssl-images-amazon.com/images/I/81O05q2Ga3L._AC_SL1500_.jpg" alt="oculus2" height="130" width="180"/>
        <h1>Green Tea Memory Foam Mattress</h1>
         <p class="price">$374.00</p>
        <p>Our special recipe for rejuvenating rest? Refreshing green tea and moisture-absorbing ActivCharcoal infused.</p>
        <p><button>Add to Cart</button></p>
    </div>
    
    
    <div class="videogcard5">
        <img src="https://images-na.ssl-images-amazon.com/images/I/81ntoHQ17jL._AC_SL1500_.jpg" alt="madden" height="130" width="180"/>
        <h1>Cambeck Panel Bed with 12" Memory Foam</h1>
         <p class="price">$19.99 was $59.99</p>
        <p>A new generation is leaving its mark in the NFL. Will you rise to the occasion?.Change the game and take control of your own legacy.</p>
        <p><button>Add to Cart</button></p>
    </div>
    
    <div class="videogcard6">
        <img src="https://images-na.ssl-images-amazon.com/images/I/9117wPkbjrL._AC_SL1500_.jpg" alt="nba" height="130" width="180"/>
        <h1>Kisper Platform Bed with 2 Nightstands</h1>
         <p class="price">$29.99 was $59.99</p>
        <p>Use with a wide variety of bed frames in twin, full, queen, and king sizesComes compressed in a roll; allow up to 72 hours for mattress to fully expand</p>
        <p><button>Add to Cart</button></p>
    </div>
    
    <div class="videogcard7">
        <img src="https://images-na.ssl-images-amazon.com/images/I/719rtWQoQYL._AC_SL1000_.jpg" alt="controller" height="130" width="180"/>
        <h1>Alisdair Sleigh Bed with a Mattress </h1>
         <p class="price">$119.00</p>
        <p>Coil mattress with high-density foam topper for comfort and supportIndividually-wrapped 8 inch pocket coils.</p>
        <p><button>Add to Cart</button></p>
    </div>
    
    <div class="videogcard8">
        <img src="https://images-na.ssl-images-amazon.com/images/I/91VEPQDeMbL._AC_SL1500_.jpg" alt="game chair" height="130" width="180"/>
        <h1> Adirondack charlestown All-Weather Chair</h1>
         <p class="price">$152.33</p>
        <p>Get your flip flops and sunglasses and prepare to relax on a grand scale in this faux wood adirondack chair. UV treated.</p>
        <p><button>Add to Cart</button></p>
    </div>
    
    <div class="videogcard9">
        <img src="https://images-na.ssl-images-amazon.com/images/I/615ewkBtwCL._AC_SL1500_.jpg" alt="game chair" height="130" width="180"/>
        <h1> Round 18" Side Table, White</h1>
         <p class="price">$99.99</p>
        <p>The perfect companion for most POLYWOOD armchairs and benches, this 18" side table is made with fade-resistant POLYWOOD </p>
        <p><button>Add to Cart</button></p>
    </div>
    
    <div class="videogcard10">
        <img src="https://images-na.ssl-images-amazon.com/images/I/81MC7b9DDcL._AC_SL1500_.jpg" alt="keyboard" height="130" width="180"/>
        <h1>Mosaic Side Table Butterfly Bench </h1>
         <p class="price">$43.99</p>
        <p>Multipurpose Side Table - This exquisite printed glass table is a ideal place for butterfly lovers to rest coffee.</p>
        <p><button>Add to Cart</button></p>
    </div>
    
    <div class="videogcard11">
        <img src="https://images-na.ssl-images-amazon.com/images/I/81MC7b9DDcL._AC_SL1500_.jpg" alt="desktop" height="130" width="180"/>
        <h1>Homall Recliner Chair Padded</h1>
         <p class="price">$129.99</p>
        <p>Material: High quality pu leather, comfortable skin friendly and easily cleaned, high density thicker sponge.</p>
        <p><button>Add to Cart</button></p>
    </div>
    
    <div class="videogcard12">
        <img src="https://images-na.ssl-images-amazon.com/images/I/71187YE5iAL._AC_SL1500_.jpg" alt="mouse" height="130" width="180"/>
        <h1>Modern LED TV Stand for 65 Inch</h1>
         <p class="price">$239.99</p>
        <p> Stylish and modern this smart TV stand features built-in LED lighting with 16 colors, 4 modes, 5 adjustable way</p>
        <p><button>Add to Cart</button></p>
    </div>
    
         <footer class="homeandfurniture-site-footer">
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

export default Homeandfurniture;
