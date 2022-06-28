import React from 'react';
import { useState } from 'react';
import { signIn, signUp } from './services/fetch-utils';

import './App.css';


export default function AuthPage({ setUser }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signUpEmail, setSignUpEmail] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();

    const user = await signIn(email, password);

    setUser(user);

  }

  async function handleSignUpSubmit(e) {
    e.preventDefault();

    const user = await signUp(signUpEmail, signUpPassword);

    setUser(user);
   
  }


  return (
    <div className="auth-form">
      
      <form onSubmit={handleSubmit}>
        <div className="sign-in">
          <h3>Sign In</h3>
          <label>
            email:
            <input onChange={e => setEmail(e.target.value)} value={email} type="email" />
          </label>
          <label>
            password:
            <input onChange={e => setPassword(e.target.value)} value={password} type="password" />
          </label>
          <button>Sign In</button>
        </div>
      </form>
      <form onSubmit={handleSignUpSubmit}>
        <div className="sign-up">
          <h3>Sign Up</h3>
          <label>
            email:
            <input onChange={e => setSignUpEmail(e.target.value)} value={signUpEmail} type="email" />
          </label>
          <label>
            password:
            <input onChange={e => setSignUpPassword(e.target.value)} value={signUpPassword} type="password" />
          </label>
          <button>Sign Up</button>
        </div>
      </form>
    </div>
  );
}
