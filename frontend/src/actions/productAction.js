import axios from 'axios';

import {
    ALL_PRODUCT_FAIL, 
    ALL_PRODUCT_REQUEST, 
    ALL_PRODUCT_SUCCESS,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL,  
    CLEAR_ERRORS
} from "../constants/productConstant.js"


export const getProduct = () => async(dispatch) =>{
    try {
        
        dispatch({
            type: ALL_PRODUCT_REQUEST
        });

        // this will sent the request to the backend to request the data
        // the route should match the backend route to get the data
        // this will request all products from the backend
        const {data} = await axios.get("/api/v1/products");


        dispatch({
            type:ALL_PRODUCT_SUCCESS,
            payload:data,
        })

    } catch (error) {
        dispatch({
            type:ALL_PRODUCT_FAIL,
            payload: error.response.data.message,
        })
    }
};

// to get product details
export const getProductDetails = (id) => async(dispatch) =>{
    try {
        
        dispatch({
            type: PRODUCT_DETAILS_REQUEST
        });

        // this will sent the request to the backend to request the data
        // the route should match the backend route to get the data
        // this will request all products from the backend
        const {data} = await axios.get(`/api/v1/product/${id}`);


  
        dispatch({
            type:PRODUCT_DETAILS_SUCCESS,
            // either define here data.product or in reducer action.payload.product
            payload:data.product,
        })

    } catch (error) {
        dispatch({
            type:PRODUCT_DETAILS_FAIL,
            payload: error.response.data.message,
        })
    }
};



// Clearing the errors
export const clearErrors = () => async(dispatch) =>{

    dispatch({type:CLEAR_ERRORS,})

}