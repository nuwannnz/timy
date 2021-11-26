import { Button } from "antd";
import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, signOut } from "../../firebaseAuth";

const DashboardPage: React.FC = () => {
  const navigate = useNavigate();
  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    if (loading) return;

    if (!user) navigate("/", { replace: true });
  }, [user, navigate, loading]);

  return (
    <div>
      {user && <span>{user.displayName}</span>}{" "}
      <Button onClick={() => signOut()}>Sign out</Button>
    </div>
  );
};

export default DashboardPage;
