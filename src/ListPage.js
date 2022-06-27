import React from 'react';
import { useState, useEffect } from 'react';
import Song from './Song';
import { getSongs } from './services/fetch-utils';

import './App.css';


export default function ListPage() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    async function fetchSongs() {
      const songs = await getSongs();

      setSongs(songs);
    }
    fetchSongs();
  }, []);

  return (
    <div className="song-list">
      {
        songs.map((song, i) => {
          return <Song
            song={song} key={song.title + i + song.id} />;
        })
      }
    </div>
  );
}
