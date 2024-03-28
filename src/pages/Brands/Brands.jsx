import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { deleteBrands, getBrands, postBrand, putBrands } from '../../reduser/counter';
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Box, Button, IconButton, Modal } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  width: 400,
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Brands = () => {
  const [openEdit, setOpenEdit] = useState(false);
  const handleCloseEdit = () => setOpenEdit(false);

  const dispatch = useDispatch();
  const dataBrands = useSelector((state) => state.product.dataBrands)
  console.log(dataBrands);

  useEffect(() => {
    dispatch(getBrands())
  }, [])

  const [product, setProduct] = useState({
    BrandName: "",
  });

  const handleChangeBrands = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value
    });
  };

  const handleChangeEdit = (e) => {
    setbrandsName(e.target.value);
  };

  let [brandsName, setbrandsName] = useState("")
  let [idx, setIdx] = useState(null)

  const handleOpenEdit = (el) => {
    setOpenEdit(true);
    setbrandsName(el.brandName);
    setIdx(el.brandId);
  };

  return (
    <div className='p-[28px] flex flex-col gap-[40px] sm:p-[20px]'>
      <div className="flex justify-between items-center">
        <div className="flex items-start gap-[8px]">
          <Link className='text-[#262626] p-[8px_16px] rounded-[4px]' to={"/dashboard/other"} ><h1 className='text-[16px] font-[500]'>Categories</h1></Link>
          <Link className='bg-[#DBEAFE] text-[#1D4ED8] p-[8px_16px] rounded-[4px]' to={"/dashboard/other/brands"} ><h1 className='text-[16px] font-[500]'>Brands</h1></Link>
          <Link className='text-[#262626]  focus:bg-[#DBEAFE] focus:text-[#1D4ED8] p-[8px_16px] rounded-[4px]' to={"/dashboard/other/banners"} ><h1 className='text-[16px] font-[500]'>Banners</h1></Link>
        </div>
      </div>

      <section className='flex gap-[40px] items-start sm:flex-col-reverse sm:gap-[24px]'>
        <div className='w-[400px] sm:w-[350px]'>
          <div className='p-[16px_0px] flex justify-between border-b-[2px]'>
            <h1 className='text-[#5A607F] text-[16px] font-[400]'>Brands</h1>
            <h1 className='text-[#5A607F] text-[16px] font-[400]'>Action</h1>
          </div>
          {dataBrands?.map((el) => {
            return (
              <div className='flex justify-between p-[16px_0px] items-center border-b'>
                <h1 className='text-[#131523] text-[16px] font-[500]'>{el?.brandName}</h1>
                <div>
                  <IconButton onClick={() => { handleOpenEdit(el), setIdx(el.id) }}>
                    <BorderColorOutlinedIcon sx={{ color: "#1E5EFF", fontSize: "20px" }} />
                  </IconButton>
                  <IconButton onClick={() => dispatch(deleteBrands(el.id))}>
                    <DeleteOutlineIcon sx={{ color: "#F04438", fontSize: "22px" }} />
                  </IconButton>
                </div>
              </div>
            )
          })}
        </div>
        <div className='p-[28px] flex flex-col gap-[24px] w-[524px] rounded-[4px] border sm:w-[350px]'>
          <h1 className='text-[#131523] font-[700] text-[20px] '>Add new brand</h1>
          <input name='BrandName' value={product.BrandName} onChange={handleChangeBrands} type="text" placeholder='Brand name' className='p-[16px] rounded-[4px] border' />
          <div className='flex items-center justify-end'>
            <Button variant='contained' onClick={() => { dispatch(postBrand(product)), product.BrandName = "" }} >Create</Button>
          </div>
        </div>
      </section>



      <Modal
        open={openEdit}
        onClose={handleCloseEdit}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className='flex flex-col gap-[20px]'>
            <h1>Edit Brands</h1>
            <input value={brandsName} name='BrandName' onChange={handleChangeEdit} className='w-[100%] m-auto h-[45px] border rounded-[5px] pl-[10px]' placeholder='Product name' type="text" />
            <div className="flex justify-end mt-[5%]">
              <button onClick={handleCloseEdit} className='font-serif w-[25%] h-[40px] mr-[5%] text-[#1E5EFF] border-[#1E5EFF] border rounded-[5px] bg-[white]'>Cancel</button>
              <button onClick={() => { dispatch(putBrands({ Id: idx, BrandName: brandsName })), handleCloseEdit() }} className='font-serif w-[25%] h-[40px] bg-[#1E5EFF] text-[white]  rounded-[5px] '>Edit</button>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  )
}

export default Brands
