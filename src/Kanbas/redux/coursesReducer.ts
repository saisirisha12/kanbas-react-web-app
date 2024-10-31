// src/redux/coursesReducer.js
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Course {
  _id: string;
  name: string;
  description: string;
  image: string;
}

interface CoursesState {
  courses: Course[];
}

const initialState: CoursesState = {
  courses: [], // Initialize as empty; can be populated with initial courses if needed
};

const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    addCourse: (state, action: PayloadAction<Course>) => {
      state.courses.push(action.payload);
    },
    deleteCourse: (state, action: PayloadAction<string>) => {
      state.courses = state.courses.filter((course) => course._id !== action.payload);
    },
    updateCourse: (state, action: PayloadAction<Course>) => {
      const index = state.courses.findIndex((course) => course._id === action.payload._id);
      if (index !== -1) {
        state.courses[index] = action.payload;
      }
    },
  },
});

export const { addCourse, deleteCourse, updateCourse } = coursesSlice.actions;
export default coursesSlice.reducer;