import React, { useState } from 'react';
import FormSignup from './FormSignup.1';
import FormSuccess from './FormSuccess.1';
import ReactDOM from 'react-dom';
import Shop from "./Shop";
import Product from "./Product";
import Home from "./App"
import './App.css';
import Cart from './Cart';
import Account from './Account';
import BeautyProducts from './beauty_products';
import Profile from './Profile';
import './Nonprofit.css';
  

const Form = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    function submitForm() {
        setIsSubmitted(true);
    }
    return (


        <>
            <div className='form-container'>
                <span className='close-btn'>×</span>
                <div className='form-content-left'>
                    <img className='form-img' src='img/img-2.svg' alt='spaceship' />
                </div>
                {!isSubmitted ? (
                    <FormSignup submitForm={submitForm} />
                ) : (
                        <FormSuccess />
                    )}
            </div>


        </>
    );
};

export default Form;
