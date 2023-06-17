import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { authSchema } from '@/utils/authSchema';
import { ButtonStyle, FormStyle, Label, InputStyle } from '@/styles/Register';

const AuthForm = ({ onSubmit, passwordLabel, errorMessage,errorEmail }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(authSchema),
  });

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
      {errorEmail && <p>{errorEmail}</p>}
      <Label>{passwordLabel}</Label>
      <InputStyle
        type="password"
        placeholder="********"
        {...register('password')}
        required
      />
      {errors.password && <p>{errors.password.message.toString()}</p>}
      {errorMessage && <p>{errorMessage}</p>}
      <ButtonStyle type="submit">Submit</ButtonStyle>
    </FormStyle>
  );
};

export default AuthForm;
