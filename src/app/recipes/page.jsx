import RecipesCategories from "@/components/RecipesCategories";
import RecipesResources from "@/components/RecipesResources";
import RecipesSubBar from "@/components/RecipesSubBar";
import { notFound } from "next/navigation";
import React from "react";

async function getRecipesCategories() {
  const res = await fetch("http://localhost:3000/recipes.json", {
    cache: "no-store",
  }); // TODO: replace this dummy call with a regular fetching query
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return await res.json();
}

function getRecipesResources() {}

export default async function Recipes(props) {
  const { searchParams } = props;
  const categories = await getRecipesCategories();
  const resources = await getRecipesResources();
  if (
    !categories ||
    (searchParams.recipeNavParam === "resources" && !resources)
  ) {
    notFound();
  }
  return (
    <>
      {/*Sending sx object instead of className as there's a problem when clicking it re-renders the whole AppBar*/}
      {searchParams.recipeNavParam === "resources" ? (
        <RecipesResources name="recipes" />
      ) : (
        <RecipesCategories name="recipes" categories={categories} />
      )}
    </>
  );
}
