import React, { useState } from "react";
import {
  TextField,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  OutlinedInput,
  InputLabel,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Login = ({ setIsloggedIn }) => {
  const navigate = useNavigate();
  const [mobileNo, setMobileNo] = useState("");
  const [pin, setPin] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const successNotify = () =>
    toast.success("Login Successfull!", {
      position: "bottom-center",
    });
  const failedNotify = () =>
    toast.error("Login failed! check credentials", {
      position: "bottom-center",
    });
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const data = { mobile: +mobileNo, password: +pin };
    axios
      .post("token/", data)
      .then((res) => {
        localStorage.setItem("token", res.data.access);
        localStorage.setItem("RefreshToken", res.data.refresh);
        localStorage.setItem("isLoggedIn", true);
        setIsloggedIn(true);
        successNotify();
        navigate("/dashboard");
      })
      .catch((err) => {
        console.log(err);
        failedNotify();
      });
  };

  return (
    <div className="lg:px-48 bg-white">
      <form
        onSubmit={(e) => {
          onSubmit(e);
        }}
        className='" px-8 p-4 pt-20 border-solid border-1 border-sky-500'
      >
        <h1 className="text-2xl font-semibold mb-5">Operator Login</h1>

        <div className="my-5">
          <FormControl fullWidth>
            <TextField
              value={mobileNo}
              onChange={(e) => setMobileNo(e.target.value)}
              className="my-2"
              fullWidth
              id="outlined-basic"
              label="Mobile Number"
              variant="outlined"
            />
          </FormControl>
        </div>

        <div className="my-5">
          <FormControl variant="outlined" fullWidth>
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              value={pin}
              onChange={(e) => setPin(e.target.value)}
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
              label="Password"
            />
          </FormControl>
        </div>

        <ToastContainer autoClose={2000} />
        <div className="flex justify-end">
          <Button type="submit" variant="outlined">
            Login
          </Button>
        </div>
      </form>
    </div>
      )
 
};

export default Login;
