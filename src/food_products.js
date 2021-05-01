import React from "react";
import ReactDOM from 'react-dom';
import './food_products.css';
import Shop from "./Shop";
import Product from "./Product";
import App from "./App"
import './App.css';
import Cart from './Cart';
import Nonprofit from "./Nonprofit";
import Account from './Account';
import FormSignup from './userlogin';
import Profile from './Profile'
import Videog from './Videogame';
import BeautyProducts from './beauty_products';
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

function Food() {
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
   </div>
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
    <div class="Foodadjust">
    <div class="foodcard1">
        <img src="https://images-na.ssl-images-amazon.com/images/I/81DF9tHWcbL._SL1500_.jpg" alt="chips" height="130" width="180"/>
        <h1>Frito-Lay Party Mix</h1>
         <p class="price">$16.98</p>
        <p>40 Single Serve favorites Lay's Classic Potato Chips, Crunchy Cheetos, Chili Cheese Fritos, Lay's BBQ Potato Chips, Original Funyuns, Doritos Nacho Cheese, Original Fritos, and Ruffles Cheddar & Sour Cream Chips.</p>
        <p><button>Add to Cart</button></p>
    </div>
    
    <div class="foodcard2">
        <img src="https://images-na.ssl-images-amazon.com/images/I/81nuyDtwCqL._SL1500_.jpg" alt="avacados" height="130" width="180"/>
        <h1>Organic Hass Avocados</h1>
         <p class="price">$4.99</p>
        <p>365 by Whole Foods Market, Organic Hass Avocados, 4 Count.</p>
        <p><button>Add to Cart</button></p>
    </div>
    
    <div class="foodcard3">
        <img src="https://images-na.ssl-images-amazon.com/images/I/91EdwteFKEL._SL1500_.jpg" alt="coffee" height="130" width="180"/>
        <h1>Maxwell House Instant Coffee</h1>
         <p class="price">$21.23</p>
        <p>Maxwell House International Orange Cafe Instant Coffee (9.3 oz Canisters, Pack of 4).</p>
        <p><button>Add to Cart</button></p>
    </div>
    
    <div class="foodcard4">
        <img src="https://images-na.ssl-images-amazon.com/images/I/91BkflX9hKL._SL1500_.jpg" alt="Granola bars" height="130" width="180"/>
        <h1>Quaker Granola bars</h1>
         <p class="price">$12.99</p>
        <p>Quaker Bars Granola bars 5 flavor 58ct, Chewy & Dipps Variety Pack, 58 Count</p>
        <p><button>Add to Cart</button></p>
    </div>
    
    
    <div class="foodcard5">
        <img src="https://images-na.ssl-images-amazon.com/images/I/81n84Fa%2BkYL._SL1500_.jpg" alt="Gatorade G2 Thirst Quencher" height="130" width="180"/>
        <h1>Gatorade G2 Thirst Quencher</h1>
         <p class="price">$14.65</p>
        <p>Gatorade G2 Thirst Quencher Variety Pack, 20 Ounce Bottles (Pack of 12).</p>
        <p><button>Add to Cart</button></p>
    </div>
    
    <div class="foodcard6">
        <img src="https://images-na.ssl-images-amazon.com/images/I/81p3W-xV7HL._SL1500_.jpg" alt="GoGo squeeZ Applesauce" height="130" width="180"/>
        <h1>GoGo squeeZ Applesauce</h1>
         <p class="price">$9.98</p>
        <p>GoGo squeeZ Applesauce, Variety Pack (Apple/Peach/GIMME 5), 3.2 Ounce (20 Pouches), Gluten Free, Vegan Friendly, Unsweetened, Recloseable, BPA Free Pouches.</p>
        <p><button>Add to Cart</button></p>
    </div>
    
    <div class="foodcard7">
        <img src="https://images-na.ssl-images-amazon.com/images/I/911XLyCu1RL._SL1500_.jpg" alt="Quaker Instant Oatmeal" height="130" width="180"/>
        <h1>Quaker Instant Oatmeal</h1>
         <p class="price">$11.35</p>
        <p>Quaker Instant Oatmeal, 4 Flavor Variety Pack, Individual Packets, 48 Count.</p>
        <p><button>Add to Cart</button></p>
    </div>
    
    <div class="foodcard8">
        <img src="https://images-na.ssl-images-amazon.com/images/I/81u6mQeOSmL._SL1500_.jpg" alt="Dole Fruit Bowls" height="130" width="180"/>
        <h1>Dole Fruit Bowls</h1>
         <p class="price">$5.84</p>
        <p>Dole Fruit Bowls, Cherry Mixed Fruit in 100% Fruit Juice, 12 Count, 4 Ounce Cups.</p>
        <p><button>Add to Cart</button></p>
    </div>
    
    <div class="foodcard9">
        <img src="https://images-na.ssl-images-amazon.com/images/I/81za90qtEZL._SL1500_.jpg" alt="Ravioli" height="130" width="180"/>
        <h1>Chef Boyardee Ravioli</h1>
         <p class="price">$11.88</p>
        <p>Chef Boyardee Beef in Tomato & Meat Sauce Ravioli, 7.5 Oz. (Pack of 12).</p>
        <p><button>Add to Cart</button></p>
    </div>
    
    <div class="foodcard10">
        <img src="https://images-na.ssl-images-amazon.com/images/I/71tMS7MibbL._SL1500_.jpg" alt="Snack Pack Pudding Cups" height="130" width="180"/>
        <h1>Snack Pack Pudding Cups</h1>
         <p class="price">$12</p>
        <p>Snack Pack Chocolate Vanilla Pudding Cups, 4 Count, 12 Pack.</p>
        <p><button>Add to Cart</button></p>
    </div>
    
    <div class="foodcard11">
        <img src="https://images-na.ssl-images-amazon.com/images/I/71vEodL71%2BL._SL1500_.jpg" alt="Pringles" height="130" width="180"/>
        <h1>Pringles Potato Crisps Chips</h1>
         <p class="price">$6.48</p>
        <p>Pringles, Potato Crisps Chips, Variety Pack, Snacks On The Go, Snack Stacks, 12.9oz (18 Count).</p>
        <p><button>Add to Cart</button></p>
    </div>
    
    <div class="foodcard12">
        <img src="https://images-na.ssl-images-amazon.com/images/I/91Fslv9sA4L._SL1500_.jpg" alt="Cereal" height="130" width="180"/>
        <h1>Kellogg's Breakfast Cereal</h1>
         <p class="price">$22.59</p>
        <p>Kellogg's, Breakfast Cereal, Single-Serve Boxes, Variety Pack, Assortment Varies, (48 Count).</p>
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

export default Food;