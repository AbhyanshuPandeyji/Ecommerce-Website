#### The MERN STACK E-commerce Project

welcome to the project it has some of the instructions before hand to start with

- install cannot able to upload the project on the full , just have the netlify build upload , so you have to run the project from here, sorry for the inconvenience


#### Some Pre-build things required

- the ide to work with the project
- the node for the server
- the packages mentioned below
- the environment variables to work with
- the stripe id to make payments
- the couldinary id to work with the image



## Env Variables

Make Sure to Create a config.env file in backend/config directory and add appropriate variables in order to use the app.

**Essential Variables**
PORT=
DB_URI =
STRIPE_API_KEY=
STRIPE_SECRET_KEY=
JWT_SECRET=
JWT_EXPIRE=
COOKIE_EXPIRE=
SMPT_SERVICE =
SMPT_MAIL=
SMPT_PASSWORD=
SMPT_HOST=
SMPT_PORT=
CLOUDINARY_NAME
CLOUDINARY_API_KEY
CLOUDINARY_API_SECRET
_fill each filed with your info respectively_



#### The Back end

### to run the backend
- you can run it with command the package.json of backend is in root folder
```
npm start 
or 
node backend/server.js
```
- if you want you can install the nodemon by the changing the dev command line of the 
```
   "dev": "nodemon backend/server.js"
```

### the package installation


- you need to just type the npm install in the root directory to install all the packages 
```
npm install // in root directory
```

- below are the packages that are installed individually
- npm install @emotion/react @emotion/styled @fontsource/roboto @mui/icons-material @mui/material - this could be by mistake i installed the material ui in the backend
- npm install bcrypt - to secure the password
- npm install body-parser - to convert the json to object and vice versa
- npm install cloudinary - for image upload
- npm install cookie-parser - to read the jwt cookie and store it in the browser
- npm install cors - to shift between urls
- npm install dotenv - to read the environment variables files ( config.env in our case)
- npm install express - to use the server of the node js to run the backend ( the main package )
- npm install express-fileupload - to upload files on the folders
- npm install jsonwebtoken - for creating the web tokens to give to user for future use
- npm install mongoose - to create the database work functions and create the schema to define the collections
- npm install nodemailer - to send the mails from the website
- npm install nodemon - to check and work with the app for the better experience for working
- npm install react-icons - for the icons - may be wrong install
- npm install stripe - to create payments and have the keys and secret to work with
- npm install validator - to validate the mails sending to the users



#### The FRONTEND 

### running instructions - to run the frontend

- it will be run by the 
```
npm start
```
- it will run on the port 3000
        http://localhost:3000
- or On Your Network:  http://192.168.29.24:3000

### The Package Installation

- you need to just type the npm install in the frontend directory to install all the packages 

- to go to frontend - cd frontend from the root directory
- then package install
```
npm install // in root directory
```

- npm install @emotion/react @emotion/styled @mui/icons-material @mui/lab @mui/material @mui/x-data-grid  - these are all the material ui packages - react, style, lab, icons, data-grid , lab, main is material
- npm install  @stripe/react-stripe-js @stripe/stripe-js - these are for the payment , the payment method for the frontend to have the elements
- npm install @testing-library/jest-dom @testing-library/react @testing-library/user-event - these are pre install packages
- npm install axios - to make the api calls to the backend - to use it instead of the fetch calls
- npm install chartjs react-chartjs-2 - to have the charts in the frontend , the line and the donut chart
- npm install  cloudinary - to upload images using this from the frontend
- npm install express-fileupload - to upload the files using the express file uploader
- npm install country-state-city - to have the selection of the different parameters of the address
the state, city and the country
- npm install react-router-dom - this is to create the routing in the app
- npm install react-toastify - this is to create the message components in the frontend to give the popup message of the success or error
- npm install redux redux-devtools-extension redux-thunk  react-redux - these are package to work with the redux ( the frontend data base or the state manager of the frontend ) - the redux to create it, the devtools to work with it in browser , thunk to make the store 
- npm install react-js-pagination - to create the pagination in the page
- npm install react-material-ui-carousel - to create the carousel in the single page component
- npm install  react-helmet - to use it to change the title of the page on load of the different page
- npm install  styled-components - for the styling of the react components
- npm install  bootstrap@5.3.0-alpha3 - to have the bootstrap , can also have the cdn links


#### Users With the email and Passwords
- 1     email: Abhyanshu@gmail.com , 
        password: Abhyanshu - the admin
- 2     email: SureshJi@gmail.com
        password: SureshJi1234
- 3     email: RameshJi@gmail.com
        password: RameshJi1234
- 4     email: MukeshJi@gmail.com
        password: MukeshJi1234
- 5     email: CarryDoe@gmail.com
        password: CarryDoe

#### Links
netlify overview link -
netlify link - ["https://mern-ecommerce-website-abhyanshu.netlify.app/"]

github link  - tried to upload form github to netlify 
github link - ["https://github.com/AbhyanshuPandeyji/Ecommerce-Website.git"]


this is for the future to hosting full site
github links for individual 
frontend - ["https://github.com/AbhyanshuPandeyji/Ecommerce-Website-Frontend.git"]
backend - ["https://github.com/AbhyanshuPandeyji/Ecommerce-Website-Backend.git"]


you can reference to the Abhishek Singh Youtube Channel for the Reference of this site
