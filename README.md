Assignment 2: BuildGram Frontend
Overview

BuildGram is an Instagram-inspired social media application. This assignment focuses on building the frontend of the application using React and TypeScript.

The application demonstrates component-based architecture, client-side routing, local state management, and dynamic rendering using mock data.

Features Implemented
Component Architecture

The UI is divided into reusable React components:

Navbar
Feed
Post
PostHeader
PostImage
PostActions
PostComments
ProfilePage
TypeScript Data Modeling

Created strongly typed interfaces for:

User
Comment
PostType

This ensures type safety and improves maintainability.

Mock Database

Implemented a mock data layer using TypeScript objects.

Features:

Multiple users
Multiple posts
Pre-existing comments
Reusable user data
Dynamic Feed Rendering

Posts are rendered dynamically using:

mockPosts.map(...)

instead of hardcoded UI elements.

Client-Side Routing

Implemented navigation using React Router.

Routes:

/ → Feed Page
/profile/:username → Profile Page

Users can navigate between the feed and profile pages without a full page reload.

Interactive Features
Like Button
Toggle like/unlike
Updates like count locally using React state
Save Button
Toggle save/bookmark state
Add Comment
Controlled input field
Adds comments dynamically
Updates UI without refreshing
Profile Page

Displays:

User avatar
Username
Bio
User's posts
Navigation back to feed
Tech Stack
React
TypeScript
React Router DOM
CSS
Project Structure
src/
│
├── components/
│   ├── Navbar.tsx
│   ├── Feed.tsx
│   ├── Post.tsx
│   ├── PostHeader.tsx
│   ├── PostImage.tsx
│   ├── PostActions.tsx
│   ├── PostComments.tsx
│   └── ProfilePage.tsx
│
├── mockData.ts
├── types.ts
├── App.tsx
├── main.tsx
└── styles.css
