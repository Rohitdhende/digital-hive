import { Box } from "@mui/material";
import {
  moronCircle,
  greenCircleIcon,
  orangeSquareIcon,
} from "../../customIcons";

const LegendTag = (props) => {
  const { text, type } = props;
  return (
    <Box
      sx={{
        display: "flex",
        padding: "8px",
        alignItems: "center",
        gap: "10px",
        backgroundColor: "#fff",
        color: "#000",
        fontFamily: "Arial",
        fontSize: "14px",
        fontStyle: "normal",
        fontWeight: 400,
        lineHeight: "normal",
        width:'fit-content'
      }}
    >
      {type === "gov"
        ? greenCircleIcon
        : type === "tasks"
        ? orangeSquareIcon
        : moronCircle}{" "}
      {text}
    </Box>
  );
};

export default LegendTag;
