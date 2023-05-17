import { Box, Button, Container, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const SignUp = () => {
  const [signUpData, setSignUpData] = useState({});
  const navigate = useNavigate();

  const handleOnchange = (e) => {
    const newSignUpData = { ...signUpData };
    newSignUpData[e.target.name] = e.target.value;
    setSignUpData(newSignUpData);
  };
  const handleSignUpSubmit = async (e) => {
    e.preventDefault();
    try {
      const baseUrl = `${import.meta.env.VITE_BASE_URL}/user/signup`;
      const res = await axios.post(baseUrl, {
        firstName: signUpData.firstName,
        lastName: signUpData.lastName,
        email: signUpData.email,
        password: signUpData.password,
      });
      toast.success("Account Created Successfully!! Please login");
      navigate("/login");
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
      <Box component="form" onSubmit={handleSignUpSubmit}>
        <Typography variant="h3" gutterBottom>
          Sign Up
        </Typography>
        <div>
          <TextField
            sx={{ mr: 2, mb: 1 }}
            required
            id="outlined-firstName-required"
            label="First Name"
            name="firstName"
            onChange={handleOnchange}
          />
          <TextField
            sx={{ mb: 1 }}
            required
            id="outlined-lastName-required"
            label="Last Name"
            name="lastName"
            onChange={handleOnchange}
          />
        </div>
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
            autoComplete="current-password"
            name="password"
            onChange={handleOnchange}
          />
        </div>
        <div>
          <TextField
            sx={{ my: 1 }}
            required
            fullWidth
            id="outlined-confirmPassword-required"
            label="Confirm Password"
            type="password"
            autoComplete="current-password"
            name="confirmPassword"
            onChange={handleOnchange}
            error={
              signUpData.confirmPassword &&
              signUpData.password !== signUpData.confirmPassword &&
              true
            }
            helperText={
              signUpData.confirmPassword &&
              signUpData.password !== signUpData.confirmPassword &&
              "Password not matched"
            }
          />
        </div>
        <Typography
          variant="body1"
          sx={{ display: "flex", alignItems: "center", my: 1 }}
          gutterBottom
        >
          Already have an account?
          <Link to="/login">
            <Button type="btn" sx={{ ml: 1 }}>
              Login
            </Button>
          </Link>
        </Typography>
        <Button type="submit" sx={{ mt: 1 }} fullWidth variant="contained">
          Sign up
        </Button>
      </Box>
    </Container>
  );
};

export default SignUp;
