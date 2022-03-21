import React from "react";

// Responcibility-->
// 1. this will display full details of a PetCards, i.e., it's name, breed, color, age, desciption, etc

// props --> petCardData


const PetProfileDetailsCard = (props) => {
    const { petCardData } = props

    return (
        <div style={{ justifyContent: 'center', textAlign: 'center' }}>
            <h3>Hi Human! My Name is {petCardData.name}</h3>
            <h3>{petCardData.description}</h3>
            <h3>Breed: {petCardData.breeds.primary}</h3>
            <h3>Age: {petCardData.age}</h3>
            <h3>I'm {petCardData.tags}</h3>
        </div>
    )
}

export default PetProfileDetailsCard;