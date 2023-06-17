import { signIn, signUp } from '../services/user';
import AuthForm from '@/components/AuthForm';
import { useState, useEffect } from 'react';

export default function RegisterForm() {
  const [errorEmail, setErrorEmail] = useState('');

  useEffect(() => {
    if (errorEmail) {
      const timer = setTimeout(() => {
        setErrorEmail('');
      }, 5000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [errorEmail]);

  const onSubmit = async (data) => {
    try {
      const { error } = await signUp(data.email, data.password).then(() =>
        signIn(data.email, data.password),
      );
      if (error) {
        console.log('email je registrovan');
        setErrorEmail('The email is already registered.');
        return;
      }

      // Redirect user to "/setting"
      window.location.href = '/setting';
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthForm
      onSubmit={onSubmit}
      passwordLabel={'Create your password:'}
      errorEmail={errorEmail}
    />
  );
}
