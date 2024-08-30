import React from 'react'
import FeaturedNews from "../components/Home/FeaturedNews";
import ArticleList from "../components/Home/ArticleList";
import "../assets/styles/FeaturedNews.css";
// import LoginModel from '../components/ui/LoginModel';

function Home() {
  return (
    <div className="home-page site-page">
      <div className='home-title-container'>
        <h1>Software engineering for future</h1>
      </div>
      <FeaturedNews />
      <ArticleList />

    </div>
  );
}

export default Home


