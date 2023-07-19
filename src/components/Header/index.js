import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import SettingsIcon from "@mui/icons-material/Settings";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";

import logo from "../../assets/images/logo.png";

const icons = [
  { name: "Search", icon: SearchIcon },
  { name: "Settings", icon: SettingsIcon },
];
const profileSettings = ["Profile", "Account", "Dashboard", "Logout"];
const configureSettings = [
  "Add legislation",
  "Add group",
  "Add company",
  "Add location",
  "Notifications settings",
];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [anchorConfigure, setAnchorConfigure] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleConfigureSettingsMenu = (event) => {
    setAnchorConfigure(event.currentTarget);
  };
  const handleConfigureSettingsCloseUserMenu = () => {
    setAnchorConfigure(null);
  };

  return (
    <AppBar
      position="fixed"
      anchor={"top"}
      sx={{
        backgroundColor: "#fff",
        color: "#000",
        zIndex: (theme) => theme.zIndex.drawer + 1,
        maxWidth: "1440px",
        left: 0,
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <img src={logo} alt="logo" width={"65px"}></img>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },

              letterSpacing: ".1rem",

              textDecoration: "none",
              fontSize: "26px",
              fontWeight: 700,
              color: "#ED1A3B",
              fontFamily: "Arial",
            }}
          >
            D'LittMan
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {icons.map((icon) => (
                <MenuItem key={icon.name} size="large" color="inherit">
                  <icon.icon />
                </MenuItem>
              ))}
              <MenuItem onClick={handleCloseNavMenu}>
                <Badge variant="dot" color="primary">
                  <NotificationsNoneIcon />
                </Badge>
              </MenuItem>
            </Menu>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <img src={logo} alt="logo" height={"70px"}></img>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontWeight: 700,
              letterSpacing: ".1rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            D'LittMan
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: {
                xs: "none",
                md: "flex",
                justifyContent: "flex-end",
                paddingRight: "1rem",
              },
            }}
          >
            <IconButton size="large" color="inherit">
              <SearchIcon />
            </IconButton>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open Settings">
                <IconButton
                  size="large"
                  color="inherit"
                  onClick={handleConfigureSettingsMenu}
                >
                  <SettingsIcon />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorConfigure}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorConfigure)}
                onClose={handleConfigureSettingsCloseUserMenu}
              >
                {configureSettings.map((setting) => (
                  <MenuItem
                    key={setting}
                    onClick={handleConfigureSettingsCloseUserMenu}
                  >
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <IconButton size="large" color="inherit">
              <Badge variant="dot" color="primary" overlap="circular">
                <NotificationsNoneIcon />
              </Badge>
            </IconButton>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open Profile Settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar
                  alt="Rohit Dhende"
                  src="/static/images/avatar/2.jpg"
                  variant="rounded"
                />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {profileSettings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
