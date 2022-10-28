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
import { setUsuario } from "../state/user";


const Register = () => {
  const initialState = { user: "", email: "", password: ""};
  const [open, setOpen] = useState(false);
  const [newUser, setNewUser] = useState(initialState)
  const [repeatPassword, setRepeatPassword] = useState("");
  const dispatch = useDispatch();

  const handleClick = () => {
    setOpen(!open);
  };

  const handleInput = (e) => {
    const inputName = e.target.id;
    const inputValue = e.target.value;
    setNewUser({ ...newUser, [inputName]: inputValue });
  }


  const handleRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newUser.password === repeatPassword) {
      handleClick()
      axios
        .post("/api/users", newUser)
        .then((userInfo) => dispatch(setUsuario(userInfo.data)))
        .catch((err) => console.log(err))
    } else {
      alert("Las contraseñas no coinciden");
    }
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClick}>
        Registrarse
      </Button>
      <Dialog open={open} onClose={handleClick}>
        <DialogTitle> Complete sus datos de registro</DialogTitle>
        <DialogContent>
          <TextField
            onChange={handleInput}
            autoFocus
            margin="dense"
            id="user"
            name="user"
            label="Usuario"
            value={newUser.user}
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            onChange={handleInput}
            margin="dense"
            id="email"
            name="email"
            value={newUser.email}
            label="Email"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            onChange={handleInput}
            margin="dense"
            value={newUser.password}
            id="password"
            name="password"
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
          <Button onClick={handleClick}>Cancelar</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Register;
