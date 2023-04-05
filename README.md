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

- create product works
```
On Api route/url
(/product/new)
```
- get all product works
```
On Api route/url
(/products/)
```

- update product works 
- delete product works 
```
On the api route/url
(/product/:id)
```
- next is get product details 
