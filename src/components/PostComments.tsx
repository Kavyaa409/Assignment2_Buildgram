import { useState } from "react";
import type { Comment } from "../types";

interface PostCommentsProps {
  comments: Comment[];
}

function PostComments({ comments }: PostCommentsProps) {
  const [commentList, setCommentList] =
    useState<Comment[]>(comments);

  const [inputText, setInputText] =
    useState("");

  const addComment = () => {
    if (inputText.trim() === "") return;

    const newComment: Comment = {
      id: Date.now().toString(),
      user: {
        id: "current_user",
        username: "my_account",
        avatarUrl: "",
      },
      text: inputText,
      timestamp: "Just now",
    };

    setCommentList([
      ...commentList,
      newComment,
    ]);

    setInputText("");
  };

  return (
    <div className="post-comments">
      {commentList.map((comment) => (
        <p key={comment.id}>
          <strong>
            {comment.user.username}
          </strong>
          : {comment.text}
        </p>
      ))}

      <input
        type="text"
        value={inputText}
        onChange={(e) =>
          setInputText(e.target.value)
        }
        placeholder="Add a comment..."
      />

      <button onClick={addComment}>
        Add
      </button>
    </div>
  );
}

export default PostComments;