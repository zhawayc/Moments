import { createStore, combineReducers } from "redux";
import { userLogin } from "./reducers";

const reducers = {
    userLogin
};

const rootReducer = combineReducers(reducers);

export const configureStore = () => createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
);