import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUser } from "../state/user";


const Register = () => {
  const [open, setOpen] = useState(false);
  const [userRegistrado, setUserRegistrado] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const dispatch = useDispatch();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleUser = (e) => {
    setUserRegistrado(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      handleClose();
      axios
        .post("/api/users", { user:userRegistrado, email, password })
        .then((user) => dispatch(setUser(user.data)))
        .catch((err) => console.log(err))
    } else {
      alert("Las contraseñas no coinciden");
    }
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Registrarse
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle> Complete sus datos de registro</DialogTitle>
        <DialogContent>
          <TextField
            onChange={handleUser}
            autoFocus
            margin="dense"
            id="user"
            label="Usuario"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            onChange={handleEmail}
            margin="dense"
            id="email"
            label="Email"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            onChange={handlePassword}
            margin="dense"
            id="password"
            label="Contraseña"
            type="password"
            fullWidth
            variant="standard"
          />
          <TextField
            onChange={handleRepeatPassword}
            margin="dense"
            id="repeatPassword"
            label="Confirme su contraseña"
            type="password"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button type="submit" onClick={handleSubmit}>
            Registrarse
          </Button>
          <Button onClick={handleClose}>Cancelar</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Register;
