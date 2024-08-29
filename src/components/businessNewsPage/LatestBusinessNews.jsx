import React from "react";
import "../../assets/styles/Business.css";
import { CgTimer } from "react-icons/cg";
import "bootstrap/dist/css/bootstrap.min.css";

import { Link } from "react-router-dom";
import { FaAnglesRight } from "react-icons/fa6";
const LatestBusinessNews = () => {
  return (
    <>
      <section className="latest-business">
        <div className="business-container">
          <h2>latest business news</h2>
          <div className="content">
            <div className="left">
              <div className="card-body">
                <h4 className="title">business</h4>
                <div className="details">
                  <h2>here's the first article</h2>
                  <p>
                    <CgTimer
                      color="#474646"
                      size={35}
                      className="inline-block mr-2"
                    />{" "}
                    2 h ago
                  </p>
                </div>
                <p className="desc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
            <div className="rigth">
              <div className="card-body">
                <h4 className="title">business</h4>
                <div className="details">
                  <h2>here's the second article</h2>
                  <p>
                    <CgTimer
                      color="#474646"
                      size={35}
                      className="inline-block mr-2"
                    />{" "}
                    3 h ago
                  </p>
                </div>
                <p className="desc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div className="card-body">
                <h4 className="title">business</h4>
                <div className="details">
                  <h2>here's the third article</h2>
                  <p>
                    <CgTimer
                      color="#474646"
                      size={35}
                      className="inline-block mr-2"
                    />{" "}
                    3 h ago
                  </p>
                </div>
                <p className="desc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LatestBusinessNews;
