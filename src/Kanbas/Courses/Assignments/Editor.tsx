import { useState, useEffect } from "react";
import { FaChevronDown, FaTimes, FaCalendarAlt } from "react-icons/fa";
import { useParams, useNavigate } from "react-router-dom"; 
import { useDispatch, useSelector } from "react-redux";
import { addAssignment, updateAssignment } from "./reducer";


export default function AssignmentEditor() {
    const { cid, aid } = useParams<{ cid: string; aid?: string }>();
    const [selectedAssignTo, setSelectedAssignTo] = useState("Everyone");
    const isNewAssignment = aid === "New"; 
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const existingAssignment = useSelector((state: any) =>
        state.assignmentsReducer.assignments.find((a: Assignment) => a._id === aid)
    );

    const [assignment, setAssignment] = useState<Partial<Assignment>>({
        title: "New Assignment",
        description: "New Assignment Description",
        points: 100,
        due: new Date().toISOString().slice(0, 16),
        not_available_until: new Date().toISOString().slice(0, 16),
        available_until: new Date().toISOString().slice(0, 16),
        course: cid || "",
    });

    const saveAssignment = () => {
        if (!isNewAssignment && existingAssignment) {
            dispatch(updateAssignment(assignment as Assignment));
        } else {
            dispatch(addAssignment({ ...assignment, course: cid }));
        }
        navigate(`/Kanbas/Courses/${cid}/Assignments`);
    };

    const cancelAdding = () => {
        navigate(`/Kanbas/Courses/${cid}/Assignments`);
    };

    useEffect(() => {
        if (!isNewAssignment && existingAssignment) {
            setAssignment(existingAssignment);
        }
    }, [isNewAssignment, existingAssignment]);

    return (
        <div id="wd-assignments-editor" className="container mt-4">
            <div className="row mb-2">
                <div className="col">
                    <label htmlFor="wd-name" className="form-label">Assignment Name</label>
                    <input
                        id="wd-name"
                        value={assignment.title}
                        onChange={(e) => setAssignment({ ...assignment, title: e.target.value })}
                        className="form-control"
                        required
                    />
                </div>
            </div>
            <br />

            <div className="row mb-3">
                <div className="col-md-12">
                    <label htmlFor="wd-description" className="form-label">Description</label>
                    <textarea
                        id="wd-description"
                        className="form-control"
                        value={assignment.description}
                        onChange={(e) => setAssignment({ ...assignment, description: e.target.value })}
                        required
                    />
                </div>
            </div>

            <div className="row mb-2">
                <div className="col-md-3 d-flex align-items-center justify-content-end">
                    <label htmlFor="wd-points" className="form-label">Points</label>
                </div>
                <div className="col-md-9">
                    <input
                        id="wd-points"
                        type="number"
                        value={assignment.points}
                        onChange={(e) => setAssignment({ ...assignment, points: Number(e.target.value) })}
                        className="form-control"
                        required
                    />
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
                                <input
                                    id="wd-assign-to"
                                    value={selectedAssignTo}
                                    onChange={(e) => setSelectedAssignTo(e.target.value)}
                                    className="form-control"
                                />
                                <span className="input-group-text">
                                    <FaTimes />
                                </span>
                            </div>
                        </div>

                        <div className="row mb-3">
                            <div className="col-md-3 d-flex justify-content-end">
                                <label htmlFor="wd-due-date" className="form-label font-weight-bold">Due</label>
                            </div>
                            <div className="col-md-9">
                                <div className="input-group">
                                    <input
                                        id="wd-due-date"
                                        type="datetime-local"
                                        value={assignment.due}
                                        onChange={(e) => setAssignment({ ...assignment, due: e.target.value })}
                                        className="form-control"
                                        required
                                    />
                                    <span className="input-group-text">
                                        <FaCalendarAlt />
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-3 d-flex justify-content-end">
                                <label htmlFor="wd-available-from" className="form-label font-weight-bold">Available From</label>
                            </div>
                            <div className="col-md-9">
                                <div className="input-group">
                                    <input
                                        id="wd-available-from"
                                        type="datetime-local"
                                        value={assignment.not_available_until}
                                        onChange={(e) => setAssignment({ ...assignment, not_available_until: e.target.value })}
                                        className="form-control"
                                        required
                                    />
                                    <span className="input-group-text">
                                        <FaCalendarAlt />
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-3 d-flex justify-content-end">
                                <label htmlFor="wd-available-until" className="form-label font-weight-bold">Available Until</label>
                            </div>
                            <div className="col-md-9">
                                <div className="input-group">
                                    <input
                                        id="wd-available-until"
                                        type="datetime-local"
                                        value={assignment.available_until}
                                        onChange={(e) => setAssignment({ ...assignment, available_until: e.target.value })}
                                        className="form-control"
                                        required
                                    />
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
            <div className="text-end">
                <button onClick={cancelAdding} className="btn btn-secondary me-2">
                    Cancel
                </button>
                <button onClick={saveAssignment} className="btn btn-danger">
                    Save
                </button>
            </div>
        </div>
    );
}

interface Assignment {
    _id: string;
    title: string;
    description: string;
    points: number;
    due: string; 
    not_available_until: string; 
    available_until?: string; 
    course: string;
  }
