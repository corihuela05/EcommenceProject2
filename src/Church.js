import React from "react";
import ReactDOM from 'react-dom';
import Shop from "./Shop";
import Product from "./Product";
import Home from "./App"
import './App.css';
import Cart from './Cart';
import Account from './Account';
import FormSignup from './userlogin';
import BeautyProducts from './beauty_products';
import Profile from './Profile';
import './Nonprofit.css';
import { useState } from "react";

import Slcs from './saintlucyschurch';
import SACChurch from './SACChurch';
import CBOTSH from './CBOTSH';


function Church() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn")
  );

  const [username, setUsername] = useState(localStorage.getItem("username"));


  function handleuserlogout() {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("username");
  }
  function handlebeautyProducts() {
    ReactDOM.render(<BeautyProducts />, document.getElementById('root'));
  }
  function handleHome() {
    ReactDOM.render(<Home />, document.getElementById('root'));
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

  function handleAccount() {
    ReactDOM.render(<Account />, document.getElementById('root'));
  }
  function handleuserlogin() {
    ReactDOM.render(<FormSignup />, document.getElementById('root'));
  }
  function handleProfile() {
    ReactDOM.render(<Profile />, document.getElementById('root'));
  }
  function handleSearch(event) {
    event.preventDefault()
    const name = event.target[0].value;
    switch (name) {
      case "Lucy":
        ReactDOM.render(<Slcs />, document.getElementById('root'));
        break;
      case "Antoninus":
        ReactDOM.render(<SACChurch />, document.getElementById('root'));
        break;
      case "Basilica":
        ReactDOM.render(<CBOTSH />, document.getElementById('root'));
        break;
    }
  }
  function handleAccount() {
    ReactDOM.render(<Account />, document.getElementById('root'));
  }
  return (
    <div className="nonprofit">
      <div className="Appheader">
        <img src="logo.png" alt='company logo' className="companylogo" />
        <img src="https://media1.tenor.com/images/3ced764a2cb7ad33ddf2145edb9904ae/tenor.gif?itemid=4320892" alt='flag' className="flag" />
        <div className="searchbar">
          <input type="text" name="search" placeholder="Search.." />
          <button type="submit"><i class="fa fa-search"></i></button>
        </div>
        <form onSubmit={handleHome}>
          <button id="homebutton">Home</button>
        </form>
        {isLoggedIn ? (
          <div>
            <div>
              <form>
                <button id="info">{username}</button>
              </form>
            </div>
            <div>
              <form onSubmit={handleuserlogout}>
                <button id="info1">Logout</button>
              </form>
            </div>
          </div>
        ) : (
          <>
            <form onSubmit={handleuserlogin}>
              <button id="info">Login</button>
            </form>
            <form onSubmit={handleAccount}>
              <button id="info1">Sign Up</button>
            </form>
          </>
        )}

        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css" />
        <form onSubmit={handleCart}>
          <button id="cart"><span className="glyphicon glyphicon-shopping-cart"></span>  Your Cart</button>
        </form>
        <div className="homepagesidebar">
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
          <input type="checkbox" id="check" />
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

            <form onSubmit={handleShop}>
              <button>Shop</button>
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
      </div>

      <div className="nonprofitsliderslide">
        <div className="video1">
          <video width="320" height="240" controls>
            <source src="BoysandGirlsClub.mp4" type="video/mp4" />
          </video>
          <p>Nativity of Our Lord Church</p>
        </div>

        <div className="video2">
          <video width="320" height="240" controls>
            <source src="BoysandGirlsClub.mp4" type="video/mp4" />
          </video>
          <p>St. Anianus Coptic Orthodox Church</p>
        </div>

        <div className="video3">
          <video width="320" height="240" controls>
            <source src="BoysandGirlsClub.mp4" type="video/mp4" />
          </video>
          <p>Old Ship of Zion Missionary Baptist Church</p>
        </div>

        <div className="video4">
          <video width="320" height="240" controls>
            <source src="BoysandGirlsClub.mp4" type="video/mp4" />
          </video>
          <p>First Presbyterian Church</p>
        </div>

        <div className="video5">
          <video width="320" height="240" controls>
            <source src="BoysandGirlsClub.mp4" type="video/mp4" />
          </video>
          <p>Stonecrest Community Church</p>
        </div>

        <div className="video6">
          <video width="320" height="240" controls>
            <source src="BoysandGirlsClub.mp4" type="video/mp4" />
          </video>
          <p>First Presbyterian Church</p>
        </div>

        <div className="nonprofisearch">
          <form onSubmit={handleSearch}>
            <h3>Search for your Church</h3>
            <h5>Name of Church:</h5>
            <select>
              <option selected disabled>Select option</option>
              <option value="Lucy">Saint Lucy's Church</option>
              <option value="Antoninus">St Antoninus Catholic Church</option>
              <option value="Basilica">Cathedral Basilica of the Sacred Heart</option>
            </select>
            <h5>Type:</h5>
            <select>
              <option selected disabled>Select option</option>
              <option value="type1">Eastern Orthodox</option>
              <option value="type2">Catholic</option>
              <option value="type3">protestant </option>
            </select>
            <h5>Category:</h5>
            <select>
              <option selected disabled>Select option</option>
              <option value="category1"> Roman Catholicism,</option>
              <option value="category2">Oriental Orthodoxy</option>
              <option value="category3">Protestantism</option>
            </select>
            <h5>Location:</h5>
            <select>
              <option selected disabled>Select option</option>
              <option value="location1">Newark NJ</option>
              <option value="location2">Garfield NJ</option>
              <option value="location3">Bayonne NJ</option>
            </select>

            <button className="nonprofitsearch">SEARCH</button>
          </form>

        </div>
        <div className="nonprofitreview">
          <p>Church Review</p>
          <div className="productreview">
            <img src="https://i.stack.imgur.com/l60Hf.png" alt='reviewprofile' className="logo" />
            <button><h3>Jim Clark</h3><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" /><p>President at BoysandGirlsClub</p></button>
          </div>
          <div className="productreview1">
            <img src="https://i.stack.imgur.com/l60Hf.png" alt='reviewprofile' className="logo" />
            <button><h3>Jim Clark</h3><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" /><p>President at BoysandGirlsClub</p></button>
          </div>
        </div>
        <div className="nonprofimidheader">
          <h1>Main Statement</h1>
        </div>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css" />
        <div className="bulletpoints">
          <div className="lightbulb">
            <i class="fa fa-lightbulb-o"></i>
          </div>
          <h3>First Benefit</h3>
          <div className="nonprofittextbox">
            <p>This description supports and extends the bullet point above.</p>
          </div>
        </div>
        <div className="bulletpoints1">
          <div className="lightbulb">
            <i class="fa fa-lightbulb-o"></i>
          </div>
          <h3 className="secondbenefit">Second Benefit</h3>
          <div className="nonprofittextbox">
            <p>This description supports and extends the bullet point above.</p>
          </div>
        </div>
        <div className="bulletpoints2">
          <div className="lightbulb">
            <i class="fa fa-lightbulb-o"></i>
          </div>
          <h3 className="thirdbenefit">Third Benefit</h3>
          <div className="nonprofittextbox">
            <p>This description supports and extends the bullet point above.</p>
          </div>
        </div>
        <div className="bulletpoints3">
          <div className="lightbulb1">
            <i class="fa fa-star-o"></i>
          </div>
          <h3 className="firstfeature">First Feature</h3>
          <div className="nonprofittextbox">
            <p>This description supports and extends the bullet point above.</p>
          </div>
        </div>
        <div className="bulletpoints4">
          <div className="lightbulb">
            <i class="fa fa-star-o"></i>
          </div>
          <h3 className="secondfeature">Second Feature</h3>
          <div className="nonprofittextbox">
            <p>This description supports and extends the bullet point above.</p>
          </div>
        </div>
        <div className="bulletpoints5">
          <div className="lightbulb">
            <i class="fa fa-star-o"></i>
          </div>
          <h3 className="thirdfeature">Third Feature</h3>
          <div className="nonprofittextbox">
            <p>This description supports and extends the bullet point above.</p>
          </div>
        </div>
        <div className="bottomsignup">
          <h1>Your Closing Argument Headline</h1>
          <form onSubmit={handleAccount}>
            <button className="nonprofitsignup">Sign Up</button>
          </form>
        </div>
        <footer class="nonprofit-site-footer">
          <h1>About Greyson</h1>
          <div className="footer1">
            <button><img src="logo.png" alt='logo' width="150" height="150" />1717 Harrison St. Newark, NJ 07028,USA</button>
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
            <hr />
            <p> Copyright © 2021 All Rights Reserved by Greyson</p>
          </div>
        </footer>
      </div>
    </div>

  );
}

export default Church;
