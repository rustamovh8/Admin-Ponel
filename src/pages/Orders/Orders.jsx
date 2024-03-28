import { Button, TableContainer, TextField } from "@mui/material";
import { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.white,
        color: theme.palette.common.gray,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('#12512B', "May 5, 4:20 PM", "Tom Anderson", "Paid", "Ready"),
    createData('#12512B', "May 5, 4:20 PM", "Tom Anderson", "Paid", "Ready"),
    createData('#12512B', "May 5, 4:20 PM", "Tom Anderson", "Paid", "Ready"),
    createData('#12512B', "May 5, 4:20 PM", "Tom Anderson", "Paid", "Ready"),
    createData('#12512B', "May 5, 4:20 PM", "Tom Anderson", "Paid", "Ready"),
    createData('#12512B', "May 5, 4:20 PM", "Tom Anderson", "Paid", "Ready"),
    createData('#12512B', "May 5, 4:20 PM", "Tom Anderson", "Paid", "Ready"),

];



const Orders = () => {

    const navigat = useNavigate()

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <div className="p-[28px] flex flex-col gap-[40px] sm:w-[400px]">
            <div className="flex justify-between ">
                <h1 className="text-[#111927] text-[24px] font-[700] sm:text-[20px]">Orders</h1>
                <Button variant="contained" sx={{ fontSize: "12px" }}>Add order</Button>
            </div>
            <div className="flex flex-col gap-[24px]">
                <div className="flex items-start gap-[12px]">
                    <TextField id="outlined-basic" label="Search..." variant="outlined" />
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
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 1000 }} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>
                                    <div className="flex gap-[10px] items-center">
                                        <input type="checkbox" />
                                        <h1 className="text-[#5A607F] font-[400] text-[14px] sm:w-[110px]">Order</h1>
                                    </div>
                                </StyledTableCell>
                                <StyledTableCell>
                                    <h1 className="text-[#5A607F] font-[400] text-[14px] sm:w-[110px] sm:text-center">
                                        Date
                                    </h1>
                                </StyledTableCell>
                                <StyledTableCell>Customer</StyledTableCell>
                                <StyledTableCell><h1 className="text-[#5A607F] font-[400] text-[14px] sm:w-[110px]">Payment status</h1></StyledTableCell>
                                <StyledTableCell>
                                    <h1 className="text-[#5A607F] font-[400] text-[14px] sm:w-[110px]">
                                        Order Status
                                    </h1>
                                </StyledTableCell>
                                <StyledTableCell>
                                    <h1 className="text-[#5A607F] font-[400] text-[14px] sm:w-[110px]">
                                        Total
                                    </h1>
                                </StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <StyledTableRow key={row.name}>
                                    <StyledTableCell component="th" scope="row">
                                        <div className="flex items-center gap-[10px]">
                                            <input type="checkbox" />
                                            <h1 className="text-[#131523] font-[500] text-[14px]">{row.name}</h1>
                                        </div>
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        <h1 className="text-[#131523] font-[500] text-[14px] sm:w-[110px]">{row.calories}</h1>
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        <h1 className="text-[#131523] font-[500] text-[14px] sm:w-[110px]">
                                            {row.fat}
                                        </h1>
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        <div className="bg-[#C4F8E2] w-[45px] h-[24px] rounded-[4px] flex items-center justify-center ">
                                            <h1 className="text-[#06A561] text-[14px] font-[400] ">{row.carbs}</h1>
                                        </div></StyledTableCell>
                                    <StyledTableCell>
                                        <div className="bg-[#F99600] w-[58px] h-[24px] rounded-[4px] flex items-center justify-center">
                                            <h1 className="text-[#FFF] text-[14px] font-[400]">{row.protein}</h1>
                                        </div>
                                    </StyledTableCell>
                                    <StyledTableCell><h1 className="text-[#131523] text-[14px] font-[400]">$49.90</h1></StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    );
};

export default Orders