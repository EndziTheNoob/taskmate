import * as yup from 'yup';

export const authSchema = yup.object().shape({
  email: yup
    .string()
    .email('Invalid email address.')
    .required('E-mail is required.'),
  password: yup
    .string()
    .min(8, 'Password needs to have at least 8 characters.')
    .required('Password is required.'),
});
