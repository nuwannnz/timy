import { Button, Col, Row } from "antd";
import React from "react";
import { GoogleOutlined } from "@ant-design/icons";

interface Props {
  isLoading: boolean;
  onClickLogin: () => void;
}
const LoginForm: React.FC<Props> = ({ isLoading, onClickLogin }) => {
  return (
    <Row>
      <Col>
        <Button
          type="primary"
          shape="round"
          icon={<GoogleOutlined />}
          loading={isLoading}
          onClick={onClickLogin}
        >
          Login with Google
        </Button>
      </Col>
    </Row>
  );
};

export default LoginForm;
