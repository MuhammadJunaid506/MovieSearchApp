import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useInView } from "react-intersection-observer";
import { Row, Col, Typography, message, Spin, Image as AntImage  } from "antd";
import MainButton from '../MainButton'
import { PORTFOLIO, REVIEWS , UPLOADS_URL } from "../../config/constants/api";
import { Get } from "../../config/api";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { LoadingOutlined } from "@ant-design/icons";

const ContactBar2 = ({
    category = "Review",
    showAll,
}) => {

    const antIcon = (
        <LoadingOutlined
          style={{
            color: "white",
            fontSize: 55,
          }}
          spin
        />
      );
      const key = Object.keys(PORTFOLIO.categroy).find((key) => key === category);
      console.log(category)
      const catgoryId = PORTFOLIO.categroy[key];
      const [loading, setLoading] = useState(false);
      const router = useRouter();
      const [reviews, setReviews] = useState([]);
      const [loadCount, setLoadCount] = useState(0);
      const [portfolio,setPortfolio] = useState(0);
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
        getReviews();
        getPortfolio()
      }, []);

      const getReviews = () => {
        setLoading(true);
        try {
          let path = `${REVIEWS.getByCategory}/${catgoryId}`;
          path += !showAll ? `?limit=${10}` : "";
          Get(path).then((response) => {
            setLoading(false);
            if (response.status) {
              setReviews(response.data);
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
      const getPortfolio = () => {
        setLoading(true)
        try {
            Get(`${PORTFOLIO.getByCategory}/${catgoryId}`)
                .then((response) => {
                    setLoading(false)
                    if (response.status) {
                      console.log("$$$$$$$$$$$$$$$$$$$", response.data)
                        setPortfolio(response.data)
                    }
    
                })
        } catch (error) {
            setLoading(false)
            message.error(error.message ? error.message : " Something went wrong")
        }
    }
    
      const responsive = {
        0: { items: 1 },
      };

    const renderPrevButton = ({ isDisabled }) => {
        return <span style={{  opacity: isDisabled ? '0.5' : 1}}></span>;
    };
    
    const renderNextButton = ({ isDisabled }) => {
        return <span style={{ opacity: isDisabled ? '0.5' : 1}}></span>;
    };



    return (
        <Row>
            <Col xs={24} md={12} style={{ background: "white", padding: "55px 0" }}>
            <Row
          style={{ justifyContent: "center", padding: "40px 0 0 0" }}
          gutter={25}
        >
          {loading && <Spin indicator={antIcon} />}
          <AntImage.PreviewGroup>
            
            {portfolio && portfolio?.map((item, index) => (
              <Col
                key={index}
                xs={24}
                md={10}
                style={{ textAlign: "center", marginBottom: "30px" }}
              >
                {item.url ? (
                  <Link href={item.url}>
                    <a target="_blank" rel="noopener noreferrer">
                      <AntImage
                        preview={false}
                        style={{
                          borderRadius: 5,
                          border: "1px solid lightgrey",
                          minHeight: "50px",
                        }}
                        height={"auto"}
                        alt={item.altText}
                        width={"auto"}
                        src={`${UPLOADS_URL}/${item.image}`}
                      />
                    </a>
                  </Link>
                ) : (
                  <AntImage
                    // preview={{ visible: false }}
                    style={{
                      borderRadius: 5,
                      border: "none",
                      minHeight: "60px",
                    }}
                    height={"auto"}
                    alt={item.altText}
                    width={"auto"}
                    src={`${UPLOADS_URL}/${item.image}`}
                  />
                )}
              </Col>
            ))}
          </AntImage.PreviewGroup>
        </Row>

            </Col>           
            <Col xs={24} md={12} style={{ background: "#3a3c3d", padding: "55px 45px", textAlign: "left", justifyContent:"center" }}>
                <Typography.Title style={{ fontSize: "35px", color: "#fff",marginTop:90, fontWeight: "bolder" }}>{<>The best web studio<br/> in <span style={{color:"#fe1f07"}}>New York</span></>}</Typography.Title>
                <Typography style={{ fontSize: 12, color: "#6A6A6A", margin: "5px 0", fontWeight: 700 }}>We have already turned plenty of ideas into executable action by providing our cretivity and expertise of our vetran engineers. Let's explore the top selected products from diverse industries we have designed and developed in the last couple of years.</Typography>
                <Col xs={24} md={24} lg={20}>
          <Row gutter={24} style={{ alignItems: "center" }} justify="center">
            <Col xs={24} md={18}>
              <Row
                className="mobile_margin_top_20"
                gutter={10}
                style={{ position: "relative" }}
                justify="center"
              >
                

                {loading && <Spin indicator={antIcon} />}
                {!loading && (
                  <AliceCarousel
                    // mouseTracking
                    // disableSlideInfo={false}
                    // autoPlayControls
                    // disableDotsControls
                    disableButtonsControls
                    // items={items}
                    // responsive={responsive}
                    // controlsStrategy="alternate"
                    // renderSlideInfo={renderSlideInfo}
                    renderPrevButton={renderPrevButton}
                    renderNextButton={renderNextButton}
                  >
                    {reviews?.map((item, index) => {
                      const classes = [];
                      if (inView && loadCount < 3) classes.push("zoom-in");
                      return (
                        <div
                          key={index}
                          style={{
                            // textAlign: "center",
                            padding: "10px",
                            borderRadius: "10px",
                            margin: "0 5px",
                          }}
                        >
                          {" "}
                          <div>


                            <Row
                              className="custom-scroll"
                              style={{
                                overflowY: "auto",                                
                                display:"flex"
                              }}
                            >
                              <AntImage
                                preview={false}
                                alt={"Failed to load image"}
                                width={100}
                                src={`${UPLOADS_URL}/${item.image}`}
                              />
                              
                              <Typography.Title
                                level={4}
                                style={{
                                  color: "white",
                                  fontSize: 14,
                                  textAlign: "center",
                                  justifyItems:"center",
                                  fontWeight: "bolder",
                                  marginBottom: 0,
                                  marginLeft:10,
                                  paddingTop:30
                                }}
                              >
                                {item.customer}
                              </Typography.Title>

                            </Row>
                          </div>
                        </div>
                      );
                    })}
                  </AliceCarousel>
                )}
                
               


              </Row>
            </Col>
            </Row>
        </Col>
               
            </Col>
        </Row>
  )
}

export default ContactBar2