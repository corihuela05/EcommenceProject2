import React from "react";
import ReactDOM from 'react-dom';
import App from "./App";
import './Analytics.css';

function Analytics() {
  function back(){
     ReactDOM.render(<App />,document.getElementById('root'));
  }
  return (
    <div>
      <form onSubmit={back}>
        <button>Back</button>
      </form>
      <div class="tr">
        <h1>Total revenue/sales</h1>
        <p2>- Monthly</p2>
        <br></br>
        <p3>- Profit</p3>
      </div>
      <div class="c1">
        <h1>Conversion</h1>
        <p7>- Growth</p7>
        <br></br>
        <p9>- Item viewed per hour</p9>
      </div>
      <div class="g1">
        <h1>Graph</h1>
        <p5>- Data with image</p5>
      </div>
      <div class="arrow">
        <h1>→</h1>
      </div>
    </div>
    
  );
}

export default Analytics;
