import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { connect } from "react-redux";
import FeaturesHomeCard from "../components/FeaturesHomeCard";
import Filter from "../components/Filter";
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

const isFilterApplied = (filters) => {
    return Object.keys(filters).some((filterKey) => filters[filterKey].length > 0)
}

const Home = (props) => {
    const [petsData, setPetsData] = useState(PetsData)

    console.log("Props in Home:-", props);
    const { selectedFilters, userSearchedWord } = props

    // useEffect(() => {
    //     if (userSearchedWord) {
    //         console.log("home Props searched changed Called:-", userSearchedWord);
    //         const searchedArray = PetsData.filter((pet) => {
    //             console.log("home Props earched changed Called:- filtering", pet.name.toLowerCase(), userSearchedWord.toLowerCase());
    //             if (pet.name.toLowerCase().includes(userSearchedWord.toLowerCase()))
    //                 return true
    //         })
    //         setPetsData(searchedArray)
    //     } 
    //     else if(!isFilterApplied(selectedFilters)) {
    //         setPetsData(PetsData)
    //     }
    // }, [userSearchedWord])

    const filterPets = (name, value, data) => {
        console.log("filter present:-", name, value);
        return data.filter((pet) => {
            if (value.includes(pet[name])) return true
        })
    }

    useEffect(() => {
        let data = [...PetsData]
        if (userSearchedWord) {
            console.log("home Props searched changed Called:-", userSearchedWord);
            const searchedArray = PetsData.filter((pet) => {
                console.log("home Props earched changed Called:- filtering", pet.name.toLowerCase(), userSearchedWord.toLowerCase());
                if (pet.name.toLowerCase().includes(userSearchedWord.toLowerCase()))
                    return true
            })
            data = searchedArray
        }
        console.log("selectedFilters changed:-", isFilterApplied(selectedFilters));
        if (isFilterApplied(selectedFilters)) {
            Object.keys(selectedFilters).map((category) => {
                if (selectedFilters[category].length > 0) {
                    data = filterPets(category, selectedFilters[category], data)
                }
            })
        }
        console.log("Filtered data:-", data);
        setPetsData(data)
        // call  function which will retun filtered data

    }, [selectedFilters, userSearchedWord])

    return (
        <>
            <Row>
                <Col md='2' className="filter-container">
                    <Filter />
                </Col>
                <Col md='10'>
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
                </Col>
            </Row>
            <Container>
                <Col className="mt-4">
                    <FeaturesHomeCard />
                </Col>
            </Container>


            {/* <div>
                <div md='2' className="filter-container">
                    <Filter />
                </div>
                <div>
                    <div>
                        <h1 style={{ textAlign: "center" }}>Our Products, Choose Your Companion Now!</h1>
                    </div>
                    <div>
                        <div>
                            {
                                petsData.map((petCardData) => {
                                    return (
                                        <div key={petCardData.id} className="mt-4">
                                            <PetCards petCardData={petCardData} />
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
            <Container>
                <Col className="mt-4">
                    <FeaturesHomeCard />
                </Col>
            </Container> */}
        </>
    )
}

const mapStateToProps = (state) => {
    console.log("home state called:-", state);
    return {
        userSearchedWord: state.pets.searchedWord,
        filteredChecked: state.pets.filteredChecked,
        currentSelectedFilter: state.pets.currentSelectedFilter,
        selectedFilters: state.pets.selectedFilters,
    }
}

export default connect(mapStateToProps)(Home);