import React, { useEffect } from "react";
import TextField from "@mui/material/TextField";
import img from "../../assets/img/div.MuiAvatar-root.svg";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserById, putProfile } from "../../reduser/counter";
import { Link, useNavigate } from "react-router-dom";

const EditProfile = () => {
    const dataUserById = useSelector((state) => state.product.dataUserById);

    const dispatch = useDispatch();

    const [product, setProduct] = useState({
        Images: "",
        FirstName: "",
        LastName: "",
        Email: "",
        PhoneNumber: "",
        Dob: "",
    });

    useEffect(() => {
        if (dataUserById) {
            handleOpen();
        }
    }, [dataUserById]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({
            ...product,
            [name]: value,
        });
    };

    const handleOpen = () => {
        setProduct({
            ...product,
            FirstName: dataUserById.firstName || "",
            LastName: dataUserById.lastName || "",
            Email: dataUserById.email || "",
            PhoneNumber: dataUserById.phoneNumber || "",
            Dob: dataUserById.dob || "",
        });
    };

    const handleChange1 = (e) => {
        const file = e.target.files[0];
        setProduct({
            ...product,
            Images: file,
        });
    };

    console.log(dataUserById);
    useEffect(() => {
        dispatch(getUserById());
    }, []);

    const navigate = useNavigate()

    return (
        <>
            <div className="w-[1100px] flex justify-between m-auto mt-[2%]">
                <div className="w-[85%] m-auto shadow-xl">
                    <h1 className="text-[#DB4444] font-[700] p-[20px] text-[18px]">
                        ChangeProfile
                    </h1>
                    <div className="flex justify-around flex-wrap">
                        <TextField
                            required
                            id="outlined-required"
                            label="First name"
                            value={product.FirstName}
                            name="FirstName"
                            onChange={handleChange}
                            sx={{ width: "46%", marginBottom: "2%" }}
                        />

                        <TextField
                            required
                            id="outlined-required"
                            label="Last name"
                            value={product.LastName}
                            name="LastName"
                            onChange={handleChange}
                            sx={{ width: "46%", marginBottom: "2%" }}
                        />
                        <TextField
                            required
                            id="outlined-required"
                            label="Email address"
                            value={product.Email}
                            name="Email"
                            onChange={handleChange}
                            sx={{ width: "46%", marginBottom: "2%" }}
                        />
                        <TextField
                            required
                            id="outlined-required"
                            label="Phone Number"
                            value={product.PhoneNumber}
                            name="PhoneNumber"
                            onChange={handleChange}
                            sx={{ width: "46%", marginBottom: "2%" }}
                        />
                        <TextField
                            required
                            id="outlined-required"
                            label="Dob"
                            value={product.Dob}
                            name="Dob"
                            onChange={handleChange}
                            sx={{ width: "80%", marginBottom: "2%" }}
                        />
                        <div className="border border-dashed mt-5 border-[#ccc] p-[20px] rounded-md text-center">
                            <label htmlFor="fileInput" className="block mb-3">
                                <img
                                    src={img}
                                    alt="Drag and drop your image"
                                    className="mx-auto w-[25%]"
                                />
                            </label>
                            <input
                                id="fileInput"
                                onChange={handleChange1}
                                type="file"
                                accept="image/*"
                                className="hidden"
                            />
                            <p className="text-[16px] font-[700] font-serif mb-[5%]">
                                Click to upload or drag and drop
                            </p>
                            <p className="text-gray-500 text-[14px]">
                                (SVG, JPG, PNG, or gif maximum 900x400)
                            </p>
                            <img src="" alt="" />
                        </div>
                    </div>
                    <h1 className=" font-[500] p-[20px] text-[18px]">Password changes</h1>


                    <div className="flex justify-around flex-wrap">
                        <TextField
                            required
                            id="outlined-required"
                            defaultValue=""
                            placeholder="Current password"
                            sx={{ width: "96%", marginBottom: "2%" }}
                        />

                        <TextField
                            required
                            id="outlined-required"
                            defaultValue=""
                            placeholder="New password"
                            sx={{ width: "46%", marginBottom: "2%" }}
                        />
                        <TextField
                            required
                            id="outlined-required"
                            defaultValue=""
                            placeholder="Confirm new password"
                            sx={{ width: "46%", marginBottom: "2%" }}
                        />
                    </div>
                    <div className="pb-[20px]">
                        <Link to={"/dashboard/profile"}>
                            <button className=" ml-[57%] w-[16%] mt-[2%] text-[16px] font-mono font-[800] p-[10px] rounded-[5px]">
                                Cancel

                            </button>
                        </Link>
                        <button
                            onClick={() => { dispatch(putProfile(product)), navigate("/dashboard/profile") }}
                            className="bg-[#DB4444] text-[white] w-[25%] mt-[2%] text-[16px] font-mono font-[800] p-[10px] rounded-[5px]"
                        >
                            Save changes
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default EditProfile;