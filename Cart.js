import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './Cart.css';
import App from "./App";
import Shop from "./Shop";
import Next from "./Shipping";
import Carthome from "./App";
import Cartshop from "./Shop";
import Gettoknowus from './Gettoknowus';
import Privacyandsecurity from './privacyandsecurity';
import Donotsellmyinfo from './donotsellmyinfo';
import Ourcompany from './ourcompany';
import Caprivacy from './caprivacy';
import Accessibilitty from './accessibility';
import Returnpage from './returnpage';
import Termofservice from './Termofservices';
import Ourads from './Ourads';
import TaxExcemptpage from './taxExcemptpage';
import axios from 'axios';

function Cart() {
    const [count, setCount] = useState(1);
    const [cart,resetCart] = useState(false);
    if(!cart){
        axios.get("http://127.0.0.1:5000/getCart").then(data=>{
          const newState={
            "items":data['data']['items'],
            "total":data['data']['total']
          }
          console.log("type",typeof(newState))
          if (cart!=newState){
              resetCart(newState)
          }
        })
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
    function handleGetknowus() {
        ReactDOM.render(<Gettoknowus />, document.getElementById('root'));
    }

    function handleOurads() {
        ReactDOM.render(<Ourads />, document.getElementById('root'));
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

    function handleTermofservices() {
        ReactDOM.render(<Termofservice />, document.getElementById('root'));
    }

    function decrementCount() {
        setCount(prevCount => prevCount - 1)
    }
    
    function incrementcount() {
        setCount(prevCount => prevCount + 1)
    }
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
   }
  function numChange(id,action){
    console.log("id",id)
    console.log("action",action)
    axios.post("http://127.0.0.1:5000/numChange",{'id':id,'action':action}).then(data=>{
      const newState={
        "items":data['data']['items'],
        "total":data['data']['total']
      }
      console.log("type",typeof(newState))
      if (cart!=newState){
          resetCart(newState)
      }
    })

  }
    
  return (
    <div className="hello">
        <button className="pro1"onClick={decrementCount}>-</button>
        <span className="pro13">{count}</span>
        <button className="pro12" onClick={incrementcount}>+</button>
      <div className="topright">
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
        
    </div>
    
    <div className="threesteps">
      <button className="b7">1.Shopping Cart</button>
      <button className="b8">2.Shipping Details</button>
      <button className="b9">3.Payment Options</button>
    </div>

    
    <div className="detailsinfo">
      <h1>Shopping Cart</h1>
      </div>
      
      
    <div className="summaryinfo">
      <h1>Summary</h1>
    </div>
    
    <div class="cards3">
     <img className="nicheno"src="https://assets.adidas.com/images/w_600,f_auto,q_auto/9c7058d8677742ac8519ac3f009cdcf4_9366/Tiro_21_Track_Pants_Black_GH7305_21_model.jpg" alt="Pant"/>
     <p className="productname3">TIRO 21 TRACK PANTS</p>
     <p className="price3">$45</p>
    </div>
     
    <div class="cards4">

     <img className="uparno"src="https://assets.adidas.com/images/w_600,f_auto,q_auto/7e400dfdb5de4de3aa23aa03013fea92_9366/Trefoil_Tee_Red_EJ9678_01_laydown.jpg" alt="Tshirt"/>
     <p8 className="productname4">BADGE OF SPORT TEE</p8>
     <p7 className="price4">$25</p7>

    </div>
    {
      (cart!=false) && Object.entries(cart["items"]).map((item)=>{
        return(
          <div className="card">
              <img className="image" src={item[1]['image']} />
              <p>{item[1]['name']}</p>
              <p>{item[1]['price']}</p>
              <div onClick={()=>numChange(item[0],"sub")}>-</div>
              {item[1]['num']}
              <div onClick={()=>numChange(item[0],"add")}>+</div>

          </div>
        )
      })
    }
    <h1>Total: {cart['total']}</h1>
    <button className="pro2"onClick={decrementCount}>-</button>
    <span className="pro23">{count}</span>
    <button className="pro22" onClick={incrementcount}>+</button>
     
    <div class="amount1">
     <p className="sub1">SUBTOTAL $70</p>
     <p className="ship1">SHIPPING  FREE</p>
     <p className="tax1">TAXES  $4.90</p>
     <p className="total1">TOTAL  $74.90</p>
     <p className="voucher1">HAVE A VOUCHER?</p>
    </div>
    
    <input type="text10" id="fname" name="copoun" placeholder="Voucher #"/>
    
    <div class="verticalline7"></div>
    
    <div class="horline"></div>
    
    <div className="cartbot">
      <form onSubmit={handleNext}>
      <button className="cn1">Next</button>
      </form>
      <form onSubmit={handleHome}>
      <button className="cn2">Cancel</button>
      </form>
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
  );
}

export default Cart;