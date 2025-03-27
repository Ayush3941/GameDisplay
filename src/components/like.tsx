import { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import "./like.css";

export default function LikeButton() {
  const [liked, setLiked] = useState<boolean>(false);

  return (
    <button 
      className={`like-btn ${liked ? "liked" : ""}`} 
      onClick={() => setLiked(!liked)}
    >
      {liked ? <AiFillHeart size={24} /> : <AiOutlineHeart size={24} />}
    </button>
  );
}
