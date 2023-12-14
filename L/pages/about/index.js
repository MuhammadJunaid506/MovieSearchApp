import { Tabs } from "antd";
import { useRouter } from 'next/router'
import ClientLayout from "../../components/ClientLayout";
import MainButton from "../../components/MainButton";
import ContactForm from "../../components/ContactForm";
import CustomBanner from "../../components/CustomBanner";
import InfoSection from "../../components/infoSection";
import AboutSection2 from "../../components/AboutSection2";
import Awards from "../../components/Awards";
import TwoColSection1 from "../../components/TwoColSection1";
import ThreeColSection from "../../components/ThreeColSection";
import ContactBar2 from "../../components/ContactBar2"

const About = () => {
const { TabPane } = Tabs;
const router = useRouter()
  return (
    <ClientLayout head={{ title: "About Us | Branding | Logo Magicians", description: "Logo Magicians is a leading branding company that offers its clients unique solutions. Our strategies help create and remodel brands that are well-recognized by the world. If you are looking for a customized marketing plan, we are here to help. Get in touch with the top branding leader now!" }}>
<CustomBanner
      height={700}
      title={
        <>
          We are one stop shop for taking<br/>your
          <span style={{ color: "#fe1f07",lineHeight:0.6 }}>
            {" "}
            Business to Next Level{" "}
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
        lineHeight: 0.9,
      }}
      image={"/images/about_us_03.png"}
      bg={"/images/Background.png"}
      imageDimentions={[500, 500]}
      imageStyles={{ width: "400px"  }}
    />


      <br />    
      <br />
      <TwoColSection1
        image={"/images/about_us_07.png"}
        imageDimentions={[785, 442]}
        imageStyles={{ maxWidth: "450px" }}
        title={
          <><span style={{ fontSize:20,  lineHeight:0.3 }}>WE ARE CREATIVE AGENCY</span><br/>
            Keeping wheels of inovation &<br/>
            <span style={{ color: "#fe1f07",lineHeight:0.3 }}>
              {" "}
              creativity aligned towards Success{" "}
            </span>
          </>
        }
        multitext={[
          "Logo Magician Has the Potential to Build or Break Your Brand",
          "We endeavor to create stunning logo designs from start-up businesses to corporations across the globe. With an experienced team of designers, we offer only the best creative concepts for brand identities. At Logo Magicians our sales team operates 24/7 to help customers avail real-time support from a professional team of designers. Our award-winning logo designers are committed to providing matchless brand identities in the most unique and hassle-free way.",
          "Logo Magicians is a platform of a dedicated team that bags numerous awards by serving international and local clients across the United States.",
        ]}
      />

      <AboutSection2
        bg={{color:"#fe1f07"}}
        height={200}
        features={[
          { count: "750", text: "Completed Projects" },
          { count: "500+", text: "Positive reviews" },
          { count: "250+", text: "Websites Designs" },
          { count: "350+", text: "Logo Designs" },
          { count: "150", text: "Ecommerce Websites" },
        ]}
      />

      <ThreeColSection
        image1={"/images/about_us_14.png"}
        imageDimentions={[785, 442]}
        imageStyles={{ maxWidth: "100px", height:"100px"}}
        title={"We Provide Custom Logo Design by Passionate Team"}
        title1={"Simple Design Process"}
        text1={
          "Avail a custom business identity you’ll love with our easy design process. Logo magician is the best place to get a professional and matchless logo in a hassle-free manner."
        }
        image2={"/images/about_us_16.png"}
        title2={"Expert Design Team"}
        text2={
          "Our creative logo designers are always ready to help you get the perfect business identity that you’ll love. Get a logo design that is the best for the brand by our expert design team today."
        }
        image3={"/images/about_us_11.png"}
        title3={"Budget-Friendly Logo Design"}
        text3={
          "We provide exceptional brand identities to our clients, no matter how tight is their budget. Due to our diverse experience, we know how to design a professional identity at a budget-friendly price."
        }
        colStyle={{alignItems:"center",textAlign:"center", gap:5}}
        titleColor={"black"}
        titleStyle={{fontFamily:"Teko", fontSize:"25px"}}
        textStyle={{textAlign: "center"}}
      />
     <CustomBanner
      height={400}
      title={
        <>
         GREAT THINGS IN BUSINESS ARE NEVER <br /> DONE BY ONE PERSON.<span style={{ color: "#fe1f07",lineHeight: "1px" }}>{" "}THEY`RE DONE BY A TEAM OF PEOPLE.</span>
        </>
      }
      titleLevel={1}
      onlyText={true}
      text={
        <>
         We at LogoTrim, excel in providing impeccable services at very competitve rates!  <br /> Align your needs and jump right in to have an experiance of a lifetime
          centered digital experiances .
        </>
      }
      titleStyles={{
        marginTop: "5px",
        marginBottom: "10px",
        fontWeight: 900,
        textAlign: "center",
        fontSize: "50px",
        color: "white",
      }}
      textStyle={{
        textAlign: "center",
        fontSize: "16px",
        color: "white",
      }}
      bg={"/images/index_red_23.png"}
      imageDimentions={[500, 500]}
      imageStyles={{ width: "450px", opacity: 0.2}}
    />
    <ContactBar2/>
    </ClientLayout>
  );
};
export default About;
