import { Box, Typography } from "@mui/material";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { styled } from "@mui/material/styles";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import BasicTooltip from "../Tooltip";

const Status = (props) => {
  const { type, text, count } = props;

  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    borderRadius: 0,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: "#F3F3F3",
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 0,
      backgroundColor:
        type === "pending"
          ? "#DF8639"
          : type === "upcoming"
          ? "#7E0417"
          : type === "completed"
          ? "#02A5E2"
          : "#2FB696",
    },
  }));

  return (
    <Box
      sx={{
        height: "100%",
        padding: "1rem",
        display: "inline-flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "0.688rem",
        flexShrink: 0,
        backgroundColor: "#fff",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          gap: "1rem",
        }}
      >
        <Box
          sx={{
            padding: "0.625rem",
            display: "flex",
            alignItems: "flex-start",
            gap: "0.625rem",
            backgroundColor:
              type === "pending"
                ? "#FFF0E2"
                : type === "upcoming"
                ? "#FFF3F5"
                : type === "completed"
                ? "rgba(232, 248, 255, 0.70)"
                : "#E2FAF4",
            color:
              type === "pending"
                ? "#DF8639"
                : type === "upcoming"
                ? "#7E0417"
                : type === "completed"
                ? "#02A5E2"
                : "#2FB696",
          }}
        >
          <ContentPasteIcon />
        </Box>
        <Box
          sx={{
            display: "flex",
            // width: "8.125rem",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <Box
            sx={{
              display: "flex",
              height: "1.813rem",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                width: "79px",
                alignItems: "flex-end",
                flex: "1 0 0",
              }}
            >
              <Typography
                sx={{
                  color:
                    type === "pending"
                      ? "#DF8639"
                      : type === "upcoming"
                      ? "#7E0417"
                      : type === "complted"
                      ? "#02A5E2"
                      : "#2FB696",
                  fontFamily: "Arial",
                  fontSize: "2.5rem",
                  fontWeight: 900,
                  lineHeight: "normal",
                }}
              >
                {count}
              </Typography>
              {/* <Box
                sx={{
                  display: "flex",
                  width: "25px",
                  height: "20px",
                  flexDirection: "column",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              > <Typography
                sx={{
                  color: "#333333",
                  fontFamily: "Arial",
                  fontSize: "10.25rem",
                  fontWeight: 400,
                  lineHeight: "normal",
                }}
              >
             /   {12}
              </Typography></Box> */}
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",

              height: "1.188rem",
              flexDirection: "column",
            }}
          >
            <Typography
              sx={{
                display: "flex",
                height: "1.188rem",
                flexDirection: "column",
                color: "#333",
                fontSize: "0.875rem",
              }}
            >
              {text}
            </Typography>
          </Box>
        </Box>
        <Box sx={{ width: "1rem", height: "1rem", flexShrink: 0 }}>
          <BasicTooltip
            title={text}
            color="#333333"
            children={<HelpOutlineIcon fontSize="16.667px" />}
          ></BasicTooltip>
        </Box>
      </Box>
      <Box
        sx={{
          width: "100%",
          height: "0.25rem",
          flexShrink: 0,
          color: "#DF8639",
        }}
      >
        <BorderLinearProgress variant="determinate" value={70} />
      </Box>
    </Box>
  );
};

export default Status;
