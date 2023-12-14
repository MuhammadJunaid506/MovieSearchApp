import { Typography, Tabs } from "antd";
import { useRouter } from 'next/router'
import ClientLayout from "../../components/ClientLayout";
import CustomBanner from "../../components/CustomBanner";

const TermsConditions = () => {
const { TabPane } = Tabs;
const router = useRouter()
  return (
    <ClientLayout
      head={{ title: "Terms & Conditions - LogoMagicians", description: "" }}
    >
      <CustomBanner
        height={350}
        title={"Terms and Conditions"}
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
          Terms and Conditions
        </Typography.Title>
        <Typography.Text
          style={{ fontSize: "16px", marginTop: "5px", marginBottom: "10px" }}
        >
          The following terms and conditions apply to every user of this
          website. By using our website, you accept every term and condition
          provided below. Ensure that you are at least 18 years of age and must
          read as well as agree with the entire terms and conditions of this
          website.
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
          Ownership & Licence of this Website
        </Typography.Title>
        <Typography.Text
          style={{ fontSize: "16px", marginTop: "5px", marginBottom: "10px" }}
        >
          Logo Magicians licensors own the complete rights of this website. You
          can only use the content of this site for logo designing purposes with
          our team. Our website terms and conditions restrict you to copy or
          share our site content such as text, images, audio material, video
          material, and any audio or visual material. Below are actions you must
          avoid while using this site:
        </Typography.Text>
        <br />
        <ul style={{ marginTop: "5px", marginBottom: "5px" }}>
          <li>Republishing material to another website</li>
          <li>Selling product or service by using this website</li>
          <li>
            Copying or editing the content of this website for any purpose
          </li>
        </ul>

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
          Site Limitations
        </Typography.Title>
        <Typography.Text
          style={{ fontSize: "16px", marginTop: "5px", marginBottom: "10px" }}
        >
          Logo Magicians holds the right to restrict access to any page or
          information on this website. However, we provide clients a dedicated
          user ID and password to enable them access to every page and
          information of this site that is required for developing a logo
          design. If you want to explore every page of this website, then you
          must ensure to get a user ID and password from our sales team. In case
          of any suspicious activity, we own the right to temporarily or
          permanently disable your user ID and password with or without
          acknowledgment.
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
          Content Uploading Policy
        </Typography.Title>
        <Typography.Text
          style={{ fontSize: "16px", marginTop: "5px", marginBottom: "10px" }}
        >
          Any content that is shared or uploaded by the user to this site like
          text, images, audio material, video material and any audio or visual
          material for any purpose must not be illegal or unlawful. We do not
          entertain users that share or upload any content that has a third
          party’s legal rights as it can give rise to legal action against
          client or Logo Magicians. Furthermore, avoid sharing or uploading
          threatening, misleading, legal proceedings or other similar
          controversial content. Logo Magicians has the right to modify or
          delete any material that is shared or uploaded on their website
          servers. We do not undertake any responsivity to monitor the
          submission of content on this website.
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
          Limitations of Warranty
        </Typography.Title>
        <Typography.Text
          style={{ fontSize: "16px", marginTop: "5px", marginBottom: "10px" }}
        >
          Following are terms and conditions that Logo Magicians does not
          warrant on this website:
        </Typography.Text>
        <ul style={{ marginTop: "5px", marginBottom: "5px" }}>
          <li>Continuous availability of this website or sales team</li>
          <li>
            Client losses including but not limited to loss of sales revenue,
            profit, contracts, customer relationships, loss of data or any
            information and loss of intangible assets like reputation or
            goodwill
          </li>
          <li>
            Every information that is shared on this website is for logo
            development only. In case of legal, financial or any else matter you
            should interact with appropriate professionals.
          </li>
        </ul>

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
          Exceptions
        </Typography.Title>
        <Typography.Text
          style={{ fontSize: "16px", marginTop: "5px", marginBottom: "10px" }}
        >
          Logo Magicians’ sole purpose is to maximize the visibility of brands
          with a captivating, professional and unique logo design. We are not
          responsible for any:
        </Typography.Text>
        <ul style={{ marginTop: "5px", marginBottom: "5px" }}>
          <li>fraud or fraudulent misrepresentation of our site</li>
          <li>personal loss, injury or death of a client</li>
        </ul>

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
          Refund Policy
        </Typography.Title>
        <Typography.Text
          style={{ fontSize: "16px", marginTop: "5px", marginBottom: "10px" }}
        >
          Logo Magician refund policy is not applicable in the following cases:
        </Typography.Text>
        <ul style={{ marginTop: "5px", marginBottom: "5px" }}>
          <li>By choosing a special service package</li>
          <li>By approving the initial design concept</li>
          <li>By providing an incomplete design brief</li>
          <li>By requesting or accepting a revision</li>
          <li>
            Customer violated our terms &amp; conditions or any privacy policy
          </li>
          <li>
            Discussing or assigning the same logo to a freelancer or any design
            agency
          </li>
          <li>Demanding a change in the approved design concept</li>
          <li>Exceeding the maximum time allowed to request for refund</li>
          <li>Closing or renaming your business</li>
          <li>Change of mind, policy, or any dispute</li>
          <li>
            By canceling the order due to any reason that is not mentioned in
            our refund policies
          </li>
          <li>
            Customer did not contact for more than 14 days since the commence of
            a project
          </li>
          <li>
            failing to provide the initial design brief in no more than 10 days
            of order placement
          </li>
          <li>
            In case of customer have ordered a bundled service package, a refund
            can only be claimed against a specific service which customer
            dislike after revision (not for the entire set of bundled services)
          </li>
        </ul>
        <br />
        <Typography.Text
          style={{ fontSize: "16px", marginTop: "5px", marginBottom: "10px" }}
        >
          Note:Logo Magicians has the complete right to reject/cancel any logo
          or project order or contract with the customer in case of critical
          managerial discretion. Once claiming or availing the refund, you will
          have no right to use the logo design concepts for any purpose or
          activity as they will remain the sole property of Logo Magicians. In
          case of breach of agreement, Logo Magician has full rights to take
          action through the Copyright Acquisition of the Government Copyright
          Agencies to ensure legality.
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
          Claiming A Refund
        </Typography.Title>
        <Typography.Text
          style={{ fontSize: "16px", marginTop: "5px", marginBottom: "10px" }}
        >
          You are recommended to communicate with our dedicated sales
          representative for claiming your refund through:
        </Typography.Text>
        <ul style={{ marginTop: "5px", marginBottom: "5px" }}>
          <li>Phone or Live chat: By sharing order ID</li>
          <li>Email: Write Refund and Order ID in the subject line</li>
        </ul>

        <Typography.Text
          style={{ fontSize: "16px", marginTop: "5px", marginBottom: "10px" }}
        >
          After we receive your request for a refund, our dedicated customer
          representative will reach out to you as soon as possible to access and
          approve your refund request in the best way possible.
        </Typography.Text>

        <br />

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
          Money-Back Guarantee
        </Typography.Title>
        <Typography.Text
          style={{ fontSize: "16px", marginTop: "5px", marginBottom: "10px" }}
        >
          At Logo Magicians we entertain clients with Money Back Guarantee for
          100% satisfaction. Ensure to contact us within 30 days of order
          placement to get your money back. Money-Back Guarantee is not valid in
          case of a revision request for any logo design sample or concept. Once
          you get a refund, you have no right to use the initial concept or
          design.
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
          Indemnity
        </Typography.Title>
        <Typography.Text
          style={{ fontSize: "16px", marginTop: "5px", marginBottom: "10px" }}
        >
          Logo Magicians is not responsible for any loss, damage, liability, and
          expense or legal dispute causes due logo design that is developed by
          our team as per the requirement of the customer.
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
          Breach of The Contract
        </Typography.Title>
        <Typography.Text
          style={{ fontSize: "16px", marginTop: "5px", marginBottom: "10px" }}
        >
          Logo magicians hold the right to take legal action in case of customer
          breach these terms and conditions in any way. However, we prefer to
          suspend user access to our website by blocking the IP address. In case
          of fraud, we might move on to court proceedings against the fraudulent
          person.
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
          Closure of Project
        </Typography.Title>
        <Typography.Text
          style={{ fontSize: "16px", marginTop: "5px", marginBottom: "10px" }}
        >
          The project will be deemed as closed in case of no response or lack of
          communication between the client and our customer support
          representative for 30 days. A project is considered a closed project
          that has been either fully accomplished or wasn’t claimed for at least
          30 days. After skipping the mentioned time frame Logo Magicians would
          not be responsible for revision, partial refund or money-back
          guarantee.
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
          Acknowledgment
        </Typography.Title>
        <Typography.Text
          style={{ fontSize: "16px", marginTop: "5px", marginBottom: "10px" }}
        >
          We hold the right to revise or change the mentioned terms and
          conditions anytime with or without notification. However, new or
          amended terms and conditions will apply to the use of this website
          from the date of incorporation in the terms and conditions on this
          website. You are highly recommended to read the entire terms and
          conditions every time before placing an order.
        </Typography.Text>

        <Typography.Text
          style={{ fontSize: "16px", marginTop: "5px", marginBottom: "10px" }}
        >
          By using this website, you agree that the above terms and conditions
          is appropriate. If you think they are not reasonable, you are
          recommended to not use this website for any purpose.
        </Typography.Text>
      </div>
    </ClientLayout>
  );
};
export default TermsConditions;
