import React from "react";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";

const TableRow = ({ name, status, userId, role, mail, id }) => {
  console.log("name");

  return (
    <div key={id} className="students-table-item">
      <div>{name}</div>
      {status === "active" ? (
        <div>
          <span>{status}</span>
        </div>
      ) : (
        <div>{status}</div>
      )}
      <div>{userId}</div>
      <div>{role}</div>
      <div>{mail}</div>
      <div>
        <span>
          <CiEdit className="students-icon " />
        </span>
        <span>
          <MdDelete className="students-icon " />
        </span>
      </div>
    </div>
  );
};

export default React.memo(TableRow);
