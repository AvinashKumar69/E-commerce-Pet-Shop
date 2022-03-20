import { combineReducers } from "redux";
import petsReducer from './pets/pets.reducer';

export const reducers = combineReducers({
    pets: petsReducer
})