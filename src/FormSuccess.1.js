import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import "./Form.css";

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
                    break;
                case "nonprofit":
                    ReactDOM.render(<Nonprofit />, document.getElementById("root"));
                    break;
                case "buyer":
                    ReactDOM.render(<App />, document.getElementById("root"));
                    break;
                default:
                    break;
            }
        }, 1000);

        /*
          admin -> Sellers
          buyers
          nonprofit -> dashboard?
        */
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
