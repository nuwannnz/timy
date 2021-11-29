import { PlusOutlined } from "@ant-design/icons";
import { Button, Typography } from "antd";
import React, { useState } from "react";
import AddProjectModal from "./AddProjectModal";

const { Title } = Typography;

const ProjectsPageHeader: React.FC = () => {
  const [addProjectModalVisible, setAddProjectModalVisible] = useState(false);

  return (
    <>
      <div className="project-page-header">
        <Title level={2} style={{ marginBottom: "0px" }}>
          Projects
        </Title>
        <Button
          type="primary"
          style={{ marginLeft: "20px" }}
          onClick={() => setAddProjectModalVisible(true)}
        >
          <PlusOutlined />
        </Button>
      </div>
      <AddProjectModal
        isOpen={addProjectModalVisible}
        onClose={() => setAddProjectModalVisible(false)}
      />
    </>
  );
};

export default ProjectsPageHeader;
