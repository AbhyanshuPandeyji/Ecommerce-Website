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

- it will be hit on the api - (/api/v1/user/login)
- taking email and password from req.body
- checking if email and password anyone is didn't putted in 
- if both are entered checking if the email exist - then finding if the user with these email and password exists if not then error of invalid email or password not directly giving the error its safe to not fall for the random email hitters
- then if email exists then checking that the password is correct or not by comparing using bcrypt the method we used to save the password by hashing it.
- then if it exists then give the user the token by which he will be logged in on the specific browser and also don't have to login again and again as he has the token - but it will have a expire limit so user have to login again after some time 
- the await was missing from the user password matching - thats why not logging in 


### Different functions that been created during the process of login and sign up

## Hashing password 

- for this we will use the bcrypt to hash the password - bcrypt.hash()
- will be in the user model schema - userModel.js file
- it will check before saving the password to the database 
- first there will be a function created which will take a save statement and a function wih the argument next. 
- first it will check if the password is been modified if not then it will just go to the next step  by applying the next() in the function- this will be useful in the case of the profile is exists and we just want to update it without updating the password 
- now if the password don't exists ( hence the profile ) it will take the password and hash it - if the password do exists but been changed then it will also rehash it so the new password wil be saved 
- it will work whenever this function is going to run - means whenever the user data is been added or been updated - and it will decide the case depended on that 
eg in case of register and login 


## Taking JWT Token

- we will use the package "jsonwebtoken" and "cookie-parser" here.
- first same it will take the "userSchema" object 
- then it will run the methods function 
- in this case we will use to get the jwt token - getJWTToken ( its the function it will be called in the authorization process whenever its needed - usually when every condition before is satisfied to give the entered user access )
- then it will return the token by "jwt.sign()" function in it there will be id of the user followed by the secret jwt token key (given by the website for specific user) with the following function which define after how long user has to login again the expiration date
- this will save the jwt token in the cookies of the browser - it will use "cookie-parser" to read the jwt cookie and save it

## For comparing the Password 

- we will use the package bcrypt here 
- first same we create the function which will take and give back data to our user schema object - "userSchema" to work with 
- it will be an async function with an argument which it will take from the function its being called and that argument will be the password we want to compare to the existing one in the data base
- then it will compare it by the bcrypt compare ( bcrypt.compare()) where it will take two arguments  
  first one is the password is been entered by the user
  and second one that been present in the data base related to the specific id which will be taken by the user schema object in the model
```
    return await bcrypt.compare(enteredPassword,this.password);

    enterPassword is the password entered by the user in real time
    in here "this" is our userSchema object and the data stored in it 
    "this" is a keyword which take the specific key and perform action on it 
```
- if it matches it will give the user the access to the specific authorization that been defined if not then it will throw the error of not matched

#### Authentication 

- cookie will be used 
- need to go to app.js and use the cookie-parser in it- import the cookie parser then app.use cookie parser.
- create an auth.js file in the middleware
- in auth.js create a function that takes the req,res,next
- then take the cookie from the browser which is been saved and then use it to validate the user authorization - <b>remember its different than the twitter one in the syntactical side but its same in case of requirements and works</b>



### The Admin route 
- in the auth.js file 
- if the role in the user data in mongodb includes the role we provided ("admin") by the function authorizeRoles then the next step of accessing the authorized routes by the admin ( admin can access the site as well as can manipulate the data in hte site not the users data - but the data of the site like product creation , delete and update) 
- if not then the user will get a error response of un authorization and status code of 403 for refusal of the response from the side of the server


### to save the name of the user that created product
- in the product model we also include a key called "user" which will store the the id of the user who created the product so if there is more than one admin they don't get confused that who created the product 
- 
```
user:{
        type:mongoose.Schema.ObjectId,
        ref:"User",
        required:true,
    },
```

- whenever the product will be created it will store the id of the user from the mongodb of the user who created it and the id will come from the id we saved earlier
in the cookie


### to Reset password 

- import crypto  - crypto = require("crypto") - it doesn't require installization it comes pre build
- crypto basic
 token  = crypto.randomBytes(20) - creates random buffer bytes <Buffer 1 2 4j 7t ...> like this</Buffer>
 .toString() - will create some random un readable symbols 
 then adding hex to it will create some readable string of the number 
 this is all to create space in the storage to take the new password

