import React, { useRef, useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css"; // Make sure to import the styles

function CvMainInformation() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const fileInputRef = useRef(null);
  const handleBrowseClick = () => {
    fileInputRef.current.click();
  };
  return (
    <div>
      <div className="">
        <div className="row mb-3">
          <div className="col">
            <label className="form-label" htmlFor="firstName">
              First Name
            </label>
            <input
              className="form-control"
              id="firstName"
              type="text"
              value="Hani"
              readOnly
            />
          </div>
          <div className="col">
            <label className="form-label" htmlFor="lastName">
              Last Name
            </label>
            <input
              className="form-control"
              id="lastName"
              type="text"
              value="Husamuddin"
              readOnly
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col">
            <label className="form-label" htmlFor="profession">
              Profession
            </label>
            <input
              className="form-control"
              id="profession"
              type="text"
              value="Frontend Developer"
              readOnly
            />
          </div>
          <div className="col">
            <label className="form-label" htmlFor="country">
              Country
            </label>
            <input className="form-control" id="country" type="text" />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-3">
            <label className="form-label" htmlFor="city">
              City
            </label>
            <input className="form-control" id="city" type="text" />
          </div>
          <div className="col-9">
            <label className="form-label" htmlFor="mobileNumber">
              Mobile Number
            </label>
            <PhoneInput
              international
              countryCallingCodeEditable={false}
              defaultCountry="EG"
              value={phoneNumber}
              onChange={setPhoneNumber}
              id="mobileNumber"
              className="bg-dange"
            />
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input
            className="form-control"
            id="email"
            type="email"
            value="hani.husam@gmail.com"
            readOnly
          />
        </div>
        <div className="cv-upload-logo-container mt-3">
          <span className="details ">Personal Photo</span>
          <div className="upload-container">
            <div className="upload-box">
              <div className="upload-icon">
                <i className="fa-solid fa-cloud-arrow-up"></i>
              </div>
              <p className="upload-text">
                Drag & drop files or
                <span className="browse" onClick={handleBrowseClick}>
                  Browse
                </span>
              </p>
              <p className="supported-formats">
                Supported formats: JPEG, PNG, GIF, MP4, PDF, PSD, AI, Word, PPT
              </p>
              <input
                type="file"
                ref={fileInputRef}
                id="fileInput"
                name="file"
                accept=".jpg,.png,.gif,.mp4,.ppt, .pdf, .psd, .ai, .doc, .docx"
                required
                style={{ display: "none" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CvMainInformation;
