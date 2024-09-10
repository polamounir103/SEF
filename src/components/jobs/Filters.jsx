import React from "react";
import { Link } from "react-router-dom";

const Filters = ({
  location,
  setLocation,
  jobtype,
  setJobtype,
  level,
  setLevel,
  salaryrange,
  setSalaryrange,
  checkedJobType,
  setCheckedJobType,
  checkedLevel,
  setCheckedLevel,
  checkedSalaryRange,
  setCheckedSalaryRange,
  resetFilter,
  active,
  setActive,
  locations,
}) => {
  const handleCheckJobTypeChange = (event) => {
    const { name, checked } = event.target;
    setCheckedJobType((prevItems) => ({
      ...prevItems,
      [name]: checked,
    }));
  };

  const handleCheckLevelChange = (event) => {
    const { name, checked } = event.target;
    setCheckedLevel((prevItems) => ({
      ...prevItems,
      [name]: checked,
    }));
  };

  const handleCheckSalaryRangeChange = (event) => {
    const { name, checked } = event.target;
    setCheckedSalaryRange((prevItems) => ({
      ...prevItems,
      [name]: checked,
    }));
  };

  return (
    <div className={`content-bottom-left ${active && "active"}`}>
      <div className="filters-clear">
        <h4>Filters</h4>
        <button onClick={resetFilter} className="btn ">
          Clear All
        </button>
      </div>
      <div className="location">
        <h2>Location</h2>
        <select
          aria-label="Default select example"
          className="form-select"
          onChange={(e) => {
            setLocation(e.target.value);
          }}
        >
          {locations.map((loc, index) => (
            <option key={index} value={loc}>
              {loc}
            </option>
          ))}
        </select>
      </div>
      <div className="job-type">
        <h2>Job Type</h2>
        {Object.keys(checkedJobType).map((type) => (
          <div className="check-box" key={type}>
            <input
              type="checkbox"
              checked={checkedJobType[type]}
              onChange={(e) => {
                handleCheckJobTypeChange(e);
                setJobtype(
                  checkedJobType[type]
                    ? ""
                    : type.charAt(0).toUpperCase() + type.slice(1)
                );
              }}
              name={type}
              id={type}
            />
            <label htmlFor={type}>
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </label>
          </div>
        ))}
      </div>
      <div className="level">
        <h2>Level</h2>
        {Object.keys(checkedLevel).map((levelType) => (
          <div className="check-box" key={levelType}>
            <input
              type="checkbox"
              checked={checkedLevel[levelType]}
              onChange={(e) => {
                handleCheckLevelChange(e);
                setLevel(
                  checkedLevel[levelType]
                    ? ""
                    : levelType.replace(/([A-Z])/g, " $1").trim()
                );
              }}
              name={levelType}
              id={levelType}
            />
            <label htmlFor={levelType}>
              {levelType.replace(/([A-Z])/g, " $1").trim()}
            </label>
          </div>
        ))}
      </div>
      <div className="salary-range mt-5">
        <h2>Salary Range</h2>
        {Object.keys(checkedSalaryRange).map((range) => (
          <div className="check-box" key={range}>
            <input
              type="checkbox"
              checked={checkedSalaryRange[range]}
              onChange={(e) => {
                handleCheckSalaryRangeChange(e);
                setSalaryrange(
                  checkedSalaryRange[range]
                    ? 0
                    : parseInt(range.split(/(?<=\d)(?=\D)/)[0])
                );
              }}
              name={range}
              id={range}
            />
            <label htmlFor={range}>
              {range
                .replace(/([A-Z])/g, " $1")
                .replace(/_/g, " ")
                .trim()}{" "}
              EGB
            </label>
          </div>
        ))}
      </div>
      <div className="d-flex justify-content-center mt-3">
        <Link to="/create-cv" className="text-center d-block w-50">
          <button className="btn btn-warning  px-5">Create CV</button>
        </Link>
      </div>
    </div>
  );
};

export default Filters;
