// src/Kanbas/Courses/Assignments/index.tsx
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom"; // Updated import path
import { BsGripVertical } from "react-icons/bs";
import { GiNotebook } from "react-icons/gi";
import AssignmentControl from "./AssignmentControl";
import AssignmentControlButtons from "./AssignmentControlButtons";
import LessonControlButtons from "../Modules/LessonControlButtons";
import { useState, useEffect } from "react";
import { deleteAssignment, setAssignments  } from "./reducer";
import * as coursesClient from "../client";
import * as assignmentsClient from "./client";

export default function Assignments() { 
    const { cid } = useParams<{ cid: string }>();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const fetchAssignments = async () => {
        const assignments = await coursesClient.findAssignmentsForCourse(cid as string);
        dispatch(setAssignments(assignments));
      };

      const removeAssignment = async (assignmentId: string) => {
        await assignmentsClient.deleteAssignment(assignmentId);
        dispatch(deleteAssignment(assignmentId));
      };
    
      useEffect(() => {
        fetchAssignments();
      }, []);
    

    const createNewAssignment = () => {
        navigate(`/Kanbas/Courses/${cid}/Assignments/New`);
    };

    const editExistingAssignment = (id: string) => {
        navigate(`/Kanbas/Courses/${cid}/Assignments/${id}`);
    };

    const deleteExistingAssignment = (id: string) => {
        // dispatch(deleteAssignment(id));
        removeAssignment(id);
    };

    const assignments = useSelector((state: AppState) =>
        state.assignmentsReducer.assignments.filter((assignment) => assignment.course === cid)
    );

    const currentUser = useSelector((state: AppState) => state.accountReducer.currentUser);

    return (
        <div>
            <AssignmentControl onAddAssignment={createNewAssignment} />

            <ul id="wd-modules" className="list-group rounded-0">
            <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">

            <div className="wd-title p-3 ps-2 bg-secondary"> 
            <BsGripVertical className="me-2 fs-3" /> 
            Assignments 
            </div>

            <ul className="wd-assignments-list list-group rounded-0">
                {assignments
        //   .filter((assignment: Assignment) => assignment.course === cid)
          .map((assignment: Assignment) => (
                    <li key={assignment._id} className="wd-assignment-list-item list-group-item d-flex align-items-center p-3 ps-1">
                        <BsGripVertical className="me-2 fs-3" /> 
                        <GiNotebook className="me-2 fs-3" style={{ marginRight: 10, color: 'green' }} />
                        <div className="flex-grow-1">
                            <strong>{assignment.title}</strong>
                            <div className="small">
                  <span style={{ color: 'red' }}>Multiple Modules</span> | <strong>Not available until:</strong> {assignment.not_available_until || "N/A"}
              </div>
                            <div className="small">
                                <strong>Due:</strong> {assignment.due || "N/A"} | {assignment.points || 0} pts
                            </div>
                        </div>

                        {currentUser?.role === "FACULTY" && (
                            <div className="d-flex">
                                <AssignmentControlButtons
                                    assignmentId={assignment._id}
                                    deleteAssignment={deleteExistingAssignment}
                                    editAssignment={editExistingAssignment}
                                />
                            </div>
                        )}
                        <LessonControlButtons />
                    </li>
                ))}
            </ul>
        </li>
        </ul>
        </div>
    );
}

interface AppState {
    accountReducer: { currentUser: { role: string } | null };
    assignmentsReducer: { assignments: Assignment[] };
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