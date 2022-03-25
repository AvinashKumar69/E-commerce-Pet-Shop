import React from "react";
import petProfileImage from "../assets/petProfileImage1.jpg";

// Responcibility-->
// 1. this will display full image of the pet after user clicks on the pet profile button in the Home page

// props --> petCardData


const PetProfileImageCard = (props) => {
    const { petCardData } = props
    console.log("petCardData", petCardData);

    return (
        <div className="card" style={{ width: "25rem" }}>
            <img src={petProfileImage} className="card-img-top" alt="..." />
            <div className="card-body">
                <p className="card-text text-muted">{petCardData.tags}</p>
            </div>
        </div>
    )
}

export default PetProfileImageCard;