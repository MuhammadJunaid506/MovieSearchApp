import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
} from '@ant-design/icons';

import { Layout, Menu, Breadcrumb } from 'antd';
import React, { useState, useEffect, useContext } from 'react';
import UserContext from '../../config/context/user/UserContext';
import { FiPackage } from "react-icons/fi"
import { useNavigate } from 'react-router';
const { Header, Sider, Content } = Layout;

const CustomLayout = ({ children, pageTitle, path, activetab }) => {
    const navigate = useNavigate();
    const { user, logout } = useContext(UserContext)
    //checking authentication
    useEffect(() => {
        if (!user) {
            navigate("/login", { replace: true })
        }
    })
    const menus = [
        {
            key: 'Plans',
            icon: <FiPackage />,
            label: 'Plans',
            onClick: () => navigate("/plans")
        },
        {
            key: 'Posts',
            icon: <FiPackage />,
            label: 'Posts',
            onClick: () => navigate("/posts")
        },
        {
            key: 'Portfolio',
            icon: <FiPackage />,
            label: 'Portfolio',
            onClick: () => navigate("/portfolio")
        },
        {
            key: 'Orders',
            icon: <FiPackage />,
            label: 'Orders',
            onClick: () => navigate("/orders")
        },
        {
            key: 'Inquiries',
            icon: <FiPackage />,
            label: 'Inquiries',
            onClick: () => navigate("/inquries")
        },
        {
            key: 'Reviews',
            icon: <FiPackage />,
            label: 'Reviews',
            onClick: () => navigate("/reviews")
        },
        {
            key: 'Categories',
            icon: <FiPackage />,
            label: 'Categories',
            onClick: () => navigate("/categories")
        },
        {
            key: 'Logout',
            icon: <FiPackage />,
            label: 'Logout',
            onClick: () => logout()
        },
    ]
    const [collapsed, setCollapsed] = useState(false);

    const [selected, setSelected] = useState(menus?.find(item => item.key === activetab)?.key);
    path = window.location.pathname.split("/")
    pageTitle = pageTitle ? pageTitle + " - Logo Design Company" : "Admin - Logo Design Company"

    return (
        <Layout>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="logo-name">
                    Admin Panel
                </div>
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={[selected]}
                    items={menus}
                />
            </Sider>
            <Layout className="site-layout">
                <Header
                    className="site-layout-background"
                    style={{
                        padding: "0 20px",
                        textAlign: "left"
                    }}
                >
                    {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                        className: 'trigger',
                        onClick: () => setCollapsed(!collapsed),
                    })}
                </Header>
                <Breadcrumb style={{
                    padding: "20px 20px 0px",
                }}>
                    <Breadcrumb.Item style={{ textTransform: "capitalize" }}>Dashboard</Breadcrumb.Item>
                    {path?.map((item, index) =>
                        <Breadcrumb.Item key={index} style={{ textTransform: "capitalize" }}>{(item.length === 24) ? "Update" : item}</Breadcrumb.Item>
                    )}
                </Breadcrumb>
                <Content
                    className="site-layout-background content"
                    style={{
                        margin: '24px 16px',
                        padding: "24px 12px 24px 24px",
                        minHeight: 280,
                        overflowY: "scroll"
                    }}
                >
                    {children}
                </Content>
            </Layout>
        </Layout>
    );
};

export default CustomLayout;
