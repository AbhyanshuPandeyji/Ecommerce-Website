import React, {useEffect} from 'react'
// import Carousel from 'react-material-ui-carousel';
import {Fragment} from 'react';
import './ProductDetails.css'
import Loader from '../layout/Loader/Loader.js'
import MetaData from '../layout/MetaData.js'
// import { Slide } from '@mui/material';
import Carousel from 'react-material-ui-carousel'
// this is to work with the image url in the function instead of params - match.params.id instead - import useParams and create an id
import {useParams} from 'react-router-dom'

import {useSelector, useDispatch} from 'react-redux'
import {clearErrors, getProductDetails} from '../../actions/productAction';

import ReactStars from 'react-rating-stars-component';
import { Rating } from '@mui/material';

import ReviewCard from './ReviewCard.js'

import { ToastContainer , toast } from 'react-toastify';











// match is like the req.params it is for the frontend
// it only being received not taken from the page

const ProductDetails = () => {

    const dispatch = useDispatch();

    const {id} = useParams();

    

    // to pull data from the redux
    const {product, loading, error} = useSelector((state) => state.productDetails);



    // for error component
    const errorAlert = () => {
        toast.error( "how awesome" ,{
            position:"bottom-center"
        });
    }
    useEffect(() => {
        if(error){
            errorAlert();
            dispatch(clearErrors());
        }
        dispatch(getProductDetails(id));
    }, [dispatch, id , error ])
    // }, [dispatch, match.params.id]);


    const options = {
        edit: false,
        content: "rgba(20,20,20,0.1)",
        // this will color the starts
        activeColor: "tomato",
        size: window.innerWidth < 600 ? 20 : 25,
        value: product.ratings,
        readOnly: true,
        isHalf: true

    }

    return (
        <Fragment> {
            loading ? (
                <Loader/>) : (
                <Fragment>
                    <MetaData title={`${product.name} -- E-commerce`}/>

                    <div className='ProductDetails'>
                        {/* we will use material ui carousel */}

                        <div> {/* just remove if sliding does not works */}
                            <Carousel className='carouselItem'>
                            {/* <Slide> */}
                            {
                            product.images && product.images.map((item, i) => (
                                <img className='CarouselImage'
                                    key={i}
                                    src={
                                        item.url
                                    }
                                    alt={
                                        `${i} Slide`
                                    }/>
                            ))
                        }
                        {/* </Slide> */}
                            </Carousel> 
                        
                            </div>
                        <div>
                            <div className='detailsBlock-1'>
                                <h2>{
                                    product.name
                                }</h2>
                                <p>Product # {
                                    product._id
                                }</p>
                            </div>
                            <div className='detailsBlock-2'>
                                <ReactStars {...options}/>
                                <span className='detailsBlock-2-span'>
                                    {" "}
                                    ({
                                    product.numOfReviews
                                }
                                    Reviews)
                                </span>
                            </div>
                            <div className='detailsBlock-3'>
                                <h1>{
                                    `₹${
                                        product.price
                                    }`
                                }</h1>
                                {/* add to cart section */}
                                <div className='detailsBlock-3-1'>
                                    <div className='detailsBlock-3-1-1'>
                                        <button>-</button>
                                        <input readOnly type="number" value="1"/>
                                        <button>+</button>
                                    </div>
                                    {""}
                                    <button>Add To Cart</button>
                                </div>
                                <div>
                                    Status:{""}
                                    <b className={
                                        product.Stock < 1 ? "redColor" : "greenColor"
                                    }>
                                        {
                                        product.Stock < 1 ? "OutOfStock" : "InStock"
                                    } </b>

                                </div>
                            </div>

                            {/* details and description about the product */}
                            <div className='detailsBlock-4'>
                                Description :
                                <p>{
                                    product.description
                                }</p>
                            </div>

                            {/* button to submit review */}
                            <button className='submitReview'>Submit Review</button>
                        </div>
                    </div>


                    {/* Reviews Card */}
                    <h3 className='reviewsHeading'>
                        Reviews
                    </h3>
                    {/* if product reviews is present then show the review */}
                    {
                    product.reviews && product.reviews[0] ? (
                        <div className='reviews'>
                            {
                            product.reviews && product.reviews.map((review) => (
                                <ReviewCard review={review} key={review._id}/>
                            ))
                        } </div>

                    ) : (
                        <p className='noReviews'>No Reviews Yet</p>
                    )
                }

                </Fragment>
            )
        }
        <ToastContainer/>
        </Fragment>

    )
}

export default ProductDetails;
