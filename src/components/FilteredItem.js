import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { connect } from "react-redux";
import { userFilteredChecked } from "../redux/pets/pets.action";

const FilteredItem = (props) => {
    console.log('all Props called:-', props);
    const { type, handleFilterChange } = props

    const [isChecked, setIsChecked] = useState(false)

    const handleChange = (e) => {
        console.log(e.target.value);
        setIsChecked(!isChecked)
    }

    useEffect(() => {
        console.log('useeffect logged:-', type, isChecked);
        props.dispatch(userFilteredChecked({
            name: type,
            isChecked: isChecked
        }))
    }, [isChecked])

    return (
        <div className="mb-3">
            <Form.Check
                type='checkbox'
                id={`default-${type}`}
                label={`${type}`}
                name={`${type}`}
                value={isChecked}
                onChange={handleChange}
            />
        </div>
    )
}

export default connect(null)(FilteredItem);