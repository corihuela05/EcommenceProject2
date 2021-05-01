import './Pets.css';
import React from "react";
import ReactDOM from 'react-dom';
import Shop from "./Shop";
import Product from "./Product";
import App from "./App"
import './App.css';
import Cart from './Cart';
import Nonprofit from "./Nonprofit";
import Account from './Account';
import FormSignup from './userlogin';
import BeautyProducts from './beauty_products';
import Profile from './Profile';
import Videog from './Videogame';
import Sportpro from './Sports';
import Baby from './Baby';
import Patio from './Patio';
import Pets from './Pets';
import Pharmacy from './Pharmacy';
import Auto from './Auto';
import Music from './Music';
import Homeandfurnitures from './homeandfurniture';
import School from './Schools';
import Termofservice from './Termofservices';
import FoodProducts from './food_products';
import Ourads from './Ourads'
import ClothingProducts from './clothing_products';
import ArtProducts from './art_products';
import Church from './Church';
import Gettoknowus from './Gettoknowus';
import { useState } from "react";
import Privacyandsecurity from './privacyandsecurity';
import Donotsellmyinfo from './donotsellmyinfo';
import Ourcompany from './ourcompany';
import Caprivacy from './caprivacy';
import Accessibilitty from './accessibility';
import Returnpage from './returnpage';
import TaxExcemptpage from './taxExcemptpage';
import Item_Display from './item_display';
import Home from "./App"
import axios from 'axios'
import Next from "./Shipping";
import Header from "./Header";
const PAGE_PRODUCT='products';
const PAGE_CART = 'cart';


