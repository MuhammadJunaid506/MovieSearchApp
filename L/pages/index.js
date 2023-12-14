import { Col, Row, Typography, Tabs,Image } from "antd";
import { useRouter } from "next/router";
import { FaLayerGroup } from "react-icons/fa";
import { BsFolderSymlink } from "react-icons/bs";
import { MdOutlineDraw } from "react-icons/md";
import ClientLayout from "../components/ClientLayout";
import MainButton from "../components/MainButton";
import ContactForm from "../components/ContactForm";
import CustomBanner from "../components/CustomBanner";
import SliderBanner from "../components/SliderBanner";
import AssuranceGrid from "../components/AssuranceGrid";
import InfoSection from "../components/infoSection";
import Companies from "../components/Comapnies";
import TwoColSection1 from "../components/TwoColSection1";
import Portfolio from "../components/Portfolio";
import TabsComponent from "../components/TabsWhite";
import TabsComponent2 from "../components/Tabs";
import Plans from "../components/Plans";
import TwoColumnFeatures from "../components/TwoColumnFeatures";
import Reviews from "../components/Reviews";

const Home = () => {
  const { TabPane } = Tabs;
  const router = useRouter();
  return (
    <ClientLayout
      head={{
        title: "Hire The Top Company Logo Design Services | Custom Logos",
        description:
          "Want to enhance your brand visibility online? Hire Logo Magicians for professional logo design services and kick start your business growth today. It helps convert your brand icon ideas into reality, making it stand out from the rest.",
      }}
    >
      <CustomBanner
        height={700}
        title={
          <>
            A full service agency focused on{" "}
            <span style={{ color: "#fe1f07", lineHeight:0.6 }}>
              {" "}
              Logo Design, Web Design, Mobile App{" "}
            </span>{" "}
            and Web Technology
          </>
        }
        titleLevel={1}
        text={
          "Connect to your audiance through persuasive web and graphic designing, passionate about helping brands create human centered digital experiances that attract, engage and convert the perfect audiance."
        }
        titleStyles={{
          marginTop: "5px",
          marginBottom: "10px",
          fontWeight: 600,
          fontSize: "55px",
          color: "black",
        }}
        containerStyles={{
          position: "relative",
        }}
        image={"/images/headerv.png"}
        bg={"/images/Background.png"}
        imageDimentions={[500, 500]}
        imageStyles={{ width: "450px" }}

      />
      <Row
            style={{
              display: "flex",
              justifyContent: "center",
      
              width:'100%',
              alignItems: "center",
              marginTop: "-80px",
              zIndex: 1,
            }}
          >
            <Col xs={24} md={14}  >
            <Row style={{width:'100%', justifyContent:'center',padding:"20px 30px"}}>
              <Col xs={12} md={5}  style={{display:'flex', justifyContent:'center', alignItems:'center',flexDirection:'column'}}>
                <Image
                src="/images/index_red_10.png"
                width={120}
                />
                </Col>
                <Col xs={12} md={5}  style={{display:'flex', justifyContent:'center', alignItems:'center',flexDirection:'column'}}>
                <Image
                src="/images/index_red_12.png"
                width={120}
                />
                </Col>
                <Col xs={12} md={5}  style={{display:'flex', justifyContent:'center', alignItems:'center',flexDirection:'column'}}>
                <Image
                src="/images/index_red_07.png"
                width={80}
                />
                </Col>
                <Col xs={12} md={5}  style={{display:'flex', justifyContent:'center', alignItems:'center',flexDirection:'column'}}>
                <Image
                src="/images/index_red_04.png"
                width={100}
                />
                </Col>
            </Row>
            </Col>
            <Col xs={24} md={10}>
              <div style={{backgroundColor:'black', borderTopLeftRadius:50,borderBottomLeftRadius:50}}>
                <Row style={{width:'100%', justifyContent:'center',padding:"20px 30px"}}>
                <Col xs={24} md={4}  style={{display:'flex', justifyContent:'center', alignItems:'center',flexDirection:'column'}}>
                  <Image 
                  src="/images/icon1.png"
                  height={40}
                  />
                    
                  </Col>
                  <Col xs={24} md={10} style={{padding:"0 10px",display:'flex', justifyContent:'center', alignItems:'center',flexDirection:'column', borderLeft:'1px solid #fe1f07',borderRight:'1px solid #fe1f07'}}>
                  <p style={{color:'white', fontSize:'12px', margin:0, textAlign:'right'}}> Call: +0213-456-7890</p>
                  <p style={{color:'white', fontSize:'12px', margin:0, textAlign:'right'}}>  +0213-456-7890</p>
                  </Col>
                  <Col xs={24} md={10} style={{padding:"0 10px", display:'flex', justifyContent:'center',alignItems:'center', flexDirection:'column'}}>
                  <p style={{color:'white', fontSize:'12px', margin:0, textAlign:'right'}}> Email: info@logotrim.com</p>
                  <p style={{color:'white', fontSize:'12px', margin:0, textAlign:'right'}}>  support@logotrim.com</p>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
          <br/><br/>

      <TwoColSection1
        image={"/images/index_red_17.png"}
        imageDimentions={[785, 442]}
        imageStyles={{ width: "500px" }}
        containerStyles={{ padding: "50px 0",position:'relative' }}
        title={
          <>
            The Leading{" "}
            <span style={{ color: "#fe1f07" }}>
              {" "}
              Logo Design and Web Design
            </span>{" "}
            Company in USA{" "}
            <span style={{ color: "#fe1f07" }}> Empowering Businesses</span>
          </>
        }
        titleStyles={{
          marginTop: "10px",
          marginBottom: "0px",
          fontWeight: 600,
          fontSize: "40px",
          color: "black",
        }}
        multitext={[
          "A logo is the first priority of a business, brand or organization to establish a strong foundation. Whether it is a start-up or corporation, elegant brand identity plays a lead role to attract the target audience. That is why it is important to hire a top logo design firm to connect with your customers, not just your business. Instead of searching top logo design company near me, get in touch today with LogoMagicians for top logo design services.",
          "Logo Magicians is a renowned Logo design agency in USA offering amazing company logo designs to clients across the world with a team of highly creative minds.",
        ]}
      />

      <CustomBanner
        height={400}
        title={
          <>
            Need Help Finding the Best Solution <br /> To Operate your Business?
          </>
        }
        titleLevel={1}
        onlyText={true}
        text={
          <>
            Connect to your audiance through persuasive web and graphic
            designing <br /> passionate about helping brands create human
            centered digital experiances .
          </>
        }
        titleStyles={{
          marginTop: "5px",
          marginBottom: "10px",
          textAlign: "left",
          fontSize: "50px",
          color: "white",
        }}
        textStyles={{
          textAlign: "left",
          fontSize: "16px",
          color: "white",
        }}
        bg={"/images/index_red_23.png"}
        imageDimentions={[500, 500]}
        imageStyles={{ width: "450px" }}
        buttons={
          <MainButton
            style={{
              fontSize: 14,
              height: "auto",
              marginTop: 10,
              color: "green",
              border: "1px solid green",
              backgroundColor: "white",
              padding: "0px 8px",
              height: "auto",
              fontWeight: 800,
              padding: "15px 35px",
              minWidth: 50,
            }}
          >
            Contact Us
          </MainButton>
        }
      />

      <TabsComponent2
      bg="white"
      
        tabs={[
          {
            key: "logo-designing",
            name: "Logo Designing",
            content: (
              <TwoColSection1
              isWide={true}
                title={
                  <>
                    <span style={{ color: "#fe1f07" }}>
                      Logo Design Services
                    </span>{" "}
                    To Make Your <br/> Brand Renowned
                  </>
                }
                onlyText
                titleColor={"black"}
                textColor={"black"}
                background={"transparent"}
                titleStyles={{
                fontWeight: 600,
                }}
                multitext={[
                  "We are a full-stack web development company providing advanced services through WordPress, Joomla, Shopify, Magneto, etc. Our agency has the experience and knowledge to increase value, convert leads into sales, and boost growth with fully functional websites.",
                  "Customize your SEO-friendly websites to attract more audiences and remain ahead.",
                ]}
                list={[
                  "2D Animation Characters.",
                  "Stronger Visuals.",
                  "Greater Creativity.",
                  "Impressive 2D Animations.",
                ]}
                buttons={
                  <MainButton
                    style={{
                      fontSize: 14,
                      marginTop: 10,
                      color: "white",
                      backgroundColor: "black",
                      padding: "0px 8px",
                      borderRadius: 10,
                      border: "none",
                      fontWeight: 800,
                      padding: "10px 30px",
                      minWidth: 50,
                    }}
                  >
                    Contact Us
                  </MainButton>
                }
              />
            ),
          },
          {
            key: "web-designing",
            name: "Web Designing",
            content: (
              <TwoColSection1
                title={
                  <>
                    <span style={{ color: "#fe1f07" }}>
                      Logo Design Services
                    </span>{" "}
                    To Make Your Brand Renowned
                  </>
                }
                onlyText
                titleColor={"black"}
                textColor={"black"}
                background={"transparent"}
                multitext={[
                  "We are a full-stack web development company providing advanced services through WordPress, Joomla, Shopify, Magneto, etc. Our agency has the experience and knowledge to increase value, convert leads into sales, and boost growth with fully functional websites.",
                  "Customize your SEO-friendly websites to attract more audiences and remain ahead.",
                ]}
                list={[
                  "2D Animation Characters.",
                  "Stronger Visuals.",
                  "Greater Creativity.",
                  "Impressive 2D Animations.",
                ]}
                buttons={
                  <MainButton
                    style={{
                      fontSize: 14,
                      marginTop: 10,
                      color: "white",
                      backgroundColor: "black",
                      padding: "0px 8px",
                      borderRadius: 10,
                      border: "none",
                      fontWeight: 800,
                      padding: "10px 30px",
                      minWidth: 50,
                    }}
                  >
                    Contact Us
                  </MainButton>
                }
              />
            ),
          },
          {
            key: "app-designing",
            name: "App Designing",
            content: (
              <TwoColSection1
                title={
                  <>
                    <span style={{ color: "#fe1f07" }}>
                      Logo Design Services
                    </span>{" "}
                    To Make Your Brand Renowned
                  </>
                }
                onlyText
                titleColor={"black"}
                textColor={"black"}
                background={"transparent"}
                multitext={[
                  "We are a full-stack web development company providing advanced services through WordPress, Joomla, Shopify, Magneto, etc. Our agency has the experience and knowledge to increase value, convert leads into sales, and boost growth with fully functional websites.",
                  "Customize your SEO-friendly websites to attract more audiences and remain ahead.",
                ]}
                list={[
                  "2D Animation Characters.",
                  "Stronger Visuals.",
                  "Greater Creativity.",
                  "Impressive 2D Animations.",
                ]}
                buttons={
                  <MainButton
                    style={{
                      fontSize: 14,
                      marginTop: 10,
                      color: "white",
                      backgroundColor: "black",
                      padding: "0px 8px",
                      borderRadius: 10,
                      border: "none",
                      fontWeight: 800,
                      padding: "10px 30px",
                      minWidth: 50,
                    }}
                  >
                    Contact Us
                  </MainButton>
                }
              />
            ),
          },
          {
            key: "web-development",
            name: "Web Development",
            content: (
              <TwoColSection1
                title={
                  <>
                    <span style={{ color: "#fe1f07" }}>
                      Logo Design Services
                    </span>{" "}
                    To Make Your Brand Renowned
                  </>
                }
                onlyText
                titleColor={"black"}
                textColor={"black"}
                background={"transparent"}
                multitext={[
                  "We are a full-stack web development company providing advanced services through WordPress, Joomla, Shopify, Magneto, etc. Our agency has the experience and knowledge to increase value, convert leads into sales, and boost growth with fully functional websites.",
                  "Customize your SEO-friendly websites to attract more audiences and remain ahead.",
                ]}
                list={[
                  "2D Animation Characters.",
                  "Stronger Visuals.",
                  "Greater Creativity.",
                  "Impressive 2D Animations.",
                ]}
                buttons={

                    <MainButton
                      style={{
                        fontSize: 14,
                        marginTop: 10,
                        color: "white",
                        backgroundColor: "black",
                        padding: "0px 8px",
                        borderRadius: 10,
                        border: "none",
                        fontWeight: 800,
                        padding: "10px 30px",
                        minWidth: 50,
                      }}
                    >
                      Contact Us
                    </MainButton>

                }
              />
            ),
          },
          {
            key: "seo",
            name: "SEO",
            content: (
              <TwoColSection1
                title={
                  <>
                    <span style={{ color: "#fe1f07" }}>
                      Logo Design Services
                    </span>{" "}
                    To Make Your Brand Renowned
                  </>
                }
                onlyText
                titleColor={"black"}
                textColor={"black"}
                background={"transparent"}
                multitext={[
                  "We are a full-stack web development company providing advanced services through WordPress, Joomla, Shopify, Magneto, etc. Our agency has the experience and knowledge to increase value, convert leads into sales, and boost growth with fully functional websites.",
                  "Customize your SEO-friendly websites to attract more audiences and remain ahead.",
                ]}
                list={[
                  "2D Animation Characters.",
                  "Stronger Visuals.",
                  "Greater Creativity.",
                  "Impressive 2D Animations.",
                ]}
                buttons={
                  <MainButton
                    style={{
                      fontSize: 14,
                      marginTop: 10,
                      color: "white",
                      backgroundColor: "black",
                      padding: "0px 8px",
                      borderRadius: 10,
                      border: "none",
                      fontWeight: 800,
                      padding: "10px 30px",
                      minWidth: 50,
                    }}
                  >
                    Contact Us
                  </MainButton>
                }
              />
            ),
          },
        ]}
      />
      <br/>

      <InfoSection title="Got A New Project?" description="Discuss with Our Experts & Choose the Best Package for Your Business" />
      
      <Portfolio
        title={
          <>
            Explore Our{" "}
            <span style={{ color: "#fe1f07" }}> Latest Projects </span>
          </>
        }
        subtitle="We have a team of creative designers and developers who are passionate about their work. We have worked with many clients and delivered the best results."
        columns={3}
        titleStyles={{
          fontSize: 50,
          fontWeight: 700,
          marginBottom: 0,
          textTransform: "uppercase",
        }}
        category={"Home"}
        buttons={
          <>
            <MainButton
              style={{
                marginTop: 10,
                marginBottom: 15,
                fontSize: 17,
                padding: "8px 40px",
                height: "auto",
                fontWeight: 500,
              }}
              onClick={() => router.push("/portfolio")}
            >
              View All Projects
            </MainButton>
          </>
        }
      />


      <TabsComponent
        bg="#f0f3f9"
        title={
          <>
            Pricing Plans that{" "}
            <span style={{ color: "#fe1f07" }}> Work for you! </span>
          </>
        }
        subtitle={
          "offering a range of creative services to help you grow your business."
        }
        tabs={[
          {
            key: "Logo",
            name: "Logo",
            content: <Plans category="Logo" fullWidth />,
          },
          {
            key: "mobile-apps",
            name: "Mobile Apps",
            content: <Plans category="Logo" fullWidth />,
          },
          {
            key: "website",
            name: "Website",
            content: <Plans category="Logo" fullWidth />,
          },
          {
            key: "web-development",
            name: "Web Development",
            content: <Plans category="Logo" fullWidth />,
          },
        ]}
      />

      <Reviews category="Review" />

      <ContactForm
        title={
          <>
            Why Choose Logo Trim <br /> Design Service in USA?
          </>
        }
        subtitle={
          <>
            Smart organizations need smart digital solutions. Learn more about
            the services we can offer your business.
          </>
        }
      />
    </ClientLayout>
  );
};
export default Home;
