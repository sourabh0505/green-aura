import React from "react";
import "./courses.css";
import Lottie from "lottie-react";
import courseAnimation1 from "./renewable-animation.json";
import courseAnimation2 from "./photovoltaic-animation.json";
import courseAnimation3 from "./vehicle-animation.json";
import courseAnimation4 from "./smart-grid-animation.json";

function Courses() {
  return (
    <div className="mainCourseContainer">
      <h1>Our Courses</h1>

      <div className="coursesContainer">
        <div className="renewableCourse">
          <Lottie
            className="animatedCourseImage"
            animationData={courseAnimation1}
          />

          <p className="courseTitle">
            <b>Fundamentals of Renewable energy Quiz</b>
          </p>
          <p className="courseContent">
          Learn about fundamentals of renewable energy. If you are a novice the this short course is a perfect stepping stone to build career in the green future...
          </p>

          <div className="courseButtons">
            <button className="learnBtn">
              <a target="_blank" href="https://drive.google.com/file/d/1YD_1_IRJw2f7HmUmlx64sH2ZlrWcTDuv/view">
                Learn More
              </a>
            </button>
            <button className="quizBtn">
              <a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLScTV7r8YyHE_RC-ovL4lmTLghMLRYdrbKjeaXx-kTNka-49bQ/viewform?vc=0&c=0&w=1&flr=0">
                Take Quiz
              </a>
            </button>
          </div>
        </div>

        {/* 2nd course */}

        <div className="photovoltaicCourse">
          <Lottie
            className="animatedCourseImage"
            animationData={courseAnimation2}
          />

          <p className="courseTitle">
            <b>Photovoltaics Systems and Smart Grids Quiz</b>
          </p>
          <p className="courseContent">
          If you have a question that how light is actually converted into electricity and what is the footprint of photovoltaic systems then this course will go through all information you need to understand about solar energy...
          </p>

          <div className="courseButtons">
            <button className="learnBtn">
              <a target="_blank" href="https://drive.google.com/file/d/1YGz3R066043jzolnplkg6ciqUOToOhpA/view">
                Learn More
              </a>
            </button>
            <button className="quizBtn">
              <a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSe3gu3lsVoNL_oAeLE9BwCtA4wmnV5KE-P4ObKSvfVQf2D7WQ/viewform?vc=0&c=0&w=1&flr=0">
                Take Quiz
              </a>
            </button>
          </div>
        </div>

        {/* 3rd course */}

        <div className="vehicleCourse">
          <Lottie
            className="animatedCourseImage"
            animationData={courseAnimation3}
          />

          <p className="courseTitle">
            <b>Introduction to Electric Vehicles Quiz</b>
          </p>
          <p className="courseContent">
          Excited about transition of automobile industry and want basic technical knowledge of electric vehicles? Check out this mini course. Tailored for beginners who are passionate about working of such marvellous machines...
          </p>

          <div className="courseButtons">
            <button className="learnBtn">
              <a target="_blank" href="https://drive.google.com/file/d/1YHvDAv3Gb1qF8YNxzT6mIYy7xXbN6cT0/view?usp=drivesdk">
                Learn More
              </a>
            </button>
            <button className="quizBtn">
              <a target="_blank" href="https://www.google.com/url?q=https://docs.google.com/forms/d/e/1FAIpQLSesXMoXPdSSE2SMaiHy4iThJjvpC9SkezIuFxIQX1C3C0mgZA/viewform?vc%3D0%26c%3D0%26w%3D1%26flr%3D0%26usp%3Dmail_form_link&source=gmail&ust=1697649062756000&usg=AOvVaw0sxc5HKrle67fuoQWLukaR">
                Take Quiz
              </a>
            </button>
          </div>
        </div>

        {/* 4th course */}

        <div className="smartGridCourse">
          <Lottie
            className="animatedCourseImage"
            animationData={courseAnimation4}
          />

          <p className="courseTitle">
            <b>Smart Grid And Smart Meter Quiz</b>
          </p>
          <p className="courseContent">
          A smart grid is an advanced electrical system that uses smart meters and digital communication technology to monitor and optimize energy usage, improving efficiency and reliability. Check out this course to...
          </p>

          <div className="courseButtons">
            <button className="learnBtn">
              <a target="_blank" href="https://drive.google.com/file/d/1DiBhUEJoKVKUpFPDipdwobpy9OCKSGqU/view?usp=drivesdk">
                Learn More
              </a>
            </button>
            <button className="quizBtn">
              <a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSdGaYz1CAdeWwa-dy0zLLwbYQQDk1YOuK2XZ7FRhVr1dua66w/viewform?usp=sf_link">
                Take Quiz
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Courses;
