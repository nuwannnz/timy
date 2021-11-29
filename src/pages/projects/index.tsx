import { PlusOutlined } from "@ant-design/icons";
import { Button, Layout, Typography } from "antd";
import { Content, Header } from "antd/lib/layout/layout";
import React from "react";
import ProjectList from "./components/ProjectList";
import ProjectsPageHeader from "./components/projectsPageHeader";
import "./projects.css";

const ProjectsPage: React.FC = () => {
  return (
    <Layout className="project-layout">
      <Header className="project-header">
        <ProjectsPageHeader />
      </Header>
      <Content className="project-content">
        <ProjectList />
      </Content>
    </Layout>
  );
};

export default ProjectsPage;
