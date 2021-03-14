import React from 'react';
import ReactDOM from 'react-dom';
import './Account.css';
import Form from './Form';
import './Cart.css';
import App from "./App";
import Shop from "./Shop";
import Next from "./Shipping";
import Carthome from "./App";
import Cartshop from "./Shop";

function Account() {
     function handleHome(){
      ReactDOM.render(<App />,document.getElementById('root'));
    }
    function handleShop(){
      ReactDOM.render(<Shop />,document.getElementById('root'));
    }
    function handleNext(){
      ReactDOM.render(<Next />,document.getElementById('root'));
    }
    function handleCarthome(){
     ReactDOM.render(<Carthome />,document.getElementById('root'));
   }
   function handleCartshop(){
     ReactDOM.render(<Cartshop />,document.getElementById('root'));
   }     <div className="topright">
      <form onSubmit={handleCarthome}>
      <button className="tophome">Home</button>
      </form>
      <button className="topabout">About</button>
      <form onSubmit={handleCartshop}>
      <button className="topshop">Shop</button>
      </form>
      <button className="tophelp">Help</button>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css"/>
        <button className="carts"><span className="glyphicon glyphicon-shopping-cart"></span>  Your Cart</button>
        
    </div>;
    
    
  return <Form />;
  
}

export default Account;
