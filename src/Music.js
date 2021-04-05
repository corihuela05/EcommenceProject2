import './Music.css';
import React from "react";
import ReactDOM from 'react-dom';
import Shop from "./Shop";
import Product from "./Product";
import Home from "./App";
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
import Ourads from './Ourads';
import ClothingProducts from './clothing_products';
import ArtProducts from './art_products';
import Church from './Church';
import Gettoknowus from './Gettoknowus';
import { useState } from "react";
import App from './App';

function Musics () {
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
      function handlefoodProducts() {
          ReactDOM.render(<FoodProducts />, document.getElementById('root'));
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
      function handleGetknowus() {
          ReactDOM.render(<Gettoknowus />, document.getElementById('root'));
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
  
  
  return (
    <div className="App">
    <div className="Appheader">
    <img src="logo.png" alt='company logo' className="companylogo" />
    <img src="https://media1.tenor.com/images/3ced764a2cb7ad33ddf2145edb9904ae/tenor.gif?itemid=4320892" alt='flag' className="flag" />
    <div className="searchbar">
      <input type="text" name="search" placeholder="Search.." />
      <button type="submit"><i class="fa fa-search"></i></button>
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
    
    <div class="musicadjust">
    <div class="musiccard1">
        <img src="https://i5.walmartimages.com/asr/b880aec2-fdc9-4773-88da-7dfb87189043_1.82f48e44de7f6b766205c10a42e5004f.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff" alt="cassetteplayer" height="130" width="180"/>
        <h1>Turntable with CD and Cassette</h1>
         <p class="price">$89.99</p>
        <p>This Victrola 6-in-1 Nostalgic Bluetooth Record Player with 3-Speed Turntable adds a fashionable retro touch to your space.</p>
        <p><button>Add to Cart</button></p>
    </div>
    
    <div class="musiccard2">
        <img src="https://i5.walmartimages.com/asr/65e565f3-6979-4953-9af3-41b16af0727f_11.a440edb6d9f39af3b96b27f34a0c053d.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff" alt="spotify" height="130" width="180"/>
        <h1>12 month Gift Card</h1>
         <p class="price">$99.00</p>
        <p>With Spotify, it’s easy to find the right music for every moment – on your phone, your computer, your tablet and more.</p>
        <p><button>Add to Cart</button></p>
    </div>
    
    <div class="musiccard3">
        <img src="https://i5.walmartimages.com/asr/62edea1d-3f17-48d6-ac11-b06b2ad3c406_1.8b574e2bbdf8f13bbfbd62b233cfe49f.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff" alt="drum" height="130" width="180"/>
        <h1>Junior Drum Set</h1>
         <p class="price">$229.99</p>
        <p>This GP Percussion GP50BL Complete Junior Drum Set will make an ideal present for your son. It is almost the replica of a traditional drum set, but built at a smaller scale, allowing your young talent musician to develop skills.</p>
        <p><button>Add to Cart</button></p>
    </div>
    
    <div class="musiccard4">
        <img src="https://i5.walmartimages.com/asr/e4af9fa9-35bd-4675-bc6e-843f8992b7d1_1.63328f473d151b799dcd2440d8b1e87d.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff" alt="guitar" height="130" width="180"/>
        <h1>Acoustic-Electric Guitar </h1>
         <p class="price">$119.99</p>
        <p>This bundle from Ashthorpe features a top-quality acoustic-electric guitar (can be played "Acoustic" without an amplifier, not included).</p>
        <p><button>Add to Cart</button></p>
    </div>
    
    
    <div class="musiccard5">
        <img src="https://images-na.ssl-images-amazon.com/images/I/71v-73VMxaL._AC_SL1500_.jpg" alt="octapad" height="130" width="180"/>
        <h1>Roland spd-30 octapad</h1>
         <p class="price">$871.91</p>
        <p>For decades, roland has been a leader in electronic percussion technology. The original octapad was a revolutionary.</p>
        <p><button>Add to Cart</button></p>
    </div>
    
    <div class="musiccard6">
        <img src="https://i5.walmartimages.com/asr/f0444581-d90a-4b01-861f-cd498644f63f.8b050be894e1f1c709f563c2fee6ca9e.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff" alt="piano" height="130" width="180"/>
        <h1>Digital Piano</h1>
         <p class="price">$499.99</p>
        <p>This Yamaha P-45 Digital Piano has a basic set of features, ideal for the needs of the beginner piano student. Features GHS weighted action (heavier in the low end and lighter in the high end) Advanced Wave Memory Stereo Sampling.</p>
        <p><button>Add to Cart</button></p>
    </div>
    
    <div class="musiccard7">
        <img src="https://i5.walmartimages.com/asr/ac56fad4-e086-4295-9af1-392820829921_1.1729b1be436c2381795541df9d9ed01d.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff" alt="bspeaker" height="130" width="180"/>
        <h1>Wireless Stereo Speaker</h1>
         <p class="price">$124.50</p>
        <p>QFX's PBX-808TWS Twin 8-inch Party Speakers are the newest speakers for your next event. The two speakers will link via bluetooth.</p>
        <p><button>Add to Cart</button></p>
    </div>
    
    <div class="musiccard8">
        <img src="https://i5.walmartimages.com/asr/3efd2ad6-2f86-46d5-b9c8-73d85c3f92a0_1.26befaf8746e5a7a181efbfd265d94d4.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff" alt="HTS" height="130" width="180"/>
        <h1>Home Theater System</h1>
         <p class="price">$198.00</p>
        <p>Enjoy theater quality sound from the comfort of your living room by adding this RCA Bluetooth Home Theater System.</p>
        <p><button>Add to Cart</button></p>
    </div>
    
    <div class="musiccard9">
        <img src="https://i5.walmartimages.com/asr/06ead0c4-446a-4f03-9d0c-745c3403549b_1.63a640b4437ebb22b6e444d70efe9d1d.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff" alt="trumpet" height="130" width="180"/>
        <h1>Trumpet Set</h1>
         <p class="price">$129.99</p>
        <p>Mendini by Cecilio trumpets are ideal for beginner or student musicians. This trumpet features a phosphorus copper lead mouth pipe, smooth action valves topped with comfortable white faux mother of pearl key inlaid.</p>
        <p><button>Add to Cart</button></p>
    </div>
    
    <div class="musiccard10">
        <img src="https://i5.walmartimages.com/asr/7b14efcc-e92e-422d-a7e3-ac2f71e7460f_1.061d65fce22ec61155fea22a2b8e44af.png?odnWidth=612&odnHeight=612&odnBg=ffffff" alt="Hercules DJ Control Inpulse 200" height="130" width="180"/>
        <h1>Hercules DJ Control Inpulse</h1>
         <p class="price">$129.99</p>
        <p>Hercules introduces the First-Ever range of DJ controllers to really learn how to mix. Train your ear and learn to master beat matching manually.</p>
        <p><button>Add to Cart</button></p>
    </div>
    
    <div class="musiccard11">
        <img src="https://i5.walmartimages.com/asr/46b8151b-f2a1-4b3f-9ea0-9b0372d773d7_1.2818c4ebe40768132edf9502a011af72.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff" alt="Singing Machine" height="130" width="180"/>
        <h1>Singing Machine </h1>
         <p class="price">$49.97</p>
        <p>Your party guests will thank you when you turn on this awesome karaoke system packed with awesome features for you to create fun-lasting singable moments. This system lets you play your music CDs and CD+Gs.</p>
        <p><button>Add to Cart</button></p>
    </div>
    
    <div class="musiccard12">
        <img src="https://i5.walmartimages.com/asr/09b18e80-3a71-4b67-8379-e8f2ff1b5dcf_1.97696a7d9f12b4c1c3dd0ce0de760de3.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff" alt="7PCS Condenser Microphone Kits" height="130" width="180"/>
        <h1>7PCS Condenser Microphone Kits</h1>
         <p class="price">$40.99</p>
        <p>Superior professional condenser microphone full set to make the recordings more colorful that sounds as good on your desktop as studio.</p>
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

export default Musics;
