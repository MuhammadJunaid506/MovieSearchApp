import React, { useEffect, useState, useContext } from "react";
import {
  Row,
  Image,
  Col,
  Button,
  Space,
  Table,
  Tag,
  message,
  Modal,
  Typography,
  Select,
  Form,
} from "antd";
import { useNavigate } from "react-router";
import { Get, Post, Delete, Put } from "../../config/api";
import moment from "moment";
import { ORDERS, UPLOADS_URL } from "../../config/constants/api";
import UserContext from "../../config/context/user/UserContext";

const Orders = () => {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const [visibleRequirements, setVisibleRequirements] = useState(false);
  const [updateModalVisible, setUpdateModalVisible] = useState(false);
  const [currentOrder, setCurrentOrder] = useState({});

  const { user, token } = useContext(UserContext);
  const columns = [
    {
      title: "Order Id",
      dataIndex: "orderId",
      key: "orderId",
    },
    {
      title: "Customer",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Plan",
      dataIndex: "plan",
      key: "plan",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (value) =>
        value === "Completed" ? (
          <Tag color="green">{value}</Tag>
        ) : (
          <Tag color="red">{value}</Tag>
        ),
    },
    {
      title: "Order Date",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (value) => moment(value).format("DD-MM-YYYY"),
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a
            onClick={() => {
              setVisibleRequirements(true);
              setCurrentOrder(record);
            }}
          >
            View Requirements
          </a>
          <a
            onClick={() => {
              setUpdateModalVisible(true);
              setCurrentOrder(record);
            }}
          >
            Change Status
          </a>
          <a
            onClick={() => {
              setVisible(true);
              setCurrentOrder(record);
            }}
          >
            Delete
          </a>
        </Space>
      ),
    },
  ];
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    getOrders();
  }, []);

  const getOrders = () => {
    try {
      Get(ORDERS.get, token).then((response) => {
        if (response.status) {
          setOrders(response.data);
        } else {
          message.error(
            response.message ? response.message : "Something went wrong!"
          );
        }
      });
    } catch (error) {
      message.error(error.message ? error.message : "Something went wrong!");
    }
  };

  const deleteOrder = () => {
    try {
      Delete(`${ORDERS.delete}/${currentOrder?._id}`, token)
        .then((response) => {
          if (response.status) {
            message.success(
              response.message ? response.message : "Something went wrong!"
            );
            setVisible(false);
            getOrders();
          } else {
            message.error(
              response.message ? response.message : "Something went wrong!"
            );
          }
        })
        .catch((error) => {
          message.error(
            error.message ? error.message : "Something went wrong!"
          );
        });
    } catch (error) {
      message.error(error.message ? error.message : "Something went wrong!");
    }
  };

  const updateOrderStatus = () => {
    try {
      Put(`${ORDERS.update}/${currentOrder?._id}`, token, {
        status: currentOrder?.status,
      })
        .then((response) => {
          if (response.status) {
            message.success(
              response.message ? response.message : "Something went wrong!"
            );
            setUpdateModalVisible(false);
            getOrders();
          } else {
            message.error(
              response.message ? response.message : "Something went wrong!"
            );
          }
        })
        .catch((error) => {
          message.error(
            error.message ? error.message : "Something went wrong!"
          );
        });
    } catch (error) {
      message.error(error.message ? error.message : "Something went wrong!");
    }
  };

  return (
    <>
      <Table
        columns={columns}
        dataSource={orders?.map((item) => {
          return { ...item, plan: item.plan?.name };
        })}
      />
      <Modal
        title={"Warning!"}
        visible={visible}
        onOk={() => deleteOrder()}
        onCancel={() => setVisible(false)}
        okText="Yes"
        cancelText="Cancel"
        okButtonProps={{
          style: {
            backgroundColor: "#f5222d",
            color: "white",
            borderColor: "#f5222d",
          },
        }}
      >
        <Typography.Text>
          Are you sure you want to delete this order?
        </Typography.Text>
      </Modal>
      <Modal
        title={"Requirements"}
        visible={visibleRequirements}
        onCancel={() => setVisibleRequirements(false)}
        cancelText="Close"
        footer={[
          <Button key="back" onClick={() => setVisibleRequirements(false)}>
            Close
          </Button>,
        ]}
      >
        < div
          style={{
            display: "flex",
            flexDirection: "column",
            maxHeight: "500px",
            overflow: "auto",
          }}
        >
          <Row
            style={{
              display: "flex",
              padding:"10px 0px",
              textAlign: "left",
              alignItems: "center",
            }}
          >
            <Col xs={10}>
              <Typography.Title level={4} style={{ fontSize: "14px" }}>
                Current Logo :{" "}
              </Typography.Title>
            </Col>
            <Col xs={14}>
              <Image
                src={`${UPLOADS_URL}/uploads/${currentOrder?.image}`}
                style={{ objectFit: "cover", height: "150px" }}
              />
            </Col>
          </Row>

          <Row
            style={{
              display: "flex",
              padding:"10px 0px",
              textAlign: "left",
              alignItems: "center",
            }}
          >
            <Col xs={10}>
              <Typography.Title level={4} style={{ fontSize: "14px" }}>
                Logo Text :{" "}
              </Typography.Title>{" "}
            </Col>
            <Col xs={14}>
              {" "}
              <Typography.Text>
                {currentOrder?.requirements?.logoText}
              </Typography.Text>
            </Col>
          </Row>
          <Row
            style={{
              display: "flex",
              padding:"10px 0px",
              textAlign: "left",
              alignItems: "center",
            }}
          >
            <Col xs={10}>
              <Typography.Title level={4} style={{ fontSize: "14px" }}>
                Tagline :{" "}
              </Typography.Title>{" "}
            </Col>
            <Col xs={14}>
              {" "}
              <Typography.Text>
                {currentOrder?.requirements?.tagline}
              </Typography.Text>
            </Col>
          </Row>
          <Row
            style={{
              display: "flex",
              padding:"10px 0px",
              textAlign: "left",
              alignItems: "center",
            }}
          >
            <Col xs={10}>
              <Typography.Title level={4} style={{ fontSize: "14px" }}>
                details :{" "}
              </Typography.Title>{" "}
            </Col>
            <Col xs={14}>
              {" "}
              <Typography.Text>
                {currentOrder?.requirements?.details}
              </Typography.Text>
            </Col>
          </Row>
          <Row
            style={{
              display: "flex",
              padding:"10px 0px",
              textAlign: "left",
              alignItems: "center",
            }}
          >
            <Col xs={10}>
              <Typography.Title level={4} style={{ fontSize: "14px" }}>
                competitors :{" "}
              </Typography.Title>{" "}
            </Col>
            <Col xs={14}>
              {" "}
              <Typography.Text>
                {currentOrder?.requirements?.competitors}
              </Typography.Text>
            </Col>
          </Row>
          <Row
            style={{
              display: "flex",
              padding:"10px 0px",
              textAlign: "left",
              alignItems: "center",
            }}
          >
            <Col xs={10}>
              <Typography.Title level={4} style={{ fontSize: "14px" }}>
                Liked Logos :{" "}
              </Typography.Title>{" "}
            </Col>
            <Col xs={14}>
              {" "}
              <Typography.Text>
                {currentOrder?.requirements?.likedLogos}
              </Typography.Text>
            </Col>
          </Row>
          <Row
            style={{
              display: "flex",
              padding:"10px 0px",
              textAlign: "left",
              alignItems: "center",
            }}
          >
            <Col xs={10}>
              <Typography.Title level={4} style={{ fontSize: "14px" }}>
                Disliked Logos :{" "}
              </Typography.Title>{" "}
            </Col>
            <Col xs={14}>
              {" "}
              <Typography.Text>
                {currentOrder?.requirements?.dislikedLogos}
              </Typography.Text>
            </Col>
          </Row>
          <Row
            style={{
              display: "flex",
              padding:"10px 0px",
              textAlign: "left",
              alignItems: "center",
            }}
          >
            <Col xs={10}>
              <Typography.Title level={4} style={{ fontSize: "14px" }}>
                fontStyle :{" "}
              </Typography.Title>{" "}
            </Col>
            <Col xs={14}>
              {" "}
              <Typography.Text>
                {currentOrder?.requirements?.fontStyle}
              </Typography.Text>
            </Col>
          </Row>
          <Row
            style={{
              display: "flex",
              padding:"10px 0px",
              textAlign: "left",
              alignItems: "center",
            }}
          >
            <Col xs={10}>
              <Typography.Title level={4} style={{ fontSize: "14px" }}>
                Colors :{" "}
              </Typography.Title>{" "}
            </Col>
            <Col xs={14}>
              {" "}
              {currentOrder?.requirements?.colors.map((item, index) => {
                return (
                  <Typography.Text>
                    {item}
                    {index < currentOrder?.requirements?.colors.length - 1 &&
                      ", "}
                  </Typography.Text>
                );
              })}
            </Col>
          </Row>
          <Row
            style={{
              display: "flex",
              padding:"10px 0px",
              textAlign: "left",
              alignItems: "center",
            }}
          >
            <Col xs={10}>
              <Typography.Title level={4} style={{ fontSize: "14px" }}>
                logoCategory :{" "}
              </Typography.Title>{" "}
            </Col>
            <Col xs={14}>
              {" "}
              {currentOrder?.requirements?.logoCategory.map((item, index) => {
                return (
                  <Typography.Text style={{ display: "block" }}>
                    {item}
                  </Typography.Text>
                );
              })}
            </Col>
          </Row>
          <Row
          style={{
            display: "flex",
            textAlign: "left",
            alignItems: "center",
          }}
        >
          <Col xs={10}>
            <Typography.Title level={4} style={{ fontSize: "14px" }}>
              otherInfo :{" "}
            </Typography.Title>{" "}
          </Col>
          <Col xs={14}>
            {" "}
            <Typography.Text>
              {currentOrder?.requirements?.otherInfo}
            </Typography.Text>
          </Col>
        </Row>
        </div>
      
      </Modal>
      <Modal
        title={"Update Order Status"}
        visible={updateModalVisible}
        onOk={() => updateOrderStatus()}
        onCancel={() => setUpdateModalVisible(false)}
        okText="Yes"
        cancelText="Cancel"
        okButtonProps={{
          style: {
            backgroundColor: "#f5222d",
            color: "white",
            borderColor: "#f5222d",
          },
        }}
      >
        <Form>
          <Form.Item label="Status" placeholder="Status">
            <Select
              placeholder="Select Status"
              onChange={(value) =>
                setCurrentOrder({ ...currentOrder, status: value })
              }
            >
              <Select.Option value="Recieved">Recieved</Select.Option>
              <Select.Option value="Completed">Completed</Select.Option>
              <Select.Option value="Pending">Pending</Select.Option>
            </Select>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
export default Orders;
