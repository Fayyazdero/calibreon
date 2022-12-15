import React, { useEffect } from "react";
import {
  AppBar,
  MenuItem,
  Menu,
  Box,
  IconButton,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import { useNavigate, useLocation } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import AdbIcon from "@mui/icons-material/Adb";
import Button from "../button";
import { LogoWrapper, ToolbarBox } from "./styles";
import Calibreon from "./../../assests/ci.png";

const pages = [
  { title: "Home", path: "/" },
  { title: "About Us", path: "/about" },
  { title: "Our Services", path: "/services" },
  { title: "Team", path: "/team" },
];

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [active, setActive] = React.useState("/");

  useEffect(() => {
    setActive(location.pathname);
  }, [location.pathname]);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const onClickLink = (e) => {
    navigate(e);
    setAnchorElNav(null);
  };
  const onClickContact = () => {
    navigate("/contact");
  };
  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "#fff", height: "92px", justifyContent: "center" }}
    >
      <Container>
        <ToolbarBox disableGutters>
          <LogoWrapper>
            <img src={Calibreon} alt="Calibreon" />
          </LogoWrapper>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none", color: "#f54c0a" },
            }}
          >
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
              {pages.map((item) => (
                <MenuItem key={item} onClick={() => onClickLink(item.path)}>
                  <Typography textAlign="center">{item.title}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex", justifyContent: "center" },
            }}
          >
            {pages.map((item) => (
              <Button
                key={item}
                onClick={() => onClickLink(item.path)}
                sx={{ my: 2, color: "#f54c0a", display: "block" }}
                className={item.path === active ? "active" : ""}
              >
                {item.title}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Button variant="contained" onClick={onClickContact}>
              Contact Us
            </Button>
          </Box>
        </ToolbarBox>
      </Container>
    </AppBar>
  );
};
export default Header;
