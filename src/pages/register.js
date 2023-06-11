import { signIn, signUp } from '../services/user';
import AuthForm from '@/components/AuthForm';

export default function RegisterForm() {
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
    <AuthForm onSubmit={onSubmit} passwordLabel={'Create your password:'} />
  );
}
