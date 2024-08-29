// import React from "react";
// import "./user.css";
// import TableRow from "./TableRow";

// const UserStudentTable = () => {
//   const data = [
//     {
//       id: 1,
//       name: "student name",
//       status: "active",
//       userId: "15s63df",
//       role: "student",
//       mail: "student@gmail.com",
//     },
//     {
//       id: 2,
//       name: "student name",
//       status: "active",
//       userId: "59a3df",
//       role: "student",
//       mail: "student@gmail.com",
//     },
//     {
//       id: 3,
//       name: "student name",
//       status: "inActive",
//       userId: "sa12wa3",
//       role: "student",
//       mail: "student@gmail.com",
//     },
//     {
//       id: 4,
//       name: "student name",
//       status: "inActive",
//       userId: "5aasd3",
//       role: "student",
//       mail: "student@gmail.com",
//     },
//   ];
//   return (
//     <div className="user__table">
//       <button className="user__table-btn">CREATE NEW USER</button>
//       <div className="line__serch">
//         <h1 className="line__serch-heading">User-Student</h1>
//         <div className="line__search-input">
//           <input type="text" placeholder="search in student" />
//         </div>
//       </div>
//       <table>
//         <thead>
//           <tr>
//             <th style={{ width: "30%" }}>Name</th>
//             <th>Status</th>
//             <th>user ID</th>
//             <th>Role</th>
//             <th style={{ width: "30%" }}>Email</th>
//             <th style={{ width: "10%" }}></th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((i) => {
//             return (
//               <TableRow
//                 name={i.name}
//                 status={i.status}
//                 userId={i.userId}
//                 role={i.role}
//                 mail={i.mail}
//                 id={i.id}
//               />
//             );
//           })}
//           {/* name , status , userId , role , mail */}
//         </tbody>
//       </table>
//       <div className="pagination">
//         <span className="next"></span>
//         <span>1</span>
//         <span>2</span>
//         <span>3 ...</span>
//         <span className="prev"></span>

//       </div>
//     </div>
//   );
// };

// export default React.memo(UserStudentTable);

import React from "react";
import "./user.css";
import TableRow from "./TableRow";

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
    <div className=" text-light d-flex flex-column gap-4">
      <div className="user-table-top d-flex justify-content-between align-items-end">
        <h1 className="table-title">User-Student</h1>
        <div className="d-flex flex-column  align-items-end">
          <button className="btn btn-warning d-none d-lg-block">CREATE NEW USER</button>
          <div>
            <input type="text" placeholder="search in student" />
          </div>
        </div>
      </div>

      <div>
        <div className="students-table-header">
          <div>Name</div>
          <div>Status</div>
          <div>user ID</div>
          <div>Role</div>
          <div>Email</div>
          <div></div>
        </div>
        <div className="d-flex flex-column gap-2 mt-2">
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
          {/* name , status , userId , role , mail */}
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
