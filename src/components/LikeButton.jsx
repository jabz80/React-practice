import React, { useState } from 'react';

export default function LikeButton() {
  const [likeCount, setLikeCount] = useState(0);

  const handleLikeClick = () => {
    setLikeCount(likeCount + 1);
  };



  return (
    <div>
      <button onClick={handleLikeClick}>Like</button>
      <p>Liked: {likeCount} times</p>
    </div>
  );
}


