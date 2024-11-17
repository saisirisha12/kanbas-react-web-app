import courses from "../../Database/courses.json";
import modules from "../../Database/modules.json";
import users from "../../Database/users.json";
import assignments from "../../Database/assignments.json";
import allEnrollments from "../../Database/enrollments.json";

const enrollmentList = [...allEnrollments];

export const usersEnrolledForCourse = async (userId: string) => {
  return enrollmentList.filter((enrollment) => enrollment.user === userId);
};

export const enrollUserToCourse = async (userId: string, courseId: string) => {
  const newEnrolledData = { _id: `${Date.now()}`, user: userId, course: courseId };
  enrollmentList.push(newEnrolledData);
  return newEnrolledData;
};

export const unenrollUserFromCourse = async (userId: string, courseId: string) => {
  const index = enrollmentList.findIndex(
    (enrollment) => enrollment.user === userId && enrollment.course === courseId
  );
  if (index > -1) {
    enrollmentList.splice(index, 1);
  }
  return { user: userId, course: courseId };
};



export { courses, modules, users, assignments, enrollmentList as enrollments };