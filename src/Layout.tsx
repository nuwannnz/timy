import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Route, Routes, useNavigate } from "react-router-dom";
import { auth } from "./firebaseAuth";
import LoginPage from "./pages/auth";
import DashboardPage from "./pages/dashboard";

const LayoutPage: React.FC = () => {
  const navigation = useNavigate();
  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    if (loading) return;
    if (user) navigation("/dashboard", { replace: true });
  }, [user, loading, navigation]);
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
    </Routes>
  );
};

export default LayoutPage;
