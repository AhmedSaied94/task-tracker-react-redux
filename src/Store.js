import { applyMiddleware, compose, createStore } from "redux";
import Reduser from "./Redusers";
import thunk from "redux-thunk";

const middleware = [thunk];
const initialState = [];

export const Store = createStore(
    Reduser,
    initialState,
    compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);