import './Homeimprovement.css';
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
import Homeimpro from './Homeimprovement';


function Improvement () {
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


    <div class="sportadjust">
    <div class="sportcard1">
        <img src="https://m.media-amazon.com/images/I/61KxwgPFjHL._AC_UL320_.jpg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff" alt="brackets" height="130" width="180"/>
        <h1>Heavy Duty Brackets</h1>
         <p class="price">$18.01</p>
        <p>Door Security Bar Holder Brackets Fit for 2 X 4's Lumber for Door Reinforcement. Bring more stability to your building! </p>
        <p><button>Add to Cart</button></p>
    </div>

    <div class="sportcard2">
        <img src="https://m.media-amazon.com/images/I/71SacGxgeWL._AC_UL320_.jpg" alt="glights" height="130" width="180"/>
        <h1>Led Garage Light for Large Space</h1>
         <p class="price">$56.94</p>
        <p>LED Super Bright Garage Lighting with Adjustable Multi-Position Panels Tribright Garage Ceiling Light Bulb</p>
        <p><button>Add to Cart</button></p>
    </div>

    <div class="sportcard3">
        <img src="https://images-na.ssl-images-amazon.com/images/I/81pPztijC4L._AC_SL1500_.jpg" alt="tvleds" height="130" width="180"/>
        <h1>PANGTON VILLA Led Strip Lights</h1>
         <p class="price">$29.94</p>
        <p>6.56ft for 40-60in TV USB Backlight Kit with Remote-16 Color 5050 Bias HDTV. Take TV to the next level.</p>
        <p><button>Add to Cart</button></p>
    </div>

    <div class="sportcard4">
        <img src="https://images-na.ssl-images-amazon.com/images/I/81PSdy89mjL._AC_SL1500_.jpg" alt="showerhead" height="130" width="180"/>
        <h1>AquaDance Handheld Shower</h1>
         <p class="price">$130.99</p>
        <p>Ultimate Shower Experience! Officially Independently Tested to Meet Strict US Quality & Performance Standards!</p>
        <p><button>Add to Cart</button></p>
    </div>


    <div class="sportcard5">
        <img src="https://images-na.ssl-images-amazon.com/images/I/71OV1eu6GHL._AC_SL1500_.jpg" alt="tape" height="130" width="180"/>
        <h1>YYXLIFE Double Sided Carpet Tape</h1>
         <p class="price">$8.97</p>
        <p>Double sided carpet tape uses the tape with the strongest adhesive on the marke.The rug tape excellent adhesion to smooth and rough surfaces!</p>
        <p><button>Add to Cart</button></p>
    </div>

    <div class="sportcard6">
        <img src="https://images-na.ssl-images-amazon.com/images/I/81vknv8eDmL._AC_SL1500_.jpg" alt="shleves" height="130" width="180"/>
        <h1>Whitmore Shoe Holder</h1>
         <p class="price">$29.99</p>
        <p>Perfect shoe holders for all of your shoes! Even if you have more than one pair! Wow! And the shoes just sit there, incredible!</p>
        <p><button>Add to Cart</button></p>
    </div>

    <div class="sportcard7">
        <img src="https://m.media-amazon.com/images/I/71lFMBXGotL._AC_UL320_.jpg" alt="extinguisher" height="130" width="180"/>
        <h1>28 LEDs Solar Lights Outdoor</h1>
         <p class="price"> $44.99</p>
        <p>400lm Brightness & 120 Degree Lighting Range: Luposwiten solar light has 28 powerful LEDs which produces 400 lumens illumination.</p>
        <p><button>Add to Cart</button></p>
    </div>

    <div class="sportcard8">
        <img src="https://m.media-amazon.com/images/I/41xKi9wlNhL._AC_UL320_.jpg" alt="nightlight" height="130" width="180"/>
        <h1>Best Toilet Night Light</h1>
         <p class="price">$9.50</p>
        <p>Best Toilet Nightlight is designed with a soft and flexible PVC neck that can be bent easily to match any toilet type, regardless of the shape.</p>
        <p><button>Add to Cart</button></p>
    </div>

    <div class="sportcard9">
        <img src="https://images-na.ssl-images-amazon.com/images/I/71NPnqSHtlL._AC_SL1500_.jpg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff" alt="electrosss" height="130" width="180"/>
        <h1>Smart Plug Amysen </h1>
         <p class="price">$25.99</p>
        <p>Smart remote control: the smart plug works with amazon alexa and google home which helps to manage your home devices vocally.</p>
        <p><button>Add to Cart</button></p>
    </div>

    <div class="sportcard10">
        <img src="https://m.media-amazon.com/images/I/31WhWSRwxhL._AC_UL320_.jpg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff" alt="Draft" height="130" width="180"/>
        <h1>Door Draft Stopper</h1>
         <p class="price">$12.94</p>
        <p>BLOCK DRAFT AND DEBRIS – Hate dirt, dust and drafty rooms? Our door draft stopper gets rid of drafty, inconsistent temperatures.</p>
        <p><button>Add to Cart</button></p>
    </div>

    <div class="sportcard11">
        <img src="https://images-na.ssl-images-amazon.com/images/I/91gOBSLbZhL._AC_SL1500_.jpg" alt="brush" height="130" width="180"/>
        <h1>Pro Grade Paint Brushes</h1>
         <p class="price">$9.99</p>
        <p>Premium Quality Paint Brushes At A Cheap Price! No Cardboard Covers Come With This Set. The SRT filament blend holds more paint!</p>
        <p><button>Add to Cart</button></p>
    </div>

    <div class="sportcard12">
        <img src="https://images-na.ssl-images-amazon.com/images/I/51NudmuuifL._AC_SL1500_.jpg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff" alt="toilet" height="130" width="180"/>
        <h1>MAYFAIR Toilet Seat</h1>
         <p class="price">$21.59</p>
        <p>NO SLAMMING: Seat closes slowly and quietly with a tap to eliminate pinched fingers. Easy installation and even easier usability.</p>
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

export default Improvement;
