import { React } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { BsPencilSquare } from "react-icons/bs";
// import { PiMicrosoftPowerpointLogoDuotone } from "react-icons/pi";
import { Link } from "react-router-dom";
import useWindowWidth from "../../../hooks/useWindowWidth ";

const ArticleData = (props) => {
  const screenWidth = useWindowWidth();

  return (
    <>
      {screenWidth.screenType !== "larg" && (
        <div className="d-flex flex-column gap-3 bg-black p-4 rounded-3">
          <div className="d-flex justify-content-between">
            <h3 className="admin-table-item-title">Title</h3>
            <p
              className={
                props.status === "published"
                  ? "status-btn-published rounded-4 "
                  : "status-btn-draft rounded-4"
              }
            >
              {props.status}
            </p>
          </div>
          <div>
            <h5 className="admin-table-card-title">{props.title}</h5>
          </div>
          <div className="d-flex justify-content-between">
            <div>
              <h3>Category</h3>
              <p>{props.category}</p>
            </div>
            <div>
              <h3>Date & Time</h3>
              <div>
                <p>{props.date}</p>
                <p>{props.time}</p>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-end fs-2 gap-3 ">
            <Link className="text-warning">
              <BsPencilSquare />
            </Link>
            <Link className="text-warning">
              <FaTrashAlt />
            </Link>
          </div>
        </div>
      )}
      <div className="my-2 pt-2 article-table-article-container text-white d-none d-lg-grid">
        <h4 className="mt-3 admin-table-item-title">{props.title}</h4>
        <h4 className="mt-3">{props.category}</h4>
        <div className="mt-3">
          <button
            className={
              props.status === "published"
                ? "status-btn-published rounded-4 "
                : "status-btn-draft rounded-4"
            }
          >
            {props.status}
          </button>
        </div>
        <div className="">
          <div className=" ">
            <div className="col-sm-8 ">
              <p>{props.date}</p>
              <p>{props.time}</p>
            </div>
          </div>
        </div>
        <div className="icon col-sm-4 mt-4 d-flex text-warning gap-4">
          <Link className="text-warning">
            <BsPencilSquare />
          </Link>
          <Link className="text-warning">
            <FaTrashAlt />
          </Link>
        </div>
      </div>
    </>
  );
};
export default ArticleData;
