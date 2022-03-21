import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { connect } from "react-redux";
import FeaturesHomeCard from "../components/FeaturesHomeCard";
import PetCards from "../components/PetCard";
import PetsData from "../DataHelpers/PetsData.json";

// Responcibility-->
// 1. it will display the pet details (by doing map function on pet card).
// 2. it will get the Pets Data from the 'PetsData.json' 
// 3. it will have several components:--
// -Filter
// -Sort
// -PetCard
// -SearchBar
// -FeaturesHomeCard
// -Footer


const Home = (props) => {


    const [petsData, setPetsData] = useState(PetsData)


    useEffect(() => {
        if (props.userSearchedWord) {
            console.log("home Props earched changed Called:-", props.userSearchedWord);
            const searchedArray = PetsData.filter((pet) => {
                console.log("home Props earched changed Called:- filtering", pet.name.toLowerCase(), props.userSearchedWord.toLowerCase());
                if (pet.name.toLowerCase().includes(props.userSearchedWord.toLowerCase()))
                    return true
            })
            setPetsData(searchedArray)
        } else {
            setPetsData(PetsData)
        }
    }, [props.userSearchedWord])

    return (
        <>
            <div>
                <h1 style={{ textAlign: "center" }}>Our Products, Choose Your Companion Now!</h1>
            </div>
            <Container>
                <Row>
                    {
                        petsData.map((petCardData) => {
                            return (
                                <Col key={petCardData.id} className="mt-4">
                                    <PetCards petCardData={petCardData} />
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>
            <Container>
                <Col className="mt-4">
                    <FeaturesHomeCard />
                </Col>
            </Container>
        </>
    )
}

const mapStateToProps = (state) => {
    console.log("home state called:-", state);
    return {
        userSearchedWord: state.pets.searchedWord
    }
}

export default connect(mapStateToProps)(Home);