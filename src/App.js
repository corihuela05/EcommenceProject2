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


function App() {
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
  
  
    function handleAccount(){
    ReactDOM.render(<Account />,document.getElementById('root'));
  }
   function handleuserlogin(){
    ReactDOM.render(<FormSignup />,document.getElementById('root'));
  }
  
  

  return (
    <div className="App">
    <img src="logo.jpg" alt='company logo' className="logo" />
    <img src="flag.png" alt='flag' className="flag" />
    <input type="text" name="search" placeholder="Search.."/>
    <form onSubmit={handleHome}>
      <button className="homebutton">Home</button>
    </form>
   

  <form onSubmit={handleAccount}>
      <button className="info">Sign In/ Sign Up</button>
    </form>
    <form onSubmit={handleuserlogin}>
      <button className="info">login</button>
    </form>

    

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css"/>
    <form onSubmit={handleCart}>
      <button className="cart"><span className="glyphicon glyphicon-shopping-cart"></span>  Your Cart</button>
    </form>
    <div className="homepagesidebar">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
    <input type="checkbox" id="check"/>
    <label for="check">
      <i class="fa fa-bars" id="openbutton"></i>
      <i class="fa fa-bars" id="cancelbutton"></i>
    </label>
    <div className="sidebar">
      <form onSubmit={handleHome}>
        <button>Home</button>
      </form>
      <form onSubmit={handleProduct}>
        <button>Products</button>
      </form>
      <form onSubmit={handleShop}>
        <button>Shop</button>
      </form>
      <form onSubmit={handleNonprofit}>
      <button>Non Profits</button>
    </form>
    </div> 
    </div>
    <div className="tabs">
      <button>Best Sellers</button>
      <button>Today's Deals</button>
      <button>Customer Service</button>
      <button>New eleases</button>
      <button>Near Me</button>
      <button>Books</button>
      <button>Fashion</button>
      <button>Gift Cards</button>
    </div>
    
    <div className="slider">
      <div className="images">
        <input type="radio" name="slide" id="image1" checked/>
        <input type="radio" name="slide" id="image2" checked/>
      
        <img src="https://philanthropyu.org/wp-content/uploads/2020/01/1-1200-x-800.jpg" class="img1" alt="image1" />
        <img src="http://www.epilepsy.com/sites/core/files/styles/banner_image/public/upload/image/Get%20Involved%20logo_0.jpg" class="img2" alt="image2"/>
      </div>
      <div className="dot">
        <label for="image1"></label>
        <label for="image2"></label>
      </div>
    </div>
    <div className="threebox">
      <button className="church"><img src="https://upload.wikimedia.org/wikipedia/commons/f/f6/Japanese_Map_symbol_%28Church%29.svg" alt='church' width="150" height="100"/>Church</button>
      <button className="school"><img src="https://e7.pngegg.com/pngimages/116/432/png-clipart-computer-icons-university-symbol-school-college-miscellaneous-angle.png" alt='school' width="150" height="100"/>School</button>
      <button className="organization"><img src="data:image/jpeg;base64,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" alt='organization' width="150" height="100"/>Non-Profits</button>
    </div>
    <div className="addspace">
      <button className="spaces"><img src="addspace.jpg" alt='add spaces' width="250" height="180"/>ADD SPACE</button>
    </div>
    <div className="category">
      <button className="games"><img src="https://i.pcmag.com/imagery/lineups/06PiprC5eiYhlpaNS6N0sbP-1.1569492872.fit_lim.size_1200x630.jpg"  alt='games' width="150" height="200"/>VIDEO GAMES</button>
      <button className="baby"><img src="http://cdn.shopify.com/s/files/1/1407/3324/articles/Blog-baby-overheating_3_1300x@2x.jpg?v=1542056180"  alt='baby' width="150" height="200"/>BABY</button>
      <button className="patio"><img src="https://i.pinimg.com/originals/2e/8d/a4/2e8da4010d6de97bd29c113c39c8f62b.jpg"  alt='patio' width="150" height="200"/>PATIO</button>
      <button className="pets"><img src="https://images.livemint.com/rf/Image-621x414/LiveMint/Period2/2018/06/02/Photos/Processed/pets1-kYdB--621x414@LiveMint.jpg"  alt='pets' width="150" height="200"/>PETS</button>
      <button className="pharmacy"><img src="https://media3.s-nbcnews.com/i/newscms/2017_33/2120896/170815-pharmacy-mn-1340_88c4085f525919b7a2a081b9552b5ea8.jpg"  alt='pharmacy'  width="150" height="200"/>PHARMACY</button>
      <button className="beauty"><img src="https://cdn-a.william-reed.com/var/wrbm_gb_food_pharma/storage/images/publications/cosmetics/cosmeticsdesign.com/headlines/market-trends/unfiltered-experience-rethinks-what-s-possible-with-virtual-beauty-events/11691757-1-eng-GB/Unfiltered-Experience-rethinks-what-s-possible-with-virtual-beauty-events_wrbm_large.jpg" alt='beauty' width="150" height="200"/>BEAUTY</button>
      <button className="sports"><img src="https://pagedesignpro.com/wp-content/uploads/2018/06/Sports.jpg" alt='sports'width="150" height="200"/>SPORTS</button>
      <button className="auto"><img src="https://png.pngtree.com/png-vector/20190511/ourmid/pngtree-car-illustration--mustang--png-image_1023821.jpg" alt='auto' width="150" height="200"/>AUTO</button>
      <button className="music"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoltp7VXYTekycAR6dafpyUlvwBinkv03UKw&usqp=CAU" alt='music' width="150" height="200"/>MUSIC</button>
    </div>
    <img src="https://www.sendinblue.com/wp-content/uploads/2020/02/how_to_create_a_newsletter.png" alt='newsletter' className="letterpic" width="200" height="150"/>
    <div className="newsletter">
      <h1>Newsletter</h1>
      <input type="input" className="email" placeholder="Email Address"/>
      <button className="subscribe">Subscribe</button>
    </div>
    <div className="about">
      <h1>About Greyson</h1>
    </div>
    <div className="end">
      <button className="first"><img src="logo.jpg" className="logo" alt='logo' width="150" height="150"/>1717 Harrison St. Newark, NJ 07028,USA</button>
      <div className="buttons1">
        <button>GET TO KNOW US</button>
        <button>OUR COMPANY</button>
        <button>DIRECTORY</button>
        <button>OUR SUPPLIERS</button>
        <button>ADVERTISE WITH US</button>
        <button>OUR SUPPLIERS</button>
        <button>CONTACT US</button>
      </div>
      <div className="buttons2">
        <button>CUSTOMER SERVICE</button>
        <button>HELP CENTER</button>
        <button>RETURNS</button>
        <button>PRODUCT RECALLS</button>
        <button>ACCESSIBILTY</button>
        <button>CONTACT US</button>
      </div>
      <div className="buttons3">
        <button>GREYSON'S</button>
        <button>OUR ADS</button>
        <button>TERMS OF SERVICE</button>
        <button>PRIVACY & SECURITY</button>
        <button>CA Privacy Rights</button>
        <button>Do Not Sell My information</button>
        <button>Request My information</button>
        <button>Tax Exempt Program</button>
      </div>
      <div className="copyright">
        <p>© Greyson</p>
      </div>
    </div>
    </div>
  );
}

export default App;
