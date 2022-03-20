import { Button } from "@mui/material";
import React from "react";
import { connect } from "react-redux";
import { updateMyName } from '../redux/pets/pets.action';

const dummyUpdateMyName = (props) => {
    console.log("dummyUpdateMyName props:-", props);

    return (
        <>
            <h1>Name: {props.name}</h1>
            <Button onClick={() => props.dispatch(updateMyName("Avinash"))}>Update Name</Button>
        </>
    )
}

const mapStateToProps = (state) => {
    console.log("state:-", state);
    return {
        name: state.pets.myName
    }
}


export default connect(mapStateToProps)(dummyUpdateMyName);