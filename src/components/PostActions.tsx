import { useState } from "react";

interface PostActionsProps {
  likes: number;
}

function PostActions({ likes }: PostActionsProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(likes);
  const [saved, setSaved] = useState(false);

  const handleLike = () => {
    if (isLiked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }

    setIsLiked(!isLiked);
  };

  return (
    <div className="post-actions">
      <button onClick={handleLike}>
        {isLiked ? "❤️" : "🤍"}
      </button>

      <button>💬</button>

      <button onClick={() => setSaved(!saved)}>
        {saved ? "🔖" : "📤"}
      </button>

      <p>{likeCount} likes</p>
    </div>
  );
}

export default PostActions;