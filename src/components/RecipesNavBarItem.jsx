"use client";
import Link from "next/link";
import React from "react";
import { useSearchParams } from "next/navigation";

export default function RecipesNavBarItem({ title, param }) {
  const searchParams = useSearchParams();
  const recipeNavParam = searchParams.get('recipeNavParam');
  console.log(recipeNavParam);
  return (
    <div>
      <Link className={`font-semibold ${recipeNavParam && recipeNavParam ===param && "underline underline-offset-8 decoration-2 rounded-lg"}`} href={`/recipes/?recipeNavParam=${param}`}>
        <p className="text-sm">{title}</p>
      </Link>
    </div>
  );
}
