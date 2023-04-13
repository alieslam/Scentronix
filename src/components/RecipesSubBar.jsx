"use client";
import React, { useCallback, useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import { usePathname, useSearchParams } from "next/navigation";

export default function RecipesSubBar() {
  const [barSelection, setBarSelection] = useState("categories");
  const [pages] = useState(["categories", "resources"]);
  const searchParams = useSearchParams();
  const recipeNavParam = searchParams.get("recipeNavParam");
  const pathname = usePathname();
  // Get a new searchParams string by merging the current
  // searchParams with a provided key/value pair
  const createQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);
      return params.toString();
    },
    [searchParams]
  );

  return (
    <div className="bg-white max-w-full">
      <Toolbar
        sx={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="flex flex-shrink">
          {pages.map((page) => (
            <Button
              name={page}
              key={page}
              href={
                page === "categories"
                  ? "/recipes"
                  : `${pathname.substring(
                      0,
                      pathname.indexOf("/recipes") + 1
                    )}recipes/?${createQueryString("recipeNavParam", page)}`
              }
              onClick={(event) => {
                setBarSelection(event.currentTarget.name);
              }}
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
                    backgroundColor: "#8d6e63",
                    transform: "scaleX(0)",
                    transformOrigin: "left center",
                    transition: "transform 0.2s ease-in-out",
                  },
                  "&:hover::before": {
                    transform: "scaleX(1)",
                  },
                },
                (recipeNavParam && recipeNavParam === page) ||
                (!recipeNavParam && barSelection === page)
                  ? {
                      "&::after": {
                        content: '""',
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        width: "100%",
                        height: 2,
                        backgroundColor: "#8d6e63",
                        transform: "scaleX(1)",
                      },
                    }
                  : null,
              ]}
              color="secondary"
            >
              {page}
            </Button>
          ))}
        </div>
      </Toolbar>
    </div>
  );
}
