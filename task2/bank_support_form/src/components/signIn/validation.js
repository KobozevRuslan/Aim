import * as Yup from 'yup';

export const signInSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid Username')
    .min(2, 'Min length of symbols 2 !')
    .max(50, 'Max length of symbols 50 !')
    .matches(/^([^<>~])+@([^<>~]+)\.(com|ua|ru|net)$/gm, 'Domain name must be .com .ru .ua .net')
    .required('Email is a required field'),
  password: Yup.string()
    .min(5, 'Min number of characters must be 5 symbols !')
    .max(8, 'Max 8 symbols')
    .matches(/([^<>~]+)$/, 'You are using forbid symbols')
    .required('Please provide a password'),
});
