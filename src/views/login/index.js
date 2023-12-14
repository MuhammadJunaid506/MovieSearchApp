import { Form, Input, Button, Checkbox, message } from "antd";
import React, { useContext, useState } from 'react';
import UserContext from "../../config/context/user/UserContext";
import { useNavigate } from "react-router";
import { Post } from "../../config/api"
import HeroImage from "../../assets/images/6308.jpg"
import { AUTH } from "../../config/constants/api";

const Login = () => {
    const navigate = useNavigate();
    const { user, login } = useContext(UserContext)
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })
    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            Post(AUTH.login, formData).then((response) => {
                if (response.status) {
                    login({ user: response.data.user, token: response.data.token })
                    message.success('Logged in successfully!');
                    navigate("/")
                }
                else {
                    message.error(response.message ? response.message : "Something went wrong!");
                }
            })
        } catch (error) {
            message.error(error.message ? error.message : "Something went wrong!");
        }
    };

    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className="login-page">
            <div className="login-box">
                <div className="illustration-wrapper">
                    <img src={HeroImage} alt="Login" />
                </div>
                <Form
                    name="login-form"
                    initialValues={{ remember: true }}
                >
                    <p className="form-title">Welcome back</p>
                    <p>Login to the Dashboard</p>
                    <Form.Item
                        name="username"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="Username"
                        />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password
                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                            placeholder="Password"
                        />
                    </Form.Item>

                    <Form.Item name="remember" valuePropName="checked">
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="button" className="login-form-button" onClick={(e) => handleSubmit(e)}>
                            LOGIN
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};
export default Login