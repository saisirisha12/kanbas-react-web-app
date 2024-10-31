import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../Database";
import { Assignment } from "./types";

const initialState = {
  assignments: assignments,
};

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    // Add a new assignment
    addAssignment: (state, { payload: assignment }: { payload: Assignment }) => {
      const newAssignment = {
        _id: assignment._id || new Date().getTime().toString(),
        title: assignment.title || "Untitled Assignment",
        course: assignment.course,
        not_available_until: assignment.not_available_until || "",
        due: assignment.due || "",
        points: assignment.points || 0,
        description: assignment.description || "No description provided.",
        assignment_group: assignment.assignment_group || "ASSIGNMENTS",
        display_grade_as: assignment.display_grade_as || "PERCENTAGE",
        submission_type: assignment.submission_type || "Online",
        online_entry_option: assignment.online_entry_option || [],
      };
      state.assignments = [...state.assignments, newAssignment];
    },

    // Delete an assignment by ID
    deleteAssignment: (state, { payload: assignmentId }: { payload: string }) => {
      state.assignments = state.assignments.filter((a) => a._id !== assignmentId);
    },

    // Update an existing assignment by matching its ID
    updateAssignment: (state, { payload: updatedAssignment }: { payload: Assignment }) => {
      const index = state.assignments.findIndex(
        (a) => a._id === updatedAssignment._id
      );
      if (index !== -1) {
        // Ensure that updatedAssignment has all properties set
        state.assignments[index] = {
          ...state.assignments[index], // Keep existing properties if not overwritten
          ...updatedAssignment, // Overwrite with updated properties
          assignment_group: updatedAssignment.assignment_group || "ASSIGNMENTS",
          display_grade_as: updatedAssignment.display_grade_as || "PERCENTAGE",
          submission_type: updatedAssignment.submission_type || "Online",
          online_entry_option: updatedAssignment.online_entry_option || [],
        };
      }
    },

    // Mark an assignment for editing
    editAssignment: (state, { payload: assignmentId }: { payload: string }) => {
      state.assignments = state.assignments.map((a) =>
        a._id === assignmentId ? { ...a, editing: true } : a
      );
    },
  },
});

export const { addAssignment, deleteAssignment, updateAssignment, editAssignment } =
  assignmentsSlice.actions;
export default assignmentsSlice.reducer;
