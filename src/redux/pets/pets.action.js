import { UPDATE_LOGGED_IN_STATUS, USER_SEARCHED_WORD, USER_FILTERED_CHECKED } from "../actions";

export const updateLoggedInStatus = (payload) => ({
    type: UPDATE_LOGGED_IN_STATUS,
    payload: payload
})

export const userSearchedWord = (payload) => ({
    type: USER_SEARCHED_WORD,
    payload: payload
})

export const userFilteredChecked = (payload) => {
    console.log('payload logged:-', payload)
    return {
        type: USER_FILTERED_CHECKED,
        payload: payload
    }
}



