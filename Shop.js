import React from "react";
import ReactDOM from 'react-dom';
import App from "./App";
import './Shop.css';
import Shop from "./Shop";
import Product from "./Product";
import Toyourcarts from './Cart';
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
import Auto from './Partnerapplication';
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
import AnimatedButton from 'react-animated-button';
import { useState } from "react";


function Buyers() {
   function handleHome(){
     ReactDOM.render(<App />,document.getElementById('root'));
  }
     function handleToyourcarts(){
     ReactDOM.render(<Toyourcarts />,document.getElementById('root'));
    }

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
    <div className="header">
      <img src="logo.jpg" alt='company logo' className="logo" />
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css"/>
      <form onSubmit={handleToyourcarts}>
      <button className="shopcart"><span className="glyphicon glyphicon-shopping-cart"></span>  Your Cart</button>
      </form>
      <div className="position">
      <h1>Slogan</h1>
      <input type="shopinput" placeholder="Search..." />
      <button className="shopsubmit">Submit</button>
      </div>
      <div className="feature">
        <h1>Featured Categories</h1>
        <div className="shopcategory">
          <button><img src="https://pagedesignpro.com/wp-content/uploads/2018/06/Sports.jpg" alt='sports' width="150" height="200"/>SPORTS</button>
          <button><img src="https://png.pngtree.com/png-vector/20190511/ourmid/pngtree-car-illustration--mustang--png-image_1023821.jpg" alt='auto' width="150" height="200"/>AUTO</button>
          <button><img src="https://cdn-a.william-reed.com/var/wrbm_gb_food_pharma/storage/images/publications/cosmetics/cosmeticsdesign.com/headlines/market-trends/unfiltered-experience-rethinks-what-s-possible-with-virtual-beauty-events/11691757-1-eng-GB/Unfiltered-Experience-rethinks-what-s-possible-with-virtual-beauty-events_wrbm_large.jpg" alt='beauty' width="150" height="200"/>BEAUTY</button>
          <button className="shop">Shop Now</button>
        </div>
        <img className="advertisement"src="https://s3.envato.com/files/116351238/03_preview-horizontal-banner.jpg" alt="advertisement"/>
      </div>
      <div className="productheader">
        <h1>Men's Puma T-Shirts</h1>
        <button className="">Browse All</button>
      </div>
    <div className="products">
    <img src="https://images.sportsdirect.com/images/products/59852840_l.jpg" alt='tshirt' className="logo" />
    <button>
    <p>T-SHIRT</p>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
    <p><span class="fa fa-star"></span><span class="fa fa-star "></span><span class="fa fa-star "></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span></p>
    <p>$25</p>
    </button>
    </div>
    <div className="products1">
    <img src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRn4p4amoMiDlyjR8Mgh1gB0dZK8ZKaUNAU2ifA8BhPcf3t8crWDSRSjLiClk1S3Z9hRquwDWseZc0&usqp=CAc" alt='tshirt' className="logo" />
    <button>
    <p>T-SHIRT</p>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
    <p><span class="fa fa-star"></span><span class="fa fa-star "></span><span class="fa fa-star "></span><span class="fa fa-star "></span><span class="fa fa-star "></span></p>
    <p>$35</p>
    </button>
    </div>
    <div className="products2">
    <img src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQXm_6gex_tOMtlviPbbv4NudZOTQvGbXKtd3zow7YFPa4zi2pdOP0h5wZX86p8psHkkgyD8jfTxJY&usqp=CAc" alt='tshirt' className="logo" />
    <button>
    <p>T-SHIRT</p>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
    <p><span class="fa fa-star"></span><span class="fa fa-star "></span><span class="fa fa-star "></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span></p>
    <p>$20</p>
    </button>
    </div>
    <div className="products3">
    <img src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTwUFGyNXjm61X18o2GFSQhlIEw1hf1mH_kh45FlawoSgWKjo-tkgWJcatu98Rva2fKVUx9FRlvIu4&usqp=CAc" alt='tshirt' className="logo" />
    <button>
    <p>T-SHIRT</p>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
    <p><span class="fa fa-star"></span><span class="fa fa-star "></span><span class="fa fa-star "></span><span class="fa fa-star "></span><span class="fa fa-star "></span></p>
    <p>$35</p>
    </button>
    <div className="products4">
    <img src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRzDBvIJ5BZt-ivLEh3cjb_cu_DzrRker7s1Y7LjMjBIwA-s_d-idQrxEgpdWJev3xBzU95kRaqFWI&usqp=CAc" alt='tshirt' className="logo" />
    <button>
    <p>T-SHIRT</p>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
    <p><span class="fa fa-star"></span><span class="fa fa-star "></span><span class="fa fa-star "></span><span class="fa fa-star "></span><span class="fa fa-star checked"></span></p>
    <p>$30</p>
    </button>
    </div>
    <div className="products5">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3qWh_0mVCYbANekoKRoLasPSUXLmHoydpehEyx6u6RHY_l2kIJM7xtjHncax36ooIqWK1YzAr&usqp=CAc" alt='tshirt' className="logo" />
    <button>
    <p>T-SHIRT</p>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
    <p><span class="fa fa-star"></span><span class="fa fa-star "></span><span class="fa fa-star "></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span></p>
    <p>$20</p>
    </button>
    </div>
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
    
  );
}

export default Buyers;
