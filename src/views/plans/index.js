import React, { useEffect, useState,useContext } from "react"
import { Card, Row, Col, Button, Space, Table, Tag, message,Modal,Typography } from 'antd';
import { useNavigate } from "react-router";
import { Get,Delete } from "../../config/api";
import UserContext from "../../config/context/user/UserContext";
import { PLANS } from "../../config/constants/api";


const Plans = () => {

    const navigate = useNavigate()

    const columns = [
        {
            title: 'Plan Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Original Price',
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: 'Discount',
            dataIndex: 'discount',
            key: 'discount',
            render: (value) => value + "%"
        },
        {
            title: 'Discounted Price',
            dataIndex: 'discountedPrice',
            key: 'discountedPrice',
        },
        {
            title: 'Category',
            dataIndex: 'category',
            key: 'category',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                   <a onClick={() => navigate(`/plans/update/${_._id}`)}>Edit</a>
                   <a onClick={() => {
                                        setVisible(true)
                                        setCurrentItem(record)
                                    }}>Delete</a>
                </Space>
            ),
        },
    ];
    const { token, user } = useContext(UserContext)
    const [plans, setPlans] = useState([])
    const [currentItem, setCurrentItem] = useState({})
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        getPlans()
    }, [])

    const getPlans = () => {
        try {
            Get(PLANS.get+"?limit=10000").then((response) => {
                if (response.status) {
                    setPlans(response.data)
                } else {
                    message.error(response.message ? response.message : "Something went wrong!");
                }
            })
        } catch (error) {
            message.error(error.message ? error.message : "Something went wrong!");
        }
    }

    const deletePlan = () => {

        try {
            Delete(`${PLANS.delete}/${currentItem._id}`, token)
                .then((response) => {
                    if (response.status) {
                         message.success("Plan Deleted Successfully");
                        setVisible(false)
                        getPlans()
                    }
                    else {
                        message.error(response.message ? response.message : "Something went wrong!");
                    }
                })
        } catch (error) {
            message.error(error.message ? error.message : "Something went wrong!");
        }
    }


    return (
        <>
            <Row style={{ textAlign: "right" }}>
                <Col span={24}>
                    <Button onClick={() => navigate("/plans/new")}>Add Plan</Button>
                </Col>
            </Row>
            <Table
                columns={columns}
                dataSource={plans?.map((item, index) => {
                    return {
                        ...item,
                        category: item.category.name,
                    }
                })}
            />

             <Modal
                title={"Warning!"}
                visible={visible}
                onOk={() => deletePlan()}
                onCancel={() => setVisible(false)}
                okText="Yes"
                cancelText="Cancel"
                okButtonProps={{ style: { backgroundColor: "#f5222d", color: "white", borderColor: "#f5222d" } }}
            >
                <Typography.Text>Are you sure you want to delete this Plan?</Typography.Text>
            </Modal>
        </>
    );

}
export default Plans;