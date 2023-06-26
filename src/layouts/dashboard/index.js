import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Header from "../../components/Header";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { tabLinks } from "./config";
import { useLocation } from "react-router-dom";

const drawerWidth = 130;

export default function DashboardLayout() {
  const location = useLocation();

  const navigate = useNavigate();

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Header />
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />

        <List
          sx={{
            backgroundColor: "#292929",
            color: "#fff",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            padding: 0,
          }}
        >
          {tabLinks.map((link, index) => (
            <ListItem key={link.id} disablePadding>
              <ListItemButton
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  alignItems: "center",
                  backgroundColor: location.pathname.includes(link.path)
                    ? "#0185B2"
                    : "",
                  "&:hover": {
                    backgroundColor: "#51A8CA",
                  },
                  padding: "2rem 0",
                }}
                onClick={() => {
                  navigate(`/dashboard/${link.path}`);
                }}
              >
                <ListItemIcon
                  sx={{
                    width: "100%",
                    color: "white",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <link.icon />
                </ListItemIcon>
                <ListItemText primary={link.text} sx={{ color: "#fff" }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          backgroundColor: "#C6C1BF",
          minHeight: "100vh",
        }}
        className="rsd"
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
}
