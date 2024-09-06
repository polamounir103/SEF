import React, { useEffect, useState } from "react";
import "./Jobs.css";
import { IoMdSearch } from "react-icons/io";
import { CgTimer } from "react-icons/cg";
import { CiLocationOn } from "react-icons/ci";
import { ImMenu } from "react-icons/im";
import { RiMenu5Fill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import {
  filterByJobType,
  filterByLevel,
  filterByLocation,
  filterBySalaryRange,
  filterBySearch,
  filterejobs,
} from "../../redux/slice/JobsSlice";
import data from "../../DB/jobs.json";
import Filters from "./Filters";
import JobList from "./JobList";
import { Route, Routes } from "react-router-dom";
import JobDetail from "./JobDetail";
import JobApplication from "./JobApplication";

const Jobs = () => {
  const dispatch = useDispatch();
  const [location, setLocation] = useState("All");
  const [jobtype, setJobtype] = useState("");
  const [level, setLevel] = useState("");
  const [salaryrange, setSalaryrange] = useState(0);
  const [inputsearch, setInputsearch] = useState("");
  const [jobs, setJobs] = useState([]);
  const [checkedJobType, setCheckedJobType] = useState({
    fulltime: false,
    parttime: false,
    remote: false,
  });
  const [checkedLevel, setCheckedLevel] = useState({
    entrylevel: false,
    intermediate: false,
    expert: false,
  });
  const [checkedSalaryRange, setCheckedSalaryRange] = useState({
    under4000: false,
    between4000and10000: false,
    more10000: false,
  });
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (data) {
      setJobs(data);
    }
  }, [data]);

  const filteredjobs = useSelector(filterejobs);
  const currentjobs = filteredjobs.length === 0 ? jobs : filteredjobs;
  const locations = ["All", ...new Set(jobs.map((jop) => jop.location))];

  useEffect(() => {
    dispatch(filterByJobType({ jobs, jobType: jobtype }));
  }, [dispatch, jobtype, jobs]);

  useEffect(() => {
    dispatch(filterByLevel({ jobs, level }));
  }, [dispatch, level, jobs]);

  useEffect(() => {
    dispatch(filterBySalaryRange({ jobs, salaryRange: salaryrange }));
  }, [dispatch, salaryrange, jobs]);

  useEffect(() => {
    dispatch(filterByLocation({ jobs, location }));
  }, [dispatch, location, jobs]);

  const resetFilter = () => {
    setInputsearch("");
    setLocation("All");
    setJobtype("");
    setLevel("");
    setSalaryrange(0);
    setCheckedJobType({
      fulltime: false,
      parttime: false,
      remote: false,
    });
    setCheckedLevel({
      entrylevel: false,
      intermediate: false,
      expert: false,
    });
    setCheckedSalaryRange({
      under4000: false,
      between4000and10000: false,
      more10000: false,
    });
  };

  return (
    <section className="jobs">
      <div className="jobs-container">
        <h2>jobs</h2>
        <h3>6th June 2023</h3>
        <div className="content">
          <div className="content-top">
            <div className="content-top-left">
              <h2>Looking for a job?</h2>
              <p>
                Here you can find your best match between 1000s of updated and
                available positions.
              </p>
            </div>
            <div className="content-top-right">
              <i>
                <IoMdSearch color="#bf9b30" size={35} />
              </i>
              <input
                type="text"
                value={inputsearch}
                onChange={(e) => setInputsearch(e.target.value)}
                placeholder="Search for a job"
              />
              <button
                onClick={() =>
                  dispatch(filterBySearch({ jobs, search: inputsearch }))
                }
              >
                Search
              </button>
            </div>
            <div className="hide">
              <button
                onClick={() =>
                  dispatch(filterBySearch({ jobs, search: inputsearch }))
                }
              >
                Search
              </button>
              <button onClick={() => setActive(!active)}>
                <RiMenu5Fill size={40} />
              </button>
            </div>
          </div>
          <div className="content-bottom">
            <Filters
              location={location}
              setLocation={setLocation}
              jobtype={jobtype}
              setJobtype={setJobtype}
              level={level}
              setLevel={setLevel}
              salaryrange={salaryrange}
              setSalaryrange={setSalaryrange}
              checkedJobType={checkedJobType}
              setCheckedJobType={setCheckedJobType}
              checkedLevel={checkedLevel}
              setCheckedLevel={setCheckedLevel}
              checkedSalaryRange={checkedSalaryRange}
              setCheckedSalaryRange={setCheckedSalaryRange}
              resetFilter={resetFilter}
              active={active}
              setActive={setActive}
              locations={locations}
            />
            <Routes>
              <Route path="/" element={<JobList jobs={currentjobs} />} />

              <Route path="/:id" element={<JobDetail jobs={currentjobs} />} />
              <Route
                path="/application/:id"
                element={<JobApplication jobs={currentjobs} />}
              />
            </Routes>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Jobs;
