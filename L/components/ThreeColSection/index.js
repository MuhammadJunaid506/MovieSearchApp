import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Row, Col, Typography, Image } from "antd";

const ThreeColSection = ({
  image1,
  image2,
  image3,
  titleStyle,
  title,
  title1,
  title2,
  title3,
  subtitle,
  textColor = "#6A6A6A",
  subtitleStyles,
  imageStyles,
  textStyle,
  text1,
  text2,
  text3,
  list,
  opposeColumns,
  buttons,
  background,
  titleColor,
  customTitle,
  multitext,
  listItemPadding,
  otherSections,
  colStyle
}) => {
  const [loadCount, setLoadCount] = useState(0);
  const { ref, inView } = useInView({
    threshold: 0,
  });
  useEffect(() => {
    setLoadCount(loadCount + 1);
  }, [inView]);

  return (
    <Row
      ref={ref}
      gutter={[15, 15]}
      style={{
        height: "auto",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        padding: "50px 10px",
        margin: 0,
        marginBottom: "50px",
        background: "white",
      }}
    >
      <Col xs={24} md={22}>
        <Row style={{ disply: "flex" }} gutter={20}>
     
          <Col
            xs={24}
            md={8}
            className={inView && loadCount < 3 ? "flip-in-horizontal" : ""}
          >
            <Row>
              <Col span={24} >
                <div style={{margin:'20px', padding:'30px', minHeight:'250px', display:'flex', justifyContent:'center',  flexDirection:'column',...colStyle
              // , border:'5px solid #101049'
              }}>
                {image1 && (<Image style={{...imageStyles,}}src={image1}/>)}
                {title1 && (
                  <Typography.Title
                    level={2}
                    style={{
                      color: titleColor ? titleColor : "#fe1f07",
                      fontSize: "16px",
                      fontWeight: 900,
                      marginBottom: 5,
                      ...titleStyle
                    }}
                  >
                    {title1}
                  </Typography.Title>
                )}

                <p
                  style={{
                    color: textColor,
                    fontSize: "14px",
                    fontWeight: "normal",
                    textAlign: "justify",
                    ...textStyle
                  }}
                >
                  {text1}
                </p>
                </div>
              </Col>
            </Row>
          </Col>
          <Col
            xs={24}
            md={8}
            className={inView && loadCount < 3 ? "flip-in-horizontal" : ""}
          >
            <Row>
              <Col span={24} >
                <div style={{margin:'20px', padding:'30px', minHeight:'250px', display:'flex', justifyContent:'center',  flexDirection:'column',...colStyle
              //, border:'5px solid #101049'
              }}>
                {image2 && (<Image style={{...imageStyles,}}src={image2}/>)}
                {title2 && (
                  <Typography.Title
                    level={2}
                    style={{
                      color: titleColor ? titleColor : "#fe1f07",
                      fontSize: "16px",
                      fontWeight: 900,
                      marginBottom: 5,
                      ...titleStyle,
                    }}
                  >
                    {title2}
                  </Typography.Title>
                )}

                <p
                  style={{
                    color: textColor,
                    fontSize: "14px",
                    fontWeight: "normal",
                    textAlign: "justify",
                    ...textStyle
                  }}
                >
                  {text2}
                </p>
                </div>
              </Col>
            </Row>
          </Col>
          <Col
            xs={24}
            md={8}
            className={inView && loadCount < 3 ? "flip-in-horizontal" : ""}
          >
            <Row>
              <Col span={24} >
                <div style={{margin:'20px', padding:'30px', minHeight:'250px', display:'flex', justifyContent:'center',  flexDirection:'column',...colStyle
                // , border:'5px solid #101049'
              }}>
              {image3 && (<Image style={{...imageStyles,}}src={image3}/>)}                
              {title3 && (
                  <Typography.Title
                    level={2}
                    style={{
                      color: titleColor ? titleColor : "#fe1f07",
                      fontSize: "16px",
                      fontWeight: 900,
                      marginBottom: 5,
                      ...titleStyle
                    }}
                  >
                    {title3}
                  </Typography.Title>
                )}

                <p
                  style={{
                    color: textColor,
                    fontSize: "14px",
                    fontWeight: "normal",
                    textAlign: "justify",
                    ...textStyle,
                  }}
                >
                  {text3}
                </p>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default ThreeColSection;
