import React from "react";
import './Shipping.css';
import Shop from "./Shop";
import ReactDOM from 'react-dom';
import App from "./App";
import Shiphome from "./App";
import Shipshop from "./Shop";
import './Account.css';
import Form from './Form';
import FormSignup from './userlogin';
import { useState } from "react";


function Accounts() {
    const [isLoggedIn, setIsLoggedIn] = useState(
        localStorage.getItem("isLoggedIn")
    );

    const [username, setUsername] = useState(localStorage.getItem("username"));


    function handleuserlogout() {
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("username");
    }
    function handleHome(){
     ReactDOM.render(<App />,document.getElementById('root'));
    }
    function handleShop(){
     ReactDOM.render(<Shop />,document.getElementById('root'));
    }
 
   function handleShiphome(){
     ReactDOM.render(<Shiphome />,document.getElementById('root'));
   }
   function handleShipshop(){
     ReactDOM.render(<Shipshop />,document.getElementById('root'));
   }
    function handleuserlogin(){
    ReactDOM.render(<FormSignup />,document.getElementById('root'));
  }
  return (
    <div>
      <div className="topright">
      <form onSubmit={handleShiphome}>
      <button className="tophome">Home</button>
      </form>
      <button className="topabout">About</button>
      <form onSubmit={handleShipshop}>
      <button className="topshop">Shop</button>
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

      <button className="carts"><span className="glyphicon glyphicon-shopping-cart"></span>  Your Cart</button>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css"/>
      </div>


        <Form />;
    
    <div className="productfooter">
    <form onSubmit={handleHome}>
      <button className="homePosition">Home</button>
    </form>  
      <button className="aboutPosition">About</button>
    <form onSubmit={handleShop}>
      <button className="shopPosition">Shop</button>
    </form>
      <button className="helpPosition">Help</button>
    </div>
    <div className="productcopyright">
      <p>© Greyson</p>
    </div>

    </div>
    
  );
}
export default Accounts;
