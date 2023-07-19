import {
  Box,
  FormControl,
  TextField,
  Typography,
  FormLabel,
  Select,
  MenuItem,
  Button,
  FormHelperText,
} from "@mui/material";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { cities } from "../../../data/Cities";
import { states } from "../../../data/States";
import {
  emailValidation,
  nameValidation,
  numberValidation,
} from "../../../validations";
import UnsavedChangesPrompt from "../../../components/Unsaved";
import loader from "../../../assets/images/loading.gif";

const BasicInfo = () => {
  const [addressType, setAddressType] = useState("Registered Office");
  const [premises, setPremises] = useState("Owned");
  const [state, setState] = useState("Maharashtra");

  const filteredCity = cities.filter((city) => city.state === state);

  const [city, setCity] = useState("Mumbai");

  const initialFormState = {
    name: "",
    email: "",
    phone: "",
    addressType: addressType,
    premises: premises,
    state: state,
    city: city,
    address_line_1: "",
    address_line_2: "",
  };

  const handleAddressType = (event) => {
    setAddressType(event.target.value);
  };

  const handlePremisesType = (event) => {
    setPremises(event.target.value);
  };

  const handleState = (event) => {
    setState(event.target.value);
  };

  const handleCity = (event) => {
    setCity(event.target.value);
  };

  useEffect(() => {
    setCity(filteredCity[0]?.name);
  }, [filteredCity]);

  const [formData, setFormData] = useState(initialFormState);
  const [nameErrorMessage, setNameErrorMessage] = useState("");
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [mobileErrorMessage, setMobileErrorMessage] = useState("");

  const [isNameValid, setNameValid] = useState(true);
  const [isEmailValid, setEmailValid] = useState(true);
  const [isMobileValid, setMobileValid] = useState(true);
  const [showMessage, setShowMessage] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

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
    handleInputChange();
  };
  const handleNameValidity = () => {
    if (!formData.name || nameValidation().test(formData.name) === false) {
      setNameValid(false);
      setNameErrorMessage("Please enter a valid name");
    } else {
      setNameValid(true);
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

  const handleSubmit = () => {
    if (formData.name === "") {
      setNameValid(false);
      setNameErrorMessage("This field is Mandatory");
    }
    if (formData.email === "") {
      setEmailValid(false);
    }

    if (
      formData.name !== "" &&
      formData.email !== "" &&
      isEmailValid &&
      isNameValid
    ) {
      setIsLoading(true);
      setTimeout(() => {
        localStorage.setItem("BasicInfo", JSON.stringify(formData));
        setIsLoading(false);
        toast.success("Data Saved Successful");
      }, 2000);
    }
  };

  useEffect(() => {
    const data = localStorage.getItem("BasicInfo");
    if (data) {
      setFormData(JSON.parse(data));
    }
  }, []);

  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);

  const handleInputChange = () => {
    setHasUnsavedChanges(true);
  };

  // const handleSaveChanges = () => {
  //   setHasUnsavedChanges(false);

  // };

  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        display: "flex",
        flexDirection: "column",
        borderRadius: 1,
      }}
      p={2}
      gap={2}
      elevation={2}
    >
      <UnsavedChangesPrompt
        when={hasUnsavedChanges}
        message="Are you sure you want to leave this page without saving changes?"
      />
      <Box>
        <Typography fontWeight={500}>Basic Information</Typography>
        <Box sx={{ width: "100%", display: "flex" }} gap={3}>
          <FormControl
            sx={{
              width: "300px",
              display: "flex",
              flexDirection: "column",
              padding: "0.5rem 0",
            }}
          >
            <FormLabel>Client Group Name</FormLabel>
            <TextField
              id="client-group-name"
              onBlur={handleNameValidity}
              value={formData.name}
              onChange={handleForm("name")}
            />
            <Typography
              sx={{
                visibility: isNameValid ? "hidden" : "visible",
                color: "red",
              }}
            >
              {nameErrorMessage}
            </Typography>
          </FormControl>
          <FormControl
            sx={{
              width: "300px",
              display: "flex",
              flexDirection: "column",
              padding: "0.5rem 0",
            }}
          >
            <FormLabel>Email Id</FormLabel>
            <TextField
              id="emaild"
              value={formData.email}
              onBlur={handleEmailValidity}
              onChange={handleForm("email")}
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
          <FormControl
            sx={{
              width: "300px",
              display: "flex",
              flexDirection: "column",
              padding: "0.5rem 0",
            }}
          >
            <FormLabel>Mobile Number</FormLabel>
            <TextField
              id="mobile"
              value={formData.phone}
              onBlur={handleMobileValidity}
              onChange={handleForm("phone")}
              type="phone"
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
      </Box>
      <Box>
        <Typography fontWeight={500}>Address</Typography>
        <Box sx={{ width: "100%", display: "flex" }} gap={5}>
          <FormControl
            sx={{
              width: "300px",
              display: "flex",
              flexDirection: "column",
              padding: "0.5rem 0",
            }}
          >
            <FormLabel id="address-type-select-label">Address Type</FormLabel>
            <Select
              labelId="address-type-select-label"
              id="address-type-select"
              value={addressType}
              onChange={handleAddressType}
            >
              <MenuItem value={"Registered Office"}>Registered Office</MenuItem>
              <MenuItem value={"Registered Office2"}>
                Registered Office2
              </MenuItem>
              <MenuItem value={"Registered Office3"}>
                Registered Office3
              </MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ width: "300px" }}>
            <FormLabel id="premises-select-label">Premises</FormLabel>
            <Select
              labelId="premises-select-label"
              id="premises-select"
              value={premises}
              onChange={handlePremisesType}
            >
              <MenuItem value={"Owned"}>Owned</MenuItem>
              <MenuItem value={"Rental"}>Rental</MenuItem>
            </Select>
          </FormControl>

          <FormControl sx={{ flex: 2 }}>
            <FormLabel>Address Line 1</FormLabel>
            <TextField
              id="mobile"
              onChange={handleForm("address_line_1")}
              value={formData.address_line_1}
            />
          </FormControl>
        </Box>
      </Box>

      <Box sx={{ width: "100%", display: "flex" }} gap={5}>
        <FormControl sx={{ flex: 2 }}>
          <FormLabel>Address Line 2</FormLabel>
          <TextField
            id="mobile"
            onChange={handleForm("address_line_2")}
            value={formData.address_line_2}
          />
        </FormControl>
        <FormControl sx={{ width: "300px" }}>
          <FormLabel id="state-select-label">State</FormLabel>
          <Select
            labelId="state-select-label"
            id="state-select"
            value={state}
            onChange={handleState}
          >
            {states.map((state, index) => (
              <MenuItem key={index} value={state}>
                {state}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl sx={{ width: "300px" }}>
          <FormLabel id="city-select-label">City</FormLabel>
          <Select
            labelId="city-select-label"
            id="city-select"
            value={city}
            onChange={handleCity}
            disabled={filteredCity.length === 0}
          >
            {filteredCity.map((city) => (
              <MenuItem key={city.id} value={city.name}>
                {city.name}
              </MenuItem>
            ))}
          </Select>
          {filteredCity.length === 0 && (
            <FormHelperText id="city-helper-text">
              There are no cities available for selected state.
            </FormHelperText>
          )}
        </FormControl>
      </Box>

      <Box>
        <FormControl sx={{ width: "300px" }}>
          <FormLabel>Pin Code</FormLabel>
          <TextField
            id="client-group-name"
            onChange={handleForm("pin")}
            value={formData.pin}
          />
        </FormControl>
      </Box>
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
