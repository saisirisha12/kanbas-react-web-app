import { createAsyncThunk } from "@reduxjs/toolkit";
import * as db from "./enrollmentFuntions";

export const allEnrollments = createAsyncThunk(
  "enrollment/fetchEnrollments",
  async (userId: string) => {
    const allEnrollmentSpecificToUser = await db.usersEnrolledForCourse(userId);
    return allEnrollmentSpecificToUser;
  }
);

export const toggleEnrollment = createAsyncThunk(
  "enrollment/toggleEnrollment",
  async ({ userId, courseId, isEnrolled }: { userId: string; courseId: string; isEnrolled: boolean }) => {
    if (!isEnrolled) {
      await db.enrollUserToCourse(userId, courseId);
    } else {
      await db.unenrollUserFromCourse(userId, courseId);
    }
    return { userId, courseId, isEnrolled: !isEnrolled };
  }
);

