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
import TwoColumnFeatures from "../../components/TwoColumnFeatures";
import Reviews from "../../components/Reviews";

const WordmarkLogoDesign = () => {
const { TabPane } = Tabs;
const router = useRouter()
  return (
    <ClientLayout
      head={{ title: "Get Instantly Recognized With A Wordmark Logo Design", description: "Designing has been our passion, and our work speaks for it! We offer the best quality wordmark logos to customers. Our logos represent your business, increasing your online brand presence. Get in touch now!" }}
    >
      <CustomBanner
        height={550}
        title={"Mark your brand with a Wordmark Logo"}
        titleLevel={1}
        text={
          "Wordmark Logo labels your brand with a beautiful and original name. It offers a simplicity and shows a clear visibility of your brand to clients."
        }
        titleStyles={{
          marginTop: "5px",
          marginBottom: "10px",
          fontWeight: 900,
          fontSize: "45px",
          color: "white",
        }}
        image={"/images/wordmark_logo_1.webp"}
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
        <Col span={22} style={{ maxWidth: "700px" }}>
          <Typography.Title
            level={2}
            style={{
              color: "#fe1f07",
              textAlign: "center",
              fontWeight: 700,
              fontSize: "40px",
            }}
          >
           Build Creative and Impressive Word Mark Logo for Your Brand

          </Typography.Title>
        </Col>
      </Row>

      <TwoColSection1
        image={"/images/wordmark_logo_2.webp"}
        imageDimentions={[785, 442]}
        imageStyles={{ maxWidth: "350px" }}
        multitext={[
          "Word Mark logo provides a basic logo design with a unique brand name. It has no symbols, fonts, images, or pictorial graphics. Companies use them in social media profiles and add value to their brands. These logos provide a trendy and classy brand appeal and build a robust foundation to your business.",
        ]}
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
      <TwoColumnFeatures />
      {/* <PinkSection title="Start Inspired And Get A Free Customized Quote Now!" /> */}

      <AssuranceGrid margin="0" />
      {/* <CustomTabs /> */}

      <CustomBanner
        height={500}
        title={"Attract Your Audience with Your Wordmark Logo"}
        titleLevel={2}
        text={
          "We create the best wordmark logos that attract the visitors and convert them into sales. Our designers are proficient in designing colorful and valuable logos that stay memorable for a lifetime."
        }
        features={[
          "Unique designs.          ",
          "Multiple concepts.          ",
          "High-quality logos.          ",
          "Cheap logo designs.",
        ]}
        titleStyles={{
          marginTop: "0px",
          marginBottom: "10px",
          fontWeight: 700,
          fontSize: "40px",
          color: "white",
        }}
        image={"/images/wordmark_logo_3.webp"}
        imageStyles={{ maxWidth: "300px" }}
        others={
          <>
            <br />
            <br />
          </>
        }
      />

      <InfoSection />
      <Portfolio
        title="Take a Look into Our Recent Projects"
        subtitle={
          "We have successfully design hundreds of monogram logos for our clients. Our attention to detail and commitment to service, results in top work quality."
        }
        titleStyles={{
          marginTop: "0px",
          marginBottom: "0px",
          fontWeight: 700,
          fontSize: "40px",
          color: "#fe1f07",
        }}
        category={"Wordmark"}
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
        category={"LogoDesign"}
        title={"How Logo Magician Works"}
        list={[
          {
            icon: (
              <BsFolderSymlink style={{ fontSize: "50px", color: "FFFF00" }} />
            ),
            title: "1. Share Your Requirements",
            text: "Share your requirements with best graphic design agency to offer you best prices. Our creative logo designers develop unique ideas on your brief.",
          },
          {
            icon: (
              <FaLayerGroup style={{ fontSize: "50px", color: "FFFF00" }} />
            ),
            title: "2. Avail Bundles of Unique Ideas",
            text: "Our professional logo designing team offers multiple design concepts to select for your business.",
          },
          {
            icon: (
              <MdOutlineDraw style={{ fontSize: "50px", color: "FFFF00" }} />
            ),
            title: "3. Get Your Design Logos",
            text: "Once you approve the final draft we will send you the final file of your logo design online with the complete copyright.",
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
        title={`Monogram Logo Design Packages`}
        // secondTitle={`Professional Graphic Design Logo Packages`}
        // text={`Ensuring our clients receive visionary, cost-effective designs, we take an oath to offer customised price packages that best fit your needs. An intelligently captivating designs at pocket-friendly prices is what we offer our customers.`}
        titleStyles={{ fontSize: 36 }}
        category="logoDesgin"
      /> */}

      <FAQ
        title={"Wordmark Logo Design FAQ's"}
        questions={[
          {
            question: "What can I expect in my Wordmark Logo Designs?",
            answer:"Wordmark logo designs build a visual landmark for your brand. It includes   the company, business, or product name. Businesses can add the variations in   logo types or typography to show a colorful and original impact. They do not   use mascots, symbols, or fonts in a wordmark logo. Use a wordmark logo in a   whiteboard animation video to draw a noticeable attention of target   audience.",
          },
          {
            question: "How do u make a good wordmark logo?",
            answer:"A good wordmark logo consists of texts, words, and letters. It does not   include fonts, symbols, abstract images, and pictorial graphics. It leaves   the lasting impression on the customers and they have a positive perception   about a company. A wordmark logo symbolizes the brand identity of your   business and builds a solid corporate image.",
          },
          {
            question: "What are the benefits of using wordmark logo design?",
            answer:"There are numerous benefits of using a wordmark logo design for your   organization. It popularizes your brand name among a wide customer base and   people become well familiar to your business. It is platform independent and   cost efficient to any kind of business budget.",
          },
          {
            question: "Why does a wordmark logo popular among businesses?",
            answer:"The rising popularity of wordmark logo is due to its simplicity, durability,   and versatility of features. It is a famous logo design idea among the top   leading companies in the world namely Google, FedEx, Disney, Cadbury,   Netflix, Pepsi, and Coca Cola. Using a direct brand name gives an authentic   respect of a business among customers. It allows businesses to hire social   media marketing agencies to prompt their brand name to a massive audience.",
          },
          {
            question: "What are the basic features of a wordmark logo?",
            answer:"The basic features of a wordmark logo are words, letters, texts, fonts,   shapes, and colors. These are essential elements that give a superior edge   of a wordmark logo on others. Businesses prioritize the use of wordmark logo   over their competitions. They use the modern design logos and compel   customers to buy the products and services.",
          },
          {
            question: "How can we differentiate a wordmark logo from others?",
            answer:"The simplicity, originality, and creativity are powerful factors that   differentiate a wordmark logo from others. It attracts the audience and puts   a dynamic and actionable impact on their minds. Businesses use wordmark logo   to show their complete brand name to customers and make them remember it for   their lifetime forever.",
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
        title={`See what our customers say about us!`}
        titleStyles={{ fontSize: 36 }}
        category="TrustPilot"
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
export default WordmarkLogoDesign;
