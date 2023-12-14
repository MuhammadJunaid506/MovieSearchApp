import { MinusCircleOutlined, InboxOutlined } from '@ant-design/icons';
import { Button, Form, Input, Image, Row, Col, Checkbox, Select, message,Upload } from 'antd';
import { Get, Post ,Put} from "../../config/api"
import { useNavigate } from 'react-router';
import UserContext from '../../config/context/user/UserContext';
import { REVIEW,CATEGORY,UPLOADS_URL } from "../../config/constants/api";
import { useEffect, useState, useContext } from 'react';
import "react-quill/dist/quill.snow.css";
const { Option } = Select;
const { Dragger } = Upload;

const ReviewForm = () => {
    const navigate = useNavigate()
    const id = window.location.pathname.split("/")[3]
    const [reviewForm] = Form.useForm();
    const { user, token } = useContext(UserContext)
    const [formData, setFormData] = useState({
        title: "",
        company: "",
        customer: "",
        alt: "",
        picture: "",
        category: "",
        content:"",
    })
    const [categories, setCategories] = useState([])

    useEffect(() => {
        getCategories()
        if (id) {
            console.log("ID FOUND",id)
            getReview()
        }
    }, [])


    // console.log("formObject", formObject)

    const onFinish = () => {
        console.log('Received values of form: ', formData);
    };

    
    const getReview = () => {
        try {
            Get(`${REVIEW.get}/${id}`, token)
                .then((response) => {
                    if (response.status) {
                        console.log("response",response)
                        setFormData({
                          ...formData,
                          title: response.data.title,
                          company: response.data.company !== 'undefined'   ? response.data.company : "",
                          customer: response.data.customer !== 'undefined' ? response.data.customer : "",
                          alt: response.data.alt,
                          category: response.data.category._id,
                          content: response.data.content,
                          picture_old: response.data.image,
                        });
                        reviewForm.setFieldsValue({
                          title: response.data.title,
                          company: response.data.company,
                          customer: response.data.customer,
                          alt: response.data.alt,
                          content: response.data.content,
                          category: response.data.category._id,
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

    const uploadimage = (e) => { 
        setFormData({ ...formData, picture: e.file.originFileObj })
        return false;
    }


    const saveReview = () => {
        const formObject = new FormData()
        try {
            formObject.append("category", formData.category)
            formObject.append("alt", formData.alt)
            formObject.append("content", formData.content)
            formObject.append("title", formData.title)
            formObject.append("customer", formData.customer)
            formObject.append("company", formData.company)
            formObject.append("image", formData.picture)

            Post(REVIEW.save, formObject, token).then((response) => {
                if (response.status) {
                    message.success('Review saved successfully!');
                    navigate("/reviews")
                    setFormData({})
                }
                else {
                    message.error(response.message ? response.message : "Something went wrong!");
                }
            })
        } catch (error) {
            message.error(error.message ? error.message : "Something went wrong!");
        }
    }

    const updateReview = () => {
        const formObject = new FormData()
        try {
            formObject.append("category", formData.category)
            formObject.append("alt", formData.alt)
            formObject.append("content", formData.content)
            formObject.append("title", formData.title)
            formObject.append("customer", formData.customer)
            formObject.append("company", formData.company)
            if(formData.picture){formObject.append("image", formData.picture)}

            Put(`${REVIEW.save}/${id}`, token,formObject).then((response) => {
                if (response.status) {
                    message.success('Review updated successfully!')
                    setFormData({})
                    navigate("/reviews")
                }
                else {
                    message.error(response.message)
                }
            })
        } catch (error) {
            message.error(error.message)
        }
    }

    console.log("formData", formData)

    

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

    return (
        <Form
        form={reviewForm}
            layout="vertical"
            onFinish={onFinish}
        >
            <Row gutter={[16, 0]}>
                <Col span={12}>
                    <Form.Item label="Review Title" required name="title">
                        <Input
                            placeholder="Enter Title"
                            value={formData.title}
                            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                        />
                    </Form.Item>
                </Col>
                    <Col span={12}>
                    <Form.Item label="Customer Name" required name="customer">
                        <Input
                            placeholder="Enter Customer name"
                            value={formData.customer}
                            onChange={(e) => setFormData({ ...formData, customer: e.target.value })}
                        />
                    </Form.Item>
                </Col>
                   <Col span={12}>
                    <Form.Item label="Company Name" required name="company">
                        <Input
                            placeholder="Enter Company name"
                            value={formData.company}
                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        />
                    </Form.Item>
                </Col>
                    <Col span={12}>
                    <Form.Item
                        name="category"
                        label="Category"
                        required
                    >
                        <Select
                            placeholder="Select Category"
                            onChange={(value) => setFormData({ ...formData, category: value })}
                            value={formData.category}
                            allowClear
                        >
                            {categories?.map((item, index) =>
                                <Option value={item._id} key={index}>{item.name}</Option>
                            )}
                        </Select>
                    </Form.Item>
                </Col>
                <Col span={24}>
                     <Form.Item
                        name="alt"
                        label="Image Alt"
                        
                    >
                        <Input
                            placeholder="Enter image alt text"
                            onChange={(e) => setFormData({ ...formData, alt: e.target.value })}
                        />
                    </Form.Item>
                </Col>
            

                    <Col span={id ? 12 : 24}>
                    <Form.Item
                        name="image"
                        label="Image"
                        
                    >
                        <Dragger
                            name='image'
                            multiple={false}
                            maxCount={1}
                             beforeUpload={(file, fileList) => {
                                setFormData({ ...formData, picture:fileList[0]})
                                return false;
                            }}
                            >
                            <p className="ant-upload-drag-icon">
                                <InboxOutlined />
                            </p>
                            <p className="ant-upload-text">Click or drag file to this area to upload</p>
                            <p className="ant-upload-hint">
                                Support for a single or bulk upload. Strictly prohibit from uploading company data or other
                                band files
                            </p>
                        </Dragger>
                    </Form.Item>
                </Col>

                {id &&  <Col span={12}>
                    <p style={{margin:0, textAlign:'left'}}>Current Image</p>
                    {(formData.picture_old && formData.picture_old !== "undefined") ? <Image src={`${UPLOADS_URL}/uploads/${formData.picture_old}`} style={{ objectFit: "cover", height:'200px' }} /> : <Image preview={false} src={`/placeholder.webp`} style={{ objectFit: "cover", height:"200px" }} />}
                </Col>}

                <Col span={24}>
                    <Form.Item label="Content" name="content">
                        <Input.TextArea
                            rows={6}
                            placeholder="category description"
                            value={formData.content}
                            onChange={(e) => setFormData({ ...formData, content : e.target.value })}
                        />
                    </Form.Item>
                </Col>
            </Row>

            <Row gutter={[16, 0]}>
                <Col span={12}>
                    <Form.Item>
                        <Button type="primary" htmlType="button" onClick={() => id ? updateReview() : saveReview()}>Submit</Button>
                    </Form.Item>
                </Col>
            </Row>
        </Form>
    );
};

export default ReviewForm;