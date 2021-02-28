import React from "react";
import ReactDOM from 'react-dom';
import Buyers from "./Buyers";
import './App.css';
import Products from "./Products";
import Analytics from "./Analytics";


function App() {
  function handleOrders(){
    ReactDOM.render(<Buyers />,document.getElementById('root'));
    
  }
  function handleAnalytics(){
    ReactDOM.render(<Analytics />,document.getElementById('root'));
    
  }
  function handleProducts(){
    ReactDOM.render(<Products />,document.getElementById('root'));
    
  }
  return (
    <div className="App">
    <img src="https://scontent.fewr1-5.fna.fbcdn.net/v/t1.0-9/131111442_101471758510914_2141520648034571401_n.png?_nc_cat=105&ccb=3&_nc_sid=09cbfe&_nc_ohc=pl2djSfZQ38AX9AS7v1&_nc_ht=scontent.fewr1-5.fna&oh=0a910506d54e3fbf78dbfbacad55148c&oe=605F2D53" />
    <h1>Welcome To Ecommerce Fundraising Platform</h1>
    <div className="sidebar">
    <button>Home</button>
    <form onSubmit={handleProducts}>
      <button>Products</button>
    </form>
    <form onSubmit={handleOrders}>
      <button>Orders</button>
    </form>
    <form onSubmit={handleAnalytics}>
      <button>Analytics</button>
    </form>
    </div> 
    </div>
  );
}

export default App;
