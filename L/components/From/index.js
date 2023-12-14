import { useState, useEffect } from "react";
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
import { useInView } from "react-intersection-observer";

const FormC = ({ title, subtitle }) => {
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
  const [loadCount, setLoadCount] = useState(0);
  const { ref, inView } = useInView({
    threshold: 0,
  });
  useEffect(() => {
    setLoadCount(loadCount + 1);
  }, [inView]);

  return (
    <Row
      ref={ref}
      gutter={[15, 15]}
      style={{
        height: "auto",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        padding: "50px 10px",
        margin: 0,
        marginBottom: "50px",
        background: "white",
      }}
    >
      <Col
        xs={24}
        md={11}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          preview={false}
          src={"/images/contact_us_07.png"}
          style={{ maxWidth: "400px", borderRadius: "10px" }}
        />
      </Col>

      <Col
        xs={24}
        md={11}
        // className={inView && loadCount < 3 ? "flip-in-horizontal" : ""}
      >
        <Row
          style={{
            // justifyContent: "center",
            padding: "0px",
            overflow: "hidden",
            backgroundColor: "white",
            marginTop: "20px"
          }}
          gutter={20}
        >
          <Col xs={24} md={14}>
            {/* <div
              style={{
                backgroundColor: "#f0f3fa",
                padding: "30px",
                minHeight: "440px",
                maxWidth: "800px",
                position: "relative",
                overflow: "hidden",
              }}
            > */}
            <Form
              form={contactForm}
              name="normal_login"
              className="login-form"
              initialValues={{
                remember: true,
              }}
              onFinish={() => saveForm()}
            >
              <h1
                style={{
                  fontFamily: "Teko",
                  fontSize: "40px",
                  margin: "0px",
                  lineHeight: 1.0,
                }}
              >
                {" "}
                Drop Us
                <span style={{ color: "#fe1f07" }}> a Line</span>{" "}
              </h1>
              <p  style={{
                  fontSize: "12px",
                }}> 
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi repudiandae.{" "}
              </p>

              <Row gutter={[20, 0]}>
                <Col xs={24} md={11}>
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
                        // width: "11vw",
                        background: "white",
                        fontSize: "12px",
                        borderRadius: 10,
                        boxShadow: "0 2px 6px rgba(0, 0, 0, 0.15)",
                        borderColor: "transparent",
                      }}
                    />
                  </Form.Item>
                </Col>
                <Col xs={24} md={11}>
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
                        // width: "11vw",
                        background: "white",
                        fontSize: "12px",
                        borderRadius: 10,
                        boxShadow: "0 2px 6px rgba(0, 0, 0, 0.15)",
                        borderColor: "transparent",
                      }}
                    />
                  </Form.Item>
                </Col>
                <Col xs={24} md={11}>
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
                        // width: "11vw",
                        background: "white",
                        fontSize: "11px",
                        borderRadius: 10,
                        boxShadow: "0 2px 6px rgba(0, 0, 0, 0.15)",
                        borderColor: "transparent",
                      }}
                    />
                  </Form.Item>
                </Col>
                <Col xs={24} md={11}>
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
                        // width: "11vw",
                        background: "white",
                        fontSize: "12px",
                        borderRadius: 10,
                        boxShadow: "0 2px 6px rgba(0, 0, 0, 0.15)",
                        borderColor: "transparent",
                      }}
                    />
                  </Form.Item>
                </Col>

                <Col span={24}>
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
                        fontSize: "12px",
                        padding: 20,
                        // width: "30vw",
                        borderRadius: 10,
                        boxShadow: "0 2px 6px rgba(0, 0, 0, 0.15)",
                        borderColor: "transparent",
                      }}
                    />
                  </Form.Item>
                </Col>
              </Row>
              <Row
                style={{
                  textAlign: "center",
                  justifyContent: "flex-start",
                  // padding: "0px 50px",
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
                    type="submit"
                    style={{
                      background: loading ? "#f97526bf" : "#fe1f07",
                      color: "#fff",
                      borderColor: loading ? "#f97526bf" : "#fe1f07",
                      borderRadius: "5px",
                      height: "40px",
                      fontSize: "12px",
                      padding: "0px 40px",
                      float: "left",
                      fontWeight: 500,
                      marginTop: "5px",
                    }}
                  >
                    Send Message
                  </button>
                </Form.Item>
              </Row>
            </Form>
            {/* </div> */}
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default FormC;
