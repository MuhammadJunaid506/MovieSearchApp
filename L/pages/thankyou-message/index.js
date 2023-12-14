import { Tabs } from "antd";
import { useRouter } from 'next/router'
import ClientLayout from "../../components/ClientLayout";
import MainButton from "../../components/MainButton";
import CustomBanner from "../../components/CustomBanner";

const About = () => {
const { TabPane } = Tabs;
const router = useRouter()
  return (
    <ClientLayout head={{ title: "Thankyou - LogoMagicians", description: "" }}>
      <CustomBanner
        height={500}
        title={
          "Thankyou for Contacting Logo Magicians!"
        }
        text={"We have received your Message. We will get back to you shortly."}
        titleLevel={1}
        onlyText={true}
        titleStyles={{
          marginTop: "5px",
          marginBottom: "10px",
          fontWeight: 900,
          fontSize: "40px",
          color: "white",
        }}
        buttons={
          <>
          <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
            <MainButton
              style={{
                marginTop: 20,
                fontSize: 17,
                padding: "8px 40px",
                height: "auto",
                fontWeight: 500,
              }}
            onClick={() => router.push("/")}
>
              Back To Home
            </MainButton>
            </div>
          </>
        }
      />
    </ClientLayout>
  );
};
export default About;
