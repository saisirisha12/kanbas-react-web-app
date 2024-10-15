import ModulesControls from "./ModulesControls";
import ModuleControlButtons from "./ModuleControlButtons";
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "./LessonControlButtons";
export default function Modules() {
    return (
      // <div>
      //   {/* Implement Collapse All button, View Progress button, etc. */}
      //   {/* <div>
      //       <button>Collapse All</button> <button>View Progress</button> <select>
      //           <option value="PublishAll">Publish All</option>
      //       </select> <button> + Module</button>
      //   </div> */}
      //   <ModulesControls /><br /><br /><br /><br />
      //   <ul id="wd-modules" className="list-group rounded-0">
      //     <li className="wd-module" list-group-item p-0 mb-5 fs-5 border-gray>
      //       <div className="wd-title">Week 1, Lecture 1 - Course Introduction, Syllabus, Agenda</div>
      //       <ul className="wd-lessons">
      //         <li className="wd-lesson">
      //           <span className="wd-title">LEARNING OBJECTIVES</span>
      //           <ul className="wd-content">
      //             <li className="wd-content-item">Introduction to the course</li>
      //             <li className="wd-content-item">Learn what is Web Development</li>
      //           </ul>
      //         </li>
      //         <li className="wd-lesson">
      //           <span className="wd-title">READING</span>
      //           <ul className="wd-content">
      //             <li className="wd-content-item">Full Stack Developer - Chapter 1 - Introduction </li>
      //             <li className="wd-content-item">Full Stack Developer - Chapter 2 - Creation</li>
      //           </ul>
      //         </li>
      //         <li className="wd-lesson">
      //           <span className="wd-title">SLIDES</span>
      //           <ul className="wd-content">
      //             <li className="wd-content-item">Introduction to Web Development</li>
      //             <li className="wd-content-item">Creating an HTTP server with Node.js</li>
      //             <li className="wd-content-item">Creating a React Application</li>
      //           </ul>
      //         </li>
      //       </ul>
      //     </li>
      //     <li className="wd-module">
      //       <div className="wd-title">Week 1, Lecture 2 - Formatting User Interfaces with HTML</div>
      //       <ul className="wd-lessons">
      //         <li className="wd-lesson">
      //           <span className="wd-title">LEARNING OBJECTIVES</span>
      //           <ul className="wd-content">
      //             <li className="wd-content-item">Learn how to create user interfaces with HTML</li>
      //             <li className="wd-content-item">Deploy the assignment to Netlify</li>
      //           </ul>
      //         </li>
      //         <li className="wd-lesson">
      //           <span className="wd-title">SLIDES</span>
      //           <ul className="wd-content">
      //             <li className="wd-content-item">Introduction to HTML and DOM</li>
      //             <li className="wd-content-item">Formatting Web contents with Headings</li>
      //             <li className="wd-content-item">Formatting contents with Lists and Tables</li>
      //           </ul>
      //         </li>
      //       </ul>
      //     </li>
      //     <li className="wd-module">
      //       <div className="wd-title">Week 2</div>
      //       <ul className="wd-lessons">
      //         <li className="wd-lesson">
      //           <span className="wd-title">LEARNING OBJECTIVES</span>
      //         </li>
      //       </ul>
      //     </li>
      //   </ul>
      // </div>
      <div>
      <ModulesControls /><br /><br /><br /><br />
      <ul id="wd-modules" className="list-group rounded-0">
        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary"> 
            <BsGripVertical className="me-2 fs-3" /> 
            Week 1 
            <ModuleControlButtons /> 
          </div>
          <ul className="wd-lessons list-group rounded-0">
            <li className="wd-lesson list-group-item p-3 ps-1">
            <BsGripVertical className="me-2 fs-3" />
              LEARNING OBJECTIVES 
            <LessonControlButtons />
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1">
            <BsGripVertical className="me-2 fs-3" />
              Introduction to the course 
              <LessonControlButtons />
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1">
            <BsGripVertical className="me-2 fs-3" />
              Learn what is Web Development
              <LessonControlButtons /> 
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1"> <BsGripVertical className="me-2 fs-3" />
            LESSON 1 
            <LessonControlButtons />
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1"> <BsGripVertical className="me-2 fs-3" />
            LESSON 2 <LessonControlButtons />
            </li>
          </ul>
        </li>
        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary"> 
          <BsGripVertical className="me-2 fs-3" />
          Week 2 
          <ModuleControlButtons />
          </div>
          <ul className="wd-lessons list-group rounded-0">
            <li className="wd-lesson list-group-item p-3 ps-1">
            <BsGripVertical className="me-2 fs-3" />
              LEARNING OBJECTIVES 
              <LessonControlButtons />
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1"> 
            <BsGripVertical className="me-2 fs-3" />
            LESSON 1 
            <LessonControlButtons />
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1"> 
            <BsGripVertical className="me-2 fs-3" />
            LESSON 2 <LessonControlButtons />
            </li>
          </ul>
        </li>
      </ul> </div>
  );}
  