import { TOGGLE, UPDATE_MY_NAME } from "../actions";


const INITIAL_STATE = {
    isToggle: false,
    myName: 'Mayank'
}


const petsReducer = (state = INITIAL_STATE, actions) => {

    switch (actions.type) {
        case TOGGLE: {
            // return new state
            return {
                ...state,
                isToggle: !state.isToggle
            }
            break;
        }

        case UPDATE_MY_NAME: {
            return {
                ...state, myName: actions.payload

            }
        }
        default:
            return state
            break;
    }
}




export default petsReducer;

