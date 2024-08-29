import React from "react";

function FeturedArticleItem({ category, title, time, content, }) {
  return (
    <div className="home-featured-articles-post">
      <div className="article-content">
        <span className="category">{category}</span>
        <h3>{title}</h3>
        <p className="time-1">🕒{time}</p>
        <p className="home-article-content">{content}</p>
        <div className="home-articles-post-arrow arrow"></div>
      </div>
    </div>
  );
}

export default FeturedArticleItem;
