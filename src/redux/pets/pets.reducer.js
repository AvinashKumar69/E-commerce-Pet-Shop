import { UPDATE_LOGGED_IN_STATUS, USER_SEARCHED_WORD } from "../actions";


const INITIAL_STATE = {
    isLoggedIn: false,
    searchedWord: ""
}


const petsReducer = (state = INITIAL_STATE, actions) => {

    switch (actions.type) {

        case UPDATE_LOGGED_IN_STATUS: {
            return {
                ...state, isLoggedIn: actions.payload
            }
        }

        case USER_SEARCHED_WORD: {
            return {
                ...state, searchedWord: actions.payload
            }
        }

        default:
            return state
            break;
    }
}

export default petsReducer;

