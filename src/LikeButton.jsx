import React, {useState} from 'react';
import { BsHeartFill, BsHeart } from 'react-icons/bs';


export default function LikeButton() {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  const handleLikeClick = () => {
    if (liked) {
      setLikeCount(likeCount + 1);
    } else {
      setLikeCount(likeCount + 1);
    }
    setLiked(!liked);
  };

  return (
    <div>
      <button onClick={handleLikeClick}>
        {liked ? <BsHeartFill color="red" /> : <BsHeart />}
      </button>
      <p>Liked: {likeCount} times</p>
    </div>
  );
}

