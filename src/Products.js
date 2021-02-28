import React from "react";
import ReactDOM from 'react-dom';
import App from "./App";
import './Products.css';

function Products() {
  function back(){
     ReactDOM.render(<App />,document.getElementById('root'));
  }
  return (
    <div>
      <form onSubmit={back}>
        <button>Back</button>
      </form>
      <input id="insert" placeholder="Search for products" />
      <div className="try">
        <button>Search </button>
      </div>
      <div class="s1">
        <div class = "s2">
          <h1>Product-1</h1>
        </div>
        <div class = "s3">
          <h1>Product-2</h1>
        </div>
        <div class = "s4">
          <p1>✅</p1>
          <h1>Product-3</h1>
        </div>
        <div class = "s5">
          <h1>Product-4</h1>
        </div>
      </div>
    </div>
    
  );
}

export default Products;
