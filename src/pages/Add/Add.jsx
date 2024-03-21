import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import {
    Button,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    Switch,
    TextField,
} from "@mui/material";
import ReactQuill from "react-quill";
import { Link, useNavigate } from "react-router-dom";
import "react-quill/dist/quill.snow.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import DoneOutlineOutlinedIcon from '@mui/icons-material/DoneOutlineOutlined';
import { getBrands, getColor, getSubCategories, postProduct } from "../../reduser/counter";
import img from "../../assets/img/div.MuiAvatar-root.svg"


const AddProducts = () => {

    const [product, setProduct] = useState({
        Images: "",
        BrandId: "",
        ColorId: "",
        ProductName: "",
        Description: "",
        Quantity: "",
        Code: "",
        Price: "",
        HasDiscount: true,
        DiscountPrice: "",
        SubCategoryId: ""
    });


    const dataColor = useSelector((state) => state.product.dataColor)
    const dispatch = useDispatch()
    console.log(dataColor);
    useEffect(() => {
        dispatch(getColor())
    }, [])


    const dataBrands = useSelector((state) => state.product.dataBrands)
    console.log(dataBrands);
    useEffect(() => {
        dispatch(getBrands())
    }, [])

    const dataSubCategories = useSelector((state) => state.product.dataSubCategories)
    console.log(dataSubCategories);
    useEffect(() => {
        dispatch(getSubCategories())
    }, [])


    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({
            ...product,
            [name]: value
        });
    };

    const handleChangeDescription = (value) => {
        setProduct({
            ...product,
            Description: value
        });
    };


    const handleChangeImg = (e) => {
        const file = e.target.files[0];
        setProduct({
            ...product,
            Images: file
        });
    };


    const navigate = useNavigate();


    return (
        <div className="flex flex-col gap-[24px] p-[28px]">
            <div className="flex items-center justify-between">
                <h1 className="flex items-center gap-[10px] w-[300px] font-[700] text-[24px] text-[#111927]">
                    <Link to={"/dashboard/products"}>
                        <KeyboardBackspaceIcon />
                    </Link>
                    <span>Products / </span>
                    <span>Add new</span>
                </h1>
                <div className="flex gap-[12px] items-center">
                    <Link to={"/dashboard/products"}>
                        <Button variant="outlined">Cancel</Button>
                    </Link>
                    <Button onClick={() => { dispatch(postProduct(product)),navigate("/dashboard/products") }} variant="contained">Save</Button>
                </div>
            </div>
            <section className="flex gap-[40px] items-start">
                <div className="flex flex-col gap-[40px] items-start">
                    <div className="flex flex-col gap-[16px]">
                        <h1 className="text-[#131523]  text-[16px] font-[700]">
                            Information
                        </h1>
                        <div className="flex gap-[16px]">
                            <input value={product.ProductName} onChange={handleChange} name='ProductName' className='w-[443px] h-[45px] border p-[16px] rounded-[4px]' placeholder='Product name' type="text" />
                            <input value={product.Code} onChange={handleChange} name="Code" className='w-[118px] h-[45px] border p-[16px] rounded-[4px]' placeholder='Code' type="text" />
                        </div>
                        <div className="w-[575px] rounded-[4px] h-[230px] overflow-hidden ">
                            <ReactQuill
                                value={product.Description}
                                onChange={handleChangeDescription}
                                theme="snow"
                                style={{ height: "170px", borderRadius: "5px" }}
                                placeholder="Description"
                            />
                        </div>
                    </div>
                    <div className="flex gap-[16px]">
                        <FormControl sx={{ width: "280px" }}>
                            <InputLabel id="demo-simple-select-label">Categories</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label="Age"
                            >
                                {dataSubCategories?.map((el) => {
                                    return (
                                        <MenuItem value={el.id} onClick={() => product.SubCategoryId = el.id}>
                                            <h1>{el.subCategoryName}</h1>
                                        </MenuItem>
                                    )
                                })}
                            </Select>
                        </FormControl>
                        <FormControl sx={{ width: "280px" }}>
                            <InputLabel id="demo-simple-select-label">Brands</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label="Age"
                            >{dataBrands?.map((el) => {
                                return (

                                    <MenuItem value={el.id} onClick={() => product.BrandId = el.id}>
                                        <h1>{el.brandName}</h1>
                                    </MenuItem>
                                )
                            })}
                            </Select>
                        </FormControl>
                    </div>
                    <div className="flex flex-col gap-[16px] items-start ">
                        <h1 className="text-[#131523] text-[16px] font-[700]">Price</h1>
                        <div className="flex items-start gap-[16px]">
                            <input value={product.Price} onChange={handleChange} name="Price" className='w-[29.2%] h-[45px] border rounded-[5px] px-[10px]' placeholder='Product price' type="number" />
                            <input value={product.DiscountPrice} onChange={handleChange} name="DiscountPrice" className='w-[29.2%] h-[45px] border rounded-[5px] px-[10px]' placeholder='Discount' type="number" />
                            <input value={product.Quantity} onChange={handleChange} name="Quantity" className='w-[29.2%] h-[45px] border rounded-[5px] px-[10px]' placeholder='Count' type="number" />
                        </div>
                        <div className="flex items-center gap-[12px] p-[8px]">
                            <Switch />
                            <h1 className="text-[#131523] text-[16px] font-[400]">
                                Add tax for this product
                            </h1>
                        </div>
                    </div>

                    <div className="flex p-[16px] items-center justify-between w-[580px] rounded-[4px] border">
                        <div className="flex flex-col gap-[4px]">
                            <h1 className="text-[#131523] text-[16px] font-[700]">
                                Different Options
                            </h1>
                            <h1 className="text-[#737373] text-[16px] font-[400]">
                                This product has multiple options
                            </h1>
                        </div>
                        <div className="">
                            <Switch defaultChecked />
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-[28px]">
                    <div className='w-[350px] p-[20px] border rounded-[4px] flex flex-col gap-[22px]'>
                        <div className='flex justify-between'>
                            <p className="text-[#131523] text-[16px] font-[700]">Colors:</p>
                            <p className='text-[#2563EB] text-[14px] font-[500]' onClick={() => { setTheme(true), setColorModal(true) }}>Create New</p>
                        </div>
                        <div className='flex overflow-auto'>
                            {
                                dataColor?.map(el =>
                                (
                                    <div className='flex items-start justify-between'>
                                        <button type='button' onClick={() => product.ColorId = el.id} className='w-[50px] h-[40px] rounded-full focus:border-[3px] focus:border-[#000] border border-[gray]' style={{ backgroundColor: el.colorName }}></button>
                                        <div className='flex flex-col items-center w-[20%]'>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    <div className="border border-[#D9E1EC] rounded-[4px] flex flex-col gap-[22px] p-[20px]">
                        <div className="">
                            <h1 className='text-[20px] font-[600] font-serif'>Tags</h1>
                        </div>
                        <div className="flex justify-between mt-[5%]">
                            <input className='w-[80%] border rounded-[5px] h-[45px] pl-[10px]' type="text" placeholder='Tags name ' />
                            <button className='text-[#1E5EFF] border w-[18%] rounded-[5px] border-[#1E5EFF] '><DoneOutlineOutlinedIcon /></button>
                        </div>
                    </div>
                    <div className="border border-dashed p-[20px_0px] border-[#A1A7C4] rounded-[4px]">
                        <div className="p-[0px_30px] flex flex-col gap-[8px] justify-center items-center">
                            <div>
                                <label htmlFor="fileInput" className="cursor-pointer">
                                    <img src={img} alt="Drag and drop your image" className="w-[40px] h-[40px]" />
                                </label>
                                <input
                                    id="fileInput"
                                    onChange={handleChangeImg}
                                    type="file"
                                    accept="image/*"
                                    className="hidden"
                                />
                            </div>
                            <div className="flex flex-col justify-center items-center">
                                <p className="text-[#111927] text-[12px] font-[600]"><span className="underline">Click to upload</span> or drag and drop</p>
                                <p className="text-[#6C737F] text-[10px] font-[400] ">(SVG, JPG, PNG, or gif maximum 900x400)</p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default AddProducts;
