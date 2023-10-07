import React from 'react';
import { textInput, selectField } from '../../../../shared/form-elements'
import { useWizard } from "react-use-wizard";
import { Button } from 'react-bootstrap';
import { Field } from "redux-form";

const language = [{id: 1, name: "English"}, {id:2, name: "Tamil"}]

export function InfluencerStepOneForm() {
  const { previousStep, nextStep } = useWizard();
  return (
    <div>
      <Field name="language" component={selectField} label="Select language" values={language}/>
      <Field name="email" type="email" component={textInput} label="Registration Email"/>
      <Field name="email" type="email" component={textInput} label="Support Email"/>
      <Field name="email" type="number" component={textInput} label="Phone Number"/>
      <div className="form-group d-flex align-items-center">
        <div>Notification Type</div>
        <label className="d-flex align-items-center px-3">
          <Field 
            name="notification_type" 
            component="input" 
            type="radio" 
            value="sms"
          /> 
          <span className="px-1">Sms</span>
        </label>
        <label className="d-flex align-items-center">
          <Field 
            name="notification_type" 
            component="input" 
            type="radio" 
            value="email"
          /> 
          <span className="px-1">Email</span>
        </label>
      </div>
      <div className="d-flex align-items-center justify-content-between mt-2">
        <Button onClick={previousStep} className="prevStep">prev</Button>
        <Button onClick={nextStep} className="nextStep">next</Button>
      </div>
    </div>
  );
}

export default InfluencerStepOneForm