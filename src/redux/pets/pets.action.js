import { UPDATE_LOGGED_IN_STATUS, USER_SEARCHED_WORD } from "../actions";

export const updateLoggedInStatus = (payload) => ({
    type: UPDATE_LOGGED_IN_STATUS,
    payload: payload
})

export const userSearchedWord = (payload) => ({
    type: USER_SEARCHED_WORD,
    payload: payload
})





