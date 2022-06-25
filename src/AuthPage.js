import React from 'react';
import { useState } from 'react';
import { signIn, signUp } from './services/fetch-utils';

export default function AuthPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signUpEmail, setSignUpEmail] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();

    const user = await signIn(email, password);
    console.log(user);

    setEmail('');
    setPassword('');
  }

  async function handleSignUpSubmit(e) {
    e.preventDefault();

    const user = await signUp(signUpEmail, signUpPassword);
    console.log(user);

    setSignUpEmail('');
    setSignUpPassword('');
  }


  return (
    <div>
      <h2>Song Track</h2>
      <form onSubmit={handleSubmit}>
        <h3>Sign In</h3>
        <label>
            email
          <input onChange={e => setEmail(e.target.value)} value={email} type="email" />
        </label>
        <label>
            password
          <input onChange={e => setPassword(e.target.value)} value={password} type="password" />
        </label>
        <button>Sign In</button>
      </form>
      <form onSubmit={handleSignUpSubmit}>
        <h3>Sign Up</h3>
        <label>
            email
          <input onChange={e => setSignUpEmail(e.target.value)} value={signUpEmail} type="email" />
        </label>
        <label>
            password
          <input onChange={e => setSignUpPassword(e.target.value)} value={signUpPassword} type="password" />
        </label>
        <button>Sign Up</button>
      </form>
    </div>
  );
}
