import React from "react";
import ReactDOM from 'react-dom';
import Shop from "./Shop";
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
import './Product.css';

function Product() {
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
    <div className="productlogo">
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
    <div className="productsliderslide">
    <div className="boxs">
          <li><img src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/586449/01/mod01/fnd/PNA/fmt/png/Essentials-Men's-Logo-Tee" alt="image1" width="100" height="100"/><ul id="active"><img src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/586449/01/mod01/fnd/PNA/fmt/png/Essentials-Men's-Logo-Tee" alt="image1" /></ul></li>
          <li><img src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/586449/01/mod02/fnd/PNA/fmt/png/Essentials-Men's-Logo-Tee" alt="image2" width="100" height="100"/> <ul><img src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/586449/01/mod02/fnd/PNA/fmt/png/Essentials-Men's-Logo-Tee" alt="image2" /></ul></li>
          <li><img src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/586449/01/mod03/fnd/PNA/fmt/png/Essentials-Men's-Logo-Tee" alt="image3" width="100" height="100"/> <ul><img src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/586449/01/mod03/fnd/PNA/fmt/png/Essentials-Men's-Logo-Tee" alt="image3" /></ul></li>
          <li><img src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/586449/01/fnd/PNA/fmt/png/Essentials-Men's-Logo-Tee" alt="image4" width="100" height="100"/> <ul><img src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/586449/01/fnd/PNA/fmt/png/Essentials-Men's-Logo-Tee" alt="image4" /></ul></li>
      </div>
      <div className="productname">
        <h1>Men's Puma T-Shirts</h1>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
        <p><span class="fa fa-star"></span><span class="fa fa-star "></span><span class="fa fa-star "></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span> 3 reviews</p>
        <h1>$35</h1>
        <button className="addtochart">Add To Cart</button>
      </div>
      <div className="similarproduct">
        <h1 className="title">Similar Products</h1>
        <div className="productsimilar">
          <img src="https://images.sportsdirect.com/images/products/59852840_l.jpg" alt='tshirt' className="logo" />
          <button><p>T-SHIRT</p><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/><p><span class="fa fa-star"></span><span class="fa fa-star "></span><span class="fa fa-star "></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span></p><p>$25</p> </button>
        </div>
        <div className="productsimilar1">
          <img src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRn4p4amoMiDlyjR8Mgh1gB0dZK8ZKaUNAU2ifA8BhPcf3t8crWDSRSjLiClk1S3Z9hRquwDWseZc0&usqp=CAc" alt='tshirt' className="logo" />
          <button><p>T-SHIRT</p><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/><p><span class="fa fa-star"></span><span class="fa fa-star "></span><span class="fa fa-star "></span><span class="fa fa-star "></span><span class="fa fa-star "></span></p><p>$35</p></button>
        </div>
        <div className="productsimilar2">
          <img src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQXm_6gex_tOMtlviPbbv4NudZOTQvGbXKtd3zow7YFPa4zi2pdOP0h5wZX86p8psHkkgyD8jfTxJY&usqp=CAc" alt='tshirt' className="logo" />
          <button><p>T-SHIRT</p><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/><p><span class="fa fa-star"></span><span class="fa fa-star "></span><span class="fa fa-star "></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span></p><p>$20</p></button>
        </div>
    </div>
    <div className="reviews">
      <h1>Reviews</h1>
      <div className="productreview">
        <img src="https://i.stack.imgur.com/l60Hf.png" alt='reviewprofile' className="logo" />
        <button><p>Sunny Patel</p><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/><p>March 6, 2021</p><p><span class="fa fa-star"></span><span class="fa fa-star "></span><span class="fa fa-star "></span><span class="fa fa-star "></span><span class="fa fa-star "></span></p></button>
      </div>
      <div className="writtenreview">  
        <p>I love this T-shirt, and I would recommend everyone to buy this T-shirt.</p>
      </div>
      <div className="productreview1">
        <img src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" alt='reviewprofile' className="logo" />
        <button><p>Natukaka</p><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/><p>March 6, 2021</p><p><span class="fa fa-star"></span><span class="fa fa-star "></span><span class="fa fa-star "></span><span class="fa fa-star "></span><span class="fa fa-star checked"></span></p></button>
      </div>
      <div className="writtenreview1">  
        <p>This T-shirt is so nice, and I really liked it.</p>
      </div>
      <div className="productreview2">
        <img src="https://i.stack.imgur.com/l60Hf.png" alt='tshirtprofile' className="logo" />
        <button><p>Dipam Patel</p><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/><p>March 6, 2021</p><p><span class="fa fa-star"></span><span class="fa fa-star "></span><span class="fa fa-star "></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span></p></button>
      </div>
      <div className="writtenreview2">  
        <p>This T-shirt is too expensive, and it's not worth it.</p>
      </div>
    </div>
    <footer class="product-site-footer">
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

export default Product;
