import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { textInput } from '../../../shared/form-elements'
import { reduxForm, Field } from "redux-form";
import { Button } from 'react-bootstrap';
import { userActions } from '../../../actions';

function ForgotPassword(props) {
  const dispatch = useDispatch();
  
  const formSubmit = (values) => {
    dispatch(userActions.fogotPasswordRequest(values))
  }

  return (
    <div className="container">
      <div className="col-md-4 offset-4">
        <div className="vh-100 d-flex align-items-center justify-content-center">
          <div className="vw-100">
            <h5 className="mb-5">Forgot Password?</h5>     
            <form onSubmit={props.handleSubmit(formSubmit)}>
              <div className="form-group">
                <Field name="email" type="email" component={textInput} label="Email"/>
              </div>
              <div className="mb-3 mt-3">
                <Button variant="brand" type="submit" className="btn custom_theme_btn px-3 full_with">Send Password Reset Link</Button>
              </div>
            </form>
            <Link to="/" className="d-flex align-items-center justify-content-center">Sign In</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

ForgotPassword =  reduxForm({
  form: 'forgotForm',
})(ForgotPassword);

const mapStateToProps = (state) => {
  return { };
};

export default connect(mapStateToProps, { })(ForgotPassword);
