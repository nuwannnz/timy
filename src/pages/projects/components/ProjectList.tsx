import { Alert, Spin } from "antd";
import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useSelector, useDispatch } from "react-redux";
import LoadingSpinner from "../../../components/loadingSpinner";
import { auth } from "../../../firebaseAuth";
import { RootState } from "../../../store";
import { fetchProjectsAsync } from "../projects.thunk";
import ProjectCard from "./ProjectCard";

const ProjectList: React.FC = () => {
  const dispatch = useDispatch();
  const {
    loading,
    data: projectList,
    error: projectListError,
  } = useSelector((state: RootState) => state.projects.projectListData);

  const [user] = useAuthState(auth);

  /**
   * Fetch projects if not already fetched
   */
  useEffect(() => {
    if (!projectList && user) {
      dispatch(fetchProjectsAsync(user?.uid as string));
    }
  }, [user]);

  const handleProjectSelect = (projectId: string) => {};

  if (loading) {
    return <LoadingSpinner tip="Loading your projects" />;
  }

  if (projectListError) {
    return (
      <Alert
        type="error"
        message="Failed to fetch your projects"
        description={projectListError}
      />
    );
  }

  return (
    <div>
      {projectList?.map((project) => (
        <ProjectCard
          key={project.uid}
          project={project}
          onProjectSelect={handleProjectSelect}
        />
      ))}
    </div>
  );
};

export default ProjectList;
