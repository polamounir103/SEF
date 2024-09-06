import React, { useState } from "react";

function CvSkillsForm() {
  const [skills, setSkills] = useState([""]);

  const handleInputChange = (index, event) => {
    const newSkills = [...skills];
    newSkills[index] = event.target.value;
    setSkills(newSkills);
  };

  const handleAddSkill = () => {
    setSkills([...skills, ""]);
  };

  const handleRemoveSkill = (index) => {
    const newSkills = skills.filter((_, i) => i !== index);
    setSkills(newSkills);
  };

  return (
    <div>
      <h4>Skills</h4>
      <div className="d-flex cv-skill-item-container ">
        <div className=" flex-grow-1">
          {skills.map((skill, index) => (
            <div key={index} className="cv-skill-item flex-grow-1">
              <input
                type="text"
                value={skill}
                onChange={(e) => handleInputChange(index, e)}
              />
              <div className="cv-skill-item-icon-box">
                {skills.length > 1 && (
                  <i
                    className="fas fa-trash-alt"
                    onClick={() => handleRemoveSkill(index)}
                  ></i>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="d-flex align-items-end">
          <div onClick={handleAddSkill} className="pb-2">
            <i class="fas fa-plus-circle"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CvSkillsForm;
