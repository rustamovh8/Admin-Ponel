import SearchIcon from "@mui/icons-material/Search";
import { Link, Outlet } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import ListIcon from "@mui/icons-material/List";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import SellIcon from "@mui/icons-material/Sell";
import img from "../assets/img/Group 1116606595.svg";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getUser, getUserById } from "../reduser/counter";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Menu, MenuItem } from "@mui/material";


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
  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <div className="">
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={() => handleClose()}>Logout</MenuItem>
      </Menu>

      <header className="bg-[#1C2536] p-[8px_28px] flex justify-between">
        <div className="flex  items-center gap-[100px]">
          <img src={img} alt="" />
          <div className="flex rounded-[4px] justify-center items-center gap-[8px] p-[7px_12px_7px_20px]">
            <SearchIcon sx={{ color: "#FFF" }} />
            <input
              type="text"
              className="bg-transparent text-[#FFF] w-[190px] outline-none"
              placeholder="Search..."
            />
          </div>
        </div>
        <div className="flex items-center gap-[8px]">
          <div>
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
            <div >
              {
                dataUserById?.image == "" || dataUserById?.image == null ?
                  <img className="w-[60px] h-[36px] rounded-[50%]" src="https://static.vecteezy.com/system/resources/previews/019/879/186/original/user-icon-on-transparent-background-free-png.png" alt="" /> :
                  <img className="w-[36px] h-[36px] rounded-[50%]" src={`${imgUrl}${dataUserById?.image}`} alt="" />
              }
            </div>
            <Link to={"profile"}>
              <h1 className="text-[#FFF] ">{dataUserById?.userName}</h1>
            </Link>
            <ExpandMoreIcon onClick={handleClick} sx={{ color: "#fff" }} />
          </div>
        </div>
      </header>
      <div className="flex">
        <div className="p-[36px_16px] flex w-[300px] bg-[#1C2536] gap-[110px]">
          <div className="flex flex-col gap-[8px] fixed h-screen self-stretch items-start">
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
        </div>
        <div className="w-[90%] flex justify-center">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
