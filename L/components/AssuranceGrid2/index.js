import { Image } from "antd";
import { Row, Col, Typography } from "antd";

const AssuranceGrid2 = ({ title, subtitle, margin = "30px 0 0 0" }) => {
  return (
    <Row
      style={{ textAlign: "center", justifyContent: "center", margin: margin,background:'white' }}
    >
      {(title || subtitle) && (
        <Col span={20}>
          <Typography.Title
          level={3}
            style={{
              color: "black",
              fontSize: 40,
              fontWeight: 600,
              marginBottom: 5,
              fontFamily:"Teko",
            }}
          >
            {title}
          </Typography.Title>
          <Typography.Title
          level={4}
            style={{
              color: "black",
              fontSize: 16,
              fontWeight: "normal",
              marginBottom: 5,
            }}
          >
            {subtitle}
          </Typography.Title>
        </Col>
      )}
      <Col span={20}>
        <Row
          style={{ alignItems: "center", padding: "25px 0", display:"flex", rowGap: "20px"  }}
          justify="space-evenly"
          gutter={20}
        >
          <Col xs={24} md={6}>
            <div
               style={{
                textAlign: "center",
                padding: "4px 20px",
                backgroundColor: "transparent",
                display: "flex",
                gap:10,
                justifyContent:"center"
              }}
            >
              <Image
                preview={false}
                alt={"Failed to load image"}
                width={50}
                height={50}
                src="/images/contact_us_14.png"
              />
            <div style={{lineHeight: 0.1 , justfyItems:"left"}} >
            <Typography.Title style={{ fontSize: 25,fontFamily:"Teko", color: "black", fontWeight:"bolder" }}>SEND US AN EMAIL</Typography.Title>
            <Typography.Text
              style={{ display:'block',fontSize: 14, color: "gray", fontWeight: "800" }}
            >
              Support@logotrim.com
            </Typography.Text>
            </div>
            </div>
          </Col>
          <Col xs={24} md={6}>
            <div
              style={{
                textAlign: "center",
                padding: "4px 20px",
                backgroundColor: "transparent",
                display: "flex",
                justifyContent:"center"
              }}
            >
              <Image
                preview={false}
                alt={"Failed to load image"}
                width={50}
                height={50}
                src="/images/contact_us_11.png"
              />
            <div style={{lineHeight: 0.1 , justfyItems:"left"}} >
            <Typography.Title style={{ fontSize: 25,fontFamily:"Teko", color: "black", fontWeight:"bolder" }}>MAKE A PHONE CALL</Typography.Title>
            <Typography.Text
              style={{ fontSize: 14, color: "gray", fontWeight:"bolder" }}
            >
              0213-456-7890
            </Typography.Text>
            </div>
            </div>
          </Col>
          <Col xs={24} md={6}>
          <div
              style={{
                textAlign: "center",
                padding: "4px 20px",
                backgroundColor: "transparent",
                display: "flex",
                flexDirection:"column"

              }}
            >
          <Typography.Title
              style={{fontSize: 20, fontFamily:"Teko", color: "black", fontWeight: "bolder" }}
            >
              FOLLOW US ON
            </Typography.Title>
            <div
              style={{
                textAlign: "center",
                // padding: "4px 20px",
                backgroundColor: "transparent",
                display:"flex",
                gap:20,
                justifyContent: "center",
              }}
            >
              <Image
                preview={false}
                alt={"Failed to load image"}
                width={20}
                height={20}
                src="/images/contact_us_17.png"
              />
                            <Image
                preview={false}
                alt={"Failed to load image"}
                width={20}
                height={20}
                src="/images/contact_us_19.png"
              />
                            <Image
                preview={false}
                alt={"Failed to load image"}
                width={20}
                height={20}
                src="/images/contact_us_21.png"
              />
                            <Image
                preview={false}
                alt={"Failed to load image"}
                width={20}
                height={20}
                src="/images/contact_us_23.png"
              />
            </div>
           </div>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default AssuranceGrid2;
