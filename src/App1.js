import React from "react";
import ReactDOM from "react-dom";
import Shop from "./Shop";
import Product from "./Product";
import Home from "./App";
import "./App.css";
import Cart from "./Cart";
import Nonprofit from "./Nonprofit";
import Account from "./Account";
import FormSignup from "./userlogin";
import BeautyProducts from "./beauty_products";
import Profile from "./Profile";

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

  function logout(props) {
    <form onSubmit={handleuserlogout}>
      <button id="info">Logout</button>
    </form>;
    isLoggedIn = false;
  }
  function handleuserlogout() {
    ReactDOM.render(
      <App isLoggedIn={false} />,
      document.getElementById("root")
    );
  }

  function handlebeautyProducts() {
    ReactDOM.render(<BeautyProducts />, document.getElementById("root"));
  }

  function handleHome() {
    ReactDOM.render(<Home />, document.getElementById("root"));
  }
  function handleProduct() {
    ReactDOM.render(<Product />, document.getElementById("root"));

}
  function handleShop() {
    ReactDOM.render(<Shop />, document.getElementById("root"));
  }
  function handleCart() {
    ReactDOM.render(<Cart />, document.getElementById("root"));
  }
  function handleNonprofit() {
    ReactDOM.render(<Nonprofit />, document.getElementById("root"));
  }
  function handleAccount() {
    ReactDOM.render(<Account />, document.getElementById("root"));
  }
  function handleuserlogin() {
    ReactDOM.render(<FormSignup />, document.getElementById("root"));
  }
  function handleProfile() {
    ReactDOM.render(<Profile />, document.getElementById("root"));
  }

  return (
    <div className="App">
      <div className="Appheader">
        <img src="logo.png" alt="company logo" className="companylogo" />
        <img
          src="https://media1.tenor.com/images/3ced764a2cb7ad33ddf2145edb9904ae/tenor.gif?itemid=4320892"
          alt="flag"
          className="flag"
        />
        <input type="text" name="search" placeholder="Search.." />
        <form onSubmit={handleHome}>
          <button id="homebutton">Home</button>
        </form>

        {isLoggedIn ? (
          <div>
            <h1>{username}</h1>
            <form onSubmit={handleuserlogout}>
              <button id="info">Logout</button>
            </form>
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

            {/* <button onClick={handleclothingProducts}>
              Clothing, Shoes, & Accessories
            </button> */}

            {/* <form onSubmit={handleHomeandfurnitures}>
              <button>Home, Furniture & Appliances</button>
            </form> */}

            <button>Toys, Games and Video Games</button>
            <button>Home Improvement</button>
            <button>Movies, Music & Books</button>
            <button>Patio & Garden</button>
            {/* <button onClick={handlefoodProducts}>Food</button> */}
            <button>Pets</button>
            <button>Pharmacy, Health & Personal Care</button>
            <button onClick={handlebeautyProducts}>Beauty</button>
            <button>Sports, Fitness & Outdoors</button>
            <button>Auto & Tire</button>
            <button>Photos</button>
            {/* <button onClick={handleartProducts}>
              Art, Craft, Sewing & Party Supplies
            </button> */}

            {/* <button onClick={handleclothingProducts}>
              Clothing, Shoes, & Accessories
            </button> */}

            {/* <form onSubmit={handleHomeandfurnitures}>
              <button>Home, Furniture & Appliances</button>
            </form> */}

            <button>Toys, Games and Video Games</button>
            <button>Home Improvement</button>
            <button>Movies, Music & Books</button>
            <button>Patio & Garden</button>
            {/* <button onClick={handlefoodProducts}>Food</button> */}
            <button>Pets</button>
            <button>Pharmacy, Health & Personal Care</button>
            <button onClick={handlebeautyProducts}>Beauty</button>
            <button>Sports, Fitness & Outdoors</button>
            <button>Auto & Tire</button>
            <button>Photos</button>
            {/* <button onClick={handleartProducts}>
              Art, Craft, Sewing & Party Supplies
            </button> */}

          {/* <form onSubmit={handleChurch}>
            <button className="church">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/f/f6/Japanese_Map_symbol_%28Church%29.svg"
                alt="church"
                width="150"
                height="100"
              />
              Church<p>1,782 videos</p>
            </button>
          </form> */}

          {/* <form onSubmit={handleSchoolst}>
            <button className="school">
              <img
                src="https://media2.giphy.com/media/1etn2BmiW0nOgoZHTL/source.gif"
                alt="school"
                width="150"
                height="100"
              />
              School<p>1,023 videos</p>
            </button>
          </form> */}

          <form onSubmit={handleNonprofit}>
            <button className="organization">
              <img
                src="organization.jpg"
                alt="organization"
                width="150"
                height="100"
              />
              Non-Profits<p>2,416 videos</p>

            </button>
          </form>
        </div>
        <div className="addspace">
          <button className="spaces">
            <img src="addspace.jpg" alt="add spaces" width="250" height="180" />
            ADD SPACE
          </button>
        </div>
        <div className="category">
          {/* <form onSubmit={handlevideogame}>
            <button id="games">
              <img
                src="https://media4.giphy.com/media/9VtLabdE5IGJf4N5eS/source.gif"
                alt="games"
                class="thumbnail"
                width="150"
                height="200"
              />
              VIDEO GAMES
            </button>
          </form> */}

            {/* <form onSubmit={handleGetknowus}>
              <button>GET TO KNOW US</button>
            </form> */}

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

            {/* <form onSubmit={handleTermofservices}>
              <button>TERMS OF SERVICE</button>
            </form> */}

            <button>PRIVACY & SECURITY</button>
            <button>CA Privacy Rights</button>
            <button>Do Not Sell My information</button>
            <button>Request My information</button>

            <button>Tax Exempt Program</button>
          </div>

          <div className="footer5">
            <hr />
            <p> Copyright © 2021 All Rights Reserved by Greyson</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
