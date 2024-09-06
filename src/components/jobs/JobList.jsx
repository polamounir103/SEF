import React from "react";
import { CgTimer } from "react-icons/cg";
import { CiLocationOn } from "react-icons/ci";
import { ImMenu } from "react-icons/im";
import { Link } from "react-router-dom";

const JobList = ({ jobs }) => {
  return (
    <div className="content-bottom-right">
      {jobs.map((ele, index) => (
        <div className="job" key={index}>
          <div className="job-header">
            <div className="title">
              <p>
                <ImMenu size={50} />
                IT
              </p>
              <div>
                <h2>{ele.jobName}</h2>
                <h3>{ele.location}</h3>
              </div>
            </div>
            <div className="price">
              <p>
                {ele.minPrice} EGB - {ele.maxPrice} EGB per Month
              </p>
              <p>
                <CiLocationOn
                  className="inline-block"
                  color="#b49b30"
                  size={25}
                />{" "}
                On Site
              </p>
            </div>
          </div>
          <div className="job-desc">
            <p>{ele.description}</p>
            <div className="tools">
              {ele.tools.map((tool, index) => (
                <p key={index}>{tool}</p>
              ))}
            </div>
          </div>
          <div className="job-details">
            <p>
              <CgTimer color="#474646" size={35} /> {ele.time} ago
            </p>
            <Link to={`/jobs/${ele._id}`}>
              <button>View Details</button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default JobList;
