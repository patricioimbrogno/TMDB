import { Button } from '@mui/material';
import React from 'react'
import { useDispatch } from "react-redux";
import { logOut } from "../state/user";
import axios from 'axios'

const LogOut = () => {

const dispatch = useDispatch();

const handleLogOut = () => {

axios.post("/api/users/logout")
.then(()=>dispatch(logOut({user:null, loggedInUser:false})))
.catch((err)=>console.log(err))
}

  return (
    <div>
    {<Button variant="outlined" onClick={handleLogOut}>
      Cerrar sesión
    </Button>}
  </div>
  )
}

export default LogOut