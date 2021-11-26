import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/auth";
import DashboardPage from "./pages/dashboard";

const LayoutPage: React.FC = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<DashboardPage />}>
        <Route path="projects" element={<span>Projects</span>} />
        <Route index element={<span>dashboard</span>} />
      </Route>
      <Route path="/" element={<LoginPage />} />
    </Routes>
  );
};

export default LayoutPage;
