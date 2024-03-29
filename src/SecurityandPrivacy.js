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






function SecurityandPrivacy() {
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
    
    
      <h1>Privacy and Security </h1>
 <p>
 <b>Introduction<b>
This Privacy Policy (‘policy’) applies to Open Text Corporation and its affiliates (‘OpenText’, ‘we’, ‘us’, ‘our’) and provides information on the collection, use and sharing (‘processing’ or ‘process’) of your personal data (‘personal information’). This includes personal information collected via our websites (‘Website’), our products or personal information collected from you directly, such as in person, via telephone or email, or indirectly through third parties in the course of our business.

OpenText supports the right to privacy and
understands the importance of protecting personal
information and complying with applicable data protection laws.
We have appointed a Data Protection Officer for assisting with questions
regarding this policy and the processing of your personal information. 
For details on how to contact us, see the Contact Information section.


 <b>What Data We Collect<b/>
The personal information we process about you and how we collect 
it can vary depending on (a) the product(s) or service(s) you use; 
(b) how you use the product or service; (c) 
how you have interacted with OpenText, and (d)
the information that we have obtained from 
a customer or from a third party with permission to share 
such information with us.

OpenText may collect personal information about you such as, for example:
full name, email address, telephone number, company name, company location, 
position in company, department, billing information including credit card 
details where applicable, IP address and how you use our services. 
See Cookie Technology section for details on what we collect
using cookies and other technologies.

OpenText may combine the personal information you provide with 
information that is not collected directly from you. 
Data not provided directly by you may be supplied by 
OpenText’s vendors and/or partners.
Refer to Personal Information Collected from Third Parties for 
additional information.

<b>How Long We Store Your Data<b/>
OpenText will retain personal information for as long as needed to provide the relevant product or services or to fulfil the purposes for which the information was collected. OpenText may also retain and use this information for a longer period as permitted or required by law, to comply with our legal, tax or regulatory obligations (e.g. audit and accounting requirements), handle disputes, to exercise or defend claims, and enforce our agreements. 
We ensure that personal information we dispose of, is de-identified or destroyed in a secure manner.

<b>Your Privacy Rights<b/>
Your local applicable law may provide certain rights regarding the use of your personal information. You may request from OpenText access to, correction of, updating of and/or deletion of your personal information, or object our use of your personal information in certain circumstances, in line with applicable data protection law. Your rights may differ according to your place of residence.

Choice/Opting out of Marketing: OpenText offers you the choice of receiving different types of communication and information related to our products and services. You may subscribe to e-newsletters or other publications; you may also elect to receive marketing communications and other special offers from us via email. If at any time you would like to change your communication preferences, we provide unsubscribe links and an opt-out mechanism in all our communications or contact us.

</p>
      
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
      <form onSubmit={handlePrivacyandSecurity}>
      <button>PRIVACY & SECURITY</button>
      </form>
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

export default SecurityandPrivacy;

