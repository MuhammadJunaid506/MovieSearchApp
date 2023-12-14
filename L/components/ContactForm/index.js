import { useState } from "react";
import {
  Col,
  Row,
  Typography,
  Form,
  Input,
  message,
  Spin,
  List,
  Select,
  Upload,
  Image,
  Button,
} from "antd";
const { Dragger } = Upload;
import { InboxOutlined, UnderlineOutlined } from "@ant-design/icons";
import Link from "next/link";
import { CONTACTS } from "../../config/constants/api";
import { Post } from "../../config/api";
import { LoadingOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";
import { FaPhoneAlt } from "react-icons/fa";
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";
import { AiOutlineYoutube } from "react-icons/ai";
import { IoIosChatboxes } from "react-icons/io";
import { MdMail } from "react-icons/md";
const { Option } = Select;
const { TextArea } = Input;

const ContactForm = ({ title, subtitle }) => {
  const router = useRouter();
  const [contactForm] = Form.useForm();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "",
    message: "",
    image: "",
  });
  const [categories, setCategories] = useState([
    "Logo Design",
    "Web Design",
    "Mobile Apps",
    "Animation",
    "Branding",
    "Digital Marketing",
    "General Inquiry",
  ]);
  const [loading, setLoading] = useState(false);

  const saveForm = () => {
    setLoading(true);
    // create a formdata object
    const data = new FormData();
    // add the form data to the object
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("phone", formData.phone);
    data.append("serviceType", formData.serviceType);
    data.append("message", formData.message);
    data.append("image", formData.image);

    try {
      Post(CONTACTS.save, data).then((response) => {
        setLoading(false);
        if (response.status) {
          message.success("Your message has been sent successfully");
          setFormData({
            name: "",
            email: "",
            phone: "",
            serviceType: "",
            message: "",
            image: "",
          });
          contactForm.setFieldsValue({
            name: "",
            email: "",
            phone: "",
            serviceType: "",
            message: "",
            image: "",
          });
          router.push("/thankyou-message");
        } else {
          message.error(
            response.message ? response.message : "Something went wrong"
          );
        }
      });
    } catch (error) {
      message.error(error.message ? error.message : "Something went wrong");
    }
  };

  const antIcon = (
    <LoadingOutlined
      style={{
        color: "#1e292f",
        fontSize: 24,
      }}
      spin
    />
  );
  return (
    <>
      <Row
        style={{
          marginBottom: -200,
          justifyContent: "center",
          padding: "100px 50px 250px",
          background: "url(/images/form_bg.png) ",
        }}
        id="contact"
      >
        <Col span={18}>
          <Row style={{ justifyContent: "center", width: "100%" }} gutter={10}>
            <Col xs={24} lg={10}>
              <Typography.Title
                level={3}
                className="tekoFont"
                style={{ color: "white ", fontSize: 40, fontWeight: 600, marginTop: 20 }}
              >
                {title}
              </Typography.Title>
              <Typography.Text style={{ color: "white", fontSize: 18 }}>
                Smart Organizations need smart digital Solutions. Learn more
                about the services we can offer your business.
              </Typography.Text>
            </Col>
            <Col xs={24} lg={7}>
              <div style={{ minHeight: "120px" }}>
                <Row>
                  <Col xs={24} lg={7}>
                    <div
                      style={{
                        backgroundColor: "red",
                        width: "70px",
                        height: "70px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "200px",
                      }}
                    >
                      {/* <h1 style={{ color: "white", margin: 0 }}>14</h1> */}
                      <Image src="/images/index_red_62.png"/>
                    </div>
                  </Col>
                  <Col xs={24} lg={17}>
                    <Typography.Title
                      level={3}
                      className="tekoFont"
                      style={{
                        color: "white ",
                        fontSize: 35,
                        fontWeight: 400,
                        marginBottom: 0,
                      }}
                    >
                      Strategy
                    </Typography.Title>
                    <Typography.Text
                      style={{
                        color: "white",
                        fontSize: 12,
                        fontWeight: "normal",
                        lineHeight: "1px",
                      }}
                    >
                      Smart Organizations need smart digital Solutions. Learn
                      more about the services we can offer your business.
                    </Typography.Text>
                  </Col>
                </Row>
              </div>
              <br />
              <br />
              <div style={{ minHeight: "120px" }}>
                <Row>
                  <Col xs={24} lg={8}>
                    <div
                      style={{
                        backgroundColor: "red",
                        width: "70px",
                        height: "70px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "200px",
                      }}
                    >
                      {/* <h1 style={{ color: "white", margin: 0 }}>14</h1> */}
                      <Image src="/images/index_red_65.png"/>
                    </div>
                  </Col>
                  <Col xs={24} lg={16}>
                    <Typography.Title
                      level={3}
                      className="tekoFont"
                      style={{
                        color: "white ",
                        fontSize: 35,
                        fontWeight: 400,
                        marginBottom: 0,
                      }}
                    >
                      DEVELOPEMENT
                    </Typography.Title>
                    <Typography.Text
                      style={{
                        color: "white",
                        fontSize: 12,
                        fontWeight: "normal",
                        lineHeight: "1px",
                      }}
                    >
                      Smart Organizations need smart digital Solutions. Learn
                      more about the services we can offer your business.
                    </Typography.Text>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col xs={24} lg={7}>
            <div style={{ minHeight: "120px" }}>
              <Row>
                <Col xs={24} lg={8}>
                  <div
                    style={{
                      backgroundColor: "red",
                      width: "70px",
                      height: "70px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "200px",
                    }}
                  >
                    {/* <h1 style={{ color: "white", margin: 0 }}>14</h1> */}
                    <Image src="/images/index_red_70.png"/>
                  </div>
                </Col>
                <Col xs={24} lg={16}>
                  <Typography.Title
                    level={3}
                    className="tekoFont"
                    style={{
                      color: "white ",
                      fontSize: 35,
                      fontWeight: 400,
                      marginBottom: 0,
                    }}
                  >
                    CREATIVE
                  </Typography.Title>
                  <Typography.Text
                    style={{
                      color: "white",
                      fontSize: 12,
                      fontWeight: "normal",
                      lineHeight: "1px",
                    }}
                  >
                    Fresh approaches, new ideas, and stand out sites are our
                    speciality.
                  </Typography.Text>
                </Col>
              </Row>
              </div>
              <br />
              <br />
              <div style={{ minHeight: "120px" }}>
              <Row>
                <Col xs={24} lg={8}>
                  <div
                    style={{
                      backgroundColor: "red",
                      width: "70px",
                      height: "70px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "200px",
                    }}
                  >
                    {/* <h1 style={{ color: "white", margin: 0 }}>14</h1> */}
                    <Image src="/images/index_red_71.png"/>
                  </div>
                </Col>
                <Col xs={24} lg={16}>
                  <Typography.Title
                    level={3}
                    className="tekoFont"
                    style={{
                      color: "white ",
                      fontSize: 35,
                      fontWeight: 400,
                      marginBottom: 0,
                    }}
                  >
                    MARKETING
                  </Typography.Title>
                  <Typography.Text
                    style={{
                      color: "white",
                      fontSize: 12,
                      fontWeight: "normal",
                      lineHeight: "1px",
                    }}
                  >
                    Fresh approaches, new ideas, and stand out sites are our
                    speciality.
                  </Typography.Text>
                </Col>
              </Row>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row style={{ marginBottom: 70, justifyContent: "center" }}>
        <Col xs={24} lg={15}>
          <Row
            style={{
              justifyContent: "center",
              padding: "0px",
              overflow: "hidden",            
            }}
            gutter={20}
          >
            <Col
              xs={24}
              md={10}
           
            >
              <div    style={{
                backgroundColor: "#f0f3fa",
                padding: "0px",
                minHeight: "440px",
                position: "relative",
                overflow: "hidden",
                display:'flex',
                justifyContent:'space-between',
                flexDirection:'column',
                alignItems:'center'

              }}>
                <div style={{padding:"30px"}}>

              <h4 style={{ color: "black", fontSize: "30px",textAlign:'center',fontWeight:'bold' }} className="tekoFont">
                Help Your Business Win!
              </h4>
              <p style={{ color: "black",fontSize:'12px' }}>
              Industry Experts with the right SkillSet and exposure will make sure to bring an innovation and great design for your product to make it an emerging brand 
              </p> 
    
              <p style={{ color: "black",fontSize:'12px', fontWeight:700 }}>
                <><span style={{ color: "red", textDecoration:"underline" }}>99% Customer Satisfaction</span>  Based on 750+ reviews and 20,000 Objective Resource</>
             
              </p> 
                </div>
              <Image preview={false} src={'/images/index_red_19.png'} style={{width:'100%',height:'100%'}}/>

              </div>
            </Col>
            <Col xs={24} md={14} >
            <div    style={{
                backgroundColor: "#f0f3fa",
                padding: "30px",
                minHeight: "465px",
                position: "relative",
                overflow: "hidden",
              }}>
            <h1 style={{ fontSize:"14px", marginLeft:"50px" , color:"#fe1f07" ,fontFamily:"Lato",lineHeight:0.1}}>Want to create something beautyful?</h1>
            <h1 style={{ fontSize:"30px", marginLeft:"50px", fontFamily:"Teko",fontWeight:"bolder"  }}>Send us a message. </h1>
              <Form
                form={contactForm}
                name="normal_login"
                className="login-form"
                initialValues={{
                  remember: true,
                }}
                onFinish={() => saveForm()}
              >
                <Row style={{ justifyContent: "center" }} gutter={[20, 0]}>
                  <Col xs={20} md={10}>
                    <Form.Item
                      name="firstName"
                      rules={[
                        {
                          required: true,
                          message: "This field is required!",
                        },
                      ]}
                    >
                      <Input
                        placeholder="First Name*"
                        value={formData?.firstName}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            firstName: e.target.value,
                          })
                        }
                        style={{
                          borderRadius: 5,
                          height: 42,
                          background: "white",
                          fontSize:"12px",
                          borderRadius:50,
                          boxShadow: "none",
                          borderColor: "transparent",
                        }}
                      />
                    </Form.Item>
                  </Col>
                  <Col xs={20} md={10}>
                    <Form.Item
                      name="lastName"
                      rules={[
                        {
                          required: true,
                          message: "This field is required!",
                        },
                      ]}
                    >
                      <Input
                        placeholder="Last Name*"
                        value={formData?.lastName}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            lastName: e.target.value,
                          })
                        }
                        style={{
                          borderRadius: 5,
                          height: 42,
                          background: "white",
                          fontSize:"12px",
                          borderRadius:50,
                          boxShadow: "none",
                          borderColor: "transparent",
                        }}
                      />
                    </Form.Item>
                  </Col>
                  <Col xs={20} md={10}>
                    <Form.Item
                      name="phone"
                      rules={[
                        {
                          required: true,
                          message: "This field is required!",
                        },
                      ]}
                    >
                      <Input
                        placeholder="Your Phone*"
                        value={formData?.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        style={{
                          borderRadius: 5,
                          height: 42,
                          background: "white",
                          fontSize:"12px",
                          borderRadius:50,
                          boxShadow: "none",
                          borderColor: "transparent",
                        }}
                      />
                    </Form.Item>
                  </Col>
                  <Col xs={20} md={10}>
                    <Form.Item
                      name="email"
                      rules={[
                        {
                          required: true,
                          message: "This field is required!",
                        },
                      ]}
                    >
                      <Input
                        type={"email"}
                        value={formData?.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="Email Address"
                        style={{
                          borderRadius: 5,
                          height: 42,
                          background: "white",
                          fontSize:"12px",
                          borderRadius:50,
                          boxShadow: "none",
                          borderColor: "transparent",
                        }}
                      />
                    </Form.Item>
                  </Col>
                
                  
                  
                  <Col span={20}>
                    <Form.Item
                      name="message"
                      rules={[
                        {
                          required: true,
                          message: "This field is required!",
                        },
                      ]}
                    >
                      <TextArea
                        value={formData?.message}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            message: e.target.value,
                          })
                        }
                        placeholder="your message in detail"
                        rows={6}
                        style={{
                          borderRadius: 5,
                          background: "white",
                          fontSize:"12px",
                          padding:20,
                          borderRadius:20,
                          boxShadow: "none",
                          borderColor: "transparent",
                        }}
                      />
                    </Form.Item>
                  </Col>
                </Row>
                <Row
                  style={{
                    textAlign: "left",
                    justifyContent: "flex-start",
                    padding: "0px 50px",
                  }}
                >
                  <Form.Item
                    style={{
                      textAlign: "center",
                      textAlignLast: "center",
                      marginTop: 0,
                    }}
                  >
                    <button
                      className="ant-btn"
                      disabled={loading}
                      type="submit"
                      style={{
                        background: loading ? "#f97526bf" : "#fe1f07",
                        color: "#fff",
                        borderColor: loading ? "#f97526bf" : "#fe1f07",
                        borderRadius: "5px",
                        height: "35px",
                        fontSize: "12px",
                        padding: "0px 40px",
                        float:'left',
                        fontWeight: 500,
                        marginTop: "5px",
                      }}
                    >
                      {loading ? <Spin indicator={antIcon} /> : "Get Started"}
                    </button>
                  </Form.Item>
                </Row>
              </Form>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default ContactForm;
