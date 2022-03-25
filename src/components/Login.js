import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { signInWithGoogle } from "../firebase";

const Login = (props) => {

    return (
        <>
            {
                !props.isLoggedIn ?
                    <Link
                        type="button"
                        onClick={signInWithGoogle}
                        to="/"
                    >Log In</Link>
                    :
                    <p>Hello User!</p>
            }
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.pets.isLoggedIn,
    }
}

export default connect(mapStateToProps)(Login);