import React from "react";
import ReactDOM from 'react-dom';
import './clothing_products.css';
import Shop from "./Shop";
import Product from "./Product";
import Home from "./App"
import './App.css';
import Cart from './Cart';
import Nonprofit from "./Nonprofit";
import Account from './Account';
import FormSignup from './userlogin';
import Profile from './Profile'
import Videog from './Videogame';

function Clothing() {
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
    <button>Home, Furniture & Appliances</button>
    <button>Toys, Games and Video Games</button>
    <button>Home Improvement</button>
    <button>Movies, Music & Books</button>
    <button>Patio & Garden</button>
    <button>Food</button>
    <button>Pets</button>
    <button>Pharmacy, Health & Personal Care</button>
    <button>Beauty</button>
    <button>Sports, Fitness & Outdoors</button>
    <button>Auto & Tire</button>
    <button>Photos</button>
    <button>Art, Craft, Sewing & Party Supplies</button>
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
    
    <footer class="food-site-footer1">
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

export default Clothing;