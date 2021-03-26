import React from 'react';
import './Form.css';

const FormSuccess = () => {
  return (
    <div className='form-content-right'>
      <h1 className='form-success'>You are now logged in and it will be redirected </h1>
      <img className='form-img-2' src='img/img-3.svg' alt='success-image' />
    </div>
  );
};

 function handlenonprofit(){
    ReactDOM.render(<Profile />,document.getElementById('root'));
}
  
function handlebuyer(){
    ReactDOM.render(<index />,document.getElementById('root'));
}
function handleseller(){
    ReactDOM.render(<Seller />,document.getElementById('root'));
}

if(values.email === "admin@admin.com"){
  handleseller(); 
}else if(values.email === "buyer@buyer.com"){
  handlebuyer(); 
}else if(values.email === "nonprofit@nonprofit.com"){
  handlenonprofit(); 
}

export default FormSuccess;
