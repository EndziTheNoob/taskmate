import { signIn } from '../services/user';
import AuthForm from '@/components/AuthForm';

export default function LoginForm() {
  const onSubmit = async (data) => {
    try {
      const { error } = await signIn(data.email, data.password);
      if (error) {
        console.log(error);
        return;
      }

      // Redirect user at "todolist"
      window.location.href = '/todolist';
    } catch (error) {
      console.log(error);
    }
  };

  return <AuthForm onSubmit={onSubmit} passwordLabel={'Password:'} />;
}
