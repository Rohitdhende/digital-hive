import { Box } from "@mui/material";
import React from "react";

const Tag = (props) => {
  const { text, color } = props;
  return (
    <Box
      sx={{
        display: "flex",
        padding: "8px",
        alignItems: "center",
        gap: "10px",
        backgroundColor: color,
        color: "#FFF",
        fontFamily: "Arial",
        fontSize: "14px",
        fontStyle: "normal",
        fontWeight: 900,
        lineHeight: "normal",

      }}
    >
      {text}
    </Box>
  );
};

export default Tag;
