import type { PostType } from "../types";
import PostHeader from "./PostHeader";
import PostImage from "./PostImage";
import PostActions from "./PostActions";
import PostComments from "./PostComments";

interface PostProps {
  post: PostType;
}

function Post({ post }: PostProps) {
  return (
    <article className="post">
      <PostHeader user={post.user} />

      <PostImage imageUrl={post.imageUrl} />

      <PostActions likes={post.likes} />

      <PostComments comments={post.comments} />
    </article>
  );
}

export default Post;