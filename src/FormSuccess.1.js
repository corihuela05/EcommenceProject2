import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import "./Form.css";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Nonprofit from "./Nonprofit";
import GiveAccess from "./GiveAccess";
import App from "./App";
import Profile from "./Profile";


const FormSuccess = () => {
    useEffect(() => {
        redirectUser();
    }, []);

    const redirectUser = () => {
        const userType = localStorage.getItem("userType");

        setTimeout(() => {
            switch (userType) {
                case "admin":
                    localStorage.setItem("isLoggedIn", true);
                    localStorage.setItem("username", "admin");
                    ReactDOM.render(<App />, document.getElementById("root"));
                    //<Route exact path="/dashboard" render={() => { window.location.href = "index.html" }} />
                    break;
                case "nonprofit":
                    localStorage.setItem("isLoggedIn", true);
                    localStorage.setItem("username", "nonprofit");
                    ReactDOM.render(<Profile />, document.getElementById("root"));
                    break;
                case "rodney":
                    localStorage.setItem("isLoggedIn", true);
                    localStorage.setItem("username", "nonprofit");
                    ReactDOM.render(<GiveAccess />, document.getElementById("root"));
                    break;
                case "buyer":
                    localStorage.setItem("isLoggedIn", true);
                    localStorage.setItem("username", "buyer");
                    ReactDOM.render(<App />, document.getElementById("root"));
                    break;
                case "seller":
                    localStorage.setItem("isLoggedIn", true);
                    localStorage.setItem("username", "seller");
                    ReactDOM.render(<App />, document.getElementById("root"));
                    //<Route exact path="/dashboard" render={() => { window.location.href = "index.html" }} />
                    break
                default:
                    break;
            }
        }, 1000);


    };

    return (
        <div className="form-content-right">
            <h1 className="form-success">
                You are now logged in and it will be redirected{" "}
            </h1>
            <img className="form-img-2" src="img/img-3.svg" alt="success-image" />
        </div>
    );
};

export default FormSuccess;
