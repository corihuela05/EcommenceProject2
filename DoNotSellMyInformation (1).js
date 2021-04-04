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
import "./main-footer.ccs";






function NoInformation() {
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
    
    
      <h1>Do Not Sell My Information </h1>
           <p>

We provide services to you subject to the notices, terms, and conditions set forth in this agreement. Besides, you will obey the rules, guidelines, policies, terms, and conditions applicable to such services before you use them. We reserve the right to change this site and these terms and conditions at any time.

Before proceeding, please read this agreement because accessing, browsing, or otherwise using the Site indicates your agreement to all the terms and conditions in this agreement.

You shall not upload, distribute, or otherwise publish through this Site any Content, information, or other material that (a) includes any bugs, viruses, worms, trap doors, Trojan horses, or other harmful code or properties; (b) is libelous, threatening, defamatory, obscene, indecent, pornographic, discriminatory, or could give rise to any civil or criminal liability under the laws of the U.S. or the laws of any other country that may apply; or (c)violates or infringes upon the copyrights, patents, trademarks, service marks, trade secrets, or other proprietary rights of any person.  www.yourbusinessdomain may give you an account identification and password to enable you to access and use certain portions of this Site. Each time you use a password or identification, you are deemed to be authorized to access and use the Site in a manner consistent with the terms and conditions of this agreement, and

www.MagEASYcase.com has no obligation to investigate the source of any such access or use of the Site.

By accepting these Terms of Use through your use of the Site, you certify that you are 18 years of age or older. If you are under 18 years old please use this Site only under the supervision of a parent or legal guardian. Subject to the terms and conditions of this agreement, hereby grants you a limited, revocable, non-transferable, and non-exclusive license to access and use the Site by displaying it on your Internet browser only for the purpose of shopping and not for any commercial use or use on behalf of any third party, except as explicitly permitted by 

www.MagEASYcase.com in advance. Any violation of this Agreement shall result in the immediate revocation of the license granted in this paragraph without notice to you.

Unless explicitly permitted by our company in advance, all materials, including images, text, illustrations, designs, icons, photographs, programs, music clips or downloads, video clips and written and other materials that are part of this Site (collectively, the “Contents”) are intended solely for personal, non-commercial use. You may not make any commercial use of any of the information provided on the Site or make any use of the Site for the benefit of another business. We reserve the right to refuse service, terminate accounts, and/or cancel orders in its discretion, including, without limitation, if we believe that customer conduct violates applicable laws or is harmful to our interests. You may not reproduce, distribute, display, sell, lease, transmit, create derivative works from, translate, modify, reverse-engineer, disassemble, decompile, or otherwise exploit this Site or any portion of it unless expressly permitted by our company in writing.

You will be solely responsible for all access to and use of this site by anyone using the password and identification originally assigned to you whether or not such access to and use of this site is actually authorized by you, including without limitation, all communications and transmissions and all obligations (including without limitation financial obligations) incurred through such access or use. You are solely responsible for protecting the security and confidentiality of the password and identification assigned to you. You shall immediately notify www.MagEASYcase.com of any unauthorized use of your password or identification or any other breach or threatened breach of this Site’s security.

MagEASYcase
New Jersey, USA

+1 (609) 316 -2780

support@MagEASYcase.com

 
Shop MagEASY Case  Track your order  Shipping & Delivery  Returns and Refunds  Terms Of Service  FAQ  Privacy Policy
CLOSE
SHOPPING CART :
No Items in cart

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

export default NoInformation;



