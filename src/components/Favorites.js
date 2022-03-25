import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { connect } from 'react-redux'
import { getUserFavorites } from '../firebase'
import PetCards from './PetCard'

function Favorites(props) {
    const { userId } = props

    const [favoritesData, setFavoritesData] = useState([])


    useEffect(() => {
        getUserFavorites(userId).then(data => setFavoritesData(data))
    }, [])
    useEffect(()=>{
        console.log("Favorites COmponent:-", favoritesData);

    },[favoritesData])


    return (
        <div>
            <h2 className='text-center'>Favorites</h2>
            <Container>
            <Row>
            {favoritesData.map((favorite) => {
               return (
                   <Col key={favorite.id}>
                   <PetCards petCardData={favorite} />
                   </Col>
               ) 
            })}
            </Row>
            </Container>
        </div>
    )
}
const mapStateToProps = (store) => {
    console.log("store in PetProfileDetailsCard:-", store);
    return {
        userId: store.user.currentUser.uid
    }
}

export default connect(mapStateToProps)(Favorites); 