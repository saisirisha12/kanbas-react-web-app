import { FaChevronDown, FaTimes, FaCalendarAlt } from 'react-icons/fa';
import { useState } from 'react';
export default function AssignmentEditor() {
  const [selectedAssignTo, setSelectedAssignTo] = useState('Everyone');
    return (
      <div id="wd-assignments-editor" className="container mt-4">
        <div className="row mb-2">
          <div className="col">
          <label htmlFor="wd-name" className="form-label">Assignment Name</label>
          <input id="wd-name" value="A1" className="form-control" />
        </div></div>

        <div className="row mb-3">
        <div className="col-md-12">
          <label htmlFor="wd-description" className="form-label">Description</label>
          <textarea
            rows={9} cols={44}
            id="wd-description"
            className="form-control">
              The assignment is available online. Submit a link to the landing page of your Web application running on Netlify. The landing page should include the following: Your full name and section Links to each of the lab assignmentsLink to the Kanbas application Links to all relevant source code repositories The Kanbas application should include a link to navigate back to the landing page.
            </textarea>
        </div>
      </div>

      <div className="row mb-2">
      <div className="col-md-3 d-flex justify-content-end align-items-center"> 
          <label htmlFor="wd-points" className="form-label">Points</label>
        </div>
        <div className="col-md-9">
          <input id="wd-points" value={100} className="form-control" />
        </div>
      </div>

      <div className="row mb-2"> 
        <div className="col-md-3 d-flex justify-content-end align-items-center">
          <label htmlFor="wd-group" className="form-label">Assignment Group</label>
        </div>
        <div className="col-md-9">
          <div className="input-group">
            <select id="wd-group" className="form-control">
              <option value="ASSIGNMENTS">ASSIGNMENTS</option>
              <option value="QUIZZES">QUIZ</option>
              <option value="PROJECT">PROJECT</option>
              <option value="EXAM">EXAM</option>
            </select>
            <span className="input-group-text">
              <FaChevronDown /> 
            </span>
          </div>
        </div>
      </div>

      <div className="row mb-2">
      <div className="col-md-3 d-flex justify-content-end align-items-center">
          <label htmlFor="wd-display-grade-as" className="form-label">Display Grade as</label>
        </div>
        <div className="col-md-9">
          <div className="input-group">
            <select id="wd-display-grade-as" className="form-control">
              <option value="PERCENTAGE">Percentage</option>
              <option value="GRADE">Grade</option>
              <option value="AS IT IS">As it is</option>
            </select>
            <span className="input-group-text">
              <FaChevronDown />
            </span>
          </div>
        </div>
      </div>

      <div className="row mb-2">
      <div className="col-md-3 d-flex justify-content-end align-items-center">
          <label htmlFor="wd-submission-type" className="form-label">Submission Type</label>
        </div>
        <div className="col-md-9">
          <div className="input-group">
            <select id="wd-submission-type" className="form-control">
              <option value="Online">Online</option>
              <option value="In-Person">In-Person</option>
              <option value="URL">Web URL</option>
            </select>
            <span className="input-group-text">
              <FaChevronDown />
            </span>
          </div>
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-md-3">
        </div>
        <div className="col-md-9">
          <div className="border p-3" style={{ marginTop: '-15px' }}>
            <label className="form-label">Online Entry Options</label>
            <div className="form-check">
              <input type="checkbox" className="form-check-input" id="wd-text-entry" />
              <label htmlFor="wd-text-entry" className="form-check-label">Text Entry</label>
            </div>
            <div className="form-check">
              <input type="checkbox" className="form-check-input" id="wd-website-url" defaultChecked />
              <label htmlFor="wd-website-url" className="form-check-label">Website URL</label>
            </div>
            <div className="form-check">
              <input type="checkbox" className="form-check-input" id="wd-media-recordings" />
              <label htmlFor="wd-media-recordings" className="form-check-label">Media Recordings</label>
            </div>
            <div className="form-check">
              <input type="checkbox" className="form-check-input" id="wd-student-annotation" />
              <label htmlFor="wd-student-annotation" className="form-check-label">Student Annotation</label>
            </div>
            <div className="form-check">
              <input type="checkbox" className="form-check-input" id="wd-file-upload" />
              <label htmlFor="wd-file-upload" className="form-check-label">File Uploads</label>
            </div>
          </div>
        </div>
      </div>

      <div className="row mb-3">
      <div className="col-md-3 d-flex justify-content-end">
          <label className="form-label">Assign</label>
        </div>
        <div className="col-md-9">
          <div className="border p-3">
            <div className="mb-3">
              <label htmlFor="wd-assign-to" className="form-label font-weight-bold">Assign to</label>
              <div className="input-group">
                <input id="wd-assign-to" value={selectedAssignTo} className="form-control" />
                <span className="input-group-text">
                  <FaTimes /> 
                </span>
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="wd-due-date" className="form-label font-weight-bold">Due</label> 
              <div className="input-group">
                <input id="wd-due-date" type="datetime-local" value="2024-05-13T23:59" className="form-control" />
                <span className="input-group-text">
                  <FaCalendarAlt /> 
                </span>
              </div>
            </div>

            
            <div className="row">
              <div className="col-md-6">
                <label htmlFor="wd-available-from" className="form-label font-weight-bold">Available from</label> 
                <div className="input-group">
                  <input id="wd-available-from" type="datetime-local" value="2024-05-06T12:00" className="form-control" />
                  <span className="input-group-text">
                    <FaCalendarAlt />
                  </span>
                </div>
              </div>

              <div className="col-md-6">
                <label htmlFor="wd-available-until" className="form-label font-weight-bold">Until</label> 
                <div className="input-group">
                  <input id="wd-available-until" type="datetime-local" className="form-control" />
                  <span className="input-group-text">
                    <FaCalendarAlt /> 
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr />
      <div className="row">
        <div className="col text-end">
          <button className="btn btn-secondary me-2">Cancel</button>
          <button className="btn btn-danger">Save</button>
        </div>
      </div>
    </div>
);}
  