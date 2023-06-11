import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';
import { FormStyle, Label, InputStyle, ButtonStyle } from '../styles/Register';

const schema = yup.object().shape({
  email: yup
    .string()
    .email('Invalid email address.')
    .required('E-mail is required'),
  password: yup
    .string()
    .min(8, 'Password needs to have at least 8 attributes')
    .required('Password is required'),
});

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      // Odešlete data na server pomocí Supabase API nebo jiné metody dle vašeho výběru
      await axios.post('/api/login', data);

      // Přesměrujte na stránku "setting"
      window.location.href = '/setting';
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <FormStyle onSubmit={handleSubmit(onSubmit)}>
      <Label>Fill in your email address:</Label>
      <InputStyle
        type="email"
        placeholder="Todoella@gmail.com"
        {...register('email')}
        required
      />
      {errors.email && <p>{errors.email.message}</p>}
      <Label>Create your password:</Label>
      <InputStyle
        type="password"
        placeholder="********"
        {...register('password')}
        required
      />
      {errors.password && <p>{errors.password.message}</p>}
      <ButtonStyle type="submit">Submit</ButtonStyle>
    </FormStyle>
  );
}
