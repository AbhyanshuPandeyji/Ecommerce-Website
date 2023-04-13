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


export const getProduct = (keyword = "", currentPage = 1 ,price=[0,100000] ,category , ratings =0) => async (dispatch) => {
    try {

        dispatch({type: ALL_PRODUCT_REQUEST});

        // this will sent the request to the backend to request the data
        // the route should match the backend route to get the data
        // this will request all products from the backend
        let link = `/api/v1/products?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}&ratings[gte]=${ratings}`;
        
        if(category){
        link = `/api/v1/products?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}&category=${category}&ratings[gte]=${ratings}`;

        }
        
        
        const {data} = await axios.get(link);


        dispatch({type: ALL_PRODUCT_SUCCESS, payload: data})

    } catch (error) {
        dispatch({type: ALL_PRODUCT_FAIL, payload: error.response.data.message})
    }
};

// to get product details
export const getProductDetails = (id) => async (dispatch) => {
    try {

        dispatch({type: PRODUCT_DETAILS_REQUEST});

        // this will sent the request to the backend to request the data
        // the route should match the backend route to get the data
        // this will request all products from the backend
        const {data} = await axios.get(`/api/v1/product/${id}`);


        dispatch({
            type: PRODUCT_DETAILS_SUCCESS,
            // either define here data.product or in reducer action.payload.product
            payload: data.product
        })

    } catch (error) {
        dispatch({type: PRODUCT_DETAILS_FAIL, payload: error.response.data.message})
    }
};


// Clearing the errors
export const clearErrors = () => async (dispatch) => {

    dispatch({type: CLEAR_ERRORS})

}
