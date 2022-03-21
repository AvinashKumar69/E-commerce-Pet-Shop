import React from "react";

// Responcibility-->
// 1. this will display full image of the pet after user clicks on the pet profile button in the Home page

// props --> petCardData


const PetProfileImageCard = (props) => {
    const { petCardData } = props

    return (
        <div>
            <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/golden-retriever-royalty-free-image-506756303-1560962726.jpg?crop=0.672xw:1.00xh;0.166xw,0&resize=640:*" alt="pet pofile" />
        </div>
    )
}

export default PetProfileImageCard;