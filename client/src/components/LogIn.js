import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import axios from "axios";
import { setUser } from "../state/user";


const LogIn = () => {

  const users = useSelector(state => state.users)
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleClose();
    axios
      .post("/api/users/login", { email, password })
      .then((user) => dispatch(setUser(user.data)))
      .catch(() => alert('Los datos ingresados no son correctos'));
  };


  return (
    <div>
      {!users.loggedInUser?( <Button variant="outlined" onClick={handleClickOpen}>
        Iniciar sesión
      </Button>):(<Button variant="outlined">
        {users.user.user}
      </Button>)}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle> Ingrese su mail y contraseña</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="email"
            label="Email"
            type="email"
            value={email}
            fullWidth
            variant="standard"
            onChange={handleEmail}
          />

          <TextField
            margin="dense"
            value={password}
            id="password"
            label="Contraseña"
            type="password"
            fullWidth
            variant="standard"
            onChange={handlePassword}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSubmit}>Ingresar</Button>
          <Button onClick={handleClose}>Cancelar</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default LogIn;
