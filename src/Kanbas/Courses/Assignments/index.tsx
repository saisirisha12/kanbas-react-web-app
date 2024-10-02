import AssignmentControls from "./AssingmentControls";
import AssignmentControlButtons from "./AssignmentControlButtons";
import LessonControlButtons from "../Modules/LessonControlButtons";
import { BsGripVertical } from "react-icons/bs";
import { MdAssignment } from "react-icons/md";

export default function Assignments() {
    return (
      <div id="wd-assignments">
        <AssignmentControls /><br /><br />
        <ul id="wd-modules" className="list-group rounded-0">
        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary"> 
            <BsGripVertical className="me-2 fs-3" /> 
            Assignments 
            <AssignmentControlButtons /> 
          </div>
          <ul className="wd-lessons list-group rounded-0">
            <li className="wd-lesson list-group-item p-3 ps-1">
            <BsGripVertical className="me-2 fs-3" />
            <MdAssignment className="me-2 fs-3" />
            <a className="wd-assignment-link"
              href="#/Kanbas/Courses/1234/Assignments/123">
              A1
            </a> <br></br>Multiple Modules | <b>Not available until </b>May 6 at 12:00am |<br></br> <b>Due</b> May 13 at 11:59pm | 100 pts
            <LessonControlButtons />
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1">
            <BsGripVertical className="me-2 fs-3" />
            <MdAssignment className="me-2 fs-3" />
            <a className="wd-assignment-link"
              href="#/Kanbas/Courses/1234/Assignments/123">
              A2
            </a> <br></br>Multiple Modules | <b>Not available until </b>May 13 at 12:00am | <br></br><b>Due</b> May 20 at 11:59pm | 100 pts
              <LessonControlButtons />
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1">
            <BsGripVertical className="me-2 fs-3" />
            <MdAssignment className="me-2 fs-3" />
            <a className="wd-assignment-link"
              href="#/Kanbas/Courses/1234/Assignments/123">
              A3
            </a> <br></br>Multiple Modules | <b>Not available until </b>May 20 at 12:00am | <br></br><b>Due</b> May 27 at 11:59pm | 100 pts
              <LessonControlButtons /> 
            </li>
          </ul>
        </li>
      </ul> </div>
  );}
  
  