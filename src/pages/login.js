import { signIn } from '../services/user';
import AuthForm from '@/components/AuthForm';

export default function LoginForm() {
  const onSubmit = async (data) => {
    try {
      await signIn(data.email, data.password);

      // Přesměrujte na stránku "todolist"
      window.location.href = '/todolist';
    } catch (error) {
      console.log(error);
    }
  };

  return <AuthForm onSubmit={onSubmit} passwordLabel={"Password:"}/>;
}
