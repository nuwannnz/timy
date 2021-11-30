import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  addProject,
  addTodo,
  deleteTodo,
  queryProjects,
  updateProject,
} from "../../firestoreQueries";

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

export const addTodoAsync = createAsyncThunk(
  "todo/add",
  async (addTodoData: IAddTodoThunkParams, { rejectWithValue }) => {
    try {
      const response = await addTodo(addTodoData.projectId, addTodoData.todo);
      console.log("response", response);
      return response;
    } catch (error) {
      console.log("err", error);
      rejectWithValue(error);
    }
  }
);

export const deleteTodoAsync = createAsyncThunk(
  "todo/delete",
  async (deleteTodoData: IDeleteTodoThunkParams, { rejectWithValue }) => {
    try {
      const response = await deleteTodo(
        deleteTodoData.projectId,
        deleteTodoData.todo
      );
      console.log("response", response);
      return response;
    } catch (error) {
      console.log("err", error);
      rejectWithValue(error);
    }
  }
);

export const updateProjectAsync = createAsyncThunk(
  "project/update",
  async (updateProjectData: IUpdateProjectThunkParams, { rejectWithValue }) => {
    try {
      const response = await updateProject(
        updateProjectData.projectId,
        updateProjectData.project
      );
      console.log("response", response);
      return response;
    } catch (error) {
      console.log("err", error);
      rejectWithValue(error);
    }
  }
);
