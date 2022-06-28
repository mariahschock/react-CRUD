import React from 'react';
import { useState } from 'react';
import { createSong } from './services/fetch-utils';
import { useHistory } from 'react-router-dom';

import './App.css';

export default function CreatePage() {
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [color, setColor] = useState('');
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    await createSong({
      title: title,
      artist: artist,
      color: color
    });

    setTitle(''),
    setArtist('');
    setColor('');

    history.push('/songs');
  }

  return (
    <div className="create-page">
      <form onSubmit={handleSubmit}>
        <h2>Add Song</h2>
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
