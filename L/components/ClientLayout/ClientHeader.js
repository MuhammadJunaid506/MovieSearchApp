import { useState } from "react";
import { Image } from "antd";
import { BsPhone, BsChatLeftDots } from "react-icons/bs";
import { CaretDownOutlined } from "@ant-design/icons";
import { MdMenu } from "react-icons/md";
import { Layout, Row, Col, Menu, Button, Drawer, Input } from "antd";
import { useRouter } from "next/router";
import MainButton from "../MainButton";
import Link from 'next/link'

const { Header } = Layout;

const ClientHeader = () => {
  const [visible, setVisible] = useState(false);
  const router = useRouter();
  const [path, setPath] = useState(
    router.pathname.slice(1, router.pathname.length)
  );
  const [discountValue, setDiscountValue] = useState("");
  const getColor = (uri) => {
    if (path == uri) {
      return "#fe1f07";
    } else {
      return "#292929";
    }
  };

  const getColorMobile = (uri) => {
    if (path == uri) {
      return "#fe1f07";
    } else {
      return "transparent";
    }
  };

   return (
    <Header
      style={{
        height: "auto",
        background: "white",
        padding: "0",
        zIndex: 2,
        scrollBehavior: "smooth",
      }}
    >
    

      <Row
        style={{
          padding: "20px",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "-100px",
        }}
        className="hide-on-phone"
      >
        <Col xs={24} md={21}>
          <Row
            style={{
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "white",
              overflow: "hidden",
              borderRadius: "50px",
              padding:'5px'
            }}
          >
            <Col span={4} style={{ textAlign: "left", paddingLeft:'20px' }}>
            <Link href={"/"}>
              <Image
                preview={false}
                alt={"Failed to load image"}
                width={120}
                height={40}
                src="/images/LOGOTRIM.png"
                style={{ maxWidth: 245 }}
              />
              </Link>
            </Col>
            <Col span={17} style={{ marginTop: "-2px", justifyContent:'center', alignItems:'center' }}>
              <Menu
                style={{
                  fontSize: 14,
                  fontWeight: 500,
                  backgroundColor: "white",
                  justifyContent:'center', alignItems:'center'
                }}
                mode="horizontal"
                className="header-menu"
              >
                 <Menu.Item
                  key="portfolio"
                  className="hover"
                  onClick={() => router.push("/")}
                  style={{ backgroundColor:"white" , color: getColor("portfolio") }}
                >
                  HOME
                </Menu.Item>

                <Menu.Item
                  key="portfolio"
                  className="hover"
                  onClick={() => router.push("/portfolio")}
                  style={{ backgroundColor:"white" , color: getColor("portfolio") }}
                >
                  WORKS
                </Menu.Item>
                <Menu.Item
                  key="portfolio"
                  className="hover"
                  onClick={() => router.push("/logo-design")}
                  style={{ backgroundColor:"white" , color: getColor("portfolio") }}
                >
                  LOGO DESIGN
                </Menu.Item>

                <Menu.Item
                  key="portfolio"
                  className="hover"
                  onClick={() => router.push("/web-design")}
                  style={{ backgroundColor:"white" , color: getColor("portfolio") }}
                >
                  WEB DESIGN
                </Menu.Item>
                <Menu.Item
                  key="portfolio"
                  className="hover"
                  onClick={() => router.push("/app-design")}
                  style={{ backgroundColor:"white" , color: getColor("portfolio") }}
                >
                  APP DESIGN
                </Menu.Item>

                <Menu.Item
                  key="portfolio"
                  className="hover"
                  onClick={() => router.push("/pricing")}
                  style={{ backgroundColor:"white" , color: getColor("portfolio") }}
                >
                  PRICING
                </Menu.Item>
                <Menu.Item
                  key="portfolio"
                  className="hover"
                  onClick={() => router.push("/contact")}
                  style={{ backgroundColor:"white" , color: getColor("portfolio") }}
                >
                  CONTACT US
                </Menu.Item>
              </Menu>
            </Col>

            <Col span={3} style={{ textAlign: "right", display:'flex', justifyContent:'flex-end',paddingRight:'20px' }}>
            <MainButton
                  className="header-btn"
                  style={{
                    fontSize: 12,
                    padding: "8px 20px",
                    height: "auto",
                    fontWeight: 400,
                    backgroundColor: "#fe1f07",
                    borderColor: "#fff",
                    borderRadius: "25px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0px",
                  }}
                  onClick={() => router.push("/contact")}
                >
                  
                  Get Started
                 
                </MainButton>
            </Col>
            
          </Row>       
        </Col>
      </Row>

      <Row
            style={{
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "white",
              overflow: "hidden",
              borderRadius: "30px",
              padding:'20px'
            }}
            className="display-on-phone"
          >
            <Col span={12} style={{ textAlign: "left" }}>
            <Link href={"/"}>
              <Image
                preview={false}
                alt={"Failed to load image"}
                width={120}
                height={40}
                src="/images/LOGOTRIM.png"
                style={{ maxWidth: 245 }}
              />
              </Link>
            </Col>
          

            <Col span={12} style={{ textAlign: "right", display:'flex', justifyContent:'flex-end' }}>
            <MdMenu
                style={{ fontSize: 26 }}
                onClick={() => setVisible(true)}
              />
            </Col>
            
          </Row>
      <Drawer
        className="drawer"
        placement={"left"}
        closable={false}
        onClose={() => setVisible(false)}
        visible={visible}
        key={"drawer"}
      >
        <div
          style={{
            padding: "20px 15px",
            fontSize: 15,
            fontWeight: 600,
            color: "#2d2a2a",
            background: "#efefef",
          }}
        >
          <Input
            className="drawer-search"
            placeholder="Search for Posts"
            style={{
              width: "100%",
              padding: "0px 10px",
              background: "#efefef",
              border: "none",
              boxShadow: "none",
            }}
          />
        </div>
        <Menu
          style={{
            fontSize: 14,
            fontWeight: 500,
            backgroundColor: "white",
          }}
          mode="inline"
          className="header-menu-mobile "
        >
          <Menu.SubMenu
            className="hover"
            key="home"
            title={
              <>
                <>Home</>
              </>
            }
            // onClick={() => router.push("/")}
            style={{ backgroundColor: getColorMobile(""), color: "#292929" }}
          >
            <Menu.Item
              key="corporate-logo-design"
              className="hover"
              onClick={() => router.push("/corporate-logo-design")}
              style={{
                backgroundColor: getColorMobile("corporate-logo-design"),
                color: "#292929",
              }}
            >
              Corprate Logo Design
            </Menu.Item>
            <Menu.Item
              key="3d-logo-design"
              className="hover"
              onClick={() => router.push("/3d-logo-design")}
              style={{
                backgroundColor: getColorMobile("3d-logo-design"),
                color: "#292929",
              }}
            >
              3D Logo Design
            </Menu.Item>
            <Menu.Item
              key="animated-logo-design"
              className="hover"
              onClick={() => router.push("/animated-logo-design")}
              style={{
                backgroundColor: getColorMobile("animated-logo-design"),
                color: "#292929",
              }}
            >
              Animated Logo Design
            </Menu.Item>
            <Menu.Item
              key="mascot-logo-design"
              className="hover"
              onClick={() => router.push("/mascot-logo-design")}
              style={{
                backgroundColor: getColorMobile("mascot-logo-design"),
                color: "#292929",
              }}
            >
              Moscot Logo Design
            </Menu.Item>
            <Menu.Item
              className="hover"
              key="monogram-logo-design"
              onClick={() => router.push("/monogram-logo-design")}
              style={{
                backgroundColor: getColorMobile("monogram-logo-design"),
                color: "#292929",
              }}
            >
              Monogram Logo Design
            </Menu.Item>
          </Menu.SubMenu>

          <Menu.SubMenu
            key="branding"
            className="hover"
            title={
              <>
                <>Branding</>
              </>
            }
            style={{ color: "#292929" }}
          >
            <Menu.Item
              key="small-business-branding"
              className="hover"
              onClick={() => router.push("/small-business-branding")}
              style={{
                backgroundColor: getColorMobile("small-business-branding"),
                color: "#292929",
              }}
            >
              Small Business Branding
            </Menu.Item>
            <Menu.Item
              key="corporate-branding-development"
              className="hover"
              onClick={() => router.push("/corporate-branding-development")}
              style={{
                backgroundColor: getColorMobile(
                  "corporate-branding-development"
                ),
                color: "#292929",
              }}
            >
              Corporate Branding Development
            </Menu.Item>
            <Menu.Item
              className="hover"
              key="stationary-design"
              onClick={() => router.push("/stationary-design")}
              style={{
                backgroundColor: getColorMobile("stationary-design"),
                color: "#292929",
              }}
            >
              Stationary Design
            </Menu.Item>
            <Menu.Item
              className="hover"
              key="brochure-design"
              onClick={() => router.push("/brochure-design")}
              style={{
                backgroundColor: getColorMobile("brochure-design"),
                color: "#292929",
              }}
            >
              Brochure Design
            </Menu.Item>
            <Menu.Item
              className="hover"
              key="ecommerce-web-development"
              onClick={() => router.push("/ecommerce-web-development")}
              style={{
                backgroundColor: getColorMobile("ecommerce-web-development"),
                color: "#292929",
              }}
            >
              Packaging Design
            </Menu.Item>
            <Menu.Item
              className="hover"
              key="branding-agency"
              onClick={() => router.push("/branding-agency")}
              style={{
                backgroundColor: getColorMobile("branding-agency"),
                color: "#292929",
              }}
            >
              Branding Agency
            </Menu.Item>
          </Menu.SubMenu>

          <Menu.SubMenu
            key="Website"
            className="hover"
            title={
              <>
                <>Website</>
              </>
            }
            style={{ color: "#292929" }}
          >
            <Menu.Item
              key="web-design-company"
              className="hover"
              onClick={() => router.push("/web-design-company")}
              style={{
                backgroundColor: getColorMobile("web-design-company"),
                color: "#292929",
              }}
            >
              Web Design Company
            </Menu.Item>
            <Menu.Item
              className="hover"
              key="ecommerce-web-development"
              onClick={() => router.push("/ecommerce-web-development")}
              style={{
                backgroundColor: getColorMobile("ecommerce-web-development"),
                color: "#292929",
              }}
            >
              E-Commerce Web Development
            </Menu.Item>
            <Menu.Item
              className="hover"
              key="b2c-portal-development"
              onClick={() => router.push("/b2c-portal-development")}
              style={{
                backgroundColor: getColorMobile("b2c-portal-development"),
                color: "#292929",
              }}
            >
              B2C Portal Development
            </Menu.Item>
            <Menu.Item
              className="hover"
              key="wordpress-development"
              onClick={() => router.push("/wordpress-development")}
              style={{
                backgroundColor: getColorMobile("wordpress-development"),
                color: "#292929",
              }}
            >
              Wordpress Development
            </Menu.Item>
            <Menu.Item
              className="hover"
              key="custom-web-development"
              onClick={() => router.push("/custom-web-development")}
              style={{
                backgroundColor: getColorMobile(
                  "custom-web-development"
                ),
                color: "#292929",
              }}
            >
              Custom Website Design
            </Menu.Item>
          </Menu.SubMenu>

          <Menu.SubMenu
            key="apps"
            className="hover"
            title={
              <>
                <>Apps</>
              </>
            }
            style={{ color: "#292929" }}
          >
            <Menu.Item
              className="hover"
              key="mobile-app-development"
              onClick={() => router.push("/mobile-app-development")}
              style={{
                backgroundColor: getColorMobile("mobile-app-development"),
                color: "#292929",
              }}
            >
              Mobile App Development
            </Menu.Item>
            <Menu.Item
              className="hover"
              key="native-app-development"
              onClick={() => router.push("/native-app-development")}
              style={{
                backgroundColor: getColorMobile("native-app-development"),
                color: "#292929",
              }}
            >
              Native App Development
            </Menu.Item>
            <Menu.Item
              className="hover"
              key="cross-platform-app"
              onClick={() => router.push("/cross-platform-app")}
              style={{
                backgroundColor: getColorMobile("cross-platform-app"),
                color: "#292929",
              }}
            >
              Cross Platform App
            </Menu.Item>
            <Menu.Item
              className="hover"
              key="hybrid-app-development"
              onClick={() => router.push("/hybrid-app-development")}
              style={{
                backgroundColor: getColorMobile("hybrid-app-development"),
                color: "#292929",
              }}
            >
              Hybrid App Development
            </Menu.Item>
          </Menu.SubMenu>

          <Menu.SubMenu
            key="animation"
            className="hover"
            title={
              <>
                <>Animation</>
              </>
            }
            style={{ color: "#292929" }}
          >
            <Menu.Item
              className="hover"
              key="animation-company"
              onClick={() => router.push("/animation-company")}
              style={{
                backgroundColor: getColorMobile("animation-company"),
                color: "#292929",
              }}
            >
              Animation Company
            </Menu.Item>
            <Menu.Item
              className="hover"
              key="2d-animation"
              onClick={() => router.push("/2d-animation")}
              style={{
                backgroundColor: getColorMobile("2d-animation"),
                color: "#292929",
              }}
            >
              2D Animation
            </Menu.Item>
            <Menu.Item
              key="3d-animation"
              className="hover"
              onClick={() => router.push("/3d-animation")}
              style={{
                backgroundColor: getColorMobile("3d-animation"),
                color: "#292929",
              }}
            >
              3D Animation
            </Menu.Item>
            <Menu.Item
              className="hover"
              key="digital-video-animation"
              onClick={() => router.push("/digital-video-animation")}
              style={{
                backgroundColor: getColorMobile("digital-video-animation"),
                color: "#292929",
              }}
            >
              Digital Video Animation
            </Menu.Item>
            <Menu.Item
              key="whiteboard-animation"
              className="hover"
              onClick={() => router.push("/whiteboard-animation")}
              style={{
                backgroundColor: getColorMobile("whiteboard-animation"),
                color: "#292929",
              }}
            >
              Whiteboard Animation
            </Menu.Item>
            <Menu.Item
              key="explainer-product-video"
              className="hover"
              onClick={() => router.push("/explainer-product-video")}
              style={{
                backgroundColor: getColorMobile("explainer-product-video"),
                color: "#292929",
              }}
            >
              Explainer Product Video Company
            </Menu.Item>
            <Menu.Item
              key="startup-video-production"
              className="hover"
              onClick={() => router.push("/startup-video-production")}
              style={{
                backgroundColor: getColorMobile("startup-video-production"),
                color: "#292929",
              }}
            >
              Startup Video Production
            </Menu.Item>
          </Menu.SubMenu>

          <Menu.SubMenu
            key="dm"
            className="hover"
            title={
              <>
                <>Digital Marketing</>
              </>
            }
            style={{ color: "#292929" }}
          >
            <Menu.Item
              className="hover"
              key="digital-marketing-agency"
              onClick={() => router.push("/digital-marketing-agency")}
              style={{
                backgroundColor: getColorMobile("digital-marketing-agency"),
                color: "#292929",
              }}
            >
              Digital Agency
            </Menu.Item>
            <Menu.Item
              key="pay-per-click"
              className="hover"
              onClick={() => router.push("/pay-per-click")}
              style={{
                backgroundColor: getColorMobile("pay-per-click"),
                color: "#292929",
              }}
            >
              Pay Per Click (PPC)
            </Menu.Item>
            <Menu.Item
              key="social-media-marketing"
              className="hover"
              onClick={() => router.push("/social-media-marketing")}
              style={{
                backgroundColor: getColorMobile("social-media-marketing"),
                color: "#292929",
              }}
            >
              Social Media Marketing
            </Menu.Item>
            <Menu.Item
              key="search-engine-optimization"
              className="hover"
              onClick={() => router.push("/search-engine-optimization")}
              style={{
                backgroundColor: getColorMobile("search-engine-optimization"),
                color: "#292929",
              }}
            >
              Search Engine Optimization (SEO)
            </Menu.Item>
            <Menu.Item
              key="email-marketing"
              className="hover"
              onClick={() => router.push("/email-marketing")}
              style={{
                backgroundColor: getColorMobile("email-marketing"),
                color: "#292929",
              }}
            >
              Email Marketing
            </Menu.Item>
            <Menu.Item
              key="content-marketing"
              className="hover"
              onClick={() => router.push("/content-marketing")}
              style={{
                backgroundColor: getColorMobile("content-marketing"),
                color: "#292929",
              }}
            >
              Content Marketing
            </Menu.Item>
          </Menu.SubMenu>

          <Menu.Item
            key="portfolio"
            className="hover"
            onClick={() => router.push("/portfolio")}
            style={{ backgroundColor: getColorMobile("portfolio"), color: "white" }}>
            Portfolio
          </Menu.Item>

          <Menu.SubMenu
            key="more"
            className="hover"
            title={
              <>
                <>More</>
              </>
            }
            style={{ color: "#292929" }}
          >
            <Menu.Item
              key="about"
              onClick={() => router.push("/about")}
              style={{
                backgroundColor: getColorMobile("about"),
                color: "#292929",
              }}
            >
              About
            </Menu.Item>
            <Menu.Item
              key="contact"
              className="hover"
              onClick={() => router.push("/contact")}
              style={{
                backgroundColor: getColorMobile("contact"),
                color: "#292929",
              }}
            >
              Contact
            </Menu.Item>
            <Menu.Item
              key="pricing"
              className="hover"
              onClick={() => router.push("/pricing")}
              style={{
                backgroundColor: getColorMobile("pricing"),
                color: "#292929",
              }}
            >
              Pricing
            </Menu.Item>
            <Menu.Item
              key="process"
              className="hover"
              onClick={() => router.push("/process")}
              style={{
                backgroundColor: getColorMobile("process"),
                color: "#292929",
              }}
            >
              Process
            </Menu.Item>
            <Menu.Item
              key="review"
              className="hover"
              onClick={() => router.push("/review")}
              style={{
                backgroundColor: getColorMobile("review"),
                color: "#292929",
              }}
            >
              Reviews
            </Menu.Item>
            <Menu.Item
              key="blog"
              className="hover"
              onClick={() => router.push("/blog")}
              style={{
                backgroundColor: getColorMobile("blog"),
                color: "#292929",
              }}
            >
              Blog
            </Menu.Item>
          </Menu.SubMenu>

          <Menu.Item
            key="qoute"
            className="hover"
            onClick={() => router.push("/qoute")}
            style={{
              backgroundColor: getColorMobile("qoute"),
              color: "white",
            }}
          >
            Get A Quote
          </Menu.Item>
        </Menu>
      </Drawer>
    </Header>
  );
};

export default ClientHeader;
