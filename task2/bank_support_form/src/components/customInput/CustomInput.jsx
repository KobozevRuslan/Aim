import React from 'react';
import PropTypes from 'prop-types';

import {Image, InputImage, InputWrapper} from './styledComponents/CustomInput';

const CustomInput = ({ type, placeholder, field, form: { touched, errors } }) => {
  return (
    <InputWrapper>
      {type === 'password' ? <InputImage /> : <InputImage inputImage/>}
      <input
        className={touched[field.name] && !errors[field.name] ? 'done' : ''}
        type={type}
        {...field}
        placeholder={placeholder}
      />
      {touched[field.name] && errors[field.name] && (
        <div className='error_message'>{errors[field.name]}</div>
      )}
      {touched[field.name] && errors[field.name] && (
      <Image />
      )}
      {touched[field.name] && !errors[field.name] && (
        <Image status/>
      )}
    </InputWrapper>
  );
}

CustomInput.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,
};

export default CustomInput;