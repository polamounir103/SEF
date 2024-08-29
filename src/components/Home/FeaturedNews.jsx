// src/components/FeaturedNews.jsx
import React, { useEffect, useState } from "react";
import NewsItem from "./FeturedArticleItem";
import "../../assets/styles/FeaturedNews.css";

function FeaturedNews() {
  return (
    <div className="text-white d-flex gap-5 home-article-posts ">
      <h2
        className="vertical-text"
      >
        FEATURED NEWS
      </h2>
      <div className="d-flex flex flex-md-row  ">
        <div className="flex flex-column align-content-center home-single-article-container">
          <NewsItem
            category="Tech"
            title="HERE'S THE FIRST ARTICLE"
            time="2h ago"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Et obcaecati sed nihil rem quibusdam? Deleniti laboriosam, inventore quibusdam id, repudiandae sapiente error qui veniam dicta nihil, quaerat cumque doloribus iusto.
    Voluptatibus repellat placeat, atque ipsa consequatur aliquid voluptate voluptas impedit exercitationem corrupti at, ipsam molestias debitis rem soluta iusto accusantium dolorem dolore consequuntur similique fugiat quasi quisquam. Vitae, cum recusandae.
    Reiciendis, dicta eum. Sit obcaecati velit sapiente expedita! Eligendi sequi magni, quis sunt doloremque, quas iure ullam accusantium autem, animi maxime illum! Ea nesciunt blanditiis soluta fugit minus facere reprehenderit?
    Harum veritatis magni nulla quia accusamus suscipit, maxime doloribus corporis id vero, nemo quod neque! Fugiat, iure numquam optio voluptas, deleniti nesciunt nam, ex expedita soluta alias repellendus fugit iusto!"
          />
        </div>
        <div className="flex flex-column align-content-center gap-5 home-single-article-container">
          <NewsItem
            category="Tech"
            title="HERE'S THE SECOND ARTICLE"
            time="3h ago"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Et obcaecati sed nihil rem quibusdam? Deleniti laboriosam, inventore quibusdam id, repudiandae sapiente error qui veniam dicta nihil, quaerat cumque doloribus iusto.
    Voluptatibus repellat placeat, atque ipsa consequatur aliquid voluptate voluptas impedit exercitationem corrupti at, ipsam molestias debitis rem soluta iusto accusantium dolorem dolore consequuntur similique fugiat quasi quisquam. Vitae, cum recusandae.
    Reiciendis, dicta eum. Sit"
          />
          <NewsItem
            category="Tech"
            title="HERE'S THE THIRD ARTICLE"
            time="5h ago"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Et obcaecati sed nihil rem quibusdam? Deleniti laboriosam, inventore quibusdam id, repudiandae sapiente error qui veniam dicta nihil, quaerat cumque doloribus iusto.
    Voluptatibus repellat placeat, atque ipsa consequatur aliquid voluptate voluptas impedit exercitationem corrupti at, ipsam molestias debitis rem soluta iusto accusantium dolorem dolore consequuntur similique fugiat quasi quisquam. Vitae, cum recusandae.
    Reiciendis, dicta eum. Sit"
          />
        </div>
      </div>
    </div>
  );
}

export default FeaturedNews;
