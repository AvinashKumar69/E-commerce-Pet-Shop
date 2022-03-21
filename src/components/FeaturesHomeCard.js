import React from "react";
import { Card, CardGroup } from "react-bootstrap";
import freeDelivery from "../assets/freeDelivery.webp"
import customerSupport from "../assets/customerSupport.jpg"
import easyPayment from "../assets/easyPayment1.jpg"

const FeaturesHomeCard = () => {

    return (
        <div>
            <div>
                <h1 style={{ textAlign: "center" }}>PETSY Advantages</h1>
            </div>
            <CardGroup>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={freeDelivery} />
                    <Card.Body style={{ textAlign: "center" }}>
                        <Card.Title>Free Delivery</Card.Title>
                        <Card.Text>
                            Now Get The SuperFast DoorStep Delivery!
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={easyPayment} />
                    <Card.Body style={{ textAlign: "center" }}>
                        <Card.Title>Cashfree Payments</Card.Title>
                        <Card.Text>
                            Easy Payments Available At Your Convenience!
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={customerSupport} />
                    <Card.Body style={{ textAlign: "center" }}>
                        <Card.Title>24/7 Customer Support</Card.Title>
                        <Card.Text>
                            We Are Always There For You!
                        </Card.Text>
                    </Card.Body>
                </Card>
            </CardGroup>
        </div>
    )
}

export default FeaturesHomeCard;