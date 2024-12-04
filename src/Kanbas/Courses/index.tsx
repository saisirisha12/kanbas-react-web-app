import CoursesNavigation from "./Navigation";
import Modules from "./Modules";
import Assignments from "./Assignments"
import AssignmentEditor from "./Assignments/Editor";
import Home from "./Home";
import PeopleTable from "./People/Table";
import { FaAlignJustify } from "react-icons/fa";
import { Route, Routes, useParams, useLocation } from "react-router";
import { courses } from "./Enrollements/enrollmentFuntions";
import { useEffect, useState } from "react";
import * as client from "./client" 
export default function Courses({ courses }: { courses: any[]; }) {

  const { cid } = useParams();
  const course = courses.find((course) => course._id === cid);
  const { pathname } = useLocation();
  const [users, setUsers] = useState<any[]>([]);
  const fetchUsers = async () => {
    const users = await client.findUsersForCourse(course._id);
    setUsers(users);
  };
  useEffect(() => {
    fetchUsers();
  });
  return (
    <div id="wd-courses">
      <h2 className="text-dark">
        <FaAlignJustify className="me-4 fs-4 mb-1" />
        {course && course.name}  &gt; {pathname.split("/")[4]} </h2> <hr />
      <div className="d-flex">
        <div className="d-none d-md-block">
          <CoursesNavigation />
        </div>
        <div className="flex-fill">
          <Routes>
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Assignments" element={<Assignments />} />
            <Route path="Assignments/:aid" element={<AssignmentEditor />} />
            <Route path="People" element={<PeopleTable users={users}/>} />
          </Routes>
        </div></div>
    </div>

  );
}