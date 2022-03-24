import React from "react";
import { Form } from "react-bootstrap";
import { connect } from "react-redux";
import { currentSelectedFilter } from "../redux/pets/pets.action";
import FilteredItem from "./FilterItem";

const filters = {
    breed: ['Spot', 'Saurabh', 'Tom', 'Haray', 'Avinash'],
    color: ['red', 'blue', 'green']
}

const Filter = (props) => {

    let filterSection = {
        name: props.name,
        selectedFilter: []
    }

    const handleSetFilterSection = (filterItem) => {
        if (filterItem.isSelected && !filterSection.selectedFilter.includes(filterItem.name)) {
            filterSection.selectedFilter.push(filterItem.name)
        }
        if (!filterItem.isSelected && filterSection.selectedFilter.includes(filterItem.name)) {
            filterSection.selectedFilter = filterSection.selectedFilter.filter(x => x != filterItem.name)
        }
        console.log("Filter Secion action calling:-", filterSection);
        props.dispatch(currentSelectedFilter(filterSection))
    }


    return (
        <div>
            <Form>
                {
                    props.value.map((val) => {
                        return (
                            <FilteredItem
                                value={val}
                                // handleFilterChange={handleFilterChange}
                                key={`default-${val}`}
                                category = {props.name}
                            />
                        )
                    })
                }
            </Form>
        </div>
    )
}

export default connect(null)(Filter);