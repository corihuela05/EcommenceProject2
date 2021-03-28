import React from "react";
import ReactDOM from 'react-dom';
import './art_products.css';
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

function Art() {
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
    <div class="Artadjust">
    <div class="artcard1">
        <img src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTiZPDN9BEXCtIFUitLZY41rXNvNqlRpGrkjEtu_gT7FxRQkRNwFsTZtMCMtaorZabI3nUz7dbkEMgo3NGekM1QhJGoxhUL1WDMRWhwcygWrNOZkGoREgq5Zw&usqp=CAE" alt="canvas" height="130" width="180"/>
        <h1>Artist's Loft Necessities</h1>
         <p class="price">$10.99$1.37 ea.</p>
        <p>8 Pack 10" x 10" Super Value Canvas.</p>
        <p><button>Add to Cart</button></p>
    </div>
    
    <div class="artcard2">
        <img src="https://imgprd19.hobbylobby.com/0/65/13/06513633626902e938682933211dd920b7db7948/350Wx350H-298224-123119.jpg" alt="Paint Brushes" height="130" width="180"/>
        <h1>Tempera Paint Brushes - 25 Piece Set</h1>
         <p class="price">$8.59</p>
        <p>Set of 10 Colors Paint Markers for Black Paper, Rock Painting, Scrapbooking Crafts, Card Making, Ceramics, DIY Photo Album, Ceramic, Glass and More (Medium tip).</p>
        <p><button>Add to Cart</button></p>
    </div>
    
    <div class="artcard3">
        <img src="https://images-na.ssl-images-amazon.com/images/I/71icvScKFOL._AC_SL1090_.jpg" alt="PANDAFLY Metallic Marker Pens" height="130" width="180"/>
        <h1>PANDAFLY Metallic Marker Pens</h1>
         <p class="price">$20</p>
        <p>Using a naturally derived micellar formula, each super soft wipe traps makeup, dirt, and impurities, then gently whisks it away.</p>
        <p><button>Add to Cart</button></p>
    </div>
    
    <div class="artcard4">
        <img src="https://images-na.ssl-images-amazon.com/images/I/61e4cFFg6XL._AC_SL1001_.jpg" alt="MPen Organizer" height="130" width="180"/>
        <h1>Marbrasse Wooden Pen Organizer</h1>
         <p class="price">$16.99</p>
        <p>Multi-Functional DIY Pen Holder Box, Desktop Stationary, Easy Assembly, Home Office Art Supplies Organizer Storage with Drawer (B11-Cherry Color).</p>
        <p><button>Add to Cart</button></p>
    </div>
    
    
    <div class="artcard5">
        <img src="https://images-na.ssl-images-amazon.com/images/I/81ner8eOhdL._AC_SL1500_.jpg" alt="Sewing KIT" height="130" width="180"/>
        <h1>ARTIKA Sewing KIT</h1>
         <p class="price">$14.97 was $24.99</p>
        <p>Premium Sewing Supplies, XL Spools of Thread, Most Useful Colors, Emergency Repairs, Travel, Kids, Beginners and Home (Rainbow).</p>
        <p><button>Add to Cart</button></p>
    </div>
    
    <div class="artcard6">
        <img src="https://images-na.ssl-images-amazon.com/images/I/51JFZ7U25-L._AC_SL1100_.jpg" alt="sewing machine" height="130" width="180"/>
        <h1>SINGER 4423 Sewing Machine</h1>
         <p class="price">$179.99</p>
        <p>SINGER HEAVY DUTY SEWING MACHINE: The 23 built-in stitches including basic, stretch, decorative, and buttonhole stitches allow you to sew a variety of projects, such as fashions, home décor, quilts, crafts, and more.</p>
        <p><button>Add to Cart</button></p>
    </div>
    
    <div class="artcard7">
        <img src="https://images-na.ssl-images-amazon.com/images/I/81U7FqUP6NL._AC_SL1500_.jpg" alt="Coquimbo Sewing Kit" height="130" width="180"/>
        <h1>Coquimbo Sewing Kit</h1>
         <p class="price">$8.99 was $16.99</p>
        <p>Sewing Kit for Traveler, Adults, Beginner, Emergency, DIY Sewing Supplies Organizer Filled with Scissors, Thimble, Thread, Sewing Needles, Tape Measure etc (Black, S).</p>
        <p><button>Add to Cart</button></p>
    </div>
    
    <div class="artcard8">
        <img src="https://images-na.ssl-images-amazon.com/images/I/717uEoBvk0L._AC_SL1500_.jpg" alt="Scissors" height="130" width="180"/>
        <h1>Singer Bundle - Scissors</h1>
         <p class="price">$18.99</p>
        <p>Includes Singer ProSeries Thread Snips, ProSeries 8 1/2 inch Heavy Duty Scissors, and ProSeries 4 1/2 inch Detail Scissors</p>
        <p><button>Add to Cart</button></p>
    </div>
    
    <div class="artcard9">
        <img src="https://images-na.ssl-images-amazon.com/images/I/71R-J153mfL._AC_SL1121_.jpg" alt="neon party supplies" height="130" width="180"/>
        <h1>Glow Neon Party Supplies</h1>
         <p class="price">$31.97 was $39.99</p>
        <p>Serves 32 guests, Hard Plastic & Disposable Neon Plates 9", Cups Tumblers 9 Oz, Cutlery - Forks, Knives, Spoons, and Napkins, Glow In The Dark Neon.</p>
        <p><button>Add to Cart</button></p>
    </div>
    
    <div class="artcard10">
        <img src="https://images-na.ssl-images-amazon.com/images/I/719djVJD%2BUL._AC_SL1500_.jpg" alt="glow sticks" height="130" width="180"/>
        <h1>PartySticks Glow Sticks</h1>
         <p class="price">$10.25</p>
        <p>100pk - 8 Inch Glow in the Dark Light Up Sticks Party Favors, Glow Party Decorations, Neon Party Glow Necklaces and Glow Bracelets with Connectors.</p>
        <p><button>Add to Cart</button></p>
    </div>
    
    <div class="artcard11">
        <img src="https://images-na.ssl-images-amazon.com/images/I/71e4kmJGEEL._AC_SL1200_.jpg" alt="party lights" height="130" width="180"/>
        <h1>Sound Activated Party Lights</h1>
         <p class="price">$13.99</p>
        <p>Remote Control Dj Lighting, RGB Disco Ball, Strobe Lamp 7 Modes Stage Par Light for Home Room Dance Parties Birthday DJ Bar Karaoke Xmas Wedding Show Club Pub.</p>
        <p><button>Add to Cart</button></p>
    </div>
    
    <div class="artcard12">
        <img src="https://images-na.ssl-images-amazon.com/images/I/91q%2Bv4SYiQL._AC_SL1500_.jpg" alt="rose gold party set" height="130" width="180"/>
        <h1>Rose Gold Birthday Party Decorations</h1>
         <p class="price">$31.99 was $34.99</p>
        <p>Rose Gold Party Decorations Set for Girls Or Women, Happy Birthday Banner, Curtains, Table Runner, Balloons, Plates, Cups, Tissue for 24 Guest by JSN PARTY.</p>
        <p><button>Add to Cart</button></p>
    </div>
    
    <footer class="art-site-footer1">
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

export default Art;