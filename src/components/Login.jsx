import Alert from '@mui/material/Alert';
// import Swal from 'sweetalert2'

import React, { useState } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import AppStore from './store-mobx/Services';
import ErrorAlert from './ErrorAlert';
function Login() {
  const [password, setPassword] = useState('123456');
  const [userName, setUserName] = useState('admin');
const [errorMassage,setErrorMassage]=useState('')
const [boolError,setBoolError]=useState(false)

  const handleLoginAdmin = async () => {
    setPassword('');
  setUserName('');
    const response = await fetch("http://localhost:8787/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name:userName, password:password }),
    });
if(response.status===200)
{
 
  localStorage.setItem("isAdmin","true");
AppStore.setIsLogin(true);
}
else {
  setInterval((x) => {
      Swal.fire({
  icon: "error",
  title: "Oops...",
  text: "Something went wrong!",
  footer: '<a href="#">Why do I have this issue?</a>'
});
  }, 1000);
  // Swal.fire({
  //   icon: "error",
  //   title: "Oops...",
  //   text: "Something went wrong!",
  //   footer: '<a href="#">Why do I have this issue?</a>'
  // });
   handleErrorMassage();
    setPassword('');
    setUserName('');
}
    const data = await response.text();
    console.log(data);
  };
const handleErrorMassage=()=>{
 setErrorMassage("ERROR");
}
  return (
    <>
    {errorMassage && <Alert severity="error">{errorMassage}</Alert>}

    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        label="name"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <TextField
        label="password"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Stack spacing={2} direction="row">
        <Button variant="outlined" onClick={handleLoginAdmin}>
          Login
        </Button>
      </Stack>
    </Box>
    </>
  );
}

export default Login;