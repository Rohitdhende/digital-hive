import { Button, Container } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom/dist";

const Login = () => {
  const navigate = useNavigate();
  return (
    <Container
      sx={{ display: "flex", justifyContent: "center", alignItems: "center", height:'100vh' }}
    >
      <Button onClick={() => navigate("/dashboard")} variant="contained"> Go to Dashboard</Button>
    </Container>
  );
};

export default Login;
