#### This is the ecommerce project by the 6 Pack programmer aka Abhishek Singh ######

#### For Github
- npm i ( to install all dependencies )
- create a config.env file in the /backend/config/ folder
 you will need A variable Name 
 DB_URI = with your local or the cloud url init - DB_URI = "url"


#### Backend #####

#### Creating the basic structure

- create the backend folder in the root directory
- create an server.js in the backend file - this will be file where our server will start
- create an app.js file - this is where our app express component will come from 
- npm install packages:
    ```
    npm install express mongoose dotenv
    ```
- express - is for node server 
- mongoose - is for database connection 
- dotenv - to read env files for secure server data
- this installization will take place in the root directory  - means our node modules and package.json file wil be in the root directory instead of the server directory 

#### Installing the nodemon to run the server 

- installing nodemon will re-run our server with every change and after every error so we won't have to start the server again and again form the terminal
- for installing nodemon:
    
    ```
    npm i nodemon 
    ``` 
    ( i is shorthand for install )
- go to your package.json and add in the scripts:
    ```
    "scripts":{
        "start": "nodemon backend/server.js",
        "dev": "nodemon backend/server.js"
    }
    ```
- note that the dev is also there to run from the server.js with the help of the nodemon - but when we use this app in the production mode and run it on the hosting sites we will use the 
    ```
    "dev":"node backend/server.js",
    ```
in the development environment 


#### Config file in Backend - config.env file ( will be used multiple times)

- in this file all of our config or per say dotenv files will - things that will required for the configuration 
- we create an folder in backend - named "config" 
- inside config a file - config.env - to hold our env variables 
- in it The first variable will be 
    ```
    PORT = Port Number; 
    ```
    ( in our case 4000 )


#### Start Creating our different required folders

- routes
- controllers
- model 
- 





#### Starting with the routes folders

- route folder import the express
- then use router = express.Router();
 ( Router is the functionality provided by the express library)
- our routes will be defined like this
```
router.route('/product').get(getAllProducts); 
```
( could be done better)

and then in require module.exports = router;


- getAllProducts will come from controllers file where all of our page logics will be defined

- these every route will be imported in the server.js file


#### Controllers file

- in controllers file  we create a logic or the function to work on the request 
- productControllers.js is the controllers file for the product 



#### In server.js file 

- in app.js we will first import the route by using require 
```
product = require('./route/productRoute');
```
( its complicated than the module imports will be done later after finished )
```
- then app.use('/api/v1', product)
```
product is the component of route and the api/v1 is the basic route for the product page

- so flow is like this 
    server.js main 
    app.js for the routes to import - it will have initial route hits for the url 
    - routes folder it will contain the specific route to hit for specific logical work CRUD operation 
    - controllers are the logic to be performed when the routes is being hit and giving back the value based on it
    
    - models for the models of the site - it is the schema

#### Models for the products 
- product schema by mongoose schema
- then create objects with these keys and these values requirements
- name - type:string, required:true - name of the product will be need to identify it
- description - type:string, required : true - it will be the description of what kind of product that is
- price - type:Number , required:true - it will be a currency with number
- rating - type:Number, default: 0  - when there is no review
- images - it will an array of object to have multiple images of the same product
    (it will take the images and the url of the image from the cloudinary )
    public_id - type:String, required : true , url - type will  be string, required will be true
- category - type will be string and , it will be required 
- stock - it will be number type , and required will be true with the maximum length of 4, the default value will be 1
- numOfReviews - count the number of reviews been entered
- reviews - array of the object it will require name rating and the comment given by the user, name and comment will be string and rating will be number ( will be count in stars)
- createdAt - at last the date at which the product is been created or first appear in the store it will of type date and default value will be date of now

- Create Product route working fine

```
Post request for creating the Product at ( "/api/v1/product/new")
Postman Json Input
{
    "name": "product1",
    "price": 1200,
    "description": "This is a sample product",
    "category": "Laptop",
    "images": {
        "public_id": "sample Image",
        "url": "sample Url"
    }
}



Postman console Output 
{
    "success": true,
    "product": {
        "name": "product1",
        "description": "This is a sample product",
        "price": 1200,
        "rating": 0,
        "images": [
            {
                "public_id": "sample Image",
                "url": "sample Url",
                "_id": "642db308ca696c3cff8734ff"
            }
        ],
        "category": "Laptop",
        "Stock": 1,
        "numOfReviews": 0,
        "_id": "642db308ca696c3cff8734fe",
        "reviews": [],
        "createdAt": "2023-04-05T17:42:32.791Z",
        "__v": 0
    }
}

```


#### Product Routes 
- req.params.id - takes the code from the url to check id is the id in the url
- req.body - its the data stored in the database 
- _id - its the id given to the specific component or the data stored in the mongodb to distinguish and unique value

- create product works
```
On Api route/url
(/product/new , createProduct)
```

- get all product works
```
On Api route/url
(/products , getAllProducts) -
```

- update product works
```
On the api route/url
(/product/:id , updateProduct) -
```
- delete product works 
```
On the api route/url
(/product/:id , deleteProduct) -
```
- get product details works
```
On the api route/url
(/product/:id , getProductDetails ) - 
``` 


