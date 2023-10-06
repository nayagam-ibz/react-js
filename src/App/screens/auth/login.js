import React from 'react';
import { connect, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { textInput, PasswordInput, checkBox } from '../../../shared/form-elements'
import { reduxForm, Field } from "redux-form";
import { Button } from 'react-bootstrap';
import { userActions } from '../../../actions';

function LoginForm(props) {

  const dispatch = useDispatch();
  
  const loginSubmit = (values) => {
    dispatch(userActions.loginRequest(values))
  }

  return (
    <div className="container">
      <div className="col-md-4 offset-4">
        <div className="vh-100 d-flex align-items-center justify-content-center">
          <div className="vw-100">
            <h5 className="mb-5">Login</h5>     
            <form onSubmit={props.handleSubmit(loginSubmit)}>
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
              <div className="d-flex align-items-center justify-content-between mb-3 mt-4">
                <Field
                  name="remember_me"
                  component={checkBox}
                />
                <Link to="/password/new">Forgot Password</Link>
              </div>
              <div className="mt-3 mb-3">
                <Button variant="brand" type="submit" className="btn custom_theme_btn px-3 full_with">Login</Button>
              </div>
            </form>
            <p className="d-flex justify-content-center mb-2">Don't have an account?  <Link to="/registration" className="px-2">Sign Up</Link></p>
            <p className="d-flex justify-content-center"><Link to="/unlock/request">Request unlock email</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
}

LoginForm =  reduxForm({
  form: 'loginForm',
})(LoginForm);


const mapStateToProps = (state) => {
  return { };
};

export default connect(mapStateToProps, { userActions })(LoginForm);
