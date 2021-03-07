import React from "react";
import ReactDOM from 'react-dom';
import App from "./App";
import './Shop.css';

function Buyers() {
   function handleHome(){
     ReactDOM.render(<App />,document.getElementById('root'));
  }
  return (
    <div className="header">
      <img src="logo.jpg" alt='company logo' className="logo" />
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css"/>
      <button className="shopcart"><span className="glyphicon glyphicon-shopping-cart"></span>  Your Cart</button>
      <div className="position">
      <h1>Slogan</h1>
      <input type="shopinput" placeholder="Search..." />
      <button className="shopsubmit">Submit</button>
      </div>
      <div className="feature">
        <h1>Featured Categories</h1>
        <div className="shopcategory">
          <button><img src="https://pagedesignpro.com/wp-content/uploads/2018/06/Sports.jpg" alt='sports' width="150" height="200"/>SPORTS</button>
          <button><img src="https://png.pngtree.com/png-vector/20190511/ourmid/pngtree-car-illustration--mustang--png-image_1023821.jpg" alt='auto' width="150" height="200"/>AUTO</button>
          <button><img src="https://cdn-a.william-reed.com/var/wrbm_gb_food_pharma/storage/images/publications/cosmetics/cosmeticsdesign.com/headlines/market-trends/unfiltered-experience-rethinks-what-s-possible-with-virtual-beauty-events/11691757-1-eng-GB/Unfiltered-Experience-rethinks-what-s-possible-with-virtual-beauty-events_wrbm_large.jpg" alt='beauty' width="150" height="200"/>BEAUTY</button>
          <button className="shop">Shop Now</button>
        </div>
        <img className="advertisement"src="https://s3.envato.com/files/116351238/03_preview-horizontal-banner.jpg" alt="advertisement"/>
      </div>
      <div className="productheader">
        <h1>Men's Puma T-Shirts</h1>
        <button className="">Browse All</button>
      </div>
    <div className="products">
    <img src="https://images.sportsdirect.com/images/products/59852840_l.jpg" alt='tshirt' className="logo" />
    <button>
    <p>T-SHIRT</p>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
    <p><span class="fa fa-star"></span><span class="fa fa-star "></span><span class="fa fa-star "></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span></p>
    <p>$25</p>
    </button>
    </div>
    <div className="products1">
    <img src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRn4p4amoMiDlyjR8Mgh1gB0dZK8ZKaUNAU2ifA8BhPcf3t8crWDSRSjLiClk1S3Z9hRquwDWseZc0&usqp=CAc" alt='tshirt' className="logo" />
    <button>
    <p>T-SHIRT</p>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
    <p><span class="fa fa-star"></span><span class="fa fa-star "></span><span class="fa fa-star "></span><span class="fa fa-star "></span><span class="fa fa-star "></span></p>
    <p>$35</p>
    </button>
    </div>
    <div className="products2">
    <img src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQXm_6gex_tOMtlviPbbv4NudZOTQvGbXKtd3zow7YFPa4zi2pdOP0h5wZX86p8psHkkgyD8jfTxJY&usqp=CAc" alt='tshirt' className="logo" />
    <button>
    <p>T-SHIRT</p>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
    <p><span class="fa fa-star"></span><span class="fa fa-star "></span><span class="fa fa-star "></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span></p>
    <p>$20</p>
    </button>
    </div>
    <div className="products3">
    <img src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTwUFGyNXjm61X18o2GFSQhlIEw1hf1mH_kh45FlawoSgWKjo-tkgWJcatu98Rva2fKVUx9FRlvIu4&usqp=CAc" alt='tshirt' className="logo" />
    <button>
    <p>T-SHIRT</p>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
    <p><span class="fa fa-star"></span><span class="fa fa-star "></span><span class="fa fa-star "></span><span class="fa fa-star "></span><span class="fa fa-star "></span></p>
    <p>$35</p>
    </button>
    <div className="products4">
    <img src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRzDBvIJ5BZt-ivLEh3cjb_cu_DzrRker7s1Y7LjMjBIwA-s_d-idQrxEgpdWJev3xBzU95kRaqFWI&usqp=CAc" alt='tshirt' className="logo" />
    <button>
    <p>T-SHIRT</p>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
    <p><span class="fa fa-star"></span><span class="fa fa-star "></span><span class="fa fa-star "></span><span class="fa fa-star "></span><span class="fa fa-star checked"></span></p>
    <p>$30</p>
    </button>
    </div>
    <div className="products5">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3qWh_0mVCYbANekoKRoLasPSUXLmHoydpehEyx6u6RHY_l2kIJM7xtjHncax36ooIqWK1YzAr&usqp=CAc" alt='tshirt' className="logo" />
    <button>
    <p>T-SHIRT</p>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
    <p><span class="fa fa-star"></span><span class="fa fa-star "></span><span class="fa fa-star "></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span></p>
    <p>$20</p>
    </button>
    </div>
    </div>
    <div className="footer">
    <form onSubmit={handleHome}>
      <button className="homePosition">Home</button>
    </form>
      <button>About</button>
      <button>Shop</button>
      <button>Help</button>
    </div>
    <div className="shopcopyright">
        <p>© Greyson</p>
      </div>
    </div>
    
  );
}

export default Buyers;
