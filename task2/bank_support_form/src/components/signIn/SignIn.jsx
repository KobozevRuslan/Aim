import React from 'react';
import PropTypes from 'prop-types';

import { signInSchema } from './validation';

import FormWrapper from "../formWrapper/FormWrapper";

const SignIn = ({ itemInfo ,link: { linkName, linkUrl }, buttonName, inputTypes: { email, password }}) => {
  return (
    <FormWrapper
      itemInfo={itemInfo}
      fields={{ email, password }}
      validation={signInSchema}
      link={{ linkName, linkUrl }}
      buttonSubmit={{
        buttonName,
        buttonHandler: values => {
          console.log(values);
        },
      }}
    />
  );
};

SignIn.propTypes = {
  itemInfo: PropTypes.string.isRequired,
  link: PropTypes.object.isRequired,
  buttonName: PropTypes.string.isRequired,
  inputTypes: PropTypes.object.isRequired,
};

export default SignIn;