import { useState, useEffect } from "react";
import { UserOutlined } from '@ant-design/icons';
import { Avatar, Col, Divider, Form, Input, Row, Spin, Typography, message } from "antd";
import { Image } from "antd";
import ReactHtmlParser from "react-html-parser";
import moment from "moment"
import { LoadingOutlined } from '@ant-design/icons';
import ClientLayout from '../../components/ClientLayout';
import CustomBanner from "../../components/CustomBanner";
import { useRouter } from "next/router"
import MainButton from "../../components/MainButton";
import { Get, Post } from '../../config/api';
import { POSTS, UPLOADS_URL, COMMENTS } from '../../config/constants/api';


const SingleBlog = () => {
    const router = useRouter()
    // const slug = router.pathname.split("/")[2]
    const { slug } = router.query
    const [loading, setLoading] = useState(false)
    // console.log(slug, "SLUG")
    const [post, setPost] = useState({})
    const [commentFormData, setCommentFormData] = useState({
        name: "",
        email: "",
        comment: "",
        post: ""
    })
    const [comments, setComments] = useState([])

    useEffect(() => {

        getPost()
    }, [slug])

    useEffect(() => {
        getComments()
        if (post?.post?._id) {
            setCommentFormData({ ...commentFormData, post: post.post._id })
        }
    }, [post])

    const antIcon = (
        <LoadingOutlined
            style={{
                color: "#fe1f07",
                fontSize: 55,
            }}
            spin
        />
    );



    const getPost = () => {
        setLoading(true)
        try {
            if (slug) {
                Get(`${POSTS.get}/slug/${slug}`)
                    .then((response) => {
                        setLoading(false)
                        if (response.status) {
                            setPost(response.data)
                        }
                    })
                    .catch((error) => {
                        message.error(error.message ? error.message : "Something went wrong")
                    })
            }
        } catch (error) {
            setLoading(false)
            message.error(error.message ? error.message : "Something went wrong")
        }
    }

    const getComments = () => {
        try {
            if (post?.post?._id) {
                Get(`${COMMENTS.get}/${post?.post?._id}`)
                    .then((response) => {
                        if (response.status) {
                            setComments(response.data)
                        } else {
                            message.error(response.message ? response.message : "Something went wrong")
                        }
                    })
                    .catch((error) => {
                        message.error(error.message ? error.message : "Something went wrong")
                    })
            }
        } catch (error) {
            message.error(error.message ? error.message : "Something went wrong")
        }
    }

    const saveComment = () => {
        try {
            setCommentFormData({ ...commentFormData, post: post?.post?._id })
            Post(COMMENTS.save, commentFormData)
                .then((response) => {
                    if (response.status) {
                        setCommentFormData({
                            name: "",
                            email: "",
                            comment: "",
                            post: post?.post?._id
                        })
                        message.success("Comment posted successfully")
                        getComments()
                    } else {
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



    const { TextArea } = Input
    return (
        <ClientLayout head={{ title: post.post?.title, description: post.post?.meta }}>
               <CustomBanner
        height={350}
        title={post.post?.title}
        titleLevel={3}
        onlyText={true}
        titleStyles={{
          marginTop: "5px",
          marginBottom: "10px",
          fontWeight: 900,
          fontSize: "40px",
          color: "white",
        }}
      />
           
            {loading ? <Spin indicator={antIcon} style={{margin:"100px 0"}}/> : (
                <Row style={{ justifyContent: "center", marginTop: 15 }}>
                    <Col xs={24} md={12} style={{ height: "400" }}>
                        <Row>
                            
                            <Col  style={{ textAlign: "center" }}>
                              
                                <Image preview={false} alt={"Failed to load image"} src={post.post?.image ? `${UPLOADS_URL}/${post.post?.image}` : "/images/default.jpg"} style={{ objectFit: "cover", marginTop: 35 }} />
                            </Col>
                            <Col >
                                <div style={{ marginTop: 35, textAlign: "justify" }}>
                                    {ReactHtmlParser(post.post?.content)}
                                </div>
                                <Divider />
                                {/* <Row style={{ justifyContent: "center" }} gutter={24}>
                                    <FaFacebookF style={{ fontSize: 38, marginLeft: 10, color: "white", background: "#365493", padding: "7px 0", borderRadius: 25 }} />
                                    <FaTwitter style={{ fontSize: 38, marginLeft: 10, color: "white", background: "#3CF", padding: "7px 0", borderRadius: 25 }} />
                                    <FaPinterest style={{ fontSize: 38, marginLeft: 10, color: "white", background: "#CB2027", padding: "7px 0", borderRadius: 25 }} />
                                    <FaLinkedinIn style={{ fontSize: 38, marginLeft: 10, color: "white", background: "#0274B3", padding: "7px 0", borderRadius: 25 }} />
                                    <FaTelegram style={{ fontSize: 38, marginLeft: 10, color: "white", background: "#37AEE2", padding: "7px 0", borderRadius: 25 }} />
                                </Row>

                                <Row style={{ marginTop: 50 }}>
                                    <Col span={8}>
                                        {post.prevPost && (
                                            <div style={{ display: "flex", alignItems: "center", cursor: "pointer" }} onClick={() => router.push(`/blog/${post.nextPost?.slug}`)}>
                                                <LeftCircleOutlined style={{ fontSize: 24 }} />
                                                <div style={{ marginLeft: 10 }}>
                                                    <Typography.Title style={{ fontSize: 14, fontWeight: 600, color: "#BBB" }} level={3}>
                                                        Previous Post
                                                    </Typography.Title>
                                                    <Typography.Title style={{ fontSize: 14, fontWeight: 600 }} level={3}>
                                                        {post.prevPost?.title}
                                                    </Typography.Title>
                                                </div>
                                            </div>
                                        )}
                                    </Col>
                                    <Col span={8} style={{ textAlign: "center" }}>
                                        <BsGrid style={{ fontSize: 38, marginLeft: 10, color: "#BBB", padding: "7px 0" }} />
                                    </Col>
                                    <Col span={8}>
                                        <div style={{ display: "flex", alignItems: "center", cursor: "pointer" }} onClick={() => router.push(`/blog/${post.nextPost?.slug}`)}>
                                            <div style={{ marginLeft: 10 }}>
                                                <Typography.Title style={{ fontSize: 14, fontWeight: 600, color: "#BBB" }} level={3}>
                                                    Previous Post
                                                </Typography.Title>
                                                <Typography.Title style={{ fontSize: 14, fontWeight: 600 }} level={3}>
                                                    {post.nextPost?.title}
                                                </Typography.Title>
                                            </div>
                                            <RightCircleOutlined style={{ fontSize: 24 }} />
                                        </div>
                                    </Col>
                                </Row>

                                <Divider /> */}

                                <Row style={{ padding: "10px 0" }}>
                                    <Col span={24}>
                                        <Row>
                                        {comments.length > 0 && <Typography.Title style={{ fontSize: 18, fontWeight: 600, marginBottom: 0 }} level={3}>
                                            Comments
                                        </Typography.Title>}
                                            {/* List all comments */}
                                            {comments?.map((comment, index) => (
                                                <Col span={24} key={index}>
                                                    <Row style={{ marginTop: 20 }}>
                                                        <Col xs={24} md={2}>
                                                            <Avatar size={40} icon={<UserOutlined />} />
                                                        </Col>
                                                        <Col xs={24} md={22}>
                                                            <Typography.Title style={{ fontSize: 17, fontWeight: 600 }} level={3}>
                                                                {comment.name}
                                                            </Typography.Title>

                                                            <Typography.Paragraph style={{ fontSize: 14, color: "#A4A4A4" }}>
                                                                {comment.comment}
                                                            </Typography.Paragraph>
                                                            <Typography.Text style={{ fontSize: 14, color: "#A4A4A4" }}>
                                                                {moment(comment.createdAt).format("DD, MMMM YYYY")}
                                                            </Typography.Text>
                                                        </Col>

                                                    </Row>
                                                </Col>
                                            ))}

                                        </Row>
                                    </Col>
                                    <Col  style={{ marginTop: 5 }}>
                                        <Typography.Title style={{ fontSize: 20, fontWeight: 600, marginBottom: 0 }} level={3}>
                                            Post a Comment
                                        </Typography.Title>
                                        <Typography.Text>
                                            Your email address will not be published. Required fields are marked
                                            <span style={{ color: "red" }}>*</span>
                                        </Typography.Text>
                                        <Form
                                            name="normal_login"
                                            className="login-form"
                                            initialValues={{
                                                remember: true,
                                            }}
                                            onFinish={() => true}
                                        >
                                            <Row gutter={[16, 16]}>
                                                <Col xs={24} >
                                                    <TextArea
                                                        value={commentFormData?.comment}
                                                        onChange={(e) => setCommentFormData({ ...commentFormData, comment: e.target.value })}
                                                        placeholder="To help us understand better, enter a brief description about you"
                                                        rows={8}
                                                        style={{ borderRadius: 5, background: "#efefef", boxShadow: "none", borderColor: "lightgrey" }}
                                                    />
                                                </Col>
                                            </Row>
                                            <Row gutter={[16, 16]} style={{ marginTop: 20 }}>
                                                <Col xs={24} md={12}>
                                                    <Form.Item
                                                        name="fullName"
                                                        rules={[
                                                            {
                                                                required: true,
                                                                message: 'This field is required!',
                                                            },
                                                        ]}
                                                    >
                                                        <Input
                                                            value={commentFormData?.name}
                                                            onChange={(e) => setCommentFormData({ ...commentFormData, name: e.target.value })}
                                                            placeholder="Full Name"
                                                            style={{ borderRadius: 5, height: 42, background: "#efefef", boxShadow: "none", borderColor: "lightgrey" }}
                                                        />
                                                    </Form.Item>
                                                </Col>
                                                <Col xs={24} md={12}>
                                                    <Form.Item
                                                        name="email"
                                                        rules={[
                                                            {
                                                                required: true,
                                                                message: 'This field is required!',
                                                            },
                                                        ]}
                                                    >
                                                        <Input
                                                            value={commentFormData?.email}
                                                            onChange={(e) => setCommentFormData({ ...commentFormData, email: e.target.value })}
                                                            placeholder="Email"
                                                            style={{ borderRadius: 5, height: 42, background: "#efefef", boxShadow: "none", borderColor: "lightgrey" }}
                                                        />
                                                    </Form.Item>
                                                </Col>
                                                <Col span={20}>
                                                    <Form.Item style={{ textAlign: "left" }}>
                                                        <MainButton
                                                            style={{
                                                                fontSize: 17,
                                                                padding: "10px 30px",
                                                                height: "auto",
                                                                fontWeight: 500,
                                                                borderRadius: 0,
                                                                color:'white'
                                                            }}
                                                            onClick={() => saveComment()}
                                                        >
                                                            Post Comment
                                                        </MainButton>
                                                    </Form.Item>
                                                </Col>
                                            </Row>
                                        </Form>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            )}
        </ClientLayout>
    )
}

export default SingleBlog