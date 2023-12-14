import React, { useEffect, useState,useContext } from "react"
import { Modal, Typography, Row, Col, Button, Space, Table, Tag, message,Image } from 'antd';
import { useNavigate } from "react-router";
import { Get,Delete } from "../../config/api";
import { REVIEW,UPLOADS_URL } from "../../config/constants/api";
import UserContext from "../../config/context/user/UserContext";

const Reviews = () => {
  const { token, user } = useContext(UserContext);
    const navigate = useNavigate()
    const [visible, setVisible] = useState(false);
    const [currentItem, setCurrentItem] = useState({});
    const [reviews, setReviews] = useState([])
    const columns = [
      {
        title: "Title",
        dataIndex: "title",
        key: "title",
      },
      {
        title: "Content",
        dataIndex: "content",
        key: "content",
      },
      {
        title: "Customer",
        dataIndex: "customer",
        key: "customer",
      },
      {
        title: "Company",
        dataIndex: "company",
        key: "company",
      },
      {
        title: "Category",
        dataIndex: "category",
        key: "category",
        render: (_, record) => (
          <Tag color={record.category.color}>{record.category.name}</Tag>
        ),
      },
      {
        title: "Image",
        dataIndex: "image",
        key: "image",
        render: item => (item && item !== 'undefined') ? <Image alt="image not found" src={`${UPLOADS_URL}/uploads/${item}`} style={{ objectFit: "cover", width:"100px" }} /> : <Image preview={false} src={`/placeholder.webp`} style={{ objectFit: "cover", width:"100px" }} />,
      },
      {
        title: "Action",
        key: "action",
        render: (_, record) => (
          <Space size="middle">
             <a
                      onClick={() => navigate(`/reviews/update/${record._id}`)}
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


    useEffect(() => {
        getReviews()
    }, [])

    const getReviews = () => {
        try {
            Get(REVIEW.get+"?limit=100").then((response) => {
                if (response.status) {
                    setReviews(response.data)
                } else {
                    message.error(response.message ? response.message : "Something went wrong!");
                }
            })
        } catch (error) {
            message.error(error.message ? error.message : "Something went wrong!");
        }
    }

      const deleteReview = () => {
    try {
      Delete(`${REVIEW.delete}/${currentItem._id}`, token).then(
        (response) => {
          if (response.status) {
            setVisible(false);
            getReviews();
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
                    <Button onClick={() => navigate("/reviews/new")}>Add Review</Button>
                </Col>
            </Row>
            <Table
                columns={columns}
                dataSource={reviews}
            />
             <Modal
          title={"Warning!"}
          visible={visible}
          onOk={() => deleteReview()}
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
            Are you sure you want to delete this Review?
          </Typography.Text>
        </Modal>
        </>
    );

}
export default Reviews;