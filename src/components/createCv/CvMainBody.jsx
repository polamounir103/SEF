import React from "react";

const CvMainBody = () => {
  return (
    <div className="  p-4">
      <div className="section-content">
        <h3>About</h3>
        <p className="">
          I have a background in information technology, with a focus on
          frontend development and UI design. I am the type of person who seizes
          every opportunity to learn something new. That is why I enjoy
          challenges. From there, I'm under pressure to learn quickly and gain a
          lot of new experience.
        </p>
      </div>

      <div className="section-content">
        <h3>Education</h3>
        <div>
          <div></div>
          <div className="content d-flex gap-4">
            <div className="flex-grow-1 main-body-category-start ">
              <strong>2015 - 2019</strong>
            </div>
            <div>
              <p>
                <strong>
                  Informatics, Universitas Pembangunan Nasional "Veteran"
                  Yogyakarta
                </strong>
              </p>
              <p>Bachelor of Computer Science, Artificial Intelligence</p>
              <p>
                I graduated in July 2019 with a GPA of 3.63. One of the award
                recipients for the best graduate of the university at the time.
                In my thesis, I looked into how Natural Language Processing
                (NLP) was used in Telegram Bot. For the NLP approach method, I
                used Neural Network (Deep Learning) and Text Mining.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="section-content">
        <h3>Experience</h3>
        <div className="d-flex gap-4">
          <div className="main-body-category-start text-center ">
            <img
              src="https://w7.pngwing.com/pngs/80/704/png-transparent-upwork-hd-logo.png "
              alt="Upwork logo"
              style={{
                width: "60px",
              }}
            />
          </div>
          <div className="content d-flex flex-column gap-">
            <p>
              <strong>Upwork</strong>
            </p>
            <p>Frontend Developer | Nov 2019 - present</p>
            <p>
              Upwork is an American freelancing platform where enterprises and
              individuals connect in order to conduct business. I am currently
              accepting remote or freelance Web Development and UI Design work
              from this platform.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CvMainBody;
