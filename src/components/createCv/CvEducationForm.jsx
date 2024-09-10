import React from "react";

function CvEducationForm() {
  return (
    <div className="cv-education-form">
      <h3>Education</h3>
      <form className="d-flex mt-2">
        <div className="education-field w-100 ">
          <div className="orgainzation_name  w-100 ">
            <p>Orgainzation Name</p>
            <input
              className="form-control rounded-1 "
              type="text"
              name=""
              id=""
              placeholder="Movies"
            />
          </div>
          <div className="degree w-100">
            <p> Degree</p>
            <input
              className="form-control  rounded-1"
              type="text"
              name=""
              id=""
              placeholder="Movies"
            />
          </div>
          <div className="From_To w-100">
            <div className="d-flex gap-2 ">
              <div className=" flex-grow-1">
                <p className="d-flex">From</p>
                <input
                  className=" rounded-1 "
                  type="text"
                  placeholder="Movies"
                />
              </div>
              <div className=" flex-grow-1">
                <p className="d-flex">To</p>
                <input
                  className="  rounded-1  ms-0"
                  type="text"
                  placeholder="Movies"
                />
              </div>
            </div>
          </div>
          <div className="description w-100">
            <p className="w-50">Description</p>
            <textarea className=" rounded-1"></textarea>
          </div>
        </div>
      </form>
      <div className="d-flex align-items-end  justify-content-end gap-3">
        <div className="pb-2">
          <i className="fas fa-trash-alt"></i>
        </div>
        <div className="pb-2">
          <i className="fas fa-plus-circle"></i>
        </div>
      </div>
    </div>
  );
}

export default CvEducationForm;
