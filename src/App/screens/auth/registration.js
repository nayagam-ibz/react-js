import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { reduxForm } from "redux-form";
import { userActions } from '../../../actions';
import InfluencerForm1 from "./shared/influencer_step1";
import InfluencerForm2 from "./shared/influencer_step2";
import BasicInformation from "./shared/basic_information";
import HostStepOneForm from "./shared/host_step1";
import HostStepTwoForm from "./shared/host_step2";
import { Wizard } from "react-use-wizard";

function RegistrationForm(props) {
  const [registration_type, set_registration_type] = useState("");
  const dispatch = useDispatch();
  
  const formSubmit = (values) => {
    console.log(values)
    console.log(values)
    console.log(values)
    console.log(values)
    console.log(values)
    console.log(values)
    console.log(values)
    dispatch(userActions.registrationRequest(values))
  }

  const handleCallback = (childData) => {
    set_registration_type(childData)
  }

  const renderStepOne = () => {
    if (registration_type === "influencer") {
      return <InfluencerForm1/>;
    } else {
      return <HostStepOneForm />;
    }
  }

  const renderStepTwo = () => {
    if (registration_type === "influencer") {
      return <InfluencerForm2/>;
    } else {
      return <HostStepTwoForm />;
    }
  }

  return (
    <div className="container">
      <div className="col-md-4 offset-4">
        <div className="vh-100 d-flex align-items-center justify-content-center">
          <div className="vw-100">
            <div className="">
              <h5 className="mb-4">Sign Up</h5>   
              <p>
                Already have an account?  
                <Link to="/login" className="px-2">Sign In</Link>
              </p>  
            </div>
            <form onSubmit={props.handleSubmit(formSubmit)}>
              <Wizard>
                <BasicInformation parentCallback={handleCallback} />
                {renderStepOne()}
                {renderStepTwo()}
              </Wizard>             
            </form>

          </div>
        </div>
      </div>
    </div>
  );
}

RegistrationForm =  reduxForm({
  form: 'register_Form',
})(RegistrationForm);


const mapStateToProps = (state) => {
  return { };
};

export default connect(mapStateToProps, { userActions })(RegistrationForm);
