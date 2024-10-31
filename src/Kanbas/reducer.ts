// reducer.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  role: string; // "STUDENT" or "FACULTY"
  enrolledCourses: string[]; // List of enrolled course IDs for students
  _id: string; // User ID (assuming each user has a unique ID)
}

interface AccountState {
  currentUser: UserState;
}

const initialState: AccountState = {
  currentUser: {
    role: "STUDENT", // Default role, modify as needed
    enrolledCourses: [], // Initially empty; courses the student is enrolled in
    _id: "123", // Sample user ID, modify as needed
  },
};

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    enrollCourse: (state, action: PayloadAction<string>) => {
      if (state.currentUser.role === "STUDENT" && !state.currentUser.enrolledCourses.includes(action.payload)) {
        state.currentUser.enrolledCourses.push(action.payload);
      }
    },
    unenrollCourse: (state, action: PayloadAction<string>) => {
      state.currentUser.enrolledCourses = state.currentUser.enrolledCourses.filter(
        (courseId) => courseId !== action.payload
      );
    },
  },
});

export const { enrollCourse, unenrollCourse } = accountSlice.actions;
export default accountSlice.reducer;