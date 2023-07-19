import { Box, Typography } from "@mui/material";
import React from "react";
import Tag from "../Tag";
import "./LGU.scss";
import AttachmentIcon from "@mui/icons-material/Attachment";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useNavigate } from "react-router-dom";

const LGU = (props) => {
  const { tag, attachmentCount, slug, description, date, color } = props;
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "inline-flex",
        // height: "154px",
        padding: "16px",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "20px",
        flexShrink: 0,
        boxShadow: "0px 2px 5px 0px rgba(230, 237, 244, 0.50)",
        border: "1px solid  #F3F3F3",
      }}
    >
      <Box
        sx={{
          display: "flex",
          width: "367px",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Tag text={tag} color={color} />
        <Typography
          sx={{
            color: "#B4C5D2",
            textAlign: "right",
            fontFamily: "Arial",
            fontSize: "14px",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "normal",
          }}
        >
          {date}
        </Typography>
      </Box>

      <Typography
        className="line-clamp"
        sx={{
          color: "#333",
          fontFamily: "Arial",
          fontSize: "14px",
          fontStyle: "normal",
          fontWeight: 400,
          lineHeight: "normal",
          width: "367px",

          flexDirection: "column",
        }}
      >
        {description}
      </Typography>
      <Box
        sx={{ display: "flex", width: "100%", justifyContent: "space-between" }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <AttachmentIcon sx={{ color: "#02A5E2" }} />
          <Typography
            sx={{
              color: "#333",
              fontFamily: "Arial",
              fontSize: "14px",
              fontStyle: "normal",
              fontWeight: 700,
              lineHeight: "normal",
            }}
          >
            {attachmentCount}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "inline-flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "2px",
            cursor: "pointer",
          }}
        >
          <Typography
            sx={{
              color: "#02A5E2",
              fontSize: "16px",
              fontWeight: 900,
              borderBottom: "1.285px solid #02A5E2",
            }}
            onClick={() => navigate(`/${slug}`)}
          >
            Read More
          </Typography>
          <ArrowForwardIosIcon sx={{ fontSize: "0.8rem", color: "#02A5E2" }} />
        </Box>
      </Box>
    </Box>
  );
};

export default LGU;
