import { useEffect, useState } from "react";
import { Row, Col, Form, Input, Upload, Button, Image } from 'antd';
import { useRouter } from "next/router"
import { PlusOutlined } from "@ant-design/icons";
import ClientLayout from '../../components/ClientLayout';
import { Get, Put } from "../../config/api";
import { ORDERS } from "../../config/constants/api";

const { TextArea } = Input
const { Dragger } = Upload;

const RequirementsForm = () => {
    const router = useRouter()
    const { id } = router.query

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        logoText: '',
        tagline: '',
        details: '',
        competitors: '',
        likedLogos: '',
        dislikedLogos: '',
        colors: ["#000"],
        fontStyle: '',
        logoCategory: [],
        otherInfo: '',
        image:'',
    })
    

    const handleSubmit = () => {
        let requirements = {...formData}
        const formObject = new FormData()
        formObject.append('image', requirements.image)
        formObject.append('requirements', JSON.stringify(formData))


        try {
            Put(`${ORDERS.update}/${id}`, "", formObject)
                .then((response) => {
                    if (response.status) {
                        router.push("/thankyou-order")
                    }
                })
                .catch((error) => {
                    console.log(error.message)
                })
        } catch (error) {
            console.log(error.message)
        }
    }

    useEffect(() => {
        getOrder()
    }, [])

    const getOrder = () => {
        try {
            Get(`${ORDERS.get}/${id}`)
                .then((response) => {
                    if (response.status) {
                        setFormData({
                            ...formData,
                            name: response.data.name,
                            email: response.data.email,
                        })
                    }
                })
                .catch((error) => {
                    console.log(error.message)
                })
        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <ClientLayout head={{ title: "Requirement Form - LogoMagicians", description: "" }}>
            <Row style={{ backgroundColor: "#000", justifyContent: "center", minHeight: 200, alignItems: "center" }}>
                <Col xs={22} md={20}>
                    <h3 style={{ fontSize: 26, color: "#fff", textAlign: "center" }}>Thank You for Placing Your Order. Your payment has been duly received.</h3>
                    <p style={{ textAlign: "center", color: "#fff", fontSize: 15 }}>Please proceed ahead and submit the below logo form.</p>
                </Col>
            </Row>

            <Row style={{ justifyContent: "center", padding: "40px 0 0", marginLeft: 0, marginRight: 0 }}>
                <Col xs={22} md={20}>
                    <h3 style={{ fontSize: 22, color: "#000", fontWeight: 600, textAlign: "center" }}>Logo Requirement Form</h3>
                </Col>

            </Row>

            <Form
                layout={"vertical"}
                initialValues={{
                    remember: true,
                }}
            >
                <Row style={{ justifyContent: "center", marginLeft: 0, marginRight: 0 }} gutter={[30, 0]}>
                    <Col xs={22} md={16}>
                        <Row style={{ marginLeft: 0, marginRight: 0, marginBottom: 35 }} gutter={[30, 0]}>
                          
                            <Col xs={24} md={12}>
                                <Form.Item label="Name" >
                                    <Input
                                        readOnly={true}
                                        style={{ height: 42, borderRadius: 5 }}
                                        placeholder="enter your name"
                                        value={formData.name}
                                    />
                                </Form.Item>
                            </Col>
                            <Col xs={24} md={12}>
                                <Form.Item label="Email">
                                    <Input
                                        readOnly={true}
                                        style={{ height: 42, borderRadius: 5 }}
                                        placeholder="enter your email"
                                        value={formData.email}
                                    />
                                </Form.Item>
                            </Col>
                            <Col xs={24} md={12}>
                                <Form.Item label="Main Logo Text" required={true} requiredMark={true}>
                                    <Input
                                        style={{ height: 42, borderRadius: 5 }}
                                        placeholder="enter main logo text"
                                        value={formData.logoText}
                                        onChange={(e) => setFormData({ ...formData, logoText: e.target.value })}
                                    />
                                </Form.Item>
                            </Col>
                            <Col xs={24} md={12}>
                                <Form.Item label="Tagline Text">
                                    <Input
                                        style={{ height: 42, borderRadius: 5 }}
                                        placeholder="enter tagline"
                                        value={formData.tagline}
                                        onChange={(e) => setFormData({ ...formData, tagline: e.target.value })}
                                    />
                                </Form.Item>
                            </Col>
                            <Col xs={24} md={24}>
                                <Form.Item label="Details Regarding Product/Services" required={true} requiredMark={true}>
                                    <TextArea
                                        style={{ borderRadius: 5 }}
                                        placeholder="enter details regarding product/services"
                                        rows={4}
                                        value={formData.details}
                                        onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                                    />
                                </Form.Item>
                            </Col>
                            <Col xs={24} md={24}>
                                <Form.Item label="Competitors and Similar business (optional)">
                                    <TextArea
                                        style={{ borderRadius: 5 }}
                                        placeholder="enter competitors and similar business (optional)"
                                        rows={4}
                                        value={formData.competitors}
                                        onChange={(e) => setFormData({ ...formData, competitors: e.target.value })}
                                    />
                                </Form.Item>
                            </Col>
                            <Col xs={24} md={24}>
                                <Form.Item label="logos you like and why?" required={true} requiredMark={true}>
                                    <TextArea
                                        style={{ borderRadius: 5 }}
                                        placeholder="enter logos you like and why?"
                                        rows={4}
                                        value={formData.likedLogos}
                                        onChange={(e) => setFormData({ ...formData, likedLogos: e.target.value })}
                                    />
                                </Form.Item>
                            </Col>
                            <Col xs={24} md={24}>
                                <Form.Item label="logos you dislike and why?" required={true} requiredMark={true}>
                                    <TextArea
                                        style={{ borderRadius: 5 }}
                                        placeholder="enter logos you dislike and why?"
                                        rows={4}
                                        value={formData.dislikedLogos}
                                        onChange={(e) => setFormData({ ...formData, dislikedLogos: e.target.value })}
                                    />
                                </Form.Item>
                            </Col>
                            <Col xs={24} md={24}>
                                <Form.Item label="Upload Your Existing Logo Or File" required={true} requiredMark={true}>
                                    <Dragger
                                        name='image'
                                        multiple={false}
                                        maxCount={1}
                                         beforeUpload={(file, fileList) => {
                                setFormData({ ...formData, image:fileList[0]})
                                return false;
                            }}>
                                        <p className="ant-upload-hint">
                                            We accpet only (JPG, JPEG, PNG, GIF) file formats
                                        </p>
                                    </Dragger>
                                </Form.Item>
                            </Col>
                            <Col xs={24} md={24}>
                                <div style={{ marginBottom: 25 }}>
                                    <div class="ant-col ant-form-item-label">
                                        <label
                                            class="ant-form-item-required"
                                            title="Logo Colors"
                                        >
                                            Logo Colors
                                        </label>
                                    </div>
                                    <Row>
                                        {formData.colors.map((color, index) =>
                                            <Input
                                                key={index}
                                                type="color"
                                                style={{
                                                    borderRadius: 5,
                                                    height: 50,
                                                    width: 50,
                                                    padding: 4,
                                                    marginRight: 5
                                                }}
                                                placeholder="enter logos you dislike and why?"
                                                rows={4}
                                                value={color}
                                                onInput={(e) => {
                                                    let colors = [...formData.colors];
                                                    colors.splice(index, 1, e.target.value);
                                                    console.log("SADSADASDS")
                                                    console.log(colors)
                                                    setFormData({ ...formData, colors: colors });
                                                }}
                                            />
                                        )}
                                        <Button
                                            style={{
                                                height: 50,
                                                width: 50,
                                                borderRadius: 5,
                                            }}
                                            onClick={() => setFormData({ ...formData, colors: [...formData.colors, "#000"] })}
                                        >
                                            <PlusOutlined />
                                        </Button>
                                    </Row>
                                </div>
                            </Col>
                            <Col xs={24} md={24}>
                                <Form.Item label="Logo Font Style">
                                    <Input
                                        onChange={(e) => setFormData({ ...formData, fontStyle: e.target.value })}
                                        style={{ height: 42, borderRadius: 5 }}
                                        placeholder="enter logo font style"
                                    />
                                </Form.Item>
                            </Col>
                            <Col span={24}>
                                <div style={{ marginBottom: 25 }}>
                                    <div class="ant-col ant-form-item-label">
                                        <label
                                            class="ant-form-item-required"
                                            title="Logo Colors"
                                        >
                                            Choose Your Logo style 
                                        </label>
                                    </div>
                                    <Row>
                                        {[
                                            { title: "Just Font Logos", image: "/images/capture.png" },
                                            { title: "Symbolic Font Logos", image: "/images/capture1.png" },
                                            { title: "Initials based Logos", image: "/images/capture2.png" },
                                            { title: "Shape Enclosed Logos", image: "/images/capture3.png" },
                                            { title: "Abstract Graphic Logos", image: "/images/capture4.png" },
                                            { title: "Concept/Name Based Graphic Logos", image: "/images/capture5.png" },
                                            { title: "Animal Based Logos", image: "/images/capture6.png" },
                                            { title: "Seals/Crests Logos", image: "/images/capture7.png" },
                                        ].map((item, index) => {
                                            return (
                                                <div key={index} style={{ borderRadius: 5, border: "1px solid rgba(0,0,0,.125)", boxShadow: "0 3px 6px rgb(0 0 0 / 16%), 0 3px 6px rgb(0 0 0 / 23%)", padding: "1.25rem", margin: "15px 0" }}>
                                                    <div style={{ display: "flex", alignItems: "center" }}>
                                                        <Input
                                                            type="checkbox"
                                                            style={{
                                                                borderRadius: 5,
                                                                padding: 4,
                                                                marginRight: 5,
                                                                width: 14
                                                            }}
                                                            rows={4}
                                                            name="logoCategory"
                                                            onChange={(e) => {
                                                                if (e.target.checked) {
                                                                    setFormData({ ...formData, logoCategory: [...formData.logoCategory, item.title] })
                                                                } else {
                                                                    let logoCategory = [...formData.logoCategory];
                                                                    logoCategory.splice(logoCategory.indexOf(item.title), 1);
                                                                    setFormData({ ...formData, logoCategory: logoCategory })
                                                                    // setFormData({ ...formData, logoCategory: formData.logoCategory.filter(item => item !== item.title) })
                                                                }

                                                            }}
                                                        />
                                                        <h3 style={{ marginBottom: 0 }}>{item.title}</h3>
                                                    </div>
                                                    <Image alt={"Failed to load image"} src={item.image} preview={false} />
                                                </div>
                                            )
                                        }
                                        )}
                                    </Row>
                                </div>
                            </Col>
                            <Col span={24}>
                                <Form.Item label="Any Other Information you consider important to mention" >
                                    <TextArea style={{ borderRadius: 5 }} placeholder="enter Any Other Information you consider important to mention" rows={4}  value={formData.otherInfo} onChange={(e) => setFormData({ ...formData, otherInfo: e.target.value })} />
                                </Form.Item>
                            </Col>

                            <Col span={24} style={{ textAlign: "center" }}>
                                <Button
                                    style={{
                                        borderRadius: 0,
                                        background: "#fe1f07",
                                        color: "#fff",
                                        minWidth: 100,
                                        minHeight: 42,
                                        margin: "0 auto",
                                        border: "none"
                                    }}
                                    onClick={() => handleSubmit()}
                                >
                                    Submit
                                </Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Form>
        </ClientLayout>
    );
}
export default RequirementsForm
