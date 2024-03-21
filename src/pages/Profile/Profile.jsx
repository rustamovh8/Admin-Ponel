import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { Link } from 'react-router-dom';
import { getUserById } from '../../reduser/counter';

const Profile = () => {
    const dataUserById = useSelector((state) => state.product.dataUserById)

    const dispatch = useDispatch()


    console.log(dataUserById);
    useEffect(() => {
        dispatch(getUserById())
    }, [])

    const image = import.meta.env.VITE_APP_FILES_URL
    return (
        <>
            <div className="flex flex-col justify-center m-auto p-[28px]">
                <div className=" flex justify-between">
                    <h1 className='text-[25px] font-[600]'>Profile</h1>
                    <button className='text-red-500 border-red-500 font-[600] font-serif px-[5px] py-[3px] rounded-[5px] border'><ExitToAppIcon /> Log Out</button>
                </div>

                <div className=" m-auto  mt-[5%] ">
                    <div className=" shadow-xl rounded-[5px] mt-[5%] p-[20px] border">
                        <pre className='m-auto'>UserName :{dataUserById.userName} </pre>
                        <pre className='m-auto mt-[2%]'>Role :{dataUserById.length > 0 &&

                            dataUserById.userRoles[1].name}</pre>
                    </div>
                    <div className=" shadow-xl rounded-[10px] p-[10px] border mt-[5%] ">

                        {
                            dataUserById?.image == "" || dataUserById?.image == null ?
                                <img className="w-[300px] ml-[36%] h-[260px] rounded-[50%]" src="https://yt3.ggpht.com/ytc/AKedOLT5nbr-kJXPj0aqUJ1VV0pvn5FdYCIA7TzM6pi9LQ=s900-c-k-c0x00ffffff-no-rj" alt="" /> :
                                <img className="w-[300px] ml-[36%] h-[260px] rounded-[50%]" src={`${image}${dataUserById?.image}`} alt="" />


                        }
                        <div className="w-[30%] m-auto flex justify-between py-[20px]">
                            <Link to={"/dashboard/editprofile"} className="w-[60%]" ><h1 className='border border-[#5A607F] text-[#5A607F] font-serif rounded-[10px] px-[5px] py-[5px] text-center'>Change Profile</h1></Link>
                            <h1 className='text-[22px] font-[400] text-red-500 w-[10%]'>Delete</h1>
                        </div>
                    </div>
                    <div className=" shadow-xl rounded-[5px] mt-[5%] py-[5px] border">
                        <pre className='p-[0px_20px] m-auto'>Full Name :                                                 {dataUserById.firstName} {dataUserById.lastName}</pre>
                        <pre className='p-[0px_20px] m-auto mt-[2%]'>Email :                                          {dataUserById.email}</pre>
                        <pre className='p-[0px_20px] m-auto mt-[2%]'>Phone Number :                                                    {dataUserById.phoneNumber}</pre>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile