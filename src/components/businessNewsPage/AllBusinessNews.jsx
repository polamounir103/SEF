import React from "react";
import { CgTimer } from "react-icons/cg";
import { FaAnglesRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/seff_logo_black.jpg";

function AllBusinessNews() {
  return (
    <section className="business-articls">
      <div className="business-container business-articls-container">
        <div className=" business-aritcle-item">
          <div className=" p-4">
            <img
              src={Logo}
              className="img-fluid business-aritcle-img"
              alt="..."
            />
          </div>
          <div className="p-4 ">
            <div className="card-body text-white">
              <span className="color">BUSINESS </span>
              <div className="hr"></div>
              <div className="d-flex media justify-content-between">
                <h2 className="card-title fs-2 mt-2">
                  HERE'S THE TITLE OF THE ARTICAL
                </h2>
                <p>
                  <CgTimer /> <span className="fs-6 ms-1">2 h ago</span>
                </p>
              </div>
              <div className="d-flex justify-content-between mt-2">
                <p className="card-text color mt-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ipsum, mollitia neque illo nulla nam ut distinctio amet
                  laudantium ratione quis expedita tempora labore hic harum,
                  fugit fugiat eligendi suscipit! Repellendus. Eveniet nam
                  adipiscius, officia dignissimos unde similique laboriosam
                  consequatur numquam quos quia provident soluta, iusto
                  similique laboriosam consequatur numquam quos quia provident
                  soluta, iusto.
                </p>
                <p className="mt-5 d-flex align-items-end ">
                  {" "}
                  <Link href="">
                    <FaAnglesRight size={35} />
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className=" business-aritcle-item">
          <div className=" p-4">
            <img
              src={Logo}
              className="img-fluid business-aritcle-img"
              alt="..."
            />
          </div>

          <div className="p-4 ">
            <div className="card-body text-white">
              <span className="color">BUSINESS </span>

              <div className="hr"></div>

              <div className="d-flex media justify-content-between">
                <h2 className="card-title fs-2 mt-2">
                  HERE'S THE TITLE OF THE ARTICAL
                </h2>
                <p>
                  <CgTimer /> <span className="fs-6 ms-1">2 h ago</span>
                </p>
              </div>

              <div className="d-flex justify-content-between mt-3">
                <p className="card-text color mt-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ipsum, mollitia neque illo nulla nam ut distinctio amet
                  laudantium ratione quis expedita tempora labore hic harum,
                  fugit fugiat eligendi suscipit! Repellendus. Eveniet nam
                  adipiscius, officia dignissimos unde similique laboriosam
                  consequatur numquam quos quia provident soluta, iusto
                  similique laboriosam consequatur numquam quos quia provident
                  soluta, iusto.
                </p>
                <p className="mt-5">
                  {" "}
                  <Link href="">
                    <FaAnglesRight size={35} />
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className=" business-aritcle-item ">
          <div className=" p-4">
            <img
              src={Logo}
              className="img-fluid business-aritcle-img"
              alt="..."
            />
          </div>

          <div className="p-4 ">
            <div className="card-body text-white">
              <span className="color">BUSINESS </span>

              <div className="hr"></div>

              <div className="d-flex media justify-content-between">
                <h2 className="card-title fs-2 mt-2">
                  HERE'S THE TITLE OF THE ARTICAL
                </h2>
                <p>
                  <CgTimer /> <span className="fs-6 ms-1">2 h ago</span>
                </p>
              </div>

              <div className="d-flex justify-content-between mt-3">
                <p className="card-text color mt-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ipsum, mollitia neque illo nulla nam ut distinctio amet
                  laudantium ratione quis expedita tempora labore hic harum,
                  fugit fugiat eligendi suscipit! Repellendus. Eveniet nam
                  adipiscius, officia dignissimos unde similique laboriosam
                  consequatur numquam quos quia provident soluta, iusto
                  similique laboriosam consequatur numquam quos quia provident
                  soluta, iusto.
                </p>
                <p className="mt-5">
                  {" "}
                  <Link href="">
                    <FaAnglesRight size={35} />
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className=" business-aritcle-item">
          <div className=" p-4">
            <img
              src={Logo}
              className="img-fluid business-aritcle-img"
              alt="..."
            />
          </div>

          <div className="p-4 ">
            <div className="card-body text-white">
              <span className="color">BUSINESS </span>

              <div className="hr"></div>

              <div className="d-flex media justify-content-between">
                <h2 className="card-title fs-2 mt-2">
                  HERE'S THE TITLE OF THE ARTICAL
                </h2>
                <p>
                  <CgTimer /> <span className="fs-6 ms-1">2 h ago</span>
                </p>
              </div>

              <div className="d-flex justify-content-between mt-3">
                <p className="card-text color mt-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ipsum, mollitia neque illo nulla nam ut distinctio amet
                  laudantium ratione quis expedita tempora labore hic harum,
                  fugit fugiat eligendi suscipit! Repellendus. Eveniet nam
                  adipiscius, officia dignissimos unde similique laboriosam
                  consequatur numquam quos quia provident soluta, iusto
                  similique laboriosam consequatur numquam quos quia provident
                  soluta, iusto.
                </p>
                <p className="mt-5">
                  {" "}
                  <Link href="">
                    <FaAnglesRight size={35} />
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AllBusinessNews;
