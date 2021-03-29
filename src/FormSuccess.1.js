import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import "./Form.css";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Nonprofit from "./Nonprofit";

import App from "./App";


const FormSuccess = () => {
    useEffect(() => {
        redirectUser();
    }, []);

    const redirectUser = () => {
        const userType = localStorage.getItem("userType");

        setTimeout(() => {
            switch (userType) {
                case "admin":
                    <Route exact path="/dashboard" render={() => { window.location.href = "index.html" }} />
                    break;
                    case "nonprofit":
                    ReactDOM.render(<App username="Nonprofit" isLoggedIn={true} />, document.getElementById("root"));
                    break;
                case "buyer":
                    //ReactDOM.render(<App username="User" isLoggedIn={true} />, document.getElementById("root"));
                    <Route exact path="/dashboard" render={() => { window.location.href = "index.html" }} />
                    break;
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
