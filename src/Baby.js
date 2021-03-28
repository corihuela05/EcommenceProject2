import React from "react";
import ReactDOM from 'react-dom';
import Shop from "./Shop";
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
import './Baby.css';


function Babys () {
  function handleclothingProducts(){
    ReactDOM.render(<ClothingProducts />,document.getElementById('root'));
  }
  function handlefoodProducts(){
    ReactDOM.render(<FoodProducts />,document.getElementById('root'));
  }
  function handleartProducts(){
    ReactDOM.render(<ArtProducts />,document.getElementById('root'));
  }
  function handlebeautyProducts(){
    ReactDOM.render(<BeautyProducts />,document.getElementById('root'));
  }
 
  function handleHomeandfurnitures(){
  ReactDOM.render(<Homeandfurnitures />,document.getElementById('root'));
 }
 
   function handleTermofservices(){
  ReactDOM.render(<Termofservice />,document.getElementById('root'));
 }
  function handleChurch(){
  ReactDOM.render(<Church/>,document.getElementById('root'));
 }
 
 
   function handleGetknowus(){
  ReactDOM.render(<Gettoknowus/>,document.getElementById('root'));
 }


  function handleHome(){
    ReactDOM.render(<Home />,document.getElementById('root'));
  }
  function handleProduct(){
    ReactDOM.render(<Product />,document.getElementById('root'));
  }
  function handleShop(){
    ReactDOM.render(<Shop />,document.getElementById('root'));
  }
  function handleCart(){
    ReactDOM.render(<Cart />,document.getElementById('root'));
  }
   function handleNonprofit(){
    ReactDOM.render(<Nonprofit />,document.getElementById('root'));
  }
 
   function handleSchoolst(){
    ReactDOM.render(<School />,document.getElementById('root'));
  }
 
 
    function handleAccount(){
    ReactDOM.render(<Account />,document.getElementById('root'));
  }
   function handleuserlogin(){
    ReactDOM.render(<FormSignup />,document.getElementById('root'));
  }
  function handleProfile(){
    ReactDOM.render(<Profile />,document.getElementById('root'));
  }
 
    function handlevideogame(){
     ReactDOM.render(<Videog />,document.getElementById('root'));
  }
    function handlesports(){
     ReactDOM.render(<Sportpro />,document.getElementById('root'));
  }
 
    function handlebaby(){
     ReactDOM.render(<Baby />,document.getElementById('root'));
  }
 
    function handlepatio(){
     ReactDOM.render(<Patio />,document.getElementById('root'));
  }
 
    function handlepets(){
     ReactDOM.render(<Pets />,document.getElementById('root'));
  }
 
    function handlepharmacy(){
     ReactDOM.render(<Pharmacy />,document.getElementById('root'));
  }
 
    function handleauto(){
     ReactDOM.render(<Auto />,document.getElementById('root'));
  }
 
    function handlemusic(){
     ReactDOM.render(<Music />,document.getElementById('root'));
  }
 
  function handleOurads(){
     ReactDOM.render(<Ourads />,document.getElementById('root'));
  }


  return (
    <div className="App">
    <div className="Appheader">
    <img src="logo.png" alt='company logo' className="companylogo" />
    <img src="https://media1.tenor.com/images/3ced764a2cb7ad33ddf2145edb9904ae/tenor.gif?itemid=4320892" alt='flag' className="flag" />
    <input type="text" name="search" placeholder="Search.."/>
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
    <form onSubmit={handleNonprofit}>
      <button>Buy Again</button>
    </form>
    <form onSubmit={handleNonprofit}>
      <button>List</button>
    </form>
    <form onSubmit={handleNonprofit}>
      <button>Registry</button>
    </form>  
    <form onSubmit={handleNonprofit}>
      <button>Gift Finder</button>
    </form>
    <form onSubmit={handleNonprofit}>
      <button>Gift Card</button>
    </form>
    <form onSubmit={handleNonprofit}>
      <button>Black Owned Businesses</button>
    </form>  
    <form onSubmit={handleNonprofit}>
      <button>Women Owned Businesses</button>
    </form>
    <form onSubmit={handleNonprofit}>
      <button>Help</button>
    </form>  
    <form onSubmit={handleNonprofit}>
      <button>Departments</button>
    </form>
    <form onSubmit={handleNonprofit}>
      <button>Electronics & Office</button>
    </form>
   
    <form onSubmit={handlevideogame}>
      <button>Toys, Games and Video Games</button>
    </form>
    <button onClick={handleclothingProducts} >Clothing, Shoes, & Accessories</button>
   
      <form onSubmit={handleHomeandfurnitures}>
       <button>Home, Furniture & Appliances</button>
    </form>
    <form onSubmit={handleNonprofit}>
      <button>Home Improvement</button>
    </form>
     <form onSubmit={handlemusic}>
      <button>Music</button>
    </form>
    <form onSubmit={handlepatio}>
      <button>Patio & Garden</button>
    </form>
    <button onClick={handlefoodProducts} >Food</button>
   <form onSubmit={handlepets}>
      <button>Pets</button>
    </form>
    <form onSubmit={handlepharmacy}>
      <button>Pharmacy, Health & Personal Care</button>
    </form>

    <form onSubmit={handlesports}>
      <button>Sports, Fitness & Outdoors</button>
    </form>

    <button onClick={handlebeautyProducts} >Beauty</button>
 
    <form onSubmit={handleauto}>
      <button>Auto & Tire</button>
    </form>
    <form onSubmit={handleNonprofit}>
      <button>Photos</button>
    </form>
    <button onClick={handleartProducts} >Art, Craft, Sewing & Party Supplies</button>
    </div>
    </div>
    <div className="tabs">
      <button  onClick={handleartProducts} >Best Sellers</button>
      <button  onClick={handleartProducts} >Today's Deals</button>
      <button  onClick={handleartProducts} >Customer Service</button>
      <button  onClick={handleartProducts} >New Releases</button>
      <button  onClick={handleartProducts} >Near Me</button>
      <button  onClick={handleartProducts} >Books</button>
      <button  onClick={handleartProducts} >Fashion</button>
      <button  onClick={handleartProducts} >Gift Cards</button>
    </div>
    </div>
    
    <div class="babyadjust">
    <div class="babycard1">
        <img src="https://i5.walmartimages.com/asr/9cec4591-5d1f-48c3-920f-573d65cac715.fc51358c2749b161c62b72a60d3c32bf.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff" alt="diapers" height="130" width="180"/>
        <h1>Huggies Baby Diapers</h1>
         <p class="price">$39.76</p>
        <p>Designed for gentle skin protection to help support clean & healthy skin. Huggies Little Snugglers Diapers are perfect.</p>
        <p><button>Add to Cart</button></p>
    </div>
    
    <div class="babycard2">
        <img src="https://i5.walmartimages.com/asr/3d86747e-4a4c-435c-978f-c84ef3e924cd_1.e614a3e8e84cdf233ef1ddc6776b0d89.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff" alt="babyoil" height="130" width="180"/>
        <h1>Johnson's Baby Oil</h1>
         <p class="price">$4.92</p>
        <p>Our Johnson's baby oil locks in up to 10 times more moisture *on wet skin than an ordinary lotion can on dry skin.</p>
        <p><button>Add to Cart</button></p>
    </div>
    
    <div class="babycard3">
        <img src="https://i5.walmartimages.com/asr/3a5dde52-4f0e-462a-aca7-ecc59d861417.1f7d0ff1a97b81ae3429cdc0dcc8fe35.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff" alt="powder" height="130" width="180"/>
        <h1>Johnson's Baby Powder</h1>
         <p class="price">$4.92</p>
        <p>Johnson's Aloe & Vitamin E naturally derived cornstarch baby powder gently absorbs moisture to soothe delicate skin.</p>
        <p><button>Add to Cart</button></p>
    </div>
    
    <div class="babycard4">
        <img src="https://i5.walmartimages.com/asr/be8df345-8ec1-4127-9e3d-e069b7cf5a1b.02197384297d4ab34ec036c272083293.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff" alt="carseat" height="130" width="180"/>
        <h1>Chicco NextFit Sport Car Seat </h1>
         <p class="price">$249.99</p>
        <p>The #1-rated Chicco NextFit Sport Convertible Car Seat is engineered to surround your little one in comfort and safety.</p>
        <p><button>Add to Cart</button></p>
    </div>
    
    
    <div class="babycard5">
        <img src="https://i5.walmartimages.com/asr/0f81f660-d0ea-4438-8eae-5d5cdc0d7f36_1.40af70bb0dff9c56f494c84a19d291c0.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff" alt="bottle" height="130" width="180"/>
        <h1>Comotomo Baby Bottle</h1>
         <p class="price">$23.27</p>
        <p>These Comotomo 5-oz Silicone Baby Bottles feature an innovative and sensible design to most closely mimic natural breastfeeding.</p>
        <p><button>Add to Cart</button></p>
    </div>
    
    <div class="babycard6">
        <img src="https://i5.walmartimages.com/asr/2b30d4f8-a750-4b34-984f-fd365e62f8ad.8ac9d093e2175604559ae6596363f002.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff" alt="wipes" height="130" width="180"/>
        <h1>Huggies Natural Care Wipes</h1>
         <p class="price">$2.38</p>
        <p>Great for at home or on the go, these wipe packs are disposable and convenient. Never run out of Huggies Wipes, and replenish with pop-up tubs.</p>
        <p><button>Add to Cart</button></p>
    </div>
    
    <div class="babycard7">
        <img src="https://i5.walmartimages.com/asr/c1bb8682-82bd-4706-ba9d-d806d6aa84f9.cef33d1b933226f47e1131dcf7997c55.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff" alt="lotion" height="130" width="180"/>
        <h1>Johnson's baby Lotion </h1>
         <p class="price">$5.92</p>
        <p>Stock up on essentials to keep baby happy and healthy this winter. Moisturizing Pink Baby Lotion with Coconut Oil.</p>
        <p><button>Add to Cart</button></p>
    </div>
    
    <div class="babycard8">
        <img src="https://i5.walmartimages.com/asr/58df57b1-ed9b-4613-a158-ec10538a3220_1.ae0de397a9ce76b2481daca9a2c3ca5a.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff" alt="walker" height="130" width="180"/>
        <h1>Baby Walker</h1>
         <p class="price">$49.99</p>
        <p>Watch baby walk all the way to Sesame Street with Bright Starts’ I Spot Elmo Walker. Elmo, Big Bird and Cookie Monster are here to help baby take his first big steps. With these furry friends by his side.</p>
        <p><button>Add to Cart</button></p>
    </div>
    
    <div class="babycard9">
        <img src="https://i5.walmartimages.com/asr/602941b3-b9ed-4b65-8ce8-49e8218843ef_1.1de395b73fa6a7de9a631b05a3e33483.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff" alt="toys" height="130" width="180"/>
        <h1>Bright Starts Lots of Links Toys</h1>
         <p class="price">$4.43</p>
        <p>Like a stick of gum or trusty hair tie, you’ll always be glad to have a handful of these bendy. They’re one of our bestsellers for a reason</p>
        <p><button>Add to Cart</button></p>
    </div>
    
    <div class="babycard10">
        <img src="https://i5.walmartimages.com/asr/51f74589-83cc-436b-8c97-3f25a39ccf69_3.e57d0320a0a7695a0b1f5f498ccae650.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff" alt="playyard" height="130" width="180"/>
        <h1>Cosco Funsport Portable Play Yard</h1>
         <p class="price">$39.99</p>
        <p>Keep your baby in a safe place while giving them room to play with the Cosco Funsport Portable Compact Baby Play Yard.</p>
        <p><button>Add to Cart</button></p>
    </div>
    
    <div class="babycard11">
        <img src="https://i5.walmartimages.com/asr/9cc03c9f-a912-4e2d-8338-ea5c7afd25e3_1.9d18893f78059e985fc03270738df4b5.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff" alt="toy1" height="130" width="180"/>
        <h1>Oball Shaker Rattle Toy</h1>
         <p class="price">$3.59</p>
        <p>Shake, shake, shake it, baby! Made for the littlest of fingers, the Oball Shaker Toy is perfect for baby’s hands to grip and grab.</p>
        <p><button>Add to Cart</button></p>
    </div>
    
    <div class="babycard12">
        <img src="https://i5.walmartimages.com/asr/a8c8037d-4d5b-4b65-94ae-26a9a37e07f7.cfa447f7121b7d818b99fc782c8e9a8c.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff" alt="bicycle" height="130" width="180"/>
        <h1>Besrey Kid Trike 7 in 1 Baby Tricycle</h1>
         <p class="price">$129.99</p>
        <p>If you are looking for a worthy and functional tricycle & stroller, besrey 7 in 1 toddler trike would be perfect for your family!.</p>
        <p><button>Add to Cart</button></p>
    </div>
    
    <footer class="videogame-site-footer1">
    <h1>About Greyson</h1>
    <div className="footer1">
      <button><img src="logo.png" alt='logo' width="150" height="150"/>1717 Harrison St. Newark, NJ 07028,USA</button>
    </div>
    <div className="footer2">
      <button>GET TO KNOW US</button>
      <button>OUR COMPANY</button>
      <button>DIRECTORY</button>
      <button>OUR SUPPLIERS</button>
      <button>ADVERTISE WITH US</button>
      <button>OUR SUPPLIERS</button>
      <button>CONTACT US</button>
    </div>
    <div className="footer3">
    <button>CUSTOMER SERVICE</button>
      <button>HELP CENTER</button>
      <button>RETURNS</button>
      <button>PRODUCT RECALLS</button>
      <button>ACCESSIBILTY</button>
      <button>CONTACT US</button>
    </div>
    <div className="footer4">
      <button>GREYSON'S</button>
      <button>OUR ADS</button>
      <button>TERMS OF SERVICE</button>
      <button>PRIVACY & SECURITY</button>
      <button>CA Privacy Rights</button>
      <button>Do Not Sell My information</button>
      <button>Request My information</button>
      <button>Tax Exempt Program</button>
    </div>
    <div className="footer5">
      <hr/>
      <p> Copyright © 2021 All Rights Reserved by Greyson</p>  
    </div>
    </footer>
    

    </div>
   </div>
 
    
  );
}

export default Babys;