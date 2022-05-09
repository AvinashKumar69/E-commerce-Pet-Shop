import { UPDATE_LOGGED_IN_STATUS, USER_SEARCHED_WORD, USER_FILTERED_CHECKED, SET_CURRENT_SELECTED_FILTER, SET_SELECTED_FILTER, SET_CURRENT_USER } from "../actions";


const INITIAL_STATE = { 
    currentUser: {}
}



const userReducer = (state = INITIAL_STATE, actions) => {

    switch (actions.type) {

        case SET_CURRENT_USER: {
            return {
                ...state, currentUser: actions.payload
            }
        }


        default:
            return state
            break;
    }
}

export default userReducer;

