import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { connect } from "react-redux";
import { userFilteredChecked } from "../redux/pets/pets.action";
import FilteredItem from "./FilteredItem";

const breedArray = ['Spot', 'Saurabh', 'Tom', 'Haray', 'Mayank']

const Filter = (props) => {

    const [filterChecked, setFilterChecked] = useState([])

    // function handleFilterChange(e) {
    //     const itemsChecked = e.target.value
    //     console.log('itemsChecked logged;-', itemsChecked,e.target);
    //     // setFilterChecked([
    //     //     ...filterChecked, itemsChecked
    //     // ])
    //     // console.log('filterChecked logged;-', filterChecked);
    // }

    // useEffect(() => {
    //     props.dispatch(userFilteredChecked(filterChecked))
    // }, [filterChecked])

    return (
        <div>
            <Form>
                {
                    breedArray.map((type) => {
                        return (
                            <FilteredItem
                                type={type}
                                // handleFilterChange={handleFilterChange}
                                key={`default-${type}`}
                            />
                        )
                    })
                }
            </Form>
        </div>
    )
}

export default connect(null)(Filter);