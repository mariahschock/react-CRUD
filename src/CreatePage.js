import React from 'react';
import { useState } from 'react';
import { createSong } from './services/fetch-utils';
import { useHistory } from 'react-router-dom';

export default function CreatePage() {
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [color, setColor] = useState('');
  const history = useHistory('');

  async function handleSubmit(e) {
    e.preventDefault();

    const song = await createSong({
      title: title,
      artist: artist,
      color: color
    });
    console.log(song);

    setTitle(''),
    setArtist('');
    setColor('');

    history.push('/songs');
  }

  return (
    <div>
      <h2>Add Song</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input onChange={e => setTitle(e.target.value)} value={title}></input>
        </label>
        <label>
          Artist:
          <input onChange={e => setArtist(e.target.value)} value={artist}></input>
        </label>
        <label>
          Track Color:
          <input onChange={e => setColor(e.target.value)} value={color}></input>
        </label>
        <button>Add Song</button>
      </form>
    </div>
  );
}
