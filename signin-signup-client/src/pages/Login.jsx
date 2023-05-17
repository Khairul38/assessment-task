import { Box, Button, Container, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const navigate = useNavigate();

  const handleOnchange = (e) => {
    const newLoginData = { ...loginData };
    newLoginData[e.target.name] = e.target.value;
    setLoginData(newLoginData);
  };
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const baseUrl = `${import.meta.env.VITE_BASE_URL}/auth/login`;
      const res = await axios.post(baseUrl, loginData);
      localStorage.setItem("token", res.data.token);
      toast.success("Login successful");
      navigate("/");
    } catch (error) {
      if (error.response.status == 401) toast.warn(error.response.data.message);
    }
  };

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "90vh",
      }}
    >
      <Box component="form" sx={{ width: 460 }} onSubmit={handleLoginSubmit}>
        <Typography variant="h3" gutterBottom>
          Login
        </Typography>
        <div>
          <TextField
            sx={{ my: 1 }}
            required
            fullWidth
            id="outlined-email-required"
            label="Email"
            name="email"
            onChange={handleOnchange}
          />
        </div>
        <div>
          <TextField
            sx={{ my: 1 }}
            required
            fullWidth
            id="outlined-password-required"
            label="Password"
            type="password"
            name="password"
            onChange={handleOnchange}
            autoComplete="current-password"
          />
        </div>
        <Typography
          variant="body1"
          sx={{ display: "flex", alignItems: "center", my: 1 }}
          gutterBottom
        >
          Don’t you have an account?
          <Link to="/signup">
            <Button sx={{ ml: 1 }}>Sign Up</Button>
          </Link>
        </Typography>
        <Button type="submit" sx={{ mt: 1 }} fullWidth variant="contained">
          Login
        </Button>
      </Box>
    </Container>
  );
};

export default Login;
