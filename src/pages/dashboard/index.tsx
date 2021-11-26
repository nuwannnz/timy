import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Outlet, useNavigate } from "react-router-dom";

// components
import { auth } from "../../firebaseAuth";
import { Layout } from "antd";
import { Content } from "antd/lib/layout/layout";
import SideBar from "./components/sideBar";
import "./dashboard.css";

const DashboardPage: React.FC = () => {
  const navigate = useNavigate();
  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    if (loading) return;

    if (!user) navigate("/", { replace: true });
  }, [user, navigate, loading]);

  return (
    <Layout style={{ height: "100vh" }}>
      <SideBar />
      <Content>
        <Outlet />
      </Content>
    </Layout>
  );
};

export default DashboardPage;
