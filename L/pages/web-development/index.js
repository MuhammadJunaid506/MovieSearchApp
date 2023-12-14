import { Col, Row, Typography, Tabs } from "antd";
import { useRouter } from "next/router";
import { FaLayerGroup } from "react-icons/fa";
import { BsFolderSymlink } from "react-icons/bs";
import { MdOutlineDraw } from "react-icons/md";
import ClientLayout from "../../components/ClientLayout";
import MainButton from "../../components/MainButton";
import ContactForm from "../../components/ContactForm";
import CustomBanner from "../../components/CustomBanner";
import SliderBanner from "../../components/SliderBanner";
import AssuranceGrid from "../../components/AssuranceGrid";
import InfoSection from "../../components/infoSection";
import Companies from "../../components/Comapnies";
import TwoColSection1 from "../../components/TwoColSection1";
import Portfolio from "../../components/Portfolio";
import TabsComponent from "../../components/Tabs";
import TabsComponent2 from "../../components/Tabs";
import Plans from "../../components/Plans";
import TwoColumnFeatures from "../../components/TwoColumnFeatures";
import Reviews from "../../components/Reviews";

const WebDevelopment = () => {
  const router = useRouter()


  return (
    <ClientLayout
    head={{
      title: "Web development",
      description:
        "Want to enhance your brand visibility online? Hire Logo Magicians for professional logo design services and kick start your business growth today. It helps convert your brand icon ideas into reality, making it stand out from the rest.",
    }}
  >
    <CustomBanner
      height={700}
      title={
        <>
          Outsmart The Competition With<br></br>Cutting-edge
          <span style={{ color: "#fe1f07" }}>
            {" "}
            Web Developmet Solutions{" "}
          </span>
        </>
      }
      titleLevel={1}
      text={
        "Our team will create a stunning, original design for you that will make your business stand out from the crowd and help you wow competitors and customers alike."
      }
      titleStyles={{
        marginTop: "5px",
        marginBottom: "10px",
        fontWeight: 900,
        fontSize: "55px",
        fontFamily:"Teko",
        color: "black",
      }}
      image={"/images/web_development_03.png"}
      bg={"/images/Background.png"}
      imageDimentions={[500, 500]}
      imageStyles={{ width: "400px"  }}
    />

    <TwoColSection1
      image={"/images/web_development_07.png"}
      imageDimentions={[785, 442]}
      title={
        <>
          Customized Web Development Services <br/>We`re a web development company<br/>that
          <span style={{ color: "#fe1f07" }}>
            {" "}
           cares for your success
          </span>{" "}
         
        </>
      }
      // subtitle={"Professional Designs, Unique Minds"}
      titleStyles={{
        marginTop: "0px",
        marginBottom: "0px",
        fontWeight: 900,
        fontSize: "50px",
        color: "black",
        fontFamily:""
      }}
      imageStyles={{ maxWidth: "400px" }}
      multitext={[
        "A Web is the first priority of a business, brand or organization to establish a strong foundation. Whether it is a start-up or corporation, elegant brand identity plays a lead role to attract the target audience. That is why it is important to hire a top logo design firm to connect with your customers, not just your business. Instead of searching top logo design company near me, get in touch today with LogoMagicians for top logo design services.",
      ]}

      list={["High Quality in affordable prices", "100% Satisfaction Guaranteed", "100% Unique Design", "24/7 Customer Support", "100% Money Back Guarantee"]}
    />

    <CustomBanner
      height={400}
      title={
        <>
         Connect with our world-class IT experts for <br /> Front-end development services
        </>
      }
      titleLevel={1}
      onlyText={true}
      text={
        <>
        Whether you`re an established company, enterprise, or a fledgling startup, we can help you create a quality website, to market your product and services
        </>
      }
      titleStyles={{
        marginTop: "5px",
        marginBottom: "10px",
        fontWeight: 900,
        textAlign: "left",
        fontSize: "50px",
        color: "white",
      }}
      textStyles={{
        textAlign: "left",
        fontSize: "16px",
        color: "white",
      }}
      bg={"/images/web_development_10.png"}
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
    
      tabs={[
        {
          key: "Front End Web Development",
          name: "Front End Web Development",
          content: (
            <TwoColSection1
              title={
                <>
                  <span style={{ color: "#fe1f07" }}>
                  Front End Web Development
                  </span><br/>
                We make promising web front-end
                </>
              }
              onlyText
              titleColor={"black"}
              textColor={"black"}
              background={"transparent"}
              multitext={[
                "Illustrarive logos directs promising number of clients to your business they are dynamic unique and colorful, making your logo stand out in your niche. We have expert illustrators to craft exquisite logos for your brand. The illustrative artwork depicts your true brand identity. Transform your ideas into a well versed story that speaks for its self with our logos. Try out logos and see the difference yourself.",
               
              ]}
              list={[
                "Increase your araffice",
                "Reach a larger audiance",
                "Increase your visiblity ",
                "Become the top brand .",
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
          key: "Back End Web Development",
          name: "Back End Web Development",
          content: (
            <TwoColSection1
              title={
                <>
                  <span style={{ color: "#fe1f07" }}>
                  Front End Web Development
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
          key: "Custom Web Development",
          name: "Custom Web Development",
          content: (
            <TwoColSection1
              title={
                <>
                  <span style={{ color: "#fe1f07" }}>
                  Front End Web Development
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
          key: "Web Portal Developement",
          name: "Web Portal Development",
          content: (
            <TwoColSection1
              title={
                <>
                  <span style={{ color: "#fe1f07" }}>
                  Front End Web Development
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
          key: "CMS & E-Commerce Website",
          name: "CMS & E-Commerce Website",
          content: (
            <TwoColSection1
              title={
                <>
                  <span style={{ color: "#fe1f07" }}>
                  Front End Web Development
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

    <InfoSection title={"get Tailored Web Development That Matches Your Brand"} subtitle={"Are you Ready to Get Your Business The Perfect Direction"}  />
    <Portfolio
      title={
        <>
          Projects we helped our {" "}
          <span style={{ color: "#fe1f07" }}> clients to achieve success </span>
        </>
      }
      subtitle="We at LogoTrip Strive to provide you the most attention-grabbing LOGO that makes an impact. They are faboulas and they instantly create the everlasting impression on your customers."
      columns={3}
      titleStyles={{
        fontSize: 50,
        fontWeight: 700,
        marginBottom: 0,
        textTransform: "uppercase",
      }}
      category={"Webs"}
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

   
  </ClientLayout>
  );
}
export default WebDevelopment
