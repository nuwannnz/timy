import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  addProjectAsync,
  addTodoAsync,
  deleteTodoAsync,
  fetchProjectsAsync,
  updateProjectAsync,
} from "./projects.thunk";

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
  addTodoData: {
    loading: boolean;
    data: IProject | null;
    error: string | null;
  };
  deleteTodoData: {
    loading: boolean;
    deletingTodoId: string | null;
    data: IProject | null;
    error: string | null;
  };
  updateProjectData: {
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
  addTodoData: {
    loading: false,
    data: null,
    error: null,
  },
  deleteTodoData: {
    loading: false,
    deletingTodoId: null,
    data: null,
    error: null,
  },
  updateProjectData: {
    loading: false,
    data: null,
    error: null,
  },
};

const projectsSlice = createSlice({
  name: "projectsSlice",
  initialState,
  reducers: {
    resetAddProjectData: (state) => {
      state.addProjectData = initialState.addProjectData;
    },
    resetAddTodoData: (state) => {
      state.addTodoData = initialState.addTodoData;
    },
    resetDeleteTodoData: (state) => {
      state.deleteTodoData = initialState.deleteTodoData;
    },
    resetUpdateProjectData: (state) => {
      state.updateProjectData = initialState.updateProjectData;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProjectsAsync.pending, (state) => {
      state.projectListData = {
        ...initialState.projectListData,
        loading: true,
      };
    });
    builder.addCase(fetchProjectsAsync.fulfilled, (state, response) => {
      state.projectListData = {
        ...initialState.projectListData,
        data: response.payload as IProject[],
      };
    });
    builder.addCase(fetchProjectsAsync.rejected, (state, response) => {
      state.projectListData = {
        ...initialState.projectListData,
        error: response.error.message as string,
      };
    });

    builder.addCase(addProjectAsync.pending, (state) => {
      state.addProjectData = {
        ...initialState.addProjectData,
        loading: true,
      };
    });
    builder.addCase(addProjectAsync.fulfilled, (state, response) => {
      state.addProjectData = {
        ...initialState.addProjectData,
        data: response.payload as IProject,
      };
      state.projectListData.data = [
        response.payload as IProject,
        ...(state.projectListData.data as IProject[]),
      ];
    });
    builder.addCase(addProjectAsync.rejected, (state, response) => {
      state.addProjectData = {
        ...initialState.addProjectData,
        error: response.error.message as string,
      };
    });

    builder.addCase(addTodoAsync.pending, (state) => {
      state.addTodoData = {
        ...initialState.addTodoData,
        loading: true,
      };
    });
    builder.addCase(addTodoAsync.fulfilled, (state, response) => {
      const updatedProject = response.payload as IProject;
      state.addTodoData = {
        ...initialState.addTodoData,
        data: updatedProject,
      };
      state.projectListData.data = state.projectListData.data?.map((project) =>
        project.id === updatedProject.id ? updatedProject : project
      ) as IProject[];
    });
    builder.addCase(addTodoAsync.rejected, (state, response) => {
      state.addTodoData = {
        ...initialState.addTodoData,
        error: response.error.message as string,
      };
    });

    builder.addCase(deleteTodoAsync.pending, (state, action) => {
      state.deleteTodoData = {
        ...initialState.deleteTodoData,
        loading: true,
        deletingTodoId: action.meta.arg.todo.uid as string,
      };
    });
    builder.addCase(deleteTodoAsync.fulfilled, (state, response) => {
      const updatedProject = response.payload as IProject;
      state.deleteTodoData = {
        ...initialState.deleteTodoData,
        data: updatedProject,
      };
      state.projectListData.data = state.projectListData.data?.map((project) =>
        project.id === updatedProject.id ? updatedProject : project
      ) as IProject[];
    });
    builder.addCase(deleteTodoAsync.rejected, (state, response) => {
      state.deleteTodoData = {
        ...initialState.deleteTodoData,
        error: response.error.message as string,
      };
    });

    builder.addCase(updateProjectAsync.pending, (state) => {
      state.updateProjectData = {
        ...initialState.updateProjectData,
        loading: true,
      };
    });
    builder.addCase(updateProjectAsync.fulfilled, (state, response) => {
      const updatedProject = response.payload as IProject;
      state.updateProjectData = {
        ...initialState.updateProjectData,
        data: updatedProject,
      };
      state.projectListData.data = state.projectListData.data?.map((project) =>
        project.id === updatedProject.id ? updatedProject : project
      ) as IProject[];
    });
    builder.addCase(updateProjectAsync.rejected, (state, response) => {
      state.updateProjectData = {
        ...initialState.updateProjectData,
        error: response.error.message as string,
      };
    });
  },
});

export const {
  resetAddProjectData,
  resetAddTodoData,
  resetDeleteTodoData,
  resetUpdateProjectData,
} = projectsSlice.actions;
export default projectsSlice.reducer;
