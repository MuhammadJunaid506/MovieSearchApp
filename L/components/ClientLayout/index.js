import { useEffect, useState } from "react";
import Head from "next/head";
import { Layout, Modal, message } from "antd";
import ClientHeader from "./ClientHeader";
import ClientFooter from "./ClientFooter";
import { SITE_NAME } from "../../config/constants";
import { useRouter } from "next/router";
import { Get } from "../../config/api";
import { POPUP, UPLOADS_URL } from "../../config/constants/api";

const ClientLayout = ({ children, head }) => {
  const router = useRouter();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalClosed, setIsModalClosed] = useState(false);
  const [popupData, setPopupData] = useState({});

  // const getCanonical = (path) => {
  //     const fullURL = new URL(path, CURRENT_URL)
  //     return`${fullURL.origin}${fullURL.pathname}`
  //   }

  let title = head?.title ? head?.title : "";
  if (title) {
    title += ` - ${SITE_NAME}`;
  } else {
    title = SITE_NAME;
  }

  useEffect(() => {
    getPopup();
  }, []);

  const getPopup = () => {
    try {
      Get(POPUP.get).then((response) => {
        if (response.status) {
          setPopupData(response.data[0]);
          if (head?.title == "Home") {
            !isModalClosed &&
              setTimeout(() => {
                // setIsModalVisible(true);
              }, 5000);
          }
        } else {
          message.error(error.message ? error.message : "Something went wrong");
        }
      });
    } catch (error) {
      message.error(error.message ? error.message : "Something went wrong");
    }
  };
  return (
    <Layout
      style={{
        backgroundColor: "#fff",
        scrollBehavior: "smooth",
        position: "relative",
      }}
    >
      <Head>
        <title>{title}</title>
        <meta name="description" content={head?.description} />
        <meta
          name="robots"
          content="noindex, nofollow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Teko:wght@500&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <ClientHeader />
      {children}
      <ClientFooter />

   
      <Modal
        width={"750px"}
        style={{ height: "550px" }}
        bodyStyle={{
          height: "445px",
          background: `url(${UPLOADS_URL}/${popupData?.image})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        footer={null}
        visible={isModalVisible}
        onOk={() => true}
        onCancel={() => {
          setIsModalVisible(false);
          setIsModalClosed(true);
        }}
        okButtonProps={{ style: { display: "none" } }}
        cancelButtonProps={{ style: { display: "none" } }}
      ></Modal>
    </Layout>
  );
};

export default ClientLayout;
