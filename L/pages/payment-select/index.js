import { useState, useEffect } from "react";
import { Col, Row, Alert, message } from "antd";
import { useRouter } from "next/router"
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { BiCheck } from "react-icons/bi"
import CustomLayout from "../../components/CustomLayout";
import CustomBanner from "../../components/CustomBanner";
// import Payment from "../../components/Payment"
import { Get } from "../../config/api";
import { PLANS } from "../../config/constants/api";
import CheckoutForm from '../../components/Payment/CheckoutForm';



const stripePromise = loadStripe('pk_live_HixgeIfBSF0odx2pGI6NCHyi00porj0RZ6');

const PaymentSelect = () => {
    const router = useRouter()
    const { plan } = router.query
    const [planData, setPlanData] = useState({})
    

    useEffect(() => {
        getPlan()
    }, [])

    const getPlan = () => {
        try {
            Get(`${PLANS.get}/${plan}`)
                .then((response) => {
                    if (response.status) {
                        setPlanData(response.data)
                    }
                    else {
                        message.error(response.message ? response.message : "Something went wrong")
                    }
                })
                .catch((error) => {
                    message.error(error.message ? error.message : "Something went wrong")
                })
        } catch (error) {
            message.error(error.message ? error.message : "Something went wrong")
        }
    }
    return (
        <Elements stripe={stripePromise}>
            <CustomLayout head={{ title: "Custom Logo Design - Professional Web Design | Logo Magicians", description: "Logo Magicians is a leading logo and website design agency based in USA & UK. Our logo designers and web designers build brands and websites for established businesses as well as startups all over the world." }}>
                <CustomBanner
                    onlyText={true}
                    bgColor={'#341a61'}
                    height={100}
                    breadcrumbs={[
                        { title: "Package Selected" },
                        { title: "Payment" },
                        { title: "Order Complete", dim: true }
                    ]}
                    colStyle={{ textAlign: "center", maxWidth: 765, position: "absolute",backgroundColor:"#341a61" }}
                />
                <Row style={{ padding: 20, justifyContent: "center", margin: "30px 0 30px 0", backgroundColor:"#341a61" }} gutter={[0, 18]}>
                    <Col span={23}>
                        <Alert
                            className={"checkout-alert"}
                            icon={<BiCheck style={{ fontSize: 25, color: "#fff" }} />}
                            message={`"${planData?.name}" has been added to your cart.`}
                            showIcon
                        />
                    </Col>
                </Row>
                <CheckoutForm planData={planData} />
            </CustomLayout>
        </Elements>
    )
}

export default PaymentSelect