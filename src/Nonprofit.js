import React from "react";
import ReactDOM from 'react-dom';
import Shop from "./Shop";
import Product from "./Product";
import Home from "./App"
import './Nonprofit.css';

function Nonprofit() {
    function handleHome(){
    ReactDOM.render(<Home />,document.getElementById('root'));
  }
  function handleProduct(){
    ReactDOM.render(<Product />,document.getElementById('root'));
  }
  function handleShop(){
    ReactDOM.render(<Shop />,document.getElementById('root'));
  }
  return (
    <div className="nonprofit">
    <div className="homepagesidebar">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
    <input type="checkbox" id="check"/>
    <label for="check">
        <i class="fa fa-bars" id="openbuttons"></i>
        <i class="fa fa-bars" id="cancelbuttons"></i>
    </label>
    <div class="sidebars">
    <form onSubmit={handleHome}>
        <button>Home</button>
    </form>
    <form onSubmit={handleProduct}>
      <button>Products</button>
    </form>
    <form onSubmit={handleShop}>
      <button>Shop</button>
    </form>
    </div>
    </div>
    <div className="tab">
      <button>Best Sellers</button>
      <button>Today's Deals</button>
      <button>Customer Service</button>
      <button>New Releases</button>
      <button>Near Me</button>
      <button>Books</button>
      <button>Fashion</button>
      <button>Gift Cards</button>
    </div>
    <div className="nonprofitheader">
      <h1>Non Profits</h1>
    </div>
    
    <div className="video1">
    <video width="320" height="240" controls>
      <source src="BoysandGirlsClub.mp4" type="video/mp4"/>
    </video>
    <p>Boys and Girls Club</p>
    </div>
    
    <div className="video2">
    <video width="320" height="240" controls>
      <source src="BoysandGirlsClub.mp4" type="video/mp4"/>
    </video>
    <p>Boys and Girls Club</p>
    </div>
    
    <div className="video3">
    <video width="320" height="240" controls>
      <source src="BoysandGirlsClub.mp4" type="video/mp4"/>
    </video>
    <p>Boys and Girls Club</p>
    </div>
    
    <div className="video4">
    <video width="320" height="240" controls>
      <source src="BoysandGirlsClub.mp4" type="video/mp4"/>
    </video>
    <p>Boys and Girls Club</p>
    </div>
    
    <div className="video5">
    <video width="320" height="240" controls>
      <source src="BoysandGirlsClub.mp4" type="video/mp4"/>
    </video>
    <p>Boys and Girls Club</p>
    </div>
    
    <div className="video6">
    <video width="320" height="240" controls>
      <source src="BoysandGirlsClub.mp4" type="video/mp4"/>
    </video>
    <p>Boys and Girls Club</p>
    </div>
    
    <div className="nonprofisearch">
      <h3>Search for your Non Profits</h3>
      <h5>Name of Non Profit:</h5>
      <select>
        <option selected disabled>Select option</option>
        <option value="name1">Name1</option>
        <option value="name2">Name2</option>
        <option value="name3">Name3</option>
      </select>
      <h5>Type:</h5>
      <select>
        <option selected disabled>Select option</option>
        <option value="type1">Type1</option>
        <option value="type2">Type2</option>
        <option value="type3">Type3</option>
      </select>
      <h5>Category:</h5>
      <select>
        <option selected disabled>Select option</option>
        <option value="category1">Category1</option>
        <option value="category2">Category2</option>
        <option value="category3">Category3</option>
      </select>
      <h5>Location:</h5>
      <select>
        <option selected disabled>Select option</option>
        <option value="location1">Location1</option>
        <option value="location2">Location2</option>
        <option value="location3">Location3</option>
      </select>
      <button className="nonprofitsearch">SEARCH</button>
    </div>
    <div className="nonprofitreview">
      <p>Non Profit Review</p>
      <div className="productreview">
        <img src="https://i.stack.imgur.com/l60Hf.png" alt='reviewprofile' className="logo" />
        <button><h3>Jim Clark</h3><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/><p>President at BoysandGirlsClub</p></button>
      </div>
      <div className="productreview1">
        <img src="https://i.stack.imgur.com/l60Hf.png" alt='reviewprofile' className="logo" />
        <button><h3>Jim Clark</h3><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/><p>President at BoysandGirlsClub</p></button>
      </div>
    </div>
    <div className="nonprofimidheader">
      <h1>Main Statement</h1>
    </div>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css"/>
      <div className="bulletpoints">
      <div className="lightbulb">
        <i class="fa fa-lightbulb-o"></i>
      </div>
      <h3>First Benefit</h3>
      <div className="nonprofittextbox">
        <p>This description supports and extends the bullet point above.</p>
      </div>
    </div>
    <div className="bulletpoints1">
      <div className="lightbulb">
        <i class="fa fa-lightbulb-o"></i>
      </div>
      <h3 className="secondbenefit">Second Benefit</h3>
      <div className="nonprofittextbox">
        <p>This description supports and extends the bullet point above.</p>
      </div>
    </div>
    <div className="bulletpoints2">
      <div className="lightbulb">
        <i class="fa fa-lightbulb-o"></i>
      </div>
      <h3 className="thirdbenefit">Third Benefit</h3>
      <div className="nonprofittextbox">
        <p>This description supports and extends the bullet point above.</p>
      </div>
    </div>
    <div className="bulletpoints3">
      <div className="lightbulb1">
        <i class="fa fa-star-o"></i>
      </div>
      <h3 className="firstfeature">First Feature</h3>
      <div className="nonprofittextbox">
        <p>This description supports and extends the bullet point above.</p>
      </div>
    </div>
    <div className="bulletpoints4">
      <div className="lightbulb">
        <i class="fa fa-star-o"></i>
      </div>
      <h3 className="secondfeature">Second Feature</h3>
      <div className="nonprofittextbox">
        <p>This description supports and extends the bullet point above.</p>
      </div>
    </div>
    <div className="bulletpoints5">
      <div className="lightbulb">
        <i class="fa fa-star-o"></i>
      </div>
      <h3 className="thirdfeature">Third Feature</h3>
      <div className="nonprofittextbox">
        <p>This description supports and extends the bullet point above.</p>
      </div>
    </div>
    <div className="bottomsignup">
      <h1>Your Closing Argument Headline</h1>
      <button className="nonprofitsignup">Sign Up</button>
    </div>
     <div className="nonprofitfooter">
      <button>Term of Service</button>
      <button>Privacy Policy</button>
      <p className="nonprofitfooter1">©2021 Greyson</p>
    </div>
    </div>
    
  );
}

export default Nonprofit;
