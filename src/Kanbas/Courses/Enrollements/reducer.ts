import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { toggleEnrollment, allEnrollments } from "./enrollmentToggle";


const updateEnrollmentDetails = (
  enrollments: Enrollment[],
  userId: string,
  courseId: string,
  isEnrolled: boolean
): Enrollment[] => {
  if (isEnrolled) {
    return enrollments.filter(
      (enrollment) => !(enrollment.user === userId && enrollment.course === courseId)
    );
  } else {
    return [...enrollments, { user: userId, course: courseId }];
  }
};

const initialState: EnrollmentState = {
  enrollments: [],
  loading: false,
  error: null,
};


const enrollmentSlice = createSlice({
  name: "enrollment",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Handling allEnrollments action cases
      .addCase(allEnrollments.pending, (state) => {
        state.loading = true;
      })
      .addCase(allEnrollments.fulfilled, (state, action: PayloadAction<Enrollment[]>) => {
        state.enrollments = action.payload;
        state.loading = false;
      })
      .addCase(allEnrollments.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Unable to fetch enrollments";
      })
      // Handling toggleEnrollment action case
      .addCase(toggleEnrollment.fulfilled, (state, action) => {
        const { userId, courseId, isEnrolled } = action.payload;
        state.enrollments = updateEnrollmentDetails(state.enrollments, userId, courseId, isEnrolled);
      });
  },
});

interface Enrollment {
  course: string;
  user: string;
}

interface EnrollmentState {
  enrollments: Enrollment[];
  loading: boolean;
  error: string | null;
}

export default enrollmentSlice.reducer;
