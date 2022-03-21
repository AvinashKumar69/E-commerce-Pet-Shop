import React from "react";
import { Col, Row } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import PetProfileDetailsCard from "../components/PetProfileDetailsCard";
import PetProfileImageCard from "../components/PetProfileImageCard";


// Responcibility-->
// --> whaen a user will click on 'Pet Profile' button on Home page then this
// PetProfile page will appear
// -->Components:
// 1. PetProfileImageCard
// 2. PetProfileDetailsCard

// props--> petCardData (using 'useLocation' function)


const PetProfile = () => {

    const { state } = useLocation()
    console.log("Pet Pofile data using useLocation:", state);
    const { petCardData } = state

    return (
        <Row>
            <Col>
                <PetProfileImageCard petCardData={petCardData} />
            </Col>
            <Col>
                <PetProfileDetailsCard petCardData={petCardData} />
            </Col>
        </Row>
    )
}

export default PetProfile;