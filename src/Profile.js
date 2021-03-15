import React from "react";
import ReactDOM from 'react-dom';
import App from "./App";
import './Profile.css';

function Profile() {
  function handleHome(){
     ReactDOM.render(<App />,document.getElementById('root'));
  }
  return (
    <div>
    <div className="profilethree">
      <form onSubmit={handleHome}>
      <button className="pthree1">Home</button>
      </form>
      <button className="pthree2">Contact US</button>
      <button className="pthree3">SIGN UP</button>
    </div>
    
    <div class="linetopthree"></div>
    
    <div className="nonp">
        <h1>GMF Ecommerce Group</h1>
        <p1>1532 Bolton Street1, Newark, New Jersey 07308</p1>
        <p3>(410)-942-6586</p3>
        <p><a className="com1link"href="https://www.njit.edu/">ClickHere.com!</a></p>
    </div>
    
    <img className="gmflogo"src="https://scontent.fewr1-5.fna.fbcdn.net/v/t1.0-9/131111442_101471758510914_2141520648034571401_n.png?_nc_cat=105&ccb=3&_nc_sid=09cbfe&_nc_ohc=pl2djSfZQ38AX9AS7v1&_nc_ht=scontent.fewr1-5.fna&oh=0a910506d54e3fbf78dbfbacad55148c&oe=605F2D53" />
    
    <div class="midlinetopthree"></div>
    
    <div class="nonpmission1">
       <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
       <i class="fa fa-bar-chart"></i>
       <h3>Non profit mission 1</h3>
       <p1>Describe a key benefit that your product provides for your customers - and explain the impact it can have.</p1>
    </div>
    
    <div class="nonpmission2">
       <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
       <i class="fa fa-list-ul"></i>
       <h3>Non profit mission 2</h3>
       <p1>Describe a key benefit that your product provides for your customers - and explain the impact it can have.</p1>
    </div>
    
    <div class="nonpmission3">
       <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
       <i class="fa fa-check-circle-o"></i>
       <h3>Non profit mission 2</h3>
       <p1>Describe a key benefit that your product provides for your customers - and explain the impact it can have.</p1>
    </div>
    
    <div class="secondmidlinetopthree"></div>
    <div class="lastmidlinetopthree"></div>
    
    <div className="videofile">
      <video width="920" height="450" controls>
        <source src="BoysandGirlsClub.mp4" type="video/mp4"/>
      </video>
    </div>
    
    <div class="thirdmidlinetopthree"></div>
    
    <div class="similarnearyou">
      <h2>Non Profits Near you</h2>
      <p1> Similar non profit that you may be interested</p1>
    </div>
    
    <div className="profilefooter">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
      <a href="#" class="fa fa-facebook" ></a>
      <a href="#" class="fa fa-twitter"></a>
      <a href="#" class="fa fa-instagram"></a>
    </div>
    <div className="profilecopyright">
      <p>© Greyson 2021</p>
    </div>
    
    <div className="bottomslider">
     <div className="bottomimages">
       <input type="radio" name="slide" id="simage1" checked/>
       <input type="radio" name="slide" id="simage2" checked/>
       <img src="https://mma.prnewswire.com/media/335958/american_red_cross_logo.jpg?p=facebook" class="simg1" alt="image1" />
       <img src="http://www.liveunitedhudson.org/Main/files/6114/4414/4879/New_Header_Logo.jpg" class="simg2" alt="image2"/>
      </div>
    <div className="sdot">
        <label for="simage1"></label>
        <label for="simage2"></label>
      </div>
    </div>
    
    </div>
    
  );
}

export default Profile;
