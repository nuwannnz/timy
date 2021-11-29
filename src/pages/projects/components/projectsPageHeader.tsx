import { PlusOutlined } from "@ant-design/icons";
import { Button, Typography } from "antd";
import React from "react";

const { Title } = Typography;

const ProjectsPageHeader: React.FC = () => {
  return (
    <div className="project-page-header">
      <Title level={2} style={{ marginBottom: "0px" }}>
        Projects
      </Title>
      <Button type="primary" style={{ marginLeft: "20px" }}>
        <PlusOutlined />
      </Button>
    </div>
  );
};

export default ProjectsPageHeader;
