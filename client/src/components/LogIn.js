import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import axios from "axios";
import { setUsuario } from "../state/user";


const LogIn = () => {
  const initialState = { email: "", password: ""};
  const [user, setUser] = useState(initialState)
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const users = useSelector(state => state.users)


  const handleClick = () => {
    setOpen(!open);
  };

  const handleInput = (e) => {
    const inputName = e.target.id;
    const inputValue = e.target.value;
    setUser({ ...user, [inputName]: inputValue });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    handleClick();
    axios
      .post("/api/users/login", user)
      .then((userData) => dispatch(setUsuario(userData.data)))
      .catch(() => alert('Los datos ingresados no son correctos'));
  };

  return (
    <div>
      {!users.loggedInUser?( <Button variant="outlined" onClick={handleClick}>
        Iniciar sesión
      </Button>):(<Button variant="outlined">
        {users.user.user}
      </Button>)}
      <Dialog open={open} onClose={handleClick}>
        <DialogTitle> Ingrese su mail y contraseña</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="email"
            label="Email"
            type="email"
            value={user.email}
            fullWidth
            variant="standard"
            onChange={handleInput}
          />

          <TextField
            margin="dense"
            value={user.password}
            id="password"
            label="Contraseña"
            type="password"
            fullWidth
            variant="standard"
            onChange={handleInput}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSubmit}>Ingresar</Button>
          <Button onClick={handleClick}>Cancelar</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default LogIn;
