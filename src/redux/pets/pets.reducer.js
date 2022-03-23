import { UPDATE_LOGGED_IN_STATUS, USER_SEARCHED_WORD, USER_FILTERED_CHECKED } from "../actions";


const INITIAL_STATE = {
    isLoggedIn: false,
    searchedWord: "",
    filteredChecked: []
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

        case USER_FILTERED_CHECKED: {
            return {
                filteredChecked: actions.payload
            }
        }

        default:
            return state
            break;
    }
}

export default petsReducer;

