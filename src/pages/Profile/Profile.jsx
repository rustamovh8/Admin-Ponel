import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { Link } from 'react-router-dom';
import { getUserById } from '../../reduser/counter';
import { Button } from '@mui/material';

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
            <div className="flex flex-col gap-[40px] p-[28px] sm:p-[20px] sm:gap-[24px]">
                <div className="flex justify-between">
                    <h1 className='text-[25px] font-[600]'>Profile</h1>
                    <button className='text-red-500 border-red-500 font-[600] font-serif px-[5px] py-[3px] rounded-[5px] border'><ExitToAppIcon /> Log Out</button>
                </div>

                <div className='flex items-start gap-[40px] sm:flex-col sm:gap-[24px]'>
                    <div className='flex flex-col gap-[25px] w-[557px] sm:w-[360px] sm:gap-[20px]'>
                        <div className='flex sm:flex-col sm:items-start sm:gap-[20px] bg-[rgb(255,_255,_255)] justify-between items-center shadow-[rgba(100,_116,_139,_0.06)_0px_1px_1px] p-[15px] rounded-[8px]'>
                            <div className='flex flex-col gap-[20px]'>
                                <div className=''>
                                    <h1 className='text-[17px] font-[600] font-["Open_Sans",_Montserrat,_Roboto]'>{dataUserById?.lastName} {dataUserById?.firstName}</h1>
                                    <div className='flex gap-[5px]'>
                                        <h1 className='text-[rgb(101_116,_139)] text-[17px] font-[500] font-["Open_Sans",_Montserrat,_Roboto]'>Role :</h1>
                                        <h1 className='text-[rgb(101_116,_139)] text-[17px] font-[500] font-["Open_Sans",_Montserrat,_Roboto]'>
                                            {dataUserById?.userRoles[0].name}
                                        </h1>
                                    </div>
                                </div>
                                <div className='flex items-center gap-[10px]'>
                                    <Link to={"/dashboard/editprofile"}><button className='border border-[rgba(80,_106,_133,_0.5)] font-[400] text-[rgb(80,_106,_133)] font-["Open_Sans",_Montserrat,_Roboto] rounded-[8px] p-[8px_20px] text-center'>CHANGE PROFILE</button></Link>
                                    <Button variant='text' color='error'>Delete</Button>
                                </div>
                            </div>
                            <div>
                                {
                                    dataUserById?.image == "" || dataUserById?.image == null ?
                                        <img className="w-[150px] h-[150px] rounded-[50%]" src="https://yt3.ggpht.com/ytc/AKedOLT5nbr-kJXPj0aqUJ1VV0pvn5FdYCIA7TzM6pi9LQ=s900-c-k-c0x00ffffff-no-rj" alt="" /> :
                                        <img className="w-[150px] h-[150px] rounded-[50%]" src={`${image}${dataUserById?.image}`} alt="" />


                                }
                            </div>
                        </div>
                        <div className='p-[18px] rounded-[8px] bg-[rgb(255,_255,_255)] shadow-[rgba(100,_116,_139,_0.06)_0px_1px_1px]'>
                            <div className='flex flex-col gap-[20px]'>
                                <div className='flex flex-col gap-[12px]'>
                                    <div className='flex items-center justify-between'>
                                        <h1 className='text-[14px] font-[500] font-[Montserrat]'>Registrated :</h1>
                                        <h1 className='text-[14px] font-[600] font-[Montserrat]'>{dataUserById.dob}</h1>
                                    </div>
                                    <div className='flex items-center justify-between'>
                                        <h1 className='text-[14px] font-[500] font-[Montserrat]'>Email :</h1>
                                        <h1 className='text-[14px] font-[600] font-[Montserrat]'>{dataUserById.email}</h1>
                                    </div>
                                    <div className='flex items-center justify-between'>
                                        <h1 className='text-[14px] font-[500] font-[Montserrat]'>lastName</h1>
                                        <h1 className='text-[14px] font-[600] font-[Montserrat]'>{dataUserById?.lastName}</h1>
                                    </div>
                                    <div className='flex items-center justify-between'>
                                        <h1 className='text-[14px] font-[500] font-[Montserrat]'>firstName</h1>
                                        <h1 className='text-[14px] font-[600] font-[Montserrat]'>{dataUserById?.firstName}</h1>
                                    </div>
                                </div>
                                <div className='flex flex-col gap-[10px]'>
                                    <h1 className='font-[600] text-[18px]'>Phone number:</h1>
                                    <div className='flex items-center justify-between pl-[20px]'>
                                        <h1 className='text-[14px] font-[500] font-[Montserrat]'>Admin :</h1>
                                        <h1 className='text-[14px] font-[600] font-[Montserrat]'>{dataUserById.phoneNumber}</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-[557px] sm:w-[350px]'>
                        <div className='rounded-[8px] bg-[rgb(255,_255,_255)] shadow-[rgba(100,_116,_139,_0.06)_0px_1px_1px] p-[20px] flex justify-between items-center'>
                            <h1 className='text-[18px] font-[600] font-["Open_Sans",_Montserrat]'>Account</h1>
                            <button className='border border-[rgba(80,_106,_133,_0.5)] font-[400] text-[rgb(80,_106,_133)] font-["Open_Sans",_Montserrat,_Roboto] rounded-[8px] p-[8px_20px] text-center'>RESET PASSWORD</button>
                        </div>
                    </div>
                </div>

                {/* <div className="flex flex-col gap-[40px]">
                    <div className="">
                        <pre className='m-auto'>UserName :                                                           {dataUserById.userName} </pre>
                        <pre className='m-auto mt-[2%]'>Role :                                                                  {dataUserById.length > 0 &&

                            dataUserById.userRoles[1].name}</pre>
                    </div>
                    <div className="">
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
                    <div className="">
                        <pre className='p-[0px_20px] m-auto'>Full Name :                                                 {dataUserById?.lastName} {dataUserById?.firstName}</pre>
                        <pre className='p-[0px_20px] m-auto mt-[2%]'>Email :                                           {dataUserById.email}</pre>
                        <pre className='p-[0px_20px] m-auto mt-[2%]'>Phone Number :                                                    {dataUserById.phoneNumber}</pre>
                    </div>
                </div> */}
            </div>
        </>
    )
}

export default Profile