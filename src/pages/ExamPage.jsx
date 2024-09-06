import React, { useState, useEffect } from "react";
import "../assets/styles/exam.css";
import useFormattedDate from "../hooks/useFormattedDate";

const ExamPage = () => {
  const [currentTime, setCurrentTime] = useState("12:30 PM");
  const [testTime, setTestTime] = useState("55:00");

  const [selectedOptions, setSelectedOptions] = useState({});

  const handleOptionChange = (questionId, option) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [questionId]: option,
    }));
  };

  useEffect(() => {
    
    const intervalId = setInterval(() => {
      // TODO : Logic to update testTime
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const handleCancel = () => {
    // TODO : Logic for cancel 
    console.log("Exam cancelled");
  };

  const handleSubmit = () => {
    // TODO :  Logic for submit
    console.log("Exam submitted");
  };

  const date = useFormattedDate();

  const questions = [
    {
      id: 1,
      type: "multiple-choice",
      questionText: "Choose the right option out of the following:",
      options: ["A: Option 1", "B: Option 2", "C: Option 3"],
      marks: 2,
      hasImage: false,
    },
    {
      id: 2,
      type: "image-question",
      questionText:
        "What is the type of function used in the following example:",
      options: ["A: Option 1", "B: Option 2", "C: Option 3"],
      marks: 3,
      hasImage: true,
      imageSrc: "path_to_image.jpg", // Replace with actual image path
    },
  ];

  return (
    <div className="exam-page px-5">
      <div className="div1">
        <h2 className="page-title">Online Exam</h2>
        <span id="date">{date}</span>
      </div>

      <div className="d-flex justify-content-between flex-column flex-lg-row">
        <div className="left flex-grow-1">
          <h3>Introduction to React JS</h3>
          <span>Lev.2, 20 marks</span>
          <h6 style={{ color: "#BF9B30" }}>
            Instructor:{" "}
            <span style={{ color: "white" }} id="instructor_onlineExam">
              xxx
            </span>
          </h6>
        </div>
        <div className="right d-flex flex-column flex-lg-row flex-grow-1 gap-2 p-0 mt-5 mt-lg-0">
          <div className="div_date bg-secondary flex-grow-1 p-3 bg-opacity-50">
            <i className="fa-solid fa-calendar-days"></i>
            <span>Date</span>
            <p>Monday, June 5th</p>
          </div>
          <div className="d-flex flex-row justify-content-between gap-2 flex-grow-1">
            <div className="div_Time flex-grow-1 bg-secondary p-3 bg-opacity-50">
              <i className="fa-regular fa-clock"></i>
              <span>Time</span>
              <p id="current_time">{currentTime}</p>
            </div>
            <div className="div_Duratio flex-grow-1 bg-secondary p-3 bg-opacity-50">
              <i className="fa-solid fa-stopwatch"></i>
              <span>Duration</span>
              <p>1 Hour</p>
            </div>
          </div>
        </div>
      </div>

      <div className="exam-timer-container">
        <h3 id="test_time text-end bg-danger">{testTime}</h3>
        <div className="line1">
          <div id="line_Time" className="line2"></div>
        </div>
      </div>
      <div className="d-flex flex-column">
        {questions.map((question) => (
          <div key={question.id} className="question-container">
            <h3>Question {question.id}</h3>
            <h1>{question.questionText}</h1>
            {question.hasImage && (
              <img src={question.imageSrc} alt={`Question ${question.id}`} />
            )}
            <div className="div_chose">
              {question.options.map((option, index) => (
                <label
                  key={index}
                  className={`choice-container ${
                    selectedOptions[question.id] === option ? "active" : ""
                  }`}
                >
                  <input
                    type="radio"
                    name={question.id}
                    value={option}
                    checked={selectedOptions[question.id] === option}
                    onChange={() => handleOptionChange(question.id, option)}
                  />
                  <span className="choice-text">{option}</span>
                </label>
              ))}
            </div>
            <div className="marks">
              <span>{question.marks} Marks</span>
            </div>
          </div>
        ))}

        <div className="inputs">
          <input
            className="cancl"
            type="button"
            value="CANCEL"
            onClick={handleCancel}
          />
          <input
            className="SUBMIT"
            type="button"
            value="SUBMIT"
            onClick={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
};

export default ExamPage;
