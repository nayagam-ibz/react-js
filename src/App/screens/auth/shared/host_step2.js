import React from 'react';
import { textInput } from '../../../../shared/form-elements'
import { useWizard } from "react-use-wizard";
import { Button } from 'react-bootstrap';
import { Field } from "redux-form";

export function HostStepTwoForm() {
  const { previousStep } = useWizard();
  return (
    <div>
      <Field name="bank_account" type="text" component={textInput} label="Bank Account / Routing Number"/>
      <Field name="reporting_email_address" type="text" component={textInput} label="Reporting Email Address"/>
      <Field name="address_line_1" type="text" component={textInput} label="Primary Contact Email Address"/>
      <Field name="description" type="text" component={textInput} label="Description"/>
      <div className="mt-3 mb-3">
        <Button 
          variant="brand" 
          type="submit" 
          className="btn custom_theme_btn px-3 full_with">
          Sign Up
        </Button>
      </div>
      <Button onClick={previousStep} className="prevStep">prev</Button>
    </div>
  );
}

export default HostStepTwoForm