import React from "react";
import ReactDOM from 'react-dom';
import Shop from "./Shop";
import Product from "./Product";
import App from "./App"
import './App.css';
import Cart from './Cart';
import Account from './Account';
import FormSignup from './userlogin';
import BeautyProducts from './beauty_products';
import Profile from './Profile';
import './Nonprofit.css';
import Nonprofit from "./Nonprofit";
import Videog from './Videogame';
import Sportpro from './Sports';
import Baby from './Baby';
import Patio from './Patio';
import Auto from './Auto';
import Pets from './Pets';
import Pharmacy from './Pharmacy';
import Music from './Music';
import Homeandfurnitures from './homeandfurniture';
import School from './Schools';
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
import Accessibilitty from './accessibility';
import Returnpage from './returnpage';
import TaxExcemptpage from './taxExcemptpage';

import CAS from './chancelloravenueschool'
import CES from './clevelandelementaryschool'
import DEAFS from './flaggschool'

import { useState } from "react";

function Schools() {
      const [isLoggedIn, setIsLoggedIn] = useState(
        localStorage.getItem("isLoggedIn")
    );

    const [username, setUsername] = useState(localStorage.getItem("username"));


    function handleuserlogout() {
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("username");
    }
   function handleclothingProducts() {
        ReactDOM.render(<ClothingProducts />, document.getElementById('root'));
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
   
    function handleReturnpage () {
        ReactDOM.render(<Returnpage  />, document.getElementById('root'));
    }    
    function handleCaprivacy() {
        ReactDOM.render(<Caprivacy />, document.getElementById('root'));
    }    
    
    
    function handleAccessibility() {
        ReactDOM.render(<Accessibilitty />, document.getElementById('root'));
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
        ReactDOM.render(<TaxExemptProgram/>, document.getElementById('root'));
}
    
    function Accessibility() {
        ReactDOM.render(<Accessibility/>, document.getElementById('root'));
    }
    
    
    function handleGetknowus(){
         ReactDOM.render(<Gettoknowus/>, document.getElementById('root'));
    }
    
    function handleSearch(event) {
    event.preventDefault()
    const name = event.target[0].value;
    switch (name) {
      case "Chancellor":
        ReactDOM.render(<CAS />, document.getElementById('root'));
        break;
      case "Cleveland":
        ReactDOM.render(<CES />, document.getElementById('root'));
        break;
      case "Flagg":
        ReactDOM.render(<DEAFS />, document.getElementById('root'));
        break;
    }
  }

  return (
    <div className="nonprofit">
    <div className="Appheader">
    <img src="logo.png" alt='company logo' className="companylogo" />
    <img src="https://media1.tenor.com/images/3ced764a2cb7ad33ddf2145edb9904ae/tenor.gif?itemid=4320892" alt='flag' className="flag" />
   <div className="searchbar">
      <input type="text" name="search" placeholder="Search.." />
      <button type="submitsearch"><i class="fa fa-search"></i></button>
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
                            <button class="homex" > Home</button>
                        </form>
                   
                        <form onSubmit={handlevideogame}>
                            <button class="toysandgamesx" >Toys, Games and Video Games</button>
                        </form>
                        <button onClick={handleclothingProducts} class="clothingx" >Clothing, Shoes, & Accessories</button>

                        <form onSubmit={handleHomeandfurnitures}>
                            <button class="appliancesx"> Home, Furniture & Appliances</button>
                        </form>
                      

                        <form onSubmit={handlevideogame}>

                        <button class="video games" >Video Games</button>                  
                        </form>
                        <button onClick={handlefoodProducts} >Food</button>
                       <button onClick={handlebeautyProducts} class="beautyx" >Beauty</button>
                        <button onClick={handleartProducts} class="artproductsx">Sewing & Party Supplies</button>
                         <form onSubmit={handlesports}>
                            <button class="sportsx" >Sports, Fitness & Outdoors</button>
                        </form>
                        <button class="petsx" >Pets</button>
                         <button class="musicx" >Music</button>
                        <button class="patiox" >Patio & Garden</button>
                        <button class="pharmarcyandcarex" >Health & Personal Care</button>

                         <button>Books</button>
                    <button>Fashion</button>
                    <button>Gift Cards</button>
                       


                        <button class="autox" >Auto & Tire</button>
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
      <source src="BoysandGirlsClub.mp4" type="video/mp4"/>
    </video>
    <p>Mr. Christopher Perpich, Chief School</p>
    </div>
    
    <div className="video2">
    <video width="320" height="240" controls>
      <source src="BoysandGirlsClub.mp4" type="video/mp4"/>
    </video>
    <p>Belleville Public School District</p>
    </div>
    
    <div className="video3">
    <video width="320" height="240" controls>
      <source src="BoysandGirlsClub.mp4" type="video/mp4"/>
    </video>
    <p>Bloomfield Township School District</p>
    </div>
    
    <div className="video4">
    <video width="320" height="240" controls>
      <source src="BoysandGirlsClub.mp4" type="video/mp4"/>
    </video>
    <p>Burch Charter School of Excellence</p>
    </div>
    
    <div className="video5">
    <video width="320" height="240" controls>
      <source src="BoysandGirlsClub.mp4" type="video/mp4"/>
    </video>
    <p>Caldwell-West School District</p>
    </div>
    
    <div className="video6">
    <video width="320" height="240" controls>
      <source src="BoysandGirlsClub.mp4" type="video/mp4"/>
    </video>
    <p>Cedar Grove Township School District</p>
    </div>
    
    <div className="nonprofisearch">
      <form onSubmit={handleSearch}>
      <h3>Search for your school</h3>
      <h5>Name of schools:</h5>
      <select>
        <option selected disabled>Select option</option>
        <option value="Chancellor">Chancellor Avenue School</option>
        <option value="Cleveland">Cleveland Elementary School</option>
        <option value="Flagg">Dr. E. Alma Flagg School </option>
      </select>
      <h5>Type:</h5>
      <select>
        <option selected disabled>Select option</option>
        <option value="type1">Elementary School</option>
        <option value="type2">High School</option>
        <option value="type3">Middle School</option>
      </select>
      <h5>Category:</h5>
      <select>
        <option selected disabled>Select option</option>
        <option value="category1">Public School</option>
        <option value="category2">Non-Public School</option>
        <option value="category3">Charter School</option>
      </select>
      <h5>Location:</h5>
      <select>
        <option selected disabled>Select option</option>
        <option value="location1">Newark NJ</option>
        <option value="location2">East Organge NJ</option>
        <option value="location3">Springfield NJ</option>
      </select>
      
         <button className="nonprofitsearch">SEARCH</button>
      </form>
    
    </div>
    <div className="nonprofitreview">
      <p>Non Profit Review</p>
      <div className="productreview">
        <img src="https://i.stack.imgur.com/l60Hf.png" alt='reviewprofile' className="logo" />
        <button><h3>Jim Clark</h3><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/><p>President at BoysandGirlsClub</p></button>
      </div>
      <div className="productreview1">
        <img src="https://i.stack.imgur.com/l60Hf.png" alt='reviewprofile' className="logo" />
        <button><h3>Jim Clark</h3><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/><p>President at BoysandGirlsClub</p></button>
      </div>
    </div>
    <div className="nonprofimidheader">
      <h1>Main Statement</h1>
    </div>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css"/>
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
   <footer class="organization-site-footer">
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
                        
                        <button> VENDOR DIRECTORY</button>
                        <button>HELP CENTER</button>
                        <button>CONTACT US</button>
                    
                    </div>
                    <div className="footer3">
                    
                   
                            
                            
                        <form onSubmit={handleReturnpage}>
                        <button>RETURNS</button>
                        </form>         
                        
                        <button>PRODUCT RECALLS</button>
                        
                        <form onSubmit={handleAccessibility}>
                        <button>ACCESSIBILITY</button>
                        </form>                        
                        
                        <button>ADVERTISE WITH US</button>
                         </div>
                          <div className="footer4">
                          
                          
                        <button>GREYSON'S</button>

                        <form onSubmit={handleOurads}>
                        <button>OUR ADS</button>
                        </form>
                    
                        <form onSubmit ={handleTermofservices}>
                        <button>TERMS OF SERVICE </button>
                        </form>
                       
                        <form onSubmit={handlePrivacyandsecurity}>
                        <button>PRIVACY & SECURITY</button>
                        </form>
                        
                        
                        <form onSubmit={handleCaprivacy}>
                        <button>CA PRIVACY RIGHTS</button>
                        </form>
                        
                        <form onSubmit={handleDonotsellmyinfo}>
                        <button>Do Not Sell My Information</button>
                        </form>
                        
                            
                         
                            
                        
                        
                        
                        <form onSubmit={handleTaxExcemptpage}>
                        <button>Tax Exempt Program</button>
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

export default Schools;