import { useFormik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import { axiosRequest } from "../../utils/axiosRequest";
import "../../App.css";
import { saveToken } from "../../utils/token";
import logo from "../../assets/img/Group 1116606595.svg"
import { FormControl, IconButton, InputAdornment, OutlinedInput, TextField } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const Login = () => {
  let API = import.meta.env.VITE_APP_API_URL;

  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      userName: "",
      password: "",
    },
    onSubmit: async () => {
      try {
        let { data } = await axiosRequest.post(
          `${API}Account/login`,
          formik.values
        );
        if (data.statusCode == 200) {

          saveToken(data.data);
          navigate("/dashboard");
        }
      } catch (error) {
        console.log(error);
      }
    },
  });

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const [showPassword, setShowPassword] = React.useState(false);


  return (
    <div className="flex">
      <div className="bg h-[100vh] w-[50%] flex flex-col justify-center pl-[70px] sm:hidden ">
        <h1 className="text-[#FFF] text-[24px] font-[500] sm:text-[16px]">Welcome to admin panel</h1>
        <img className="w-[344px] sm:w-[200px]" src={logo} alt="" />
      </div>
      <div className="w-[50%] flex flex-col gap-[10px] justify-center items-center sm:hidden">
        <h1 className="text-[#111927] text-[24px] font-[700]">Log in</h1>
        <div className="w-[50%] text-center">
          <form className="flex flex-col justify-center gap-[10px]" onSubmit={formik.handleSubmit}>
            <TextField id="outlined-basic"
              name="userName"
              value={formik.values.userName}
              onChange={formik.handleChange}
              placeholder="userName"
              variant="outlined" />
            <FormControl variant="outlined">
              <OutlinedInput
                placeholder="Password"
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            <input
              value={"Forget Password?"}
              className="w-[80%] sm:w-[90%] text-[#2563EB] text-[18px] font-[600]  block m-[auto] bg-[transparent] h-[60px] mt-[10px]"
              type="button"
            />
            <button
              type="submit"
              className="w-[80%] cursor-pointer sm:w-[90%] text-[18px] font-[600] text-[white] block m-[auto] bg-[#2563EB] rounded-[4px] h-[60px]"
            >
              Log In
            </button> 
          </form>
        </div>
      </div>

      <div className="bg p-[20px_0px] hidden flex-col justify-center gap-[40px] w-[400px] h-screen sm:flex">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-[#FFF] text-[24px] font-[500] sm:text-[16px]">Welcome to admin panel</h1>
          <img className="w-[150px]" src={logo} alt="" />
        </div>
        <div className="flex flex-col gap-[10px] sm:w-[100%] ">
          <h1 className="text-[#FFF] text-center text-[24px] font-[700] sm:text-[16px]">Log in</h1>
          <form className="flex flex-col items-center" onSubmit={formik.handleSubmit}>
            {/* <TextField
              placeholder="userName"
              name="userName"
              value={formik.values.userName}
              onChange={formik.handleChange}
              type="text"
            /> */}
            <TextField id="outlined-basic"
              sx={{ backgroundColor: "#FFF", margin: "10px 0px", width: "65%", borderRadius: "4px" }}
              name="userName"
              value={formik.values.userName}
              onChange={formik.handleChange}
              placeholder="userName"
              variant="outlined" />
            {/* <input
              name="userName"
              onChange={formik.handleChange}
              value={formik.values.userName}
              className="w-[80%] text-[20px] text-[gray] mt-[10px] outline-none block m-[auto] h-[60px] border-[2px] rounded-[4px] p-[16px] sm:w-[70%]"
              placeholder="userName"
              type="text"
            /> */}
            <FormControl variant="outlined">
              <OutlinedInput
                sx={{ backgroundColor: "#FFF" }}
                placeholder="Password"
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            <input
              value={"Forget Password?"}
              className="w-[80%] sm:w-[70%] text-[#2563EB] text-[18px] font-[600]  block m-[auto] bg-[transparent] h-[60px] mt-[10px]"
              type="button"
            />
            <button
              type="submit"
              className="w-[80%] cursor-pointer sm:w-[70%] text-[18px] font-[600] text-[white] block m-[auto] bg-[#2563EB] rounded-[4px] h-[60px] mt-[30px]"
            >
              Log In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
