import React, { useState } from "react";

const PostForm = ({ onAddPost }) => {
  const [title, setTitle] = useState("");      
  const [content, setContent] = useState("");  

  const handleSubmit = (e) => {
    e.preventDefault();

   
    if (title.trim() && content.trim()) {
      onAddPost({ title, content }); 
      setTitle("");   
      setContent(""); 
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"    
        value={title}
        onChange={(e) => setTitle(e.target.value)}  
      />
      <textarea
        placeholder="Content"  
        value={content}
        onChange={(e) => setContent(e.target.value)}  
      />
      <button type="submit">Add Post</button>  
    </form>
  );
};

export default PostForm;
