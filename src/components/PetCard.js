import React from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


const PetCards = (props) => {
    const { petCardData } = props

    const navigate = useNavigate()

    function handlePetProfileClick() {
        let petID = petCardData.id
        navigate(`/petprofile/${petID}`, { state: { petCardData } })
    }

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/golden-retriever-royalty-free-image-506756303-1560962726.jpg?crop=0.672xw:1.00xh;0.166xw,0&resize=640:*" />
            <Card.Body style={{ textAlign: "center" }}>
                <Card.Title>{petCardData.name}</Card.Title>
                <Card.Text>
                    {petCardData.description}
                </Card.Text>
                <Button variant="primary" onClick={handlePetProfileClick}>Pet Profile</Button>
            </Card.Body>
        </Card>
    )
}

export default PetCards;
