import React from "react";
import Status from "../../components/Status";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import {
  AppBar,
  Box,
  Button,
  Tab,
  Tabs,
  Typography,
  useTheme,
} from "@mui/material";
import LGU from "../../components/LGU";
import { colors } from "./colors";
import LegendTag from "../../components/LegendTag";
import contact_us from "../../assets/images/contact_us.png";

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box
          sx={{
            p: 3,
            width: "100%",
            height: "415px",

            backgroundColor: "#fff",
          }}
        >
          {children}
        </Box>
      )}
    </div>
  );
}

const DashboardPage = () => {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const calenderType = [
    {
      id: 1,
      text: "Govt. Due Dates",
      type: "gov",
    },
    {
      id: 2,
      text: "Tasks",
      type: "tasks",
    },
    {
      id: 3,
      text: "Extention",
      type: "extention",
    },
  ];

  const sampleLGU = [
    {
      id: 1,
      tag: "GST",
      description:
        "Due date for deposit of Tax deducted/collected for the month of July, 2021. However, all sum deducted/collection educted/collected for the month of July, 2021. However, all sum deducted/colletio",
      attachmentCount: 2,
      slug: "https://digitalhive.in/",
      date: "2 Aug 2021",
    },
    {
      id: 2,
      tag: "Income Tax",
      description:
        "Due date for deposit of Tax deducted/collected for the month of July, 2021. However, all sum deducted/collection educted/collected for the month of July, 2021. However, all sum deducted/colletio",
      attachmentCount: 2,
      slug: "https://digitalhive.in/",
      date: "2 Aug 2021",
    },
    {
      id: 3,
      tag: "Remittance",
      description:
        "Due date for deposit of Tax deducted/collected for the month of July, 2021. However, all sum deducted/collection educted/collected for the month of July, 2021. However, all sum deducted/colletio",
      attachmentCount: 2,
      slug: "https://digitalhive.in/",
      date: "2 Aug 2021",
    },
    {
      id: 4,
      tag: "Litigation",
      description:
        "Due date for deposit of Tax deducted/collected for the month of July, 2021. However, all sum deducted/collection educted/collected for the month of July, 2021. However, all sum deducted/colletio",
      attachmentCount: 2,
      slug: "https://digitalhive.in/",
      date: "2 Aug 2021",
    },
  ];

  // const handleChangeIndex = (index) => {
  //   setValue(index);
  // };

  console.log("theme", theme);

  return (
    <Box
      sx={{
        display: "flex",
        padding: 2,
        gap: 2,
        backgroundColor: "#E8F8FFB2",
        fontFamily: "fontFamily.Arial",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <Typography sx={{ fontWeight: 700, color: "#333", fontSize: "16px" }}>
          04 Aug 2021
        </Typography>
        <Box
          sx={{
            width: "100%",
            height: "329px",
            flexShrink: 0,
            backgroundColor: "#fff",
            fontFamily: "Arial",
            padding: 2,
            overflowY: "auto",
          }}
        >
          <Typography sx={{ fontWeight: 700, color: "#333", fontSize: "16px" }}>
            Latest Government Updates
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 1,
              justifyContent: "space-evenly",
            }}
          >
            {sampleLGU.map((data, i) => {
              return <LGU {...data} color={colors[i]} />;
            })}
          </Box>
        </Box>
        <Box>
          <AppBar position="static" sx={{ background: "transparent" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="full width tabs example"
              wrapped={true}
              indicatorColor="#fff"
            >
              <Tab
                sx={{ padding: 0 }}
                label={
                  <Box
                    sx={{
                      height: "112px",
                      padding: value === 0 ? "" : "0.5rem",
                      transition: "padding 0.3s",
                      transitionTimingFunction: "ease-in-out",
                      boxShadow: value === 0 ? "5px 5px 10px #aaaaaa" : "",
                    }}
                  >
                    <Status type="pending" text="Pending Tasks" count={0} />
                  </Box>
                }
                {...a11yProps(0)}
              ></Tab>
              <Tab
                sx={{ padding: 0 }}
                label={
                  <Box
                    sx={{
                      height: "112px",
                      padding: value === 1 ? "" : "0.5rem",
                      transition: "padding 0.3s",
                      transitionTimingFunction: "ease-in-out",
                      boxShadow: value === 1 ? "5px 5px 10px #aaaaaa" : "",
                    }}
                  >
                    <Status type="upcoming" text="Upcoming Tasks" count={0} />
                  </Box>
                }
                {...a11yProps(1)}
              ></Tab>

              <Tab
                sx={{ padding: 0 }}
                label={
                  <Box
                    sx={{
                      height: "112px",
                      padding: value === 2 ? "" : "0.5rem",
                      transition: "padding 0.3s",
                      transitionTimingFunction: "ease-in-out",
                      boxShadow: value === 2 ? "5px 5px 10px #aaaaaa" : "",
                    }}
                  >
                    <Status type="completed" text="Completed Tasks" count={0} />
                  </Box>
                }
                {...a11yProps(2)}
              ></Tab>
              <Tab
                sx={{ padding: 0 }}
                label={
                  <Box
                    sx={{
                      height: "112px",
                      padding: value === 3 ? "" : "0.5rem",
                      transition: "padding 0.3s",
                      transitionTimingFunction: "ease-in-out",
                      boxShadow: value === 3 ? "5px 5px 10px #aaaaaa" : "",
                    }}
                  >
                    <Status type="compliances" text="Complainces" count={0} />
                  </Box>
                }
                {...a11yProps(3)}
              ></Tab>
            </Tabs>
          </AppBar>

          <TabPanel value={value} index={0} dir={theme.direction}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
                alignItems: "center",
                justifyContent: "center",
                gap: 2,
              }}
            >
              <Typography
                sx={{
                  fontSize: "1.25rem",
                  fontWeight: 700,
                  fontFamily: "Arial",
                  lineHeight: "normal",
                  fontStyle: "normal",
                }}
              >
                No Tasks created
              </Typography>
              <Typography>
                Create task to file GST on time and efficiently. Also get
                customize mobile and desktop notification
              </Typography>
              <Button variant="contained">Create Task</Button>
            </Box>
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            Item Two
          </TabPanel>
          <TabPanel value={value} index={2} dir={theme.direction}>
            Item Three
          </TabPanel>
          <TabPanel value={value} index={3} dir={theme.direction}>
            Item Four
          </TabPanel>
        </Box>
      </Box>
      <Box sx={{ flexShrink: 0, backgroundColor: "#F2F2F2" }}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateCalendar />
        </LocalizationProvider>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            flexWrap: "wrap",
            gap: 1,
          }}
        >
          {calenderType.map((data) => {
            return <LegendTag {...data} />;
          })}
        </Box>
        <Box
          sx={{
            width: "325px",
            height: "450px",
            display: "inline-flex",
            padding: "24px",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "32px",
          }}
        >
          <Typography fontWeight={700}>Want to work in team?</Typography>
          <Typography fontWeight={400} fontSize={'14px'}>
            Assign Tasks to team members, track task, customized notification
            and much more.
          </Typography>
          <img
            src={contact_us}
            alt="contact us"
            width="218.112px"
            height="195.941px"
          ></img>
          <Button variant="contained">Contact Us</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardPage;
