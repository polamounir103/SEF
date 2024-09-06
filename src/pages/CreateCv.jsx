import React, { useRef, useState } from "react";
import CreateCVHeader from "../components/createCv/CreateCVHeader";
import "../assets/styles/cvSteps.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import CvMainInformation from "../components/createCv/CvMainInformation";
import CvAboutForm from "../components/createCv/CvAboutForm";
import CvSkillsForm from "../components/createCv/CvSkillsForm";
import CvTemplet from "../components/createCv/CvTemplet";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

function CreateCv() {
  // Array of steps
  const steps = [
    { id: 1, name: "MAIN INFORMATION" },
    { id: 2, name: "SUMMARY" },
    { id: 3, name: "SKILLS" },
    { id: 4, name: "EXPERIENCE" },
    { id: 5, name: "EDUCATION" },
    { id: 6, name: "HONORS AND AWARDS" },
    { id: 7, name: "HOBBIES AND INTERESTS" },
    { id: 8, name: "LINKS" },
  ];

  const [activeSteps, setActiveSteps] = useState([1]);
  const stepRefs = useRef([]);
  const cvTempletRef = useRef(); // Create a ref for CvTemplet
  const navigate = useNavigate();

  const handleContinue = () => {
    const nextStep = Math.max(...activeSteps) + 1;
    if (nextStep <= steps.length) {
      setActiveSteps((prevSteps) => [...prevSteps, nextStep]);
      stepRefs.current[nextStep - 1]?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }

    navigate(`/create-cv/${activeSteps.length + 1}`);
  };

  const handleBack = () => {
    const prevStep = Math.max(...activeSteps);
    if (prevStep > 1) {
      setActiveSteps((prevSteps) =>
        prevSteps.filter((step) => step !== prevStep)
      );
      stepRefs.current[prevStep - 2]?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
      navigate(`/create-cv/${activeSteps.length - 1}`);
    }
  };

  const downloadCV = () => {
    const input = cvTempletRef.current; // Access CvTemplet
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("CV.pdf"); // Save as PDF
    });
  };

  return (
    <>
      <div>
        <CreateCVHeader />

        <div className="mt-5 w-100">
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex gap-4 w-100 cv-steps-outer-container ">
              <div
                className="d-flex gap-4 w-100 flex-nowrap cv-steps-container"
                style={{ maxWidth: "100%" }}
              >
                {steps.map((step, index) => (
                  <div
                    className="cv-tab "
                    key={step.id}
                    ref={(el) => (stepRefs.current[index] = el)}
                  >
                    <div
                      className={`cv-tab-number ${
                        activeSteps.includes(step.id) ? "active" : ""
                      }`}
                    >
                      {step.id}
                    </div>
                    <span>{step.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="cv-page-body ">
          <div className="cv-forms-container">
            <Routes>
              <Route>
                <Route path="/" element={<CvMainInformation />} />
                <Route path="/1" element={<CvMainInformation />} />
                <Route path="/2" element={<CvAboutForm />} />
                <Route path="/3" element={<CvSkillsForm />} />
                <Route path="/4" element={<CvMainInformation />} />
                <Route path="/5" element={<CvMainInformation />} />
                <Route path="/6" element={<CvMainInformation />} />
                <Route path="/7" element={<CvMainInformation />} />
                <Route path="/8" element={<CvMainInformation />} />
              </Route>
            </Routes>
          </div>

          <div className="bg-light d-xl-block d-none" ref={cvTempletRef}>
            {/* Assign the ref to CvTemplet */}
            <CvTemplet />
          </div>
        </div>

        <div className="buttons-box">
          <div className="d-flex gap-4">
            <button className="btn btn-secondary px-5" onClick={handleBack}>
              Back
            </button>
            <button className="btn btn-warning px-3" onClick={handleContinue}>
              Continue
            </button>
          </div>
          {activeSteps.length === steps.length && (
            <div>
              <button className="btn btn-warning" onClick={downloadCV}>
                Download CV
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default CreateCv;
