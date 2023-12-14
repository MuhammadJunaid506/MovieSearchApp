import React from 'react'
import PortfolioComponent from '../../components/Portfolio';
import TabsComponent from '../../components/TabsWhite';
import CustomBanner from '../../components/CustomBanner';
import ClientLayout from '../../components/ClientLayout';


const Portfolio = () => {
    return (
        <div>
           <ClientLayout head={{ title: "Portfolio for Creative Logo Designs, Mobile Apps & Animation", description: "Do you want to have a creative portfolio? Get in touch with us to maintain a portfolio of famous logos, brands, mobile apps, e-commerce websites and animation." }}>
           <CustomBanner
            height={700}
            title={<>Crafted with Passion,<br/><span style={{color:'#fe1f07'}}> Built with Inspiration </span> </>}
            titleLevel={1}
            text={"We have already turned plenty of ideas into executable action by providing our cretivity and expertise of our vetran engineers. Let's explore the top selected products from diverse industries we have designed and developed in the last couple of years."}
            titleStyles={{
              marginTop: "5px",
              marginBottom: "10px",
              fontWeight: 900,
              fontSize: "55px",
              color: "black",
            }}
            image={"/images/App_design_03.png"}
            bg={"/images/Background.png"}
            imageDimentions={[500, 500]}
            imageStyles={{ width: "450px" }}
           
          />
      <TabsComponent
            //     title="We Serve Almost All Industries"
            //     subtitle={"See Our Complete Archive Below And Filter By Project Type."}
            //    bg="white"
               bg="white"
               title={
                 <>
                   Our Creative{" "}
                   <span style={{ color: "#fe1f07" }}> Portfolio </span>
                 </>
               }
               subtitle={
                 "offering a range of creative services to help you grow your business."
               }
                tabs={[
                    {
                        name: "All",
                        key: "1",
                        // content: <PortfolioComponent isWide={false} category="PortfolioLogo" />
                        content: <PortfolioComponent category="All" isWide={true} fullWidth />,
                    },
                    {
                        name: "Logos",
                        key: "2",
                        // content: <PortfolioComponent isWide={false} category="PortfolioBranding" />
                        content: <PortfolioComponent category="Logo" isWide={true} fullWidth />,
                    },
                    {
                        name: "Mobile App",
                        key: "3",
                        // content: <PortfolioComponent isWide={false} category="Apps" />
                        content: <PortfolioComponent category="Apps" isWide={true} fullWidth />,
                    },
                    {
                        name: "Web & Ecommerce",
                        key: "4",
                        // content: <PortfolioComponent isWide={false} category="PortfolioWeb" />
                        content: <PortfolioComponent category="Webs" isWide={true} fullWidth />,
                    },                  
                ]}
            />
            </ClientLayout>
    </div>
  )
}


export default Portfolio