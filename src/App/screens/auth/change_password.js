import React from 'react';
import { connect, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { PasswordInput } from '../../../shared/form-elements'
import { reduxForm, Field } from "redux-form";
import { Button } from 'react-bootstrap';
import { userActions } from '../../../actions';


function ChangePassword(props) {
  const dispatch = useDispatch();
  const location = useLocation();
  const query = new URLSearchParams(props.location.search);
  const reset_password_token = query.get('token');
  
  const formSubmit = (values) => {
     const { from } = location.state || { from: { pathname: "/" } };
    values.reset_password_token = reset_password_token;
    console.log(values)
    console.log(from)
    dispatch(userActions.changePasswordRequest(values, from))
  }

  return (
    <div className="container">
      <div className="col-md-4 offset-4">
        <div className="vh-100 d-flex align-items-center justify-content-center">
          <div className="vw-100">
            <h5 className="mb-5">Login</h5>     
            <form onSubmit={props.handleSubmit(formSubmit)}>
              <div className="form-group">
                <Field name="new_password" type="password" component={PasswordInput} label="New Password"/>
              </div>
              <div className="form-group">
                 <Field name="confirm_new_password" type="password" component={PasswordInput} label="Confirm New Password"/>
              </div>
              <div className="mt-3 mb-3">
                <Button variant="brand" type="submit" className="btn custom_theme_btn px-3 full_with">Change Password</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

ChangePassword =  reduxForm({
  form: 'resetForm',
})(ChangePassword);


const mapStateToProps = (state) => {
  return { };
};

export default connect(mapStateToProps, { })(ChangePassword);
