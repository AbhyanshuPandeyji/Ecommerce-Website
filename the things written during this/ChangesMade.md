### Material Ui Icons

- mail icon - import MailOutlineIcon from '@mui/icons-material/MailOutline';
- face icon - import FaceIcon from '@mui/icons-material/Face';
- lock Open Icon - import LockOpenIcon from '@mui/icons-material/LockOpen';
- Lock icon - import LockIcon from '@mui/icons-material/Lock';
- Vpn Key Icon - import VpnKeyIcon from '@mui/icons-material/VpnKey';
- Typography -  import { Typography } from "@mui/material";
- Remove Shopping Cart Icon - import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';

shipping icons 
- pin Drop Icon - import PinDropIcon from '@mui/icons-material/PinDrop';
- Home Icon - import HomeIcon from '@mui/icons-material/Home';
- Location City Icon - import LocationCityIcon from '@mui/icons-material/LocationCity';
- Public Icon - import PublicIcon from "@mui/icons-material/Public";
- Phone Icon - import PhoneIcon from "@mui/icons-material/Phone";
- Transfer Station Icon - import TransferWithinAStationIcon from "@mui/icons-material/TransferWithinAStation";


checkout steps icons and tags
- Local shipping Icon - import LocalShippingIcon from "@mui/icons-material/LocalShipping";
- Library icon - import LibraryAddCheckIcon from "@mui/icons-material/LibraryAddCheck";
- Account Balance Icon - import AccountBalanceIcon from "@mui/icons-material/AccountBalance";

- core of the material ui -
Typography, 
Stepper, 
StepLabel, 
Step,
importing all from the material ui main file


- in payment 
icons
- Credit Card Icon -import CreditCardIcon from "@mui/icons-material/CreditCard";
- Event Icon - import EventIcon from "@mui/icons-material/Event";
- Vpn Key Icon - import VpnKeyIcon from "@mui/icons-material/VpnKey";

the typography and the  navigate and the toast 

- in confirm order 
the class name from confirmshippingarea/box to confirmShippingArea/box

- in order page
new import to data grid - import { DataGrid } from '@mui/x-data-grid';
the launch icon - import LaunchIcon from '@mui/icons-material/Launch';

- in the dashboard 
the package is changed to @mui/lab
import will be from the @mui/lab of the Tree View And Items

// import the chart from the chart.js thisis required otherwise the project will throw error of category is undefined register scale
// got it from the stack overflow
import Chart from 'chart.js/auto';

### Protected Route changes
- navigate and outlet instead of redirect and route in it

### the useNavigate
- in all the history.push will be changes with the useNavigate()
- initializing  useNavigate by - navigate = useNavigate()
- the history.push("location") now will be navigate("location")

### the filter with pagination not working
- had to remove the filter with pagination giving the error

### the useParams instead of the match.params
- we will take the query component by the useParams instead of the match.params
- { parameters } = useParams();
- match.params.parameter will be replaced by the parameter that comes from the use params

### toast instead of the alert 
- for showing popup messages we used the toast messages instead of the react-alert ones , it wasn't working b/c of old version

### bootstrap navbar instead of the overlay
- in this the icons was not present - so had to use the bootstrap navbar

### search bar of bootstrap instead of the another file 
- used in-build search bar in the bootstrap just added the navigation in it by the function

### material ui 
- every old core and lab materials is been changed with the 
- either with material ui main library - or with the packages that been installed with @mui instead of @material-ui
- the core and lab doesn't work


### useLocation instead of the location alone
- instead of {location} as a prop in the component
- you will have to use the useLocation package in react-router-dom
- location = useLocation then you can access the search or other params
- can use the UseSearchParams also research it
- not working right going to the login/shipping instead of the shipping


### in shipping used the direct url instead of the splitted one
- in cart used the if statement instead of the redirect one

### in the payment 
useNavigate 
toast
the method to work out the stipe in the routes
```
```


### orders
### myOrders Page data grid 
- another package needed name of data grid
```
npm install @mui/x-data-grid 
// and other material ui packages
```

- the import of the data grid will be 
```
import { DataGrid } from '@mui/x-data-grid';
```