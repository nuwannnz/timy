import { Layout, Typography } from "antd";
import { Content, Header } from "antd/lib/layout/layout";
import React from "react";
import LoginForm from "./components/LoginForm";
import "./auth.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, signInWithGoogle } from "../../firebaseAuth";

const { Title } = Typography;

const LoginPage: React.FC = () => {
  const [user, loading] = useAuthState(auth);

  return (
    <Layout>
      <Header className="login-header">
        <Title level={3} className="login-title">
          Login to Bloggy
        </Title>
      </Header>
      <Layout>
        <Content>
          <LoginForm
            isLoading={loading}
            onClickLogin={() => signInWithGoogle()}
          />
        </Content>
      </Layout>
    </Layout>
  );
};

export default LoginPage;
