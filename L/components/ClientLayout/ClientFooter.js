import { Image } from "antd"
import { useRouter } from 'next/router'
import { Col, Layout, Row, List, Input ,Typography } from 'antd';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa"
import { AiOutlineMail } from "react-icons/ai";
import Link from 'next/link'

const { Footer } = Layout;
const { TextArea } = Input;

const ClientFooter = () => {
  const router = useRouter()
  return (
    <Footer style={{ height: "auto", background: "#f5f8fa", padding: "0" }}>
      {/* <Row style={{
        background: "#fe1f07",
        alignItems: "center",
        justifyContent: "center",
      }}>
        <Col xs={20} md={7} style={{ padding: "30px 0" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Image preview={false} alt={"Failed to load image"} width={104} height={100} src="/images/home_img_41.png" />
            <div style={{ display: "block", fontSize: 20, color: "white", marginLeft: 10 }}>
              <p style={{ marginBottom: "unset" }}>We've got your back</p>
              <p style={{ fontWeight: "bolder", marginBottom: "unset", fontSize: 26 }}>24 X 7 Online!</p>
            </div>
          </div>
        </Col>
        <Col xs={20} md={7} style={{ padding: "30px 0" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Image preview={false} alt={"Failed to load image"} width={104} height={100} src="/images/home_img_43.png" />
            <div style={{ display: "block", fontSize: 20, color: "white", marginLeft: 10 }}>
              <p style={{ marginBottom: "unset" }}>Consult our expert</p>
              <a
                href="tel:+00 123 4567"
                style={{ fontWeight: "bolder", marginBottom: "unset", fontSize: 26, color: "white" }}
              >
                +44 20 3290 5500
              </a>
            </div>
          </div>
        </Col>
        <Col xs={20} md={7} style={{ padding: "30px 0" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Image preview={false} alt={"Failed to load image"} width={104} height={100} src="/images/home_img_38.png" />
            <div style={{ display: "block", fontSize: 20, color: "white", marginLeft: 10 }}>
              <p style={{ marginBottom: "unset" }}>Live Support</p>
              <p style={{ fontWeight: "bolder", marginBottom: "unset", fontSize: 26 }}>
                Chat Now
              </p>
            </div>
          </div>
        </Col>
      </Row> */}
      <Row
        style={{
          background: "#161616",
          justifyContent: "center",
          padding: "0 80px",
        }}
      >
        <Col xs={24} md={24}>
          <div style={{ display: "flex" ,flexWrap:"wrap"}}>
          <h1 style={{ padding: "30px 0", fontFamily: "Teko", color:"white", fontWeight: 600, letterSpacing:1, fontSize:"30px" }}>ARE YOU READY TO LAUNCH YOUR PROJECT WITH US?</h1>

          <Col xs={24} md={6}>
            <div
              style={{
                textAlign: "center",
                padding: "30px 20px 0px",
                marginLeft:"20px",
                backgroundColor: "transparent",
                display: "flex"
              }}
            >
              <Image
                preview={false}
                alt={"Failed to load image"}
                width={50}
                height={50}
                src="/images/contact_us_11.png"
              />
            <div style={{lineHeight: 0.9 , justfyItems:"center"}} >
            <Typography.Title style={{ fontSize: 25,fontFamily:"Teko", color: "white", fontWeight:"bold" }}>Feel Free To Contact Us</Typography.Title>
            <Typography.Text
              style={{ fontSize: 14, color: "#fe1f07", fontWeight:"bold" }}
            >
              0213-456-7890
            </Typography.Text>
            </div>
            </div>
          </Col>
          <Col xs={24} md={6}>              
            <div style={{ display:"flex", flexWrap: "wrap" ,justifyContent: "center",}}>                                                                                                                            
          <Typography.Title
              style={{fontSize: 20, fontFamily:"Teko", color: "white", fontWeight: "bold",padding: "30px 50px 0px", }}
            >
              Connect With Us
            </Typography.Title>
            <div
              style={{
                textAlign: "center",
                padding: "0px 50px 0px",
                backgroundColor: "transparent",
                display:"flex",
                gap:20,
              }}
            >
              <Image
                preview={false}
                alt={"Failed to load image"}
                width={20}
                height={20}
                src="/images/contact_us_17.png"
              />
                            <Image
                preview={false}
                alt={"Failed to load image"}
                width={20}
                height={20}
                src="/images/contact_us_19.png"
              />
                            <Image
                preview={false}
                alt={"Failed to load image"}
                width={20}
                height={20}
                src="/images/contact_us_21.png"
              />
                            <Image
                preview={false}
                alt={"Failed to load image"}
                width={20}
                height={20}
                src="/images/contact_us_23.png"
              />
            </div>
            </div>
          </Col>
          </div>

          <Row style={{ justifyContent: "center" }}>
            <Col
              xs={24} md={8}
              style={{ padding: "20px 0", fontFamily: "Lato" }}
              className={"footer-column"}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <Image
                  preview={false}
                  alt={"Failed to load image"}
                  width={200}
                  style={{ maxWidth: 245 }}
                  src="/images/index_red_93.png"
                />
              </div>
              <div style={{ padding: "10px 30px 0px 10px" }}>
                <p
                  style={{
                    fontSize: 16,
                    color: "white",
                    marginTop: 10,
                    paddingRight: "20px",
                    marginBottom: 30,
                    textAlign: "justify",
                  }}
                >
                  LogoTrim is a proficient logo designing company that
                  enhances your business branding with an eye-catchy look. Our
                  artistic designers craft creative custom logo designs. Get
                  your graphic design logo with 100% satisfaction.
                </p>
              </div>
              <br />
              {/* <div>
                <h1
                  style={{
                    fontSize: 20,
                    color: "white",
                    paddingRight: "20px",
                    textAlign: "justify",
                  }}>Secure Payment Method</h1>
                <Image
                  preview={false}
                  alt={"Failed to load image"}
                  width={200}
                  style={{ maxWidth: 220 }}
                  src="/images/index_red_96.png"
                />
              </div> */}
            </Col>
            <Col xs={24} md={16}>
              <Row>
                <Col xs={0} md={24}>
                  <br />
                  <br />
                </Col>
              </Row>
              <Row>
                <Col
                  xs={24} md={5}
                  style={{
                    padding: "30px 0",
                    width: "17.5%",
                    fontFamily: "Lato",
                  }}
                  className={"footer-column"}
                >
                  <p style={{ fontWeight: 600, fontSize: 18, color: "white" }}>
                    Quick Links
                  </p>
                  <List
                    className="footer-list"
                    size="small"
                    style={{ fontSize: 16 }}
                  >
                    <List.Item
                      key="home"
                      style={{ cursor: "pointer" }}
                      onClick={() => router.push("/")}
                    >
                      Home
                    </List.Item>
                    <List.Item
                      key="about"
                      style={{ cursor: "pointer" }}
                      onClick={() => router.push("/about")}
                    >

                      About Us
                    </List.Item>
                    <List.Item
                      key="portfolio"
                      style={{ cursor: "pointer" }}
                      onClick={() => router.push("/portfolio")}
                    >
                      Portfolio
                    </List.Item>
                    {/* <List.Item
                      key="packages"
                      style={{ cursor: "pointer" }}
                      onClick={() => router.push("/pricing")}
                    >
                      Packages
                    </List.Item>
                    <List.Item
                      key="reviews"
                      style={{ cursor: "pointer" }}
                      onClick={() => router.push("/review")}
                    >
                      Reviews
                    </List.Item>
                    <List.Item
                      key="blog"
                      style={{ cursor: "pointer" }}
                      onClick={() => router.push("/blog")}
                    >
                      Blog
                    </List.Item> */}
                     <List.Item
                      key="blog"
                      style={{ cursor: "pointer" }}
                      onClick={() => router.push("/pricing")}
                    >
                      Pricing 
                    </List.Item>
                    
                    <List.Item
                      key="contact"
                      style={{ cursor: "pointer" }}
                      onClick={() => router.push("/contact")}
                    >
                      Contact Us
                    </List.Item>
                  </List>
                </Col>
                <Col
                  xs={24} md={5}
                  style={{
                    padding: "30px 0",

                    fontFamily: "Poppins",
                  }}
                  className={"footer-column"}
                >
                  <p style={{ fontWeight: 600, fontSize: 18, color: "white" }}>
                    Services
                  </p>
                  <List
                    className="footer-list"
                    size="small"
                    style={{ fontSize: 14 }}
                  >
                    <List.Item
                      key="logo-design"
                      style={{ cursor: "pointer" }}
                      onClick={() => router.push("/logo-design")}
                    >
                      Logo Design
                    </List.Item>
                    <List.Item
                      key="web-design"
                      style={{ cursor: "pointer" }}
                      onClick={() => router.push("/web-design")}
                    >
                      Web Design
                    </List.Item>
                    <List.Item
                      key="website"
                      style={{ cursor: "pointer" }}
                      onClick={() => router.push("/app-design")}
                    >
                      Mobile App Design
                    </List.Item>
                    <List.Item
                      key="app-development"
                      style={{ cursor: "pointer" }}
                      onClick={() => router.push("/app-development")}
                    >
                      App Development
                    </List.Item>
                    <List.Item
                    key="web-development"
                      style={{ cursor: "pointer" }}
                      onClick={() => router.push("/web-development")}
                    >
                      Web Development
                    </List.Item>
                    
                    {/* <List.Item
                      key="digital-marketing"
                      style={{ cursor: "pointer" }}
                      onClick={() => router.push("/digital-marketing-agency")}
                    >
                      Digital Marketing
                    </List.Item>
                    <List.Item
                      key="small-business-branding"
                      style={{ cursor: "pointer" }}
                      onClick={() => router.push("/small-business-branding")}
                    >
                      Small Business Barnding
                    </List.Item>
                    <List.Item
                      key="branding-agency"
                      style={{ cursor: "pointer" }}
                      onClick={() => router.push("/branding-agency")}
                    >
                      Branding Agency
                    </List.Item>
                    <List.Item
                      key="packaging-design"
                      style={{ cursor: "pointer" }}
                      onClick={() => router.push("/packaging-design")}
                    >
                      Packaging Design
                    </List.Item>
                    <List.Item
                      key="seo"
                      style={{ cursor: "pointer" }}
                      onClick={() =>
                        router.push("/search-engine-optimization")
                      }
                    >
                      SEO
                    </List.Item> */}
                  </List>
                  
                </Col>
                {/* <Col
                  xs={24} md={6}
                  style={{
                    padding: "30px 0",

                    fontFamily: "Lato",
                  }}
                  className={"footer-column hide-column-on-phone"}
                >
                  <p style={{ fontWeight: 600, fontSize: 18, color: "#fe1f07" }}>
                    Affordable Logos
                  </p>
                  <List
                    className="footer-list"
                    size="small"
                    style={{ fontSize: 14 }}
                  >
                    <List.Item
                      key="monogram-logo"
                      style={{ cursor: "pointer" }}
                      onClick={() => router.push("/monogram-logo-design")}
                    >
                      Monogram
                    </List.Item>
                    <List.Item
                      key="corporate-logo"
                      style={{ cursor: "pointer" }}
                      onClick={() => router.push("/corporate-logo-design")}
                    >
                      Corporate
                    </List.Item>
                    <List.Item
                      key="combination-logo"
                      style={{ cursor: "pointer" }}
                      onClick={() => router.push("/combination-logo-design")}
                    >
                      Combination
                    </List.Item>
                    <List.Item
                      key="abstract-logo"
                      style={{ cursor: "pointer" }}
                      onClick={() => router.push("/abstract-logo-design")}
                    >
                      Abstract
                    </List.Item>
                    <List.Item
                      key="illustrative-logo"
                      style={{ cursor: "pointer" }}
                      onClick={() => router.push("/illustrative-logo-design")}
                    >
                      Illustrative
                    </List.Item>
                    <List.Item
                      key="animated-logo"
                      style={{ cursor: "pointer" }}
                      onClick={() => router.push("/animated-logo-design")}
                    >
                      Animated
                    </List.Item>
                    <List.Item
                      key="3d-logo"
                      style={{ cursor: "pointer" }}
                      onClick={() => router.push("/3d-logo-design")}
                    >
                      3D
                    </List.Item>
                    <List.Item
                      key="pictorial-logo"
                      style={{ cursor: "pointer" }}
                      onClick={() => router.push("/pictorial-logo-design")}
                    >
                      Pictorial
                    </List.Item>
                    <List.Item
                      key="calligraphy-logo"
                      style={{ cursor: "pointer" }}
                      onClick={() => router.push("/calligraphy-logo-design")}
                    >
                      Calligraphy
                    </List.Item>
                    <List.Item
                      key="emblem-logo"
                      style={{ cursor: "pointer" }}
                      onClick={() =>
                        router.push("/emblem-logo-design")
                      }
                    >
                      Emblem
                    </List.Item>
                    <List.Item
                      key="wordmark-logo"
                      style={{ cursor: "pointer" }}
                      onClick={() =>
                        router.push("/wordmark-logo-design")
                      }
                    >
                      Word Mark
                    </List.Item>
                  </List>
                </Col>
                <Col
                  xs={24} md={6}
                  style={{
                    padding: "30px 0",

                    fontFamily: "Lato",
                  }}
                  className={"footer-column hide-column-on-phone"}
                >
                  <p style={{ fontWeight: 600, fontSize: 18, color: "#fe1f07" }}>
                    Professional Logo Design By States
                  </p>
                  <List
                    className="footer-list"
                    size="small"
                    style={{ fontSize: 14 }}
                  >
                    <List.Item
                      key="california"
                      style={{ cursor: "pointer" }}
                      onClick={() => router.push("/ca-logo-design")}
                    >
                      California
                    </List.Item>
                    <List.Item
                      key="new-york"
                      style={{ cursor: "pointer" }}
                      onClick={() => router.push("/nyc-logo-design")}
                    >
                      New York
                    </List.Item>
                    <List.Item
                      key="florida"
                      style={{ cursor: "pointer" }}
                      onClick={() => router.push("/fl-logo-design")}
                    >
                      Florida
                    </List.Item>
                    <List.Item
                      key="texas"
                      style={{ cursor: "pointer" }}
                      onClick={() => router.push("/tx-logo-design")}
                    >
                      Texas
                    </List.Item>
                    <List.Item
                      key="hawaii"
                      style={{ cursor: "pointer" }}
                      onClick={() => router.push("/hi-logo-design")}
                    >
                      Hawaii
                    </List.Item>

                    <List.Item
                      key="arizona"
                      style={{ cursor: "pointer" }}
                      onClick={() => router.push("/az-logo-design")}
                    >
                      Arizona
                    </List.Item>
                    <List.Item
                      key="oklahoma"
                      style={{ cursor: "pointer" }}
                      onClick={() => router.push("/ok-logo-design")}
                    >
                      Oklahoma
                    </List.Item>
                  </List>
                </Col> */}
                <div style={{ margin: "30px", paddingRight: "50px",}}>
                <h1
                  style={{
                    fontSize: 20,
                    color: "white",
                    paddingRight: "0px",
                    textAlign: "justify",
                   
                  }}>Secure Payment Method</h1>
                <Image
                  preview={false}
                  alt={"Failed to load image"}
                  width={200}
                  style={{ maxWidth: 220 }}
                  src="/images/index_red_96.png"
                />
              </div>
              </Row>
            </Col>


          </Row>
        </Col>
      </Row>
      <Row
        style={{
          background: "#292929",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Col xs={24} md={20}>
          <Row>
            <Col xs={24} md={14} style={{ padding: "10px 0" }}>
              <p style={{ color: "rgba(255,255,255,.9)", textAlign: "center", display: 'inline' }}>
                All © Rights {new Date().getFullYear()} Reserved by Logo Magicians
              </p>
              &emsp;
              <div
                style={{
                  display: "inline",
                  alignItems: "center",
                  placeContent: "center",
                }}
              >

                <a
                  onClick={() => router.push("/privacy-and-policy")}
                  style={{ color: "white", fontWeight: 100, padding: "0 10px", cursor: "pointer" }}
                >
                  Privacy & Policy
                </a>
                <a
                  onClick={() => router.push("/terms-conditions")}
                  style={{ color: "white", fontWeight: 100, padding: "0 10px", cursor: "pointer" }}
                >
                  Terms & Conditions
                </a>
              </div>
            </Col>
            <Col xs={24} md={10} style={{ padding: "10px 0", display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end' }}>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  placeContent: "center",
                }}
              >
                <p style={{ color: "#fe1f07", textAlign: "right", display: 'inline', margin: 0 }}>
                  Follow Us On
                </p>
                &emsp;
                <Link href={"https://www.facebook.com/logomagiciansofficial/"}>
                  <a target="_blank" rel="noopener noreferrer">
                    <div className="hoverRed" style={{ width: '25px', height: '25px', background: 'grey', borderRadius: '2px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                      <FaFacebookF style={{ fontSize: '12px', color: 'white' }} />
                    </div>
                  </a>
                </Link>
                &emsp;
                <Link href={"https://twitter.com/LogoMagicians"}>
                  <a target="_blank" rel="noopener noreferrer">
                    <div className="hoverRed" style={{ width: '25px', height: '25px', background: 'grey', borderRadius: '2px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                      <FaTwitter style={{ fontSize: '12px', color: 'white' }} />
                    </div>
                  </a>
                </Link>
                &emsp;
                <Link href={"https://www.instagram.com/logomagicians/"}>
                  <a target="_blank" rel="noopener noreferrer">
                    <div className="hoverRed" style={{ width: '25px', height: '25px', background: 'grey', borderRadius: '2px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                      <FaInstagram style={{ fontSize: '14px', color: 'white' }} />
                    </div>
                  </a>
                </Link>
                &emsp;
                <Link href={"https://www.youtube.com/channel/UC6qMBAlMt58IKjCQmb6HlnA"}>
                  <a target="_blank" rel="noopener noreferrer">
                    <div className="hoverRed" style={{ width: '25px', height: '25px', background: 'grey', borderRadius: '2px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                      <FaYoutube style={{ fontSize: '14px', color: 'white' }} />
                    </div>
                  </a>
                </Link>
                &emsp;
                <Link href={"mailto:support@logomagicians.com"}>
                  <a target="_blank" rel="noopener noreferrer">
                    <div className="hoverRed" style={{ width: '25px', height: '25px', background: 'grey', borderRadius: '2px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                      <AiOutlineMail style={{ fontSize: '14px', color: 'white' }} />
                    </div>
                  </a>
                </Link>

                {/* <AiFillTwitterSquare style={{fontSize:'25px'}}/> */}
              </div>



            </Col>
          </Row>
        </Col>

      </Row>
    </Footer>
  );
}

export default ClientFooter