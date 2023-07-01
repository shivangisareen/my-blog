import React, { useEffect, useState } from "react";

import IconButton from "@mui/material/IconButton";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";

const LikeButton = ({ postId }) => {
  const [likeCount, setLikeCount] = useState(0);
  const [liked, setLiked] = useState(false);

  // Load initial like state from browser storage on component mount
  useEffect(() => {
    const storedLike = localStorage.getItem(`like_${postId}`);
    if (storedLike) {
      const { likeCount: storedLikeCount, liked: storedLiked } =
        JSON.parse(storedLike);
      setLikeCount(storedLikeCount);
      setLiked(storedLiked);
    }
  }, [postId]);

  // Update like state and browser storage when the like button is clicked
  const handleLike = () => {
    if (liked) {
      setLikeCount(likeCount - 1);
      setLiked(false);
      localStorage.removeItem(`like_${postId}`);
    } else {
      setLikeCount(likeCount + 1);
      setLiked(true);
      const likeData = { likeCount: likeCount + 1, liked: true };
      localStorage.setItem(`like_${postId}`, JSON.stringify(likeData));
    }
  };

  return (
    <div style={{ position: "relative" }}>
      <IconButton onClick={handleLike} color="primary">
        {liked ? <ThumbUpIcon /> : <ThumbUpOutlinedIcon />}
      </IconButton>
    </div>
  );
};

export default LikeButton;
