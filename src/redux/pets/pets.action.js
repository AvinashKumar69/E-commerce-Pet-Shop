import { TOGGLE, UPDATE_MY_NAME } from "../actions";

// export const getPets = () => ({
//     type: GET_PETS
// })

export const toggle = () => ({
    type: TOGGLE
})

export const updateMyName = (payload) => ({
    type: UPDATE_MY_NAME,
    payload: payload
})







