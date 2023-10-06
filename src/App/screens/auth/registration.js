import React from 'react';
import { connect, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { textInput, PasswordInput } from '../../../shared/form-elements'
import { reduxForm, Field } from "redux-form";
import { Button } from 'react-bootstrap';
import { userActions } from '../../../actions';

function Registration(props) {
  const dispatch = useDispatch();
  
  const formSubmit = (values) => {
    dispatch(userActions.registrationRequest(values))
  }

  return (
    <div className="container">
      <div className="col-md-4 offset-4">
        <div className="vh-100 d-flex align-items-center justify-content-center">
          <div className="vw-100">
            <h5 className="mb-5">Login</h5>     
            <form onSubmit={props.handleSubmit(formSubmit)}>
              <div className="form-group">
                <Field 
                  name="email" 
                  type="email" 
                  component={textInput} 
                  label="Email"
                />
              </div>
              <div className="form-group">
                <Field 
                  name="password" 
                  type="password" 
                  component={PasswordInput} 
                  label="Password"
                />
              </div>
              <div className="form-group">
                <Field 
                  name="password_confirmation" 
                  type="password" 
                  component={PasswordInput} 
                  label="Password Confirmation"
                />
              </div>
              <div className="form-group d-flex align-items-center">
                <div>Registration Type</div>
                <label className="d-flex align-items-center px-3">
                  <Field 
                    name="registration_type" 
                    component="input" 
                    type="radio" 
                    value="hosts"
                  /> 
                  <span className="px-1">Hosts</span>
                </label>
                <label className="d-flex align-items-center">
                  <Field 
                    name="registration_type" 
                    component="input" 
                    type="radio" 
                    value="influencer"
                  /> 
                  <span className="px-1">Influencer</span>
                </label>
              </div>
              <div className="mt-3 mb-3">
                <Button 
                  variant="brand" 
                  type="submit" 
                  className="btn custom_theme_btn px-3 full_with">
                  Sign Up
                </Button>
              </div>
            </form>
            <p className="d-flex justify-content-center">
              Already have an account?  
              <Link to="/login" className="px-2">Sign In</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

Registration =  reduxForm({
  form: 'registerForm',
})(Registration);


const mapStateToProps = (state) => {
  return { };
};

export default connect(mapStateToProps, { userActions })(Registration);
