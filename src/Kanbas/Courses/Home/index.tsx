import Modules from "../Modules";
import CourseStatus from "./Status";
import { useSelector } from "react-redux";
export default function Home() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  return (
    <div className="d-flex" id="wd-home">
      <div className="flex-fill">
          <Modules />
      </div>
      {currentUser?.role === "FACULTY" && (
        <>
      <div className="d-none d-md-block">
          <CourseStatus />
          </div>
          </> )}
      </div>
  );
}