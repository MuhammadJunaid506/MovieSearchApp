import React, { useEffect, useState, useContext } from "react"
import { Card, Row, Col, Button, Space, Table, Tag, message, Modal, Typography, Upload } from 'antd';
import { useNavigate } from "react-router";
import { Get, Delete, Post } from "../../config/api";
import UserContext from "../../config/context/user/UserContext";
import { POSTS } from "../../config/constants/api";
import FileSaver from "file-saver";
import { InboxOutlined } from "@ant-design/icons";
import moment from "moment";

const { Dragger } = Upload;
const Posts = () => {
    const { token, user } = useContext(UserContext)
    const navigate = useNavigate()
    const [visible, setVisible] = useState(false);
    const [currentPost, setCurrentPost] = useState({})
    const [isModalVisible, setIsModalVisible] = useState(false);
    const formObject = new FormData()

    const draggerProps = {
        name: 'json',
        multiple: false,
        maxCount: 1,
        beforeUpload: (file, fileList) => {
            formObject.append("json", fileList[0])
            return false;
        }
    };

    const deletePost = (id) => {
        try {

            Delete(`${POSTS.delete}/${id}`, token)
                .then((response) => {
                    if (response.status) {
                        message.success(response.message ? response.message : "Post deleted successfully")
                        getPosts()
                    }
                    else {
                        message.error(response.message ? response.message : "Something went wrong")
                    }
                })
                .catch((error) => {
                    message.error(error.message ? error.message : "Something went wrong")
                })
            setVisible(false)
        } catch (error) {
            message.error(error.message ? error.message : "Something went wrong")
        }
    }
    const columns = [
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
        },
        {
            title: 'Category',
            dataIndex: 'category',
            key: 'category',
        },
        {
            title: 'Tags',
            dataIndex: 'tags',
            key: 'tags',
            render: (value) => value?.map((tag) => <Tag key={tag}>{tag}</Tag>)
        },
        {
            title: 'Post Date',
            dataIndex: 'postDate',
            key: 'postDate',
            width:"150px",
            render: (value) => <p style={{margin:0}}>{moment(value).format("DD MMMM YYYY")}</p>
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
                        render: (value) => <p style={{margin:0, color:value=="active" ? "green" : "red"}}>{value}</p>
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <a onClick={() => navigate(`/posts/update/${_._id}`)}>Edit</a>
                    <a onClick={() => {
                        setCurrentPost(_)
                        setVisible(true)
                    }}>Delete</a>
                </Space>
            ),
        },
    ];
    const [posts, setPosts] = useState([])
    useEffect(() => {
        getPosts();
    }, [])

    const getPosts = async () => {
        try {
            Get(POSTS.get +"?limit=1000&admin=true")
                .then((response) => {
                    if (response.status) {
                        setPosts(response?.data?.docs)
                    }
                    else {
                        console.log(response?.data?.message)
                    }
                })
                .catch((error) => {
                    console.log(error.message)
                })
        } catch (error) {
            console.log(error)
        }
    }

    const exportPosts = () => {
        try {
            Get(POSTS.export)
                .then((response) => {
                    if (response.status) {
                        FileSaver.saveAs(new Blob([JSON.stringify(response?.data)], { type: "application/json" }), "posts.json")
                        message.success("Posts exported successfully")
                    }
                    else {
                        message.error(response?.message)
                        console.log(response?.message)
                    }
                })
        } catch (error) {
            message.error(error?.message)
            console.log(error.message)
        }
    }

    const uploadPosts = () => {
        try {
            Post(POSTS.import, formObject, token)
                .then((response) => {
                    if (response?.status) {
                        message.success(response?.message)
                        getPosts()
                    }
                    else {
                        message.error(response?.message)
                    }
                })
            setIsModalVisible(false)
        } catch (error) {
            message.error(error?.message)
            console.log(error.message)
        }
    }
    return (
        <>
            <Row style={{ textAlign: "right" }}>
                <Col span={24}>
                    <Button onClick={() => navigate("/posts/new")}>Add Post</Button>
                    <Button style={{ marginLeft: 10 }} onClick={() => exportPosts()}>Export Posts</Button>
                    <Button style={{ marginLeft: 10 }} onClick={() => setIsModalVisible(true)}>Import Posts</Button>
                </Col>
            </Row>
            <Table
                columns={columns}
                dataSource={posts?.map((item) => {
                    return {
                        ...item,
                        category: item.category?.name,
                    }
                })}
            />

            <Modal
                title={"Warning!"}
                visible={visible}
                onOk={() => deletePost(currentPost._id)}
                onCancel={() => setVisible(false)}
                okText="Yes"
                cancelText="Cancel"
                okButtonProps={{ style: { backgroundColor: "#f5222d", color: "white", borderColor: "#f5222d" } }}
            >
                <Typography.Text>Are you sure you want to delete this post?</Typography.Text>
            </Modal>

            <Modal
                title="Import Posts"
                visible={isModalVisible}
                okText={"Upload"}
                onOk={uploadPosts}
                onCancel={() => {
                    formObject.delete("file")
                    setIsModalVisible(false)
                }}>
                <Dragger {...draggerProps}>
                    <p className="ant-upload-drag-icon">
                        <InboxOutlined />
                    </p>
                    <p className="ant-upload-text">Click or drag file to this area to upload</p>
                    <p className="ant-upload-hint">
                        Make sure the file is in proper JSON format
                    </p>
                </Dragger>
            </Modal>
        </>
    );

}
export default Posts;