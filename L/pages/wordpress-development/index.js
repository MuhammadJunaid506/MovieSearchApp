import { Col, Row, Typography, Tabs } from "antd";
import { useRouter } from 'next/router'
import { FaLayerGroup } from "react-icons/fa";
import { BsFolderSymlink } from "react-icons/bs";
import { MdOutlineDraw } from "react-icons/md";
import ClientLayout from "../../components/ClientLayout";
import MainButton from "../../components/MainButton";
import ContactForm from "../../components/ContactForm";
import CustomBanner from "../../components/CustomBanner";
import FAQ from "../../components/FrequentlyAskedQuestions";
import SliderBanner from "../../components/SliderBanner";
import AssuranceGrid from "../../components/AssuranceGrid";
import InfoSection from "../../components/InfoSection";
import Companies from "../../components/Comapnies";
import TwoColSection1 from "../../components/TwoColSection1";
import Portfolio from "../../components/Portfolio";
import Reviews from "../../components/Reviews2";

const WordpressDevelopment = () => {
const { TabPane } = Tabs;
const router = useRouter()
  return (
    <ClientLayout
      head={{ title: "WordPress Development Company in The USA | Logo Magicians", description: "Need Custom WordPress Development? Logo Magicians is a WordPress development company offering the best WordPress development services to clients." }}
    >
      <CustomBanner
        height={550}
        title={"Custom Built WordPress Development Services        "}
        titleLevel={1}
        text={
          "We understand the value of website in today’s digital era. Our developers build mobile responsive and user-friendly WordPress websites. Our WordPress sites are popular for their dynamic and actionable appeal to customers"
        }
        titleStyles={{
          marginTop: "5px",
          marginBottom: "10px",
          fontWeight: 900,
          fontSize: "45px",
          color: "white",
        }}
        image={"/images/wordpress_development_1.webp"}
        imageStyles={{ maxWidth: "500px" }}
        buttons={
          <>
            <MainButton
              style={{
                marginTop: 20,
                fontSize: 17,
                padding: "8px 40px",
                height: "auto",
                fontWeight: 500,
              }}
            onClick={() => router.push("/quote")}
>
              Get Started
            </MainButton>
          </>
        }
      />

      <Companies />

      <Row style={{ padding: "50px 0 0 0", justifyContent: "center" }}>
        <Col span={22} style={{ maxWidth: "900px" }}>
          <Typography.Title
            level={2}
            style={{
              color: "#fe1f07",
              textAlign: "center",
              fontWeight: 700,
              fontSize: "40px",
            }}
          >
           Create Flexible and Accessible WordPress Websites for Businesses

          </Typography.Title>
        </Col>
      </Row>

      <TwoColSection1
        image={"/images/wordpress_development_2.webp"}
        imageDimentions={[785, 442]}
        imageStyles={{ maxWidth: "350px" }}
        text={
          "We are a top leading WordPress Development Company in the United States offering robust, smart, and elegant website business solutions to customers. Our WordPress development services comprises modern agile technique. We develop dynamic and functional native app development websites that meet all your commercial business requirements.          "
        }
        buttons={
          <>
            <MainButton
              style={{
                marginTop: 10,
                fontSize: 17,
                padding: "8px 40px",
                height: "auto",
                fontWeight: 500,
              }}
            onClick={() => router.push("/quote")}
>
              Get Started
            </MainButton>
          </>
        }
      />
      {/* <TwoColumnFeatures /> */}
      {/* <PinkSection title="Start Inspired And Get A Free Customized Quote Now!" /> */}

      <AssuranceGrid margin="0" />
      {/* <CustomTabs /> */}

      <CustomBanner
        height={550}
        title={"Custom WordPress Development for Small and large Businesses        "}
        titleLevel={2}
        text={
          "We are a professional WordPress development agency serving thousands of clients and delivering projects on time. Our team has a tremendous record of meeting client deadlines and maintaining the high quality of work.          "
        }
        features={[
          "Free of cost WordPress Consulting.          ",
          "Result Oriented Workflow.",
          "Dedicated WordPress Development Team.",
          "Compliance with Standards.",
          "Uncompromising Quality.",
          "Market Competitive prices.",
        ]}
        titleStyles={{
          marginTop: "0px",
          marginBottom: "10px",
          fontWeight: 700,
          fontSize: "40px",
          color: "white",
        }}
        image={"/images/wordpress_development_3.webp"}
        imageStyles={{ maxWidth: "500px" }}
        others={
          <>
            <br />
            <br />
          </>
        }
      />

      <InfoSection />
      <Portfolio
        title="Our Recent WordPress Development Portfolio"
      subtitle={"Most stunning Illustrative Logo Design Solutions for businesses that want to win      "}
        titleStyles={{
          marginTop: "0px",
          marginBottom: "0px",
          fontWeight: 700,
          fontSize: "40px",
          color: "#fe1f07",
        }}
        category={"WordpressDevelopment"}
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
           onClick={() => router.push("/portfolio")} >
              See All Portfolio
            </MainButton>
          </>
        }
      />

      <SliderBanner
        height={550}
        category={"Website"}
        title={"What is Our WordPress Development Process?"}
        list={[
          {
            icon: (
              <BsFolderSymlink style={{ fontSize: "50px", color: "FFFF00" }} />
            ),
            title: "1. Project Related-Questionnaire",
            text: "Please select a package from our wide variety of customized packages that we offer. We will provide you with a questionnaire to fill in all your details. To achieve the perfect customer satisfaction. It is essential to have the details filled in.",
          },
          {
            icon: (
              <FaLayerGroup style={{ fontSize: "50px", color: "FFFF00" }} />
            ),
            title: "2. Sample Delivery",
            text: "Our team of talented marketers start working on small business branding. As per the customer wish, our details and samples of designs will be delivered to the customers waiting for a final call.            ",
          },
          {
            icon: (
              <MdOutlineDraw style={{ fontSize: "50px", color: "FFFF00" }} />
            ),
            title: "3. Final Source Files",
            text: "After an in-depth creative design and efforts, our final product is ready to be used. That is again developed based on the customers’ demands and satisfaction.",
          },
        ]}
        titleStyles={{
          marginTop: "30px",
          marginBottom: "10px",
          fontWeight: 900,
          fontSize: "35px",
          color: "white",
        }}
        image={"/images/home_image_3.webp"}
        imageDimentions={[784, 716]}
      />

      {/* <Plans
        title={`e-Commerce Website Design Packages`}
        // secondTitle={`Professional Graphic Design Logo Packages`}
        // text={`Ensuring our clients receive visionary, cost-effective designs, we take an oath to offer customised price packages that best fit your needs. An intelligently captivating designs at pocket-friendly prices is what we offer our customers.`}
        titleStyles={{ fontSize: 36 }}
        category="logoDesgin"
      /> */}

      <FAQ
        title={"WordPress Development FAQ's"}
        questions={[
          {
            question:
              "What can I Expect in my Wordpress website design?",
            answer:
              "The WordPress website design consists of intuitive and user-friendly dashboard that contains posts, media, pages, plugins, themes, widgets, menus, and categories. You can use WordPress for creating and publishing a medical animation studio blog post. Add images and videos to make your posts more attractive.",
          },
          {
            question: "What is a wordpress website?",
            answer:
              "In a layman term, a WordPress is a content management system (CMS). It helps manage and share content to the target audience. You can post, edit, and publish your content live to the customers. WordPress allows you to modify your theme and change the look and feel of your website.",
          },
          {
            question: "What are the advantages of a wordpress website?",
            answer:
              "There are numerous advantages of using a WordPress website design. It is built with free and open source software platform that provides ease of coding to developers. They can modify any source code and customize it according to the requirement.",
          },

          {
            question:
              "what are the latest trends in wordpress website design?",
            answer:
              "There are numerous advantages of using a WordPress website design. It is built with free and open source software platform that provides ease of coding to developers. They can modify any source code and customize it according to the requirement.              ",
          },
          {
            question: "How much should I cahrge to build a wordpress website?",
            answer:
              "It depends on the expertise of a developer to charge higher money for developing a professional looking WordPress website. The standard market rates range from 25 dollars to 400 dollars respectively. Every developer charges according to his/her CMS development expertise.",
          },
          {
            question:
              "Is wordpress good for beginner?",
            answer:
              "Yes, WordPress is an excellent tool for beginners. They can learn how to produce a content, edit, proofread, and publish it live to the target audience. It gives excellent chance for amateurs to learn about WordPress themes and widget customization. They can hire PPC advertising companies to optimize a customized and paid WordPress advertisement on Google.",
          },
        ]}
        titleStyles={{
          marginTop: "30px",
          marginBottom: "10px",
          fontWeight: 900,
          fontSize: "45px",
          color: "#fe1f07",
        }}
      />

      <Reviews
        // title={`See what our customers say about us!`}
        // titleStyles={{ fontSize: 36 }}
        category="Website"
      />

      <ContactForm
        title={"Get Free Consultancy"}
        subtitle={
          "Fill the following form and receive a guaranteed response within 48 hours."
        }
      />
    </ClientLayout>
  );
};
export default WordpressDevelopment;
