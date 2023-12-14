import Awards from "../../components/Awards";
import ClientLayout from '../../components/ClientLayout';
import ContactForm from "../../components/ContactForm"
import CustomBanner from "../../components/CustomBanner";
import FormC from "../../components/From";
import TwoColSection1 from "../../components/TwoColSection1";
import AssuranceGrid2 from "../../components/AssuranceGrid2";

const ContactUs = () => {

  return (
    <ClientLayout head={{ title: "Contact Us Now - Logo Trim", description: "Are you tired of searching for reliable logo, website and app designing company? We are the leading branding company that provides complete solutions to clients worldwide. Feel free to contact us and get to know more about our outstanding services." }}>
  <CustomBanner
      height={700}
      title={
        <>
          Ready to Take an Inclusive Approach<br/>
          <span style={{ color: "#fe1f07" }}>
            {" "}
            Contact Us Today!{" "}
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
      image={"/images/contact_us_03.png"}
      bg={"/images/Background.png"}
      imageDimentions={[500, 500]}
      imageStyles={{ width: "400px"  }}
    />
    <FormC/>
    <AssuranceGrid2 title={<>Get In Touch <span style={{color:"#fe1f07"}}>With Us</span></> } subtitle={"Contact Us Via Emila or Phone and Follow Our Social Media Accounts "}/>


    </ClientLayout>
  )
}

export default ContactUs