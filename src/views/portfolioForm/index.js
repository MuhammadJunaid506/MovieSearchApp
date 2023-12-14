import { MinusCircleOutlined, PlusOutlined, InboxOutlined } from '@ant-design/icons';
import { Button, Form, Input, Image, Row, Col, Checkbox, Select, Upload, message } from 'antd';
import { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router';
import UserContext from "../../config/context/user/UserContext"
import { Post, Get,Put } from "../../config/api"
import { PORTFOLIO, CATEGORY,UPLOADS_URL } from '../../config/constants/api';
const { Option } = Select;
const { Dragger } = Upload;

const PortfolioForm = () => {
    const id = window.location.pathname.split("/")[3]
    const [portfolioForm] = Form.useForm();
    const navigate = useNavigate()
    const { user, token } = useContext(UserContext)
    const [categories, setCategories] = useState([])
    const [formData, setFormData] = useState({
        category: "",
        alt: "",
        url:"",
        picture: "",
        picture_old:"",
    })
   

    
    const savePortfolio = () => {
        const formObject = new FormData()
        try {
            formObject.append("category", formData.category)
            formObject.append("alt", formData.alt)
            formObject.append("url", formData.url)
            formObject.append("image", formData.picture)
            Post(PORTFOLIO.save, formObject, token).then((response) => {
                if (response.status) {
                    message.success('Portfolio saved successfully!')
                    navigate("/portfolio")
                }
                else {
                    message.error(response.message)
                }
            })
        } catch (error) {
            message.error(error.message)
        }
    }

    const updatePortfolio = () => {
        const formObject = new FormData()
        try {
            formObject.append("category", formData.category)
            formObject.append("alt", formData.alt)
            formObject.append("url", formData.url)
            formObject.append("image", formData.picture)
            console.log("formObject",formData)
            Put(`${PORTFOLIO.save}/${id}`, token,formObject).then((response) => {
                if (response.status) {
                    message.success('Portfolio updated successfully!')
                    navigate("/portfolio")
                }
                else {
                    message.error(response.message)
                }
            })
        } catch (error) {
            message.error(error.message)
        }
    }

    useEffect(() => {
        getCategories()
        if (id) {
            console.log("ID FOUND",id)
            getPortfolio()
        }
    }, [])

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

    const getPortfolio = () => {
        try {
            Get(`${PORTFOLIO.get}/${id}`, token)
                .then((response) => {
                    if (response.status) {
                        console.log("response",response)
                        setFormData({
                            ...formData,
                            category: response.data.category,
                            alt: response.data.alt,
                            url:response.data.url,
                            picture_old: response.data.image,
                        })
                        portfolioForm.setFieldsValue({
                            category:response.data.category,
                            alt:response.data.alt,
                            url:response.data.url,
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


    return (
        <Form
        form={portfolioForm}
            layout="vertical"
        >
            <Row gutter={16}>
                <Col span={12}>
                    <Form.Item
                        name="category"
                        label="Category"
                        required
                    >
                        <Select
                            placeholder="Select Category"
                            onChange={(value) => setFormData({ ...formData, category: value })}
                            allowClear
                        >
                            {categories?.map((item, index) =>
                                <Option value={item._id} key={index}>{item.name}</Option>
                            )}
                        </Select>
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item
                        name="alt"
                        label="Image Alt"
                        required
                        value={formData.alt}
                    >
                        <Input
                            placeholder="Enter image alt text"
                            onChange={(e) => setFormData({ ...formData, alt: e.target.value })}
                        />
                    </Form.Item>
                </Col>
                <Col span={24}>
                    <Form.Item
                        name="url"
                        label="Protfolio Url"
                        
                        value={formData.url}
                    >
                        <Input
                            placeholder="Enter Image Url"
                            onChange={(e) => setFormData({ ...formData, url: e.target.value })}
                        />
                    </Form.Item>
                </Col>
        
                <Col span={id ? 12 : 24}>
                    <Form.Item
                        name="image"
                        label="Image"
                        required
                    >
                        <Dragger
                            name='image'
                            multiple={false}
                            height={200}
                            maxCount={1}
                            beforeUpload={(file, fileList) => {
                                setFormData({ ...formData, picture:fileList[0]})
                                return false;
                            }}>
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
                <Image src={`${UPLOADS_URL}/uploads/${formData.picture_old}`} style={{ objectFit: "cover", height:'200px' }} />
                </Col>}
            </Row>

            <Row gutter={[16, 0]}>
                <Col span={12}>
                    <Form.Item>
                        <Button type="primary" htmlType='submit' onClick={() => id ? updatePortfolio() : savePortfolio()}>Submit</Button>
                    </Form.Item>
                </Col>
            </Row>
        </Form >
    )
}

export default PortfolioForm