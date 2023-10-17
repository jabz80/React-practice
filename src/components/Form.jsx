import React, { useState } from 'react';

export default function MusicForm({ onAddMusic }) {
  const [formData, setFormData] = useState({
    name: '',
    releaseDate: '',
    img: './images/country hits.jpeg',
    author: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.releaseDate && formData.img && formData.author) {
      onAddMusic(formData); // Pass the new music data to the parent component
      // clears the from data
      setFormData({
        name: '',
        releaseDate: '',
        img: './images/country hits.jpeg',
        author: '',
      });
    }
  };

  return (
    <div>
      <h2>Add New Music</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Song Name:
          <input type="text" name="name" placeholder="Song Name" value={formData.name} onChange={handleChange} />
        </label>
        <br />
        <label>
          Release Date:
          <input type="date" name="releaseDate" placeholder="Release Date" value={formData.releaseDate} onChange={handleChange} />
        </label>
        <br />
        <label>
          Album Image:
          <input type="text" name="img" value={formData.img} onChange={handleChange} />
        </label>
        <br />
        <label>
          Author:
          <input type="text" name="author" placeholder="Author" value={formData.author} onChange={handleChange} />
        </label>
        <br />
        <button type="submit">Add Music</button>
      </form>
    </div>
  );
}


