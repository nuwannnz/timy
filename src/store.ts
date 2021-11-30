import { configureStore } from "@reduxjs/toolkit";
import projectsReducer from "./pages/projects/projects.slice";

export const store = configureStore({
  reducer: {
    projects: projectsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
