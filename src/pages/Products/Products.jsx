import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, IconButton, TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { deleteProduct, getProductUserId } from "../../reduser/counter";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Link } from "react-router-dom";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";

const Products = () => {
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.grey,
      color: theme.palette.common.black,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  const [search, setSearch] = useState('');

  const dispatch = useDispatch();
  const product = useSelector((state) => state.product.data);
  console.log(product);
  useEffect(() => {
    dispatch(getProductUserId());
  }, []);
  const imgUrl = import.meta.env.VITE_APP_FILES_URL;

  return (
    <div className="p-[28px] flex flex-col gap-[40px] sm:w-[400px]">
      <div className="flex justify-between items-center">
        <h1 className="text-[24px] text-[#111927] font-[700] sm:text-[20px]">Products</h1>
        <Link to={"/dashboard/products/addproducts"}>
          <Button variant="contained" >
            <AddIcon sx={{fontSize:"20px"}}/> Add order
          </Button>
        </Link>
      </div>
      <div>
        <div className="flex items-start gap-[12px]">
          <TextField id="outlined-basic" value={search}
            onChange={(e) => setSearch(e.target.value)} label="Search..." variant="outlined" />
          <FormControl sx={{ width: "150px" }}>
            <InputLabel id="demo-simple-select-label">Filter</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              // value={age}
              label="Age"
            // onChange={handleChange}
            >
              <MenuItem value={10}></MenuItem>
              <MenuItem value={20}></MenuItem>
              <MenuItem value={30}></MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 1000 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>
                <div className="flex items-center gap-[10px]">
                  <input type="checkbox" />
                  <h1 className="text-[#5A607F] text-[14px] font-[400]">
                    Product
                  </h1>
                </div>
              </StyledTableCell>
              {/* <StyledTableCell align="left"></StyledTableCell> */}
              <StyledTableCell align="left"><h1 className="text-[#5A607F] font-[400] text-[14px]">Inventory</h1></StyledTableCell>
              <StyledTableCell align="left"><h1 className="text-[#5A607F] font-[400] text-[14px]">Category</h1></StyledTableCell>
              <StyledTableCell align="left">
                <h1 className="text-[#5A607F] font-[400] text-[14px]">
                  Price
                </h1>
              </StyledTableCell>
              <StyledTableCell align="center"><h1 className="text-[#5A607F] font-[400] text-[14px] ">Action</h1></StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {product
              .filter((el) => {
                return el.productName.toLowerCase().trim().includes(search)
              })
              ?.map((el) => (
                <StyledTableRow key={el.id}>
                  <StyledTableCell component="th" scope="row">
                    <div className="flex items-center gap-[10px]">
                      <input type="checkbox" name="" id="" />
                      <div className="flex items-center gap-[10px]">
                        <img
                          className="w-[59px] h-[48px]"
                          src={`${imgUrl}${el.image}`}
                          alt=""
                        />
                        <h1 className="text-[#131523] font-[500] text-[14px]">{el.productName}</h1>
                      </div>
                    </div>
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    <h1 className="text-[#131523] font-[400] text-[14px]">
                      {el.quantity} in stock
                    </h1>
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    <h1 className="text-[#131523] text-[14px] font-[400]">
                      Phone
                    </h1>
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    <h1 className="text-[#131523] font-[400] text-[14px]">
                      {el.price}$
                    </h1>
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <div>
                      <IconButton>
                        <BorderColorOutlinedIcon sx={{ color: "#1E5EFF" }} />
                      </IconButton>
                      <IconButton onClick={() => dispatch(deleteProduct(el.id))}>
                        <DeleteOutlineIcon sx={{ color: "red" }} />
                      </IconButton>
                    </div>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Products;
