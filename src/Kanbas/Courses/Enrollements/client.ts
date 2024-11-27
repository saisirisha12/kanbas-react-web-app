import axios from "axios";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const ENROLLMENTS_API = `${REMOTE_SERVER}/api/enrollments`;
// export const unenrollUserFromCourse = async (moduleId: string) => {
//     const response = await axios.delete(`${ENROLLMENTS_API}/${moduleId}`);
//     return response.data;
//    };
//    export const enrollUserInCourse = async (module: any) => {
//        const { data } = await axios.post(`${MODULES_API}/${module._id}`, module);
//        return data;
//      };
     export const unenrollUserFromCourse = async (userId: any, courseId: string) => {
        const response = await axios.delete(
          `${ENROLLMENTS_API}/${userId}/${courseId}`);
        return response.data;
      };
      export const enrollUserInCourse = async (userId: any, courseId: string) => {
        const response = await axios.post(
          `${ENROLLMENTS_API}/${userId}/${courseId}`);
        return response.data;
      };

      export const findMyEnrollments = async (userId: any) => {
        const { data } = await axios.get(`${ENROLLMENTS_API}/${userId}`);
        return data;
      };
  