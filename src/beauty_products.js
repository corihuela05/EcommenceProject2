import React from "react";
import ReactDOM from 'react-dom';
import Shop from "./Shop";
import Product from "./Product";
import Home from "./App"
import './product_categories.css';

function BeautyProducts(){
    return(
<div className="row">
  <div className="col-md-3">
    <figure className="card card-product">
      <div className="img-wrap"> 
        <img src="https://s9.postimg.org/tupxkvfj3/image.jpg" />
        <a className="btn-overlay" href="#"><i className="fa fa-search-plus" /> Quick view</a>
      </div>
      <figcaption className="info-wrap">
        <h6 className="title text-dots"><a href="#">Good item name</a></h6>
        <div className="action-wrap">
          <a href="#" className="btn btn-primary btn-sm float-right"> Order </a>
          <div className="price-wrap h5">
            <span className="price-new">$1280</span>
            <del className="price-old">$1980</del>
          </div> {/* price-wrap.// */}
        </div> {/* action-wrap */}
      </figcaption>
    </figure> {/* card // */}
  </div> {/* col // */}
  <div className="col-md-3">
    <figure className="card card-product">
      <div className="img-wrap"> 
          <img src="https://s9.postimg.org/4ooze1tof/image.jpg" />
          <a className="btn-overlay" href="#" /><i className="fa fa-search-plus" /> Quick view
      </div>
      <figcaption className="info-wrap">
        <h6 className="title text-dots"><a href="#">The name of product</a></h6>
        <div className="action-wrap">
          <a href="#" className="btn btn-primary btn-sm float-right"> Order </a>
          <div className="price-wrap h5">
            <span className="price-new">$280</span>
          </div> {/* price-wrap.// */}
        </div> {/* action-wrap */}
      </figcaption>
    </figure> {/* card // */}
  </div> {/* col // */}
  <div className="col-md-3">
    <figure className="card card-product">
      <div className="img-wrap"><img src="https://s9.postimg.org/ojb106167/image.jpg" /> 
        <a className="btn-overlay" href="#"><i className="fa fa-search-plus" /> Quick view</a>
      </div>
      <figcaption className="info-wrap">
        <h6 className="title text-dots"><a href="#">Name of product</a></h6>
        <div className="action-wrap">
          <a href="#" className="btn btn-primary btn-sm float-right"> Order </a>
          <div className="price-wrap h5">
            <span className="price-new">$280</span>
          </div> {/* price-wrap.// */}
        </div> {/* action-wrap */}
      </figcaption>
    </figure> {/* card // */}
  </div> {/* col // */}
  <div className="col-md-3">
    <figure className="card card-product">
      <div className="img-wrap"> <img src="https://s9.postimg.org/4ooze1tof/image.jpg" />
        <a className="btn-overlay" href="#"><i className="fa fa-search-plus" /> Quick view</a>
      </div>
      <figcaption className="info-wrap">
        <h6 className="title text-dots"><a href="#">The name of product</a></h6>
        <div className="action-wrap">
          <a href="#" className="btn btn-primary btn-sm float-right"> Order </a>
          <div className="price-wrap h5">
            <span className="price-new">$280</span>
          </div> {/* price-wrap.// */}
        </div> {/* action-wrap */}
      </figcaption>
    </figure> {/* card // */}
  </div> {/* col // */}
</div> 
)};

export default BeautyProducts;