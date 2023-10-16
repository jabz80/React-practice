// MusicList.js
import React, { useState } from 'react';
import LikeButton from './LikeButton';

export default function MusicList() {
  const [musicData, setMusicData] = useState([
    { name: 'Walk The Line', releaseDate: '1956-05-01', liked: false, img: 'walk the line.jpeg', author: 'Johny Cash' },
    { name: 'Take Me Home', releaseDate: '1971-04-12', liked: false, img:'country road.jpeg', author: 'john Denver' },
    { name: 'The Gambler', releaseDate: '1978-11-15', liked: false, img:'gambler.jpeg', author: 'Kenny Rogers' },
    { name: 'Where Were You', releaseDate: '2001-11-26', liked: false, img:'where were you.jpeg', author: 'Alan Jackson' },
    { name: 'Ring Of Fire', releaseDate: '1971-04-12', liked: false, img:'ring of fire.jpeg', author: 'Johnny Cash' },
    { name: 'Rhinestone Cowboy', releaseDate: '1975-05-26', liked: false, img:'rhinestone cowboy.jpeg', author: 'Glen Cambell' },
    { name: 'If Tomorrow Never Comes', releaseDate: '1989-08-21', liked: false, img:'tomorrow never comes.jpeg', author: 'Garth Brooks' },
    { name: 'Jolene', releaseDate: '1973-0-21', liked: false, img:'jolene.jpeg', author: 'Dolly Parton' },
    // Add more songs here
  ]);

  const handleLikeClick = (index) => {
    const updatedMusicData = [...musicData];
    updatedMusicData[index].liked = !updatedMusicData[index].liked;
    setMusicData(updatedMusicData);
  };

  return (
    <div>
      <h1> Country Music List</h1>
      <ul>
        {musicData.map((music, index) => (
          <li key={index} className='card'>
              <img src={music.img} alt="Album Cover" />
              <h3>Song Name: {music.name}</h3>
              <p>Release Date: {music.releaseDate}</p>
              <p>Author: {music.author}</p>
              <LikeButton liked={music.liked} onClick={() => handleLikeClick(index)} />
          </li>
        ))}
      </ul>
    </div>
  );
}


