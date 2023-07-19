import { Box, IconButton, InputAdornment, Typography } from "@mui/material";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import GroupCard from "../../components/GroupCard";

const options = ["Option 1", "Option 2"];

const data = [
  {
    pending: 20,
    upcoming: 320,
    due: 4253,
  },
  {
    pending: 20,
    upcoming: 320,
    due: 4253,
  },
  {
    pending: 20,
    upcoming: 320,
    due: 4253,
  },
  {
    pending: 20,
    upcoming: 320,
    due: 4253,
  },
  {
    pending: 20,
    upcoming: 320,
    due: 4253,
  },
  {
    pending: 20,
    upcoming: 320,
    due: 4253,
  },
];

const TRPasGroup = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#F2F2F2",
        minHeight: "100vh",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",

          gap: 1,
        }}
        padding="1rem"
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 0.5,
          }}
        >
          <Typography fontWeight={700} fontSize={"14px"}>
            Group Selections
          </Typography>
          <HelpOutlineIcon fontSize="16.667px" />
        </Box>
        <Autocomplete
          freeSolo
          id="free-solo-2-demo"
          disableClearable
          options={options.map((option) => option)}
          sx={{ maxWidth: "381px" }}
          renderInput={(params) => (
            <TextField
              {...params}
              placeholder="Search Group"
              InputProps={{
                ...params.InputProps,
                type: "search",
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton>
                      <SearchIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          )}
        />
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            gap:3
          }}
        >
          {data.map((data) => (
            <GroupCard {...data} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default TRPasGroup;
