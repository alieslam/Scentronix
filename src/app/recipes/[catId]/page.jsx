import RecipesGrid from "@/components/RecipesGrid";
import React from "react";

async function getRecipes(recipeName) {
  const res = await fetch("http://localhost:3000/recipes.json", {
    cache: 'no-store'
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  const item = {
    ...data.find((itm) => itm.name === recipeName),
  };
  return item.recipes;
}

export default async function RecipesList(props) {
  const { params } = props;
  const recipes = await getRecipes(decodeURI(params.catId));
  return <RecipesGrid items={recipes} categoryId={params.catId} />;
}