#### Error Handling 

- create a util file in the backend
- create a errorHandler.js file in it 
- create a class name "ErrorHandler" that inherits the "Error" class of the Node Js - this is related to the oops concepts - inheritance , class , objects , methods , encapsulation , property , abstraction .etc.
- then in it take the constructor  - construct the output based on a given input
- in that constructor take message and the status code provided by the condition in the controller logic
- then this.statusCode = statusCode - it will create the status code to the status code is been passed in the error handle message thats what this do
- then use Method  - 
    Error.(this,this.constructor) - where this is the targeted object "Error" and the this.constructor is the constructor we used above - so we basically setting up our error to the new error code in node js

- error handling middle ware

#### middleware for error handler

- create a middle ware file in the backend folder
- create a error.js file in it 
- import the error handler from the utils
- then create a function which gives the response to the server when the error and message comes to the given problem statement

```
this is the error code in error.js middleware

module.exports = (err,req,res,next)=>{

    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal Server Error";

    res.status(err.statusCode).json({
        success:false,
        error:err,
    });
};
```
it is just taking the status code and message and then sending the response to the server when the error occurs

- importing the error.js in the app.js
- app.use(errorMiddleware); - for app to use this error message system whenever required


#### Applying error handling 

- by removing the code in error handling of if and just remaining the if and the return statement
- then adding the next function - next is an callback function which will take a function and give response back when take the data from that given function back
parent child function style
```
next(new ErrorHandler("Product not Found", 404));
```
first one will be message and next one will be status code as the rule of giving the values to pass in the functions
new is creating new object to take the value we intake after completion

- test it  - error handling works ( req will always come before the res)
```
result after putting the wrong id
{
    "success": false,
    "error": {
        "statusCode": 404
    }
}
```
#### Error handler to Avoid Try and Catch for the logical functions
- to tackle the async error we need to create a another block of code to run the error when things don't go our way
- use a middleware "catchAsyncErrors" - in it we will pass the functional logic of our code
- then create a function that will that will take our data in it "theFunc"
- it will pass the function into the promise object  - which give the promise to the user that it will give an response  - async and await is the short version of it
- 
 ```
 theFunc => (req,res,next) =>
 {
     Promise.resolve(theFunc(req,res,next)).catch
 }
```
in this the <strong>Promise</strong> will take the function of our logic in controller file by <strong>"theFunc"</strong> and try to resolve it , if it doesn't resole it it goes to our catch which will go to the next step and give the error based on the insufficiency or unmatched or due to any error that the try code didn't work -  will give the response of which we written in the schema of our data. (in our case)

``` 
example of our code running :
 Creating a product without name and price and it will give the both error
 {
    "success": false,
    "message": "Product validation failed: price: Please Enter Product Price, name: Please Enter Product Name"
}
```

#### Different types of Error Handling

- ### Promise Rejection Error
- in it if the url to reach is incorrect we want to crash our server
- first we will save our server connection to a variable - app.listen into the server variable
- for that we will remove the catch block in the database connection so this promise rejection will works
- then to create it we will create a function for unhandledRejection
 ```
 process.on("unhandledRejection" , err = >{
     // this is where we will close our server and exit
     server.close(()=>{
        // this will exit the server
        process.exit(1)
     })
 })
 ```
- if the url will be wrong it will give the error
```
Error: Invalid scheme, expected connection string to start with "mongodb://" or "mongodb+srv://"    
shutting down the server due to Unhandled Promise Rejection
[nodemon] app crashed - waiting for file changes before starting...
```
- ### Uncaught Exception 
- this will be for any abnormalities present in the connect of the server any unknown variables or things 
- it will on top to run server only when every thing is correct to go - it will also crash the server
- same as the above except two things 1st it will be 
 uncaughtException type and second we will directly exit the server because it didn't even started due to abnormalities 
 ```
 error will look like
 Error: youtube( means an undefined object in the servers code ) is not defined
shutting down the server due to Uncaught Exception
[nodemon] app crashed - waiting for file changes before starting...
 ```


- ### The Mongodb error  - The Cast Error 
- When the input of the url of server to database connection is incomplete not just  wrong but incomplete
- it will be in error.js file 
- in the function created earlier add if condition if the name of error is equal to the "CastError"
- if yes then create a error message 
- then add that new error message in the err by the new and ErrorHandler function  - then give that the message and status code and in the end it will be given back to the error message



#### Adding the Features and Functionality to the Backend 

### What it Will take and how 
- it will take the all product via get all products route 
- it will be called in it to filter for the user after the class been called
```
    const apiFeature = new ApiFeatures(Product.find() , req.query).search().filter().pagination(resultPerPage); // calling the function for the given functionality search, filter and for the pagination
``` 
- in it the query will be the function that will find the products - Product.find()
- in it the queryStr will be equal to the queries entered in the params of the url -
means how many type of this should be changed based on the parameters entered in the url 
```
example of a url with multiple parameter with multiple keys and values
http://localhost:4000/api/v1/products?category=Laptop&price[gte]=1200&price[lt]=2000&page=1

```
- this includes all the parameter functions like search , filter and the pagination this can include page , category , price 


