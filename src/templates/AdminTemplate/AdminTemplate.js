import React, { useEffect, useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, theme } from "antd";
import { Link, Outlet } from "react-router-dom";
import { getLocalStore } from "../../utils/local";
import PageRestricted from "../../components/PageRestricted";
const { Header, Sider, Content } = Layout;

const AdminTemplate = () => {
  const user = getLocalStore('user_info')

  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <div>
      {
        user != null && user.maLoaiNguoiDung === 'GV' ?
        (<Layout className="min-h-screen">
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="demo-logo-vertical" />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
            items={[
              {
                key: "/admin/qlhv",
                icon: <UserOutlined />,
                label: <Link to={"/admin/qlhv"}>QLTK Học Viên</Link>,
              },
              {
                key: "/admin/qlgv",
                icon: <VideoCameraOutlined />,
                label: <Link to={"/admin/qlgv"}>QLTK Giáo Viên</Link>,
              },
              {
                key: "/admin/qlkh",
                icon: <UploadOutlined />,
                label: <Link to={"/admin/qlkh"}>Quản lí Khóa Học</Link>,
              },
              {
                key: "/admin/qlgdkh",
                icon: <UploadOutlined />,
                label: <Link to={"/admin/qlgdkh"}>Quản lí ghi danh khóa học</Link>,
              },
              {
                key: "/admin/qlgdnd",
                icon: <UploadOutlined />,
                label: <Link to={"/admin/qlkh"}>Quản lí ghi danh người dùng</Link>,
              }
            ]}
          />
        </Sider>
        <Layout>
          <Header
            style={{
              padding: 0,
              background: colorBgContainer,
            }}
          >
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: "16px",
                width: 64,
                height: 64,
              }}
            />
          </Header>
          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet />
          </Content>
        </Layout>
      </Layout>) : <PageRestricted/>
      }
    </div>
    
  );
};

export default AdminTemplate;
