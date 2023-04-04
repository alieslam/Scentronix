"use client";
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
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { usePathname } from "next/navigation";

const pages = ["shop", "recipes", "blog", "about"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const pathName = usePathname();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="sticky" elevation={0} sx={{ height: 100 }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ my: 2 }}>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontWeight: 200,
              //   letterSpacing: '.3rem',
              color: "inherit",
              textDecoration: "none",
            }}
          >
            EveryHuman
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
              {pages.map((page) => (
                <MenuItem
                  key={page}
                  component="a"
                  href={`/${page === "shop" ? "" : page}`}
                  onClick={handleCloseNavMenu}
                >
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            component="a"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontWeight: 200,
              color: "inherit",
              textDecoration: "none",
            }}
          >
            EveryHuman
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex", justifyContent: "center" },
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                href={`/${page === "shop" ? "" : page}`}
                onClick={handleCloseNavMenu}
                sx={[
                  {
                    mx: 2,
                    my: 2,
                    display: "block",
                    fontSize: 16,
                    position: "relative",
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      width: "100%",
                      height: 2,
                      backgroundColor: "#8D6E63",
                      transform: "scaleX(0)",
                      transformOrigin: "left center",
                      transition: "transform 0.2s ease-in-out",
                    },
                    "&:hover::before": {
                      transform: "scaleX(1)",
                    },
                  },
                  pathName === "/" + (page === "shop" ? "" : page)
                    ? {
                        "&::after": {
                          content: '""',
                          position: "absolute",
                          bottom: 0,
                          left: 0,
                          width: "100%",
                          height: 2,
                          backgroundColor: "#8D6E63",
                          transform: "scaleX(1)",
                        },
                      }
                    : null,
                ]}
                color="inherit"
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