### Pagination Feature 

- go to utils folder
- crete a folder named "addFeatures.js"
- works 


### Filter 
- works 
- it filter the category and the user input of the keyword in the query 
- 


### Search Product 
- works 



#### User Sign-in And Sign-up pages  - With Authorization

### Authorization

- installing some packages
```
npm i bcryptjs jsonwebtoken validator nodemailer cookie-parser body-parser

```

- bcrypt  - to safely store user password unreadable to any other human and computer unless proper authorization
- jwt -  to give a token for a user to define him when ever he want to use that login again
- validator - to validate our email that it is genuine and right or not
- nodemailer - when user input forgot password it should automatically send him the link to reset password ( can also work for the when user purchase and also when user enter wrong password multiple times to give him a warning)
- cookie-parser - to save the token of the user in the given browser its safe because it can't be looked by the others i it was on local storage it will be unsafe to have jwt token
- body-parser - for converting data from one type to another type of data , we use it for json to object things.


### User Model - in model file in backend

- this will be our user schema









### User Route 

- this will include a register and a sign-in page route api 
- basic router import then the routes

## Register route

- create a register api with link to (/register) and with the logic function "registerUser"  - it will be a post request




### User Controller 

- create a "userController.js" file in the controller section 
- add the user model into it
- add error handling and async handling in it


## Register user Controller
- take the user data into an object {} with define requirements with by using req.body -  the requirement in our case will be name email password and avatar ( it can be skipped as it is not required true in user model)
- then create a user by using "User.create(with specifics parameters)" function - in it User is the user model schema and this all be store in a variable name "user" for future purposes when we implement our front end
- avatar will be put later when we do the front end part of the picture upload
- email validator works 
- this is right now not includes any authentication right now no bcrypt no jwt

```
This is what we entered in postman:
{
    "name": "Abhyanshu",
    "email": "Abhyansh@gmail.com",
    "password": "Abhyanshu"
}

this is what was the response in the server:
{
    "success": true,
    "user": {
        "name": "Abhyanshu",
        "email": "Abhyansh@gmail.com",
        "password": "Abhyanshu",
        "avatar": {
            "public_id": "This Is A Sample Id",
            "url": "Profile Pic Url"
        },
        "role": "user",
        "_id": "642f015940b0fc034055807e",
        "__v": 0
    }
}

this what our data looks like in the data base:
_id : ObjectId('642f015940b0fc034055807e')
name : "Abhyanshu"
email : "Abhyansh@gmail.com"
password : "Abhyanshu"

avatar : Object
    public_id : "This Is A Sample Id"
    url : "Profile Pic Url"
role :"user"
__v : 0

```

- we have every data name, email , password if we entered it correctly if we don't provide any of the details required or provide it wrong we will get the specific error related to that inadequacy :
example if we enter the email wrong we will get the error that "enter a valid email"

- but we can clearly see that we can see the password in both the response and in the database which is not safe so we need to apply the authentication and security to it by bcrypt and jwt

- we will use the user model and encrypt the password in there before uploading it to the database ( in twitter it was done in the auth route and in the controller page )

### things learn during it
- the this keyword cannot be used in the arrow function 
```
()=>{
    this.something = something   X can't be used
};
```
- the 10 in the bcrypt is the power of the password higher the power the stronger the password means longer the password the better it is and safe - but more power required the more power it will consume while creating it - we use await in it
- we save the jwt token in cookie so we wont have to login again and again whenever we reload page or close the browser except in the case of logout - we also specify that this user is saved and he can access the routes that he has permissions to ( example you cannot open others profile and edit it but you can look at them and interact with them ).




## Bcrypt to encrypt the password 
- take the password pass it to the bcrypt and hash it to save it from to been seen 

## JWT and Cookie
- we will create the JWT token and save it to cookie 
- we do this so we don't have to login again and again every time with our id/email and password every time we visit the site or load the page we want to be saved 
- this will specify that the this user can access the granted route (depending upon you are a user or the admin of the site )
- we will create a JWT_SECRET key to secure our site and user data so other cannot get the access of the other user and data and also cannot make themselves the admin to manipulate the site
- we will create "JWT_EXPIRE" to set the limit date after which user have to re login again into the app  
- now we will create the function for the JWTToken and call it in the Register user to save the token via user 
```
after we input this in the postman:
{
    "name": "Ramesh",
    "email": "Ramesh@youtube.com",
    "password": "RamesBabu"
}

after successful attempt we will output like this:
{
    "success": true,
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MmYxMWI4NWFjMjNlYzIwYjg0MjRkNCIsImlhdCI6MTDNEpUTHQoQUJMHLrErGJyHg89uy71MyuH4fQ.VCkoFhI36X16FSECDtrhdR0s8XyCqpCKS5VEHsV1Kus"
}
token is our json web token which is going to save in the cookie 
```

- first we will apply it to the register user

### Login User - Sign In
