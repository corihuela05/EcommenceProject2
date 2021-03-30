import './Auto.css';
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
import { useState } from "react";


function Autos () {
     const [isLoggedIn, setIsLoggedIn] = useState(
        localStorage.getItem("isLoggedIn")
    );

    const [username, setUsername] = useState(localStorage.getItem("username"));


    function handleuserlogout() {
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("username");
    }
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
    
    <div class="autoadjust">
    <div class="autocard1">
        <img src="https://i5.walmartimages.com/asr/860fbab2-31a2-488a-a7e0-90227a8b1d01_1.791f8970d006656288fb4feb3221aa50.jpeg" alt="carfreshner" height="130" width="180"/>
        <h1>Little Trees Air Freshener</h1>
         <p class="price">$4.34</p>
        <p>The original car air freshener, Little Trees freshens at home and on the road. Car-Freshner Corporation strives to create the best car air.</p>
        <p><button>Add to Cart</button></p>
    </div>
    
    <div class="autocard2">
        <img src="https://i5.walmartimages.com/asr/1e4954c8-dbf3-4995-871f-fd005d4a5bd6_1.359dcb2a41975e14ea5fba61cee689f1.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff" alt="watercar" height="130" width="180"/>
        <h1>Rain-X -20F 2-In-1 All-Season</h1>
         <p class="price">$2.97</p>
        <p>Rain-X 2-in-1 All-Season Washer Fluid helps you to keep your car clean. It's designed to give you consistent performance all year long.</p>
        <p><button>Add to Cart</button></p>
    </div>
    
    <div class="autocard3">
        <img src="https://i5.walmartimages.com/asr/fbd1914e-1afe-4387-a53b-1ecbc9421eb0_1.0bd95cd8b5615aecfbde5110d0ab48ed.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff" alt="jack" height="130" width="180"/>
        <h1>Black Jack 2.25 Ton Trolley Jack</h1>
         <p class="price">$70.00</p>
        <p>Trolley Jack with Jack Stands kit is a must-have accessory for all automobile owners. Change tires or perform other vehicle maintenance.</p>
        <p><button>Add to Cart</button></p>
    </div>
    
    <div class="autocard4">
        <img src="https://i5.walmartimages.com/asr/0ab326ee-0e31-4cbb-a434-3228672bc0b0.37b4859d987630d3cc3fd307d5ce584e.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff" alt="wipers" height="130" width="180"/>
        <h1>Windshield Wiper Blade </h1>
         <p class="price">$15.27</p>
        <p>" Rain‑X® Latitude® Water Repellency 2-n-1 Wiper Blades MORE THAN JUST A WIPER BLADE™!  More Than Just a Wiper Blade!</p>
        <p><button>Add to Cart</button></p>
    </div>
    
    
    <div class="autocard5">
        <img src="https://i5.walmartimages.com/asr/8c0e05a3-fbec-456a-8349-8e9e8dd80995_1.c5f6b94ddb4e85298df249290456a0b4.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff" alt="jumpercar" height="130" width="180"/>
        <h1>Jump Starter</h1>
         <p class="price">$118.03</p>
        <p>The STANLEY 1000/500 Amp Jump Starter provides a practical, multi-purpose power station for emergency situations and everyday power needs. Just connect the heavy-duty, powder-coated metal clamps to instantly start up.</p>
        <p><button>Add to Cart</button></p>
    </div>
    
    <div class="autocard6">
        <img src="https://i5.walmartimages.com/asr/587cbc3d-33ee-44c3-827f-26a1136dcdf4_1.77f9386554e41728fc5da1467d7661c1.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff" alt="tire" height="130" width="180"/>
        <h1>Achilles Sport High Performance</h1>
         <p class="price">$77.27</p>
        <p>The Achilles ATR Sport 2 is a high performance tire specially designed for drivers looking for superior control, year-round traction, and comfort.</p>
        <p><button>Add to Cart</button></p>
    </div>
    
    <div class="autocard7">
        <img src="https://i5.walmartimages.com/asr/e60b68a1-790c-4ba9-b59c-6cf04f4efefa_1.02e88d2647f9c24fb07c8fdd9b78aa76.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff" alt="mats" height="130" width="180"/>
        <h1>All-Weather Floor Mats</h1>
         <p class="price">$108.88</p>
        <p>The Floor Mats are molded in color and feature deep ribs to trap and  hold water, snow and mud to protect your carpet and keep it clean..</p>
        <p><button>Add to Cart</button></p>
    </div>
    
    <div class="autocard8">
        <img src="https://i5.walmartimages.com/asr/906a5472-9a82-4269-a849-1a5a68f7c6a2_1.5067e34a56703e7bed72002136b9ff60.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff" alt="windshieldcover" height="130" width="180"/>
        <h1>Windshield Snow Cover</h1>
         <p class="price">$29.99</p>
        <p>Using a thermal shield that traps heat, you'll wake up every morning to a snow and ice free windshield.</p>
        <p><button>Add to Cart</button></p>
    </div>
    
    <div class="autocard9">
        <img src="https://i5.walmartimages.com/asr/3ab44bbd-fd7c-4f6d-9160-864084ba5e1a.f322b3294133b87e527ace7fa1a9ea5a.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff" alt="glasswipes" height="130" width="180"/>
        <h1>Automotive Glass Wipes</h1>
         <p class="price">$3.97</p>
        <p>Your car's delicate surfaces are too important to trust to household cleaners. Unlike some household glass cleaners.</p>
        <p><button>Add to Cart</button></p>
    </div>
    
    <div class="autocard10">
        <img src="https://i5.walmartimages.com/asr/5022f0d9-21f4-44da-a2a5-9619cbb58edf_1.71315086309806e5543df65981462486.png?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff" alt="tireclean" height="130" width="180"/>
        <h1>Armor Tire Foam</h1>
         <p class="price">$3.57</p>
        <p>Armor All Tire Foam Protectant (20 ounces). For generations, Armor All has been a pioneer in tire care, offering trusted products that enhance, protect. Currently the number one ranked and top rated brand.</p>
        <p><button>Add to Cart</button></p>
    </div>
    
    <div class="autocard11">
        <img src="https://i5.walmartimages.com/asr/6e3eab71-663c-445c-9a51-3fbc86c251d3_1.3a2e2701087fc44a772f818bfa76c9d1.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff" alt="carinterior" height="130" width="180"/>
        <h1>Car Interior Protectant</h1>
         <p class="price">$12.97</p>
        <p>Armor All Original Protectant (64 fluid ounces). Your vehicle is exposed to dirt, grime and harmful elements like UV rays and oxidation every day.</p>
        <p><button>Add to Cart</button></p>
    </div>
    
    <div class="autocard12">
        <img src="https://i5.walmartimages.com/asr/351d2bd3-6c55-4a90-ae13-0b472675b898.4dd8ecc082bd55d82de0c076e7a2a8a7.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff" alt="shampooo and cond car" height="130" width="180"/>
        <h1>Car Wash Shampoo</h1>
         <p class="price">$6.97</p>
        <p>Step up your game with this Logitech HERO Core wired gaming mouse. Count on Armor All® Original Protectant to clean, protect</p>
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

export default Autos;
