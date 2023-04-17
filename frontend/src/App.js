import './App.css';
import { BrowserRouter as Router , Route , Routes } from 'react-router-dom'
import React , {useEffect} from 'react';

import Header from './component/layout/Header/Header.js'
import Footer from './component/layout/Footer/Footer.js'
import Home from './component/Home/Home.js'
import WebFont from 'webfontloader';
import ProductDetails from './component/Product/ProductDetails.js'
import Products from './component/Product/Products.js'
// import Search from './component/layout/Header/Search';
import LoginSignUp from './component/User/LoginSignUp.js'
import store from "./store";
import { loadUser } from './actions/userAction';
import { useSelector } from 'react-redux';


import Profile from './component/User/Profile.js'
import ProtectedRoute from "./component/Route/ProtectedRoute.js"

// import "./App.css";
// import { useEffect, useState } from "react";
// import Header from "./component/layout/Header/Header.js";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import WebFont from "webfontloader";
// import React from "react";
// import Footer from "./component/layout/Footer/Footer";
// import Home from "./component/Home/Home";
// import ProductDetails from "./component/Product/ProductDetails";
// import Products from "./component/Product/Products";
// import Search from "./component/Product/Search";
// import LoginSignUp from "./component/User/LoginSignUp";
// import store from "./store";
// import { loadUser } from "./actions/userAction";
// import UserOptions from "./component/layout/Header/UserOptions";
// import { useSelector } from "react-redux";
// import Profile from "./component/User/Profile";
// import ProtectedRoute from "./component/Route/ProtectedRoute";
// import UpdateProfile from "./component/User/UpdateProfile";
// import UpdatePassword from "./component/User/UpdatePassword";
// import ForgotPassword from "./component/User/ForgotPassword";
// import ResetPassword from "./component/User/ResetPassword";
// import Cart from "./component/Cart/Cart";
// import Shipping from "./component/Cart/Shipping";
// import ConfirmOrder from "./component/Cart/ConfirmOrder";
// import axios from "axios";
// import Payment from "./component/Cart/Payment";
// import { Elements } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";
// import OrderSuccess from "./component/Cart/OrderSuccess";
// import MyOrders from "./component/Order/MyOrders";
// import OrderDetails from "./component/Order/OrderDetails";
// import Dashboard from "./component/Admin/Dashboard.js";
// import ProductList from "./component/Admin/ProductList.js";
// import NewProduct from "./component/Admin/NewProduct";
// import UpdateProduct from "./component/Admin/UpdateProduct";
// import OrderList from "./component/Admin/OrderList";
// import ProcessOrder from "./component/Admin/ProcessOrder";
// import UsersList from "./component/Admin/UsersList";
// import UpdateUser from "./component/Admin/UpdateUser";
// import ProductReviews from "./component/Admin/ProductReviews";
// import Contact from "./component/layout/Contact/Contact";
// import About from "./component/layout/About/About";
// import NotFound from "./component/layout/Not Found/NotFound";

function App() {


  const {loading , error  ,isAuthenticated , user} = useSelector((state)=>state.user)

  // To Download Google Font
  React.useEffect(()=>{

    // TO use any font from the google library
    WebFont.load({
      google:{
        families:['Roboto', "Droid Sans", "Chilanka"]
      },
    });
  
    // can also use dispatch like this
    store.dispatch(loadUser());

  },[]);





  return (
  <Router>
    <Header/>
    <Routes>

        <Route exact path="/" Component={Home} /> 
        <Route exact path="/product/:id" Component={ProductDetails} /> 
        {/* to show all the products */}
        <Route exact path="/products" Component={Products} /> 
        <Route path="/products/:keyword" Component={Products} />
        {/* User Paths */}
        <Route exact path="/login" Component={LoginSignUp}/>

        {isAuthenticated === true ? <Route exact path="/account" Component={Profile}/> : <Route exact path="/login" Component={LoginSignUp}/> }



        

      </Routes>
    <Footer/>
    </Router>
  );
}

export default App;
