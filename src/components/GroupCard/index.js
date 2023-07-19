import { Card, Typography, Divider, Box } from "@mui/material";
import React from "react";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import Tooltip from "../Tooltip";
import { greenCircleIcon ,orangeSquareIcon,moronCircle} from "../../customIcons";

const GroupCard = (props) => {
  const { pending, upcoming, due } = props;
  return (
    <Card
      sx={{
        width: "306px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography fontWeight={700} fontSize={"14px"} padding="1rem">
        Reliance Group
      </Typography>
      <Divider />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "1rem",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 0.2 }}>
          {greenCircleIcon}
          <Typography
            sx={{ fontSize: "14px", paddingLeft: "0.5rem" }}
            fontWeight={400}
          >
            Pending Complainces
          </Typography>
          <Tooltip
            title="Pending Complainces"
            children={<HelpOutlineIcon fontSize="16.667px" />}
          ></Tooltip>
        </Box>

        <Typography sx={{ fontSize: 14 }} color="#2FB696" fontWeight={700}>
          {pending}
        </Typography>
      </Box>
      <Divider />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "1rem",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 0.2 }}>
         {moronCircle}
          <Typography
            sx={{ fontSize: "14px", paddingLeft: "0.5rem" }}
            fontWeight={400}
          >
            Upcoming Compliances
          </Typography>
          <Tooltip
            title="Upcoming Complainces"
            children={<HelpOutlineIcon fontSize="16.667px" />}
          ></Tooltip>
        </Box>

        <Typography sx={{ fontSize: 14 }} color="#2FB696" fontWeight={700}>
          {upcoming}
        </Typography>
      </Box>
      <Divider />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "1rem",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 0.2 }}>
         {orangeSquareIcon}
          <Typography
            sx={{ fontSize: "14px", paddingLeft: "0.5rem" }}
            fontWeight={400}
          >
            Due Tasks
          </Typography>
          <Tooltip
            title="Due Tasks"
            children={<HelpOutlineIcon fontSize="16.667px" />}
          ></Tooltip>
        </Box>

        <Typography sx={{ fontSize: 14 }} color="#DF8639" fontWeight={700}>
          {due}
        </Typography>
      </Box>

      <Box
        display="flex"
        justifyContent="space-between"
        padding="1rem"
        sx={{ backgroundColor: "#EFFBFF" }}
      >
        <Box display={"flex"} alignItems="center" gap={1}>
          <Typography sx={{ fontSize: 14 }}>Companies</Typography>
          <Typography sx={{ fontSize: 16, fontWeight: 700 }}>50</Typography>
        </Box>
        <Box display={"flex"} alignItems="center" gap={1}>
          <Typography sx={{ fontSize: 14 }}>Location</Typography>
          <Typography sx={{ fontSize: 16, fontWeight: 700 }}>3</Typography>
        </Box>
      </Box>
    </Card>
  );
};

export default GroupCard;
