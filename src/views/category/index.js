import React, { useEffect, useState,useContext } from "react"
import { Card, Row, Col, Button, Space, Table, Modal, message,Typography } from 'antd';
import { useNavigate } from "react-router";
import { Get,Delete } from "../../config/api";
import { CATEGORY } from "../../config/constants/api";
import UserContext from "../../config/context/user/UserContext";


const Categories = () => {

    const { token, user } = useContext(UserContext);
    const navigate = useNavigate()
    const [visible, setVisible] = useState(false);
    const [currentItem, setCurrentItem] = useState({});

    const columns = [
        {
            title: 'Category Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                       <a
                      onClick={() => navigate(`/category/update/${record._id}`)}
                    >
                      Edit
                    </a>
                    <a
                      onClick={() => {
                        setVisible(true);
                        setCurrentItem(record);
                      }}
                    >
                      Delete
                    </a>
                </Space>
            ),
        },
    ];
    const [categories, setCategories] = useState([])

    useEffect(() => {
        getCategories()
    }, [])

    const getCategories = () => {
        try {
            Get(CATEGORY.get).then((response) => {
                if (response.status) {
                    setCategories(response.data)
                } else {
                    message.error(response.message ? response.message : "Something went wrong!");
                }
            })
        } catch (error) {
            message.error(error.message ? error.message : "Something went wrong!");
        }
    }

    const deleteCategory = () => {
        try {
          Delete(`${CATEGORY.delete}/${currentItem._id}`, token).then(
            (response) => {
              if (response.status) {
                message.success(response.message);
                setVisible(false);
                getCategories();
              } else {
                message.error(
                  response.message ? response.message : "Something went wrong!"
                );
              }
            }
          );
        } catch (error) {
          message.error(error.message ? error.message : "Something went wrong!");
        }
      };


    return (
        <>
            <Row style={{ textAlign: "right" }}>
                <Col span={24}>
                    <Button onClick={() => navigate("/category/new")}>Add Category</Button>
                </Col>
            </Row>
            <Table
                columns={columns}
                dataSource={categories}
            />
            <Modal
          title={"Warning!"}
          visible={visible}
          onOk={() => deleteCategory()}
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
            Are you sure you want to delete this Category. This will delete all fields associated with it as well?
          </Typography.Text>
        </Modal>
        </>
    );

}
export default Categories;