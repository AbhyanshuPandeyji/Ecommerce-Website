import React, {Fragment, useEffect} from 'react'
import './Home.css';
import ProductCard from './ProductCard.js'
import MetaData from '../layout/MetaData';
import {clearErrors, getProduct} from '../../actions/productAction.js'

import { useSelector , useDispatch } from 'react-redux'
import Loader from '../layout/Loader/Loader.js';

import { ToastContainer , toast } from 'react-toastify';

// image url https://ibb.co/mhF65Lg e-comm
//           https://ibb.co/KxzKnHf mens t-shirt
//           https://i.ibb.co/b1vTwPT/menshirt.jpg  //link image

const Home = () => {

    // Initializing the dispatch function
    const dispatch = useDispatch();


    const errorAlert = () => {
        toast.error("Wow so easy!",{
            position:"bottom-center"
        });
    }

    const { loading, error , products, productsCount } = useSelector(state=> state.products);

    useEffect(()=>{
        if(error){
            errorAlert();
        dispatch(clearErrors());
        }

        dispatch(getProduct());
    },[dispatch, error]);

    return (
        <Fragment>
        { loading ? ( <Loader/> ) : (
            <Fragment>

        <MetaData title="E-COMMERCE"/>


            <div className='banner'>
                <p>Welcome to Our E-Commerce</p>
                <h1>Find Our Products Below</h1>


                <a href="#container">
                    <button>
                        Scroll
                    </button>
                </a>
            </div>

            {/* The Heading of Our Feature Product */}
            <h2 className='homeHeading'>Featured Product</h2>


            {/* This Is Section Of Our Products On Home Page */}
            <div className='productContainer' id="container">
                {/* this will come from the redux later */}
                
                {products && products.map(product =>(
                    <ProductCard product={product} key={product._id}/>
                ))}
            </div>
            {/* <ToastContainer/> */}
            {/* if below not work then this will be linked to the page */}

        </Fragment>
        )}
            <ToastContainer/>  
            {/* i am testing it here if its work or not */}
        </Fragment>
    )
}

export default Home;
