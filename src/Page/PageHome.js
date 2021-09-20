import { Layout, Menu, Breadcrumb, Button, Modal } from "antd";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
  PlusCircleOutlined,
  FormOutlined,
  ShoppingCartOutlined,
  AuditOutlined ,

} from "@ant-design/icons";
import AddFrom from "../Component/AddFrom";
import { addComments, placeholder } from "@babel/types";
import React, { useState } from "react";
import Bed from "../Component/Bed";
import Wheelcahir from "../Component/Wheelchair";
import OxygenTank from "../Component/OxygenTank";
import Account from "../Component/Account";
import SeletedItem from "../Component/SelectedItem"

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
    if (key == "Account") {
      setMenuselact("Account");
    } else if (key == "Bed") {
      setMenuselact("Bed");
    } else if (key == "Wheelchair") {
      setMenuselact("Wheelchair");
    } else if (key == "OxygenTank") {
      setMenuselact("OxygenTank");
    }
    else if (key == "SeletedItem") {
      setMenuselact("SeletedItem");
    }
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">

        
          
          <Menu.Item key="1"icon={<TeamOutlined />} onClick={() => onSelect("Account")}>
            My Account
          </Menu.Item>

          <Menu.Item key="2"icon={<AuditOutlined  />} onClick={() => onSelect("")}>
            รายการยืม
          </Menu.Item>
          
          <SubMenu key="sub1" icon={<FormOutlined />} title="คลังอุปกรณ์">
            <Menu.Item key="3" onClick={() => onSelect("Bed")}>
            เตียง
            </Menu.Item>
            <Menu.Item key="4" onClick={() => onSelect("Wheelchair")}>
            รถเข็นผู้ป่วย
            </Menu.Item>
            <Menu.Item key="5" onClick={() => onSelect("OxygenTank")}>
            ถังออกซิเจน
            </Menu.Item>
          </SubMenu>
         
          <Menu.Item key="6"  icon={<ShoppingCartOutlined/>} onClick ={() => onSelect("SeletedItem")} >
            รายการที่เลือก 
          </Menu.Item>
          
          {/* <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
            <Menu.Item key="6">Team 1</Menu.Item>
            <Menu.Item key="7">Team 2</Menu.Item>
          </SubMenu> */}
          
          <Menu.Item key="7" icon={<PlusCircleOutlined />}>
            <AddFrom />
         
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: "0 15px" }}>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          >
            {menuselect == "Account" && <Account />}
            {menuselect == "Bed" && <Bed />}
            {menuselect == "Wheelchair" && <Wheelcahir />}
            {menuselect == "OxygenTank" && <OxygenTank />}
            {menuselect == "SeletedItem" && <SeletedItem />}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default PageHome;
