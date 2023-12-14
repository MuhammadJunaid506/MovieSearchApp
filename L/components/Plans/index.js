import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { LoadingOutlined } from "@ant-design/icons";
import { Row, Col, Typography, List, message, Spin } from "antd";
import MainButton from "../MainButton";
import { useRouter } from "next/router";
import { PLANS, PORTFOLIO } from "../../config/constants/api";
import { Get } from "../../config/api";
import {BsFillCheckCircleFill} from "react-icons/bs"; 

const Plans = ({
  title,
  secondTitle,
  text,
  hideButton,
  category = "packages",
  showAll,
  titleStyles,
  secondTitleStyles,
  priceLabel,
  fullWidth
}) => {
  const antIcon = (
    <LoadingOutlined
      style={{
        color: "#fe1f07",
        fontSize: 55,
      }}
      spin
    />
  );
  const key = Object.keys(PORTFOLIO.categroy).find((key) => key === category);
  const catgoryId = PORTFOLIO.categroy[key];
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [packages, setPackages] = useState([]);
  const [loadCount, setLoadCount] = useState(0);
  const { ref, inView } = useInView({
    threshold: 0,
  });
  useEffect(() => {
    setLoadCount(loadCount + 1);
  }, [inView]);

  const [planLoadCount, setPlanLoadCount] = useState(0);
  const plansView = useInView({
    threshold: 0,
  });
  useEffect(() => {
    setPlanLoadCount(planLoadCount + 1);
  }, [plansView.inView]);

  useEffect(() => {
    getPackages();
  }, []);
  const getPackages = () => {
    setLoading(true);
    try {
      let path = `${PLANS.getByCategory}/${catgoryId}`;
      path += !showAll ? `?limit=${6}` : "";
      Get(path).then((response) => {
        setLoading(false);
        if (response.status) {
          setPackages(response.data);
        } else {
          message.error(
            response.message ? response.message : "Something went wrong"
          );
        }
      });
    } catch (error) {
      setLoading(false);
      message.error(error.message ? error.message : "Something went wrong");
    }
  };

  return (
    <>
      {(title || secondTitle || text) && (
        <Row
          style={{
            alignItems: "center",
            padding: "50px 0 30px 0",
            justifyContent: "center",
          }}
          ref={ref}
        >
          <Col
            span={20}
            style={{ maxWidth: 810 }}
            className={inView && loadCount < 3 ? "zoom-in" : ""}
          >
            <div style={{ textAlign: "center" }}>
           {title &&   <Typography.Title
              level={3}
                style={{
                  color: "#fe1f07",
                  fontSize: 18,
                  fontWeight: "bold",
                  marginBottom: 0,
                  ...titleStyles,
                }}
              >
                {title}
              </Typography.Title>}
              {secondTitle && <Typography.Title
              level={4}
                style={{
                  color: "#000",
                  fontSize: 36,
                  fontWeight: 600,
                  marginTop: 0,
                  ...secondTitleStyles,
                }}
              >
                {secondTitle}
              </Typography.Title>}
              <Typography.Text
                style={{
                  color: "#414141",
                  fontSize: 16,
                  fontWeight: 400,
                  marginTop: 0,
                  marginBottom: 0,
                }}
              >
                {text}
              </Typography.Text>
            </div>
          </Col>
        </Row>
      )}

      <Row
        style={{justifyContent: "center",marginTop:0}}
        ref={plansView.ref}
       
      >
        <Col xs={24} md={24}  lg={fullWidth ? 22 : 20}>
        <Row  gutter={24} style={{ alignItems: "center", }}
        justify="center">
        {loading && <Spin indicator={antIcon} />}
        {packages?.map((item, index) => {
          const classes = [];
          if (inView && loadCount < 3) classes.push("zoom-in");
          return (
            <Col
              key={index}
              xs={22}
              
              md={fullWidth ? 8 : 7}
              style={{
                minHeight: 300,
              }}
              className={classes.join(" ")}
            >
              <div
                style={{
                  textAlign: "center",
                  border: "1px solid lightgrey",
                  padding: "30px",
                  borderRadius: "10px",
                  backgroundColor:  "#fff",
                  marginTop:item.items.length > 5 ? 0 : 20,
                }}
              >
                <div>
                  <Row>
                    <Col xs={24} md={12}>
                    <Typography.Title
                    className="tekoFont"
                    level={4}
                      style={{
                        color: "black",
                        textAlign: "left",                        
                        fontSize: 35,
                        fontWeight: 600,
                        marginBottom: 0,
                      }}
                    >
                      {item.name} <br/>
                    </Typography.Title>
                    </Col>
                    <Col xs={24} md={12} style={{textAlign:'right'}}>
                    <Typography.Title
                      level={5}
                    className="tekoFont"
                      style={{
                        color:"#fe1f07",
                        textAlign: "right",
                        fontSize: 50,
                        display: "inline",
                        fontWeight: "bolder",

                        marginTop: 5,
                      }}
                    >
                      ${item.discountedPrice}
                    </Typography.Title>
                    </Col>
                
                  </Row>
          
                  <Row>
                    { item.description && <Typography.Title
                    level={5}
                      style={{
                        color: "grey",
                        fontSize: 12,
                        textAlign: "left",
                        fontWeight: "normal",
                        marginBottom: 0,
                      }}
                    >
                      {
                        item.description
                      }
                    </Typography.Title>}
                  </Row>
                </div>
                <br />

                <List
                  className="custom-scroll"
                  style={{
                   height: item.items.length > 5 ? 340 : 210,
                    overflowY: "auto",
                    // minHeight: 200,
                  }}
                  size="small"
                  dataSource={item.items}
                  renderItem={(listItem) => (
                    <List.Item
                      style={{
                        fontSize: 16,
                        color: "#777",
                        padding: "5px 0px",
                        textAlign: "left",
                        border:"none"
                      }}
                    >
                      <List.Item.Meta
                        avatar={
                          <BsFillCheckCircleFill  style={{color: "#fe1f07"}}/>
                        }
                        title={<span style={{ color: "#777"}} >{listItem}</span>}
                      />
                    </List.Item>
                  )}
                />
                <br />

                <MainButton
                  varient={"outline"}
                  onClick={() => {
                    router.push(`/checkout?plan=${item._id}`);
                  }}
                  className="tekoFont"
                  style={{
                    fontSize: 18,
                    padding: "5px 30px",
                    height: "auto",
                    fontWeight: "normal",
                    color: "#fff",
                    border: "none",
                    backgroundColor: "#fe1f07",
                    marginTop: 10,
                  }}
                >
                  Order Now
                </MainButton>
              </div>
            </Col>
          );
        })}
        </Row>
        </Col>

      </Row>

      {!hideButton && (
        <Row
          style={{ alignItems: "center", padding: "25px 0" }}
          justify="space-evenly"
        >
     
        </Row>
      )}
    </>
  );
};

export default Plans;
