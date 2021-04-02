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
import BeautyProducts from './beauty_products'
import Profile from './Profile'
import Videog from './Videogame';
import Homeandfurnitures from './homeandfurniture';
import School from './Schools';





function Accessibility() {
  function handlebeautyProducts(){
    ReactDOM.render(<BeautyProducts />,document.getElementById('root'));
  }
  
  function handleHomeandfurnitures(){
  ReactDOM.render(<Homeandfurnitures />,document.getElementById('root'));
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
    </div>
    <div className="sliderslide">
    <div className="slider">
    
    
      <h1>Accessibility </h1>

<h2> An open commitment<h2>
<p>The opening paragraph of the accessibility statement should contain a clear declaration of intent. The following example includes a brief introduction to the statement as a whole:

*Website Name* is committed to providing a website that is accessible to the widest possible audience, regardless of technology or ability. We are actively working to increase the accessibility and usability of our website and in doing so adhere to many of the available standards and guidelines.<p/>

<h2>Guidelines and standards<h2/>
<p>The logical next step is to include information about the guidelines and standards that the website uses to maximise web accessibility. The Web Content Accessibility Guidelines (WCAG) and W3C technologies are the common guidelines and standards used by developers of accessible websites. The example below starts with a clear statement about the level of web accessibility the website aims to achieve. It goes on to explain what the WCAG are and includes the fact that conforming to the guidelines can help people with disabilities.

This website endeavours to conform to level Double-A of the World Wide Web Consortium (W3C) Web Content Accessibility Guidelines 2.1. These guidelines explain how to make web content more accessible for people with disabilities. Conformance with these guidelines will help make the web more user friendly for all people.

The next paragraph should follow on from the information about the guidelines, by informing people about the more technical standards the website follows. The example below indicates that the website will work across all browsers and explains that it should continue to do so when new browsers are released.

This site has been built using code compliant with W3C standards for HTML and CSS. The site displays correctly in current browsers and using standards compliant HTML/CSS code means any future browsers will also display it correctly.

<h2>Exceptions <h2/>
Sometimes, despite best efforts, there are areas of the website that fall outside of intended web accessibility targets. Acknowledging these instances can help people understand the limitations of the site. A note of caution however, such exceptions should not be used as an easy escape from providing real accessibility. Any areas where accessibility is not provided should be indicated, along with an intended roadmap for resolving the inaccessibility. The following example provides an opening paragraph, which should be supplemented with any specific examples of inaccessible areas:

Whilst *Website Name* strive to adhere to the accepted guidelines and standards for accessibility and usability, it is not always possible to do so in all areas of the website.

<h2>Contact information <h2/>
<p>Lastly, it is important to provide people with the ability to contact the website regarding specific problems they may be having. 
A simple email address works well and the following example suggests a simple approach to take:

<p>We are continually seeking out solutions that will bring all areas of the site up to the same level of overall web accessibility.
In the meantime should you experience any difficulty in accessing the *Grayson* website,
please don’t hesitate to contact us.</p>
      
      <div className="dot">
      
    <div>
    
    
      
 
      
    </div>
    
    
  

      
      </div>
    </div>
  
    
    
    <footer class="site-footer">
    <h1>About Greyson</h1>
    <div className="footer1">
      <button><img src="logo.png" alt='logo' width="150" height="150"/>1717 Harrison St. Newark, NJ 07028,USA</button>
    </div>
    <div className="footer2">
     <button>OUR COMPANY</button>
      <button>VENDOR DIRECTORY</button>
      <button>HELP CENTER</button>
      <button>COSTUMER SERVICE</button>
    </div>
    <div className="footer3">
      <button>RETURNS</button>
      <button>PRODUCT RECALLS</button>
      <button>ACCESSIBILTY</button>
    </div>
    <div className="footer4">
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

export default Accessibility;
