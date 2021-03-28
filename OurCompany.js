
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
import Donotsellmyinformation from './Donotsellmyinformation';
import Taxexemptprogram from '/TaxExemptProgram';
import OurServices from '/Our Company';



function handleTermofservice() {
    ReactDOM.render(<BeautyProducts />,document.getElementById('root'));
    function OurCompany() {
        ReactDOM.render(<OurCompany />,document.getElementById('root'));

    function handleTaxExemptProgram() {
        ReactDOM.render(<TaxExemptProgram />,document.getElementById('root'));
    }
    function handleDonotsellmyInformation() {
        ReactDOM.render(<donotSellmyinformation />,document.getElementById('root'));
    }
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

    function handleSchools(){
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
                            <form onSubmit={Donotsellmyinformation}>
                                <button Returns ></button>
                                <form onSubmit={Returns}>

                                    <form onSubmit={CA Privacy Rights}>
                                        <button>CA Privacy Rights</button>
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


                    <h1> Returns </h1>
                    <p>

                        <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
                        <link rel="stylesheet" type="text/css" href="grid.css" media="screen" />
                </head>
                <body>
                <div class="title">
                    <a href="#">
                        <h2>Ous Company</h2>
                    </a>
                </div>

                <div class="table" >
                    <div class="row">
                        <div class="column">
                            <div class="container"><p>Paragraph. Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit.Curabitur id suscipit ex. Suspendisse
                                rhoncus laoreet purus quis elementum.
                                Phasellus sed efficitur dolor, et ultricies sapien.
                                Quisque fringilla sit amet dolor commodo efficitur.
                                Aliquam et sem odio. In ullamcorper nisi
                                nunc, et molestie ipsum iaculis sit amet.</p>
                            </div>
                        </div>
                        <div class="column">
                            <div class="figure">
                                <img src="images/logo.jpg" alt="" width="250" height="250" />
                            </div>

                        </div>
                    </div>
                </div>

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

export default OurCompany;
