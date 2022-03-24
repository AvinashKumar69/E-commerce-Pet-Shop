import React from "react";
import { connect } from "react-redux";
import FilterSection from "./FilterSection";

const filters = {
    breeds: ['avinash1', 'avinash2', 'avinash3', 'avinash4'],
    colors: ['red', 'blue', 'green']
}

const Filter = () => {

    return (
        <div>

            {
                Object.keys(filters).map((filterkey) => {
                    return (
                        <div key={filterkey}>
                            <h4>{filterkey}</h4>
                            <FilterSection
                                name={filterkey}
                                value={filters[filterkey]}
                            />
                        </div>
                    )
                })
            }

        </div>
    )
}

export default connect(null)(Filter);