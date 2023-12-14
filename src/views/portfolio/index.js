import React, { useEffect, useState, useContext } from "react";
import {
  Card,
  Row,
  Col,
  Button,
  Space,
  Table,
  Tag,
  Image,
  message,
  Modal,
  Typography,
  Pagination,
  Spin,
} from "antd";
import { useNavigate } from "react-router";
import { Get, Put, Delete } from "../../config/api";
import UserContext from "../../config/context/user/UserContext";
import { PORTFOLIO, UPLOADS_URL, CATEGORY } from "../../config/constants/api";
const { Meta } = Card;

const Portfolio = () => {
  const navigate = useNavigate();
  const { token, user } = useContext(UserContext);
  const [visible, setVisible] = useState(false);
  const [categories, setCategories] = useState([]);
  const [updateModalVisible, setUpdateModalVisible] = useState(false);
  const [currentItem, setCurrentItem] = useState({});
  const [loader,setLoader]=useState(false)
  const [portfolio, setPortfolio] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  useEffect(() => {
    getPortfolio(false,1);
    getCategories();
  }, []);



  const onChange = (pageNumber, pageSize) => {
    console.log("onChange Called", pageSize)
  setPage(pageNumber)
  setLimit(pageSize);
    getPortfolio(false,pageNumber,pageSize)
};




  const getPortfolio = async (reset = false,pageNummber,pageLimit) => {
    try {
      setLoader(true)
      Get(PORTFOLIO.get + `?page=${pageNummber}&limit=${pageLimit ? pageLimit :limit}`)
        .then((response) => {
          if (response.status) {
            setLoader(false)
            // if(page == 1 || reset){
            //   setPortfolio(response?.data); 
            // }else{
            //   setPortfolio({...response.data,docs:[...portfolio.docs,...response.data.docs]});
            // }

            setPortfolio(response?.data);
            setPage(response?.data?.page);
          } else {
            message.error(
              response.message ? response.message : "Something went wrong!"
            );
            setLoader(false)
          }
        })
        .catch((error) => {
          message.error(
            error.message ? error.message : "Something went wrong!"
          );
          setLoader(false)
        });
    } catch (error) {
      message.error(error.message ? error.message : "Something went wrong!");
      setLoader(false)
    }
  };

  const getCategories = () => {
    try {
      Get(CATEGORY.get).then((response) => {
        if (response.status) {
          setCategories(response.data);
        } else {
          message.error(
            response.message ? response.message : "Something went wrong!"
          );
        }
      });
    } catch (error) {
      message.error(error.message ? error.message : "Something went wrong!");
    }
  };

  const deletePortfolio = () => {
    try {
      Delete(`${PORTFOLIO.delete}/${currentItem._id}`, token).then(
        (response) => {
          if (response.status) {
            setVisible(false);
            setPage(1)
            getPortfolio(true);
          } else {
            message.error(
              response.message ? response.message : "Something went wrong!"
            );
          }
        }
      );
    } catch (error) {
      message.error(error.message ? error.message : "Something went wrong!");
    }
  };
  return (
    <>
      <div
        className="scrollHidden"
        style={{ maxHeight: "58vh", overflowY: "scroll", overflowX: "hidden" }}
      >
        <Row style={{ textAlign: "right" }}>
          <Col span={24}>
            <Button onClick={() => navigate("/portfolio/new")}>
              Add Portfolio
            </Button>
          </Col>
        </Row>

        {!loader &&

        <Row gutter={[24,24]} style={{ marginTop: 25 }}>
          <Image.PreviewGroup>
            {portfolio?.docs?.map((item, index) => (
              <Col span={6} key={index}>
                <Card
                  hoverable
                  style={{
                    width: 240,
                  }}
                  cover={
                    <Image
                      src={`${UPLOADS_URL}/uploads/${item.image}`}
                      style={{ objectFit: "cover" }}
                    />
                  }
                >
                  <Meta title={item.category?.name} />
                  <Space size="middle" style={{ marginTop: 10 }}>
                    <a
                      onClick={() => navigate(`/portfolio/update/${item._id}`)}
                    >
                      Edit
                    </a>
                    <a
                      onClick={() => {
                        setVisible(true);
                        setCurrentItem(item);
                      }}
                    >
                      Delete
                    </a>
                  </Space>
                </Card>
              </Col>
            ))}
          </Image.PreviewGroup>
        </Row>}

        {loader && <div style={{textAlign:'center',marginTop:20, minHeight:'58vh', display:'flex', justifyContent:'center', alignItems:'center'}}><Spin size="large" /></div>}
        <Modal
          title={"Warning!"}
          visible={visible}
          onOk={() => deletePortfolio()}
          onCancel={() => setVisible(false)}
          okText="Yes"
          cancelText="Cancel"
          okButtonProps={{
            style: {
              backgroundColor: "#f5222d",
              color: "white",
              borderColor: "#f5222d",
            },
          }}
        >
          <Typography.Text>
            Are you sure you want to delete this Portfolio Entry?
          </Typography.Text>
        </Modal>
      
      </div>
      <br/>
      <Pagination showSizeChanger   current={page} total={portfolio?.totalDocs} onChange={onChange}/>
    </>
  );
};
export default Portfolio;
