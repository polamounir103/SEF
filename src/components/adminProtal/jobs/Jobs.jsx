// import React from 'react';
// import { Table } from 'react-bootstrap';
// import Pagination from 'react-bootstrap/Pagination';
// import Button from 'react-bootstrap/Button';


// const jopsInfo = [{ company: "Here's the company name", position: "Here's the position", status: "Open", postedAt: "Monday,June 5th 12:30 PM", application: "20" },
// { company: "Here's the company name", position: "Here's the position", status: "Open", postedAt: "Monday,June 5th  12:30 PM", application: "20" },
// { company: "Here's the company name", position: "Here's the position", status: "Closed", postedAt: "Monday,June 5th 12:30 PM", application: "20" },
// { company: "Here's the company name", position: "Here's the position", status: "Closed", postedAt: "Monday,June 5th 12:30 PM", application: "20" },
// { company: "Here's the company name", position: "Here's the position", status: "Closed", postedAt: "Monday,June 5th 12:30 PM", application: "20" },
// { company: "Here's the company name", position: "Here's the position", status: "Closed", postedAt: "Monday,June 5th 12:30 PM", application: "20" }
// ]

// const Jobs = () => {
//     return (
//       <div class="">
//         <div class=" px-0">
//           <div className="job">
//             <div className="btn-create-job">
//               <Button className="create-new-job-btn">CREATE NEW JOB</Button>
//             </div>

//             <div className="job-title">
//               <div>
//                 <h3 class="text-white">Jobs</h3>
//                 <p class="line"></p>
//               </div>
//               <div className="search">
//                 <input
//                   className="search-input"
//                   type="text"
//                   placeholder="Search In Jobs"
//                 ></input>
//                 <i className="search-icon" class="bi bi-search"></i>
//               </div>
//             </div>

//             <div>
//               <div class="table">
//                 <thead>
//                   <tr>
//                     <th class=" col mx-4  text-white">Company</th>
//                     <th class=" col  mx-5 text-white">Position</th>
//                     <th class=" col  mx-5 text-white">Status</th>
//                     <th class=" col  mx-5 text-white">Posted At</th>
//                     <th class=" col  mx-5 text-white">#Applications</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {jopsInfo.map((item) => {
//                     return (
//                       <tr>
//                         <td class="mx-0">{item.company}</td>
//                         <td class="mx-0">{item.position}</td>
//                         <td class="mx-0">
//                           <span className="open">{item.status}</span>
//                         </td>
//                         <td class="mx-0">{item.postedAt}</td>
//                         <td class="mx-0">{item.application}</td>
//                         <td class="">
//                           <i class="bi bi-pencil-square mx-2"></i>
//                           <i class="bi bi-trash"></i>
//                         </td>
//                       </tr>
//                     );
//                   })}
//                 </tbody>
//               </div>
//             </div>
//           </div>
//           <Pagination className="pagination pt-3 px-5 py-3 mx-5">
//             <i class="bi bi-skip-end-circle"></i>
//             <span class="text-white">&nbsp;....</span>
//             <span class="text-white">3&nbsp;</span>
//             <span class="text-white"> 2&nbsp;</span>
//             <span class="text-white">1&nbsp;</span>
//             <i class="bi bi-skip-start-circle"></i>
//           </Pagination>
//         </div>
//       </div>
//     );
// }

// export default Jobs;

import React from "react";
import { Pagination } from "react-bootstrap";
// import "bootstrap-icons/font/bootstrap-icons.css"; // Ensure bootstrap icons are included
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdOutlineDeleteOutline } from "react-icons/md";
import "./jobs.css";

const Jobs = () => {
  const jobsInfo = [
    {
      company: "Here's the company name",
      position: "Here's the position",
      status: "Open",
      postedAt: "Monday,June 5th 12:30 PM",
      application: "20",
    },
    {
      company: "Here's the company name",
      position: "Here's the position",
      status: "Open",
      postedAt: "Monday,June 5th  12:30 PM",
      application: "20",
    },
    {
      company: "Here's the company name",
      position: "Here's the position",
      status: "Closed",
      postedAt: "Monday,June 5th 12:30 PM",
      application: "20",
    },
    {
      company: "Here's the company name",
      position: "Here's the position",
      status: "Closed",
      postedAt: "Monday,June 5th 12:30 PM",
      application: "20",
    },
    {
      company: "Here's the company name",
      position: "Here's the position",
      status: "Closed",
      postedAt: "Monday,June 5th 12:30 PM",
      application: "20",
    },
    {
      company: "Here's the company name",
      position: "Here's the position",
      status: "Closed",
      postedAt: "Monday,June 5th 12:30 PM",
      application: "20",
    },
  ];
  return (
    <div className="">
      <div className=" px-0">
        <div className="job">
          <div className="btn-create-job d-flex justify-content-end ">
            <Link to="add-new-job" className="btn btn-warning">
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
                      item.status === "Open"
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
