import { FaPlus} from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
export default function AssignmentControls() {
  return (
    <div id="wd-modules-controls" className="d-flex justify-content-between align-items-center mb-3">

    <div className="input-group" style={{ maxWidth: "300px" }}>
        <span className="input-group-text">
          <FaSearch />
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="Search..."
          aria-label="Search for Assignments"/>
      </div>
      
    <div className="text-nowrap">
      <button id="wd-add-assignment-btn" className="btn btn-lg btn-danger me-1 float-end">
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Assignment</button>
       <button id="wd-add-assignment-btn" className="btn btn-lg btn-secondary me-1 float-end">
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Group</button>
        </div>
      {/* Implement the View Progress and Collapse All buttons with IDs wd-view-progress and wd-collapse-all */}

      {/* Search Bar */}
      
      
    </div>
);}