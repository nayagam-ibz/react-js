import React from "react";

export const selectField = ({
  input,
  placeholder,
  label,
  values,
  defaultValue,
  id,
  meta: { touched, error },
  ...rest
}) => {
  
  console.log(values)
  return (
    <div className="form-group">
       <label> {label}</label>
      <select defaultValue={defaultValue} className="dropdown-list form-control" {...input} >
        {values.map((value, index) => (
          <option key={value.id} value={value.name}>{value.name}</option>
        ))}
      </select>
      {touched && error && <span className="form-error">{error}</span>}
    </div>
  );
};

export default selectField