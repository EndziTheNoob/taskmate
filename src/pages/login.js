import { signIn } from '../services/user';
import AuthForm from '@/components/AuthForm';
import { useState, useEffect } from 'react';

export default function LoginForm() {
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (errorMessage) {
      const timer = setTimeout(() => {
        setErrorMessage('');
      }, 5000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [errorMessage]);

  const onSubmit = async (data) => {
    try {
      const { error } = await signIn(data.email, data.password);
      if (error) {
        setErrorMessage('The password is incorrect.');
        console.log(error);
        return;
      }

      // Redirect user to "/todolist"
      window.location.href = '/todolist';
    } catch (error) {
      console.log(error);
    }
  };

  return (
    // @ts-ignore
    <AuthForm
      onSubmit={onSubmit}
      passwordLabel={'Password:'}
      errorMessage={errorMessage}
    />
  );
}
