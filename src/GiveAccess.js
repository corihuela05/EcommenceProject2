import React from 'react';
import './Form.css';
import { useState } from "react";

const GiveAccess = () => {
    const userType = localStorage.getItem("userType");
    const [isLoggedIn, setIsLoggedIn] = useState(
        localStorage.getItem("isLoggedIn")
    );
    const [username, setUsername] = useState(localStorage.getItem("username"));


   // forms.push(newsignup); // array where new signups will be pushed

    //Contents of forms
   /* const [values, setValues] = useState({
        accounttype: "",
        username: "",
        email: "",
        password: "",
        password2: "",
        status: "pending"
    });*/

    function accept(index) {
        //Makes form dissapear, creates account
        //send data to database
        //form.status = "accepted"
        //cleanForms();
    }

    function deny(index) {
        //Makes form dissapear, does not create form
        //doesn't send data to database
        //form.status = "denied";
        //cleanForms();
    }

/*    function cleanForms{
        for (var i = 0; i < forms.length; i++) {

            if (forms[i].status === "accepted" || forms[i].status === "denied") { //this should get rid of a specific form

                arr.splice(i, 1); //deletes form from forms so it is no longer displayed
            }

        }
    }
    }
*/
    function display() {
        let content;

        //test string until can connect to db
        const forms = [
            {
                id: 0,
                accountType: "Buyer",
                username: "funnyguy2",
                email: "funnyguy2@funnyguy2.com",
            },
            {
                id: 1,
                accountType: "Admin",
                username: "store1",
                email: "store1@store1.com",
            },
            {
                id: 2,
                accountType: "Nonprofit",
                username: "church40",
                email: "church40@church40.com",
            },
        ]
        switch (userType) {
            case "rodney":
                content =
                    content = forms.map((form,index) => {
                        return (
                            <div key={index} >
                                <h1>{form.accountType}</h1>
                                <h2>{form.username}</h2>
                                <h3>{form.email}</h3>
                                <input type="button" value="Accept" onClick={() => accept(index)} />
                                <input type="button" value="Deny" onClick={() => deny(index)} />
                            </div>
                        );
                    });


                    /*(<div>
                    //display sign up form(s)
                    //HOW DO I DO THIS
                    //button "Accept"
                        <input type="button" value="Accept" onclick="accept();" />
                        //button "deny"
                        <input type="button" value="Deny" onclick="deny();" />
                </div>)*/
                break;
            default:
                content=(<div>
                    <h1> Denied Access </h1>
                </div>)
                break;
        }
        return content;
    }


     function handleuserlogout() {
                localStorage.removeItem("isLoggedIn");
                localStorage.removeItem("username");
     
    }

    return (
        <div className='form-content-right'>
            {display()}

        </div>
    );
};

export default GiveAccess;
