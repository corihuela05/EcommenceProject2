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

function CES () {
  function handleclothingProducts(){
    ReactDOM.render(<ClothingProducts />,document.getElementById('root'));
  }
  function handlefoodProducts(){
    ReactDOM.render(<FoodProducts />,document.getElementById('root'));
  }
  function handleartProducts(){
    ReactDOM.render(<ArtProducts />,document.getElementById('root'));
  }
  function handlebeautyProducts(){
    ReactDOM.render(<BeautyProducts />,document.getElementById('root'));
  }
 
  function handleHomeandfurnitures(){
  ReactDOM.render(<Homeandfurnitures />,document.getElementById('root'));
 }
 
   function handleTermofservices(){
  ReactDOM.render(<Termofservice />,document.getElementById('root'));
 }
  function handleChurch(){
  ReactDOM.render(<Church/>,document.getElementById('root'));
 }
 
 
   function handleGetknowus(){
  ReactDOM.render(<Gettoknowus/>,document.getElementById('root'));
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
    function handlesports(){
     ReactDOM.render(<Sportpro />,document.getElementById('root'));
  }
 
    function handlebaby(){
     ReactDOM.render(<Baby />,document.getElementById('root'));
  }
 
    function handlepatio(){
     ReactDOM.render(<Patio />,document.getElementById('root'));
  }
 
    function handlepets(){
     ReactDOM.render(<Pets />,document.getElementById('root'));
  }
 
    function handlepharmacy(){
     ReactDOM.render(<Pharmacy />,document.getElementById('root'));
  }
 
    function handleauto(){
     ReactDOM.render(<Auto />,document.getElementById('root'));
  }
 
    function handlemusic(){
     ReactDOM.render(<Music />,document.getElementById('root'));
  }
 
  function handleOurads(){
     ReactDOM.render(<Ourads />,document.getElementById('root'));
  }

 return (
    <div className="App">
    <div className="Appheader">
    <img src="logo.png" alt='company logo' className="companylogo" />
    <img src="https://media1.tenor.com/images/3ced764a2cb7ad33ddf2145edb9904ae/tenor.gif?itmid=4320892" alt='flag' className="flag" />
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
    <form onSubmit={handleNonprofit}>
      <button>Buy Again</button>
    </form>
    <form onSubmit={handleNonprofit}>
      <button>List</button>
    </form>
    <form onSubmit={handleNonprofit}>
      <button>Registry</button>
    </form>  
    <form onSubmit={handleNonprofit}>
      <button>Gift Finder</button>
    </form>
    <form onSubmit={handleNonprofit}>
      <button>Gift Card</button>
    </form>
    <form onSubmit={handleNonprofit}>
      <button>Black Owned Businesses</button>
    </form>  
    <form onSubmit={handleNonprofit}>
      <button>Women Owned Businesses</button>
    </form>
    <form onSubmit={handleNonprofit}>
      <button>Help</button>
    </form>  
    <form onSubmit={handleNonprofit}>
      <button>Departments</button>
    </form>
    <form onSubmit={handleNonprofit}>
      <button>Electronics & Office</button>
    </form>
   
    <form onSubmit={handlevideogame}>
      <button>Toys, Games and Video Games</button>
    </form>
    <button onClick={handleclothingProducts} >Clothing, Shoes, & Accessories</button>
   
      <form onSubmit={handleHomeandfurnitures}>
       <button>Home, Furniture & Appliances</button>
    </form>
    <form onSubmit={handleNonprofit}>
      <button>Home Improvement</button>
    </form>
     <form onSubmit={handlemusic}>
      <button>Music</button>
    </form>
    <form onSubmit={handlepatio}>
      <button>Patio & Garden</button>
    </form>
    <button onClick={handlefoodProducts} >Food</button>
   <form onSubmit={handlepets}>
      <button>Pets</button>
    </form>
    <form onSubmit={handlepharmacy}>
      <button>Pharmacy, Health & Personal Care</button>
    </form>

    <form onSubmit={handlesports}>
      <button>Sports, Fitness & Outdoors</button>
    </form>

    <button onClick={handlebeautyProducts} >Beauty</button>
 
    <form onSubmit={handleauto}>
      <button>Auto & Tire</button>
    </form>
    <form onSubmit={handleNonprofit}>
      <button>Photos</button>
    </form>
    <button onClick={handleartProducts} >Art, Craft, Sewing & Party Supplies</button>
    </div>
    </div>
    <div className="tabs">
      <button  onClick={handleartProducts} >Best Sellers</button>
      <button  onClick={handleartProducts} >Today's Deals</button>
      <button  onClick={handleartProducts} >Customer Service</button>
      <button  onClick={handleartProducts} >New Releases</button>
      <button  onClick={handleartProducts} >Near Me</button>
      <button  onClick={handleartProducts} >Books</button>
      <button  onClick={handleartProducts} >Fashion</button>
      <button  onClick={handleartProducts} >Gift Cards</button>
    </div>
    </div>

    
   <div class="Videogameadjust">
    <div className="nonp">
        <h1>Cleveland Elementary School</h1>
        <p1>388 Bergen St, Newark, NJ 07108</p1>
        <p3>(973) 733-6944</p3>
        <p><a className="com1link"href="https://www.nps.k12.nj.us/clv/">Cleveland!</a></p>
    </div>
    
    <img className="gmflogo"src="https://clevelandscholarshangout.weebly.com/uploads/5/5/8/6/55862035/692418.jpg?332" />
    
   <div class="midlinetopthree"></div>
   
   <div class="nonpmission1">
       <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
       <i class="fa fa-bar-chart"></i>
       <h3>School Mission 1</h3>
       <p1>Cleveland Avenue Elementary School’s mission is to provide our students with the academic tools such as critical thinking and problem solving.</p1>
    </div>
    
    <div class="nonpmission2">
       <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
       <i class="fa fa-list-ul"></i>
       <h3>School Mission 2</h3>
       <p1>Further, students learn positive social inter-action skills that they need to succeed in high school, college and the global society.</p1>
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
       <img src="https://www.nj.com/resizer/QojiVu1qqrF3XGUoTDnmg045BCE=/1280x0/smart/advancelocal-adapter-image-uploads.s3.amazonaws.com/image.nj.com/home/njo-media/width2048/img/essex_impact/photo/2018/02/28/24209967-standard.jpg" class="simg1" alt="image1" />
       <img src="https://lh3.googleusercontent.com/proxy/Xlb8yCXJnvZxuKYLzomaAQlRooR8o29XeKWtQj0qn_SbxX8Ayn5kgfVVgtUhx0VM2RivkB_f52mHcd3v0AxlE9cWn89jinLDQoPX3hqCJWyruPCFUCWvAIFAqHfOtw" class="simg2" alt="image2"/>
      </div>
    <div className="sdot">
        <label for="simage1"></label>
        <label for="simage2"></label>
    </div>
  
    
     <footer class="Profile-site-footer1">
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

                     </footer>                <footer class="site-footer">
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
    </div>
    
  );
}

export default CES;