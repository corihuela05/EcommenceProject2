import React from "react";
import ReactDOM from "react-dom";
import "./dashboard.css";

function Messages(){
    function read() {
        alert("Marked as read.");
      }
      function on() {
        document.getElementById("overlay").style.display = "block";
      }
  
      function off() {
        document.getElementById("overlay").style.display = "none";
      }
    return(
<body>

  <div className="navbar navbar-inverse navbar-fixed-top">
    <div className="navbar-inner">
      <div className="container-fluid">
        <button type="button" className="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
        <a className="brand" href="#">Greyson Management Portal</a>
        <div className="nav-collapse collapse">
          <p className="navbar-text pull-right">
            Logged in as <a href="#" className="navbar-link">Admin</a>
          </p>
          <ul className="nav">
            <li className="active"><a href="index.html">Home</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <br/><br/><br/>
  <div className="container-fluid">
    <div className="row-fluid">
      <div className="span2">
        <div className="sidebar-nav">
          <ul className="nav nav-list">
            <li className="nav-header">Account Management</li>
            <li><a href="account.html">Account Settings</a></li>
            <li><a href="users.html">User Settings</a></li>
            <li><a href="shipping.html">Shipping Settings</a></li>
            <li className="nav-header">Item Management</li>
            <li><a href="create-sku.html">Create New Listing</a></li>
            <li><a href="edit-sku.html">View Item Listings</a></li>
            <li className="nav-header">Order Management</li>
            <li><a href="orders.html">View Orders</a></li>
            <li><a href="returns.html">Returns</a></li>
            <li><a href="preorders.html">Pre-Orders</a></li>
            <li className="active"><a href="messages.html">Customer Messages</a></li>
            <li className="nav-header">Sponsors</li>
            <li><a href="sponsors.html">Edit Information</a></li>

          </ul>
        </div>
      </div>

      <div className="span10">
        <h2>Customer Messages</h2>
        <table className="table table-striped">
          <table className="table table-striped">
          <h3>Unread</h3>
            <thead>
              <tr>
                <th>Customer Name</th>
                <th>Order Number</th>
                <th>Message</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="warning">
                <td>Cecilia Chapman</td>
                <td>40590</td>
                <td>What is the cost of shipping to NY?</td>
                <td><a onclick="read()">Mark as read</a></td>
                <td><button onclick="on()">Reply</button></td>
              </tr>
              <div id="overlay">
                <div id="text">
                  <h3>Enter message</h3><br/>
                  <textarea rows="7"></textarea>
                  <div className="control-group">
                    <div className="controls">
                      <button onclick="off()" type="submit" className="btn btn-primary">Send</button>
                      <button onclick="off()" type="button" className="btn">Cancel</button>
                    </div>
                  </div>
                </div>
            </div>

              </tbody>
            </table>
          </table>
          <table className="table table-hover">
            <table className="table table-hover">
              <h3>Read</h3>
              <thead>
                <tr>
                  <th>Customer Name</th>
                  <th>Order Number</th>
                  <th>Message</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Forrest Ray</td>
                  <td>40511</td>
                  <td>Hello, I am wondering when I can expect this order to arrive?</td>
                  <td><button onclick="on()">Reply</button></td>
                </tr>
                <tr>
                  <td>Michael Summers</td>
                  <td>40344</td>
                  <td>Does this item ship on weekends?</td>
                  <td><button onclick="on()">Reply</button></td>
                </tr>
                
              </tbody>
            </table>
          </table>

       


      </div>
    </div>
    </div>
    <hr>

    <footer>
      <p>© Greyson 2021</p>
    </footer>

  </div>

  <script src="./bootstrap/js/bootstrap.js"></script>
  <script src="./bootstrap/js/bootstrap-min.js"></script>

</body>
);
}
export default Messages;