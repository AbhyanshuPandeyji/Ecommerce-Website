import { Navigate, Outlet } from 'react-router-dom'
import React, {Fragment} from "react";
import {useSelector} from "react-redux";
import Loader from '../layout/Loader/Loader';

// {children: Component , ...rest } we dont need to pass this anymore
const AdminProtectedRoute = ({isAdmin}) => {

  const { isAuthenticated , user ,loading } =  useSelector((state)=> state.user)
return (
    <Fragment>
        {loading === false &&  isAuthenticated === false && isAdmin === true && user.role !== "admin" ? <Navigate to='/login'/> : <Outlet/> }
    </Fragment>
  )
}

export default AdminProtectedRoute;