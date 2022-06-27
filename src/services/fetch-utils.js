import { client } from './client';

export async function signIn(email, password) {
  const { user } = await client.auth.signIn({
    email: email,
    password: password,
  });

  return user;
}

export async function signUp(email, password) {
  const { user } = await client.auth.signUp({
    email: email,
    password: password,
  });

  return user;
}

export async function logout() {
  const { error } = await client.auth.signOut();

  return error;
}

export async function createSong(song) {
  const { data } = await client.from('songs').insert(song).single();

  return data;
}

export async function getSongs() {
  const { data } = await client.from('songs').select('*');

  return data;
}
export async function updateSong(song, id) {
  const { data } = await client.from('songs').update(song).match({ id: id }).single();

  return data;
}

export async function getSingleSong(id) {
  const { data } = await client.from('songs').select('*').match({ id }).single();

  return data;
}
export async function deleteSong(id) {
  const { data } = await client.from('songs').delete().match({ id: id }).single();

  return data;
}