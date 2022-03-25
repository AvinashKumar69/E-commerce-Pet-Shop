import React, { useState } from "react";
import { connect } from "react-redux";
import { userSearchedWord } from "../redux/pets/pets.action";


const SearchBar = (props) => {
    const [searchedInput, setSearchedInput] = useState("")

    function handleChangeSearchField(e) {
        setSearchedInput(e.target.value)
        props.dispatch(userSearchedWord(e.target.value))
    }

    return (
        <form className="d-flex justify-content-center">
            <input  className="form-control me-2 search-input"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={searchedInput}
                onChange={handleChangeSearchField}
            />
            {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
        </form>
    )
}

export default connect(null)(SearchBar);
