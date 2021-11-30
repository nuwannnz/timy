import { Button, Col, Image, Row, Typography } from "antd";
import React from "react";
import { GoogleOutlined } from "@ant-design/icons";

const { Title } = Typography;
interface Props {
  isLoading: boolean;
  onClickLogin: () => void;
}
const LoginForm: React.FC<Props> = ({ isLoading, onClickLogin }) => {
  return (
    <Row className="login-form">
      <Col className="login-form-col">
        <Image
          src="assets/undraw_prototyping_process_re_7a6p.svg"
          width={200}
          preview={false}
          style={{ marginBottom: "40px" }}
        />
        <Title level={3} className="login-title">
          Login to Timy
        </Title>
        <Button
          type="primary"
          shape="round"
          size="large"
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
