// // this is the old way before v6
// import React, {Fragment} from "react";
// import {useSelector} from "react-redux";
// import {redirect as Redirect, Route} from "react-router-dom";

// const ProtectedRoute = ({
//     isAdmin,
//     component: Component,
//     ...rest
// }) => {
//     const {loading, isAuthenticated, user} = useSelector((state) => state.user);

//     return (
//         <Fragment> {
//             loading === false && (
//                 <Route {...rest}
//                     render={
//                         (props) => {
//                             if (isAuthenticated === false) {
//                                 return <Redirect to="/login"/>;
//                             }

//                             if (isAdmin === true && user.role !== "admin") {
//                                 return <Redirect to="/login"/>;
//                             }

//                             return <Component {...props}/>;
//                         }
//                     }/>
//             )
//         } </Fragment>
//     );
// };

// export default ProtectedRoute;


// new way 
// navigate is the new Redirect and the outlet is the thing that can render the child component
// next the We Use the <Routes> so no longer switch. The Routes component look through all the route
// so Route should always be inside The <Routes> . Now if We directly use the <PrivateRoute> it will throw an error 
// because it didn't find the route - to avoid that we use <navigate> and the <Outlet> in the private route 
// and use the private route as the element for the route component

// import { Navigate, Outlet } from 'react-router-dom'
// const PrivateRoutes = () => {
//   let auth = {'token':true}
// return (
//     auth.token ? <Outlet/> : <Navigate to='/login'/>
//   )
// }

// change route to outlet and redirect to navigate
// it works  nesting of the route the outlet will use the nested route as a reference
import { Navigate, Outlet } from 'react-router-dom'
import React, {Fragment} from "react";
import {useSelector} from "react-redux";
import Loader from '../layout/Loader/Loader';

// {children: Component , ...rest } we dont need to pass this anymore
const ProtectedRoutes = ({isAdmin}) => {

  const { isAuthenticated , user ,loading } =  useSelector((state)=> state.user)
return (
    <Fragment>
        {loading === false && (isAuthenticated ===  false) ? <Navigate to='/login'/> : <Outlet/> } 


        {/* {loading === false && isAuthenticated ===  false ?
          <Navigate to='/login'/> : <Outlet/>
        }
        
        { isAuthenticated ==  isAdmin === true && user.role !== "admin" ? <Navigate to='/login'/> : <Outlet/> }
 */}

        {/* this will give the error */}
        {/* cannot navigate to the component before going  to  the component  */}
        {/* {isAdmin == true && user.role === "admin" ? <Outlet/> : <Navigate to='/login'/> } */}
    </Fragment>
  )
}

export default ProtectedRoutes;