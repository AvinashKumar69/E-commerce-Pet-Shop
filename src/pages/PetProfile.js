import React from "react";
import { Button } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import PetProfileBottomCard from "../components/PetProfileBottomCard";
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
        <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div className="mt-4 mb-4 mx-4 my-4">
                    <PetProfileImageCard petCardData={petCardData} />
                </div>
                <div className="mt-4 mb-4 mx-4 my-4" >
                    <div className="mt-1 mb-4 mx-4 my-4">
                        <PetProfileDetailsCard petCardData={petCardData} />
                    </div>
                </div>
            </div>
            {/* <div>
                <PetProfileBottomCard />
            </div> */}
        </div>
    )
}

export default PetProfile;