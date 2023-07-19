import {
  Box,
  FormControl,
  TextField,
  Typography,
  FormLabel,
  Button,
  RadioGroup,
  FormControlLabel,
  Radio,
  Container,
} from "@mui/material";
import { useEffect, useState } from "react";
import {
  emailValidation,
  nameValidation,
  numberValidation,
} from "../../../validations";
// import { useUnsavedChanges } from "../../../customHooks/useUnsavedChanges";
import loader from "../../../assets/images/loading.gif";

const BasicInfo = () => {
  const [firstNameErrorMessage, setFirstNameErrorMessage] = useState("");
  const [lastNameErrorMessage, setLastNameErrorMessage] = useState("");
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [mobileErrorMessage, setMobileErrorMessage] = useState("");
  const [isFirstNameValid, setFirstNameValid] = useState(true);
  const [isLastNameValid, setLastNameValid] = useState(true);
  const [isEmailValid, setEmailValid] = useState(true);
  const [isMobileValid, setMobileValid] = useState(true);
  const [showMessage, setShowMessage] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({});
  // remove the schedule error message
  useEffect(() => {
    if (showMessage) {
      setTimeout(() => {
        setShowMessage(false);
      }, 5000);
    }
  }, [showMessage]);

  //Handle Form Data
  const handleForm = (prop) => (event) => {
    let val = event.target.value.trim();
    setFormData({ ...formData, [prop]: val });
  };
  const handleFirstNameValidity = () => {
    if (
      !formData.first_name ||
      nameValidation().test(formData.first_name) === false
    ) {
      setFirstNameValid(false);
      setFirstNameErrorMessage("Please enter a valid name");
    } else {
      setFirstNameValid(true);
    }
  };
  const handleLastNameValidity = () => {
    if (
      !formData.last_name ||
      nameValidation().test(formData.last_name) === false
    ) {
      setLastNameValid(false);
      setLastNameErrorMessage("Please enter a valid name");
    } else {
      setLastNameValid(true);
    }
  };
  const handleEmailValidity = () => {
    if (!formData.email || emailValidation().test(formData.email) === false) {
      setEmailValid(false);
      setEmailErrorMessage("Please enter a valid email address");
    } else {
      setEmailValid(true);
    }
  };

  const handleMobileValidity = () => {
    if (!formData.phone || numberValidation().test(formData.phone) === false) {
      setMobileValid(false);
      setMobileErrorMessage("Please enter a valid phone number");
    } else {
      setMobileValid(true);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formData.first_name === "") {
      setFirstNameValid(false);
      setFirstNameErrorMessage("This field is Mandatory");
    }
    if (formData.last_name === "") {
      setLastNameValid(false);
      setLastNameErrorMessage("This field is Mandatory");
    }
    if (formData.email === "") {
      setEmailValid(false);
    }

    if (
      formData.name !== "" &&
      formData.email !== "" &&
      isEmailValid &&
      isFirstNameValid &&
      isLastNameValid &&
      isMobileValid
    ) {
      setIsLoading(true);
      console.log("form", formData);
      localStorage.setItem("ClientAccess", JSON.stringify(formData));
    }
  };

  useEffect(() => {
    const data = localStorage.getItem("ClientAccess");
    if (data) {
      setFormData(JSON.parse(data));
    }
  }, []);

  // const [Prompt, setDirty, setPristine] = useUnsavedChanges();

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
        <Typography fontWeight={500}>Client Access </Typography>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="yes"
          name="radio-buttons-group"
          row
        >
          <FormControlLabel value="yes" control={<Radio />} label="Yes" />
          <FormControlLabel value="no" control={<Radio />} label="No" />
        </RadioGroup>
      </Box>
      <Typography fontWeight={500}>Client Admin Users </Typography>

      <Container disableGutters>
        <Typography fontWeight={500}>Client Admin #1 </Typography>
        <Box sx={{ width: "100%", display: "flex" }} gap={5}>
          <FormControl>
            <FormLabel>First Name</FormLabel>
            <TextField
              id="client-group-name"
              onChange={handleForm("first_name")}
              value={formData.first_name}
              onBlur={handleFirstNameValidity}
            />
            <Typography
              sx={{
                visibility: isFirstNameValid ? "hidden" : "visible",
                color: "red",
              }}
            >
              {firstNameErrorMessage}
            </Typography>
          </FormControl>
          <FormControl>
            <FormLabel>Last Name</FormLabel>
            <TextField
              id="client-group-name"
              onChange={handleForm("last_name")}
              value={formData.last_name}
              onBlur={handleLastNameValidity}
            />
            <Typography
              sx={{
                visibility: isLastNameValid ? "hidden" : "visible",
                color: "red",
              }}
            >
              {lastNameErrorMessage}
            </Typography>
          </FormControl>
          <FormControl>
            <FormLabel>Email Id</FormLabel>
            <TextField
              id="email"
              onChange={handleForm("email")}
              onBlur={handleEmailValidity}
            />
            <Typography
              sx={{
                visibility: isEmailValid ? "hidden" : "visible",
                color: "red",
              }}
            >
              {emailErrorMessage}
            </Typography>
          </FormControl>
          <FormControl>
            <FormLabel>Mobile Number</FormLabel>
            <TextField
              id="mobile"
              onChange={handleForm("phone")}
              onBlur={handleMobileValidity}
            />
            <Typography
              sx={{
                visibility: isMobileValid ? "hidden" : "visible",
                color: "red",
              }}
            >
              {mobileErrorMessage}
            </Typography>
          </FormControl>
        </Box>
      </Container>
      <Container disableGutters>
        <Typography fontWeight={500}>Client Admin #1 </Typography>
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

      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        {isLoading ? (
          <img src={loader} alt="loader" height="50px" width="50px" />
        ) : (
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
            onClick={() => {
              handleSubmit();
            }}
          >
            Save
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default BasicInfo;
