import { useState, useEffect } from "react";
import { Col, Row, Typography,Pagination,Spin  } from "antd";
import moment from "moment"
import { BsChatText } from "react-icons/bs";
import { useRouter } from 'next/router'

import ClientLayout from '../../components/ClientLayout';
import MainButton from "../../components/MainButton";
import CustomBanner from "../../components/CustomBanner";
import { POSTS, UPLOADS_URL } from "../../config/constants/api";
import { Get } from "../../config/api"
import ReactHtmlParser from "react-html-parser";

//react-paginate imports
import ReactPaginate from "react-paginate";



const Blog = () => {
  const router = useRouter();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [paginationConfig, setPaginationConfig] = useState({
    pageNumber: 1,
    totalDocs: 0,
    totalPages: 0,
  });

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = (pageNumber) => {
    setLoading(true)
    try {
      Get(
        `${POSTS.get}?page=${
            pageNumber ? pageNumber.toString() : "1"
        }`
      )
        .then((response) => {
          if (response.status) {       
                setPosts(response?.data?.docs);
              setPaginationConfig({
                pageNumber: response?.data?.page,
                totalDocs: response?.data?.totalDocs,
                totalPages: response?.data?.totalPages,
              });
              setLoading(false)
          } else {
            console.log(
              response.message ? response.message : "Something went wrong"
            );
            setLoading(false)
          }
        })
        .catch((error) => {
          console.log(error.message ? error.message : "Something went wrong");
          setLoading(false)
        });
    } catch (error) {
      console.log(error.message ? error.message : "Something went wrong");
      setLoading(false)
    }
  };

  const handlePageChange = (e) => {
    getPosts(e);
  };

  return (
    <ClientLayout
      head={{
        title: "Trending Topics | Blogs | Logo Magician",
        description:
          "Do you want to read more about logo design, mobile app development, website design, technology, and branding? Here you can find the latest topics that give you an insight into trending gadgets, designs, techniques, etc. Note down the tips for your next big successful project!",
      }}
    >
      <CustomBanner
        height={350}
        title={"Blog"}
        titleLevel={1}
        onlyText={true}
        titleStyles={{
          marginTop: "5px",
          marginBottom: "10px",
          fontWeight: 900,
          fontSize: "40px",
          color: "#fe1f07",
        }}
        image={"/images/about_us_03.png"}
        bg={"/images/Background.png"}
        imageDimentions={[500, 500]}
        imageStyles={{ width: "400px"  }}
      />



      <div style={{ padding: "40px" }}>
      {loading ? (
        
        <div style={{ textAlign: "center", padding: "50px" }}>
           <Spin tip="Loading..." style={{color:'#fe1f07'}}/>
        </div>
        ) : ( <Row style={{ justifyContent: "center" }}>
          <Col xs={24} md={22}>
            <Row style={{ justifyContent: "center" }} gutter={30}>
              {posts?.map((item, index) => {
                let content = ReactHtmlParser(item.content?.substring(0, 100));
                return (
                  <Col
                    key={index}
                    xs={22}
                    md={8}
                    className="blog-item"
                    style={{ padding: "20px" }}
                  >
                    <div style={{ border: "1px solid #dadada" }}>
                      <div
                        className="blog-image"
                        style={{
                          background: item.image
                            ? `url(${UPLOADS_URL}/${item.image})`
                            : "url(/images/default.jpg)",
                          backgroundPosition: "center",
                          backgroundSize: "cover",
                          height: 160,
                        }}
                      ></div>
                      <div style={{ padding: 10, height:'180px' }}>
                        <Typography.Title
                          style={{
                            fontSize: 14,
                            marginBottom: 0,
                            fontWeight: "bold",
                            textAlign: "left",
                            color: "#fe1f07",
                          }}
                          level={3}
                        >
                          {item.title.substring(0, 80)}
                          {item.title.length > 50 ? "..." : ""}
                        </Typography.Title>
                        <div style={{ display: "flex", marginTop: "5px" }}>
                          <Typography.Text
                            style={{
                              color: "#061a79",
                              fontSize: 12,
                              fontWeight: 600,
                            }}
                          >
                            {moment(item.postDate).format("DD, MMMM YYYY")}
                          </Typography.Text>
                          &nbsp;
                          <Typography.Text
                            style={{
                              color: "#061a79",
                              fontSize: 12,
                              fontWeight: 600,
                            }}
                          >
                            {" "}
                            By{" "}
                            <span
                              style={{ fontWeight: "bolder", color: "#fe1f07" }}
                            >
                              logomagicians
                            </span>
                          </Typography.Text>
                        </div>
                        <p
                          style={{
                            fontSize: 14,
                            marginTop: 10,
                            marginBottom: 0,
                            fontWeight: 100,
                            textAlign: "left",
                            color: "gray",
                          }}
                        >
                          {content}
                        </p>
                      </div>
                      <hr
                        style={{ borderTop: "1px solid #dadada", margin: 0 }}
                      />
                      <div
                        style={{
                          display: "flex",
                          padding: "10px",
                          justifyContent: "space-between",
                        }}
                      >
                        <div
                          style={{
                            padding: "5px 10px",
                            borderRadius: "20px",
                            border: "1px solid #dadada",
                            fontSize: "14px",
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          {" "}
                          <BsChatText />
                          <Typography.Text
                            style={{
                              color: "#061a79",
                              fontSize: 12,
                              marginbottom: 5,
                            }}
                          >
                            {" "}
                            &nbsp;{" "}
                            {item?.comments.length > 0
                              ? item?.comments[0].count
                              : 0}
                          </Typography.Text>
                        </div>

                        <MainButton
                          onClick={() => router.push(`/blog/${item.slug}`)}
                          varient={"outline"}
                          className="responsive-gap"
                          style={{
                            marginTop: 0,
                            fontSize: 14,
                            padding: "2px 10px",
                            height: "auto",
                            fontWeight: 400,
                            borderRadius: "20px",
                            borderWidth: "1px",
                            color: "#fe1f07",
                            borderColor: "#fe1f07",
                          }}
                        >
                          Read More
                        </MainButton>
                      </div>
                    </div>
                  </Col>
                );
              })}
            </Row>
          </Col>
        </Row>
        )}
        {paginationConfig.totalDocs > 1 && <Row
          style={{ justifyContent: "center", marginTop: 20 }}
          gutter={[16, 24]}
        >
          <Col span={20} style={{ textAlign: "center" }}>
            {/* <ReactPaginate
              breakLabel="..."
              nextLabel=">"
              pageRangeDisplayed={4}
              marginPagesDisplayed={4} //handle Pa
              onPageChange={handlePageChange}
              pageCount={paginationConfig?.totalPages}
              forcePage={paginationConfig?.pageNumber - 1}
              previousLabel="<"
              renderOnZeroPageCount={null}
              pageClassName="page-item" //m
              pageLinkClassName="page-link"
              previousClassName="page-item"
              previousLinkClassName="page-link"
              nextClassName="page-item"
              nextLinkClassName="page-link"
              breakClassName="page-item"
              breakLinkClassName="page-link"
              containerClassName="paginationContainer"
              activeClassName="active"
            /> */}
            <Pagination current={paginationConfig.pageNumber} showSizeChanger={false} onChange={handlePageChange} total={paginationConfig?.totalDocs} />
          </Col>
        </Row>}
      </div>
        
    </ClientLayout>
  );
}

export default Blog