import React from "react";
import "../assets/styles/post.css";

const Post = ({ title, description, imageUrl, link }) => {
    return (
      <a href={link} className="post-link">
        <div className="post">
          <img src={imageUrl} alt={title} className="post-image" />
          <div className="post-content">
            <h3 className="post-title">{title}</h3>
            <p className="post-description">{description}</p>
          </div>
        </div>
      </a>
    );
}

export default Post;