import React from 'react'
import { NavDropdown } from 'react-bootstrap'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import ProfileIcon from '../assets/profile-icon.png'

function ProfileMenu(props) {
    return (
        <NavDropdown
            title={
                // <div className="pull-left">
                <img width={'10%'} className="thumbnail-image"
                    src={ProfileIcon}
                    alt="user pic"
                />
            }
            id="nav-dropdown">
            <NavDropdown.Item eventKey="4.1">
                <Link to="/user/favorite">Your Favorites</Link>
            </NavDropdown.Item>
            <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
        </NavDropdown>
    )
}

const mapStateToProps = (store) => {
    return {
        user: store.user.user
    }
}

export default connect(mapStateToProps)(ProfileMenu)


