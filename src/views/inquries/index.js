import React, { useEffect, useState, useContext } from "react"
import { Card, Row, Col, Button, Space, Table, Tag, message, Modal, Typography, Select, Form } from 'antd';
import { useNavigate } from "react-router";
import { Get, Post, Delete, Put } from "../../config/api";
import moment from "moment"
import { INQUIRY } from "../../config/constants/api";
import UserContext from "../../config/context/user/UserContext";


const Inquiry = () => {

    const navigate = useNavigate()
    const [visible, setVisible] = useState(false);
    const [updateModalVisible, setUpdateModalVisible] = useState(false);
    const [currentOrder, setCurrentOrder] = useState({})

    const { user, token } = useContext(UserContext)
    const columns = [
        {
            title: 'Name',
            dataIndex: 'firstName',
            key: 'firstName',
            render: (_, record) => (<>{record.firstName} {record.lastName}</>)
          },
        {
            title: 'Phone',
            dataIndex: 'phone',
            key: 'phone',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Country',
            dataIndex: 'country',
            key: 'country',
        },
        {
            title: 'Service',
            dataIndex: 'serviceType',
            key: 'serviceType',
        },
        {
            title: 'Message',
            dataIndex: 'message',
            key: 'serviceType',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <a onClick={() => {
                        setUpdateModalVisible(true)
                        setCurrentOrder(record)

                    }}>Details</a>
                    <a onClick={() => {
                        setVisible(true)
                        setCurrentOrder(record)
                    }}>Delete</a>
                </Space>
            ),
        },
    ];
    const [inquries, setInquries] = useState([])

    useEffect(() => {
        getInquries()
    }, [])

    const getInquries = () => {
        try {
            Get(INQUIRY.get, token).then((response) => {
                if (response.status) {
                    setInquries(response.data)
                } else {
                    message.error(response.message ? response.message : "Something went wrong!");
                }
            })
        } catch (error) {
            message.error(error.message ? error.message : "Something went wrong!");
        }
    }

    const deleteInquiry = () => {
        try {
            Delete(`${INQUIRY.delete}/${currentOrder._id}`, token)
                .then((response) => {
                    if (response.status) {
                        message.success(response.message ? response.message : "Something went wrong!");
                        setVisible(false)
                        getInquries()
                    } else {
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
        <>
            <Table
                columns={columns}
                dataSource={inquries?.map((item) => {
                    return { ...item, plan: item.plan?.name }
                })}
            />
            <Modal
                title={"Warning!"}
                visible={visible}
                onOk={() => deleteInquiry()}
                onCancel={() => setVisible(false)}
                okText="Yes"
                cancelText="Cancel"
                okButtonProps={{ style: { backgroundColor: "#f5222d", color: "white", borderColor: "#f5222d" } }}
            >
                <Typography.Text>Are you sure you want to delete this Inquiry?</Typography.Text>
            </Modal>
            <Modal
                title={"Inquiry Details"}
                visible={updateModalVisible}
                onCancel={() => setUpdateModalVisible(false)}
                footer={[
                    <Button key="back" onClick={() => setUpdateModalVisible(false)}>
                      Close
                    </Button>]}
          
                // okButtonProps={{ style: { backgroundColor: "#f5222d", color: "white", borderColor: "#f5222d" } }}
            >
                <div style={{display:'flex', flexDirection:'column', maxHeight:"500px", overflow:'auto'}}>

                <div style={{display:'flex'}}><Typography.Title level={4} style={{fontSize:"14px"}}>First Name : </Typography.Title> &emsp; <Typography.Text>{currentOrder.firstName}</Typography.Text></div>
                <div style={{display:'flex'}}><Typography.Title level={4} style={{fontSize:"14px"}}>Last Name : </Typography.Title> &emsp; <Typography.Text>{currentOrder.lastName}</Typography.Text></div>
                <div style={{display:'flex'}}><Typography.Title level={4} style={{fontSize:"14px"}}>Email : </Typography.Title> &emsp; <Typography.Text>{currentOrder.email}</Typography.Text></div>
                <div style={{display:'flex'}}><Typography.Title level={4} style={{fontSize:"14px"}}>Phone : </Typography.Title> &emsp; <Typography.Text>{currentOrder.phone}</Typography.Text></div>
                <div style={{display:'flex'}}><Typography.Title level={4} style={{fontSize:"14px"}}>Country : </Typography.Title> &emsp; <Typography.Text>{currentOrder.country}</Typography.Text></div>
                <div style={{display:'flex'}}><Typography.Title level={4} style={{fontSize:"14px"}}>Service : </Typography.Title> &emsp; <Typography.Text>{currentOrder.serviceType}</Typography.Text></div>
                <div style={{display:'flex'}}><Typography.Title level={4} style={{fontSize:"14px"}}>Message : </Typography.Title> &emsp; <Typography.Text>{currentOrder.message}</Typography.Text></div>
            
                </div>

            </Modal>
        </>
    );

}
export default Inquiry;