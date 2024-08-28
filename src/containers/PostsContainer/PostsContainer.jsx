import React from "react";

const PostsContainer = ({ data }) => {
  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {data.map((item) => (
          <li key={`post-${item.id}`}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default PostsContainer;
