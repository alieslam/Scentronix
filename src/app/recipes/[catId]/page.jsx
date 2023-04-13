import RecipesGrid from "@/components/RecipesGrid";
import { notFound } from "next/navigation";
import React from "react";

async function getRecipes(recipeId) {
  const res = await fetch("http://localhost:3000/recipes.json", {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  const item = {
    ...data.find((itm) => itm.uid === recipeId),
  };
  return item.recipes;
}

export default async function RecipesList(props) {
  const { params } = props;
  const recipes = await getRecipes(params.catId);
  if (!recipes) {
    notFound();
  }
  return <RecipesGrid items={recipes} categoryId={params.catId} />;
}
