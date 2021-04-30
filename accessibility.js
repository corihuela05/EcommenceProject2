import React from "react";
import ReactDOM from 'react-dom';
import Shop from "./Shop";
import Product from "./Product";
import App from "./App"
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
import Sportpro from './Sports';
import Baby from './Baby';
import Patio from './Patio';
import Auto from './Partnerapplication';
import Pets from './Pets';
import Pharmacy from './Pharmacy';
import Music from './Music';
import Termofservice from './Termofservices';
import FoodProducts from './food_products';
import Ourads from './Ourads';
import ClothingProducts from './clothing_products';
import ArtProducts from './art_products';
import Church from './Church';
import Gettoknowus from './Gettoknowus';
import Privacyandsecurity from './privacyandsecurity';
import Donotsellmyinfo from './donotsellmyinfo';
import Ourcompany from './ourcompany';
import Caprivacy from './caprivacy';
import Returnpage from './returnpage';
import TaxExcemptpage from './taxExcemptpage';
import AnimatedButton from 'react-animated-button';
import { useState } from "react";






function Accessibilitty() {
    const [isLoggedIn, setIsLoggedIn] = useState(
        localStorage.getItem("isLoggedIn")
    );

    const [username, setUsername] = useState(localStorage.getItem("username"));

    function loginButton(props) {
        <div>
            <form onSubmit={handleuserlogin}>
                <button id="info">Login</button>
            </form>
            <form onSubmit={handleAccount}>
                <button id="info1">Sign Up</button>
            </form>
        </div>;
    }

    /*  function logout(props) {
          <form onSubmit={handleuserlogout}>
              <button id="info">Logout</button>
          </form>;
          isLoggedIn = false;
      }*/
    function handleuserlogout() {
        /*ReactDOM.render(
            <App isLoggedIn={false} />,
            document.getElementById("root")
            );*/
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("username");
    }



    function handleclothingProducts() {
        ReactDOM.render(<ClothingProducts />, document.getElementById('root'));
    }

    function handleAccessibility() {
        ReactDOM.render(<Accessibility />, document.getElementById('root'));
    }

    function handlePrivacyandsecurity() {
        ReactDOM.render(<Privacyandsecurity />, document.getElementById('root'));
    }

    function handleOurcompany() {
        ReactDOM.render(<Ourcompany />, document.getElementById('root'));
    }


    function handleTaxExcemptpage() {
        ReactDOM.render(<TaxExcemptpage />, document.getElementById('root'));
    }
    function handlefoodProducts() {
        ReactDOM.render(<FoodProducts />, document.getElementById('root'));
    }

    function handleReturnpage() {
        ReactDOM.render(<Returnpage />, document.getElementById('root'));
    }
    function handleCaprivacy() {
        ReactDOM.render(<Caprivacy />, document.getElementById('root'));
    }


    function handleDonotsellmyinfo() {
        ReactDOM.render(<Donotsellmyinfo />, document.getElementById('root'));
    }
    function handleartProducts() {
        ReactDOM.render(<ArtProducts />, document.getElementById('root'));
    }
    function handlebeautyProducts() {
        ReactDOM.render(<BeautyProducts />, document.getElementById('root'));
    }

    function handleHomeandfurnitures() {
        ReactDOM.render(<Homeandfurnitures />, document.getElementById('root'));
    }

    function handleTermofservices() {
        ReactDOM.render(<Termofservice />, document.getElementById('root'));
    }
    function handleChurch() {
        ReactDOM.render(<Church />, document.getElementById('root'));
    }
    function handleHome() {
        ReactDOM.render(<App />, document.getElementById('root'));
    }
    function handleProduct() {
        ReactDOM.render(<Product />, document.getElementById('root'));
    }
    function handleShop() {
        ReactDOM.render(<Shop />, document.getElementById('root'));
    }
    function handleCart() {
        ReactDOM.render(<Cart />, document.getElementById('root'));
    }
    function handleNonprofit() {
        ReactDOM.render(<Nonprofit />, document.getElementById('root'));
    }

    function handleSchoolst() {
        ReactDOM.render(<School />, document.getElementById('root'));
    }


    function handleAccount() {
        ReactDOM.render(<Account />, document.getElementById('root'));
    }
    function handleuserlogin() {
        ReactDOM.render(<FormSignup />, document.getElementById('root'));
    }
    function handleProfile() {
        ReactDOM.render(<Profile />, document.getElementById('root'));
    }

    function handlevideogame() {
        ReactDOM.render(<Videog />, document.getElementById('root'));
    }
    function handlesports() {
        ReactDOM.render(<Sportpro />, document.getElementById('root'));
    }

    function handlebaby() {
        ReactDOM.render(<Baby />, document.getElementById('root'));
    }

    function handlepatio() {
        ReactDOM.render(<Patio />, document.getElementById('root'));
    }

    function handlepets() {
        ReactDOM.render(<Pets />, document.getElementById('root'));
    }

    function handlepharmacy() {
        ReactDOM.render(<Pharmacy />, document.getElementById('root'));
    }

    function handleauto() {
        ReactDOM.render(<Auto />, document.getElementById('root'));
    }

    function handlemusic() {
        ReactDOM.render(<Music />, document.getElementById('root'));
    }

    function handleOurads() {
        ReactDOM.render(<Ourads />, document.getElementById('root'));
    }


    function CAPrivacyRights() {

        ReactDOM.render(<CAPrivacyRights />, document.getElementById('root'));
    }


    function TaxExemptProgram() {
        ReactDOM.render(<TaxExemptProgram />, document.getElementById('root'));
    }

    function Accessibility() {
        ReactDOM.render(<Accessibility />, document.getElementById('root'));
    }


    function handleGetknowus() {
        ReactDOM.render(<Gettoknowus />, document.getElementById('root'));
    }
    var url = ""
    if (username === "admin") {
        url = "ownerdashboard.html"
    }
    else if (username === "nonprofit") {
        url = "sponsordashboard.html"
    }
    else if (username === "seller") {
        url = "account.html"
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
    
    
      <h1>Accessibility</h1>
<p>

Grayson is committed to providing a website
that is accessible to the widest possible audience,
regardless of technology or ability. We are actively 
working to increase the accessibility and usability of
our website and in doing so adhere to many
of the available standards and guidelines.

</p>
<p>
This site has been built using code compliant with W3C standards for HTML and CSS. 
The site displays correctly in current browsers and using standards compliant HTML/CSS code 
means any future browsers will also display it correctly.This website endeavours to conform to 
level Double-A of the World Wide Web Consortium (W3C) Web Content Accessibility Guidelines 2.1. 
These guidelines explain how to make web content more accessible for people with disabilities. 
Conformance with these guidelines will help make the web more user friendly for all people.
</p>
<p>
Whilst Grayson strive to adhere to the accepted
guidelines and standards for accessibility and usability,
it is not always possible to do so in all areas of the 
website.
</p>
<p>
Whilst *Grayson* strive to adhere to the accepted 
guidelines and standards for accessibility and usability, 
it is not always possible to do so in all areas of the
website.
</p>
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

export default Accessibilitty;
