import React from "react";

export const checkBox = ({
  input,
  meta: { touched, error },
  ...rest
}) => {
  

  return (
    <div className="d-flex align-items-center">
      <input type="checkbox" {...input} />
      <label className="px-2 py-0" style={{marginBottom: 0}}>Remember Me</label>
    </div>
  );
};

export default checkBox;


