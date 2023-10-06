const validation = (values) => {
  const errors = {};
  if (!values.email) {
    errors.email = 'required';
  } else if (
    values.email &&
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
  ) {
    errors.email = 'required validate email';
  }
  if (!values.password) {
    errors.password = 'required';
  }

  if(!values.name){
    errors.name = 'required'
  }

  if(!values.title){
    errors.title = 'required'
  }

  if(!values.color_hex) {
    errors.color_hex = 'required'
  }

  if(!values.first_name){
    errors.first_name = 'required'
  }

  if(!values.last_name){
    errors.last_name = 'required'
  }

  if(!values.description){
    errors.description = 'required'
  }


  return errors;
};

export default validation;
