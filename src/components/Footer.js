import React from "react";
import { Card } from "react-bootstrap";

const Footer = () => {

    return (
        <>
            <Card.Footer sticky="bottom">
                <small className="text-muted" style={{ textAlign: 'center' }}>
                    <h6>Petsy - A pet e-commerce platform.</h6>
                    <h6>“Buying commodities is one thing, buying real life cuties is another.”</h6>
                </small>
            </Card.Footer>
        </>
    )
}

export default Footer;