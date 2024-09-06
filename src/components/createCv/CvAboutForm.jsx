import React from "react";

function CvAboutForm() {
  return (
    <div className="">
      <div className="row">
        <div className="col">
          <label className="form-label">About</label>
          <textarea
            className=""
            id="about"
            style={{
              minHeight: "200px",
              maxHeight: "400px",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default CvAboutForm;
