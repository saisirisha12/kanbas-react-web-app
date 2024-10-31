import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface EnrollmentState {
  enrollments: { [courseId: string]: boolean };
}

const initialState: EnrollmentState = {
  enrollments: {}, 
};

const enrollmentSlice = createSlice({
  name: "enrollment",
  initialState,
  reducers: {
    enroll(state, action: PayloadAction<string>) {
      const courseId = action.payload;
      state.enrollments[courseId] = true; 
    },
    unenroll(state, action: PayloadAction<string>) {
      const courseId = action.payload;
      delete state.enrollments[courseId];
    },
  },
});

export const { enroll, unenroll } = enrollmentSlice.actions;
export default enrollmentSlice.reducer;