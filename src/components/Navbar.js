import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import axios from "axios";
import { Modal } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

let TOKEN = "";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "95%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
export default function ButtonAppBar({ isloggedIn }) {
  const [open, setOpen] = React.useState(false);
  const [userdata, setUserdata] = React.useState();
  const navigate = useNavigate();

  const successNotify = () => toast.warn("Logging out",{
    position:'bottom-center'

  });
 
  const handleClose = () => setOpen(false);

  const handleOpen = () => setOpen(true);

  
  const  showProfile = (_token)=>{
    axios
      .get(`users/me/`, {
        headers: { Authorization: `Bearer ${_token}` },
      })
      .then((res) => {
        setUserdata(res.data);
      });
  }
const execute =()=>{
  localStorage.setItem("isLoggedIn", false);
    localStorage.removeItem('token')
    localStorage.removeItem('RefreshToken')
    localStorage.removeItem('property_id')
    window.location.reload();
    navigate("/");
}
  const logout = () => {
    successNotify()
  setTimeout(execute,3000)
  };
  React.useEffect(() => {
    if(isloggedIn === true){
    TOKEN = localStorage.getItem("token");
    showProfile(TOKEN);
    }
  }, [isloggedIn]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          ></IconButton>
          {isloggedIn ? (
            <>
              <Typography component="div" sx={{ flexGrow: 1 }}>
                <Button color="inherit" onClick={handleOpen}>
                  {" "}
                  Operator Details
                </Button>



                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>
                    <h2 className="font-bold text-xl mb-4">User Profile</h2>

                    <p className="font-bold">
                      {" "}
                      Full Name {" "}
                      <span className="font-medium pl-4">
                         : {userdata?.first_name} {userdata?.last_name}
                      </span>{" "}
                    </p>
                    <p className="font-bold ">
                      {" "}
                      Email ID {" "}
                      <span className="font-medium pl-8">: {userdata?.email}</span>{" "}
                    </p>
                    <p className="font-bold">
                      {" "}
                      Operator ID {" "}
                      <span className="font-medium pl-1">: {userdata?.user_id}</span>{" "}
                    </p>
                    <p className="font-bold">
                      {" "}
                      Mobile No {" "}
                      <span className="font-medium pl-3">: {userdata?.mobile}</span>{" "}
                    </p>
                    <p className="font-bold">
                      {" "}
                      Gender {" "}
                      <span className="font-medium pl-9">: {userdata?.gender}</span>{" "}
                    </p>
                 
                  </Box>
                </Modal>
              </Typography>
              <Button  color="inherit" onClick={logout}>
                LogOut
              </Button>{" "}
            </>
          ) : (
            <h2 className="font-bold text-xl ml-2">Society Survey Form </h2>
          )}
        </Toolbar>
      </AppBar>
        <ToastContainer autoClose={1500}/>
    </Box>
  );
}
