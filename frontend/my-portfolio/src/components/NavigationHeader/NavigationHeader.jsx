import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Projects", path: "/projects" },
  { label: "Contact", path: "/contact" },
  { label: "Resume", path: "/resume" },
];

const NavigationHeader = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        My Portfolio
      </Typography>
      <List>
        {navItems.map(({ label, path }) => (
          <ListItem key={label} disablePadding>
            <ListItem
              button
              component={Link}
              to={path}
              sx={{ textAlign: "center" }}
            >
              <ListItemText primary={label} />
            </ListItem>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="sticky" sx={{ backgroundColor: "#673ab7" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            edge="start"
            aria-label="menu"
            onClick={handleDrawerToggle}
            sx={{ display: { sm: "none" }, mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{
              flexGrow: 1,
              textDecoration: "none",
              color: "inherit",
              fontWeight: "bold",
              fontFamily: "Roboto, sans-serif",
            }}
          >
            My Portfolio
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map(({ label, path }) => (
              <Button
                key={label}
                component={Link}
                to={path}
                sx={{
                  color: "#fff",
                  textTransform: "none",
                  fontWeight: 500,
                  fontSize: "1rem",
                }}
              >
                {label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: 240 },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default NavigationHeader;
