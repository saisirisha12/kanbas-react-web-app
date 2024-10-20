import AssignmentControls from "./AssingmentControls";
import AssignmentControlButtons from "./AssignmentControlButtons";
import LessonControlButtons from "../Modules/LessonControlButtons";
import { BsGripVertical } from "react-icons/bs";
import { GiNotebook } from "react-icons/gi";

export default function Assignments() {
    return (
      <div id="wd-assignments">
        <AssignmentControls /><br />
        <ul id="wd-modules" className="list-group rounded-0">
        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary"> 
            <BsGripVertical className="me-2 fs-3" /> 
            Assignments 
            <AssignmentControlButtons /> 
          </div>
          <ul className="wd-assignments-list list-group rounded-0">
            <li className="wd-assignment-list-item list-group-item d-flex align-items-center p-3 ps-1">
            <BsGripVertical className="me-2 fs-3" /> <GiNotebook className="me-2 fs-3" style={{ marginRight: 10, color: 'green' }} />
            <div className="flex-grow-1">
              <a href="#/Kanbas/Courses/1234/Assignments/1" className="stretched-link" style={{ color: 'black' }}>
                  <strong>A1</strong>
              </a>
              <div className="small">
                  <span style={{ color: 'red' }}>Multiple Modules</span> | <strong>Not available until</strong> May 6 at 12:00am
              </div>
              <div className="small">
                  <strong>Due</strong> May 13 at 11:59pm | 100 pts
              </div>
            </div>
            <LessonControlButtons />
            </li>

            <li className="wd-assignment-list-item list-group-item d-flex align-items-center p-3 ps-1">
            <BsGripVertical className="me-2 fs-3" /> <GiNotebook className="me-2 fs-3" style={{ marginRight: 10, color: 'green' }} />
            <div className="flex-grow-1">
              <a href="#/Kanbas/Courses/1234/Assignments/1" className="stretched-link" style={{ color: 'black' }}>
                  <strong>A2</strong>
              </a>
              <div className="small">
                  <span style={{ color: 'red' }}>Multiple Modules</span> | <strong>Not available until</strong> May 13 at 12:00am
              </div>
              <div className="small">
                  <strong>Due</strong> May 20 at 11:59pm | 100 pts
              </div>
            </div>
            <LessonControlButtons />
            </li>

            <li className="wd-assignment-list-item list-group-item d-flex align-items-center p-3 ps-1">
            <BsGripVertical className="me-2 fs-3" /> <GiNotebook className="me-2 fs-3" style={{ marginRight: 10, color: 'green' }} />
            <div className="flex-grow-1">
              <a href="#/Kanbas/Courses/1234/Assignments/1" className="stretched-link" style={{ color: 'black' }}>
                  <strong>A3</strong>
              </a>
              <div className="small">
                  <span style={{ color: 'red' }}>Multiple Modules</span> | <strong>Not available until</strong> May 20 at 12:00am
              </div>
              <div className="small">
                  <strong>Due</strong> May 27 at 11:59pm | 100 pts
              </div>
            </div>
            <LessonControlButtons />
            </li>
          </ul>
        </li>
      </ul> </div>
  );}
  
  