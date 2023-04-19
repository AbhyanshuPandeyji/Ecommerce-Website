#### Protected route how to use it

link to the article to reference how to create protected route in react router v6 and difference b/w the routes in v6 and v5- [https://medium.com/@dennisivy/creating-protected-routes-with-react-router-v6-2c4bbaf7bc1c]

link to youtube video for the reference dennis ivy ( can also see traversy media) - [https://www.youtube.com/watch?v=2k8NleFjG7I]

now how to file and links

Protected route old method

Protected route file

```
import { Route, Redirect } from 'react-router-dom'
const PrivateRoute = ({children, ...rest}) => {
    let auth = {'token':false}
    return(
        <Route {...rest}>
                {!auth.token
                    ?
                    <Redirect to="/login" />
                    :
                    children}
        </Route>
    )
}
```

App.js file

```
function App() {
  return (
    <div className="App">
      <Router>
          <PrivateRoute component={HomePage} path="/" exact/>
          <Route component={LoginPage} path="/login"/>
      </Router>
    </div>)}
```

Now there a new way the Navigate and The Outlet - in V6

now the Protected route File

```
import { Navigate, Outlet } from 'react-router-dom'
import React, {Fragment} from "react";
import {useSelector} from "react-redux";

// {children: Component , ...rest } we don't need to pass this anymore
const ProtectedRoutes = () => {

  const { isAuthenticated , user ,loading } =  useSelector((state)=> state.user)
return (
    <Fragment>
        {loading === false && isAuthenticated ? <Outlet/> : <Navigate to='/login'/>}

    </Fragment>
  )
}

export default ProtectedRoutes;
```

and the app js file with the route nesting

```
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
            <Route  element={<ProtectedRoutes />}> // parent route
                // Route within a route - nesting route
                <Route element={<Profile/>} path='/account' exact/> // nested child routes going into the protected component and working with outlet as the route used before in their place
                <Route element={<Dashboard/>} path='/dashboard' exact/>
            </Route>
        <Routes>
      </Router>
    </div>)}
```

<h1> Now Some Explanation </h1> 
- The element is the new component of the use // component={Component} => element={<Component>} 
- The <Navigate> is new <Redirect>
- The <Outlet> is works as an nesting for the <Route>
- The <Routes> is the new <Switch> - the <Routes> check the every route if present or not so the <Route> should be the direct children of the <Routes> component
- the <outlet> works as the referencing the value of the children component of the parent route of the route that is nested in it
- so <Outlet> target the route nested in the route - 
- the Protected route should be the element for the main part of the route you want to secure the main parent route for the children routes
- now we don't need to pass the component and the ...rest in the protected route // as it takes the child as an component in the protected route and the paths in it
```
({component: Component , ...rest}) not required to pass in react router v6 version - with the help of the nesting and the navigate and outlet
```


in react router 6 component is now the element here
this works the protected route will be element for the parent route and the children routes will be the protected one -
their element( of children route as shown ) will be the reference to the outlet for the nesting
the outlet is works as route in the protected route folder - and navigate as redirect to page we want
