import { Layout, Menu, Breadcrumb, Button, Modal } from "antd";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
  PlusCircleOutlined,
  FormOutlined,
} from "@ant-design/icons";
import AddFrom from "../Component/AddFrom";
import { addComments, placeholder } from "@babel/types";
import React, { useState } from "react";
import Bed from "../Component/Bed";
import Wheelcahir from "../Component/Wheelchair";
import OxygenTank from "../Component/OxygenTank";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const PageHome = () => {
  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = (collapsed) => {
    console.log(collapsed);
    setCollapsed(collapsed);
  };
  const [menuselect, setMenuselact] = useState(" ");

  const onSelect = (key) => {
    if (key == "Bed") {
      setMenuselact("Bed");
    } else if (key == "Wheelchair") {
      setMenuselact("Wheelchair");
    } else if (key == "OxygenTank") {
      setMenuselact("OxygenTank");
    }
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
          <Menu.Item key="1" icon={<PieChartOutlined />}>
            Option 1
          </Menu.Item>
          <Menu.Item key="2" icon={<DesktopOutlined />}>
            Option 2
          </Menu.Item>
          <SubMenu key="sub1" icon={<FormOutlined />} title="Type">
            <Menu.Item key="3" onClick={() => onSelect("Bed")}>
              Bed
            </Menu.Item>
            <Menu.Item key="4" onClick={() => onSelect("Wheelchair")}>
              Wheelchair
            </Menu.Item>
            <Menu.Item key="5" onClick={() => onSelect("OxygenTank")}>
              OxygenTank
            </Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
            <Menu.Item key="6">Team 1</Menu.Item>
            <Menu.Item key="8">Team 2</Menu.Item>
          </SubMenu>
          <Menu.Item key="9" icon={<PlusCircleOutlined />}>
            <AddFrom />
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: "0 16px" }}>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          >
            {menuselect == "Bed" && <Bed />}
            {menuselect == "Wheelchair" && <Wheelcahir />}
            {menuselect == "OxygenTank" && <OxygenTank />}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default PageHome;
