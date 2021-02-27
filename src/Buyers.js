import React from "react";
import ReactDOM from 'react-dom';
import App from "./App";
import './Buyers.css';

function Buyers() {
  function back(){
     ReactDOM.render(<App />,document.getElementById('root'));
  }
  return (
    <div>
      <form onSubmit={back}>
        <button>Back</button>
      </form>
      <h1>Your Orders</h1>
      <input id="input" placeholder="Search all orders" />
      <button>Search Orders</button>
      <div class="purchasehistory">
        <h1>Purchase History</h1>
      </div>
      <div class="trackorder">
        <h1>Track Order</h1>
      </div>
      <div class="contribution">
        <h1>Money Contributed</h1>
      </div>
    </div>
    
  );
}

export default Buyers;
