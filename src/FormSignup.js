import React from 'react';
import validate from './validateInfo';
import ReactDOM from 'react-dom';
import useForm from './useForm';
import './Form.css';
import loginpage from './useForm';

const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  return (
    
     
      
    <div className='form-content-right'>
      <form onSubmit={handleSubmit} className='form' noValidate>
        <h1>
          Welcome to Greyson! Create an account by filling out the information below.
        </h1>
        <div className='form-inputs'>
          <label className='form-label'>Enter Account type</label>
          <input
            className='form-input'
            type='accounttype'
            name='accounttype'
            placeholder='Buyer, Seller or Non Profit'
            value={values.account}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
          

        </div>
        
        
         <div className='form-inputs'>
          <label className='form-label'>Email</label>
          <input
            className='form-input'
            type='email'
            name='email'
            placeholder='Enter your email'
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        
        
        <div className='form-inputs'>
          <label className='form-label'>Password</label>
          <input
            className='form-input'
            type='password'
            name='password'
            placeholder='Enter your password'
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Confirm Password</label>
          <input
            className='form-input'
            type='password'
            name='password2'
            placeholder='Confirm your password'
            value={values.password2}
            onChange={handleChange}
          />
          {errors.password2 && <p>{errors.password2}</p>}
        </div>
        
        <button className='form-input-btn' type='submit'>
          Sign up
        </button>
        
        
        
        <span className='form-input-login'>
        

          Already have an account? Login <a href={''}>here</a>
        
          
     
  
        </span>
      </form>
      
      
    </div>
  );
};

export default FormSignup;