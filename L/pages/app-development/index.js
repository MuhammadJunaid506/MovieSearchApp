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

const AppDesign = () => {
  const router = useRouter()


  return (
    <ClientLayout
    head={{
      title: "App development",
      description:
        "Want to enhance your brand visibility online? Hire Logo Trim for professional logo design services and kick start your business growth today. It helps convert your brand icon ideas into reality, making it stand out from the rest.",
    }}
  >
    <CustomBanner
      height={700}
      title={
        <>
          Mobile App Development that
          <span style={{ color: "#fe1f07" }}>
            {" "}
            Redefines Your Business{" "}
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
      image={"/images/app_development_03.png"}
      bg={"/images/Background.png"}
      imageDimentions={[500, 500]}
      imageStyles={{ width: "400px"  }}
    />

    <TwoColSection1
      image={"/images/app_development_07.png"}
      imageDimentions={[785, 442]}
      title={
        <>
          <span style={{ fontSize: "30px", }}>Trustworthy Mobile App Design</span><br/>
          Custom Mobile App Design Service<br/>to Enhance
          <span style={{ color: "#fe1f07" }}>
            {" "}
           Your Digital Fontprint
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
         Your Success That`s Our Business
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
      bg={"/images/app_development_10.png"}
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
          key: "User Interface Design",
          name: "User Interface Design",
          content: (
            <TwoColSection1
              title={
                <>
                  <span style={{ color: "#fe1f07" }}>
                  User Interface Design
                  </span><br/>
                Modernize Your Site with Professional App Designing
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
          key: "User Experience Design",
          name: "User Experience Design",
          content: (
            <TwoColSection1
              title={
                <>
                  <span style={{ color: "#fe1f07" }}>
                  User Interface Design
                  </span><br/>
                Modernize Your Site with Professional App Designing
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
          key: "Wireframing and Prototyping",
          name: "Wireframing and Prototyping",
          content: (
            <TwoColSection1
              title={
                <>
                  <span style={{ color: "#fe1f07" }}>
                  User Interface Design
                  </span><br/>
                Modernize Your Site with Professional App Designing
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

    <InfoSection title={"View Our App Design Packages"} subtitle={"Are you Ready to Get Your Business The Perfect Direction"}  />
    <Portfolio
      title={
        <>
          Fresh from our {" "}
          <span style={{ color: "#fe1f07" }}> Mobile Application </span>
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
      category={"Appsdevelops"}
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
export default AppDesign
