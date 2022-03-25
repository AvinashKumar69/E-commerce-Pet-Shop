import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { getUserFavorites } from '../firebase'
import PetCards from './PetCard'

function Favorites(props) {
    const { userId } = props
    console.log("Favorites COmponent:-", userId);
    const [favoritesData, setFavoritesData] = useState([])
    useEffect(() => {
        getUserFavorites(userId).then(data => setFavoritesData(data))
    }, [])
    return (
        <div>
            <h4>Favorites</h4>
            {favoritesData.map((favorite) => {
                <PetCards petCardData={favorite} />
            })}
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