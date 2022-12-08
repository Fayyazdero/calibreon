import * as React from "react";
import {
  AppBar,
  MenuItem,
  Menu,
  Toolbar,
  Box,
  IconButton,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import { useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import AdbIcon from "@mui/icons-material/Adb";
import Button from "../button";
import { LogoWrapper } from "./styles";
import Calibreon from "./../../assests/ci.png";

const pages = [
  { name: "Home", key: "/" },
  { name: "About Us", key: "/about" },
  { name: "Blog", key: "/blog" },
  { name: "Services", key: "/services" },
];

const Header = () => {
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState(null);

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
        <Toolbar disableGutters>
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
              {pages.map((page) => (
                <MenuItem key={page.key} onClick={() => onClickLink(page.key)}>
                  <Typography textAlign="center">{page.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex", justifyContent: "flex-end" },
            }}
          >
            {pages.map((page) => (
              <Button
                key={page.key}
                onClick={() => onClickLink(page.key)}
                sx={{ color: "#f54c0a", display: "block" }}
              >
                {page.name}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Button variant="contained" onClick={onClickContact}>
              Contact Us
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
