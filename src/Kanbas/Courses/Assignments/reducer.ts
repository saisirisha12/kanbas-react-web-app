import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { assignments } from "../Enrollements/enrollmentFuntions";


interface AssignmentsState {
    assignments: Assignment[];
}

const initialState: AssignmentsState = {
    assignments: assignments,
};


const generateUniqueId = (): string => {
    const timestamp = Date.now();
    const randomNum = Math.floor(Math.random() * 100000); 
    return `${timestamp}-${randomNum}`;
};

const assignmentsSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {
        addAssignment: (state, action: PayloadAction<Partial<Assignment>>) => {
            const payload = action.payload;
            if (!payload.course) {
                throw new Error("Course ID is required to add an assignment.");
            }

            const newAssignment: Assignment = {
                _id: generateUniqueId(), // Generate unique ID using timestamp and random number
                title: payload.title || "Untitled Assignment",
                description: payload.description || "No description provided.",
                points: payload.points !== undefined ? payload.points : 100,
                due: payload.due || new Date().toISOString().slice(0, 16),
                not_available_until: payload.not_available_until || new Date().toISOString().slice(0, 16),
                available_until: payload.available_until || new Date().toISOString().slice(0, 16),
                course: payload.course
            };
            state.assignments.push(newAssignment);
            console.log("New Assignment Added:", newAssignment); // Debugging line
        },

        // Delete an assignment by ID
        deleteAssignment: (state, action: PayloadAction<string>) => {
            const assignmentId = action.payload;
            state.assignments = state.assignments.filter((a) => a._id !== assignmentId);
            console.log(`Assignment with ID ${assignmentId} deleted.`);
        },

        // Update an existing assignment by matching its ID
        updateAssignment: (state, action: PayloadAction<Assignment>) => {
            const updatedAssignment = action.payload;
            const index = state.assignments.findIndex(
                (a) => a._id === updatedAssignment._id
            );
            if (index !== -1) {
                state.assignments[index] = {
                    ...state.assignments[index],
                    ...updatedAssignment
                };
                console.log("Assignment Updated:", updatedAssignment);
            }
        },
    },
});

export const { addAssignment, deleteAssignment, updateAssignment } = assignmentsSlice.actions;
export default assignmentsSlice.reducer;

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