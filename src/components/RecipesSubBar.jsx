"use client";
import React from "react";

import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";

import { useSearchParams } from "next/navigation";

const pages = ["categories", "resources"];

export default function RecipesSubBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const searchParams = useSearchParams();
  const recipeNavParam = searchParams.get('recipeNavParam');

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
      <Container maxWidth="xs">
        <Toolbar disableGutters sx={{ justifyContent: 'center', alignItems: 'center'}}>
          <Box
            sx={{
              flexShrink: 1,
              display: { xs: "inline-flex"},
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                href={`/recipes/?recipeNavParam=${page}`}
                onClick={handleCloseNavMenu}
                sx={[
                  {
                    mx: 2,
                    display: "block",
                    fontSize: 14,
                    position: "relative",
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      width: "100%",
                      height: 2,
                      backgroundColor: "#f5eed4",
                      transform: "scaleX(0)",
                      transformOrigin: "left center",
                      transition: "transform 0.2s ease-in-out",
                    },
                    "&:hover::before": {
                      transform: "scaleX(1)",
                    },
                  },
                  recipeNavParam ===  page
                    ? {
                        "&::after": {
                          content: '""',
                          position: "absolute",
                          bottom: 0,
                          left: 0,
                          width: "100%",
                          height: 2,
                          backgroundColor: "#f5eed4",
                          transform: "scaleX(1)",
                        },
                      }
                    : null,
                ]}
                color="primary"
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
  );
}
