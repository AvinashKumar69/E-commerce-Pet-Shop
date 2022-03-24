import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { connect } from "react-redux";
import { setSelectedFilter, userFilteredChecked } from "../redux/pets/pets.action";

const FilteredItem = (props) => {
    console.log('all Props called:-', props);
    const { value, handleFilterChange,category } = props

    const [isChecked, setIsChecked] = useState(false)

    const handleChange = (e) => {
        console.log(e.target.value);
        setIsChecked(!isChecked)
    }

    useEffect(() => {
        console.log('useeffect logged:-', value, isChecked);
        // props.dispatch(userFilteredChecked({
        //     name: value,
        //     isChecked: isChecked
        // }))
        // props.handleSetFilterSection({
        //     name: value,
        //     isSelected: isChecked
        // })
        props.dispatch(setSelectedFilter({
            category,value,isSelected: isChecked
        }))

    }, [isChecked])

    return (
        <div className="mb-3">
            <Form.Check
                type='checkbox'
                id={`default-${value}`}
                label={`${value}`}
                name={`${value}`}
                value={isChecked}
                onChange={handleChange}
            />
        </div>
    )
}

export default connect(null)(FilteredItem);