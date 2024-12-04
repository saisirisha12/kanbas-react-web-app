import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleEnrollment, allEnrollments } from "./Courses/Enrollements/enrollmentToggle";
import * as enrollmentsClient from "./Courses/Enrollements/client";

export default function Dashboard({ courses, course, setCourse, addNewCourse, deleteCourse, updateCourse, fetchAllCourses, fetchCourses, enrolling, setEnrolling, updateEnrollment  }: {
  courses: any[]; course: any; setCourse: (course: any) => void;
  addNewCourse: () => void; 
  deleteCourse: (course: any) => void;
  updateCourse: () => void; 
  fetchAllCourses: () => void;
  fetchCourses: ()=> void;
  enrolling: boolean; setEnrolling: (enrolling: boolean) => void;
  updateEnrollment: (courseId: string, enrolled: boolean) => void 
}){
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  // const { enrollments } = useSelector((state: any) => state.enrollmentReducer);
  const [showAllCourses, setShowAllCourses] = useState(false);
  const [enrollments, setEnrollments] = useState<any[]>([]);
 
  // const enrollmentToggle = async (courseId: string, isEnrolledInCourse: boolean) => {
  //   // await dispatch(toggleEnrollment({ userId: currentUser._id, courseId, isEnrolled }) as any);
  //   // dispatch(allEnrollments(currentUser._id) as any);  
  //   if(isEnrolledInCourse){
  //     const enrollementsList = await enrollmentsClient.unenrollUserFromCourse(currentUser._id,courseId);
  //     console.log(enrollementsList);
  //     setEnrollments(enrollementsList);
  //     fetchCourses()
  //   }
  //   else{
  //     const enrollementsList = await enrollmentsClient.enrollUserInCourse(currentUser._id,courseId);
  //     console.log(enrollementsList);
  //     setEnrollments(enrollementsList);
  //   }
  // };


  const handleShowAllCourses = async () => {
    if (!showAllCourses) {
      await fetchAllCourses();
    }
    else{
      await fetchCourses()
    }
    setShowAllCourses(!showAllCourses); // Toggle the state
  };

  // useEffect(() => {
  //   if (enrolling) {
  //     console.log("Enrolling true");
  //     fetchAllCourses();
  //   } else {
  //     // findCoursesForUser();
  //     console.log("Enrolling False");
  //     fetchCourses();
  //   }
  // }, [currentUser, enrolling]);

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard
      <button onClick={() => setEnrolling(!enrolling)} className="float-end btn btn-primary" >
          {enrolling ? "My Courses" : "All Courses"}
        </button>
      </h1> <hr />

      {currentUser?.role === "FACULTY" && (
        <>
        <h5>
        New Course
        <button className="btn btn-primary float-end" id="wd-add-new-course-click" onClick={addNewCourse}>
          Add
        </button>
        <button className="btn btn-warning float-end me-2" onClick={updateCourse} id="wd-update-course-click">
          Update
        </button>
      </h5>

      <input
        value={course.name}
        className="form-control mb-2"
        onChange={(e) => setCourse({ ...course, name: e.target.value })}
      />
      <textarea
        value={course.description}
        className="form-control"
        onChange={(e) => setCourse({ ...course, description: e.target.value })}
        />
        <hr />
        </>
      )}

      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2> <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {(showAllCourses ? courses : courses).map((course) => {
            const isEnrolled = !course.enrolled
            

            return (
              <div className="wd-dashboard-course col" style={{ width: "300px" }} key={course._id}>
                <div className="card rounded-3 overflow-hidden d-flex flex-column h-100">
                
                  <img src={course.image} width="100%" height={160} alt={`${course.name} course`} />
                  <div className="card-body d-flex flex-column">
                    <h5 className="wd-dashboard-course-title card-title">
                    {enrolling && (
                    <button  onClick={(event) => {
                      event.preventDefault();
                      updateEnrollment(course._id, !course.enrolled);
                    }} className={`btn ${ course.enrolled ? "btn-danger" : "btn-success" } float-end`} >
                      {course.enrolled ? "Unenroll" : "Enroll"}
                    </button>
                    )}
                      {course.name} 
                      </h5>
                    <p
                      className="wd-dashboard-course-title card-text overflow-y-hidden"
                      style={{ maxHeight: 100 }}
                    >
                      {course.description}
                    </p>
                    
                    

                    <div className="mt-auto">
                    <Link to={`/Kanbas/Courses/${course._id}/Home`}   className="wd-dashboard-course-link text-decoration-none text-dark">
                    <button className="btn btn-primary mb-2"> Go </button>
                    </Link>
                    {currentUser?.role === "FACULTY" && (
                      <>
                      <button
                        onClick={(event) => {
                          event.preventDefault();
                          deleteCourse(course._id);
                        }}
                        className="btn btn-danger float-end"
                        id="wd-delete-course-click">
                        Delete
                      </button>
                      <button
                        id="wd-edit-course-click"
                        onClick={(event) => {
                          event.preventDefault();
                          setCourse(course); 
                        }}
                        className="btn btn-warning float-end me-2">
                        Edit
                      </button>
                      
                      </>
                    )}


                    {/* {isEnrolled && currentUser?.role === "STUDENT" && (
                    // {showAllCourses && currentUser?.role === "STUDENT" && (
                      <button className="btn btn-danger float-end" onClick={() => enrollmentToggle(course._id, true)}>
                        Unenroll
                      </button>
                    )}

                    {!isEnrolled && showAllCourses && currentUser?.role === "STUDENT" && (
                    // {showAllCourses && currentUser?.role === "STUDENT" && (
                      <button className="btn btn-success float-end" onClick={() => enrollmentToggle(course._id, false)}>
                        Enroll
                      </button>
                    )} */}

                  </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}