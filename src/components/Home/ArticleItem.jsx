import React from "react";

function ArticleItem({ category, title, time, content, image }) {
  return (
    <div className="home-articles-post d-flex p-2 gap-5 flex-column flex-xl-row">
      <img src={image} alt="" className="home-article-post-img" />
      <div className="article-content ">
        <div className="d-flex justify-content-between d-flex justify-content-between py-3">
          <p className="category article-category fs-5">{category}</p>
          <div>
            <p className="time-1">🕒{time}</p>
          </div>
        </div>
        <h3>{title}</h3>
        <p className="home-article-content">{content}</p>
        <div className="home-articles-post-arrow arrow"></div>
      </div>
    </div>
  );
}

export default ArticleItem;
