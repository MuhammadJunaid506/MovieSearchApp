import { Typography, Tabs } from "antd";
import { useRouter } from "next/router";
import ClientLayout from "../../components/ClientLayout";
import CustomBanner from "../../components/CustomBanner";

const PrivacyPolicy = () => {
  const { TabPane } = Tabs;
  const router = useRouter();
  return (
    <ClientLayout
      head={{ title: "Privacy and Policy - LogoTrim", description: "" }}
    >
      <CustomBanner
        height={350}
        title={"Privacy and Policy"}
        titleLevel={1}
        onlyText={true}
        titleStyles={{
          marginTop: "5px",
          marginBottom: "10px",
          fontWeight: 900,
          fontSize: "40px",
          color: "#fe1f07",
        }}
        bg={"/images/Background.png"}
      />
      <div style={{ padding: "80px" }}>
        <Typography.Title style={{ marginBottom: "10px",  fontWeight: 900,  fontSize: "30px",  color: "#fe1f07"}}>
          Privacy and Policy
        </Typography.Title>
        <Typography.Text
          style={{ fontSize: "16px", marginTop: "5px", marginBottom: "10px" }}
        >
          We encourage every customer to read our privacy policy statements
          before placing an order. Ensure to provide us accurate information to
          avoid any delay in the service. By choosing our service you allow us
          to collect the following information:
        </Typography.Text>
        <br />
        <ul style={{ marginTop: "5px", marginBottom: "5px" }}>
          <li>
            Contact Information (name, phone number, email address, and mailing
            address)
          </li>
          <li>Billing Information (credit/debit card number, address)</li>
          <li>Order Information (product, order history, and marketing)</li>
        </ul>
        <Typography.Text
          style={{ fontSize: "16px", marginTop: "5px", marginBottom: "10px" }}
        >
          Connection information (IP address, browser type, referring/exit
          pages, and operating system)However, we use automatically and manually
          obtained information to fulfil your order as per the needs of your
          business. We believe in 100% customer’s policy that’s why never share
          or disclose your personal or business information with the third
          party.
        </Typography.Text>
        <Typography.Title
          className="fontWeight900"
          level={2}
          style={{
            color: "#273da9",
            marginTop: "20px",
            marginBottom: "10px",
            fontWeight: 900,
            fontSize: "30px",
          }}
        >
          Cookies and Other Tracking Technologies
        </Typography.Title>
        <Typography.Text
          style={{ fontSize: "16px", marginTop: "5px", marginBottom: "10px" }}
        >
          Our team may use your browser cookies to keep track of your
          preferences and general information (not include personal
          information).
        </Typography.Text>

        <Typography.Title
          className="fontWeight900"
          level={2}
          style={{
            color: "#273da9",
            marginTop: "20px",
            marginBottom: "10px",
            fontWeight: 900,
            fontSize: "30px",
          }}
        >
          Web Beacon
        </Typography.Title>
        <Typography.Text
          style={{ fontSize: "16px", marginTop: "5px", marginBottom: "10px" }}
        >
          Web beacons are known as single-pixel gifs that are used to analyze
          user activity on site. For instance, emails and links that have been
          opened by the user. This helps us to identify the effectiveness of our
          site customer-friendly features to enhance the experience of users.
        </Typography.Text>

        <Typography.Title
          className="fontWeight900"
          level={2}
          style={{
            color: "#273da9",
            marginTop: "20px",
            marginBottom: "10px",
            fontWeight: 900,
            fontSize: "30px",
          }}
        >
          Security
        </Typography.Title>
        <Typography.Text
          style={{ fontSize: "16px", marginTop: "5px", marginBottom: "10px" }}
        >
          Our prime goal is to offer 100% security to customers to enhance user
          experience. We collect information directly from you as per the
          requirement of your order to meet your objectives. we follow a strict
          privacy policy to protect the personal information of the customer
          that is shared with us. We offer a 100% secure electronic payment
          transection gateway to customers. However, if you have any concerns
          about payment security on our website, then you must communicate with
          our customer support representative right away.
        </Typography.Text>

        <Typography.Title
          className="fontWeight900"
          level={2}
          style={{
            color: "#273da9",
            marginTop: "20px",
            marginBottom: "10px",
            fontWeight: 900,
            fontSize: "30px",
          }}
        >
          100% Uniqueness
        </Typography.Title>
        <Typography.Text
          style={{ fontSize: "16px", marginTop: "5px", marginBottom: "10px" }}
        >
          Every design which is developed by our design team is 100% unique. We
          develop every logo design from scratch as per the requirement of
          customers. Once you approve the initial concept we will provide you
          original file with 100% ownership.
        </Typography.Text>

        <Typography.Title
          className="fontWeight900"
          level={2}
          style={{
            color: "#273da9",
            marginTop: "20px",
            marginBottom: "10px",
            fontWeight: 900,
            fontSize: "30px",
          }}
        >
          Additional Policy Information
        </Typography.Title>
        <Typography.Text
          style={{ fontSize: "16px", marginTop: "5px", marginBottom: "10px" }}
        >
          We use widgets to provide great user experience (e.g. customer
          reviews, news, opinions, events, etc.). Customer information, like
          email addresses, might be collected through the use of widgets.
          Usually, widgets use cookies to enhance the functionality of the
          website appropriately. Information collected by this Widget is as per
          the privacy policy of the company that created it. We offer a blog
          section to allow users to read, collected, and share valuable
          information in their network. Feel free to communicate with our
          support staff if you any queries related to our service policy.
        </Typography.Text>

        <Typography.Title
          className="fontWeight900"
          level={2}
          style={{
            color: "#273da9",
            marginTop: "20px",
            marginBottom: "10px",
            fontWeight: 900,
            fontSize: "30px",
          }}
        >
          Acknowledgment of Privacy Policy Changes
        </Typography.Title>
        <Typography.Text
          style={{ fontSize: "16px", marginTop: "5px", marginBottom: "10px" }}
        >
          Logo magician has the complete right to add, remove or amend any of
          the above privacy policy statement. However, we try our best to update
          customers regarding the amendments of privacy policy statements
          through emails. We use our specified email account for the official
          correspondent with our clients. You can also communicate with our
          support staff via live chat box to learn about any changes in our
          privacy policy. We encourage our clients to read our privacy policy
          statements every time they visit our website for ordering a logo.
        </Typography.Text>
      </div>
    </ClientLayout>
  );
};
export default PrivacyPolicy;
