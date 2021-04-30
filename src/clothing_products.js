import React from "react";
import ReactDOM from 'react-dom';
import './clothing_products.css';
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

function Clothing() {
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
    <div class="Clothingadjust">
    <div class="clothingcard1">
        <img src="https://target.scene7.com/is/image/Target/GUEST_79dff06b-165b-40ce-9edf-7e335c9a44eb?wid=488&hei=488&fmt=pjpeg" alt="women's jeans" height="130" width="180"/>
        <h1>Levi's Women's 721 High Rise Skinny Jeans</h1>
         <p class="price">$22.70</p>
        <p>60% Cotton, 22% Viscose, 16% Polyester, 2% Elastane.</p>
        <p><button>Add to Cart</button></p>
    </div>
    
    <div class="clothingcard2">
        <img src="https://target.scene7.com/is/image/Target/GUEST_b23cc2c9-c3e9-420b-b3ee-0f9a947666ff?wid=325&hei=325&qlt=80&fmt=webp" alt="women's shirt" height="130" width="180"/>
        <h1>Women's Long Sleeve Fitted T-Shirt</h1>
         <p class="price">$7</p>
        <p>Soft fabric with added stretch ensures a more comfy fit.</p>
        <p><button>Add to Cart</button></p>
    </div>
    
    <div class="clothingcard3">
        <img src="https://target.scene7.com/is/image/Target/GUEST_920394a8-6fc1-4190-9b4a-2545929aeefc?wid=325&hei=325&qlt=80&fmt=webp" alt="T-Shirt" height="130" width="180"/>
        <h1>Women's Rolling Stones Short Sleeve Graphic T-Shirt - Black</h1>
         <p class="price">$8</p>
        <p>Seamless double stitched collar to maintain the shape.</p>
        <p><button>Add to Cart</button></p>
    </div>
    
    <div class="clothingcard4">
        <img src="https://target.scene7.com/is/image/Target/GUEST_cc7ea8d1-fbd4-4cc3-b6a6-4c08b4dffab0?wid=325&hei=325&qlt=80&fmt=webp" alt="Long Sleeve T-Shirt" height="130" width="180"/>
        <h1>Girls' Lettuce Edge Crew Neck Long Sleeve T-Shirt</h1>
         <p class="price">$10</p>
        <p>Girls' lettuce edge tee makes a stylish addition to her everyday wardrobe.</p>
        <p><button>Add to Cart</button></p>
    </div>
    
    
    <div class="clothingcard5">
        <img src="https://target.scene7.com/is/image/Target/GUEST_96178a41-a930-457a-928c-6016e7244139?wid=325&hei=325&qlt=80&fmt=webp" alt="Men's Colorblock Sweatshirt" height="130" width="180"/>
        <h1>Men's Colorblock Sweatshirt</h1>
         <p class="price">$25</p>
        <p>Long-sleeve hoodie with drawstrings, kangaroo pocket lends functional detail.</p>
        <p><button>Add to Cart</button></p>
    </div>
    
    <div class="clothingcard6">
        <img src="https://target.scene7.com/is/image/Target/GUEST_371b25e6-ca33-4731-aca8-d54c38101a42?wid=325&hei=325&qlt=80&fmt=webp" alt="Graphic T-Shirt" height="130" width="180"/>
        <h1>Men's Nintendo Classic Fit Short Sleeve Graphic T-Shirt</h1>
         <p class="price">$12.99</p>
        <p>100% cotton fabric keeps you cool and comfy all day.</p>
        <p><button>Add to Cart</button></p>
    </div>
    
    <div class="clothingcard7">
        <img src="https://target.scene7.com/is/image/Target/GUEST_543380ed-7a6c-4a87-9bbe-3d34f364da36?wid=325&hei=325&qlt=80&fmt=webp" alt="Men's Puffer Jacket" height="130" width="180"/>
        <h1>Men's Puffer Jacket - Goodfellow & Co™</h1>
         <p class="price">$34.99</p>
        <p>Lightweight puffer jacket in a solid color makes a go-to layering essential.</p>
        <p><button>Add to Cart</button></p>
    </div>
    
    <div class="clothingcard8">
        <img src="https://target.scene7.com/is/image/Target/GUEST_f1b557ba-6adf-4306-b13f-bccd254066a1?wid=325&hei=325&qlt=80&fmt=webp" alt="men's pants" height="130" width="180"/>
        <h1>Men's Straight Fit Hennepin Chino Pants - Goodfellow & Co™</h1>
         <p class="price">$22.99</p>
        <p>98% Cotton, 2% Spandex.</p>
        <p><button>Add to Cart</button></p>
    </div>
    
    <div class="clothingcard9">
        <img src="https://target.scene7.com/is/image/Target/GUEST_d91775f0-0b15-4bdf-b2f3-51566650fd61?wid=325&hei=325&qlt=80&fmt=webp" alt="girls T-Shirt" height="130" width="180"/>
        <h1>L.O.L. Vintage Girls' Unicorn Graphic Short Sleeve T-Shirt - Light Pink</h1>
         <p class="price">$8.99</p>
        <p></p>
        <p><button>Add to Cart</button></p>
    </div>
    
    <div class="clothingcard10">
        <img src="https://target.scene7.com/is/image/Target/GUEST_6d758414-0401-4fa9-b827-6ad660646ae1?wid=325&hei=325&qlt=80&fmt=webp" alt="Girls' Leggings" height="130" width="180"/>
        <h1>Girls' Leggings - Pink</h1>
         <p class="price">$5.99</p>
        <p>Girls' solid pink leggings are a perfect addition to her casualwear collection.</p>
        <p><button>Add to Cart</button></p>
    </div>
    
    <div class="clothingcard11">
        <img src="https://target.scene7.com/is/image/Target/GUEST_3e8f243b-8b63-4e59-a04c-b340f1fe0cc5?wid=325&hei=325&qlt=80&fmt=webp" alt="Levi's® Kids' Sherpa Jean Jacket" height="130" width="180"/>
        <h1>Levi's® Kids' Sherpa Jean Jacket</h1>
         <p class="price">$49.99</p>
        <p>Body: 100% Cotton; Lining: 100% Polyester.</p>
        <p><button>Add to Cart</button></p>
    </div>
    
    <div class="clothingcard12">
        <img src="https://target.scene7.com/is/image/Target/GUEST_8a04fca7-fdd0-44c7-9432-b42ef88d029e?wid=325&hei=325&qlt=80&fmt=webp" alt="Boys' Windbreaker Jacket" height="130" width="180"/>
        <h1>Boys' Windbreaker Jacket</h1>
         <p class="price">$20</p>
        <p>Boys' colorblock windbreaker jacket is a functional outerwear staple.</p>
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

export default Clothing;