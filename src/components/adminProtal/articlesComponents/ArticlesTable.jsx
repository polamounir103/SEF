import { React } from "react";
import Title from "./title";
import ArticleData from "./ArticleData";
import ArticlesTableHeader from "./ArticlesTableHeader";
import "./ArticleTable.css";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
const Result = () => {
  const articles = [
    {
      title: "Here's the article title1",
      category: "tech",
      date: "monday,june5th",
      time: "12:30pm",
      status: "published",
    },
    {
      title: "Here's the article title2",
      category: "tech",
      date: "monday,june5th",
      time: "12:30pm",
      status: "draft",
    },
    {
      title: "Here's the article title3",
      category: "tech",
      date: "monday,june5th",
      time: "12:30pm",
      status: "published",
    },
    {
      title: "Here's the article title4",
      category: "tech",
      date: "monday,june5th",
      time: "12:30pm",
      status: "draft",
    },
    {
      title: "Here's the article title5",
      category: "tech",
      date: "monday,june5th",
      time: "12:30pm",
      status: "published",
    },
  ];
  return (
    <div className="d-flex justify-content-end align-items-end ">
      <div className="w-100 article-table-top-container mt-3 mt-md-0">
        <div className="d-flex justify-content-end align-items-end mb-5 d-none d-lg-flex">
          <Link className="btn btn-warning" to="/adminportal/add-new-article">
            Create Nemw Article
          </Link>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <Title title="All Article" />
          <div className=" position-relative text-danger search-box ">
            <input
              type="text"
              className="article-search-input"
              placeholder="search all"
            />
            <div className="article-search-icon">
              <FaSearch />
            </div>
          </div>
        </div>
        <div className="article-table-container">
          <ArticlesTableHeader />
          <div className="d-flex flex-column gap-4">
            {articles.map((art) => (
              <ArticleData
                title={art.title}
                category={art.category}
                date={art.date}
                time={art.time}
                key={art.title}
                status={art.status}
              />
            ))}
          </div>
        </div>

        <div className="d-flex justify-content-center  align-items-end mt-5 d-flex d-lg-none">
          <Link className="btn btn-warning" to="/adminportal/add-new-article">
            Create Nemw Article
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Result;
