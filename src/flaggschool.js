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
import BeautyProducts from './beauty_products';
import Profile from './Profile';
import Videog from './Videogame';
import Sportpro from './Sports';
import Baby from './Baby';
import Patio from './Patio';
import Pets from './Pets';
import Pharmacy from './Pharmacy';
import Auto from './Auto';
import Music from './Music';
import Homeandfurnitures from './homeandfurniture';
import School from './Schools';
import Termofservice from './Termofservices';
import FoodProducts from './food_products';
import Ourads from './Ourads'
import ClothingProducts from './clothing_products';
import ArtProducts from './art_products';
import Church from './Church';
import Gettoknowus from './Gettoknowus';
import './Profile.css';
import './Videogame.css';
import Privacyandsecurity from './privacyandsecurity';
import Donotsellmyinfo from './donotsellmyinfo';
import Ourcompany from './ourcompany';
import Caprivacy from './caprivacy';
import Accessibilitty from './accessibility';
import Returnpage from './returnpage';
import TaxExcemptpage from './taxExcemptpage';
import App from "./App"

function flaggschool () {
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

 return (
    <div className="App">
    <div className="Appheader">
    <img src="logo.png" alt='company logo' className="companylogo" />
    <img src="https://media1.tenor.com/images/3ced764a2cb7ad33ddf2145edb9904ae/tenor.gif?itmid=4320892" alt='flag' className="flag" />
     <div className="searchbar">
        <input type="text" name="search" placeholder="Search.." />
        <button type="submitsearch"><i class="fa fa-search"></i></button>
      </div>
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




                        <form onSubmit={handlevideogame}>
                            <button>Toys, Games and Video Games</button>
                        </form>
                        <button onClick={handleclothingProducts} >Clothing, Shoes, & Accessories</button>

                        <form onSubmit={handleHomeandfurnitures}>
                            <button>Home, Furniture & Appliances</button>
                        </form>

                        <button>Home Improvement</button>
                        <button>Music</button>
                        <button>Patio & Garden</button>
                        <button onClick={handlefoodProducts} >Food</button>
                        <button>Pets</button>
                        <button>Pharmacy, Health & Personal Care</button>

                        <form onSubmit={handlesports}>
                            <button>Sports, Fitness & Outdoors</button>
                        </form>

                        <button onClick={handlebeautyProducts} >Beauty</button>


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
    
   <div class="Videogameadjust">
    <div className="nonp">
        <h1>Dr. E. Alma Flagg School</h1>
        <p1>150 3rd St, Newark, NJ 07107</p1>
        <p3>(973) 268-5190</p3>
        <p><a className="com1link"href="https://www.nps.k12.nj.us/FLG/">Dr. E.!</a></p>
    </div>
    
    <img className="gmflogo"src="https://www.npshpc.org/wp-content/uploads/2017/08/image28.jpg" />
    
   <div class="midlinetopthree"></div>
   
   <div class="nonpmission1">
       <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
       <i class="fa fa-bar-chart"></i>
       <h3>School Mission 1</h3>
       <p1>Dr. E. Alma Flagg Elementary School is committed to creating a healthy environment conducive to the enhancement of academic success by identifying and maximizing the collective talents of its students, teachers, administrators, staff, parents, and community.</p1>
    </div>
    
    <div class="nonpmission2">
       <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
       <i class="fa fa-list-ul"></i>
       <h3>School Mission 2</h3>
       <p1>We are committed to the creation of a learning environment, which will enable all students to achieve the skills to function in a democratic society by becoming productive and positive citizens.</p1>
    </div>
    
    <div class="nonpmission3">
       <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
       <i class="fa fa-check-circle-o"></i>
       <h3>School Mission 3</h3>
       <p1>Developing the core values of respect, responsibility, reflection, and resiliency.</p1>
    </div>
   
    <div class="secondmidlinetopthree"></div>
    
    <div className="videofile">
      <video width="920" height="450" controls>
        <source src="BoysandGirlsClub.mp4" type="video/mp4"/>
      </video>
    </div>
    
    <div class="thirdmidlinetopthree"></div>
    
      <div class="similarnearyou">
      <h2>School Near you</h2>
      <p1> Similar school that you may be interested</p1>
    </div>
    

    <div className="bottomslider">
     <div className="bottomimages">
       <input type="radio" name="slide" id="simage1" checked/>
       <input type="radio" name="slide" id="simage2" />
       <img src="https://media.glassdoor.com/l/137673/newark-public-schools-office.jpg" class="simg1" alt="image1" />
       <img src="https://www.nps.k12.nj.us/prk/wp-content/uploads/sites/87/2020/05/Park-Graduation-clean2.png" class="simg2" alt="image2"/>
      </div>
    <div className="sdot">
        <label for="simage1"></label>
        <label for="simage2"></label>
    </div>
  
 <footer class="profile-site-footer">
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
    </div>
    
  );
}

export default flaggschool;