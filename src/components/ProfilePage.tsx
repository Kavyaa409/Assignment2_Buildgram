import { Link, useParams } from "react-router-dom";
import { mockPosts } from "../mockData";

function ProfilePage() {
  const { username } = useParams();

  const userPosts = mockPosts.filter(
    (post) => post.user.username === username
  );

  if (userPosts.length === 0) {
    return <h2>User not found</h2>;
  }

  const user = userPosts[0].user;

  return (
    <div>
      <img
        src={user.avatarUrl}
        alt={user.username}
        width={80}
      />

      <h2>{user.username}</h2>

      <p>{user.bio}</p>

      <h3>Posts</h3>

      {userPosts.map((post) => (
        <img
          key={post.id}
          src={post.imageUrl}
          alt="post"
          width={200}
        />
      ))}

      <br />

      <Link to="/">Back to Feed</Link>
    </div>
  );
}

export default ProfilePage;