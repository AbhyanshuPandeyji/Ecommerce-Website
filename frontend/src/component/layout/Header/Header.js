import React, {Fragment, useState, useEffect} from 'react'
import {Link , useParams } from "react-router-dom";
import "./Header.css";
import Search from './Search';
// import LoginSignUp from '../../User/LoginSignUp';
import Home from '../../Home/Home';
// use this instead of push the keyword
import { useNavigate } from 'react-router-dom';


const Header = ( {history} ) => {

    const [keyword, setKeyword] = useState("");

    const navigate = useNavigate();

    // function for the search filter
    const searchSubmitHandler = (e) => {
        e.preventDefault();
        // to remove space
        if(keyword.trim()){
            navigate(`/products/${keyword}`);
        } else {
            navigate("/products");
        }

    };

    const profile = "no"

    return (
        
        <Fragment>
            <nav className="navbar navbar-expand-lg  sticky-top">
                <div className="container-fluid">
                    <Link className="navbar-brand texts" to="#">Navbar</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link texts" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link texts" to="/products">Products</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link texts" to="/">Contact</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link texts" to="/">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link texts" to="/">Cart</Link>
                            </li>
                            <Link className="nav-link texts" to="/login">Profile</Link>
                            
                        </ul>
                        <form className="d-flex searchBox" role="search"
                            onSubmit={searchSubmitHandler}>
                            <input className="form-control me-2" type="text"
                                placeholder="Search A Product..."
                                onChange={
                                    (e) => setKeyword(e.target.value)
                                }/>
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </Fragment>
    )
}

export default Header;