function Pet () {
  const [cart, setCart] = useState([]);
  const [page, setPages] = useState('products');
  
  const [products] = useState([{
    name:'Prevue Pet Cage',
    cost:'$33.10',
    image:'https://i5.walmartimages.com/asr/1177eadc-3bf7-416f-80f8-7c89bb8b23d4_1.b47115a7a567d597f05245baf0b88d88.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff',
    text:'Keep your animal safe and secure with the Prevue Pet Products Deluxe Hamster and Gerbil Cage. Its made of a strong wire with 5/16" spacing, giving you a 360-degree view at all times. This hamster pet cage also features a spacious interior.',
  },
  {
    name:'Lucky Dog Sliding Double-Door Dog Crate',
    cost:'$39.99',
    image:'https://i5.walmartimages.com/asr/247542bb-4793-47ee-a338-97e9d62924a8.f7010e79940075042e64b192db9a4a98.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff',
    text:'Sliding door™ crate merges luxury functionality.',
  },
  {
    name:'Aqua Culture 2.5-Gallon',
    cost:'$22.97',
    image:'https://i5.walmartimages.com/asr/9d6eca79-37c8-4a4f-80e5-f83a7c4f5e93_2.8d8452a6a15b0fdcb93b498b6a40594a.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff',
    text:'Aqua Culture 2.5-Gallon Corner View Aquarium Kit with LED Lighting and Power Filter comes complete with everything you need to set up.',
  },
  {
    name:'Necoichi Portable Cat Cage',
    cost:'$36.99',
    image:'https://i5.walmartimages.com/asr/019fcc16-8f78-4448-8a8d-aa788fb7df45.d2814e8dce93dd9d6aec513dd371bcd3.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff',
    text:'The Necoichi Portable Stress Free Cat Cage is like a portable cat hotel and multi-purpose carrier in one versatile and stylish design.',
  },
  {
    name:'TetraFin Goldfish Flakes',
    cost:'$3.10',
    image:'https://i5.walmartimages.com/asr/01d10ef8-466b-4a1e-9c7e-237e26d4dc41_1.9a225c4144d51f7580b992915c63302d.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff',
    text:'TetraFin Goldfish Flakes are a nutritionally complete daily diet for all goldfish and small koi. Use in aquariums and outdoors in small ponds.',
  },
  {
    name:'(2 Pack) Jungle water Conditioner',
    cost:'$5.34',
    image:'https://i5.walmartimages.com/asr/4151a7ee-9d7d-407c-b6f6-ddc02dd7527d_1.142dc679fe57c75df6b4d1fd98d6ee1a.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff',
    text:'Make your fishbowl a happy for home for your Betta or Goldfish! Each pre-measured Bowl Buddies Fizz Tab makes tap water safe.',
  },
  {
    name:'Nutrition Adult Dry Dog Food',
    cost:'$25.83',
    image:'https://i5.walmartimages.com/asr/8afee5be-2c60-4307-bffe-488d618ef0b1.d8cd6886a8f50a12fbbc2cf8929131e8.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff',
    text:'Give your dog the taste of succulent steak accented with hearty vegetables in PEDIGREE Adult Complete Nutrition Grilled Steak.',
  },
  {
    name:'Meow Mix Dry Cat Food',
    cost:'$19.94',
    image:'https://i5.walmartimages.com/asr/e46f51ec-0f75-47d8-bea7-20fe31a5d510_1.aa202ff8713138d743e4c9454e4818c8.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff',
    text:'Meow Mix Original Choice Dry Cat Food is specially formulated to help adult cats stay healthy and happy.',
  },
  {
    name:'Vibrant Life Donut Pet Bed',
    cost:'$24.97',
    image:'https://i5.walmartimages.com/asr/f3196dc3-0fd2-4c0f-8178-95cfbd49bce2.f78a78d81e809bd7b2774a5e1ddb7f8b.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff',
    text:'Your pet will drift off to dreamland when they sleep in our lovely Vibrant Life Plush Donut Pet Bed. Perfect for snuggling, the plush.',
  },
  {
    name:'Aqua Culture Fish Net',
    cost:'$5.99',
    image:'https://images-na.ssl-images-amazon.com/images/I/71K%2BBExaOiL._AC_SL1500_.jpg',
    text:'Portable Handle Landing Net Fishing Fish Angler Mesh for Fishermen Aquarium Fish Tank Goldfish Shrimp.',
  },
  {
    name:'Vibrant Life Dog Hoodie',
    cost:'$8.82',
    image:'https://i5.walmartimages.com/asr/8401100a-cf1c-4768-a3dc-59b9f9e8728f_2.41a5bc4f05c9a3d2717ca2431c670342.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff',
    text:'With this Vibrant Life Blue Banana Print Dog Hoodie, your pup will be able to flaunt their personal style in complete comfort.',
  },
  {
    name:'(2 Pack) Aquarium Gravel',
    cost:'$9.88',
    image:'https://i5.walmartimages.com/asr/2205ff17-b522-4e18-8185-2cedcf207b7e_3.3c790cc0b95de65038a5fb87ff3f198a.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff',
    text:'Small Pebbles Aquarium Gravel Additional Uses - Hobbies and crafts - Ponds - TerrariumsAqua Culture Co. Small Pebbles Aquarium Gravel, 5 lbs.',
  },
    ])
  
  const addToCart = (product)=>{
    console.log('add to cart');
    setCart([...cart, {...product}])
  }
  
  const renderProducts = () => (
    <div className="vproduct" >
    {products.map((product,index) =>(
    <div class="product" key={index}>
    <div class="thumbnails">
        <img src={product.image} alt="Xbox one" height="130" width="180"/>
        <h1>{product.name}</h1>
        <p class="price">{product.cost}</p>
        <p>{product.text}</p>
        <div className='addtocarts'>
            <button onClick={()=>addToCart(product)}>Add to Cart</button>
        </div>
        </div>
        
    </div>
    ))}
     </div>  
  );
  const removeFromCart = (productToRemove)=>{
    setCart(cart.filter((product) => product !== productToRemove));
  }
  const renderCart = () =>{
      cart.map((product,index) =>(
    <div class="product" key={index}>
        <img src={product.image} alt="Xbox one" height="130" width="180"/>
        <h1>{product.name}</h1>
       <p class="price">{product.cost}</p>
       <p class="productinfo">{product.text}</p>
        {/*<button onClick={() => removeFromCart(product)}>Remove</button>*/}
        <hr />
    </div>
    ))
    //<h5>Select which Non Profit organization you want to donate to:</h5>
      //<select>
        //<option selected disabled>Select option</option>
        //<option value="name1">Special Strides</option>
        //<option value="name2">Weidhorn Family Foundation Inc.</option>
        //<option value="name3">John F Carroll Columbian Club</option>
      //</select>
      //<p></p>
      //<button onClick={handleCart}>Proceed to Checkout</button>
     //</div>  
       //,document.getElementById('root'));
  }
  

  
  const navigateTo = (nextpage) =>{
    setPages(nextpage);
    
  };
  
  function handleclothingProducts(){
    ReactDOM.render(<ClothingProducts />,document.getElementById('root'));
  }
  function handlefoodProducts(){
    ReactDOM.render(<FoodProducts />,document.getElementById('root'));
  }
  function handleartProducts(){
    ReactDOM.render(<ArtProducts />,document.getElementById('root'));
  }
  function handlebeautyProducts(){
    ReactDOM.render(<BeautyProducts />,document.getElementById('root'));
  }
 
  function handleHomeandfurnitures(){
  ReactDOM.render(<Homeandfurnitures />,document.getElementById('root'));
 }
 
  function handleTermofservices(){
  ReactDOM.render(<Termofservice />,document.getElementById('root'));
 }
  function handleChurch(){
  ReactDOM.render(<Church/>,document.getElementById('root'));
 }
 
   function handleGetknowus(){
  ReactDOM.render(<Gettoknowus/>,document.getElementById('root'));
 }
  function handleCancle(){
  ReactDOM.render(<Videog/>,document.getElementById('root'));
 }
  function handleHome(){
    ReactDOM.render(<Home />,document.getElementById('root'));
  }
  function handleProduct(){
    ReactDOM.render(<Product />,document.getElementById('root'));
  }
  function handleShop(){
    ReactDOM.render(<Shop />,document.getElementById('root'));
  }
      function handleNext(){
      ReactDOM.render(<Next />,document.getElementById('root'));
    }
    
  function handleCart(){
    ReactDOM.render(
        <div className="App">
        <Header/>
        <div className="videogamesliderslide">
     <div className="vthreesteps">
      <button className="v7">1.Shopping Cart</button>
      <button className="v8">2.Shipping Details</button>
      <button className="v9">3.Payment Options</button>
    </div>
  

    
    <div className="detailsinfo">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
      <h1 className="rk">Shopping Cart</h1>
      {cart.map((product,index) =>(
    <div class="prod" key={index}>
        <img src={product.image} alt="Xbox one" height="130" width="180"/>
        <p class="carttitle">{product.name}</p>
        <p class="price">{product.cost}</p>
    </div>
    ))}
    
    <form onSubmit={handleNext}>
        <button className="cn16" id="yuva">Next</button>
    </form>
    <form onSubmit={handleCancle}>
      <button className="cn39" id="yuva369">Cancel</button>
    </form>
    </div>
      
    <div className="summaryinfo">
      <h1>Summary</h1>
    </div>
    
     
    <div class="amount1">
     <p className="sub1">SUBTOTAL $799.98</p>
     <p className="ship1">SHIPPING  FREE</p>
     <p className="tax1">TAXES  $4.90</p>
     <p className="total1">TOTAL  $804.88</p>
     <p className="voucher1">HAVE A DISCOUNT CODE?</p>
     <p77 className="contri36">Total contribution to Special Strides</p77>
     <p78 className="contriNum3690">$70.00</p78>
    </div>
    
    <input type="text10" id="fname" name="copoun" placeholder="Coupon Code"/>
    
    <div class="verticalline7"></div>
    

    
    </div>
    </div>
    ,document.getElementById('root'));
  }
   function handleNonprofit(){
    ReactDOM.render(<Nonprofit />,document.getElementById('root'));
  }
 
   function handleSchoolst(){
    ReactDOM.render(<School />,document.getElementById('root'));
  }
 
 
    function handleAccount(){
    ReactDOM.render(<Account />,document.getElementById('root'));
  }
   function handleuserlogin(){
    ReactDOM.render(<FormSignup />,document.getElementById('root'));
  }
  function handleProfile(){
    ReactDOM.render(<Profile />,document.getElementById('root'));
  }
 
    function handlevideogame(){
     ReactDOM.render(<Videog />,document.getElementById('root'));
  }
    function handlesports(){
     ReactDOM.render(<Sportpro />,document.getElementById('root'));
  }
 
    function handlebaby(){
     ReactDOM.render(<Baby />,document.getElementById('root'));
  }
 
    function handlepatio(){
     ReactDOM.render(<Patio />,document.getElementById('root'));
  }
 
    function handlepets(){
     ReactDOM.render(<Pets />,document.getElementById('root'));
  }
 
    function handlepharmacy(){
     ReactDOM.render(<Pharmacy />,document.getElementById('root'));
  }
 
    function handleauto(){
     ReactDOM.render(<Auto />,document.getElementById('root'));
  }
 
    function handlemusic(){
     ReactDOM.render(<Music />,document.getElementById('root'));
  }
 
  function handleOurads(){
     ReactDOM.render(<Ourads />,document.getElementById('root'));
     
  
  }
  function itemDisplay(id){
    axios.post("http://127.0.0.1:5000/itemDisplay", {"id":id}).then(data=>{
      console.log(data)
      ReactDOM.render(<Item_Display image={data['data']['image']} category={data['data']['category']}
                      description={data['data']['description']} id={data['data']['id']} name={data['data']['name']} 
                      price={data['data']['price']}/>,document.getElementById('root'));
  
        })
  }

  function TaxExemptProgram() {
        ReactDOM.render(<TaxExemptProgram/>, document.getElementById('root'));
}
    
    function Accessibility() {
        ReactDOM.render(<Accessibility/>, document.getElementById('root'));
    }
    
    function Returns() {
        ReactDOM.render(<Returns/>, document.getElementById('root'));
    }
    
    function handleGetknowus(){
         ReactDOM.render(<Gettoknowus/>, document.getElementById('root'));
    }
  return (
    <div className="App">
    <div className="Appheader">
    <img src="logo.png" alt='company logo' className="companylogo" />
    <div className="searchbar">
        <input type="text" name="search" placeholder="Search.." />
        <button type="submitsearch"><i class="fa fa-search"></i></button>
    </div>
    <form onSubmit={handleHome}>
      <button id="homebutton">Home</button>
    </form>
   
  <form onSubmit={handleAccount}>
      <button id="info1">Sign Up</button>
    </form>
    <form onSubmit={handleuserlogin}>
      <button id="info">Login</button>
    </form>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css"/>
    <div className="cartpopout">
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
                    <input type="checkbox" id="check1" />
                    <label for="check1">
                        <i class="glyphicon glyphicon-shopping-cart"  id="openbutton1"><p>Go to Cart ({cart.length})</p></i>
                        <i class="fa fa-close" id="cancelbutton1"></i>
                    </label>
                     <div className="sidebars">
                        <div className="carts">
    <h1>Cart</h1>
    {cart.map((product,index) =>(
    <div class="productsss" key={index}>
        <img src={product.image} alt="Xbox one" height="130" width="180"/>
        <h1>{product.name}</h1>
        <p class="price">{product.cost}</p>
        <p class="productinfo">{product.text}</p>
        <button className='btn1' onClick={() => removeFromCart(product)}>Remove</button>
    </div>
    ))}
    <h5>Select which Non Profit organization you want to donate to:</h5>
      <select>
        <option selected disabled>Select option</option>
        <option value="name1">Special Strides</option>
        <option value="name2">Weidhorn Family Foundation Inc.</option>
        <option value="name3">John F Carroll Columbian Club</option>
      </select>
      <p></p>
      <button className='btn' onClick={handleCart}>Proceed to Checkout</button>
     </div> 
                    </div>    
    </div>                
    {/*<button id="cart" onClick={()=> navigateTo(PAGE_CART)}><span className="glyphicon glyphicon-shopping-cart"></span>Go to Cart ({cart.length})</button>*/}
    <div className="homepagesidebar">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
    <input type="checkbox" id="check"/>
    <label for="check">
      <i class="fa fa-bars" id="openbutton"></i>
      <i class="fa fa-close" id="cancelbutton"></i>
  </label>
                     <div className="sidebar">
                        <form onSubmit={handleHome}>
                            <button class="homex" > Home</button>
                        </form>
                   
                        <form onSubmit={handlevideogame}>
                            <button class="toysandgamesx" >Toys, Games and Video Games</button>
                        </form>
                        <button onClick={handleclothingProducts} class="clothingx" >Clothing, Shoes, & Accessories</button>

                        <form onSubmit={handleHomeandfurnitures}>
                            <button class="appliancesx"> Home, Furniture & Appliances</button>
                        </form>
                      

                        <form onSubmit={handlevideogame}>

                        <button class="video games" >Video Games</button>                  
                        </form>
                        <button onClick={handlefoodProducts} >Food</button>
                       <button onClick={handlebeautyProducts} class="beautyx" >Beauty</button>
                        <button onClick={handleartProducts} class="artproductsx">Sewing & Party Supplies</button>
                         <form onSubmit={handlesports}>
                            <button class="sportsx" >Sports, Fitness & Outdoors</button>
                        </form>
                        <button class="petsx" >Pets</button>
                         <button class="musicx" >Music</button>
                        <button class="patiox" >Patio & Garden</button>
                        <button class="pharmarcyandcarex" >Health & Personal Care</button>

                         <button>Books</button>
                    <button>Fashion</button>
                    <button>Gift Cards</button>
                       


                        <button class="autox" >Auto & Tire</button>
                    </div>
                </div>
                <div className="tabs">
                    <button>Best Sellers</button>
                    <button>Today's Deals</button>
                    <button>Customer Service</button>
                    <button>New Releases</button>
                    <button>Near Me</button>
                    <button>Books</button>
                    <button>Fashion</button>
                    <button>Gift Cards</button>
                </div>
            </div>
    <div class="Videogameadjust">
    {page === PAGE_PRODUCT && renderProducts()}
    {page === PAGE_CART && renderCart()}
    <footer class="vsite-footer">
                    <h1>About Greyson</h1>
                    <div className="footer1">
                        <button><img src="logo.png" alt='logo' width="150" height="150" />1717 Harrison St. Newark, NJ 07028,USA</button>
                    
                    </div>
                    <div className="footer2">

                        <form onSubmit={handleGetknowus}>
                            <button>GET TO KNOW US</button>
                        </form>

                        <button>OUR COMPANY</button>
                        <button> VENDOR DIRECTORY</button>
                        <button>HELP CENTER</button>
                        <button>CONTACT US</button>
                    </div>
                    <div className="footer3">
                        <form onsubmit={Returns}>
                            <button>RETURNS</button>
                        </form>
                        <button>PRODUCT RECALLS</button>
                        <form onsubmit={Accessibility}>
                            <button>ACCESSIBILTY</button>
                        </form>
                        <button>ADVERTISE WITH US</button>
                    </div>
                    <div className="footer4">
                        <button>GREYSON'S</button>

                        <form onSubmit={handleOurads}>
                            <button>OUR ADS</button>
                        </form>
                    
                        <form onSubmit ={handleTermofservices}>
                            <button>TERMS OF SERVICE </button>
                          </form>
                       
                            <button>PRIVACY & SECURITY</button>
                    
                           <button>CA Privacy Rights</button>
                           
                        
                            <button>Do Not Sell My Information</button>
                         
                            
                            <button>Tax Exempt Program</button>
                    </div>   
                   <div className="footer5">
                        <hr />
                        <p> Copyright © 2021 All Rights Reserved by Greyson</p>
                    </div>
                
                </footer>

  {/*  <div class="Videogameadjust">
    <div class="videogcard1">
        <img src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6344/6344118_sd.jpg" alt="Xbox one" height="130" width="180"/>
        <h1>Microsoft - Xbox Series S 512 GB</h1>
         <p class="price">$299.99</p>
        <p>Introducing Xbox Series S. Experience the speed and performance of a next-gen all-digital console at an accessible price point.</p>
        <p><button onClick={()=>itemDisplay(13)}>Add to Cart</button></p>
    </div>
    
    <div class="videogcard2">
        <img src="https://specials-images.forbesimg.com/imageserve/5eeb7b50706cd80006e3154c/960x0.jpg?cropX1=0&cropX2=680&cropY1=0&cropY2=453" alt="ps5" height="130" width="180"/>
        <h1>Sony - PlayStation 5 Console</h1>
         <p class="price">$499.99</p>
        <p>Explore uncharted virtual territories and slay dragons with this sleek Sony PlayStation 5 gaming console.</p>
        <p><button onClick={()=>itemDisplay(14)}>Add to Cart</button></p>
    </div>
    
    <div class="videogcard3">
        <img src="https://images-na.ssl-images-amazon.com/images/I/61-PblYntsL._AC_SL1500_.jpg" alt="nintendoo" height="130" width="180"/>
        <h1>Microsoft - Xbox Series S 512 GB</h1>
         <p class="price">$299.99</p>
        <p>Introducing Nintendo Switch, the new home video game system from Nintendo. In addition to providing single and multiplayer thrills at home.</p>
        <p><button onClick={()=>itemDisplay(15)}>Add to Cart</button></p>
    </div>
    
    <div class="videogcard4">
        <img src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6429/6429498_rd.jpg" alt="oculus2" height="130" width="180"/>
        <h1>Oculus - Quest 2 Advanced </h1>
         <p class="price">$299.00</p>
        <p>Experience our most advanced all-in-one VR system yet with Oculus Quest 2. No PC or console required.</p>
        <p><button onClick={()=>itemDisplay(16)}>Add to Cart</button></p>
    </div>
    
    
    <div class="videogcard5">
        <img src="https://thumbs.dreamstime.com/b/nfl-logo-isolated-png-official-national-football-league-illustration-transparent-background-high-quality-file-available-104835104.jpg" alt="madden" height="130" width="180"/>
        <h1>Madden NFL 21 - PlayStation 4,5</h1>
         <p class="price">$19.99 was $59.99</p>
        <p>A new generation is leaving its mark in the NFL. Will you rise to the occasion?.Change the game and take control of your own legacy.</p>
        <p><button onClick={()=>itemDisplay(17)}>Add to Cart</button></p>
    </div>
    
    <div class="videogcard6">
        <img src="https://compass-ssl.xboxlive.com/assets/ab/a4/aba4ae4a-a086-4887-b6ce-53341380c373.jpg?n=MSXC-NBATitle-HeroAndImageCard-large-l-794x447-16x9-01.jpg" alt="nba" height="130" width="180"/>
        <h1>NBA 2K21 Standard Edition</h1>
         <p class="price">$29.99 was $59.99</p>
        <p>NBA 2K21 is the latest release in the world-renowned, best-selling NBA 2K series. NBA basketball and culture.</p>
        <p><button onClick={()=>itemDisplay(18)}>Add to Cart</button></p>
    </div>
    
    <div class="videogcard7">
        <img src="https://compass-ssl.xbox.com/assets/56/61/5661c354-b211-4a7d-821f-08f4e3211bd3.jpg?n=Accessories-Hub_Content-Placement-0_029437852_788x444.jpg" alt="controller" height="130" width="180"/>
        <h1>Microsoft - Controller</h1>
         <p class="price">$59.99</p>
        <p>Experience the modernized design of the Xbox Wireless Controller – Carbon Black, featuring sculpted surfaces.</p>
        <p><button onClick={()=>itemDisplay(19)}>Add to Cart</button></p>
    </div>
    
    <div class="videogcard8">
        <img src="https://resource.astrogaming.com/content/dam/astro/en/products/a10/a10-gallery-pc-01.png" alt="headset" height="130" width="180"/>
        <h1>Astro Gaming - Headset</h1>
         <p class="price">$59.99</p>
        <p>Sharpen your in-game hearing range with this Astro gaming headset. Its 40mm neodymium drivers produce clear audio details at 20Hz.</p>
        <p><button onClick={()=>itemDisplay(20)}>Add to Cart</button></p>
    </div>
    
    <div class="videogcard9">
        <img src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6415/6415287cv12d.jpg" alt="game chair" height="130" width="180"/>
        <h1>Arozzi - Gaming Chair</h1>
         <p class="price">$249.99</p>
        <p>Get an edge over the competition with this red Arozzi Mugello series gaming chair. The ergonomic design and thick padded seat.</p>
        <p><button onClick={()=>itemDisplay(21)}>Add to Cart</button></p>
    </div>
    
    <div class="videogcard10">
        <img src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6424/6424762cv13d.jpg" alt="keyboard" height="130" width="180"/>
        <h1>ROCCAT - RGB Gaming Keyboard</h1>
         <p class="price">$129.99</p>
        <p>The critically acclaimed ROCCAT® Vulcan Mechanical Gaming Keyboard goes tenkeyless in the smaller form factor Vulcan TKL.</p>
        <p><button onClick={()=>itemDisplay(22)}>Add to Cart</button></p>
    </div>
    
    <div class="videogcard11">
        <img src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6331/6331730cv12d.jpg" alt="desktop" height="130" width="180"/>
        <h1>HP Pavilion 27 Touch Desktop</h1>
         <p class="price">$1699.00</p>
        <p>Conserve space and enjoy a sleek computing solution with this HP all-in-one desktop. Support gaming and multitasking.</p>
        <p><button onClick={()=>itemDisplay(23)}>Add to Cart</button></p>
    </div>
    
    <div class="videogcard12">
        <img src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6265/6265133cv15d.jpg" alt="mouse" height="130" width="180"/>
        <h1>Logitech - Mouse with RGB Lighting</h1>
         <p class="price">$49.99</p>
        <p>Step up your game with this Logitech HERO Core wired gaming mouse. Easy to enhance your performance.</p>
        <p><button onClick={()=>itemDisplay(24)}>Add to Cart</button></p>
    </div>
<<<<<<< HEAD
  
    <footer class="videogame-site-footer1">
    <h1>About Greyson</h1>
    <div className="footer1">
      <button><img src="logo.png" alt='logo' width="150" height="150"/>1717 Harrison St. Newark, NJ 07028,USA</button>
    </div>
    <div className="footer2">
      <button>GET TO KNOW US</button>
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
      <button>TERMS OF SERVICE</button>
      <button>PRIVACY & SECURITY</button>
      <button>CA Privacy Rights</button>
      <button>Do Not Sell My information</button>
      <button>Request My information</button>
      <button>Tax Exempt Program</button>
    </div>
    <div className="footer5">
      <hr/>
      <p> Copyright © 2021 All Rights Reserved by Greyson</p>  
    </div>
                </footer>
    </div>*/}
   </div>
   </div>

  );
}

export default Pet;
