import ClientLayout from '../../components/ClientLayout';
import CustomBanner from "../../components/CustomBanner";
// import Reviews from "../../components/Reviews3";

const Review = () => {

  return (
    <ClientLayout head={{ title: "100+ Reviews For Logo Design & Branding | Logo Magicians", description: "Are you confused about hiring us? Don’t worry, we got you! Go through our clients' feedbacks from around the world to know about our reliable services and products. We promise not to let you down." }}>
      <CustomBanner
        height={350}
        title={"Client Reviews"}
        titleLevel={1}
        onlyText={true}
        titleStyles={{
          marginTop: "5px",
          marginBottom: "10px",
          fontWeight: 900,
          fontSize: "40px",
          color: "white",
        }}
      />

      <Reviews category="Reviews" />
    </ClientLayout>
  );
}

export default Review