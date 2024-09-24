import React from "react";
import "./user.css";
import TableRow from "./TableRow";
import { MdSearch } from "react-icons/md";
import TableCard from "./TableCard";
import Title from "../../articlesComponents/title";
import { FaSearch } from "react-icons/fa";

const UserStudentTable = () => {
  const data = [
    {
      id: 1,
      name: "student name",
      status: "active",
      userId: "15s63df",
      role: "student",
      mail: "student@gmail.com",
    },
    {
      id: 2,
      name: "student name",
      status: "active",
      userId: "59a3df",
      role: "student",
      mail: "student@gmail.com",
    },
    {
      id: 3,
      name: "student name",
      status: "inActive",
      userId: "sa12wa3",
      role: "student",
      mail: "student@gmail.com",
    },
    {
      id: 4,
      name: "student name",
      status: "inActive",
      userId: "5aasd3",
      role: "student",
      mail: "student@gmail.com",
    },
  ];
  return (
    <div className=" text-light d-flex flex-column gap-4 mt-lg-4 ">
      <div className="d-flex flex-column align-items-end gap-4">
        <button className="btn btn-warning d-none d-lg-block">
          CREATE NEW USER
        </button>
      </div>
      <div className="d-flex justify-content-between align-items-center">
        <Title title="Students-Users" />
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

      <div>
        <div className="students-table-header d-none d-lg-grid fs-5 py-4 px-2">
          <div>Name</div>
          <div>Status</div>
          <div>user ID</div>
          <div>Role</div>
          <div>Email</div>
          <div></div>
        </div>
        <div className="d-none d-lg-flex flex-column gap-2 mt-2">
          {data.map((i) => {
            return (
              <TableRow
                name={i.name}
                status={i.status}
                userId={i.userId}
                role={i.role}
                mail={i.mail}
                id={i.id}
              />
            );
          })}
        </div>
        <div className="d-flex d-lg-none flex-column gap-2">
          {data.map((i) => {
            return (
              <TableCard
                name={i.name}
                status={i.status}
                userId={i.userId}
                role={i.role}
                mail={i.mail}
                id={i.id}
              />
            );
          })}
        </div>
      </div>
      <div className="pagination">
        <span className="next"></span>
        <span>1</span>
        <span>2</span>
        <span>3 ...</span>
        <span className="prev"></span>
      </div>
    </div>
  );
};

export default React.memo(UserStudentTable);
