import React from 'react';
import { textInput, PasswordInput } from '../../../../shared/form-elements'
import { useWizard } from "react-use-wizard";
import { Field } from "redux-form";
import { Button } from 'react-bootstrap';

export function BasicFormStep(props) {
  const { nextStep } = useWizard();
  const onChange = (e) => {
    props.parentCallback(e.target.value);
    nextStep()
  }

  return (
    <div>
      <Field name="email" type="email" component={textInput} label="Email"/>
      <Field name="password" type="password" component={PasswordInput} label="Password"/>
      <Field name="password_confirmation" type="password" component={PasswordInput} label="Password Confirmation"/>
      <div className="form-group">
        <div className="py-3">Registration Type</div>
        <label className=" mb-2 d-flex align-items-center">
          <Field 
            name="registration_type" 
            component="input" 
            type="radio" 
            value="hosts"
            onChange={onChange}
          /> 
          <span className="px-1">Hosts</span>
        </label>
        <label className="d-flex align-items-center">
          <Field 
            name="registration_type" 
            component="input" 
            type="radio" 
            value="influencer"
            onChange={onChange}
          /> 
          <span className="px-1">Influencer</span>
        </label>
      </div>
    </div>
  );
}

export default BasicFormStep