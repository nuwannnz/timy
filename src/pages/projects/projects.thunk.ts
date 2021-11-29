import { createAsyncThunk } from "@reduxjs/toolkit";
import { addProject, queryProjects } from "../../firestoreQueries";

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

export const addProjectAsync = createAsyncThunk(
  "project/add",
  async (project: IProject, { rejectWithValue }) => {
    try {
      const response = await addProject(project);
      return response;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);
