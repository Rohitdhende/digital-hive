import { Box, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom/dist";
import Enterprise from "../../assets/images/enterprise.png";
import General from "../../assets/images/general.png";
import Logo from "../../assets/images/logo.png";

const Home = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 4,
        minHeight: "100vh",
      }}
    >
      <Box sx={{ display: "flex" }}>
        <img src={Logo} alt="logo" height="auto" width="100px" />
        <Typography
          sx={{
            fontSize: "26px",
            fontWeight: 700,
            color: "#ED1A3B",
            fontFamily: "Arial",
          }}
        >
          D'LittMan
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography fontWeight={900} color="#333" fontSize="20px">
          Sign in to your account
        </Typography>
        <Box
          sx={{
            color: "#333",
            textAlign: "center",
            fontFamily: "Arial",
            fontSize: "16px",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "24px",
            gap: 0.5,
            display: {
              xs: "none",
              sm: "none",
              md: "flex",
              lg: "flex",
              xl: "flex",
            },
          }}
        >
          Do you want to log in with
          <Typography fontWeight={500} sx={{ cursor: "pointer" }}>
            General User
          </Typography>
          or
          <Typography fontWeight={500} sx={{ cursor: "pointer" }}>
            Enterprise User
          </Typography>
          ?
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 4,
          flexDirection: {
            xs: "column",
            sm: "row",
            md: "row",
            lg: "row",
            xl: "row",
          },
        }}
      >
        <Box sx={{ flex: 1, display: "flex", justifyContent: "center" }}>
          <Box
            sx={{
              width: { xs: "200px", sm: "200px", md: "350px", lg: "350px" },
              border: "2px solid #EFEFEF",
              boxShadow: "3px 13px 17px -11px rgba(0, 0, 0, 0.05)",
              "&:hover": {
                border: "2px solid #35B7E8",
                boxShadow: "13px 13px 37px -11px rgba(0, 0, 0, 0.09)",
              },
            }}
          >
            <img src={General} alt="General" width={"100%"} />
          </Box>
        </Box>
        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
          }}
          onClick={() => navigate("/enterprise-login")}
        >
          <Box
            sx={{
              width: { xs: "200px", sm: "200px", md: "350px", lg: "350px" },
              border: "2px solid #EFEFEF",
              boxShadow: "3px 13px 17px -11px rgba(0, 0, 0, 0.05)",
              "&:hover": {
                border: "2px solid #35B7E8",
                boxShadow: "13px 13px 37px -11px rgba(0, 0, 0, 0.09)",
              },
            }}
          >
            <img src={Enterprise} alt="enterprise" width={"100%"} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
