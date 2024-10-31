import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import React, { useState, useEffect } from "react";
import { enroll, unenroll } from "./redux/enrollmentsReducer";

interface Course {
  _id?: string;
  name: string;
  description: string;
  image: string;
}

export default function Dashboard({
  courses: initialCourses,
  addNewCourse,
  deleteCourse,
  updateCourse,
}: {
  courses: Course[];
  addNewCourse: (newCourse: Course) => void;
  deleteCourse: (courseId: string) => void;
  updateCourse: (updatedCourse: Course) => void;
}) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const enrollments = useSelector((state: any) => state.enrollment.enrollments);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [courses, setCourses] = useState<Course[]>(initialCourses); // Local state for courses
  const [showAllCourses, setShowAllCourses] = useState(false);
  const [currentCourse, setCurrentCourse] = useState<Course>({
    name: "",
    description: "",
    image: "images/reactjs.jpg", // Default image path
  });

  useEffect(() => {
    setCourses(initialCourses);
  }, [initialCourses]);

  useEffect(() => {
    const savedEnrollments = localStorage.getItem("enrollments");
    if (savedEnrollments) {
      JSON.parse(savedEnrollments).forEach((courseId: string) => dispatch(enroll(courseId)));
    }
  }, [dispatch]);

  useEffect(() => {
    const enrolledCourseIds = Object.keys(enrollments).filter((courseId) => enrollments[courseId]);
    localStorage.setItem("enrollments", JSON.stringify(enrolledCourseIds));
  }, [enrollments]);

  const handleEnrollToggle = (courseId: string) => {
    if (enrollments[courseId]) {
      dispatch(unenroll(courseId));
    } else {
      dispatch(enroll(courseId));
    }
  };

  const handleGoClick = (courseId: string) => {
    if (enrollments[courseId]) {
      navigate(`/Kanbas/Courses/${courseId}/Home`);
    }
  };

  const handleAddCourse = () => {
    if (currentCourse.name && currentCourse.description) {
      const newCourse: Course = {
        _id: `${Date.now()}`, // Unique ID for the course
        name: currentCourse.name,
        description: currentCourse.description,
        image: currentCourse.image || "images/reactjs.jpg", // Default image if not set
      };
      addNewCourse(newCourse);
      setCourses([...courses, newCourse]); // Update the courses list locally
      setCurrentCourse({ name: "", description: "", image: "images/reactjs.jpg" }); // Reset input fields
    }
  };

  const handleUpdateCourse = () => {
    if (currentCourse.name && currentCourse.description && currentCourse._id) {
      updateCourse(currentCourse);
      setCourses(courses.map((course) => (course._id === currentCourse._id ? currentCourse : course)));
      setCurrentCourse({ name: "", description: "", image: "images/reactjs.jpg" }); // Reset input fields
    }
  };

  const handleEditCourse = (course: Course) => {
    setCurrentCourse(course);
  };

  const displayedCourses = currentUser?.role === "STUDENT" && showAllCourses
    ? courses
    : courses.filter((course) => enrollments[course._id ?? ""]);

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />

      {currentUser?.role === "FACULTY" && (
        <>
          <h5>New Course</h5>
          <button className="btn btn-primary float-end" onClick={handleAddCourse}>Add</button>
          <button className="btn btn-warning float-end me-2" onClick={handleUpdateCourse}>Update</button>
          <input
            value={currentCourse.name}
            className="form-control mb-2"
            onChange={(e) => setCurrentCourse({ ...currentCourse, name: e.target.value })}
            placeholder="Course Name"
          />
          <textarea
            value={currentCourse.description}
            className="form-control"
            onChange={(e) => setCurrentCourse({ ...currentCourse, description: e.target.value })}
            placeholder="Course Description"
          />
          <hr />
        </>
      )}

      {currentUser?.role === "STUDENT" && (
        <button
          className="btn btn-primary float-end mb-3"
          onClick={() => setShowAllCourses(!showAllCourses)}
        >
          Enrollments
        </button>
      )}

      <h2 id="wd-dashboard-published">Published Courses ({displayedCourses.length})</h2>
      <hr />

      <div id="wd-dashboard-courses" className="row row-cols-1 row-cols-md-5 g-4">
        {displayedCourses.map((course) => (
          <div key={course._id} className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <img src={course.image} width="100%" height={160} alt="Course" />
              <div className="card-body">
                <h5 className="wd-dashboard-course-title card-title">{course.name}</h5>
                <p className="wd-dashboard-course-title card-text overflow-y-hidden" style={{ maxHeight: 100 }}>
                  {course.description}
                </p>

                {currentUser?.role === "STUDENT" && (
                  <>
                    <button
                      onClick={(event) => {
                        event.preventDefault();
                        handleEnrollToggle(course._id ?? "");
                      }}
                      className={`btn float-end ${enrollments[course._id ?? ""] ? "btn-danger" : "btn-success"}`}
                    >
                      {enrollments[course._id ?? ""] ? "Unenroll" : "Enroll"}
                    </button>
                  </>
                )}

                {enrollments[course._id ?? ""] && (
                  <button
                    className="btn btn-primary me-2"
                    onClick={() => handleGoClick(course._id ?? "")}
                  >
                    Go
                  </button>
                )}

                {currentUser?.role === "FACULTY" && (
                  <>
                    <button
                      onClick={(event) => {
                        event.preventDefault();
                        deleteCourse(course._id ?? "");
                      }}
                      className="btn btn-danger float-end"
                    >
                      Delete
                    </button>
                    <button
                      onClick={(event) => {
                        event.preventDefault();
                        handleEditCourse(course);
                      }}
                      className="btn btn-warning me-2 float-end"
                    >
                      Edit
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}