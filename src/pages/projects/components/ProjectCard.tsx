import { Card, Progress } from "antd";
import React, { useEffect } from "react";

interface Props {
  project: IProject;
  onProjectSelect: (projectId: string) => void;
}
const ProjectCard: React.FC<Props> = ({ project, onProjectSelect }) => {
  return (
    <Card
      title={project.name}
      bordered={false}
      size="small"
      className="project-card"
    >
      {project.todos.length === 0 && (
        <Progress
          type="circle"
          percent={0}
          format={(count) => `${count} Todos`}
        />
      )}

      {project.todos.length > 0 &&
        project.todos.filter((todo) => !todo.isDone).length === 0 && (
          <Progress type="circle" percent={100} format={() => "Completed"} />
        )}

      {project.todos.length > 0 &&
        project.todos.filter((todo) => !todo.isDone).length > 0 && (
          <Progress
            type="circle"
            percent={project.todos.filter((todo) => todo.isDone).length}
            format={(count) => `${count}/${project.todos.length}`}
          />
        )}
    </Card>
  );
};

export default ProjectCard;
