import { Alert, Col, Grid, Row, Spin } from "antd";
import { Content } from "antd/lib/layout/layout";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useSelector, useDispatch } from "react-redux";
import LoadingSpinner from "../../../components/loadingSpinner";
import { auth } from "../../../firebaseAuth";
import { RootState } from "../../../store";
import { fetchProjectsAsync } from "../projects.thunk";
import ProjectCard from "./ProjectCard";
import ProjectDetailsModal from "./ProjectDetailsModal";

const ProjectList: React.FC = () => {
  const dispatch = useDispatch();
  const {
    loading,
    data: projectList,
    error: projectListError,
  } = useSelector((state: RootState) => state.projects.projectListData);

  const [user] = useAuthState(auth);

  const [selectedProject, setSelectedProject] = useState<IProject | null>(null);
  const [isProjectDetailsModalVisible, setIsProjectDetailsModalVisible] =
    useState<boolean>(false);

  /**
   * Fetch projects if not already fetched
   */
  useEffect(() => {
    if (!projectList && user) {
      dispatch(fetchProjectsAsync(user?.uid as string));
    }
  }, [user]);

  useEffect(() => {
    if (selectedProject) {
      setIsProjectDetailsModalVisible(true);
    }
  }, [selectedProject]);

  useEffect(() => {
    if (projectList && selectedProject) {
      setSelectedProject(
        projectList.find(
          (project) => project.id === selectedProject.id
        ) as IProject
      );
    }
  }, [projectList]);

  const handleProjectSelect = (projectId: string) => {
    setSelectedProject(
      projectList?.find((project) => project.id === projectId) as IProject
    );
  };

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
    <>
      {/* <div className="project-list"> */}
      <Row gutter={[16, 16]} className="project-list">
        {projectList?.map((project) => (
          <Col key={project.id} span={6}>
            <ProjectCard
              project={project}
              onProjectSelect={handleProjectSelect}
            />
          </Col>
        ))}
      </Row>
      {/* </div> */}
      <ProjectDetailsModal
        project={selectedProject as IProject}
        isOpen={isProjectDetailsModalVisible}
        onClose={() => {
          setIsProjectDetailsModalVisible(false);
          setSelectedProject(null);
        }}
      />
    </>
  );
};

export default ProjectList;
