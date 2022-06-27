import React from 'react';
import { useState, useEffect } from 'react';
import { updateSong, getSingleSong, deleteSong } from './services/fetch-utils';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';

export default function UpdatePage() {
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [color, setColor] = useState('');
  const { push } = useHistory();
  const { id } = useParams();

  useEffect(() => {
    async function fetchSongs() {
      const song = await getSingleSong(id);

      setTitle(song.title);
      setArtist(song.artist);
      setColor(song.color);

    }
    fetchSongs();
  }, [id]);

  async function handleSubmit(e) {
    e.preventDefault();

    await updateSong({
      title: title,
      artist: artist,
      color: color
    }, id);

    setTitle(''),
    setArtist(''),
    setColor('');

    push('/songs');

  }

  async function handleDeleteSong() {
    await deleteSong(id);

    push('/songs');
  }

  return (
    <div className="update-page">
      <form onSubmit={handleSubmit}>
        <h2>Update Song</h2>
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
        <button>Update Song</button>
      </form>
      <button onClick={handleDeleteSong}>Delete Song</button>
    </div>
  );
}
