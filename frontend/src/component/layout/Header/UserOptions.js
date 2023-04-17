import React, {useState} from 'react'
import "./Header.css";

import {Fragment} from 'react';
import {useNavigate} from 'react-router-dom';


import {SpeedDial, SpeedDialAction} from '@mui/material';
import {ClassNames} from '@emotion/react';
// import Backdrop from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import ListAltIcon from '@mui/icons-material/ListAlt';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import { logout } from "../../../actions/userAction";
import {useDispatch, useSelector} from "react-redux";


import {ToastContainer, toast} from 'react-toastify';
// will be change for the profile of the navbar
const UserOptions = ({user}) => { // const { cartItems } = useSelector((state) => state.cart);


    const [open, setOpen] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();


    const options = [
        {
            icon: <ListAltIcon/>,
            name: "Orders",
            func: orders
        }, {
            icon: <PersonIcon/>,
            name: "Profile",
            func: account
        },
        // {
        // icon: (
        //     <ShoppingCartIcon
        //       style={{ color: cartItems.length > 0 ? "tomato" : "unset" }}
        //     />
        // ),
        // name: `Cart(${cartItems.length})`,
        // func: cart,
        // },
        {
            icon: <ExitToAppIcon/>,
            name: "Logout",
            func: logoutUser
        },
    ];

    if (user.role === "admin") {
        options.unshift({
            icon: <DashboardIcon/>,
            name: "Dashboard",
            func: dashboard
        });
    }

    function dashboard() {
        navigate("/admin/dashboard");
    }

    function orders() {
        navigate("/orders");
    }
    function account() {
        navigate("/account");
    }
    function cart() {
        navigate("/cart");
    }
    function logoutUser() { 
      dispatch(logout());
        toast.success("Logout Successfully", {position: "bottom-center"});
    }


    return (
        <Fragment> {/* <Backdrop open={open} style={{ zIndex: "10" }} /> */}
            <SpeedDial ariaLabel='SpeedDial tooltip example'
                onClose={
                    () => setOpen(false)
                }
                onOpen={
                    () => setOpen(true)
                }
                style={
                    {zIndex: "11"}
                }
                open={open}
                direction="down"
                className="speedDial"
                icon={
                  <img
                ClassName="speedDialIcon"
                src={
                user.avatar.url ? user.avatar.url : "/Profile.png"}
                alt="Profile"/>
            }>

                {/* function to see the different options for the user   */}
                {
                options.map((item) => (
                    <SpeedDialAction key={
                            item.name
                        }
                        icon={
                            item.icon
                        }
                        tooltipTitle={
                            item.name
                        }
                        onClick={
                            item.func
                        }
                        tooltipOpen={
                            window.innerWidth <= 600 ? true : false
                        }/>
                ))
            } </SpeedDial>
            <ToastContainer position="bottom-center"
                autoClose={2000}
                limit={1}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover={false}
                theme="light"/>

        </Fragment>
    )
}

export default UserOptions;
