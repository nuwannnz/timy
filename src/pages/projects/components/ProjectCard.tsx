import { Card } from "antd";
import React from "react";

interface Props {
  project: IProject;
  onProjectSelect: (projectId: string) => void;
}
const ProjectCard: React.FC<Props> = ({ project, onProjectSelect }) => {
  return (
    <Card
      title={project.name}
      bordered={false}
      style={{ width: "300px" }}
    ></Card>
  );
};

export default ProjectCard;
