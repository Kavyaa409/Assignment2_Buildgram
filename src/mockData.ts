import type { PostType, User } from "./types";

const userManan: User = {
  id: "user_01",
  username: "manan_street",
  avatarUrl: "https://i.pravatar.cc/150?img=1",
  bio: "Street photographer 📸",
  postCount: 12,
  followerCount: 340,
};

const userAisha: User = {
  id: "user_02",
  username: "aisha_clicks",
  avatarUrl: "https://i.pravatar.cc/150?img=5",
  bio: "Traveller ✈️",
  postCount: 20,
  followerCount: 1200,
};

export const mockPosts: PostType[] = [
  {
    id: "post1",
    user: userManan,
    imageUrl: "https://picsum.photos/600?random=1",
    caption: "Golden hour 🌇",
    likes: 142,
    timestamp: "2 hours ago",
    comments: [
      {
        id: "c1",
        user: userAisha,
        text: "Amazing shot!",
        timestamp: "1 hour ago",
      },
    ],
  },
  {
    id: "post2",
    user: userAisha,
    imageUrl: "https://picsum.photos/600?random=2",
    caption: "Mountain vibes 🏔️",
    likes: 210,
    timestamp: "5 hours ago",
    comments: [],
  },
];