import React from "react";

export const textInput = ({
  input,
  type,
  placeholder,
  label,
  defaultValue,
  id,
  autoFocus,
  meta: { touched, error },
  className,
  style,
  ...rest
}) => {
  

  return (
    <div className="form-group">
       <label className="mb-1" style={{ fontSize: "14px" }}> {label}</label>
      <input
        {...input}
        type={type}
        placeholder={placeholder}
        id={id}
        className="form-control"
        autoFocus={autoFocus}
      />
      {touched && error && <span className="form-error">{error}</span>}
    </div>
  );
};

export default textInput;
