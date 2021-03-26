export default function validateInfo(values) {
  let errors = {};

  if (!values.email) {
    errors.email = 'Email required';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email address is invalid';
  }
  
  
  if (!values.password) {
    errors.password = 'Password is required';
  } else if (values.password.length < 6) {
    errors.password = 'Password needs to be 6 characters or more';
  }

  if (values.email === "admin@admin.com" && !values.password === "admin1"){
     errors.password = "Password is incorrect."; 
  }
  
  if (values.email === "buyer@buyer.com" && !values.password === "buyer1"){
     errors.password = "Password is incorrect."; 
  }
  
  if (values.email === "nonprofit@nonprofit.com" && !values.password === "nonprofit"){
     errors.password = "Password is incorrect."; 
  }

  return errors;
}
