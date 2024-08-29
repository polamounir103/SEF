import React from "react";

function ArticleItem({ category, title, time, content, image }) {
  return (
    <div className="home-articles-post d-flex p-2 gap-5">
      <img src={image} alt="" className="home-article-post-img"/>
      <div className="article-content ">
        <span className="category">{category}</span>
        <h3>{title}</h3>
        <p className="time-1">🕒{time}</p>
        <p className="home-article-content">{content}</p>
        <div className="home-articles-post-arrow arrow"></div>
      </div>
    </div>
  );
}

export default ArticleItem;
