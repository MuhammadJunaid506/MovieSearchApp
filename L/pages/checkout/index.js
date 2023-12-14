import { useState, useEffect } from "react";
import { Col, Row, Alert, message } from "antd";
import { useRouter } from "next/router"
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { BiCheck } from "react-icons/bi"
import ClientLayout from '../../components/ClientLayout';
import CustomBanner from "../../components/CustomBanner";
// import Payment from "../../components/Payment"
import { Get } from "../../config/api";
import { PLANS } from "../../config/constants/api";
import CheckoutForm from '../../components/Payment/CheckoutForm';



const stripePromise = loadStripe('pk_live_HixgeIfBSF0odx2pGI6NCHyi00porj0RZ6');

const Checkout = () => {
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
            <ClientLayout head={{ title: "Checkout - LogoMagicians", description: "" }}>
                <CustomBanner
                    onlyText={true}
                    bg={'#000'}
                    height={60}
                    breadcrumbs={[
                        { title: "Package Selected" },
                        { title: "Payment" },
                        { title: "Order Complete", dim: true }
                    ]}
                    colStyle={{ textAlign: "center", maxWidth: 765, position: "absolute" }}
                />
                <Row style={{ padding: 20, justifyContent: "center", margin: "30px 0 30px 0" }} gutter={[0, 18]}>
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
            </ClientLayout>
        </Elements>
    )
}

export default Checkout