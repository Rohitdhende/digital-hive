import React from "react";
import BreadCrumb from "../../components/BreadCrumb";
import InnerBreadCrumb from "../../components/InnerBreadCrumb";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

const CreatePage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
      gap={2}
    >
      <BreadCrumb />
      <InnerBreadCrumb />
      <Outlet/>
    </Box>
  );
};

export default CreatePage;
