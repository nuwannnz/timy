import {
  DashboardOutlined,
  FundProjectionScreenOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Col, Layout, Menu, Row } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { signOut } from "../../../firebaseAuth";
import UserProfile from "./UserProfile";

const { Sider } = Layout;

const MENU_ITEMS: IMenuItemData[] = [
  {
    index: 1,
    label: "Dashboard",
    icon: <DashboardOutlined />,
    to: "/dashboard",
  },
  {
    index: 2,
    label: "Projects",
    icon: <FundProjectionScreenOutlined />,
    to: "/dashboard/projects",
  },
];

const SideBar: React.FC = () => {
  return (
    <Sider>
      <Row style={{ height: "100%" }}>
        <Col className="side-bar-col">
          <div>
            <UserProfile />
            <Menu mode="inline" theme="dark">
              {MENU_ITEMS.map((menuItem) => (
                <Menu.Item key={menuItem.index} icon={menuItem.icon}>
                  <Link to={menuItem.to}>{menuItem.label}</Link>
                </Menu.Item>
              ))}
            </Menu>
          </div>

          <Menu theme="dark">
            <Menu.Item key={3} icon={<LogoutOutlined />} onClick={signOut}>
              Logout
            </Menu.Item>
          </Menu>
        </Col>
      </Row>
    </Sider>
  );
};

export default SideBar;
