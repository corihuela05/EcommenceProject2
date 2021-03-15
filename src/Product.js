import React from "react";
import ReactDOM from 'react-dom';
import App from "./App";
import Shop from "./Shop";
import Toyourcarts from './Cart';
import './Product.css';

function Product() {
   function handleHome(){
     ReactDOM.render(<App />,document.getElementById('root'));
  }
   function handleShop(){
     ReactDOM.render(<Shop />,document.getElementById('root'));
  }
  function handleToyourcarts(){
     ReactDOM.render(<Toyourcarts />,document.getElementById('root'));
   }
  return (
    <div className="productlogo">
      <img src="logo.jpg" alt='company logo' className="logo" />
      <form onSubmit={handleHome}>
        <button className="producthome">Home</button>
      </form>
      <button className="productabout">About</button>
      <form onSubmit={handleShop}>
        <button className="productshop">Shop</button>
      </form>
      <button className="producthelp">Help</button>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css"/>
      <form onSubmit={handleToyourcarts}>
        <button className="shopcart"><span className="glyphicon glyphicon-shopping-cart"></span>  Your Cart</button>
      </form>  
      <div className="boxs">
          <li><img src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/586449/01/mod01/fnd/PNA/fmt/png/Essentials-Men's-Logo-Tee" alt="image1" width="100" height="100"/><ul id="active"><img src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/586449/01/mod01/fnd/PNA/fmt/png/Essentials-Men's-Logo-Tee" alt="image1" /></ul></li>
          <li><img src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/586449/01/mod02/fnd/PNA/fmt/png/Essentials-Men's-Logo-Tee" alt="image2" width="100" height="100"/> <ul><img src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/586449/01/mod02/fnd/PNA/fmt/png/Essentials-Men's-Logo-Tee" alt="image2" /></ul></li>
          <li><img src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/586449/01/mod03/fnd/PNA/fmt/png/Essentials-Men's-Logo-Tee" alt="image3" width="100" height="100"/> <ul><img src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/586449/01/mod03/fnd/PNA/fmt/png/Essentials-Men's-Logo-Tee" alt="image3" /></ul></li>
          <li><img src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/586449/01/fnd/PNA/fmt/png/Essentials-Men's-Logo-Tee" alt="image4" width="100" height="100"/> <ul><img src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/586449/01/fnd/PNA/fmt/png/Essentials-Men's-Logo-Tee" alt="image4" /></ul></li>
      </div>
      <div className="productname">
        <h1>Men's Puma T-Shirts</h1>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
        <p><span class="fa fa-star"></span><span class="fa fa-star "></span><span class="fa fa-star "></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span> 3 reviews</p>
        <h1>$35</h1>
        <button className="addtochart">Add To Cart</button>
      </div>
      <div className="similarproduct">
        <h1 className="title">Similar Products</h1>
        <div className="productsimilar">
          <img src="https://images.sportsdirect.com/images/products/59852840_l.jpg" alt='tshirt' className="logo" />
          <button><p>T-SHIRT</p><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/><p><span class="fa fa-star"></span><span class="fa fa-star "></span><span class="fa fa-star "></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span></p><p>$25</p> </button>
        </div>
        <div className="productsimilar1">
          <img src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRn4p4amoMiDlyjR8Mgh1gB0dZK8ZKaUNAU2ifA8BhPcf3t8crWDSRSjLiClk1S3Z9hRquwDWseZc0&usqp=CAc" alt='tshirt' className="logo" />
          <button><p>T-SHIRT</p><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/><p><span class="fa fa-star"></span><span class="fa fa-star "></span><span class="fa fa-star "></span><span class="fa fa-star "></span><span class="fa fa-star "></span></p><p>$35</p></button>
        </div>
        <div className="productsimilar2">
          <img src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQXm_6gex_tOMtlviPbbv4NudZOTQvGbXKtd3zow7YFPa4zi2pdOP0h5wZX86p8psHkkgyD8jfTxJY&usqp=CAc" alt='tshirt' className="logo" />
          <button><p>T-SHIRT</p><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/><p><span class="fa fa-star"></span><span class="fa fa-star "></span><span class="fa fa-star "></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span></p><p>$20</p></button>
        </div>
    </div>
    <div className="reviews">
      <h1>Reviews</h1>
      <div className="productreview">
        <img src="https://i.stack.imgur.com/l60Hf.png" alt='reviewprofile' className="logo" />
        <button><p>Sunny Patel</p><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/><p>March 6, 2021</p><p><span class="fa fa-star"></span><span class="fa fa-star "></span><span class="fa fa-star "></span><span class="fa fa-star "></span><span class="fa fa-star "></span></p></button>
      </div>
      <div className="writtenreview">  
        <p>I love this T-shirt, and I would recommend everyone to buy this T-shirt.</p>
      </div>
      <div className="productreview1">
        <img src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" alt='reviewprofile' className="logo" />
        <button><p>Natukaka</p><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/><p>March 6, 2021</p><p><span class="fa fa-star"></span><span class="fa fa-star "></span><span class="fa fa-star "></span><span class="fa fa-star "></span><span class="fa fa-star checked"></span></p></button>
      </div>
      <div className="writtenreview1">  
        <p>This T-shirt is so nice, and I really liked it.</p>
      </div>
      <div className="productreview2">
        <img src="https://i.stack.imgur.com/l60Hf.png" alt='tshirtprofile' className="logo" />
        <button><p>Dipam Patel</p><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/><p>March 6, 2021</p><p><span class="fa fa-star"></span><span class="fa fa-star "></span><span class="fa fa-star "></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span></p></button>
      </div>
      <div className="writtenreview2">  
        <p>This T-shirt is too expensive, and it's not worth it.</p>
      </div>
    </div>
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

export default Product;
