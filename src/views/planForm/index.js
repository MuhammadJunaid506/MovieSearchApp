import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Form, Input, List, Row, Col, InputNumber, Select, message } from 'antd';
import { Get, Post,Put } from "../../config/api"
import UserContext from '../../config/context/user/UserContext';
import { CATEGORY, PLANS } from "../../config/constants/api";
import { useNavigate } from 'react-router';
import { useEffect, useState, useContext } from 'react';
import "react-quill/dist/quill.snow.css";
const { Option } = Select;

const PlanForm = () => {
    const navigate = useNavigate();
    const id = window.location.pathname.split("/")[3]
    const { user, token } = useContext(UserContext)
    const [planForm] = Form.useForm();
    const [categories, setCategories] = useState([])
    const initialState = {
        name: "",
        price: "",
        category: "",
        discount: 0,
        itemsText: "",
        items: [],
        featured: false
    }
    const [formData, setFormData] = useState(initialState)

    console.log("formData", formData)

    const onFinish = () => {
        console.log('Received values of form: ', formData);
    };

    useEffect(() => {
        getCategories()
        if (id) {
            console.log("ID FOUND",id)
            getPlans()
        }
    }, [])

    console.log(formData,"formData")

    useEffect(() => {
        setFormData({ ...formData, items: formData.itemsText.split(",") })
    }, [formData.itemsText])

    const getPlans = () => {
        try {
            Get(`${PLANS.get}/${id}`, token)
                .then((response) => {
                    if (response.status) {
                        console.log("response",response)
                        setFormData({
                            ...formData,
                            name:response.data.name,
                            price:response.data.price,
                            category:response.data.category._id,
                            discount:response.data.discount,
                            items:response.data.items,
                            itemsText:response.data.items.join(","),
                        })
                        planForm.setFieldsValue({
                            category:response.data.category._id,
                        })
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

    const updatePlan = () => {
        try {
            Put(`${PLANS.save}/${id}`, token, formData).then((response) => {
                console.log(response)
                if (response.status) {
                    message.success('Plan updated successfully!')
                    navigate("/plans")
                }
                else {
                    message.error(response.message ? response.message : "Something went wrongs")
                }
            }).catch((error) => {
                message.error(error.message ? error.message : "Something went wrong")
            })
        } catch (error) {
            message.error(error.message)
        }
    }

    const getCategories = () => {
        try {
            Get(CATEGORY.get).then((response) => {
                if (response.status) {
                    setCategories(response.data)
                }
                else {
                    message.error(response.message ? response.message : "Something went wrong!");
                }
            })
        } catch (error) {
            message.error(error.message ? error.message : "Something went wrong!");
        }
    }

    const savePlan = () => {
        try {
            console.log(formData)
            Post(PLANS.save, formData, token)
                .then((response) => {
                    if (response.status) {
                        message.success('Plan saved successfully!');
                        setFormData(initialState)
                        navigate("/plans")
                    }
                    else {
                        message.error(response.message ? response.message : "Something went wrong!");
                    }
                })
                .catch((error) => {
                    message.error(error.message ? error.message : "Something went wrong!");
                })
        } catch (error) {
            message.error(error.message ? error.message : "Something went wrong!");
        }
    }

    return (
      <Form form={planForm} layout="vertical" onFinish={onFinish}>
        <Row gutter={[16, 0]}>
          <Col span={12}>
            <Form.Item label="Plane Name" required>
              <Input
                placeholder="Enter plan name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Price" required>
              <Input
                placeholder="Enter price"
                value={formData.price}
                onChange={(e) =>
                  setFormData({ ...formData, price: e.target.value })
                }
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="category" label="Category" required>
              <Select
                placeholder="Select Category"
                value={formData.category}
                onChange={(value) =>
                  setFormData({ ...formData, category: value })
                }
                allowClear
              >
                {categories?.map((item, index) => (
                  <Option key={index} value={item._id}>
                    {item.name}
                  </Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Discount">
            <InputNumber
            style={{ width: "100%" }}
      defaultValue={100}
      min={0}
      max={100}
      addonAfter="%"
          value={formData.discount}
      onChange={(value) =>
        setFormData({ ...formData, discount:value })
      }
    />
              {/* <Input
                placeholder="Enter price"
                value={formData.price}
                onChange={(e) =>
                  setFormData({ ...formData, price: e.target.value })
                }
              /> */}
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item label="Features (Comma Seperated)" required>
              <Input.TextArea
                rows={6}
                placeholder="Free hosting, free ssl, 1 year domain etc"
                value={formData.itemsText}
                onChange={(e) =>
                  setFormData({ ...formData, itemsText: e.target.value })
                }
              />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={[16, 0]}>
          <Col span={12}>
            <Form.Item>
              <Button
                type="primary"
                htmlType="button"
                onClick={() => id ? updatePlan() : savePlan()}
              
              >
                Submit
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    );
};

export default PlanForm;