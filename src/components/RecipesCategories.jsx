
import React from "react";
import CategoriesList from "./CategoriesList";

export default function RecipesCategories(props) {
  const { categories } = props;

  return (
    <div className="flex flex-col pt-20 space-x-4 h-screen">
      <div className="mt-8">
        <CategoriesList items={categories} />
      </div>
    </div>
  );
}
