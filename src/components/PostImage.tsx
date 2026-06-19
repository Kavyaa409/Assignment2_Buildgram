interface PostImageProps {
  imageUrl: string;
}

function PostImage({ imageUrl }: PostImageProps) {
  return (
    <img
      className="post-image"
      src={imageUrl}
      alt="post"
    />
  );
}

export default PostImage;