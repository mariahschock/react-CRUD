import React from 'react';
import { Link } from 'react-router-dom';

export default function Song({ song }) {
  return <Link to={`/songs/${song.id}`} ><div className="song" style={{ background: song.color }}>
    <h3>{song.title}</h3>
    <p>by {song.artist}</p>
  </div></Link>;
}
