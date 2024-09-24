import React from "react";
import { Pagination } from "react-bootstrap";
import { FaEdit, FaSearch, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdOutlineDeleteOutline } from "react-icons/md";
import "./jobs.css";
import useWindowWidth from "../../../hooks/useWindowWidth ";
import { BsPencilSquare } from "react-icons/bs";
import Title from "../articlesComponents/title";

const Jobs = () => {
  const screenWidth = useWindowWidth();
  const jobsInfo = [
    {
      company: "Here's the company name",
      position: "Here's the position",
      status: "open",
      postedAt: "Monday,June 5th 12:30 PM",
      application: "20",
    },
    {
      company: "Here's the company name",
      position: "Here's the position",
      status: "open",
      postedAt: "Monday,June 5th  12:30 PM",
      application: "20",
    },
    {
      company: "Here's the company name",
      position: "Here's the position",
      status: "closed",
      postedAt: "Monday,June 5th 12:30 PM",
      application: "20",
    },
    {
      company: "Here's the company name",
      position: "Here's the position",
      status: "closed",
      postedAt: "Monday,June 5th 12:30 PM",
      application: "20",
    },
    {
      company: "Here's the company name",
      position: "Here's the position",
      status: "closed",
      postedAt: "Monday,June 5th 12:30 PM",
      application: "20",
    },
    {
      company: "Here's the company name",
      position: "Here's the position",
      status: "closed",
      postedAt: "Monday,June 5th 12:30 PM",
      application: "20",
    },
  ];
  return (
    <div className="">
      <div className=" px-0">
        <div className="job d-none d-lg-block">
          <div className="btn-create-job d-flex justify-content-end ">
            <Link to="/adminportal/add-new-job" className="btn btn-warning">
              CREATE NEW JOB
            </Link>
          </div>

          <div className="job-title d-flex justify-content-between align-items-center mt-4">
            <div>
              <h3 className="text-white table-title">Jobs</h3>
            </div>
            <div className="search">
              <input
                className="search-input"
                type="text"
                placeholder="Search In Jobs"
              />
              <i className="bi bi-search search-icon"></i>
            </div>
          </div>

          <div className="jobs-table-header text-white mt-2 ">
            <div className="">Company</div>
            <div className="">Position</div>
            <div className="">Status</div>
            <div className="">Posted At</div>
            <div className="">#Applications</div>
            <div className=""></div>
          </div>
          <div className="d-flex flex-column gap-2 mt-3">
            {jobsInfo.map((item, index) => (
              <div className="jobs-table-item text-white " key={index}>
                <div className="">{item.company}</div>
                <div className="">{item.position}</div>
                <div className="">
                  <span
                    className={
                      item.status === "open"
                        ? "job-status-open"
                        : "job-status-closed"
                    }
                  >
                    {item.status}
                  </span>
                </div>
                <div className="">{item.postedAt}</div>
                <div className="">{item.application}</div>
                <div className="">
                  <FaEdit className="table-icon" />
                  <MdOutlineDeleteOutline className="table-icon" />
                </div>
              </div>
            ))}
          </div>
        </div>
        {screenWidth.screenType !== "larg" && (
          <>
            <div className="d-flex justify-content-between align-items-center mt-4">
              <Title title="All jobs" />
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
            <div className="d-flex justify-content-center mt-4 flex-column gap-4">
              {jobsInfo.map((item, index) => (
                <div className="d-flex flex-column gap-3 bg-black p-4 rounded-3">
                  <div className="d-flex  justify-content-between">
                    <h3>company</h3>
                    <p
                      className={
                        item.status === "open"
                          ? "status-btn-published rounded-4 "
                          : "status-btn-draft rounded-4"
                      }
                    >
                      {item.status}
                    </p>
                  </div>
                  <div>
                    <h3>{item.company}</h3>
                  </div>
                  <div className="d-flex  justify-content-between">
                    <div>
                      <h3>position</h3>
                      <p>{item.position}</p>
                    </div>
                    <div>
                      <h3>Posted At</h3>
                      <div>
                        <p>{item.postedAt}</p>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex justify-content-end  fs-2 gap-3 ">
                    <Link className="text-warning">
                      <BsPencilSquare />
                    </Link>
                    <Link className="text-warning">
                      <FaTrashAlt />
                    </Link>
                  </div>
                </div>
              ))}
              <div>
                <div className="d-flex justify-content-center ">
                  <Link
                    to="/adminportal/add-new-job"
                    className="btn btn-warning px-5"
                  >
                    CREATE NEW JOB
                  </Link>
                </div>
              </div>
            </div>
          </>
        )}

        <Pagination className="pagination pt-3 px-5 py-3 mx-5">
          <i className="bi bi-skip-end-circle"></i>
          <span className="text-white">&nbsp;....</span>
          <span className="text-white">3&nbsp;</span>
          <span className="text-white">2&nbsp;</span>
          <span className="text-white">1&nbsp;</span>
          <i className="bi bi-skip-start-circle"></i>
        </Pagination>
      </div>
    </div>
  );
};

export default Jobs;
