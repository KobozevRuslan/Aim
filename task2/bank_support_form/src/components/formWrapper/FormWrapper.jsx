import React from 'react';
import {Link} from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import PropTypes from 'prop-types';

import CustomInput from '../customInput/CustomInput';

import {MainFormWrapper} from './styledComponents/FormWrapper';

const FormWrapper = ({
  fields,
  validation,
  itemInfo,
  link: {linkName, linkUrl},
  buttonSubmit: {buttonHandler, buttonName}
}) => {
  return (
    <MainFormWrapper>
      <div>
        <div className='title'>
          <h1>Bank</h1>
          <p>Support Portal</p>
        </div>
        <Formik initialValues={fields} validationSchema={validation} onSubmit={buttonHandler}>
          {formik => {
            return (
              <Form className='main_item_wrapper'>
                {Object.keys(fields).map(item => {
                  return (
                    <div key={item}>
                      <Field
                        name={item}
                        type={item}
                        placeholder={item === 'password' ? 'Password' : 'E-mail'}
                        component={CustomInput}
                      />
                    </div>
                  )
                })}
                <button type='submit'>
                  {buttonName}
                </button>
                <div className='item_info'>
                  {itemInfo}
                  <Link to={linkUrl}>{linkName}</Link>
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </MainFormWrapper>
  );
};

FormWrapper.propTypes = {
  fields: PropTypes.object.isRequired,
  validation: PropTypes.object.isRequired,
  itemInfo: PropTypes.string.isRequired,
  link: PropTypes.object.isRequired,
  buttonSubmit: PropTypes.object.isRequired,
};

export default FormWrapper;