import './App.css';
import { BrowserRouter as Router , Route , Routes } from 'react-router-dom'
import React , {useEffect} from 'react';

import Header from './component/layout/Header/Header.js'
import Footer from './component/layout/Footer/Footer.js'
import Home from './component/Home/Home.js'
import WebFont from 'webfontloader';
import ProductDetails from './component/Product/ProductDetails.js'




function App() {

  // To Download Google Font
  React.useEffect(()=>{

    // TO use any font from the google library
    WebFont.load({
      google:{
        families:['Roboto', "Droid Sans", "Chilanka"]
      },
    });
  
  },[]);





  return (
  <>
  <Router>
    <Header/>
    <Routes>
        <Route exact path="/" Component={Home} /> 
         <Route exact path="/product/:id" Component={ProductDetails} /> 

      </Routes>
    <Footer/>
    </Router>
    </>
  );
}

export default App;
