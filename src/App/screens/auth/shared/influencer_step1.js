import React from 'react';
import { textInput, selectField } from '../../../../shared/form-elements'
import { useWizard } from "react-use-wizard";
import { Button } from 'react-bootstrap';
import { Field } from "redux-form";

const state = [{id: 1, name: "English"}, {id:2, name: "Tamil"}]
const region = [{id: 1, name: "English"}, {id:2, name: "Tamil"}]

export function InfluencerStepOneForm() {
  const { previousStep, nextStep } = useWizard();
  return (
    <div>
      <Field name="influencer_name" type="text" component={textInput} label="Influencer Name"/>
      <Field name="community_name" type="text" component={textInput} label="Community Name"/>
      <Field name="address_line_1" type="text" component={textInput} label="Address Line 1"/>
      <Field name="phone_number" type="text" component={textInput} label="Phone Number Line 1"/>
      <Field name="city" type="text" component={textInput} label="City"/>
      <div className="row">
        <div className="col-md-6">
          <Field 
            name="state" 
            component={selectField} 
            label="Select state"
            values={state}
          />
        </div> 
        <div className="col-md-6">
         <Field 
            name="region" 
            component={selectField} 
            label="Select region"
            values={region}
          />
        </div> 
      </div>
      <div className="d-flex align-items-center justify-content-between  mt-2">
        <Button onClick={previousStep} className="prevStep">prev</Button>
        <Button onClick={nextStep} className="nextStep">next</Button>
      </div>
    </div>
  );
}

export default InfluencerStepOneForm