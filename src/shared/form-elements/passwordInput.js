import React, { useState } from "react";

export const PasswordInput = ({
  input,
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
  const [inputType, setInputType] = useState('password');

  function toggleType() {
    setInputType(inputType === 'password' ? 'text' : 'password');
  }

  return (
    <div className="form-group">
      <label> {label}</label>
      <div className="password-input">
        <input
          {...input}
          type={inputType}
          id={id}
          placeholder={placeholder}
          className="form-control"
          autoFocus={autoFocus}
        />
        <span className="password-type-option" onClick={toggleType}>
          <i className="fa fa-eye"></i>
        </span>
      </div>
      {touched && error && <span className="form-error">{error}</span>}
    </div>
  );
};

export default PasswordInput;
