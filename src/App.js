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
import Homeandfurnitures from './homeandfurniture';
import School from './Schools';
import Termofservice from './Termofservices';
import FoodProducts from './food_products';


import ArtProducts from './art_products';
import Church from './Church';


function App() {
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
    <button>Clothing, Shoes, & Accessories</button>
    
      <form onSubmit={handleHomeandfurnitures}>
       <button>Home, Furniture & Appliances</button>
    </form>
   
    <button>Toys, Games and Video Games</button>
    <button>Home Improvement</button>
    <button>Movies, Music & Books</button>
    <button>Patio & Garden</button>
    <button onClick={handlefoodProducts} >Food</button>
    <button>Pets</button>
    <button>Pharmacy, Health & Personal Care</button>
    <button onClick={handlebeautyProducts} >Beauty</button>
    <button>Sports, Fitness & Outdoors</button>
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
    <div className="sliderslide">
    <div className="slider">
      <div className="images">
        <input type="radio" name="slide" id="image1" checked/>
        <input type="radio" name="slide" id="image2" checked/>
      
        <img src="https://philanthropyu.org/wp-content/uploads/2020/01/1-1200-x-800.jpg" class="img1" alt="image1" />
        <img src="http://www.epilepsy.com/sites/core/files/styles/banner_image/public/upload/image/Get%20Involved%20logo_0.jpg" class="img2" alt="image2"/>
      </div>
      <div className="dot">
        <label for="image1"></label>
        <label for="image2"></label>
      </div>
    </div>
    <div className="threebox">
    
          <form onSubmit={handleChurch}>
      <button className="church"><img src="https://upload.wikimedia.org/wikipedia/commons/f/f6/Japanese_Map_symbol_%28Church%29.svg"  alt='church' width="150" height="100"/>Church<p>1,782 videos</p></button>
    </form>
      
      
      <form onSubmit={handleSchoolst}>
      <button className="school"><img src="https://media2.giphy.com/media/1etn2BmiW0nOgoZHTL/source.gif" alt='school' width="150" height="100"/>School<p>1,023 videos</p></button>
    </form>

   
       <form onSubmit={handleNonprofit}>
            <button className="organization"><img src="organization.jpg" alt='organization' width="150" height="100"/>Non-Profits<p>2,416 videos</p></button>
    </form>

    </div>
    <div className="addspace">
      <button className="spaces"><img src="addspace.jpg" alt='add spaces' width="250" height="180"/>ADD SPACE</button>
    </div>
    <div className="category">
      <form onSubmit={handlevideogame}>
      <button id="games"><img src="https://media4.giphy.com/media/9VtLabdE5IGJf4N5eS/source.gif"  alt='games' class="thumbnail" width="150" height="200"/>VIDEO GAMES</button>
      </form>
      <button id="baby"><img src="https://thumbs.gfycat.com/OilyInfantileBangeltiger-small.gif"  alt='baby' class="thumbnail" width="150" height="200"/>BABY</button>
      <button id="patio"><img src="https://media.tenor.com/images/7cd663f1bf6d0b7b64b00aa17940fe6a/tenor.gif" class="thumbnail"  alt='patio' width="150" height="200"/>PATIO</button>
      <button id="pets"><img src="https://media3.giphy.com/media/4blbm32XAiY0YVkQfW/source.gif"  alt='pets' class="thumbnail" width="150" height="200"/>PETS</button>
      <button id="pharmacy"><img src="https://thumbs.gfycat.com/GregariousAbandonedBongo-max-1mb.gif"  alt='pharmacy' class="thumbnail"  width="150" height="200"/>PHARMACY</button>
      <button id="beauty"><img src="https://cdn-a.william-reed.com/var/wrbm_gb_food_pharma/storage/images/publications/cosmetics/cosmeticsdesign.com/headlines/market-trends/unfiltered-experience-rethinks-what-s-possible-with-virtual-beauty-events/11691757-1-eng-GB/Unfiltered-Experience-rethinks-what-s-possible-with-virtual-beauty-events_wrbm_large.jpg" alt='beauty'  class="thumbnail" width="150" height="200" onClick={handlebeautyProducts}/>BEAUTY</button>
      <button id="sports"><img src="https://cdn-a.william-reed.com/var/wrbm_gb_food_pharma/storage/images/publications/cosmetics/cosmeticsdesign.com/headlines/market-trends/unfiltered-experience-rethinks-what-s-possible-with-virtual-beauty-events/11691757-1-eng-GB/Unfiltered-Experience-rethinks-what-s-possible-with-virtual-beauty-events_wrbm_large.jpg" alt='beauty'  class="thumbnail" width="150" height="200" onClick={handlebeautyProducts}/>BEAUTY</button>

      <button id="sports"><img src="http://cdn.lowgif.com/full/af53e1302b915b40-.gif" alt='sports' class="thumbnail"width="150" height="200"/>SPORTS</button>
      <button id="auto"><img src="https://media4.giphy.com/media/47JkfnjsIODDhq3Xyr/source.gif" alt='auto' class="thumbnail" width="150" height="200"/>AUTO</button>
      <button id="music"><img src="https://media2.giphy.com/media/mCbhenyAxo3oytYHan/giphy.gif" alt='music' class="thumbnail" width="150" height="200"/>MUSIC</button>

    </div>
    <img src="https://media1.giphy.com/media/U4XWNZCSqI9BANEKx9/giphy.gif" alt='newsletter' className="letterpic" width="200" height="150"/>
    <div className="newsletter">
      <input type="input" id="email" placeholder="Email Address"/>
      <button id="subscribe">Subscribe</button>
    </div>
    
    
    <footer class="site-footer">
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
      
       <form onSubmit={handleTermofservices}>
            <button>TERMS OF SERVICE</button>
    </form>
    
    
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

export default App;
