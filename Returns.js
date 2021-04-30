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





function Returns() {
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
                      <form onSubmit={handlevideogame}>
                          <button>Toys, Games and Video Games</button>
                      </form>
                      <button onClick={handleclothingProducts} >Clothing, Shoes, & Accessories</button>
                      <form onSubmit={handleHomeandfurnitures}>
                          <button>Home, Furniture & Appliances</button>
                      </form>
                      <button onClick={handlemusic} >Music</button>
                      <button onClick={handlepatio} >Patio & Garden</button>
                      <button onClick={handlefoodProducts} >Food</button>
                      <button onClick={handlepets} >Pets</button>
                      <button onClick={handlepharmacy}>Pharmacy, Health & Personal Care</button>
                      <form onSubmit={handlesports}>
                          <button>Sports, Fitness & Outdoors</button>
                      </form>
                      <button onClick={handlebeautyProducts} >Beauty</button>
                      <button onClick={handleauto}>Auto & Tire</button>
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
    
    
      <h1>Returns</h1>
           <p>




<h2>Option 1 – No Refunds/Exchanges:<h2>

<p> We do not accept returns or exchanges unless the item you purchased is defective. 
If you receive a defective item, please contact us at [•] with details of the product and the defect. 
You can send the item you consider defective to:

[Address]

Upon receipt of the returned product, we will fully examine it and notify you via e-mail, within a reasonable period of time, whether you are entitled to a refund or a replacement as a result of the defect. If you are entitled to a replacement or refund, we will replace the product or refund the purchase price, using the original method of payment.



<h2>Option 2 – Refunds Permitted: <h2>

We accept returns. You can return unopened items in the original packaging within 30 days of your purchase with receipt or proof of purchase. If 30 days or more have passed since your purchase, we cannot offer you a refund or an exchange.

Upon receipt of the returned item, we will fully examine it and notify you via email, within a reasonable period of time, whether you are entitled to a return. If you are entitled to a return, we will refund your purchase price and a credit will automatically be applied to your original method of payment.

Only regular priced items may be refunded. Sale items are non-refundable.

To follow-up on the status of your return, please contact us at [•].

 

<h2> 2. Exchanges [Delete if you select Option 1]<h2>

<p>We only exchange goods if they are defective or damaged. 
In circumstances where you consider that a product is defective, 
you should promptly contact us at [•] with details of the product and the defect.
You can send the item you consider defective to:<p>

 

<b>[Address]<b/>

 

<p>Upon receipt of the returned product, we will fully examine it and notify you via e-mail,
within a reasonable period of time, whether you are entitled to a replacement as a result of the defect. 
If you are eligible, we will send you a replacement product. <p/>

 

<b>3. Exceptions [May be included if you select Option 2]<b/>

<p>Some items are non-refundable and non-exchangeable. These include: [list items]<p/>

 

<h2>4. Shipping <h2/>

<p>To return the item you purchased, please mail it to:

 

<b>[Address]<b/>

 

Refunds do not include any shipping and handling charges shown on the packaging slip or invoice. Shipping charges for all returns must be prepaid and insured by you. You are responsible for any loss or damage to hardware during shipment. We do not guarantee that we will receive your returned item. Shipping and handling charges are not refundable.
Any amounts refunded will not include the cost of shipping.<p/>

</p>
      
      <div className="dot">
      
    <div>
    
    
      
 
      
    </div>
    
    
  

      
      </div>
    </div>
  
    
    
    <footer class="site-footer">
                                                                      <h1>About Greyson</h1>
                                                                      <div className="footer1">
                                                                          <button><img src="logo.png" alt='logo' width="150" height="150" />1717 Harrison St. Newark, NJ 07028,USA</button>

                                                                      </div>
                                                                      <div className="footer2">

                                                                          <form onSubmit={handleGetknowus}>
                                                                              <button>GET TO KNOW US</button>
                                                                          </form>

                                                                          <form onSubmit={handleOurcompany}>
                                                                              <button>OUR COMPANY</button>
                                                                          </form>

                                                                          <form onSubmit={handleTaxExcemptpage}>
                                                                              <button>Tax Exempt Program</button>
                                                                          </form>

                                                                          <form onSubmit={handleDonotsellmyinfo}>
                                                                              <button>Do Not Sell My Information</button>
                                                                          </form>

                                                                      </div>
                                                                      <div className="footer3">




                                                                          <form onSubmit={handleReturnpage}>
                                                                              <button>RETURNS</button>
                                                                          </form>

                                                                          <form onSubmit={handleAccessibility}>
                                                                              <button>ACCESSIBILITY</button>
                                                                          </form>

                                                                          <button>ADVERTISE WITH US</button>
                                                                      </div>
                                                                      <div className="footer4">


                                                                          <form onSubmit={handleOurads}>
                                                                              <button>OUR ADS</button>
                                                                          </form>

                                                                          <form onSubmit={handleTermofservices}>
                                                                              <button>TERMS OF SERVICE </button>
                                                                          </form>

                                                                          <form onSubmit={handlePrivacyandsecurity}>
                                                                              <button>PRIVACY & SECURITY</button>
                                                                          </form>


                                                                          <form onSubmit={handleCaprivacy}>
                                                                              <button>CA PRIVACY RIGHTS</button>
                                                                          </form>





                                                                      </div>
                                                                      <div className="footer5">
                                                                          <hr />
                                                                          <p> Copyright © 2021 All Rights Reserved by Greyson</p>
                                                                      </div>

                                                                  </footer>
    </div>
    </div>
  );
}

export default Returns;
