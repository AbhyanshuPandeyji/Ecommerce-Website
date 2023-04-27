#### After 6hr 

### Before that 
## these are the layout of the component
- the home page created
- 1st the navbar -header file
- 2nd the footer 
- 3rd the product show between the header and footer by the product map component
- 4th the hero section
- then the product component - it will be the card of the product 
## this will be the component main files 
- Everything will be in home page component import 
## Redux - action , reducer , constants , store.js
## You need to maintain 3 things in redux
- reducers - to change the state
- actions - from the user actions
- constants - to have as a basic kind function declaration
 to be performed




this all things are the part of the redux library

- store - will take all the state and store it into the redux - we will use the provider in the index.js to use it
- it will have the all the reducers 
- it will have reducer, initial state , thunk , and middle ware named dev tools


- the constants is used to reduce the errors when defining the type of method we want to perform in the switch function
- the constant type replace the value of the case to take the action in the function and on its bases the reducer will change the state and give the new state back

- the action - this will send the request to the backend server to fetch the data it will intake the data and then give it to the reducer to store
- this will send the type of action defined by the constants
and the data that it will take from the backend

- reducer - it will take the state and the data , type of action to perform and the state
- reducer will change the state of the data based on the action.type
- reducer will be an switch case which will decide the data manipulation

- dispatch will use to send the function 
- axios will use to send the request to the backend server
- proxy will be defined to connect with the backend port to receive the data from the backend
- the useSelector will be use to select the type of the data that will be taken from the redux state that been given by the reducer on the go


### after all this
- created an error message used the toastify instead of the react-alert 
- import in the index to use in all - its component toastContainer and the toast
and the css file
- in the file want to use just give the toast in the end of the body and the 
- create a function that takes the message kind
- then add that function in to the use effect by the if condition to perform and add that if condition in the array of the updating when the error occur


- created the loading page also when load 
- also added the condition when load show the load when not show the page

- helmet also added in the meta data

- react router also added as path and component structure

#### The Single Product Page
## this will be also a main file in component
### Product Details page
## material ui
-we will use the material ui carousel
- install material ui carosel package 
- install material ui icons 
- install material ui cors - cannot install for me


#### Search Works
- use the use navigate instead of the history to navigate to the pages its is 
useNavigate from react router dom 
navigate = useNavigate;



npm i express-fileupload and couldinary


#### Login , REgister ,Logout works
- all login logout and register works only their routing to the pages required which is profile page is remaining


#### forgot , reset , profile update works 
- just need to copy paste the all file styles and the components required 
- for forgot password the temporary frontend url will be provided but at the upload the both url of frontend and the backend wil be together with the port

- the profile page is need to be created (learned ) and managed 

- 9:48 hr complete fast the pace

- the toastify can work as a single function like alert 
- the protected route is the component to use for not writing the isAuthenticated for every route that should only be accessed by the user who login only 
- the dashboard wil only be accessed by the admin only 

- this is till now the data 14-4-23


for data grid another package need to be installed with the x material ui

### shipping page 
- package needed to be installed 
### checkout steps the line above to check the completed steps 
- it takes the active steps and shows the result

### order confirm page 
- to confirm amount and the quantity and the address of your order before creating it 

### payment 
- stripe method 
- go to site create an account 
- copy the secret key and publishable key - and paste into variable of secret key and the api key 
- make two file payment controller and route 
- create the function to create payment in controller and an function to send that key to frontend (because the key is used in frontend payment but we are storing it in backend for the safety)
- then in the route create 2 route one for making payment and second to give the secret and api key to the front end user on call

- install a package in backend
```
npm i stripe
```

- now go to frontend - install a package
```
npm install @stripe/react-stripe-js @stripe/stripe-js
```

- now use state and take the api key from the backend by a function 
- call that function in the useEffect 
getStripeApiKey - to be precise name in the app.js

### stripe works
stripe works like this in route
```
            {stripeApiKey && <Route path='/process/payment' element={<Elements stripe={loadStripe(stripeApiKey)}>
            // used the payment as the direct element to the elements 
              <Payment/>
              </Elements>
              }>
                    {/* // <Route element={<Payments/>} path='/process/payment' exact/> */}
            </Route>}

```

- you need to go step by step to identify the errors you can miss 
- the error messages is from the order because it was not present in the state


#### Orders and Reviews frontend

### To see my orders
i used the params.id instead of the table reference 

### react rating system is been used by the 
- dialog of material ui to make the component
- rating , comment and product id is been given in the form
- the Rating is been used instead of the react rating

### material ui - Tree View and Items
- for that new package is been installed
```
npm install @mui/lab @mui/material
```
the Tree View and Item will be imported by 
```
import { TreeView , TreeItem } from '@mui/lab'
```

### Dashboard 
- the side bar and main div
- side bar 1/6 and main 5/6 grid with positions absolute
- the dashboard will have the three things no of products , orders , users
- total amount 
- 2 charts 
```
package install
npm install chart.js react-chart.js-2 
``` 
- 1 is line chart - to show the revenue done / total money from zero
- 2 is donut chart - to show the stock available of the product

- side bar have 4 component 
dashboard -main
products which have products and the create one ( with update and  delete )
orders - to set orders status and see the orders made on the site
reviews to see the reviews on a product -it will be done by search because there will be many reviews to many products