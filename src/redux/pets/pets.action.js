import { SET_CURRENT_SELECTED_FILTER, SET_SELECTED_FILTER, UPDATE_LOGGED_IN_STATUS, USER_FILTERED_CHECKED, USER_SEARCHED_WORD } from "../actions";

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

export const currentSelectedFilter = (payload) => ({
    type: SET_CURRENT_SELECTED_FILTER,
    payload: payload
})

export const setSelectedFilter = (payload) => {
   console.log("setSelectedFilter payload:-",payload);
   return {
    type: SET_SELECTED_FILTER,
    payload: payload
   }
}





