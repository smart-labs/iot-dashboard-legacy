import React from 'react';
import { loginWithEmail, createUserWithEmail } from '../store/auth';
import { useFormState } from 'react-use-form-state';

const Login = () => {
  const [formState, { text, password }] = useFormState();

  const signIn = () => {
    const { username, password } = formState.values;
    loginWithEmail({ username, password });
  };
  const signUp = () => {
    const { username, password } = formState.values;
    createUserWithEmail({ username, password });
  };

  return (
    <div>
      <form onSubmit={signIn}>
        <h1>Entre</h1>
        <input {...text('username')} />
        <input {...password('password')} />
        <button>Entre</button>
      </form>

      <form onSubmit={signUp}>
        <h1>Cadastre-se</h1>
        <input {...text('username')} />
        <input {...password('password')} />
        <button>Cadastre-se</button>
      </form>
    </div>
  );
};

export default Login;
