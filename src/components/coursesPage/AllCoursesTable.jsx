import React from 'react'
import { Link } from 'react-router-dom';

function AllCoursesTable({data}) {
  return (
    <div>
      <div className="mt-5">
        <div className="d-flex justify-content-between">
          <h3>Other Courses</h3>
          <div>SEARCH</div>
        </div>
        <div
          className=" d-grid justify-content-between align-items-center bg-black"
          style={{ gridTemplateColumns: "2fr 7fr 1fr 1fr 1fr" }}
        >
          <div></div>
          <div></div>
          <div className="text-start">Start Date</div>
          <div className="ps-5">Level</div>
          <div className=""></div>
        </div>
        <div className="d-flex flex-column ">
          {data.map(
            ({ id, title, instructor, image, startDate, lessons, level }) => (
              <div
                className=" d-grid justify-content-between align-items-center bg-black p-3"
                style={{ gridTemplateColumns: "2fr 7fr 1fr 1fr 1fr" }}
                key={id}
              >
                <div className="d-flex justify-content-center p-3">
                  <img
                    src={image}
                    className="card-img-top rounded-3"
                    alt={title}
                  />
                </div>

                <div>
                  <h5 className="mb-1">{title}</h5>
                  <div className="mb-1">
                    Instructor: <strong>{instructor}</strong>
                    <div>{lessons?.length} lessons</div>
                  </div>
                </div>
                <div className="text-center">{startDate}</div>

                <div className="text-center"> {level}</div>
                <div className="d-flex align-items-center gap-4 justify-content-center">
                  <div className="d-flex flex-column">
                    <button className="btn btn-warning text-light">
                      Enroll
                    </button>
                    <Link to={`/courses/${id}`} className="btn text-light">
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>

      {/* Pagination (Sample) */}
      <nav aria-label="Course Pagination ">
        <ul className="pagination justify-content-end">
          <li className="page-item">
            <Link className="page-link" to="#">
              1
            </Link>
          </li>
          <li className="page-item">
            <Link className="page-link" to="#">
              2
            </Link>
          </li>
          <li className="page-item">
            <Link className="page-link" to="#">
              3
            </Link>
          </li>
          <li className="page-item disabled">
            <Link className="page-link" to="#">
              ...
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default AllCoursesTable