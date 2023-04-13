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
import UserOptions from './component/layout/Header/UserOptions';


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
    {isAuthenticated && <UserOptions user={user} />}

    <Routes>

        <Route exact path="/" Component={Home} /> 
        <Route exact path="/product/:id" Component={ProductDetails} /> 
        {/* to show all the products */}
        <Route exact path="/products" Component={Products} /> 
        <Route path="/products/:keyword" Component={Products} />
        {/* User Paths */}
        <Route exact path="/login" Component={LoginSignUp}/>


        
        {/* <Route path="/search" Component={Search} />  */}

      </Routes>
    <Footer/>
    </Router>
  );
}

export default App;
