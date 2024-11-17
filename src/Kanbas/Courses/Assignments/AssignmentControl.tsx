import React from 'react';
import { useSelector } from 'react-redux';
import { FaPlus, FaSearch } from "react-icons/fa";


export default function AssignmentControl({ onAddAssignment }: { onAddAssignment: () => void }) {
    const currentUser = useSelector((state: any) => state.accountReducer.currentUser);

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
           <button id="wd-add-assignment-btn" className="btn btn-lg btn-secondary me-1 float-end">
            <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
            Group</button>

                {currentUser?.role === "FACULTY" && (

                <button id="wd-add-module-btn" className="btn btn-lg btn-danger me-1 float-end"  onClick={onAddAssignment}>

                <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                Assignment</button>
               )}

            </div>
        </div>
    );}
