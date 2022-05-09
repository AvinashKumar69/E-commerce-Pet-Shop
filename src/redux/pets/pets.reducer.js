import { UPDATE_LOGGED_IN_STATUS, USER_SEARCHED_WORD, USER_FILTERED_CHECKED, SET_CURRENT_SELECTED_FILTER, SET_SELECTED_FILTER } from "../actions";


const INITIAL_STATE = { 
    isLoggedIn: false,
    searchedWord: "",
    selectedFilters: {
        colors: [],
        breeds: []
    },
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

        case SET_CURRENT_SELECTED_FILTER: {
            return {
                ...state, currentSelectedFilter: actions.payload
            }
        }

        case SET_SELECTED_FILTER: {
            let newSelectedFilterArr = [...state.selectedFilters[actions.payload.category]]
            if(newSelectedFilterArr.includes(actions.payload.value) ){
                newSelectedFilterArr.splice(newSelectedFilterArr.indexOf(actions.payload.value),1)
            }else if(actions.payload.isSelected){
                newSelectedFilterArr.push(actions.payload.value)
            }
            
            return {
                ...state, selectedFilters: {
                    ...state.selectedFilters,
                    [actions.payload.category]: newSelectedFilterArr
                }
            }
        }

        case USER_FILTERED_CHECKED: {
            let index = state.filteredChecked.findIndex((filterCheckedItem) => {
                if (filterCheckedItem.name === actions.payload.name) {
                    return true
                }
            })
            if (index === -1) {
                return {
                    ...state, filteredChecked: [...state.filteredChecked, actions.payload]
                }
            } else {
                // let index = state.filteredChecked.findIndex((filterCheckedItem) => {
                //     if (filterCheckedItem.name == actions.payload.name) {
                //         return true
                //     }
                // })
                return {
                    ...state, filteredChecked: state.filteredChecked.map((item) => {
                        if (item.name === actions.payload.name) {
                            return actions.payload
                        } else {
                            return item
                        }
                    })
                }
            }

        }

        default:
            return state
            break;
    }
}

export default petsReducer;

