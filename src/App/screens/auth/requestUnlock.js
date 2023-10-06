import React from 'react';
import { connect, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { textInput } from '../../../shared/form-elements'
import { reduxForm, Field } from "redux-form";
import { Button } from 'react-bootstrap';
import { userActions } from '../../../actions';

function UnlockForm(props) {

  const dispatch = useDispatch();
  
  const loginSubmit = (values) => {
    dispatch(userActions.unlockRequest(values))
  }

  return (
    <div className="container">
      <div className="col-md-4 offset-4">
        <div className="vh-100 d-flex align-items-center justify-content-center">
          <div className="vw-100">
            <h5 className="mb-5">Request Unlock</h5>     
            <form onSubmit={props.handleSubmit(loginSubmit)}>
              <div className="form-group">
                <Field 
                  name="email" 
                  type="email" 
                  component={textInput} 
                  label="Email"
                />
              </div>
              <div className="mt-3 mb-3">
                <Button variant="brand" type="submit" className="btn custom_theme_btn px-3 full_with">Request Account Unlock Email</Button>
              </div>
              <div className="text-center">
                <Link to="/login">Sign In</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

UnlockForm =  reduxForm({
  form: 'unlockForm',
})(UnlockForm);


const mapStateToProps = (state) => {
  return { };
};

export default connect(mapStateToProps, { userActions })(UnlockForm);
