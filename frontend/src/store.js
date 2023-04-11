// this is our file which will store the states

import { createStore , combineReducers ,applyMiddleware} from 'redux';


// use for the dispatch function
import thunk from "redux-thunk";

// 
import { composeWithDevTools } from "redux-devtools-extension";
import { productReducer ,productDetailsReducer } from './reducers/productReducer.js';



// this is to combine our different reducers file together
const reducer = combineReducers({

    products:productReducer,
    productDetails:productDetailsReducer, 
});

let initialState = {

};

const middleware = [thunk];


// we give the type of reducer how we fetch the data and work with it
const store = createStore(reducer,initialState,composeWithDevTools(applyMiddleware(...middleware)));



export default store;