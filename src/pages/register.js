import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormStyle, Label, InputStyle, ButtonStyle } from '../styles/Register';
import { signIn, signUp } from '../services/user';
import { authSchema } from '../utils/authSchema';

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(authSchema),
  });

  const onSubmit = async (data) => {
    try {
      await signUp(data.email, data.password).then(() =>
        signIn(data.email, data.password),
      );

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
      {errors.email && <p>{errors.email.message.toString()}</p>}
      <Label>Create your password:</Label>
      <InputStyle
        type="password"
        placeholder="********"
        {...register('password')}
        required
      />
      {errors.password && <p>{errors.password.message.toString()}</p>}
      <ButtonStyle type="submit">Submit</ButtonStyle>
    </FormStyle>
  );
}
