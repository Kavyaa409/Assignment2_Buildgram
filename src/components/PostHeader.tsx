import type { User } from "../types";
import { Link } from "react-router-dom";

interface PostHeaderProps {
  user: User;
}

function PostHeader({ user }: PostHeaderProps) {
  return (
    <div className="post-header">
      <img
        className="avatar"
        src={user.avatarUrl}
        alt={user.username}
      />

      <Link to={`/profile/${user.username}`}>
        {user.username}
      </Link>
    </div>
  );
}

export default PostHeader;