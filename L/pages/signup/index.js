import React from 'react'
import PortfolioComponent from '../../components/Portfolio';
import TabsComponent from '../../components/TabsWhite';
import CustomBanner from '../../components/CustomBanner';
import AssuranceGrid from '../../components/AssuranceGrid2';
import AssuranceGrid2 from '../../components/AssuranceGrid2'
import Reviews from '../../components/Reviews';
import ContactBar2 from '../../components/ContactBar2';

const Signup = ({
  category="Review",
}) => {
  return (
    <div>
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
                        name: "Logo",
                        key: "logo",
                        // content: <PortfolioComponent isWide={false} category="PortfolioLogo" />
                        content: <PortfolioComponent category="Logo" fullWidth />,
                    },
                    {
                        name: "Branding",
                        key: "branding",
                        // content: <PortfolioComponent isWide={false} category="PortfolioBranding" />
                        ontent: <PortfolioComponent category="PortfolioBranding" fullWidth />,
                    },
                    {
                        name: "Web & Ecommerce",
                        key: "web&ecommerce",
                        // content: <PortfolioComponent isWide={false} category="PortfolioWeb" />
                        ontent: <PortfolioComponent category="PortfolioWeb" fullWidth />,
                    },                  
                    {
                        name: "Mobile App",
                        key: "Apps",
                        // content: <PortfolioComponent isWide={false} category="Apps" />
                        ontent: <PortfolioComponent category="Apps" fullWidth />,
                    },
                    {
                        name: "Animation",
                        key: "animation",
                        // content: <PortfolioComponent isWide={false} category="Animation_Cat" />
                        ontent: <PortfolioComponent category="Animation_Cat" fullWidth />,
                    },
                  
                ]}
            />
            <AssuranceGrid2 title={"GET IN TOUCH" } subtitle={"GET IN TOUCH"}/>
      <ContactBar2/>
      <Reviews/>
      
            
    </div>
  )
}

export default Signup

