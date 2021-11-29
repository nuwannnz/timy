import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchProjectsAsync } from "./projects.thunk";

interface IProjectSliceState {
  projectListData: {
    loading: boolean;
    data: IProject[] | null;
    error: string | null;
  };
  addProjectData: {
    loading: boolean;
    data: IProject | null;
    error: string | null;
  };
}

const initialState: IProjectSliceState = {
  projectListData: {
    loading: false,
    data: null,
    error: null,
  },
  addProjectData: {
    loading: false,
    data: null,
    error: null,
  },
};

const projectsSlice = createSlice({
  name: "projectsSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProjectsAsync.pending, (state) => {
      state.projectListData = {
        loading: true,
        data: null,
        error: null,
      };
    });
    builder.addCase(fetchProjectsAsync.fulfilled, (state, response) => {
      state.projectListData = {
        loading: false,
        data: response.payload as IProject[],
        error: null,
      };
    });
    builder.addCase(fetchProjectsAsync.rejected, (state, response) => {
      state.projectListData = {
        loading: false,
        data: null,
        error: response.error.message as string,
      };
    });
  },
});

export default projectsSlice.reducer;
