import { Col, Row, Typography, Tabs } from "antd";
import { useRouter } from 'next/router'
import ClientLayout from "../../components/ClientLayout";
import MainButton from "../../components/MainButton";
import ContactForm from "../../components/ContactForm";
import CustomBanner from "../../components/CustomBanner";
import InfoSection from "../../components/InfoSection";
import Companies from "../../components/Comapnies";
import TabsComponent from "../../components/Tabs";
import TwoColSection1 from "../../components/TwoColSection1";
import Portfolio from "../../components/Portfolio";
import Plans from "../../components/Plans";
import Reviews from "../../components/Reviews2";

const WebDesignCompany = () => {
const { TabPane } = Tabs;
const router = useRouter()
  return (
    <ClientLayout
      head={{ title: "World-class Web Development Services | Web Design Company", description: "Hire the leading web design services company to build an interactive and user-friendly website for your business. Our professional website developers vouch to deliver competitive web solutions that boost business growth. So what are you waiting for? Get instantly recognized with a website." }}
    >
      <CustomBanner
        height={550}
        title={"Top-Ranked Website Design and Development Company "}
        subtitle={"Innovative and Professional"}
        titleLevel={1}
        text={
          "Create a powerful web identity with the best in town website developers."
        }
        features={["Responsive Design", "Fully Customized", "Responsive websites", "SEO Friendly web"]}
        titleStyles={{
          marginTop: "5px",
          marginBottom: "10px",
          fontWeight: 900,
          fontSize: "40px",
          color: "white",
        }}
        image={"/images/web_design_company_1.webp"}
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
           Hire the Industry-vetted Web Design Company in USA
          </Typography.Title>
        </Col>
      </Row>

      <TwoColSection1
        image={"/images/web_design_company_2.webp"}
        opposeColumns={true}
        imageDimentions={[785, 442]}
        imageStyles={{ maxWidth: "450px" }}
        multitext={["The world-class web design agency offers result-oriented website development services.","Logo Magicians specializes in diverse platforms helping businesses optimize productivity and performance by defining online presence. Our team of dedicated website designers and developers build highly-responsive and customer-centric designs. Our creative web design services create the biggest impact with far-reaching effects for companies with a user-friendly interface.","We swear by our dynamic strategies leading to maximum conversion rates to provide a single, interactive platform for consumers and businesses. Our developers build e-commerce and boost lead generation through continuous research and development of unique and functional websites."]
        }
       
      />

      <TabsComponent
      title={"Best Website Developers and Designers"}
        tabs={[
          {
            key: "cms-website",
            name: "CMS Website",
            content: (
              <TwoColSection1
                title={"Cutting-Edge Web Development Company"}
                image={"/images/web_design_company_3.webp"}
                imageDimentions={[785, 442]}
                imageStyles={{ maxWidth: "450px" }}
                titleColor={"white"}
                textColor={"white"}
                background={"transparent"}
                multitext={[
                  "We are a full-stack web development company providing advanced services through WordPress, Joomla, Shopify, Magneto, etc. Our agency has the experience and knowledge to increase value, convert leads into sales, and boost growth with fully functional websites.",
                  "Customize your SEO-friendly websites to attract more audiences and remain ahead of the competitors. Contact our web development team at any time to build a professional website with a leading website development agency.",
                ]}
              />
            ),
          },
          {
            key: "responsive",
            name: "Responsive",
            content: (
              <TwoColSection1
              title={"Web Design Company Offers Responsive Website"}
              image={"/images/web_design_company_4.webp"}
              imageDimentions={[785, 442]}
              imageStyles={{ maxWidth: "450px" }}
              titleColor={"white"}
              textColor={"white"}
              background={"transparent"}
              multitext={[
                "The marketing industry is expanding rapidly in today’s world, where organizations are trying to target potential customers through mobile phones or desktop devices. We help place the brand online, easily visible to the audience. Responsive websites, for example, convey a clear message to customers about the number of products and services.                ",
                "Our custom website design services enable businesses to render web pages on multiple devices, making them highly scalable. These websites ensure usability and enhance user satisfaction with engaging content. It leaves a long-term impression on customers, making them revisit the brand until they become loyal customers. It’s all about creativity and functionality in a box.",
              ]}
            />
            ),
          },
          {
            key: "e-commerce",
            name: "Ecommerce",
            content: (
              <TwoColSection1
              title={"Increase Revenue with best website design"}
              image={"/images/web_design_company_5.webp"}
              imageDimentions={[785, 442]}
              imageStyles={{ maxWidth: "450px" }}
              titleColor={"white"}
              textColor={"white"}
              background={"transparent"}
              multitext={[
                "At Logo Magicians, we follow a documented process for website development at affordable prices to increase a company’s ROI. The process starts with researching and evaluating the project, where one needs to follow a strategic plan to avoid issues later on. Our e-commerce web designers then work with visual designs to enhance the overall look of the website and later implement other branding strategies to meet all the clients’ needs.                ",
                "Designing and developing an e-commerce business has brought a lot of fame and recognition to us. Our market-competitive prices with an all-in-one solution create a powerful store for companies. Our services work best to inform, support, and display the products and services to its customers. We build platforms that support payment, checkouts, shipping, content, marketing, etc.                ",
              ]}
            />
            ),
          },
          {
            key: "b2c-portal",
            name: "B2C Portal",
            content: (
              <TwoColSection1
              title={"B2C Web Portal Development Services"}
              image={"/images/web_design_company_6.webp"}
              imageDimentions={[785, 442]}
              imageStyles={{ maxWidth: "450px" }}
              titleColor={"white"}
              textColor={"white"}
              background={"transparent"}
              multitext={[
                "We take pride in calling ourselves the top b2c web design firm that designs aesthetically pleasing web pages. Customers are always on the lookout for innovative ways to sell the brand, product, or service and their wish is our command. The web designing team guides and supports clients throughout the process, explaining how online marketing works. From content writing to digital PR, everything aims to increase your company’s presence.                ",
                "We create well-establish websites that convert leads into sales from various sources and create a competitive advantage. Our developers use advanced tools and strategies to highlight its benefits and deliver designer results.                ",
              ]}
            />
            ),
          },
          {
            key: "parallex",
            name: "Parallex",
            content: (
              <TwoColSection1
                title={"Web Design Agency for Parallax Effect"}
                image={"/images/web_design_company_7.webp"}
                imageDimentions={[785, 442]}
                imageStyles={{ maxWidth: "450px" }}
                titleColor={"white"}
                textColor={"white"}
                background={"transparent"}
                multitext={[
                  "Logo Magicians believe in integrating new techniques into its business model to provide next-level services to its clients. We offer parallax websites, an advanced form of marketing where web designers use computer graphics to create faux-3D effects. Our cutting-edge technology is the perfect fit to maximize profits and fulfill the demands of our clients. The experienced team of developers and designers has the patience, knowledge, and skills to follow a strategic plan to implement the effect on a website.                  ",
                  "In-depth planning and evaluation are the key points toward the growth and success of any enterprise trying to increase revenue. The designers, developers, and testers together deliver the best experiences to customers in a short time.                  ",
                ]}
              />
            ),
          },
        ]}
       
      />

    

    

      <Portfolio
        title="Website Development Company Brings Brilliant Ideas With Great Values"
        titleStyles={{
          marginTop: "0px",
          marginBottom: "0px",
          fontWeight: 700,
          fontSize: "40px",
          color: "#fe1f07",
        }}
        category={"WebDesignCompany"}
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
   <br/>
      <br/>

<InfoSection />
<br/>
<br/>
      <Plans
        // title={`Customized Branding Packages`}
        // secondTitle={`Professional Graphic Design Logo Packages`}
        // text={`Ensuring our clients receive visionary, cost-effective designs, we take an oath to offer customised price packages that best fit your needs. An intelligently captivating designs at pocket-friendly prices is what we offer our customers.`}
        titleStyles={{ fontSize: 36 }}
        category="WebDesignCompany"
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
export default WebDesignCompany;
