import React, { useState } from "react";
import { Button, Spinner } from "react-bootstrap";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { addUserFavorite } from "../firebase";

// Responcibility-->
// 1. this will display full details of a PetCards, i.e., it's name, breed, color, age, desciption, etc

// props --> petCardData


const PetProfileDetailsCard = (props) => {
    const { petCardData, userId } = props
    console.log("PetProfileDetailsCard:-", props);
    const [loading, setLoading] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)

    const addToFavorite = async () => {
        setLoading(true)
        try {
            const response = await addUserFavorite(userId, petCardData)
            setLoading(false)
            setIsSuccess(true)
        } catch (error) {
            setLoading(false)
        }

    }

    return (
        <div className="card border-0" style={{ width: "25rem" }}>
            <div className="card-body align-center">
                <h5 className="card-title">Hi Human! My Name is {petCardData.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{petCardData.description}</h6>
                <p className="card-text">Breed: {petCardData.breeds}</p>
                <p className="card-text">Age: {petCardData.age}</p>
                <p className="card-text">Species: {petCardData.species}</p>
                <p className="card-text">Gender: {petCardData.gender}</p>
                {!isSuccess ?
                    <Button disabled={loading} onClick={addToFavorite}>
                        {loading ?
                            <Spinner
                                as="span"
                                animation="grow"
                                size="sm"
                                role="status"
                                aria-hidden="true"
                            /> :
                            'Add To Favorate'
                        }
                    </Button> :
                    <p>Added to Favorite</p>
                }
                <Button to="/" className="card-link">Add To Cart</Button>
            </div>
        </div>
    )
}
const mapStateToProps = (store) => {
    console.log("store in PetProfileDetailsCard:-", store);
    return {
        userId: store.user.currentUser.uid
    }
}

export default connect(mapStateToProps)(PetProfileDetailsCard);