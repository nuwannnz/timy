import { Avatar, Image, Typography } from "antd";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../firebaseAuth";

const { Text } = Typography;

const UserProfile: React.FC = () => {
  const [user] = useAuthState(auth);

  return (
    <div className="avatar-wrap">
      <Avatar size="large" src={<Image src={user?.photoURL || ""} />} />
      <Text>{user?.displayName}</Text>
    </div>
  );
};

export default UserProfile;
