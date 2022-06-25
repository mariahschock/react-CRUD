import { client } from './client';

export async function signIn(email, password) {
  const { user } = await client.auth.signIn({
    email: email,
    password: password,
  });

  return user;
}

export async function signUp(signUpEmail, signUpPassword) {
  const { user } = await client.auth.signUp({
    email: signUpEmail,
    password: signUpPassword,
  });

  return user;
}

export async function logout() {
  const { error } = await client.auth.signOut();
}