import { createAsyncThunk } from "@reduxjs/toolkit";
import { queryProjects } from "../../firestoreQueries";

export const fetchProjectsAsync = createAsyncThunk(
  "project/fetchAll",
  async (ownerId: string, { rejectWithValue }) => {
    try {
      const response = await queryProjects(ownerId);
      return response;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);
