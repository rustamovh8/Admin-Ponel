import { Box, Button, IconButton, Modal, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AddIcon from "@mui/icons-material/Add";
import { useDispatch, useSelector } from 'react-redux';
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import { deleteCategories, getCategories, postCategory, putCategories } from '../../reduser/counter';
import img from "../../assets/img/div.MuiAvatar-root.svg"
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  width: 400,
  borderRadius: 2,
};


const Other = () => {
  const dispatch = useDispatch()
  const dataCategories = useSelector((state) => state.product.dataCategories)
  console.log(dataCategories);

  useEffect(() => {
    dispatch(getCategories())
  }, [])
  const imgUrl = import.meta.env.VITE_APP_FILES_URL;


  const [openEdit, setOpenEdit] = useState(false);
  const handleCloseEdit = () => setOpenEdit(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  let [imgCategories, setimgCategories] = useState("")
  let [nameCategories, setnameCategories] = useState("")
  let [idx, setIdx] = useState(null)

  const [product, setProduct] = useState({
    Images: "",
    ProductName: "",
  });

  const handleChangeImages = (e) => {
    const file = e.target.files[0];
    setProduct({
      ...product,
      Images: file
    });
  };

  const handleChangeCategories = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value
    });
  };

  const handleOpenEdit = (el) => {
    setOpenEdit(true)
    setnameCategories(el.categoryName)
    setimgCategories(el.categoryImage)
    setIdx(el.id)
  };

  const [search, setSearch] = useState('');

  return (
    <div className='p-[28px] flex flex-col gap-[40px] sm:p-[20px]'>
      <div className="flex justify-between items-center">
        <div className="flex items-start gap-[8px]">
          <Link className='bg-[#DBEAFE] text-[#1D4ED8] p-[8px_16px] rounded-[4px]' to={"/dashboard/other"} ><h1 className='text-[16px] font-[500]'>Categories</h1></Link>
          <Link className='text-[#262626]  focus:bg-[#DBEAFE] focus:text-[#1D4ED8] p-[8px_16px] rounded-[4px]' to={"/dashboard/other/brands"} ><h1 className='text-[16px] font-[500]'>Brands</h1></Link>
          <Link className='text-[#262626]  focus:bg-[#DBEAFE] focus:text-[#1D4ED8] p-[8px_16px] rounded-[4px]' to={"/dashboard/other/banners"} ><h1 className='text-[16px] font-[500]'>Banners</h1></Link>
        </div>
        <div className='flex sm:hidden'>
          <Button variant="contained" onClick={() => handleOpen()}><AddIcon /> Add new</Button>
        </div>
      </div>
      <div className='flex items-center gap-[10px]'>
        <TextField
          id="outlined-basic"
          label="Search..."
          variant="outlined"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          sx={{ width: "200px" }}
        />
        <div className='hidden sm:flex'>
          <Button variant="contained" onClick={() => handleOpen()} sx={{ width: "130px" }}><AddIcon /> Add new</Button>
        </div>
      </div>

      <section>
        <div className='grid grid-cols-5 gap-[16px] sm:grid sm:grid-cols-2'>
          {dataCategories
            .filter((el) => {
              return el.categoryName.toLowerCase().trim().includes(search)
            })
            ?.map((el) => {
              return (
                <div className='p-[24px_20px] flex flex-col gap-[16px] border rounded-[4px] justify-center items-start'>
                  <div className='flex w-[140px]  justify-between items-start'>
                    {
                      el.categoryImage == "" || el.categoryImage == null ?
                        <img className='w-[56px] h-[56px]' src="https://cdn4.vectorstock.com/i/1000x1000/66/58/icons-of-products-categories-white-and-color-vector-9016658.jpg" alt="" /> :
                        <img className='w-[56px] h-[56px]' src={`${imgUrl}${el?.categoryImage}`} alt="" />
                    }
                    <div className='flex flex-col'>
                      <IconButton onClick={() => { handleOpenEdit(el), setIdx(el.id) }} >
                        <BorderColorOutlinedIcon sx={{ color: "#1E5EFF", fontSize: "17px" }} />
                      </IconButton>
                      <IconButton onClick={() => dispatch(deleteCategories(el.id))}>
                        <DeleteOutlineIcon sx={{ color: "#F04438", fontSize: "18px" }} />
                      </IconButton>
                    </div>
                  </div>
                  <div>
                    <h1 className='text-[#000] font-[400] text-[16px]'>{el?.categoryName}</h1>
                  </div>
                </div>
              )
            })}
        </div>
      </section>



      <Modal
        open={openEdit}
        onClose={handleCloseEdit}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className='flex flex-col gap-[24px]'>
            <div className='flex justify-between items-center'>
              <h1 className='text-[#131523] text-[20px] font-[700]'>Edit category</h1>
              <svg onClick={handleCloseEdit} xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.69398 0.306019C10.102 0.714045 10.102 1.37559 9.69398 1.78361L6.47833 4.99926L9.69398 8.21639C10.102 8.62441 10.102 9.28595 9.69398 9.69398C9.28595 10.102 8.62441 10.102 8.21639 9.69398L5.00074 6.47685L1.78361 9.69398C1.37559 10.102 0.714045 10.102 0.306019 9.69398C-0.102006 9.28595 -0.102006 8.62441 0.306019 8.21639L3.52315 4.99926L0.306019 1.78361C-0.102006 1.37559 -0.102006 0.714045 0.306019 0.306019C0.714045 -0.102006 1.37559 -0.102006 1.78361 0.306019L5.00074 3.52167L8.21639 0.306019C8.62441 -0.102006 9.28595 -0.102006 9.69398 0.306019Z" fill="#7E84A3" />
              </svg>
            </div>

            <input value={nameCategories} onChange={(e) => setnameCategories(e.target.value)} className='p-[16px] border w-[333px] rounded-[4px]' placeholder='Product name' type="text" />

            <div className="border border-dashed p-[20px_0px] border-[#A1A7C4] rounded-[4px]">
              <div className="p-[0px_30px] flex flex-col gap-[8px] justify-center items-center">
                <div>
                  <label htmlFor="fileInput" className="cursor-pointer">
                    <img src={img} alt="Drag and drop your image" className="w-[40px] h-[40px]" />
                  </label>
                  <input
                    id="fileInput"
                    onChange={(e) => setimgCategories(e.target.files[0])}
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
            <div className='flex gap-[12px] items-end justify-end'>
              <Button onClick={handleCloseEdit} variant="outlined">Cancel</Button>
              <Button onClick={() => { dispatch(putCategories({ Id: idx, CategoryImage: imgCategories, CategoryName: nameCategories })), handleCloseEdit() }} variant="contained">Create</Button>
            </div>
          </div>
        </Box>
      </Modal>


      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className='flex flex-col gap-[24px]'>

            <div className='flex justify-between items-center'>
              <h1 className='text-[#131523] text-[20px] font-[700]'>Add category</h1>
              <svg onClick={handleClose} xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.69398 0.306019C10.102 0.714045 10.102 1.37559 9.69398 1.78361L6.47833 4.99926L9.69398 8.21639C10.102 8.62441 10.102 9.28595 9.69398 9.69398C9.28595 10.102 8.62441 10.102 8.21639 9.69398L5.00074 6.47685L1.78361 9.69398C1.37559 10.102 0.714045 10.102 0.306019 9.69398C-0.102006 9.28595 -0.102006 8.62441 0.306019 8.21639L3.52315 4.99926L0.306019 1.78361C-0.102006 1.37559 -0.102006 0.714045 0.306019 0.306019C0.714045 -0.102006 1.37559 -0.102006 1.78361 0.306019L5.00074 3.52167L8.21639 0.306019C8.62441 -0.102006 9.28595 -0.102006 9.69398 0.306019Z" fill="#7E84A3" />
              </svg>
            </div>

            <input value={product.ProductName} onChange={handleChangeCategories} name='ProductName' className='p-[16px] border w-[333px] rounded-[4px]' placeholder='Product name' type="text" />

            <div className="border border-dashed p-[20px_0px] border-[#A1A7C4] rounded-[4px]">
              <div className="p-[0px_30px] flex flex-col gap-[8px] justify-center items-center">
                <div>
                  <label htmlFor="fileInput" className="cursor-pointer">
                    <img src={img} alt="Drag and drop your image" className="w-[40px] h-[40px]" />
                  </label>
                  <input
                    id="fileInput"
                    onChange={handleChangeImages}
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
            <div className='flex gap-[12px] items-end justify-end'>
              <Button onClick={handleClose} variant="outlined">Cancel</Button>
              <Button onClick={() => { dispatch(postCategory(product)), handleClose() }} variant="contained">Create</Button>
            </div>
          </div>
        </Box>
      </Modal>

    </div >
  )
}

export default Other
