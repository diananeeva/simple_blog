# Simple Blog

## Overview

This is a simple blog web application built with React and Vite. The application allows users to create and view posts with titles and content. Users can see only the title of each post initially, and upon clicking the title, the content of the post is revealed.

## Project Structure

- `src/`: Contains the source code for the React application.
  - `components/`: Contains reusable components for the blog.
    - `Post.jsx`: Component that displays the title and content of a post.
    - `PostList.jsx`: Component that renders a list of posts.
    - `PostForm.jsx`: Component that handles adding new posts.
  - `App.jsx`: The main application component that ties everything together.
  - `main.jsx`: Entry point for the React application.
- `index.html`: The main HTML file that serves as the entry point for the web application.
- `App.css`: Contains styles for the application.

## Key Files

- `src/Post.jsx`: Component that displays a post's title and content. The content is displayed when the title is clicked.
- `src/PostList.jsx`: Component that renders a list of posts using the `Post` component.
- `src/PostForm.jsx`: Component that handles the submission of new posts.

## Technologies

- Frontend: React, Vite
- Other Libraries: 
  - Axios for making HTTP requests (if needed in future enhancements)
  - CSS for styling

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/simple_blog.git

