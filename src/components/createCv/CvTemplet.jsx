import React from "react";
import "../../assets/styles/cvTemplet.css";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { FiExternalLink } from "react-icons/fi";
import CvMainBody from "./CvMainBody";
function CvTemplet() {
  return (
    <div className=" h-100 CVTEMPLET">
      <div className="text-light h-100 left-part">
        {/* -----------Nour hessain----------------- */}
        <div className="cv-template-info">
          <div className="cv-temlate-image ">
            <img src="" alt="" />
          </div>
          <div className="cv-temlate-name  mt-2 ms-1 ">
            <p className="h1 fs-4 fw-bold">Hani Husamuddin</p>
            <p className="fs-6 text-secondary">Frontend Developer</p>
          </div>
          <div className="d-flex flex-column gap-1 cv-main-info-box">
            <p className="cv-main-info">SuraKarta, December 2,1994</p>
            <p className="cv-main-info">+20298765432</p>
            <p className="cv-main-info">hani.hosam@gmail.com</p>
            <p className="cv-main-info">Cairo, Egypt</p>
          </div>
        </div>
        {/* -----------Sawsan----------------- */}
        <div>
          <div className="skills ">
            <div className="skills-title">
              <h4 className="mt-2">Skills</h4>
            </div>
            <div className="">
              <ul class="skills-list">
                <li>HTML and CSS</li>
                <li>
                  Scripting language: Javascript, Typescript, Python, Java
                </li>
                <li>
                  Framework/Library: Django, React, Next, Bootstrap,
                  TailwindCSS, etc
                </li>
                <li>
                  Understanding UI Desigh; Visual Hierarchy, Design System, etc
                </li>
              </ul>
            </div>
          </div>

          <div className="honor mt-3">
            <div className="honor-title ">
              <h4>Honor & Award</h4>
              <div className="honor-subtitle honor-item ps-3">
                <h5 className="d-flex justify-content-between honor-item-title">
                  <span className="">Best Geaduated</span>
                  <span className="">2019</span>
                </h5>
                <p className="mt-2">
                  Included in one of the award recipients of the best graduate
                  students in the IV graduation period of UPN "Veteran"
                  Yogyakarta
                </p>
              </div>
            </div>
          </div>

          <div className="hobbies mt-3">
            <div className="hobbies-title">
              <h5 className="">Hobbies & Interest</h5>
            </div>
            <ul className="">
              <li>Video Games</li>
              <li>Movies</li>
              <li>Books</li>
            </ul>
          </div>

          <div className="links">
            <h4 className="">Links and Credentials</h4>

            <div className="links-box ps-3 ">
              <p className="d-flex gap-3">
                <FaLinkedin />
                <span>Linkedin</span>
              </p>
              <p className="d-flex gap-3">
                <FaGithub />
                <span>Github</span>
              </p>
              <p className="d-flex gap-3">
                <FiExternalLink /> <span>website</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className=" text-black">
        {/* <div className=" mt-5" >
          <div className="section-content">
            <h2 >About</h2>
            <p>
              I have a background in information technology, with a focus on
              frontend development and UI design. I am the type of person who
              seizes every opportunity to learn something new. That is why I
              enjoy challenges. From there, I'm under pressure to learn quickly
              and gain a lot of new experience.
            </p>
          </div>

          <div className="section-content">
            <h2 >Education</h2>
            <div >
              <div ></div>
              <div className="content">
                <p>
                  <strong>2015 - 2019</strong>
                </p>
                <p>
                  <strong>
                    Informatics, Universitas Pembangunan Nasional "Veteran"
                    Yogyakarta
                  </strong>
                </p>
                <p>Bachelor of Computer Science, Artificial Intelligence</p>
                <p>
                  I graduated in July 2019 with a GPA of 3.63. One of the award
                  recipients for the best graduate of the university at the
                  time. In my thesis, I looked into how Natural Language
                  Processing (NLP) was used in Telegram Bot. For the NLP
                  approach method, I used Neural Network (Deep Learning) and
                  Text Mining.
                </p>
              </div>
            </div>
          </div>

          <div className="section-content">
            <h2 >Experience</h2>
            <div >
              <img
                src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-Hh5RPsKhtBPsWCFSiEKnUJ6x/user-8qgiVpCV0U0b7zDjfFInHgjl/img-6chMZivEoBMbPzQCWNnocz3L.png?st=2024-09-06T12%3A43%3A14Z&amp;se=2024-09-06T14%3A43%3A14Z&amp;sp=r&amp;sv=2024-08-04&amp;sr=b&amp;rscd=inline&amp;rsct=image/png&amp;skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&amp;sktid=a48cca56-e6da-484e-a814-9c849652bcb3&amp;skt=2024-09-05T22%3A12%3A46Z&amp;ske=2024-09-06T22%3A12%3A46Z&amp;sks=b&amp;skv=2024-08-04&amp;sig=MokDjslF1I47ObixadJy8QlOAGLUXhO5/Psi/bt7cLo%3D"
                alt="Upwork logo"
                style={{
                    width:"20px"
                }}
                
              />
              <div className="content">
                <p>
                  <strong>Upwork</strong>
                </p>
                <p>Frontend Developer | Nov 2019 - present</p>
                <p>
                  Upwork is an American freelancing platform where enterprises
                  and individuals connect in order to conduct business. I am
                  currently accepting remote or freelance Web Development and UI
                  Design work from this platform.
                </p>
              </div>
            </div>
          </div>
        </div> */}
        <CvMainBody />
      </div>
    </div>
  );
}

export default CvTemplet;
