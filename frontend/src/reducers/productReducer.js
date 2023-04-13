// Constants

import 
{ 
    ALL_PRODUCT_FAIL, 
    ALL_PRODUCT_REQUEST, 
    ALL_PRODUCT_SUCCESS,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL,   
    CLEAR_ERRORS,
} from "../constants/productConstant.js"


// this will take data take the data of the backend and give it back

export const productReducer = (state = {products: []}, action) => {

    switch (action.type) { // we do variable constants so we can avoid the mistakes and have constant variable to define the process selection
        case ALL_PRODUCT_REQUEST:
            return {loading: true, products: []};

        case ALL_PRODUCT_SUCCESS:
            return {
                loading: false,
                // payload data will be defined in the action file - what kind of data wil be taken
                products: action.payload.products,
                productsCount: action.payload.productsCount,
                resultPerPage:action.payload.resultPerPage,
                // filteredProductsCount:action.payload.filteredProductsCount,
            };

        case ALL_PRODUCT_FAIL:
            return {loading: false, error: action.payload};

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            };

        default:
            return state;
    }


};


// For Products Details - the single product page
export const productDetailsReducer = (state = {product: {} }, action) => {

    switch (action.type) { // we do variable constants so we can avoid the mistakes and have constant variable to define the process selection
        case PRODUCT_DETAILS_REQUEST:
            return {
                loading: true, 
                ...state,    
            };

        case PRODUCT_DETAILS_SUCCESS:
            return {
                loading: false,
                // payload data will be defined in the action file - what kind of data wil be taken
                product: action.payload,

            };

        case PRODUCT_DETAILS_FAIL:
            return {
                loading: false, 
                error: action.payload,
            };

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null,
            };

        default:
            return state;
    }


};



