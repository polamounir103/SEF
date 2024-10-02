import React, { useEffect, useState } from "react";
import "./ArticlesTable.css";
import { useDispatch, useSelector } from "react-redux";
import { getArticles } from "../../../redux/slice/ArticlesSlice";

const articles = [
  {
    title: "Here's the article title",
    category: "Tech",
    status: "Published",
    date: "Monday, June 5th",
    time: "12:30 PM",
  },
  {
    title: "Here's the article title",
    category: "Education",
    status: "Published",
    date: "Monday, June 5th",
    time: "12:30 PM",
  },
  {
    title: "Here's the article title",
    category: "Business",
    status: "Draft",
    date: "Monday, June 5th",
    time: "12:30 PM",
  },
  {
    title: "Here's the article title",
    category: "Tech",
    status: "Draft",
    date: "Monday, June 5th",
    time: "12:30 PM",
  },
  {
    title: "Here's the article title",
    category: "Education",
    status: "Draft",
    date: "Monday, June 5th",
    time: "12:30 PM",
  },
  {
    title: "Here's the article title",
    category: "Business",
    status: "Draft",
    date: "Monday, June 5th",
    time: "12:30 PM",
  },
];

const ArticlesTable = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getArticles());
  }, [dispatch]);
  const articlesList = useSelector((state) => state.articles.filteredarticles);
  console.log(articlesList);
  const filteredArticles = articlesList.filter((article) =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 className="text-light">Articles</h2>
        <div className="input-group w-25">
          <input
            type="text"
            className="form-control"
            placeholder="Search In Jobs"
            value={searchTerm}
            name="searchInput"
            onChange={(e) => {
              setSearchTerm(e.target.value);
              console.log(searchTerm);
            }}
          />
          <button className="btn btn-outline-secondary" type="button">
            <i className="fa fa-search"></i>
          </button>
        </div>
      </div>
      <table className="table table-dark table-hover">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Category</th>
            <th scope="col">Status</th>
            <th scope="col">Date & Time</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredArticles.map((article, index) => (
            <tr key={index} className="align-middle">
              <td>{article.title}</td>
              <td>{article.category}</td>
              <td>
                <div className="d-flexjustify-content-center align-items-center w-100 h-100 ">
                  <span
                    className={`badge w-75 py-2 ${
                      article.status === "Published"
                        ? "bg-warning"
                        : "bg-secondary"
                    }`}
                  >
                    {article.status}
                  </span>
                </div>
              </td>
              <td>
                {article.date} <br /> {article.time}
              </td>
              <td>
                <button className="btn btn-outline-warning btn-sm me-2">
                  <i className="fa fa-pencil"></i>
                </button>
                <button className="btn btn-outline-danger btn-sm">
                  <i className="fa fa-trash"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="d-flex justify-content-center">
        <nav>
          <ul className="pagination">
            <li className="page-item">
              <button className="page-link">&lt;</button>
            </li>
            <li className="page-item">
              <button className="page-link">1</button>
            </li>
            <li className="page-item">
              <button className="page-link">2</button>
            </li>
            <li className="page-item">
              <button className="page-link">3</button>
            </li>
            <li className="page-item">
              <button className="page-link">...</button>
            </li>
            <li className="page-item">
              <button className="page-link">&gt;</button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default ArticlesTable;
