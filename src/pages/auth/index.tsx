import { Layout, Typography } from "antd";
import { Content, Header } from "antd/lib/layout/layout";
import React, { useEffect } from "react";
import LoginForm from "./components/LoginForm";
import "./auth.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, signInWithGoogle } from "../../firebaseAuth";
import { useNavigate } from "react-router-dom";

const { Title } = Typography;

const LoginPage: React.FC = () => {
  const navigation = useNavigate();
  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    if (loading) return;
    if (user) navigation("/dashboard", { replace: true });
  }, [user, loading, navigation]);

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
