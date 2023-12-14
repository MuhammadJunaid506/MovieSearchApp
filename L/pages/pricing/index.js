import { FaLayerGroup } from "react-icons/fa";
import { BsFolderSymlink } from "react-icons/bs";
import { MdOutlineDraw } from "react-icons/md";

import ClientLayout from '../../components/ClientLayout';
import ContactForm from "../../components/ContactForm"
import CustomBanner from "../../components/CustomBanner";
import SliderBanner from "../../components/SliderBanner";
import Plans from "../../components/Plans";
import TabsComponent from "../../components/TabsWhite";
import ComboPackage from "../../components/ComboPackage";

const Pricing = () => {

  return (
    <ClientLayout head={{ title: "Budget-friendly Pricing and Packaging - Logo Trim", description: "Getting quality at reasonable prices is always a challenge, but Logo Magicians is one of the professional companies that guarantee all0-in-one solutions at affordable prices. What could get better than this? Feel free to contact us now for the best deals in town!" }}>
     <CustomBanner
        height={550}
        title={
          <>
          Our Package Are Trailed For <br></br>
          <span style={{ color: "#fe1f07" }}>
          Every Business Need{" "}
        </span>
        </>
        }
        text={"Whether you are looking for basic level sevice or advance level service, we have a deal for you! With every package you get premium customer service"}
        titleLevel={1}
        // onlyText={true}
        titleStyles={{
          marginTop: "10px",
          marginBottom: "10px",
          fontWeight: 900,
          fontSize: "40px",
          color: "black",
        }}
        image={"/images/pricing_03.png"}
        bg={"/images/Background.png"}
        imageDimentions={[500, 500]}
        imageStyles={{ width: "400px" , marginTop:"30px" }}
      />
<br/>
<br/>
      {/* <Plans
              hideButton={true}
              category={"Logo"}
              showAll={true}
            /> */}
      <TabsComponent
        bg="white"
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
            content: <Plans category="Home" fullWidth />,
          },
          {
            key: "website",
            name: "Website",
            content: <Plans category="Home" fullWidth />,
          },
          {
            key: "web-development",
            name: "Web Development",
            content: <Plans category="Home" fullWidth />,
          },
        ]}
      />
<br/>
<br/>
    <ComboPackage/>
{/* <SliderBanner
        height={550}
        category={"LogoDesign"}
        title={"Why Choose Us?"}
        list={[
          {
            icon: (
              <BsFolderSymlink style={{ fontSize: "50px", color: "FFFF00" }} />
            ),
            title: "1. In-depth Research",
            text: "Before working your logo our team will research your type of business and competition to design a brand identity that will keep ahead of the curve.",
          },
          {
            icon: (
              <FaLayerGroup style={{ fontSize: "50px", color: "FFFF00" }} />
            ),
            title: "2. Customization Option",
            text: "One of our dedicated designers will collaborate with you to change the color, text, font and other crucial elements to provide you a bespoke logo.",
          },
          {
            icon: (
              <MdOutlineDraw style={{ fontSize: "50px", color: "FFFF00" }} />
            ),
            title: "3. Multiple Revisions",
            text: "At Logo Magicians we believe in offering 100% customer satisfaction through lots of choices so that you will receive a logo as per your requirements.",
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
      /> */}
 
      {/* <ContactForm
        title={"Get Free Consultancy"}
        subtitle={"Send us an email using the following form and receive a guaranteed response within 48 hours."}
      /> */}
    </ClientLayout>
  )
}

export default Pricing