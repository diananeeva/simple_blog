import React, { useState } from "react";

const Post = ({ title, content }) => {
  const [isVisible, setIsVisible] = useState(false); // Състояние за видимост на съдържанието

  const toggleVisibility = () => {
    setIsVisible(!isVisible); // Превключване на видимостта
  };

  return (
    <div className="post" onClick={toggleVisibility} style={{ cursor: 'pointer' }}>
      <h2>{title}</h2>
      {isVisible && <p>{content}</p>} {/* Съдържанието се показва само, ако isVisible е true */}
    </div>
  );
};

export default Post;
