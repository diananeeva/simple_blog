import React, { useState } from "react";
import PostForm from "./PostForm";
import PostList from "./PostList";
import "./App.css";

function App() {
  const [posts, setPosts] = useState([]);

  const addPost = (post) => {
    setPosts([post, ...posts]);  // Добавяме новия пост на върха на списъка
  };

  return (
    <div className="App">
      <h1>Simple Blog</h1>
      <PostForm onAddPost={addPost} />
      <PostList posts={posts} />
    </div>
  );
}

export default App;