- then next step will be to update it 
 this is done by taking the password that is been taken from the user id and then updating it we will use the algorithm in it named "sha256" - there are many algorithm but we are using it
- then crypto.createHash("sha256")
then .update(token) the token we taken earlier of the user 
.digest("hex') to take the readable token data instead of an object and the hex in it is represent the data in the string form 
- hex it converts the hexadecimal data into the string data



### Forgot password 
- it works 
- the mail works needs extra step that is email and the device verification with the name 
the password will come from the gmail id -> gmail -> manage accounts -> then security -> then login with google -> then on the two step verification -> then open then app passwords and add the name any to it after login and generate password and copy that password and paste it to your password section of mail sending in the config file of the email ( after the email you want to send from or the email you did the two step verification to ) 


### how to use the reset password function

- after clicking he reset password we will send an email withe the token 
- first we will take the hashed token of the user that is save in the resetPasswordToken if user click forgot password 
- then we will find if the user with the hashed token he provided in the url exist in our database ( to check if the user who got email is clicked the url we send ) -
if user exist then move to next step if not then give error of user doesn't exist of the token expire 
- then if the user with the new saved hashed token is find in the database
then we will take the password input form the user
- if the password he entered and the confirm password entered is correct then we will proceed if not then send the error of wrong password don't match 
- if the password match then we will save the password we entered in the in the req.body.password ( the password we entered in the instance of the object password ) will be copied to the user's password data 
- after that we will make the resetPasswordToken and the Expire time to undefined if steps before done good  - to make room for if the new one request been made
- then we will save the user's password in the database 
- then we will give the request to the jwt token to login the user with that saved new password




#### Backend User Routes Api's 


### Main aim of features for this section
- User to Check His Profile
- Users profile Details
- Update and Delete his Profile ( update profile and password )




##### Things learn 

- there a difference between json from the user and from the database 
- user if we take his inputed json data object we take it by the req.body.key but here the no object schema  is required before it here to access it - </br>
 if we do { name , email } = req.body;
 here the body is the object input we taking from the user when he input it either by the postman or by the actual front end
 </br>
- on the other hand if we say req.body.somekey - this will be the data we taking from the database but for that it will require to be have a defined object schema related to it so we can access it
</br>
- for the us to access the body of the database we need the schema object to find the schema and the database linked to it 
after that we dan create the values in the database by create()
function </br> - eg in our case the schema object is User
so User.create({keys,keys,keys}) it will put the value to the keys form the data we input -
</br>
but where the data comes from by the user and how we taken it by doing destructuring for taking specific data like-
</br>
{name , email , password } - { keys , keys , keys } - in these keys data come from the json object we enter in the api creating the data in the database takes place after we enter the data and the data keys matched the keys we provide in the destructuring part of taking the data in the logic/ code
</br>
- after the data been entered and the when the user try to create it in the database and save the schema comes into play and when the data is matched the input type of the data we can take in the schema defined type we take the data -</br>
and if its unmatched it throws the error so the data we put in the json object in the postman should matched the data type in the schema of the object we provide while taking the json object data values and creating and storing it in the data base </br> 
- you can change the keys by which the user enter data in the postman and it won't affect tbe database keys even if it don't match you can use the req.body.key  </br>-but that would be a bad practice and will be bad in more complex project and when interacting with the front end so we choose to take the data in the user schema with the same name as the keys we defined in our schema object </br>
- but thats it the json object enter by the user is different from the object present in the database </br>
- hence the calling of the function and keys related to the schema object might be look same but they are actually not 
</br>
json object body calling for the user input is different and the json object body of the object schema is different one is getting the data and another one is working on the already presented data , both looks similar kind of request
```
req.body 

but body of the user input 
and the body of the mongodb data are totally different 

```
- thats why even if you see some keys request that are not present in your object schema you defined then realize that that key or the body request is related to the user input in the real time not from the already presented data

- and the further checks or the logic performed on them is totally different things they dont hanve to match the keys present in the data base they only have to match the data value stored in the keys in the specific data base to work through and go to the next step of the logic

- you can compare the data of the objects wihout having the same key because 
```

</br>
you are not finding the key located data </br>
you are not finding the or matching the key </br>
you are matching the data and </br>
the checking key should not have to be same to the key in your </br> data base to match the value in the key of your data base
</br>

</br>
you have to match the data in the logic not the key name 
until you are taking in the data by the user on that key 
then the keys by which user entered the data like : </br>
    json object inputed in the postman 
    it is done in the real time and on an api
    {"name":"abhy"}

</br>
inhere the key is name 
should match the key you asked for in body request - by req.body
</br>
when you take in the data to the logical part of the function 
</br>
eg
{ name } = req.body - in hare the name should match the name key in the above mentioned  in the object inputed on the api of the url to take the data
</br>
```   

- another thing is the logical part of an api is a part which runs when the api is hitted so if you didn't hit it then it will not take the logic 
- the api you enter in the postman and the api with the logic you want to reach should match to data to be taken and action to be performed in you app
- 
<strong>Remember the difference between accessing the req.body of the database and the object input in the real time </br>
when inputting the data the keys should match so the data should go to the specific keyword but it can or cannot match the name of the data base key word it should only be matched the type and in case of validation value also</strong></br>
<strong> remember the api hit match the url you want to enter the data and the logic just the next step if the api matched and the logic will only be performed if the required condition int eh logic will matched if not it will throw the error </strong></br>
<strong>Remember to put the await before the password compare and user intake even if the function it will go to compare the password has the await before the password because it will still take time to compare the password for the computer it wont do it in the real time without any delay </br>
so even if the function is directly comparing in front like-

```
put await in front of the every async task
put await that take time to work in bits or pieces 
Put await before every access and compare tasks 


isMatched = await bcrypt.compare( given password , database,password)

or the indirect function 
isMatched = await checkPassword(Password)

in this case password is send back to the function which holds the bcrypt function with await and return the response 
eg

userSchema.methods.comparePassword = async function(password){
    // but the password is hashed then how we will compare - by bcrypt - bcrypt.compareSync() function
    // this is the user schema or the object we created 
    // await was missing
    return await bcrypt.compare(password,this.password);

}

in here it is comparing the password and returning the response


and also remember to put await in front of the data you want to access from the data base no matter what 

const user =await User.find();

this takes time to get so function to work we need to put the await otherwise it will not perform the logic that is next and if the next logic will be in front statically then it will skip this step and give the response because the next stepped run before this could got time to finish


```
</strong></br>
<strong> Await is always is used to delay the task so the next task only performs if the first task is complete and it is completed right - it won't just start by it set the next step that can cause error because of insufficient data required to perform the right logic based on values that should been provided before the next logical statement could run </strong></br>
<strong>Async Await is also used when we want to display or perform a logic in bits rather than the all at once once if we put async it will run every thing in bit every bit of logic complete if will put out an result </br>
and the await if we want a logic to be run before something of the next step so it takes the data from the above logic 
or the next statement in the logical code is dependent upon the completion of the value of the code line above we put</br> the await to tell the computer to wait for the above task to finish then the next line of code only runs otherwise not </strong></br>
<strong></strong>





#### Admin Routes now

### add admin to every routes
- Add the admin in the api url of the every CRUD cases in the product 
- in create , delete and update product 
( ' /admin/product/ ) add the admin in every route


### Now the admin routes To Do Different Things
- 4 routes
- get All Users , On ('/admin/users') to get all users with id in the website
- get single user , on ('/admin/user/:id') to get a single specific user by its id
- update user role , on ('/admin/user/:id') to update a user role on the website - toggle between Admin and A regular User
- Delete User - On ('/admin/user/:id') - to delete a user on the Web site from the database of the website

### things to consider

- don't put req.user.id for finding if you do that it will update the user admin in this case itself instead of the role of the user we want to update role for - for that use "req.params.id" to find the user in the database
- don't give back the user in response back in the end after deleting the user




#### Some Product Route 

### To Add Review to A Product

- creating the Get 



### To Get All Products Reviews
- add the route in the product route - ("/reviews") this will be get request
- then in the getProductReviews 
- take the product by the query string - req.query.productId - because we just want to find the product to work on it not the whole product data so we just need the id to get the product when we reach to the url and the query will hold the id of the product on reach
- when reach to it find all the reviews in in it and show it -
by saving the find products data in an variable and then send the response of the product.reviews to show all the reviews the product have


### Delete a Product review
- add the route in the product route - ("/reviews") this will be delete request
- this route will be authenticated so the user can only delete his reviews, the user have to be logged in to delete the review
- take the product by finding it in query string 
```
    const product = await Product.findById(req.query.id); 
```
- then filter the products reviews related to the id of the user and the id provided in the req.query
the id of the product should match the id of the reviews in it 

- then filter the all that are not true and output it 
- before the output we need to re-average the rating so do that 
- then add that new average into the product reviews and rating by finding and updating the contents in the products reviews




#### Order Section Of the Backend

### Order Model
will write it later
- order model
- order controller
- order routes
- order api tests




#### ---------------- Backend 90% Ends Here Only Payment and Picture Upload Is Remaining --------------- ####






- <h1>After  The 4:45 Hour Mark</h1>

##### FRONT END START HERE #####

#### Create The App 

### to install the app

- cd frontend - to enter into frontend folder -
- npx create-react-app . - to create the react app with the same name as the folder in 
- then install the app
- npm start to check the app running status
- to installing packages on the different devices you need to
for backend install use -  "npm install" command in root folder

for frontend install use - cd frontend - to go to the app folder
then - npm install - to install all required dependencies required in the frontend folder

- the npm install checks the folder with the dependencies the package.json and package-lock.json to decide which dependencies is required to run this app 
its simple


### Installing required packages for the future use
 
- for that use npm i package name - you can do it individually or together with the 
space between package name
- <b> npm i </b>
- <b> axios</b> - to make api calls between frontend and backend server
- <b> react-alert </b> -
- <b> react-alert-template-basic </b> - 
        ```
        to install the react alert 
        the react alert will not upgraded to work with the newer versions of the
        react app so we need to download it with for the legacy version of the package
        npm i react-alert --legacy-peer-deps 
        npm i react-alert-template-basic --legacy-peer-deps
        ```
--legacy-peer-deps helps us to install the packages which is compatible to the older version of the react app
--force can also be used to install the packages if that above did not work for you

- <b> react-helmet </b> - for different page to have different title 
- <b> redux </b> - front end state manager
- <b> react-redux </b> - state management for the react - extension to the redux
- <b> redux-thunk </b> - to have dispatcher to give action and have a function in the return instead of an action
- <b> redux-devtools-extension </b> - for work with the redux with the browser seamlessly - gives an external window to see the functionality happening in the within the browser window with the help of the redux state management
- <b> react-router-dom </b> - to have the routing for faster shifts to the pages - taking full advantage of SPA ( Single Page Application System of the React )
- <b> overlay-navbar </b>- to have navbar and shifts the pages down

- <b> redux-persist </b> - for just the redux local storage ( don't know why installing this )
here's its its definition by the site-
```
Redux Persist is a tool used to seamlessly save the application's Redux state object to AsyncStorage . On app launch, Redux Persist retrieves this persisted state and saves it back to Redux. Normally, Redux sets the initial state of your app upon launch.
```
- there will be more packages that will come later these are for right now



#### IN File

### Deleting Unnecessary And Unwanted Files And Stuff
- for removing the cluster fo file removing some pre build files
- files:
   <h2>From the Source Folder: frontend/src/</h2>
-   <b>App.test.js</b>
-   <b>index.css</b>
-   <b>logo.svg</b>
-   <b>reportWebVitals.js</b> - remove the web vitals import and the function from the index.js folder.
-   <b>setupTests.js</b>
-   <b></b>
 
- content:

   <h2>Form the Source Folder: frontend/src/</h2>
-   <b>App.js</b> - remove pre build code in return - removing logo.svg import 
-   <b>App.css</b> - removing whole pre build styling
-   <b>index.js</b> - removing WebVitals function call - removing WebVital import - removing index.css import
    <b></b>
    
    <h2>From the Public folder: frontend/public/</h2>
-   <b>index.html</b> - removing the pre comments 

- its not an overlay error its a reference error