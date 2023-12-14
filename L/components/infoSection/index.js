import { Row, Col, Descriptions } from "antd";
import { BsSkipStartCircle } from "react-icons/bs";
import {FiPhoneCall} from "react-icons/fi"
import {HiOutlineChatAlt2} from "react-icons/hi"
import {MdOutlineMarkEmailUnread} from "react-icons/md"

const InfoSection = ({title,description}) => {
  return (
    <Row style={{justifyContent:'center', alignItems:'center',background:"black", overflowX: "hidden"}}>
    <Col xs={24} lg={11}> 
    <div className="tekoFont" style={{width:'100%', padding:'30px 50px', borderRadius:'10px', display:'flex' , justifyContent:"center" , flexDirection:'column' , alignItems:'flex-end'}}>
     <div style={{textAlign:'center' , padding:'0px 40px'}}>
     <h3 style={{color:"white",fontSize:"20px", marginBottom:0 , color:"#fe1f07"}}>Call us for support to this number</h3>
     <p style={{color:"white", fontSize:'30px' , fontWeight:'normal' ,marginBottom:0}}>+92345678910</p>
     </div>
    </div>
    </Col>
    <Col xs={24} lg={13} style={{transform: 'skew(20deg)'}}> 
    <div className="tekoFont slantedDiv" style={{width:'80vw', padding:'30px 50px', background:"#fe1f07" , borderTopLeftRadius:'15px', borderBottomLeftRadius:"15px", marginBottomLeft:"10px" , display:'flex' , justifyContent:"center" , flexDirection:'column' , alignItems:'flex-start', TextDecoration:"none"}}>
     <h3 style={{color:"white",fontSize:"30px", marginBottom:0,transform: 'skew(-20deg)'}}>{title}</h3>
     <p style={{color:"white", fontSize:'20px' , fontWeight:'normal' ,marginBottom:0,transform: 'skew(-20deg)'}}>{description}</p>
 
    </div>
    </Col>
  </Row>
  );
};

export default InfoSection;
