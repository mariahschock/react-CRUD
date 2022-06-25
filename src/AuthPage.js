import React from 'react';

export default function AuthPage() {
  return (
    <div>
      <h2>Song Track</h2>
      <form>
        <h3>Sign In</h3>
        <label>
            email
          <input type="email" />
        </label>
        <label>
            password
          <input type="password" />
        </label>
        <button>Sign In</button>
      </form>
      <form>
        <h3>Sign Up</h3>
        <label>
            email
          <input type="email" />
        </label>
        <label>
            password
          <input type="password" />
        </label>
        <button>Sign Up</button>
      </form>
    </div>
  );
}
