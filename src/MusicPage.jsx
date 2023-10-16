import React, { useState } from 'react';
import LikeButton from './LikeButton';
import MusicForm from './Form';

export default function MusicList() {
  const [musicData, setMusicData] = useState([
    { name: 'Walk The Line', releaseDate: '1956-05-01', img: './images/walk the line.jpeg', author: 'Johny Cash' },
    { name: 'Take Me Home', releaseDate: '1971-04-12', img:'./images/country road.jpeg', author: 'john Denver' },
    { name: 'The Gambler', releaseDate: '1978-11-15', img:'./images/gambler.jpeg', author: 'Kenny Rogers' },
    { name: 'Where Were You', releaseDate: '2001-11-26', img:'./images/where were you.jpeg', author: 'Alan Jackson' },
    { name: 'Ring Of Fire', releaseDate: '1971-04-12', img:'./images/ring of fire.jpeg', author: 'Johnny Cash' },
    { name: 'Rhinestone Cowboy', releaseDate: '1975-05-26', img:'./images/rhinestone cowboy.jpeg', author: 'Glen Cambell' },
    { name: 'If Tomorrow Never Comes', releaseDate: '1989-08-21', img:'./images/tomorrow never comes.jpeg', author: 'Garth Brooks' },
    { name: 'Jolene', releaseDate: '1973-0-21', img:'./images/jolene.jpeg', author: 'Dolly Parton' },

  ]);

  const addMusic = (newMusic) => {
    setMusicData([...musicData, newMusic]);
  };



  return (
    <div>
      <ul>
        {musicData.map((music, index) => (
          <li key={index} className='card'>
              <img src={music.img} alt="Album Cover" />
              <h3>Song Name: {music.name}</h3>
              <p>Release Date: {music.releaseDate}</p>
              <p>Author: {music.author}</p>
              <LikeButton />
          </li>
        ))}
      </ul>
        <div className='music-form'>
          <MusicForm onAddMusic={addMusic} />
        </div>
    </div>
  );
}


