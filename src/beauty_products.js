import React from "react";
import ReactDOM from 'react-dom';
import './beauty_products.css';
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
import Item_Display from './item_display';
import axios from 'axios';
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
import BeautyProducts from './beauty_products';


function Beauty() {
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

    function itemDisplay(id){
      axios.post("http://127.0.0.1:5000/addtoCart", {"id":id}).then(()=>{
        ReactDOM.render(<Cart/>,document.getElementById('root'));

      })
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
    <div class="Beautyadjust">
    <div class="beautycard1">
        <img src="https://components.youniqueproducts.com/images/2020-09/product-images/fan-brush-full.jpg?null" alt="YOUNIQUE fan brush" height="130" width="180"/>
        <h1>YOUNIQUE fan brush</h1>
         <p class="price">$24.99</p>
        <p>Gently brush away those extra flecks of color with the YOUNIQUE fan brush.</p>
        <p><button onClick={()=>itemDisplay(1)}>Add to Cart</button></p>
    </div>
    
    <div class="beautycard2">
        <img src="https://cdn.shopify.com/s/files/1/0338/3882/5612/products/15003_circle_delete_concealer_1_soldier_PDP_2000x.jpg?v=1612899527" alt="Circle\Delete Concealer" height="130" width="180"/>
        <h1>Circle\Delete® Concealer</h1>
         <p class="price">$32.00</p>
        <p>An eye conditioner and concealer containing moringa butter and avocado oil, both high in vitamins A, C, D and E.</p>
        <p><button  onClick={()=>itemDisplay(2)}>Add to Cart</button></p>
    </div>
    
    <div class="beautycard3">
        <img src="data:image/jpeg;base64,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" alt="One-Step Makeup Remover Wipes" height="130" width="180"/>
        <h1>One-Step Makeup Remover Wipes</h1>
         <p class="price">$20</p>
        <p>Using a naturally derived micellar formula, each super soft wipe traps makeup, dirt, and impurities, then gently whisks it away.</p>
        <p><button onClick={()=>itemDisplay(3)}>Add to Cart</button></p>
    </div>
    
    <div class="beautycard4">
        <img src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F24%2F2021%2F01%2F14%2Fneutrogena-exfoliating-shampoo-2000.jpg&q=85" alt="Neutrogena Exfoliating Shampoo" height="130" width="180"/>
        <h1>Neutrogena Exfoliating Shampoo</h1>
         <p class="price">$8.74</p>
        <p>Exfoliating Shampoo for Oily Hair & Scalp, 12 oz.</p>
        <p><button onClick={()=>itemDisplay(4)}>Add to Cart</button></p>
    </div>
    
    
    <div class="beautycard5">
        <img src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcR5kJfH3Ph-wHvio3BnOaHy7_nwH79cv7b2ety4UKqElwNjJnQYsvq52UxxZ1luwxVR1hyMdS1WwSK5_ogeModhAAZpFQUO0oJKGKUv20SB-41qsSw7rFSOroU&usqp=CAE" alt="Glowipedia Glass Skin Kit" height="130" width="180"/>
        <h1>Glowipedia Glass Skin Kit</h1>
         <p class="price">$130 was $104</p>
        <p>Deep cleanse and gently exfoliate with Blueberry Bounce Gentle Cleanser.</p>
        <p><button onClick={()=>itemDisplay(5)}>Add to Cart</button></p>
    </div>
    
    <div class="beautycard6">
        <img src="https://hudabeauty.com/dw/image/v2/BCNC_PRD/on/demandware.static/-/Sites-huda-master-catalog/default/dwb2abf238/images/sfra/HB00174M/HB00176_2.png?sw=1242&sh=1242&sm=fit" alt="HUDABEAUTY Liquid Matte Lipstick" height="130" width="180"/>
        <h1>HUDABEAUTY Liquid Matte Lipstick</h1>
         <p class="price">$20</p>
        <p>One-stroke color with a buttery, suede-like finish.</p>
        <p><button onClick={()=>itemDisplay(6)}>Add to Cart</button></p>
    </div>
    
    <div class="beautycard7">
        <img src="https://cdn.shopify.com/s/files/1/1128/9816/products/FullControlMascara.Horizontal_2000x.jpg?v=1568770260" alt="FULL CONTROL LASH SCULPTING MASCARA" height="130" width="180"/>
        <h1>FULL CONTROL ™ lash sculpting mascara</h1>
         <p class="price">$35</p>
        <p>Makes lashes look long and full. Never clumpy.</p>
        <p><button onClick={()=>itemDisplay(7)}>Add to Cart</button></p>
    </div>
    
    <div class="beautycard8">
        <img src="https://i5.walmartimages.com/asr/f21a08dc-0c2d-460e-b882-b530bd502f36.bf4cbae5fbc2ab0c0070a1da446b701d.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff" alt="NYX Professional Makeup Ultimate Shadow Palette" height="130" width="180"/>
        <h1>NYX Professional Makeup Ultimate Shadow Palette</h1>
         <p class="price">$17.97</p>
        <p>Warm Neutrals, 0.32 oz</p>
        <p><button onClick={()=>itemDisplay(8)}>Add to Cart</button></p>
    </div>
    
    <div class="beautycard9">
        <img src="https://www.nyxcosmetics.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-cpd-nyxusa-master-catalog/default/dw17269a6c/ProductImages/2020/Eyes/UUSP01/NYX-PMU-Makeup-Eye-ULTIMATE-UTOPIA-SHADOW-PALETTE-Shadow-Palette-Ultimate-Utopia-UUSP01-000-0800897206376-Closed.jpg?sw=500&sfrm=jpg&q=70" alt="ULTIMATE UTOPIA SHADOW PALETTE" height="130" width="180"/>
        <h1>Ultimate Utopia Shadow Palette</h1>
         <p class="price">$35</p>
        <p>This 16 shade eyeshadow palette of incredibly creamy eyeshadows in matte and metallic finishes instantly transports you to a lush nirvana.</p>
        <p><button onClick={()=>itemDisplay(9)}>Add to Cart</button></p>
    </div>
    
    <div class="beautycard10">
        <img src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQt3WIUZW2v3JiKqXnRC-ZI60BlOHCbqOCfaAcM5OCnhta5wCb7S56Xomi0hnZsenxWaaZ9ZX2cWhxL_g1QAcq6QKvmHLHI7F4HBFSOL7H6hghwNr_s-m_g&usqp=CAE" alt="Face Mask" height="130" width="180"/>
        <h1>SEPHORA Face Mask</h1>
         <p class="price">$4</p>
        <p>Makes skin feels soft and fresh.</p>
        <p><button onClick={()=>itemDisplay(10)}>Add to Cart</button></p>
    </div>
    
    <div class="beautycard11">
        <img src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRblTnR57jzGZA39CPNLC4ZHw9my7t_zJbOt5LzEEYUcT_ltweygSvFgRr-pze2W07l8xU9KSAibyh1YmUnCc5Ff6lsnzbpYF0VgofyeoaTZ1Qewqm-mc44yB0&usqp=CAE" alt="nails" height="130" width="180"/>
        <h1>StaticNails - Toasted Sugar Almond</h1>
         <p class="price">$14</p>
        <p>24 Universal Nails in 12 sizes  — fits average, petite, and larger sized nails.</p>
        <p><button onClick={()=>itemDisplay(11)}>Add to Cart</button></p>
    </div>
    
    <div class="beautycard12">
        <img src="https://cdn.shopify.com/s/files/1/2419/5919/products/blackobsidianroller_1400x.jpg?v=1595510059" alt="OBSIDIAN FACIAL ROLLER" height="130" width="180"/>
        <h1>Obsidian Facial Roller</h1>
         <p class="price">$25</p>
        <p>A stimulating, handcrafted obsidian stone face roller that helps promote tranquility for revitalized-looking skin.</p>
        <p><button onClick={()=>itemDisplay(12)}>Add to Cart</button></p>
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

export default Beauty;