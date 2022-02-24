import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import  thunk from 'redux-thunk';
// import  useReducer  from "./reducers/userReducer";
import { RootReducers } from "./reducers";

const initialState = {};
const middleware = [thunk];

declare global{
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION__?: typeof compose;
    }
};

export const rootState = {

};

// const reducer = combineReducers({
//     user: useReducer,
// });


export const store = createStore(
    RootReducers, initialState, 
    compose(
        applyMiddleware(...middleware),
        // (window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) as any
         )

);

