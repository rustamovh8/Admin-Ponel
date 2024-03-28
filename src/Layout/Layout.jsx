import SearchIcon from "@mui/icons-material/Search";
import { Link, Outlet } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import ListIcon from "@mui/icons-material/List";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import SellIcon from "@mui/icons-material/Sell";
import img from "../assets/img/Group 1116606595.svg";
import { useDispatch, useSelector } from "react-redux";
import { Fragment, useEffect, useState } from "react";
import { getUser, getUserById } from "../reduser/counter";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Button, Drawer, List, Menu, MenuItem } from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import LoginIcon from '@mui/icons-material/Login';
import MenuIcon from '@mui/icons-material/Menu';


const Layout = () => {
  const dispatch = useDispatch()
  const dataUser = useSelector((state) => state.product.dataUser)
  const dataUserById = useSelector((state) => state.product.dataUserById)
  console.log(dataUser);
  console.log(dataUserById);

  const imgUrl = import.meta.env.VITE_APP_FILES_URL;


  useEffect(() => {
    dispatch(getUser())
  }, [])

  useEffect(() => {
    dispatch(getUserById())
  }, [])

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const [state, setState] = useState({ left: false, });

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [openDrawer, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250, backgroundColor: "#1C2536" }} role="presentation" onClick={toggleDrawer(false)}>
      <div className="h-screen">
        <div className="p-[24px]">
          <img src={img} alt="" />
        </div>
        <div className="p-[24px] ">
          <ul className="flex flex-col gap-[10px]">
            <Link to={"/dashboard"}>
              <li className="text-[#FFF] font-[600] text-[16px]">
                <div className="flex p-[10px] items-center gap-[10px]">
                  <HomeIcon />
                  Dashboard
                </div>
              </li>
            </Link>
            <Link to={"/dashboard/orders"}>
              <li className="text-[#FFF] font-[600] text-[16px]">
                <div className="flex p-[10px] items-center gap-[10px]">
                  <ListIcon />
                  Orders
                </div>
              </li>
            </Link>
            <Link to={"/dashboard/products"}>
              <li className="text-[#FFF] font-[600] text-[16px]">
                <div className="flex p-[10px] items-center gap-[10px]">
                  <SellIcon />
                  Products
                </div>
              </li>
            </Link>
            <Link to={"/dashboard/other"}>
              <li className="text-[#FFF] font-[600] text-[16px]">
                <div className="flex p-[10px] items-center gap-[10px]">
                  <FolderOpenIcon />
                  Other
                </div>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </Box>
  );

  return (
    <div className="">
      <Drawer open={openDrawer} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <div className="flex items-center gap-[10px] p-[10px_16px] border-b">
          {
            dataUserById?.image == "" || dataUserById?.image == null ?
              <img className="w-[60px] h-[36px] rounded-[50%]" src="https://static.vecteezy.com/system/resources/previews/019/879/186/original/user-icon-on-transparent-background-free-png.png" alt="" /> :
              <img className="w-[36px] h-[36px] rounded-[50%]" src={`${imgUrl}${dataUserById?.image}`} alt="" />
          }
          <div className="flex flex-col gap-[2px]">
            <h1 className="text-[#121828] font-[600] text-[16px]">{dataUserById?.lastName} {dataUserById?.firstName}</h1>
            <h1 className="text-[#65748B] text-[14px] font-[400]">{dataUserById?.phoneNumber}</h1>
          </div>
        </div>
        <Link onClick={handleClose} to={"profile"}>
          <div className="flex gap-[10px] p-[16px] items-center border-b">
            <PersonIcon className="text-[rgb(108,108,108)]" />
            <h1 className="text-[rgb(108,108,108)]">Profile</h1>
          </div>
        </Link>
        <div className="flex gap-[10px] p-[10px_16px] items-center ">
          <LoginIcon className="text-[rgb(239,_68,_68)]" />
          <h1 className="font-[Open_Sans,_Montserrat,_Roboto] text-[rgb(239,_68,_68)]">Logout</h1>
        </div>
      </Menu>

      <header className="bg-[#1C2536] p-[8px_28px] z-50 fixed w-[100%] flex justify-between sm:w-[400px] sm:fixed sm:z-30">
        <div className="flex  items-center gap-[100px]">
          <MenuIcon onClick={toggleDrawer(true)} className="text-[#e5e7eb] hidden sm:flex " />
          <img className="sm:hidden" src={img} alt="" />
          <div className="flex rounded-[4px] justify-center items-center gap-[8px] p-[7px_12px_7px_20px]">
            <div className="flex sm:hidden">
              <SearchIcon sx={{ color: "#FFF" }} />
              <input
                type="text"
                className="bg-transparent text-[#FFF] w-[190px] outline-none sm:hidden"
                placeholder="Search..."
              />
            </div>
          </div>
        </div>
        <div className="flex items-center gap-[8px]">
          <div className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M13 3C15.2816 3.46373 17 5.58146 17 8V12C18.1046 12 19 12.8954 19 14V19H14C14 20.1046 13.1046 21 12 21C10.8954 21 10 20.1046 10 19H5V14C5 12.8954 5.89543 12 7 12V8C7 5.58111 8.71785 3.46334 11 3H13ZM12 5C10.4023 5 9.09634 6.24892 9.00509 7.82373L9 8V12C9 13.1046 8.10457 14 7 14V17H17V14C15.8954 14 15 13.1046 15 12V8C15 6.34315 13.6569 5 12 5Z"
                fill="#F9F9F9"
              />
            </svg>
          </div>
          <div className="flex  items-center gap-[5px]">
            <div className="" onClick={handleClick}>
              {
                dataUserById?.image == "" || dataUserById?.image == null ?
                  <img className="w-[60px] h-[36px] rounded-[50%]" src="https://static.vecteezy.com/system/resources/previews/019/879/186/original/user-icon-on-transparent-background-free-png.png" alt="" /> :
                  <img className="w-[36px] h-[36px] rounded-[50%]" src={`${imgUrl}${dataUserById?.image}`} alt="" />
              }
            </div>
            <Link to={"profile"}>
              <h1 className="text-[#FFF] sm:hidden">{dataUserById?.userName}</h1>
            </Link>
            <div className="sm:hidden">
              <ExpandMoreIcon sx={{ color: "#fff" }} />
            </div>
          </div>
        </div>
      </header>
      
      <div className="flex justify-end items-start">
          <div className="flex flex-col gap-[8px] p-[36px_16px] left-0 top-10  w-[300px] bg-[#1C2536] sm:hidden fixed h-screen self-stretch items-start">
            <Link
              className="rounded-[4px] w-[218px] p-[10px_16px] text-[#FFF] focus:bg-[#FFF] focus:text-[#5A607F]"
              to={"/dashboard"}
            >
              <div className="flex items-center gap-[16px]">
                <HomeIcon />
                <h1 className="text-[14px] font-[400]">Dashboard</h1>
              </div>
            </Link>
            <Link
              className="rounded-[4px] w-[218px] p-[10px_16px] text-[#FFF] focus:bg-[#FFF] focus:text-[#5A607F]"
              to={"/dashboard/orders"}
            >
              <div className="flex items-center gap-[16px]">
                <ListIcon />
                <h1 className="text-[14px] font-[400]">Orders</h1>
              </div>
            </Link>
            <Link
              className="rounded-[4px] w-[218px] p-[10px_16px] text-[#FFF] focus:bg-[#FFF] focus:text-[#5A607F]"
              to={"/dashboard/products"}
            >
              <div className="flex items-center gap-[16px]">
                <SellIcon />
                <h1 className=" text-[14px] font-[400]">Products</h1>
              </div>
            </Link>
            <Link to={"/dashboard/other"} className=" w-[218px] rounded-[4px] p-[10px_16px] text-[#FFF] focus:bg-[#FFF] focus:text-[#5A607F]">
              <div className="flex items-center gap-[16px]">
                <FolderOpenIcon />
                <h1 className=" text-[14px] font-[400]">Other</h1>
              </div>
            </Link>
          </div>
        <div className="w-[80%] pt-[100px] sm:pt-[60px] sm:w-[400px]">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
