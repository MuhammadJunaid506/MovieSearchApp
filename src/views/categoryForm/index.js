import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Form, Input, List, Row, Col, Checkbox, Select, message } from 'antd';
import { Get, Post,Put } from "../../config/api"
import { useNavigate } from 'react-router';
import UserContext from '../../config/context/user/UserContext';
import { CATEGORY } from "../../config/constants/api";
import { useEffect, useState, useContext } from 'react';
import "react-quill/dist/quill.snow.css";
const { Option } = Select;

const CategoryForm = () => {
    const navigate = useNavigate()
    const id = window.location.pathname.split("/")[3]
    const { user, token } = useContext(UserContext)
    const initialState = {
        name: "",
        description: ""
    }
    const [formData, setFormData] = useState(initialState)
    const [categoryForm] = Form.useForm();


    useEffect(() => {
        if (id) {
            console.log("ID FOUND",id)
            getCategory()
        }
    }, [])

    const getCategory = () => {
        try {
            Get(`${CATEGORY.get}/${id}`, token)
                .then((response) => {
                    if (response.status) {
                        console.log("response",response)
                        setFormData({
                          ...formData,
                          name:response.data.name,
                          description:response.data.description
                        });
                        categoryForm.setFieldsValue({
                            name:response.data.name,
                            description:response.data.descriptions
                        });
                    }
                    else {
                        message.error(response.message ? response.message : "Something went wrong")
                    }
                })
                .catch((error) => {
                    message.error(error.message ? error.message : "Something went wrong")
                })
        } catch (error) {
            message.error(error.message ? error.message : "Something went wrong")
        }
    }


    const onFinish = () => {
        console.log('Received values of form: ', formData);
    };

    const saveCategory = () => {
        try {
            Post(CATEGORY.save, formData, token).then((response) => {
                if (response.status) {
                    message.success('Category saved successfully!');
                    setFormData(initialState)
                }
                else {
                    message.error(response.message ? response.message : "Something went wrong!");
                }
            })
        } catch (error) {
            message.error(error.message ? error.message : "Something went wrong!");
        }
    }

    const updateCategory = () => {
        try {

            Put(`${CATEGORY.save}/${id}`,token,formData).then((response) => {
                if (response.status) {
                    message.success('Category updated successfully!')
                    setFormData({})
                    navigate("/categories")
                }
                else {
                    message.error(response.message)
                }
            })
        } catch (error) {
            message.error(error.message)
        }
    }

    return (
        <Form
        form={categoryForm}
            layout="vertical"
            onFinish={onFinish}
        >
            <Row gutter={[16, 0]}>
                <Col span={12}>
                    <Form.Item label="Category Name" name="name" required>
                        <Input
                            placeholder="Enter category name"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                    </Form.Item>
                </Col>
                <Col span={24}>
                    <Form.Item label="Description" name="description">
                        <Input.TextArea
                            rows={6}
                            placeholder="category description"
                            value={formData.description}
                            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                        />
                    </Form.Item>
                </Col>
            </Row>

            <Row gutter={[16, 0]}>
                <Col span={12}>
                    <Form.Item>
                        <Button type="primary" htmlType="button" onClick={() =>  id ? updateCategory() :  saveCategory()}>Submit</Button>
                    </Form.Item>
                </Col>
            </Row>
        </Form>
    );
};

export default CategoryForm;