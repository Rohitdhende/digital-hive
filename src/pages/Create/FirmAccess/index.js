import {
  Box,
  FormControl,
  TextField,
  Typography,
  FormLabel,
  Button,
  Container,
} from "@mui/material";

const FirmAccess = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        display: "flex",
        flexDirection: "column",
        borderRadius: 1,
      }}
      p={2}
      gap={3}
      elevation={2}
    >
      <Box sx={{ display: "flex", alignItems: "center" }} gap={2}>
        <FormControl>
          <FormLabel sx={{fontWeight:500}}>Assigned Firm</FormLabel>
          <TextField id="client-group-name" />
        </FormControl>
      </Box>
      <Typography fontWeight={500}>Firm Admin Users </Typography>

      <Container disableGutters>
        <Typography fontWeight={500}>Firm Admin #1 </Typography>
        <Box sx={{ width: "100%", display: "flex" }} gap={5}>
          <FormControl>
            <FormLabel>First Name</FormLabel>
            <TextField id="client-group-name" />
          </FormControl>
          <FormControl>
            <FormLabel>Last Name</FormLabel>
            <TextField id="client-group-name" />
          </FormControl>
          <FormControl>
            <FormLabel>Email Id</FormLabel>
            <TextField id="emaild" />
          </FormControl>
          <FormControl>
            <FormLabel>Mobile Number</FormLabel>
            <TextField id="mobile" />
          </FormControl>
        </Box>
      </Container>
      <Container disableGutters>
        <Typography fontWeight={500}>Firm Admin #1 </Typography>
        <Box sx={{ width: "100%", display: "flex" }} gap={5}>
          <FormControl>
            <FormLabel>First Name</FormLabel>
            <TextField id="client-group-name" />
          </FormControl>
          <FormControl>
            <FormLabel>Last Name</FormLabel>
            <TextField id="client-group-name" />
          </FormControl>
          <FormControl>
            <FormLabel>Email Id</FormLabel>
            <TextField id="emaild" />
          </FormControl>
          <FormControl>
            <FormLabel>Mobile Number</FormLabel>
            <TextField id="mobile" />
          </FormControl>
        </Box>
      </Container>

      <Button
        sx={{
          alignSelf: "flex-start",
          padding: "0.5rem 4rem",
          backgroundColor: "#a1bbcf",
          "&:hover": {
            backgroundColor: "#A9B6BE",
          },
        }}
        variant="contained"
      >
        Save
      </Button>
    </Box>
  );
};

export default FirmAccess;
