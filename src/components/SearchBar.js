import React, { useState } from "react";
import { Button, Form, FormControl } from "react-bootstrap";
import { connect } from "react-redux";
import { userSearchedWord } from "../redux/pets/pets.action";


const SearchBar = (props) => {
    const [searchedInput, setSearchedInput] = useState("")

    function handleChangeSearchField(e) {
        setSearchedInput(e.target.value)
        props.dispatch(userSearchedWord(e.target.value))
    }

    return (
        <Form className="d-flex">
            <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                value={searchedInput}
                onChange={handleChangeSearchField}
            />
            <Button variant="outline-success">Search</Button>
        </Form>
    )
}

export default connect(null)(SearchBar);
