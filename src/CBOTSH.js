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
import './Profile.css';
import './Videogame.css';

function CBOTSH () {
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
    <img src="https://media1.tenor.com/images/3ced764a2cb7ad33ddf2145edb9904ae/tenor.gif?itmid=4320892" alt='flag' className="flag" />
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

    
   <div class="Videogameadjust">
    <div className="nonp">
        <h1>Cathedral Basilica of the Sacred Heart</h1>
        <p1>89 Ridge St, Newark, NJ 07104</p1>
        <p3>(973) 484-4600</p3>
        <p><a className="com1link"href="https://www.newarkbasilica.org/">Basilica!</a></p>
    </div>
    
    <img className="gmflogo"src="https://images.squarespace-cdn.com/content/v1/54889a49e4b0a429df687e67/1554414137554-MH85Y46M6UI9TON1UZWV/ke17ZwdGBToddI8pDm48kFWxnDtCdRm2WA9rXcwtIYR7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UcTSrQkGwCGRqSxozz07hWZrYGYYH8sg4qn8Lpf9k1pYMHPsat2_S1jaQY3SwdyaXg/IMG_5051.jpg?format=2500w" />
    
   <div class="midlinetopthree"></div>
   
   <div class="nonpmission1">
       <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
       <i class="fa fa-bar-chart"></i>
       <h3>Church mission 1</h3>
       <p1>Connecting people with God, through authentic relationships to serve communities.</p1>
    </div>
    
    <div class="nonpmission2">
       <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
       <i class="fa fa-list-ul"></i>
       <h3>Church mission 2</h3>
       <p1>Our mission is to help lead people into a growing relationship with Jesus Christ by creating a dynamic environment for authentic worship and effective communication while developing genuine community with each other.</p1>
    </div>
    
    <div class="nonpmission3">
       <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
       <i class="fa fa-check-circle-o"></i>
       <h3>Church mission 3</h3>
       <p1>We are a diverse community centered on Jesus Christ, seeking to wholly enjoy His grace, faithfully embody His love for one another, and boldly engage our culture with His truth, from our neighborhoods to the nations.</p1>
    </div>
   
    <div class="secondmidlinetopthree"></div>
    
    <div className="videofile">
      <video width="920" height="450" controls>
        <source src="BoysandGirlsClub.mp4" type="video/mp4"/>
      </video>
    </div>
    
    <div class="thirdmidlinetopthree"></div>
    
      <div class="similarnearyou">
      <h2>Church Near you</h2>
      <p1> Similar Church that you may be interested</p1>
    </div>
    

    <div className="bottomslider">
     <div className="bottomimages">
       <input type="radio" name="slide" id="simage1" checked/>
       <input type="radio" name="slide" id="simage2" />
       <img src="https://www.abc.net.au/news/image/9445446-3x2-940x627.jpg" class="simg1" alt="image1" />
       <img src="https://img.gta5-mods.com/q95/images/church-interior/e18c47-pic6.png" class="simg2" alt="image2"/>
      </div>
    <div className="sdot">
        <label for="simage1"></label>
        <label for="simage2"></label>
    </div>
  
    
     <footer class="Profile-site-footer1">
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
    </div>
    
  );
}

export default CBOTSH;
